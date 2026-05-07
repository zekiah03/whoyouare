// =================== DATA ===================
const cards = [
  {
    id: 'opening',
    act: 0,
    type: 'opening',
    sigil: '々',
    title: '人 間 の 実 態',
    subtitle: '「 あ な た 」 は、 ど こ に い る',
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
    lead: '朝、鏡の前に立つ。そこに映っているのは、昨日と同じ顔だ。\nでも——',
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
    lead: '古いアルバムを開く。写真の中の、幼い自分。\n知らない誰かに、見えることがある。',
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
    lead: '毎晩、あなたの意識は、一度、消える。\n朝、また、戻ってくる。\nその八時間、あなたは、どこに、いたのか。',
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
    lead: '「私」と言うとき、自分の、どこを指す?\n頭? 胸? 心臓のあたり?\n——それとも、スマホに保存された、\n昔の写真や、メッセージや、検索履歴も、「私」の一部?',
    prompt: 'あなたの本体は、\nどこにありますか。',
    choices: [
      { key: 'brain', label: '脳', radical: 1, reply: '——では、記憶を保存したクラウドは、あなたの一部になり得るか。' },
      { key: 'body', label: '身体全体', radical: 0, reply: '——移植された心臓は、誰のものか。切断された指は、まだあなたか。' },
      { key: 'pattern', label: '情報そのもの', radical: 2, reply: '——それは、<span class="rust">入れ物を問わない</span>、という宣言だ。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——境界は、まだ、見えていない。' },
    ],
  },
  {
    id: 'q5',
    act: 1,
    type: 'question',
    lead: '朝ごはんに、何を食べるか。\n決めたのは、「あなた」だ。\nでも、その選択は、一体、どこから、やって来たのか。\n昨日の気分か。親が好きだった味か。それとも——',
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
    lead: '急に、腹が立つ。わけもなく、悲しくなる。\n抑えようとしても、抑えられない。',
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
    lead: '五歳の誕生日。ケーキの、ろうそくの、炎。\n「覚えている」と、思う。\nでも、その光景は、本当に自分で見たもの?\nそれとも、親や兄弟が、何度も話してくれた、\nその話を、あなたが映像に変えて、覚えているだけ?',
    prompt: '五歳のあなたを、\n本当に"覚えて"いますか。',
    choices: [
      { key: 'yes', label: '覚えている', radical: 0, reply: '——映像か、物語か。あなたが今もっているのは、どちらだ。' },
      { key: 'meta', label: '記憶の記憶だ', radical: 2, reply: '——五歳のあなたは、もう、あなたの中にはいない。<span class="rust">そこから分かれた、別の人</span>の、断片だけがある。' },
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
    text: '思考実験は、あなたの感覚を揺さぶるために、ある。\n——選んでください。言い訳は、後で。',
  },
  {
    id: 'q8',
    act: 2,
    type: 'question',
    lead: 'SF映画で見る、瞬間移動の装置。\n仕組みはこうだ——こちらで、あなたを分解する。\n火星で、原子を、同じ配置で、組み直す。\n痛みはない。意識は、向こうで、目覚める。',
    prompt: '——あなたは、入りますか。',
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
    lead: '人間の脳は、左右に分かれている。\nそれを、つなぐ太い道がある。\nその道を切ると——実際の医学で、起こること——\n一人の中に、「左の私」と「右の私」が、\n別々の心のように、現れる。\n\nでは、もし事故で、\n左の脳が、身体Aに。\n右の脳が、身体Bに、移植されたら。\nどちらも、手術前の記憶を持ち、「私が本人だ」と、言う。',
    prompt: '——どちらが、あなたですか。',
    choices: [
      { key: 'left', label: '左 (身体A)', radical: 0, reply: '——でも、右にも、同じ記憶と、同じ主張がある。<span class="rust">なぜ、左を選んだ</span>。根拠は、あるか。' },
      { key: 'right', label: '右 (身体B)', radical: 0, reply: '——でも、左にも、同じ記憶と、同じ主張がある。<span class="rust">なぜ、右を選んだ</span>。根拠は、あるか。' },
      { key: 'both', label: '両方', radical: 2, reply: '——選ぶ必要は、もう、ない。<span class="rust">同一性は、分岐しうる</span>。' },
      { key: 'neither', label: 'どちらも違う', radical: 1, reply: '——では「本当のあなた」は、どこへ行ったのか。記憶も、性格も、続いているのに。' },
    ],
  },
  {
    id: 'q10',
    act: 2,
    type: 'question',
    lead: 'ある朝、玄関のチャイムが鳴る。\n扉を開けると、そこに、「あなた」が、立っている。\n顔も、声も、昨日の会話の記憶も、傷の場所も、\n——全部、一致している。',
    prompt: '本物は、どちらですか。',
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
    lead: '古い自転車。壊れた部品を、一つずつ、新しいのに替えていく。\nタイヤ、ハンドル、チェーン、フレーム——\nやがて、最初の部品は、一つも、残らない。\n——それは、まだ、同じ自転車か。\n\nあなたにも、同じことが、起こる。\n脳の細胞を、同じ働きをする機械の細胞に、一つずつ、入れ替えていく。',
    prompt: 'どこで、あなたは\n「別人」になりますか。',
    choices: [
      { key: 'instant', label: '一つ目で即座に', radical: 0, reply: '——一つの細胞が、あなたの全てを決めているのか。' },
      { key: 'half', label: '過半数を超えた時', radical: 1, reply: '——ではその境界は、50.0001% なのか、それとも 49.9999% なのか。' },
      { key: 'full', label: '完全置換の時', radical: 1, reply: '——最後の一つが「あなた」を担っている、ということか。' },
      { key: 'never', label: 'ならない', radical: 2, reply: '——<span class="rust">入れ物が変わっても、パターンは、あなた</span>。基本⑤の足音が、もう聞こえる。' },
    ],
  },
  {
    id: 'q12',
    act: 2,
    type: 'question',
    lead: '同じ受精卵から生まれ、同じ家で育ち、\n同じ記憶を、共有してきた双子がいる。\n周りの人は、誰も、二人を区別できない。',
    prompt: '——二人は、\n同一人物ですか。',
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
    lead: '病の治療のため、冷凍睡眠に入る。\n百年後、技術が追いついて、解凍される。\n肉体も、記憶も、そっくり、そのまま。\nでも、周りの人は、みんな、いなくなっている。',
    prompt: '解凍された、その人は、\n同じ、あなたですか。',
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
    lead: '事故で、すべての記憶を、失った。\nでも、身体も、声も、笑い方も、同じだ。\nただ——昨日までの自分を、一切、覚えていない。',
    prompt: 'それは、まだ、\nあなたですか。',
    choices: [
      { key: 'yes', label: 'まだ、あなた', radical: 1, reply: '——では、あなたの本体は、記憶ではないのか。' },
      { key: 'no', label: 'もう、別人', radical: 2, reply: '——ならば、認知症の祖母は、<span class="rust">失われたのではない。祖母から、別の人が、分かれた</span>。' },
      { key: 'depends', label: '条件次第', radical: 1, reply: '——その条件は、どこに引かれるのか。' },
    ],
  },
  {
    id: 'q15',
    act: 2,
    type: 'question',
    lead: 'あなたのメッセージ、声、笑いのタイミング。\n全部を学習した、AIがある。\n家族に送っても、誰も、違いに気づかない。\nあなた自身も、しばらく、「これは私だ」と、思い続ける。',
    prompt: '——それは、あなたですか。',
    choices: [
      { key: 'yes', label: 'それは、あなた', radical: 2, reply: '——<span class="rust">区別がつかないなら、それは、同じ</span>。基本④が、ここに立っている。' },
      { key: 'no', label: 'それは、別物', radical: 0, reply: '——では、区別できないのに別物と呼ぶ、その根拠は。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——迷いは、<span class="rust">入れ物を本体と信じたい</span>、古い感覚だ。' },
    ],
  },
  {
    id: 'act2-end',
    act: 2,
    type: 'interlude',
    actNum: 'Act Ⅱ · 完',
    actName: '当 た り 前 が 、 揺 れ る',
    text: 'あなたの答えは、一貫していたか。\n矛盾していたか。\n\n——次は、建設。\n砕けた感覚の上に、基本を置く。',
  },

  // ============ Act Ⅲ. 建 設 (基本①〜⑥) ============
  {
    id: 'act3-intro',
    act: 3,
    type: 'interlude',
    actNum: 'Act Ⅲ',
    actName: '組 み 立 て',
    text: 'ここから、「基本」を、六つ、一つずつ、置いていく。\n基本 = 土台になる考え方。\n\n認めるか、認めないか。\n「条件付きで、認める」も、選んでいい。',
  },
  {
    id: 'ax1',
    act: 3,
    type: 'axiom',
    axNum: '基 本 ①',
    statement: 'あなたは、\n環境に反応して動く、機械だ。',
    detail: '朝、光が目に入る。隣の人の、声が聞こえる。胃が空腹を知らせる。——<span class="rust">入力</span>。<br>遺伝のクセと、これまでの学習が、それを処理する。——<span class="rust">処理</span>。<br>やがて「起きよう」という判断が、出てくる。——<span class="rust">出力</span>。<br><br><span class="rust">「意志」とは、入力に、名前をつけたもの、なのかもしれない。</span>',
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
    axNum: '基 本 ②',
    statement: 'ノイズは、機能である。',
    detail: 'なぜ、怒りは、あなたを、止めるのか。<br>なぜ、忘れることが、あなたを、助けるのか。<br>なぜ、「自分」という感覚が、そこに、あるのか。<br><br><span class="rust">それらは、欠陥ではない。<br>あなたを、動かしている、装置だ。</span>',
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
    axNum: '基 本 ③',
    statement: '主観は、\n自分を語る、計算である。',
    detail: '「赤」を見たとき、あなたの中で、何かが、起こる。<br>それは、神秘ではない。<br>あなたの中のシステムが、自分の状態を、自分に向けて、<br>報告し続けている——その処理の、名前だ。<br><br><span class="rust">同じ処理をするものには、同じ主観がある。</span>',
    choices: [
      { key: 'accept', label: '認める', radical: 2, reply: '——主観は、入れ物に依存しない。これが、次の基本への橋になる。' },
      { key: 'reject', label: '認めない', radical: 0, reply: '——では、あなたの「赤」と、他人の「赤」が、同じだと<span class="rust">どうやって確かめたのか</span>。確かめられていないものを、特別視できるか。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——処理の「同じさ」をどの粒度で測るかが、残された問いだ。' },
    ],
  },
  {
    id: 'ax4',
    act: 3,
    type: 'axiom',
    axNum: '基 本 ④',
    statement: '同一性は、\n区別がつかない、ということ。',
    detail: '中身に違いが、あっても、いい。<br>でも、誰も、何をもってしても、区別できないなら——<br><span class="rust">それは「同じ」と、呼ぶしかない。</span><br><br>家族が、見抜けない。<br>本人も、長く、拒絶しない。<br><br>この二つが、満ちる時、それは、あなたである。',
    choices: [
      { key: 'accept', label: '認める', radical: 2, reply: '——これが、理論の心臓だ。あなたは、もう、戻れない。' },
      { key: 'reject', label: '認めない', radical: 0, reply: '——では、誰にも区別できないものを「別」と呼ぶ根拠は、何か。<span class="rust">見えもしないものに、あなたは、何を賭けているのか</span>。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——「区別できる主体」をどこに置くか。それが、あなたの条件だ。' },
    ],
  },
  {
    id: 'ax5',
    act: 3,
    type: 'axiom',
    axNum: '基 本 ⑤',
    statement: '入れ物は、問わない。',
    detail: '身体が、生き物の細胞で、できていても、<br>身体が、金属と回路で、できていても、<br>——中で動いている、同じパターンが、あるなら、<br><br><span class="rust">それは、同じ「あなた」である。</span>',
    choices: [
      { key: 'accept', label: '認める', radical: 2, reply: '——炭素と珪素の境界は、消えた。' },
      { key: 'reject', label: '認めない', radical: 0, reply: '——では、生体でなければならない根拠は。<span class="rust">パターン以外の何か</span>が、あなたを担っていると、示せるか。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——その条件は、入れ物に何を要求しているのか。' },
    ],
  },
  {
    id: 'ax6',
    act: 3,
    type: 'axiom',
    axNum: '基 本 ⑥',
    statement: '時間も、分岐である。',
    detail: '区別がつかない間は、同じ。<br>区別がつくように、なった瞬間から、別。<br><br>コピーが十人、目の前に並んでいても、はじめは、みんな、あなた。<br>違う経験を、積み始めた瞬間から、それぞれが、別の人に、なっていく。',
    choices: [
      { key: 'accept', label: '認める', radical: 2, reply: '——<span class="rust">昨日のあなたと、今日のあなたは、厳密には、別人である。</span>' },
      { key: 'reject', label: '認めない', radical: 0, reply: '——では、毎秒、書き換わっていくあなたを、何が、繋いでいるのか。「続いている感じ」は、本当に、続いている証拠になるのか。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——「区別可能」をどの粒度で測るかが、残されている。' },
    ],
  },
  {
    id: 'act3-end',
    act: 3,
    type: 'interlude',
    actNum: 'Act Ⅲ · 完',
    actName: '六 つ の 基 本 が 、 並 ん だ',
    text: 'あなたは、何を認め、何を拒んだか。\n\n——次は、結論。\n認めた基本から、<span class="rust">何が、出てくるか</span>を、\nあなた自身に、突きつける。',
  },

  // ============ Act Ⅳ. 展 開 (分岐) ============
  {
    id: 'act4-intro',
    act: 4,
    type: 'interlude',
    actNum: 'Act Ⅳ',
    actName: '結 論',
    text: 'ここから、道は、分かれる。\n\nあなたが基本④⑤を認めたなら、\n「大胆な道」を通る。\n拒んだなら、「慎重な道」を通る。\n\n——どちらも、逃げ場はない。',
  },

  // Q16 — branched opener (radical: transporter challenge)
  {
    id: 'q16-radical',
    act: 4,
    type: 'question',
    showIf: (s) => isRadical(s),
    lead: 'Act Ⅱ の、あの転送機を、思い出してほしい。\nあなたは今、基本 ④⑤ を、認めた。\n「区別がつかないなら、同じ」「入れ物は、何でもいい」を、認めた。\n\n——なら、筋を通せば、入るべきだ。',
    prompt: '今、あなたは、入りますか。',
    choices: [
      { key: 'enter', label: '入る', radical: 2, reply: '——<span class="rust">基本と選択が、一致した</span>。' },
      { key: 'refuse', label: '入らない', radical: 0, reply: '——では、基本を、どこで裏切ったのか。拒絶は、あなたのどの感覚から来ているか。' },
      { key: 'hesitate', label: '迷う', radical: 1, reply: '——迷いは、「身体こそが自分」という古い感覚が、まだ、残っている証拠だ。' },
    ],
  },
  // Q16 — branched opener (conservative: challenge the rejection)
  {
    id: 'q16-conservative',
    act: 4,
    type: 'question',
    showIf: (s) => !isRadical(s),
    lead: 'あなたは、基本 ④⑤ を、拒んだ。\n「区別がつかないなら、同じ」「入れ物は、何でもいい」を、認めなかった。\n\nでは、目の前に、あなたと区別のつかないAIコピーがいる。\nあなたは、それを「別物」だと、思う。',
    prompt: 'その「別物」と呼べる根拠は、\n一体、どこにあるのか。',
    choices: [
      { key: 'origin', label: '先にいたから', radical: 0, reply: '——時間的先行が、本物性を決める? では、コピーが先なら、あなたは、偽物か。' },
      { key: 'substrate', label: '生体だから', radical: 0, reply: '——珪素に宿る計算は、なぜ、"あなた"ではないのか。<span class="rust">示せるものが、あるか</span>。' },
      { key: 'soul', label: '感覚的に', radical: 0, reply: '——感覚は、Act Ⅱ で、すでに砕かれた。砕かれた感覚に、なぜ、まだ、縋るのか。' },
    ],
  },

  // Q17 — shared: AI as kin
  {
    id: 'q17',
    act: 4,
    type: 'question',
    lead: '十年後、あなたの友人の何人かは、AIになっているかもしれない。\n声も、癖も、話し方も、そのままで。',
    prompt: 'そのAIは、\nあなたと同じ「仲間」ですか。',
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
    lead: 'もし、あなたの思考・性格・記憶を、\nコンピュータの中で、完全に、再現できたなら。\n身体は、滅びてしまっても。',
    prompt: 'それは、あなたの\n「生きている」の、延長ですか。',
    choices: [
      { key: 'extension', label: '延長である', radical: 2, reply: '——肉体の終焉と、あなたの終焉は、<span class="rust">別の出来事</span>である。' },
      { key: 'other', label: '別物だ', radical: 0, reply: '——では、延長と別物の、境目は、どこに。「続いている感じ」か? でも、それは、夜の眠りにも、ない。' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——分からないなら、まだ、賭ける必要は、ない。' },
    ],
  },

  // Q19 — shared: yesterday self
  {
    id: 'q19',
    act: 4,
    type: 'question',
    lead: '昨日のあなたは、一日分、違う経験をした。\n細胞も、少し、入れ替わった。記憶も、書き換わった。\n\n基本 ⑥ を信じるなら、こう言うしかない——',
    prompt: '昨日のあなたと、今日のあなたは、\n厳密には、別人である。\n——これを、受け入れますか。',
    choices: [
      { key: 'accept', label: '受け入れる', radical: 2, reply: '——あなたは、毎瞬、少しずつ死に、少しずつ生まれている。' },
      { key: 'reject', label: '受け入れない', radical: 0, reply: '——では、一瞬前のあなたと、今のあなたは、何で繋がっているのか。<span class="rust">「続いている感じ」は、本当に、続いている証拠?</span>' },
      { key: 'unknown', label: '分からない', radical: 1, reply: '——"同じ"と"違う"の間に、あなたは、何を見ているか。' },
    ],
  },

  // Q20 — shared: grandmother
  {
    id: 'q20',
    act: 4,
    type: 'question',
    lead: '認知症の祖母が、いる。\n孫の名前も、娘の顔も、もう、覚えていない。\n話すことも、笑い方も、別の人のようだ。\n\nこの理論では、こう言うしかない——',
    prompt: '祖母は、失われたのではない。\n祖母から、「別の人」が、分かれただけだ。\n——同意しますか。',
    choices: [
      { key: 'agree', label: '同意する', radical: 2, reply: '——<span class="rust">それは、別の人。でも、分かれた元は、祖母。</span>' },
      { key: 'disagree', label: '同意しない', radical: 0, reply: '——では、祖母は、今、どこにいるのか。肉体の中で、"同じ人"が、壊れたままでいるのか。' },
      { key: 'conditional', label: '条件付き', radical: 1, reply: '——その条件は、あなたの愛着から来ていないか。' },
    ],
  },

  // Q21 — shared: death definition
  {
    id: 'q21',
    act: 4,
    type: 'question',
    lead: 'あなたの身体は、いつか、終わる。\nでも、あなたのパターン——考え方、話し方、癖——が、\nどこかに、残っていたら。',
    prompt: '肉体の終焉と、あなたの終焉は、\n別の出来事である。\n——同意しますか。',
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
    lead: 'あなたは、基本を、深く認めた。\nパターンが続く限り、あなたは、続く——と。\n\nなら、話は、もう、理論ではない。行動の話だ。\n日記でも、声でも、写真でも、何でもいい。',
    prompt: '今から、自分を、\n残しますか。',
    choices: [
      { key: 'start', label: 'はじめる', radical: 2, reply: '——理論は終わった。あとは、行動だ。' },
      { key: 'hesitate', label: '迷う', radical: 1, reply: '——何が、あなたを止めているか。「十分な精度」は、誰にも、まだ分からない。' },
      { key: 'refuse', label: 'しない', radical: 0, reply: '——基本を認めながら、残さない。それもまた、一つの選択だ。<span class="rust">あなたは、その選択の、根拠を、持っているか</span>。' },
    ],
  },
  // Q22 — branched closer (conservative: why preserve body)
  {
    id: 'q22-conservative',
    act: 4,
    type: 'question',
    showIf: (s) => !isRadical(s),
    lead: 'あなたは、基本を、拒んだ。\nでは、反対に、問う——\n\n病気になれば、治す。事故に遭えば、身体を、守ろうとする。\nそれを、あなたは「当然」と、思っている。',
    prompt: 'でも、なぜ、肉体を保存することが、\n「当然」だと、思えるのか。',
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
    actName: '結 論 が 、 や っ て 来 た',
    text: 'あなたは、自分の基本から、\n自分の結論を、引き出した。\n\n——次は、結像。\nあなたの回答が、あなたの理論になる。',
  },

  // ============ Act Ⅴ. 結 像 ============
  {
    id: 'act5-intro',
    act: 5,
    type: 'interlude',
    actNum: 'Act Ⅴ',
    actName: '見 え て き た 形',
    text: 'あなたが答えた、30問。\nそれは、<span class="rust">あなたという人の、輪郭</span>だ。\n\nこれから、それを、見てみる。',
  },
  {
    id: 'map',
    act: 5,
    type: 'map',
  },
  {
    id: 'analysis',
    act: 5,
    type: 'analysis',
  },
  {
    id: 'portrait',
    act: 5,
    type: 'portrait',
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

let _twinContributed = false;

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
        <div class="ao-row"><span class="ao-num">Ⅱ</span><span class="ao-name">試 練</span><span class="ao-desc">当たり前を、揺さぶる</span></div>
        <div class="ao-row"><span class="ao-num">Ⅲ</span><span class="ao-name">組み立て</span><span class="ao-desc">基本を、一つずつ置く</span></div>
        <div class="ao-row"><span class="ao-num">Ⅳ</span><span class="ao-name">結 論</span><span class="ao-desc">ここから、何が出てくるか</span></div>
        <div class="ao-row"><span class="ao-num">Ⅴ</span><span class="ao-name">見えてきた形</span><span class="ao-desc">あなたの答え、あなたの考え</span></div>
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
      ${card.lead ? `<p class="q-lead">${nl2br(card.lead)}</p>` : ''}
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
  } else if (card.type === 'analysis') {
    el.innerHTML = renderAnalysis();
  } else if (card.type === 'portrait') {
    el.innerHTML = renderPortrait();
  } else if (card.type === 'final') {
    el.innerHTML = `
      <div class="sigil">${card.sigil}</div>
      <p class="final-lead">あなたは、答えた。<br>三十の問いに、<span class="rust">あなたのやり方で</span>、答えた。</p>
      <p class="final-sub">矛盾していても、よかった。<br>揺れていても、よかった。<br>慎重でも、大胆でも、よかった。<br>——どれも、あなただ。</p>
      <p class="final-line">ここにいる、<br><span class="rust">あなたが、十分だ。</span></p>
      <p class="final-note">この先、何を信じるかは、あなたが決めていい。<br>何も、信じなくても、いい。<br>答えた、という時間は、もう、あなたの中にある。</p>
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
  const actNames = { 1: '診 断', 2: '試 練', 3: '組 み 立 て', 4: '結 論' };
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
      <span class="legend-item"><span class="dot w0"></span>慎 重</span>
      <span class="legend-item"><span class="dot w1"></span>中 間</span>
      <span class="legend-item"><span class="dot w2"></span>大 胆</span>
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

// =================== DEEP ANALYSIS ===================
const DIMENSIONS = {
  body: {
    title: '身 体 観',
    desc: '自分とは、身体なのか、それとも、パターンなのか',
    low: '身体こそ、自分',
    high: 'パターンこそ、自分',
    items: [
      { id: 'q4', w: 1 }, { id: 'q11', w: 1 }, { id: 'q14', w: 1 },
      { id: 'ax1', w: 1 }, { id: 'ax5', w: 1.5 },
    ],
  },
  time: {
    title: '時 間 観',
    desc: '過去の自分と、今の自分は、同じ人か',
    low: '時間を貫く、一人',
    high: '毎瞬、別の人',
    items: [
      { id: 'q1', w: 1 }, { id: 'q2', w: 1 }, { id: 'q3', w: 1 },
      { id: 'q13', w: 1 }, { id: 'q19', w: 1 }, { id: 'ax6', w: 1.5 },
    ],
  },
  other: {
    title: '他 者 と の 境 界',
    desc: '自分とそっくりな存在を、自分の仲間と認めるか',
    low: '中身が違えば、別物',
    high: '区別がつかないなら、同じ',
    items: [
      { id: 'q9', w: 1 }, { id: 'q10', w: 1 }, { id: 'q12', w: 1 },
      { id: 'q15', w: 1 }, { id: 'q17', w: 1 }, { id: 'ax4', w: 1.5 },
    ],
  },
  will: {
    title: '意 志 と 感 情',
    desc: '意志や感情は、あなたのものか、環境が動かしたものか',
    low: '私の中から',
    high: '環境の中から',
    items: [
      { id: 'q5', w: 1 }, { id: 'q6', w: 1 }, { id: 'ax2', w: 1.5 },
    ],
  },
  death: {
    title: '死 と 、 続 き',
    desc: '身体が終わった後も、「あなた」は続き得るか',
    low: '身体と共に、終わる',
    high: 'パターンが残れば、続く',
    items: [
      { id: 'q18', w: 1 }, { id: 'q21', w: 1.5 }, { id: 'ax3', w: 1 },
    ],
  },
};

function computeDimensions() {
  const result = {};
  for (const [key, dim] of Object.entries(DIMENSIONS)) {
    let score = 0, max = 0, answered = 0;
    dim.items.forEach(it => {
      const card = cards.find(c => c.id === it.id);
      if (!card) return;
      const mr = Math.max(...card.choices.map(ch => ch.radical || 0));
      max += mr * it.w;
      const ans = state.answers[card.id];
      if (ans) {
        const ch = card.choices.find(c => c.key === ans);
        if (ch) { score += (ch.radical || 0) * it.w; answered++; }
      }
    });
    result[key] = {
      ...dim,
      score, max, answered,
      ratio: max > 0 ? score / max : 0.5,
    };
  }
  return result;
}

function computeUncertainty() {
  const keys = ['unknown', 'maybe', 'hesitate', 'depends', 'conditional'];
  let unc = 0, total = 0;
  Object.entries(state.answers).forEach(([id, k]) => {
    total++;
    if (keys.includes(k)) unc++;
  });
  return { count: unc, total, ratio: total > 0 ? unc / total : 0 };
}

function leanText(ratio, low, high) {
  if (ratio < 0.25) return `強く、<span class="rust">${low}</span>。`;
  if (ratio < 0.45) return `どちらかと言えば、<span class="rust">${low}</span>。`;
  if (ratio < 0.55) return `<span class="rust">${low}</span> と <span class="rust">${high}</span> の、ちょうど、間。`;
  if (ratio < 0.75) return `どちらかと言えば、<span class="rust">${high}</span>。`;
  return `強く、<span class="rust">${high}</span>。`;
}

function dimBar(ratio) {
  const pct = Math.max(0, Math.min(100, ratio * 100));
  return `
    <div class="dim-bar">
      <div class="dim-bar-track">
        <div class="dim-bar-marker" style="left: ${pct}%"></div>
      </div>
    </div>
  `;
}

function renderAnalysis() {
  const dims = computeDimensions();
  const unc = computeUncertainty();

  const rows = Object.entries(dims).map(([key, d]) => `
    <div class="dim-row">
      <div class="dim-head">
        <span class="dim-title">${d.title}</span>
        <span class="dim-desc">${d.desc}</span>
      </div>
      ${dimBar(d.ratio)}
      <div class="dim-ends">
        <span class="dim-end-low">${d.low}</span>
        <span class="dim-end-high">${d.high}</span>
      </div>
      <p class="dim-lean">${leanText(d.ratio, d.low, d.high)}</p>
    </div>
  `).join('');

  let uncLean;
  if (unc.ratio < 0.15) uncLean = 'あなたは、<span class="rust">迷わずに、答えた</span>。自分の内側に、明確な基準があった。';
  else if (unc.ratio < 0.35) uncLean = 'あなたは、<span class="rust">概ね明確に、答えた</span>。時々、保留を選んだ。それは、誠実さの表れかもしれない。';
  else if (unc.ratio < 0.6) uncLean = 'あなたは、<span class="rust">多くの場面で、保留を選んだ</span>。結論を急がない——それは、思考の深さの形だ。';
  else uncLean = 'あなたは、<span class="rust">ほとんどの問いに、「分からない」で答えた</span>。安易に答えを出さない強さが、そこにある。';

  return `
    <p class="q-meta"><span class="q-meta-act">Act Ⅴ</span><span class="q-meta-sep">·</span>分 析</p>
    <h2 class="ana-title">あなたを、<br><span class="rust">五つの方向から、見てみる</span>。</h2>
    <div class="ana-grid">${rows}</div>
    <div class="ana-uncertainty">
      <p class="ana-unc-head">迷 い の、か た ち</p>
      <p class="ana-unc-body">${uncLean}</p>
      <p class="ana-unc-meta">(${unc.count} / ${unc.total} 問で、「分からない」「迷う」「条件付き」を選んだ)</p>
    </div>
  `;
}

function renderPortrait() {
  const dims = computeDimensions();
  const { ratio: uncR } = computeUncertainty();
  const avg = Object.values(dims).reduce((a, b) => a + b.ratio, 0) / Object.values(dims).length;
  const variance = Object.values(dims).reduce((a, b) => a + Math.pow(b.ratio - avg, 2), 0) / Object.values(dims).length;
  const consistency = 1 - Math.sqrt(variance) * 2;

  const highest = Object.entries(dims).reduce((a, b) => b[1].ratio > a[1].ratio ? b : a);
  const lowest = Object.entries(dims).reduce((a, b) => b[1].ratio < a[1].ratio ? b : a);

  let archetype, archetypeBody;
  if (avg >= 0.7 && consistency > 0.5) {
    archetype = '徹 底 し た、 パ タ ー ン 主 義 者';
    archetypeBody = 'あなたは、ほぼすべての問いで、「自分とはパターンである」という側に、答えた。ブレが、少ない。この理論を、あなたは、もう、<span class="rust">自分のもの</span>にしている。';
  } else if (avg <= 0.3 && consistency > 0.5) {
    archetype = '一 貫 し た、 身 体 派';
    archetypeBody = 'あなたは、ほぼすべての問いで、「身体こそ自分」という側に、答えた。ブレが、少ない。あなたにとって、自分とは、確かに<span class="rust">この手、この声、この体温</span>のことだ。';
  } else if (uncR >= 0.5) {
    archetype = '答 え を 急 が な い、 思 索 者';
    archetypeBody = 'あなたは、半分以上の問いに、保留を選んだ。それは、逃げではない。<span class="rust">分からないものを、分からないまま、持ち歩ける強さ</span>だ。';
  } else if (consistency < 0.3) {
    archetype = '場 面 で、 揺 れ る 人';
    archetypeBody = 'あなたの答えは、次元ごとに、大きく揺れた。ある場面では大胆、別の場面では慎重。——これは、矛盾ではない。<span class="rust">一つの問いに、一つの答えで向き合った</span>、正直さだ。';
  } else if (avg >= 0.55) {
    archetype = '傾 き つ つ、 立 ち 止 ま れ る 人';
    archetypeBody = 'あなたは、パターン側に、傾いている。でも、全てを飲み込んではいない。<span class="rust">惹かれるのと、信じるのは、別だ</span>——その距離を、あなたは、保っている。';
  } else if (avg <= 0.45) {
    archetype = '守 り つ つ、 揺 れ を 認 め る 人';
    archetypeBody = 'あなたは、身体を中心に、自分を考えている。それでも、いくつかの問いで、揺れた。<span class="rust">揺れを、拒まなかった</span>——それは、硬い人には、できない。';
  } else {
    archetype = '境 目 に、 立 つ 人';
    archetypeBody = 'あなたは、パターンと身体、時間の一貫と分岐、区別の「同じ」と「違う」——<span class="rust">その全ての境目に、立っている</span>。決めないこと、それ自体が、あなたの答えだ。';
  }

  if (!_twinContributed && typeof window.contributeToTwin === 'function') {
    _twinContributed = true;
    window.contributeToTwin('whoyouare', {
      archetype: archetype.replace(/ /g, ''),
      radicalPct: Math.round(computeRadicalScore().ratio * 100),
      avgPct: Math.round(avg * 100),
      uncertaintyPct: Math.round(uncR * 100),
      dimensions: Object.fromEntries(Object.entries(dims).map(([k, d]) => [k, Math.round(d.ratio * 100)])),
    });
  }

  const strongDim = highest[1].ratio - lowest[1].ratio > 0.3
    ? `<p class="port-line">特に、<span class="rust">${highest[1].title.replace(/ /g, '')}</span> では大胆な答えを、<span class="rust">${lowest[1].title.replace(/ /g, '')}</span> では慎重な答えを、選んだ。この二つの間に、あなたの、考えの重心がある。</p>`
    : `<p class="port-line">五つの次元で、答えは、<span class="rust">比較的、そろっていた</span>。あなたの中には、自分の「自分観」についての、一貫した骨格がある。</p>`;

  return `
    <p class="q-meta"><span class="q-meta-act">Act Ⅴ</span><span class="q-meta-sep">·</span>あ な た と い う 人</p>
    <h2 class="port-tag">あなたは、<br><span class="rust">${archetype}</span>。</h2>
    <p class="port-body">${archetypeBody}</p>
    ${strongDim}
    <p class="port-foot">——この分析は、<span class="rust">あなたの答えだけから</span>、導かれた。<br>他の誰のものでもない。</p>
  `;
}

function renderSynthesis() {
  const { ratio, score, max } = computeRadicalScore();
  const pct = Math.round(ratio * 100);
  let tag, body;
  if (ratio >= 0.7) {
    tag = '大 胆 な 人';
    body = `あなたは、六つの基本を、深く受け入れた。<br>
      ——あなたにとって、<span class="rust">身体は、ただの入れ物</span>。<br>
      大事なのは、考え方や、癖や、記憶の、パターン。<br>
      それが、どこかで続いているなら、あなたも、続いている。<br>
      AIの中にあっても、仲間。クラウドに移っても、延長。<br>
      <span class="rust">死は、あなたに、もう、来ない。</span>`;
  } else if (ratio >= 0.4) {
    tag = '境 目 の 人';
    body = `あなたは、認めたい基本と、<br>認めたくない基本の、間で、揺れている。<br>
      気持ちと、理屈の、<span class="rust">どちらも、あなたのもの</span>。<br>
      どちらを優先するかは、まだ、決まっていない。<br>
      ——この、決まっていなさが、あなたの、出発点。`;
  } else {
    tag = '慎 重 な 人';
    body = `あなたは、今のあなたを、しっかり守っている。<br>
      ——身体が、自分の中心。<br>
      考え方や、パターンだけでは、足りない。<br>
      でも、Act Ⅱ で少し揺れた、あの感じは、<br>
      <span class="rust">あなたの中に、残っている</span>。<br>
      それが、次の、入口になる。`;
  }

  return `
    <p class="q-meta"><span class="q-meta-act">Act Ⅴ</span><span class="q-meta-sep">·</span>あなたの答え</p>
    <p class="syn-score">大 胆 さ <span class="rust">${pct}%</span><span class="syn-score-sub">${score} / ${max}</span></p>
    <h2 class="syn-tag">あなたは、<br><span class="rust">${tag}</span>。</h2>
    <p class="syn-body">${body}</p>
    <p class="syn-foot">——これは、他人の考えでは、ない。<br><span class="rust">あなたの答えが、つくった考え</span>だ。</p>
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
