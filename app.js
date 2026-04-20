// =================== REVEAL ON SCROLL ===================
(() => {
  const targets = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  targets.forEach(t => io.observe(t));
})();

// =================== HUD CHAPTER TRACKER ===================
(() => {
  const pages = [...document.querySelectorAll('.page')];
  const numEl = document.getElementById('ch-num');
  if (!numEl || !pages.length) return;
  const romans = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ', 'Ⅶ', 'Ⅷ'];

  const visibility = new Map();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      visibility.set(e.target, e.intersectionRatio);
    }
    let bestIdx = 0;
    let bestRatio = -1;
    pages.forEach((p, i) => {
      const r = visibility.get(p) || 0;
      if (r > bestRatio) { bestRatio = r; bestIdx = i; }
    });
    numEl.textContent = romans[bestIdx] || romans[0];
  }, {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: '-40% 0px -40% 0px',
  });
  pages.forEach(p => io.observe(p));
})();

// =================== SPLIT BRAIN ===================
(() => {
  const row = document.querySelector('.choice-row[data-exp="sb"]');
  if (!row) return;
  const reveal = document.querySelector('.reveal-card[data-reveal="sb"]');
  row.querySelectorAll('.choice').forEach(btn => {
    btn.addEventListener('click', () => {
      const picked = btn.dataset.choice;
      row.querySelectorAll('.choice').forEach(b => {
        b.classList.toggle('picked', b === btn);
        b.classList.toggle('dim', b !== btn);
      });
      if (reveal) {
        reveal.hidden = false;
        reveal.querySelectorAll('.rv').forEach(c => {
          c.style.display = c.dataset.for === picked ? 'block' : 'none';
        });
      }
    });
  });
})();

// =================== TURING (INDISTINGUISHABILITY) ===================
(() => {
  const box = document.getElementById('turing');
  const resultBox = document.getElementById('turing-result');
  const resetBtn = document.getElementById('turing-reset');
  if (!box) return;

  const rounds = [
    {
      prompt: '朝、目覚めた瞬間に感じたこと。',
      a: '窓の光がブラインドに縞を作っていた。頭はまだ起きておらず、昨夜の夢の残りを探したが、もう、消えていた。',
      b: '目を開けた瞬間、光が網膜に入り、夢の断片は言葉になる前に蒸発した。私は、失くしたものの形だけを覚えていた。',
      human: 'a',
    },
    {
      prompt: '死ぬのが怖いと感じる瞬間。',
      a: '夜、誰にも気づかれずに消える自分を想像したとき。記憶も習慣も誰にも引き継がれずに、ただ無音で終わる可能性が、怖い。',
      b: '自分の記憶にアクセスできなくなること、それを誰も代替できないこと。固有性の喪失が、最も恐ろしい。',
      human: 'b',
    },
    {
      prompt: '「自分」とは何か、一文で。',
      a: '自分とは、他人の視線と自分の記憶の、絶えない書き換え合いの場である。',
      b: '自分とは、過去の連続と、それを語り続ける今の声の、重なりのこと。',
      human: 'a',
    },
  ];

  let current = 0;
  let correct = 0;
  const picks = [];

  const render = () => {
    box.innerHTML = '';
    rounds.forEach((r, idx) => {
      if (idx > current) return;
      const el = document.createElement('div');
      el.className = 't-round' + (idx < current ? ' done' : '');
      el.innerHTML = `
        <div class="t-head">
          <span>round ${String(idx + 1).padStart(2, '0')} / ${String(rounds.length).padStart(2, '0')}</span>
          <span>人間を、見抜け</span>
        </div>
        <p class="t-prompt">お題 ——&nbsp; ${r.prompt}</p>
        <div class="t-pair">
          <button class="t-opt" data-pick="a"><span class="t-label">A</span>${r.a}</button>
          <button class="t-opt" data-pick="b"><span class="t-label">B</span>${r.b}</button>
        </div>
      `;
      box.appendChild(el);

      if (idx === current) {
        const picked = picks[idx];
        if (picked) {
          el.querySelectorAll('.t-opt').forEach(o => {
            const isHuman = o.dataset.pick === r.human;
            const isPicked = o.dataset.pick === picked;
            if (isHuman && isPicked) o.classList.add('correct');
            else if (isHuman && !isPicked) o.classList.add('correct');
            else if (!isHuman && isPicked) o.classList.add('wrong');
            else o.classList.add('wrong');
            if (!isPicked && !isHuman) o.classList.add('dim');
          });
          const info = document.createElement('p');
          info.className = 't-reveal';
          info.textContent = `人間は ${r.human.toUpperCase()} — AIコピーは ${r.human === 'a' ? 'B' : 'A'}`;
          el.appendChild(info);
        } else {
          el.querySelectorAll('.t-opt').forEach(o => {
            o.addEventListener('click', () => {
              picks[idx] = o.dataset.pick;
              if (o.dataset.pick === r.human) correct++;
              render();
              setTimeout(() => {
                if (current < rounds.length - 1) {
                  current++;
                  render();
                } else {
                  showResult();
                }
              }, 2000);
            });
          });
        }
      }
    });
  };

  const showResult = () => {
    document.getElementById('tr-score').textContent = `${correct} / ${rounds.length}`;
    const msg = document.getElementById('tr-message');
    if (correct === 0) msg.textContent = '——一度も見抜けなかった。あなたは、AIを、人間として受け取った。';
    else if (correct === rounds.length) msg.textContent = '——今回は、見抜けた。では、次の三問も、その次も、見抜き続けられるか。';
    else msg.textContent = '——ある発言は区別できた。ある発言は、できなかった。';
    resultBox.hidden = false;
  };

  resetBtn?.addEventListener('click', () => {
    current = 0;
    correct = 0;
    picks.length = 0;
    resultBox.hidden = true;
    render();
  });

  render();
})();
