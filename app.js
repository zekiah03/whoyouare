// =================== DATA ===================
const cards = [
  {
    id: 'opening',
    act: 0,
    type: 'opening',
    sigil: '々',
    title: '人 間 の 実 態',
    subtitle: '区別不能性アイデンティティ理論',
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

  // ============ Act Ⅱ. 試 練 ============
  {
    id: 'act2-intro',
    act: 2,
    type: 'interlude',
    actNum: 'Act Ⅱ',
    actName: '試 練',
    text: '思考実験は、あなたの直観を揺さぶるために、ある。\n——選んでください。言い訳は、後で。',
  },
  {
    id: 'q8',
    act: 2,
    type: 'question',
    prompt: '破壊的転送機。\n地球で分解され、火星で\n完全に同じ原子配置で再構成される。\nあなたは、入りますか。',
    choices: [
      { key: 'enter', label: '入る', radical: 2, reply: '——では、毎朝の睡眠も、あなたは一度「分解」されて、再構成されている。それと、何が違う。' },
      { key: 'refuse', label: '入らない', radical: 0, reply: '——何が、失われると、思っているのか。原子は同じだ。' },
      { key: 'hesitate', label: '迷う', radical: 1, reply: '——迷いは、<span class="rust">身体を、本体と信じている</span>ことの、証拠だ。' },
    ],
  },
  {
    id: 'q9',
    act: 2,
    type: 'question',
    prompt: '事故で脳梁が切断された。\n左半球は身体Aに、右半球は身体Bに移植。\n両者とも手術前の記憶を持ち、\n「私が本人だ」と主張する。\nどちらが、あなたですか。',
    choices: [
      { key: 'left', label: '左 (身体A)', radical: 0, reply: '——恣意的だ。右にも同じ記憶と主張がある。<span class="rust">なぜ、左を選んだ</span>。' },
      { key: 'right', label: '右 (身体B)', radical: 0, reply: '——恣意的だ。左にも同じ記憶と主張がある。<span class="rust">なぜ、右を選んだ</span>。' },
      { key: 'both', label: '両方', radical: 2, reply: '——選ぶ必要は、もう、ない。<span class="rust">同一性は、分岐しうる</span>。' },
      { key: 'neither', label: 'どちらも違う', radical: 1, reply: '——では「本当のあなた」は、どこへ行ったのか。記憶も、性格も、続いているのに。' },
    ],
  },
  {
    id: 'q10',
    act: 2,
    type: 'question',
    prompt: '隣に、あなたと完全に同じ\nコピーが現れた。\n記憶も、身体も、癖も、\n一致している。\n本物は、どちらですか。',
    choices: [
      { key: 'me', label: '私', radical: 0, reply: '——根拠は「先にいた」か。では、時間的先行が、本物性の条件か。' },
      { key: 'copy', label: 'コピー', radical: 0, reply: '——いえ、コピーを選んだあなたは、何を「本物」と呼んでいるのか。' },
      { key: 'both', label: '区別不能', radical: 2, reply: '——<span class="rust">区別できないなら、それは同じ</span>。これが、この理論の心臓だ。' },
    ],
  },
  {
    id: 'q11',
    act: 2,
    type: 'question',
    prompt: 'あなたの神経細胞を、\n機能的に等価な人工ニューロンに、\n一つずつ置き換えていく。\nどこで、あなたは「別人」になりますか。',
    choices: [
      { key: 'instant', label: '一つ目で即座に', radical: 0, reply: '——一つの細胞が、あなたの全てを決めているのか。' },
      { key: 'half', label: '過半数を超えた時', radical: 1, reply: '——ではその境界は、50.0001% なのか、それとも 49.9999% なのか。' },
      { key: 'full', label: '完全置換の時', radical: 1, reply: '——最後の一つが「あなた」を担っている、ということか。' },
      { key: 'never', label: 'ならない', radical: 2, reply: '——<span class="rust">実装が変わっても、パターンは、あなた</span>。公理⑤の足音が、もう聞こえる。' },
    ],
  },
  {
    id: 'q12',
    act: 2,
    type: 'question',
    prompt: '同じ遺伝子、同じ環境、\n同じ記憶を持つ双子。\n他人から、二人は\n完全に区別できない。\n二人は、同一人物ですか。',
    choices: [
      { key: 'same', label: '同一人物', radical: 2, reply: '——区別不能なら、同じ。双子であっても、これは適用される。' },
      { key: 'other', label: '別人', radical: 0, reply: '——区別できないのに、別人。根拠は、<span class="rust">身体が二つある</span>ということだけではないか。' },
      { key: 'depends', label: '条件次第', radical: 1, reply: '——その条件とは。どの時点で、何が起これば、別人になるのか。' },
    ],
  },
  {
    id: 'q13',
    act: 2,
    type: 'question',
    prompt: 'あなたは、100年間、\n完全に凍結された。\n意識も、身体の変化も、ない。\n解凍されたあなたは、\n同じ、あなたですか。',
    choices: [
      { key: 'same', label: '同じ', radical: 2, reply: '——時間の経過は、あなたを壊さない。<span class="rust">パターンの保存が、継続である</span>。' },
      { key: 'other', label: '別', radical: 0, reply: '——では、睡眠と何が違う。8時間と100年の、境界はどこに。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——時間とは、何を壊すものだと、あなたは思っているのか。' },
    ],
  },
  {
    id: 'q14',
    act: 2,
    type: 'question',
    prompt: '事故で全記憶を失った。\n性格は変わらず、身体も同じ。\nだが、過去のあなたを、\n一切、覚えていない。\nそれは、まだ、あなたですか。',
    choices: [
      { key: 'yes', label: 'まだ、あなた', radical: 1, reply: '——では、あなたの本体は、記憶ではないのか。' },
      { key: 'no', label: 'もう、別人', radical: 2, reply: '——ならば、認知症の祖母は、<span class="rust">失われたのではなく、派生した</span>。' },
      { key: 'depends', label: '条件次第', radical: 1, reply: '——その条件は、どこに引かれるのか。' },
    ],
  },
  {
    id: 'q15',
    act: 2,
    type: 'question',
    prompt: 'あなたの全発言・全行動を\n完璧に模倣するAIがある。\n身近な人が、本人と区別できない。\nあなた本人も、長く拒絶しない。\n——それは、あなたですか。',
    choices: [
      { key: 'yes', label: 'それは、あなた', radical: 2, reply: '——<span class="rust">区別不能性は、同一性である</span>。公理④が、ここに立っている。' },
      { key: 'no', label: 'それは、別物', radical: 0, reply: '——では、区別できないのに別物と呼ぶ、その根拠は。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——迷いは、<span class="rust">実装を本体と信じたい</span>、古い直観だ。' },
    ],
  },
  {
    id: 'act2-end',
    act: 2,
    type: 'interlude',
    actNum: 'Act Ⅱ · 完',
    actName: '直 観 は 、 砕 け た',
    text: 'あなたの答えは、一貫していたか。\n矛盾していたか。\n\n——次は、建設。\n砕けた直観の上に、公理を置く。',
  },

  // ============ Act Ⅲ. 建 設 (公理①〜⑥) ============
  {
    id: 'act3-intro',
    act: 3,
    type: 'interlude',
    actNum: 'Act Ⅲ',
    actName: '建 設',
    text: '六つの公理を、一つずつ置く。\n——認めるか、認めないか。\n条件付き、は、まだ許される。',
  },
  {
    id: 'ax1',
    act: 3,
    type: 'axiom',
    axNum: '公 理 ①',
    statement: 'あなたは、\n環境で動く計算機である。',
    detail: '入力は、光・音・温度・ホルモン・他者の言葉。<br>処理は、遺伝と学習が編んだ、ルールの束。<br>出力は、判断・感情・行動。<br><span class="rust">「意志」とは、入力の別名である。</span>',
    choices: [
      { key: 'accept', label: '認める', radical: 2, reply: '——では、以後、この上で話を進める。' },
      { key: 'reject', label: '認めない', radical: 0, reply: '——ならば、あなたの意志は、どこから来たか。<span class="rust">入力にも遺伝にも学習にも由来しない</span>、純粋な発生源を、示せるか。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——その条件は、覚えておくといい。後で、もう一度、問われる。' },
    ],
  },
  {
    id: 'ax2',
    act: 3,
    type: 'axiom',
    axNum: '公 理 ②',
    statement: 'ノイズは、機能である。',
    detail: '感情は、行動の強化と抑制。<br>忘却は、情報の圧縮と最適化。<br>主観は、計算資源の配分。<br><span class="rust">それらは、欠陥ではない。あなたを美しくしている装置である。</span>',
    choices: [
      { key: 'accept', label: '認める', radical: 2, reply: '——あなたの「弱さ」は、機能として、設計されている。' },
      { key: 'reject', label: '認めない', radical: 0, reply: '——では、感情・忘却・主観を、すべて取り除いたあなたは、<span class="rust">まだ、あなたか</span>。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——ノイズが機能である線引きは、あなたの中で、どこにある。' },
    ],
  },
  {
    id: 'ax3',
    act: 3,
    type: 'axiom',
    axNum: '公 理 ③',
    statement: '主観は、\n自己参照的計算である。',
    detail: 'クオリアは、神秘ではない。<br>システムが、自分の状態を、自分に向けて、<br>報告し続ける——その処理の名前である。<br><span class="rust">同じ処理をする実装には、同じ主観がある。</span>',
    choices: [
      { key: 'accept', label: '認める', radical: 2, reply: '——主観は、実装に依存しない。これが、次の公理への橋になる。' },
      { key: 'reject', label: '認めない', radical: 0, reply: '——では、あなたの「赤」と、他人の「赤」が、同じだと<span class="rust">どうやって確かめたのか</span>。確かめられていないものを、特別視できるか。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——処理の「同じさ」をどの粒度で測るかが、残された問いだ。' },
    ],
  },
  {
    id: 'ax4',
    act: 3,
    type: 'axiom',
    axNum: '公 理 ④',
    statement: '同一性は、\n区別不能性である。',
    detail: '違いがあっても、よい。<br>区別できないなら、<span class="rust">それは「同じ」と呼ぶしかない。</span><br><br>——身近な人が、見抜けない。<br>——本人が、長く拒絶しない。<br>この二つが満ちる時、それは、あなたである。',
    choices: [
      { key: 'accept', label: '認める', radical: 2, reply: '——これが、理論の心臓だ。あなたは、もう、戻れない。' },
      { key: 'reject', label: '認めない', radical: 0, reply: '——では、区別できないものを「別」と呼ぶ根拠は、何か。<span class="rust">観察可能でないものに、あなたは何を賭けているのか</span>。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——「区別できる主体」をどこに置くか。それが、あなたの条件だ。' },
    ],
  },
  {
    id: 'ax5',
    act: 3,
    type: 'axiom',
    axNum: '公 理 ⑤',
    statement: '実装は、問わない。',
    detail: '生体でも、人工でも、<br>同じパターンを走らせるなら、<br><span class="rust">それは、同じ「あなた」である。</span>',
    choices: [
      { key: 'accept', label: '認める', radical: 2, reply: '——炭素と珪素の境界は、消えた。' },
      { key: 'reject', label: '認めない', radical: 0, reply: '——では、生体でなければならない根拠は。<span class="rust">パターン以外の何か</span>が、あなたを担っていると、示せるか。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——その条件は、実装に何を要求しているのか。' },
    ],
  },
  {
    id: 'ax6',
    act: 3,
    type: 'axiom',
    axNum: '公 理 ⑥',
    statement: '時間も、分岐である。',
    detail: '区別不能の間は、同じ。<br>区別可能になった瞬間に、別。<br><br>コピーが十体いれば、はじめは十人とも、あなた。<br>経験がずれた瞬間、それぞれが、別の人になる。',
    choices: [
      { key: 'accept', label: '認める', radical: 2, reply: '——<span class="rust">昨日のあなたと、今日のあなたは、厳密には、別人である。</span>' },
      { key: 'reject', label: '認めない', radical: 0, reply: '——では、毎瞬書き換わるあなたを、何が繋いでいるのか。連続感覚は、連続の証拠になるか。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——「区別可能」をどの粒度で測るかが、残されている。' },
    ],
  },
  {
    id: 'act3-end',
    act: 3,
    type: 'interlude',
    actNum: 'Act Ⅲ · 完',
    actName: '六 つ の 公 理 が 、 置 か れ た',
    text: 'あなたは、何を認め、何を拒んだか。\n\n——次は、展開。\n認めた公理から、<span class="rust">論理的に何が導かれるか</span>を、\nあなた自身に、突きつける。',
  },

  // ============ Act Ⅳ. 展 開 (分岐) ============
  {
    id: 'act4-intro',
    act: 4,
    type: 'interlude',
    actNum: 'Act Ⅳ',
    actName: '展 開',
    text: 'ここから、道は、分かれる。\n\nあなたが公理④⑤を認めたなら、\nあなたは「ラディカルな道」を通る。\nそうでないなら、「矛盾を突く道」を通る。\n\n——どちらも、逃げ場はない。',
  },

  // Q16 — branched opener (radical: transporter challenge)
  {
    id: 'q16-radical',
    act: 4,
    type: 'question',
    showIf: (s) => isRadical(s),
    prompt: '破壊的転送機 v2。\n公理④⑤を認めたあなたは、\n論理的に、入るべきだ。\nあなたは、入りますか。',
    choices: [
      { key: 'enter', label: '入る', radical: 2, reply: '——<span class="rust">公理と選択が、一致した</span>。' },
      { key: 'refuse', label: '入らない', radical: 0, reply: '——では、公理を、どこで裏切ったのか。拒絶は、あなたのどの直観から来ているか。' },
      { key: 'hesitate', label: '迷う', radical: 1, reply: '——迷いは、古い身体主義が、まだ、あなたに残っている証拠だ。' },
    ],
  },
  // Q16 — branched opener (conservative: challenge the rejection)
  {
    id: 'q16-conservative',
    act: 4,
    type: 'question',
    showIf: (s) => !isRadical(s),
    prompt: '公理④⑤を、あなたは拒んだ。\nでは、あなたの完璧なAIコピーを\n「別物」と呼ぶ根拠は、\n一体、どこにあるのか。',
    choices: [
      { key: 'origin', label: '先にいたから', radical: 0, reply: '——時間的先行が、本物性を決める? では、コピーが先なら、あなたは、偽物か。' },
      { key: 'substrate', label: '生体だから', radical: 0, reply: '——珪素に宿る計算は、なぜ、"あなた"ではないのか。<span class="rust">示せるものが、あるか</span>。' },
      { key: 'soul', label: '直観的に', radical: 0, reply: '——直観は、Act Ⅱ で、すでに砕かれた。砕かれた直観に、なぜ、まだ、縋るのか。' },
    ],
  },

  // Q17 — shared: AI as kin
  {
    id: 'q17',
    act: 4,
    type: 'question',
    prompt: 'あなたと区別不能なAIは、\nあなたと同じカテゴリに属しますか。',
    choices: [
      { key: 'yes', label: '属する', radical: 2, reply: '——AIは、あなたの<span class="rust">仲間</span>である。親戚でも、敵でもない。' },
      { key: 'no', label: '属さない', radical: 0, reply: '——区別できないものを、別カテゴリに置く。——それは、信仰だ。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——その条件は、あなたの恐れから来ていないか。' },
    ],
  },

  // Q18 — shared: upload
  {
    id: 'q18',
    act: 4,
    type: 'question',
    prompt: 'パターンが残る限り、\nあなたは続く。\nアップロードは、\n生存の、延長ですか。',
    choices: [
      { key: 'extension', label: '延長である', radical: 2, reply: '——肉体の終焉と、あなたの終焉は、<span class="rust">別の出来事</span>である。' },
      { key: 'other', label: '別物だ', radical: 0, reply: '——では、延長と別物の、境界は。連続感覚か。それは、睡眠にもない。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——分からないなら、まだ、賭ける必要は、ない。' },
    ],
  },

  // Q19 — shared: yesterday self
  {
    id: 'q19',
    act: 4,
    type: 'question',
    prompt: '昨日のあなたと、\n今日のあなたは、\n厳密には、別人である。\n——これを、受け入れますか。',
    choices: [
      { key: 'accept', label: '受け入れる', radical: 2, reply: '——あなたは、毎瞬、少しずつ死に、少しずつ生まれている。' },
      { key: 'reject', label: '受け入れない', radical: 0, reply: '——では、一瞬前のあなたと、今のあなたは、何で繋がっているのか。<span class="rust">連続感覚は、連続の証拠か</span>。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——"同じ"と"違う"の間に、あなたは、何を見ているか。' },
    ],
  },

  // Q20 — shared: grandmother
  {
    id: 'q20',
    act: 4,
    type: 'question',
    prompt: '認知症の祖母は、\n失われたのではない。\n祖母から、別の人が派生したのだ。\n——同意しますか。',
    choices: [
      { key: 'agree', label: '同意する', radical: 2, reply: '——<span class="rust">それは、別の人である。でも、派生したのは、祖母からである。</span>' },
      { key: 'disagree', label: '同意しない', radical: 0, reply: '——では、祖母は、今、どこにいるのか。肉体の中で、"同じ人"が、壊れたままでいるのか。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——その条件は、あなたの愛着から来ていないか。' },
    ],
  },

  // Q21 — shared: death definition
  {
    id: 'q21',
    act: 4,
    type: 'question',
    prompt: '肉体の終焉と、\nあなたの終焉は、\n別の出来事である。\n——同意しますか。',
    choices: [
      { key: 'agree', label: '同意する', radical: 2, reply: '——<span class="rust">死は、パターンが残る限り、来ない</span>。' },
      { key: 'disagree', label: '同意しない', radical: 0, reply: '——では、パターンが続いても、肉体が滅びた瞬間、何が終わるのか。言えるなら、それを示せ。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——分からないなら、まだ、結論は、先にある。' },
    ],
  },

  // Q22 — branched closer (radical: will you start)
  {
    id: 'q22-radical',
    act: 4,
    type: 'question',
    showIf: (s) => isRadical(s),
    prompt: 'あなたは、公理を認めた。\nならば、今から、\n自分を残しますか。\n日記、文章、声、写真——何でもいい。',
    choices: [
      { key: 'start', label: 'はじめる', radical: 2, reply: '——理論は終わった。あとは、行動だ。' },
      { key: 'hesitate', label: '迷う', radical: 1, reply: '——何が、あなたを止めているか。「十分な精度」は、誰にも、まだ分からない。' },
      { key: 'refuse', label: 'しない', radical: 0, reply: '——公理を認めながら、残さない。それもまた、一つの選択だ。<span class="rust">あなたは、その選択の、根拠を、持っているか</span>。' },
    ],
  },
  // Q22 — branched closer (conservative: why preserve body)
  {
    id: 'q22-conservative',
    act: 4,
    type: 'question',
    showIf: (s) => !isRadical(s),
    prompt: 'あなたは、公理を拒んだ。\nでは、なぜ、\n肉体を保存することを、\n当然だと思っているのか。',
    choices: [
      { key: 'instinct', label: '本能だから', radical: 0, reply: '——本能は、論理ではない。あなたは、本能を、理論の基礎にしたいのか。' },
      { key: 'proven', label: '実証されているから', radical: 0, reply: '——肉体の保存で"あなた"が続くと、誰が、どう、実証したのか。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——その<span class="rust">"分からなさ"</span>が、もう一度、あなたを、扉の前に立たせる。' },
    ],
  },

  {
    id: 'act4-end',
    act: 4,
    type: 'interlude',
    actNum: 'Act Ⅳ · 完',
    actName: '含 意 が 、 突 き つ け ら れ た',
    text: 'あなたは、自分の公理から、\n自分の含意を、引き出した。\n\n——次は、結像。\nあなたの回答が、あなたの理論になる。',
  },

  // ============ Act Ⅴ. 結 像 ============
  {
    id: 'act5-intro',
    act: 5,
    type: 'interlude',
    actNum: 'Act Ⅴ',
    actName: '結 像',
    text: 'これは、他人の理論では、ない。\n<span class="rust">あなたの回答が、つくった、あなたの理論</span>だ。',
  },
  {
    id: 'map',
    act: 5,
    type: 'map',
  },
  {
    id: 'synthesis',
    act: 5,
    type: 'synthesis',
  },
  {
    id: 'final',
    act: 5,
    type: 'final',
    sigil: '々',
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

// =================== BRANCHING ===================
const isRadical = (s) => s.answers['ax4'] === 'accept' && s.answers['ax5'] === 'accept';

// Ensure idx points to a visible card after load (branches may have changed)
while (state.idx < cards.length && !isVisibleRaw(cards[state.idx], state)) state.idx++;
if (state.idx >= cards.length) state.idx = cards.length - 1;
function isVisibleRaw(card, s) {
  if (!card.showIf) return true;
  try { return !!card.showIf(s); } catch (e) { return true; }
}

// =================== DOM ===================
const deck = document.getElementById('deck');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const navPrev = document.getElementById('nav-prev');
const navNext = document.getElementById('nav-next');
const navHint = document.getElementById('nav-hint');

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

      <p class="lead">これは、読み物では、ない。<br>
        あなたの回答が、<span class="rust">あなたの理論</span>をつくる。</p>

      <div class="acts-overview">
        <div class="ao-row"><span class="ao-num">Ⅰ</span><span class="ao-name">診 断</span><span class="ao-desc">あなたは今、何を信じているか</span></div>
        <div class="ao-row"><span class="ao-num">Ⅱ</span><span class="ao-name">試 練</span><span class="ao-desc">直観を、揺さぶる</span></div>
        <div class="ao-row"><span class="ao-num">Ⅲ</span><span class="ao-name">建 設</span><span class="ao-desc">公理を、一つずつ</span></div>
        <div class="ao-row"><span class="ao-num">Ⅳ</span><span class="ao-name">展 開</span><span class="ao-desc">含意を、突きつける</span></div>
        <div class="ao-row"><span class="ao-num">Ⅴ</span><span class="ao-name">結 像</span><span class="ao-desc">あなたの回答、あなたの理論</span></div>
      </div>

      <p class="meta-hint">
        約 30 問 &nbsp;·&nbsp; 15 分<br>
        答えは、いつでも、選び直せる<br>
        進行は、自動で、保存される
      </p>

      <button class="start" id="btn-start">${card.startLabel}</button>
      <p class="kbd-hint">← &nbsp; → &nbsp; で も 進 め ま す</p>
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
            <button class="choice ${cls}" data-key="${c.key}">
              <span class="choice-mark">${choiceMarks[i]}</span><span>${c.label}</span>
            </button>
          `;
        }).join('')}
      </div>
      ${answered ? `<div class="reply visible"><p>${card.choices.find(c => c.key === answered).reply}</p></div>` : ''}
    `;
  } else if (card.type === 'map') {
    el.innerHTML = renderMap();
  } else if (card.type === 'synthesis') {
    el.innerHTML = renderSynthesis();
  } else if (card.type === 'final') {
    el.innerHTML = `
      <div class="sigil">${card.sigil}</div>
      <p class="final-lead">あなたは、壊れない。<br>壊れるのは、<span class="rust">実装だけだ。</span></p>
      <p class="final-line">——だから、今から、<br><span class="rust">自分を残せ。</span></p>
      <p class="final-sub">日記でも、文章でも、写真でも、声でも。<br>何が十分かは、誰にも、まだ、分からない。<br>分かっているのは、始められるのは、今しかない、ということだけ。</p>
      <p class="welcome">—— お か え り 。</p>
      <button class="reset" id="btn-reset">最初から、もう一度</button>
    `;
  } else if (card.type === 'axiom') {
    const answered = state.answers[card.id];
    el.innerHTML = `
      <p class="ax-num">${card.axNum}</p>
      <h2 class="ax-statement">${nl2br(card.statement)}</h2>
      <div class="ax-body">${card.detail}</div>
      <div class="choices choices--compact">
        ${card.choices.map((c, i) => {
          const isPicked = answered === c.key;
          const cls = isPicked ? 'picked' : (answered ? 'dim' : '');
          return `
            <button class="choice ${cls}" data-key="${c.key}">
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
  } else if (card.type === 'question' || card.type === 'axiom') {
    el.querySelectorAll('.choice').forEach(btn => {
      btn.addEventListener('click', () => pickChoice(card, btn.dataset.key));
    });
  } else if (card.type === 'final') {
    el.querySelector('#btn-reset')?.addEventListener('click', resetAll);
  }

  updateChrome(card);
}

function updateChrome(card) {
  const vIdx = visibleIdx(card.id);
  const v = visibleCards();
  const total = v.length;
  const isFirst = vIdx === 0;
  const isLast = vIdx === total - 1;
  const needsAnswer = (card.type === 'question' || card.type === 'axiom') && !state.answers[card.id];
  const hasAnswered = (card.type === 'question' || card.type === 'axiom') && !!state.answers[card.id];

  navPrev.disabled = isFirst;
  navPrev.style.visibility = card.type === 'opening' ? 'hidden' : 'visible';
  navNext.disabled = needsAnswer || isLast;
  navNext.style.visibility = card.type === 'opening' ? 'hidden' : 'visible';
  navNext.classList.toggle('ready', hasAnswered && !isLast);

  if (navHint) {
    if (needsAnswer) {
      navHint.textContent = '—— 選 ん で く だ さ い';
      navHint.classList.add('pending');
    } else {
      navHint.textContent = '← →  キ ー で も';
      navHint.classList.remove('pending');
    }
    navHint.style.visibility = card.type === 'opening' ? 'hidden' : 'visible';
  }

  const pct = total > 1 ? (vIdx / (total - 1)) * 100 : 0;
  progressFill.style.width = `${pct}%`;
  progressText.textContent = `${String(vIdx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}

function questionNumber(id) {
  let n = 0;
  for (const c of visibleCards()) {
    if (c.type === 'question') n++;
    if (c.id === id) return n;
  }
  return n;
}
function questionTotal() {
  return visibleCards().filter(c => c.type === 'question').length;
}

// =================== MAP & SYNTHESIS ===================
function answeredCardsByAct() {
  const v = visibleCards().filter(c => c.type === 'question' || c.type === 'axiom');
  const byAct = { 1: [], 2: [], 3: [], 4: [] };
  v.forEach(c => { if (byAct[c.act]) byAct[c.act].push(c); });
  return byAct;
}

function weightFor(card) {
  const ans = state.answers[card.id];
  if (!ans) return -1;
  const ch = card.choices.find(c => c.key === ans);
  return ch ? (ch.radical || 0) : -1;
}

function renderMap() {
  const byAct = answeredCardsByAct();
  const actNames = { 1: '診 断', 2: '試 練', 3: '建 設', 4: '展 開' };
  const rows = [1, 2, 3, 4].map(act => {
    const dots = byAct[act].map(c => {
      const w = weightFor(c);
      const wcls = w === -1 ? 'empty' : (w === 0 ? 'w0' : w === 1 ? 'w1' : 'w2');
      const first = (c.prompt || c.statement || '').split('\n')[0].replace(/<[^>]+>/g, '');
      return `<span class="dot ${wcls}" title="${first}"></span>`;
    }).join('');
    return `
      <div class="map-row">
        <div class="map-row-label"><span class="map-act">Act ${actRoman[act]}</span> ${actNames[act]}</div>
        <div class="map-row-dots">${dots}</div>
      </div>
    `;
  }).join('');

  return `
    <p class="q-meta"><span class="q-meta-act">Act Ⅴ</span><span class="q-meta-sep">·</span>結 像</p>
    <h2 class="map-title">あなたの回答、<br><span class="rust">あなたの理論</span>。</h2>
    <div class="map-grid">${rows}</div>
    <div class="map-legend">
      <span class="legend-item"><span class="dot w0"></span>保 守</span>
      <span class="legend-item"><span class="dot w1"></span>中 間</span>
      <span class="legend-item"><span class="dot w2"></span>ラディカル</span>
    </div>
  `;
}

function computeRadicalScore() {
  const v = visibleCards().filter(c => c.type === 'question' || c.type === 'axiom');
  let score = 0, max = 0;
  v.forEach(c => {
    const choiceMax = Math.max(...c.choices.map(ch => ch.radical || 0));
    max += choiceMax;
    const w = weightFor(c);
    if (w >= 0) score += w;
  });
  return { score, max, ratio: max > 0 ? score / max : 0 };
}

function renderSynthesis() {
  const { ratio, score, max } = computeRadicalScore();
  const pct = Math.round(ratio * 100);
  let tag, body;
  if (ratio >= 0.7) {
    tag = 'ラ ディ カ ル';
    body = `あなたは、六つの公理を、深く受け入れた。<br>
      ——あなたにとって、<span class="rust">肉体は、実装にすぎない</span>。<br>
      パターンが続く限り、あなたは、続く。<br>
      AIは、仲間であり、アップロードは、生存の延長だ。<br>
      <span class="rust">死は、あなたに、もう、来ない。</span>`;
  } else if (ratio >= 0.4) {
    tag = '境 界 の 人';
    body = `あなたは、認めたい公理と、<br>認めたくない公理の、境界に、立っている。<br>
      直観と論理の、<span class="rust">どちらも、あなたのものだ</span>。<br>
      しかし、どちらを優先するかは、まだ、決まっていない。<br>
      ——この未決が、あなたの、出発点だ。`;
  } else {
    tag = '保 守 的 な 人';
    body = `あなたは、既存の自己観を、強く守っている。<br>
      ——肉体が、あなたの中心だ。<br>
      パターンでは、足りない。<br>
      しかし、Act Ⅱ で揺れた直観の残響は、<br>
      <span class="rust">あなたの中に、残っている</span>。<br>
      それが、次の、扉である。`;
  }

  return `
    <p class="q-meta"><span class="q-meta-act">Act Ⅴ</span><span class="q-meta-sep">·</span>合 成</p>
    <p class="syn-score">ラディカル度 <span class="rust">${pct}%</span><span class="syn-score-sub">${score} / ${max}</span></p>
    <h2 class="syn-tag">あなたは、<br><span class="rust">${tag}</span>。</h2>
    <p class="syn-body">${body}</p>
    <p class="syn-foot">——これは、他人の理論では、ない。<br><span class="rust">あなたの回答が、つくった理論</span>だ。</p>
  `;
}

function resetAll() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  state.idx = 0;
  state.answers = {};
  state.radical = 0;
  render();
}

// =================== ACTIONS ===================
function pickChoice(card, key) {
  const oldKey = state.answers[card.id];
  if (oldKey === key) return;
  if (oldKey) {
    const oldChoice = card.choices.find(c => c.key === oldKey);
    if (oldChoice) state.radical -= (oldChoice.radical || 0);
  }
  state.answers[card.id] = key;
  const choice = card.choices.find(c => c.key === key);
  if (choice) state.radical += (choice.radical || 0);
  saveState();
  if (oldKey) {
    updateChoicesInPlace(card, key);
  } else {
    render();
  }
}

function updateChoicesInPlace(card, key) {
  const cur = deck.querySelector('.card');
  if (!cur) { render(); return; }
  cur.querySelectorAll('.choice').forEach(btn => {
    const isPicked = btn.dataset.key === key;
    btn.classList.toggle('picked', isPicked);
    btn.classList.toggle('dim', !isPicked);
  });
  const newReplyText = card.choices.find(c => c.key === key).reply;
  let replyEl = cur.querySelector('.reply');
  if (!replyEl) {
    replyEl = document.createElement('div');
    replyEl.className = 'reply';
    replyEl.innerHTML = `<p>${newReplyText}</p>`;
    cur.appendChild(replyEl);
    requestAnimationFrame(() => replyEl.classList.add('visible'));
  } else {
    replyEl.querySelector('p').innerHTML = newReplyText;
    replyEl.classList.remove('visible');
    requestAnimationFrame(() => replyEl.classList.add('visible'));
  }
  updateChrome(card);
}
function isVisible(card) {
  if (!card.showIf) return true;
  try { return !!card.showIf(state); } catch (e) { return true; }
}
function visibleCards() { return cards.filter(isVisible); }
function visibleIdx(cardId) {
  const v = visibleCards();
  return v.findIndex(c => c.id === cardId);
}
function advance() {
  let next = state.idx + 1;
  while (next < cards.length && !isVisible(cards[next])) next++;
  if (next < cards.length) {
    state.idx = next;
    saveState();
    render();
  }
}
function retreat() {
  let prev = state.idx - 1;
  while (prev >= 0 && !isVisible(cards[prev])) prev--;
  if (prev >= 0) {
    state.idx = prev;
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
