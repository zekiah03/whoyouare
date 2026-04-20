// =================== DATA ===================
const cards = [
  {
    id: 'opening',
    act: 0,
    type: 'opening',
    sigil: '々',
    title: '人 間 の 実 態',
    subtitle: '区別不能性アイデンティティ理論',
    lead: 'これは、読み物ではない。<br>あなたの回答が、<span class="rust">あなたの理論</span>をつくる。',
    startLabel: 'はじめる',
  },
  {
    id: 'act1-intro',
    act: 1,
    type: 'interlude',
    actNum: 'Act Ⅰ',
    actName: '診 断',
    text: 'あなたは今、何を信じているか。\n——まず、自分の輪郭を、自分で確かめる。',
  },
  {
    id: 'q1',
    act: 1,
    type: 'question',
    prompt: '昨日のあなたは、\nまだ、あなたですか。',
    choices: [
      { key: 'yes', label: 'はい', radical: 0, reply: '——では、十年前のあなたも、同じ理屈で、あなたですか。' },
      { key: 'no', label: 'いいえ', radical: 2, reply: '——では、今朝のあなたは。一時間前のあなたは。どこに、境界があるのか。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——その<span class="rust">"分からなさ"</span>が、この旅の、出発点だ。' },
    ],
  },
  {
    id: 'q2',
    act: 1,
    type: 'question',
    prompt: '十年前のあなたと、\n今のあなた。\n同じ人ですか。',
    choices: [
      { key: 'same', label: '同じ', radical: 0, reply: '——細胞は入れ替わり、記憶は書き換わった。それでも「同じ」と言える根拠は、どこに。' },
      { key: 'other', label: '別人', radical: 2, reply: '——では、あなたは十年で、<span class="rust">何度、死んだ</span>のか。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——境界は、もう、ぼやけ始めている。' },
    ],
  },
  {
    id: 'q3',
    act: 1,
    type: 'question',
    prompt: '眠っている間、\nあなたは存在していますか。',
    choices: [
      { key: 'yes', label: 'している', radical: 1, reply: '——意識のない時間にも、あなたは続くという。根拠は、身体の継続か、それともパターンの保存か。' },
      { key: 'no', label: '止まっている', radical: 2, reply: '——では毎朝、同じあなたが、本当に、再起動しているのか。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——夢は、<span class="rust">誰が、見ている</span>のか。' },
    ],
  },
  {
    id: 'q4',
    act: 1,
    type: 'question',
    prompt: 'あなたの本体は、\nどこにありますか。',
    choices: [
      { key: 'brain', label: '脳', radical: 1, reply: '——では、記憶を保存したクラウドは、あなたの一部になり得るか。' },
      { key: 'body', label: '身体全体', radical: 0, reply: '——移植された心臓は、誰のものか。切断された指は、まだあなたか。' },
      { key: 'pattern', label: '情報そのもの', radical: 2, reply: '——それは、<span class="rust">実装を問わない</span>、という宣言だ。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——境界は、まだ、見えていない。' },
    ],
  },
  {
    id: 'q5',
    act: 1,
    type: 'question',
    prompt: 'あなたの意志は、\nどこから来ますか。',
    choices: [
      { key: 'self', label: '私自身から', radical: 0, reply: '——では、"私自身"は、どこから生まれたか。' },
      { key: 'env', label: '環境と遺伝から', radical: 2, reply: '——ならば「あなたが決めた」と呼べる瞬間は、どこにも、ない。' },
      { key: 'both', label: '両方', radical: 1, reply: '——その境目は、どこで、誰が、引くのか。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——決定の根を、まだ、辿っていない。' },
    ],
  },
  {
    id: 'q6',
    act: 1,
    type: 'question',
    prompt: '感情は、あなたの\n欠陥ですか、機能ですか。',
    choices: [
      { key: 'bug', label: '欠陥', radical: 0, reply: '——では、感情を切除したあなたは、<span class="rust">まだ、あなたか</span>。' },
      { key: 'feature', label: '機能', radical: 2, reply: '——ならば感情は、あなたという計算の、装置である。' },
      { key: 'both', label: '両方', radical: 1, reply: '——使い道のある欠陥、と言ってもいい。' },
    ],
  },
  {
    id: 'q7',
    act: 1,
    type: 'question',
    prompt: '五歳のあなたを、\n本当に"覚えて"いますか。',
    choices: [
      { key: 'yes', label: '覚えている', radical: 0, reply: '——映像か、物語か。あなたが今もっているのは、どちらだ。' },
      { key: 'meta', label: '記憶の記憶だ', radical: 2, reply: '——五歳のあなたは、もう、あなたの中にはいない。<span class="rust">派生した別の人</span>の、断片だけがある。' },
      { key: 'no', label: '覚えていない', radical: 2, reply: '——では、五歳のあなたは、どこへ行ったのか。' },
    ],
  },
  {
    id: 'act1-end',
    act: 1,
    type: 'interlude',
    actNum: 'Act Ⅰ · 完',
    actName: '輪 郭 は 、 揺 れ て い る',
    text: 'あなたは、自分の輪郭を、\n自分で疑い始めた。\n\n——次は、試練。',
  },
  {
    id: 'wip',
    act: 2,
    type: 'interlude',
    actNum: 'Act Ⅱ — Ⅴ',
    actName: '準 備 中',
    text: 'この旅は、段階的に完成していく。\n\n——まもなく、直観を揺さぶる試練が、届く。',
  },
];

// =================== STATE ===================
const STORAGE_KEY = 'ningen-v3';
const defaultState = () => ({ idx: 0, answers: {}, radical: 0 });

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed.idx !== 'number' || !parsed.answers) return null;
    if (parsed.idx >= cards.length) parsed.idx = cards.length - 1;
    return parsed;
  } catch (e) { return null; }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

const state = loadState() || defaultState();

// =================== DOM ===================
const deck = document.getElementById('deck');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const navPrev = document.getElementById('nav-prev');
const navNext = document.getElementById('nav-next');

// =================== RENDER ===================
const actRoman = ['', 'Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ'];
const choiceMarks = ['a', 'b', 'c', 'd'];

function nl2br(s) { return s.replace(/\n/g, '<br>'); }

function render() {
  const card = cards[state.idx];
  deck.innerHTML = '';
  const el = document.createElement('article');
  el.className = `card card--${card.type}`;

  if (card.type === 'opening') {
    el.innerHTML = `
      <div class="sigil">${card.sigil}</div>
      <h1 class="title">${card.title}</h1>
      <p class="subtitle">${card.subtitle}</p>
      <p class="lead">${card.lead}</p>
      <button class="start" id="btn-start">${card.startLabel}</button>
    `;
  } else if (card.type === 'interlude') {
    el.innerHTML = `
      <p class="act-num">${card.actNum}</p>
      <h2 class="act-name">${card.actName}</h2>
      <p class="text">${card.text}</p>
    `;
  } else if (card.type === 'question') {
    const answered = state.answers[card.id];
    const qNum = questionNumber(card.id);
    const qTotal = questionTotal();
    el.innerHTML = `
      <p class="q-meta"><span class="q-meta-act">Act ${actRoman[card.act]}</span><span class="q-meta-sep">·</span>問 ${qNum} / ${qTotal}</p>
      <h2 class="prompt">${nl2br(card.prompt)}</h2>
      <div class="choices">
        ${card.choices.map((c, i) => {
          const isPicked = answered === c.key;
          const cls = isPicked ? 'picked' : (answered ? 'dim' : '');
          return `
            <button class="choice ${cls}" data-key="${c.key}" ${answered ? 'disabled' : ''}>
              <span class="choice-mark">${choiceMarks[i]}</span><span>${c.label}</span>
            </button>
          `;
        }).join('')}
      </div>
      ${answered ? `<div class="reply visible"><p>${card.choices.find(c => c.key === answered).reply}</p></div>` : ''}
    `;
  }

  deck.appendChild(el);
  requestAnimationFrame(() => el.classList.add('active'));

  if (card.type === 'opening') {
    const startBtn = el.querySelector('#btn-start');
    startBtn?.addEventListener('click', advance);
  } else if (card.type === 'question' && !state.answers[card.id]) {
    el.querySelectorAll('.choice').forEach(btn => {
      btn.addEventListener('click', () => pickChoice(card, btn.dataset.key));
    });
  }

  updateChrome(card);
}

function updateChrome(card) {
  const isFirst = state.idx === 0;
  const isLast = state.idx === cards.length - 1;
  const needsAnswer = card.type === 'question' && !state.answers[card.id];

  navPrev.disabled = isFirst;
  navPrev.style.visibility = card.type === 'opening' ? 'hidden' : 'visible';
  navNext.disabled = needsAnswer || isLast;
  navNext.style.visibility = card.type === 'opening' ? 'hidden' : 'visible';

  const total = cards.length;
  const pct = total > 1 ? (state.idx / (total - 1)) * 100 : 0;
  progressFill.style.width = `${pct}%`;
  progressText.textContent = `${String(state.idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}

function questionNumber(id) {
  let n = 0;
  for (const c of cards) {
    if (c.type === 'question') n++;
    if (c.id === id) return n;
  }
  return n;
}
function questionTotal() {
  return cards.filter(c => c.type === 'question').length;
}

// =================== ACTIONS ===================
function pickChoice(card, key) {
  state.answers[card.id] = key;
  const choice = card.choices.find(c => c.key === key);
  if (choice) state.radical += choice.radical || 0;
  saveState();
  render();
}
function advance() {
  if (state.idx < cards.length - 1) {
    state.idx++;
    saveState();
    render();
  }
}
function retreat() {
  if (state.idx > 0) {
    state.idx--;
    saveState();
    render();
  }
}

navPrev.addEventListener('click', retreat);
navNext.addEventListener('click', advance);

document.addEventListener('keydown', (e) => {
  if (e.target && (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')) return;
  if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
    if (!navNext.disabled) { e.preventDefault(); advance(); }
  } else if (e.key === 'ArrowLeft') {
    if (!navPrev.disabled) { e.preventDefault(); retreat(); }
  }
});

render();
