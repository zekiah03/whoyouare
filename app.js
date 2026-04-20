// ========== PARTICLE CANVAS ==========
(() => {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  const resize = () => {
    W = canvas.width = window.innerWidth * devicePixelRatio;
    H = canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  };
  resize();
  window.addEventListener('resize', resize);

  const N = 55;
  for (let i = 0; i < N; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.3,
      hue: Math.random() < 0.5 ? 186 : 330,
    });
  }

  const render = () => {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, 0.5)`;
      ctx.fill();
    }
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        const maxD = 130 * devicePixelRatio;
        if (d < maxD) {
          ctx.strokeStyle = `hsla(186, 100%, 60%, ${(1 - d / maxD) * 0.15})`;
          ctx.lineWidth = 0.5 * devicePixelRatio;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(render);
  };
  render();
})();

// ========== SIDE NAV / HUD ==========
(() => {
  const dots = document.querySelectorAll('.sn-dot');
  const sections = [...document.querySelectorAll('.screen')];
  const hudCh = document.getElementById('hud-chapter');
  const labels = ['00 / INTRO', '01 / PREMISE', '02 / TELEPORTER', '03 / SPLIT BRAIN', '04 / CONDITION', '05 / INDISTINGUISHABILITY', '06 / DEBATE', '07 / CONCLUSION'];

  const onScroll = () => {
    const mid = window.innerHeight * 0.4;
    let active = 0;
    sections.forEach((s, i) => {
      const rect = s.getBoundingClientRect();
      if (rect.top <= mid) active = i;
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
    if (hudCh && labels[active]) hudCh.textContent = labels[active];
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  dots.forEach(d => {
    d.addEventListener('click', e => {
      e.preventDefault();
      const t = document.querySelector(d.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();

// ========== CHOICE REVEALS (Exp 1 & 2) ==========
(() => {
  document.querySelectorAll('.choice-group').forEach(group => {
    const key = group.dataset.exp;
    const reveal = document.querySelector(`.reveal[data-reveal="${key}"]`);
    group.querySelectorAll('.choice').forEach(btn => {
      btn.addEventListener('click', () => {
        const picked = btn.dataset.choice;
        group.querySelectorAll('.choice').forEach(b => {
          b.classList.toggle('picked', b === btn);
          b.classList.toggle('dim', b !== btn);
        });
        if (reveal) {
          reveal.hidden = false;
          reveal.querySelectorAll('.reveal-card').forEach(c => {
            c.style.display = c.dataset.for === picked ? 'block' : 'none';
          });
        }
      });
    });
  });
})();

// ========== TURING TEST ==========
(() => {
  const container = document.getElementById('turing');
  const resultBox = document.getElementById('turing-result');
  const resetBtn = document.getElementById('turing-reset');
  if (!container) return;

  const rounds = [
    {
      prompt: '朝、目覚めた瞬間に感じたことを書いてください。',
      a: '窓の光がブラインドに縞を作っていた。まだ頭は起きておらず、昨夜の夢の残滓を探したが、もう消えていた。',
      b: '目を開けた瞬間、光が網膜に入り、夢の断片が言葉になる前に蒸発した。私は、失くしたものの形だけを覚えていた。',
      human: 'a',
    },
    {
      prompt: 'あなたが「死ぬのが怖い」と感じる瞬間を書いてください。',
      a: '夜、誰にも気づかれずに消える自分を想像したとき。記憶も習慣も誰にも引き継がれずに、ただ無音で終わる可能性が怖い。',
      b: '自分の記憶にアクセスできなくなること、それを誰も代替できないことを考えるとき。固有性の喪失が、最も恐ろしい。',
      human: 'b',
    },
    {
      prompt: '「自分」とは何か、一文で答えてください。',
      a: '自分とは、他人の視線と自分の記憶の、絶えない書き換え合いの場である。',
      b: '自分とは、過去の連続と、それを語り続ける今の声の、重なりのことだ。',
      human: 'a',
    },
  ];

  let current = 0;
  let correct = 0;
  const picks = [];

  const render = () => {
    container.innerHTML = '';
    rounds.forEach((r, idx) => {
      const el = document.createElement('div');
      el.className = 'turing-round' + (idx < current ? ' done' : '');
      if (idx > current) { el.style.display = 'none'; }
      el.innerHTML = `
        <div class="tr-head">
          <span>ROUND ${String(idx + 1).padStart(2, '0')} / ${String(rounds.length).padStart(2, '0')}</span>
          <span>人間を見抜け</span>
        </div>
        <p class="tr-prompt">お題：${r.prompt}</p>
        <div class="tr-pair">
          <button class="tr-opt" data-pick="a">
            <span class="tr-label">A</span>
            ${r.a}
          </button>
          <button class="tr-opt" data-pick="b">
            <span class="tr-label">B</span>
            ${r.b}
          </button>
        </div>
      `;
      container.appendChild(el);
      if (idx === current) {
        const picked = picks[idx];
        if (picked) {
          el.querySelectorAll('.tr-opt').forEach(o => {
            const isHuman = o.dataset.pick === r.human;
            const isPicked = o.dataset.pick === picked;
            if (isHuman) o.classList.add('correct');
            if (isPicked && !isHuman) o.classList.add('wrong');
            if (!isPicked && !isHuman) o.classList.add('dim');
          });
          const info = document.createElement('p');
          info.className = 'tr-reveal';
          info.textContent = `人間は ${r.human.toUpperCase()}。AIコピーは ${r.human === 'a' ? 'B' : 'A'}。`;
          el.appendChild(info);
        } else {
          el.querySelectorAll('.tr-opt').forEach(o => {
            o.addEventListener('click', () => {
              picks[idx] = o.dataset.pick;
              if (o.dataset.pick === r.human) correct++;
              setTimeout(() => {
                if (current < rounds.length - 1) {
                  current++;
                  render();
                } else {
                  render();
                  showResult();
                }
              }, 1400);
              render();
            });
          });
        }
      }
    });
  };

  const showResult = () => {
    document.getElementById('tr-score').textContent = `${correct} / ${rounds.length}`;
    const msg = document.getElementById('tr-message');
    if (correct === 0) msg.textContent = '完全に区別できなかった。あなたは、AIを人間と信じた。';
    else if (correct === rounds.length) msg.textContent = '今回は見抜けた。——では次の3問も、その次も、見抜き続けられるか？';
    else msg.textContent = 'ある発言は区別できた。ある発言は、できなかった。';
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

// ========== DEBATE VOTE ==========
(() => {
  const voteBar = document.querySelector('.vote-bar');
  if (!voteBar) return;
  const result = document.getElementById('vote-result');
  const messages = {
    '1': '——身体を選んだあなたへ。 では、その身体は本当に「同じ」か？ 細胞も、原子も、入れ替わり続けている。',
    '2': '——心理を選んだあなたへ。 では、分岐が起きたとき、複数の「あなた」のうち、本物はどれ？',
    '3': '——区別不能を選んだあなたへ。 おめでとう。あなたは「本人」という概念を手放した。身軽になったはずだ。',
  };
  voteBar.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      voteBar.querySelectorAll('button').forEach(x => x.classList.toggle('picked', x === b));
      result.textContent = messages[b.dataset.pick];
      result.hidden = false;
    });
  });
})();
