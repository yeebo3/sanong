const ANSWER_STORAGE_KEY = "quizAnswers";
const KNOWLEDGE_COUNT = 10;
const PERSONA_COUNT = 10;

const knowledgeSource = window.KNOWLEDGE_BANK || [];
const personaSource = window.PERSONA_BANK || [];

const profiles = [
  {
    id: "A",
    name: "返乡创业新农人",
    motto: "用创新激活乡村产业，让农业成为有奔头的事业。",
    summary: "带着城市视野、市场思维与乡土情怀主动返乡扎根，是连接城乡资源、激活乡村内生动力的重要群体。",
    tags: ["敢于创新", "市场意识", "行动力突出", "数字经济", "返乡实践"],
    traits: [
      { title: "角色定位", text: "带着城市视野、市场思维与乡土情怀主动返乡扎根，是连接城乡资源、激活乡村内生动力的重要群体。" },
      { title: "发展方式", text: "熟悉电商运营、特色种养、农产品加工、乡村休闲业态等新模式，善于挖掘乡村特色资源，打造本土特色产业。" },
      { title: "实践价值", text: "在自主创业增收的同时，主动带动周边村民就业、拓展销路，盘活闲置土地、房屋等乡村资源。" },
      { title: "乡村意义", text: "以实干带动产业兴旺，助力村民共同致富，为乡村注入年轻活力与创新动力，是乡村产业振兴的领头雁与实干家。" },
    ],
  },
  {
    id: "B",
    name: "农业科技型人才",
    motto: "以科研和技术突破推动农业现代化。",
    summary: "聚焦现代农业发展需求，深耕智慧农业、良种繁育、绿色植保、节水灌溉、农机应用、农产品质量安全等专业领域，兼具专业知识与实践能力。",
    tags: ["种业创新", "智慧农业", "生物育种", "科技攻关", "成果转化"],
    traits: [
      { title: "角色定位", text: "聚焦现代农业发展需求，深耕智慧农业、良种繁育、绿色植保、节水灌溉、农机应用、农产品质量安全等专业领域，兼具专业知识与实践能力。" },
      { title: "发展方式", text: "立足田间地头，用科学技术改造传统农业，破解传统种植养殖效率低、病虫害频发、产能受限等难题。" },
      { title: "实践价值", text: "推动农业标准化、规模化、数字化升级，善于将科研成果转化为落地技术，优化农业生产模式，降低生产风险。" },
      { title: "乡村意义", text: "提升农产品品质与附加值，为乡村产业高质量发展提供硬核技术支撑。" },
    ],
  },
  {
    id: "C",
    name: "乡村生态守护者",
    motto: "守护绿水青山，让乡村发展更可持续。",
    summary: "秉持绿水青山就是金山银山的发展理念，以守护乡村自然本底为核心使命。",
    tags: ["生态保护", "责任感", "公共服务", "数字工具", "可持续发展"],
    traits: [
      { title: "角色定位", text: "秉持绿水青山就是金山银山的发展理念，以守护乡村自然本底为核心使命。" },
      { title: "发展方式", text: "专注乡村山水林田湖草系统保护、农村人居环境整治、水土保持、垃圾分类治理、污染防治等工作，兼顾生态保护与合理开发。" },
      { title: "实践价值", text: "推动绿色农业、生态旅游、林下经济等生态友好型产业发展，平衡乡村发展与环境保护的关系。" },
      { title: "乡村意义", text: "改善村容村貌，守护乡村自然风貌与宜居环境，助力建设生态优美、宜居宜业的和美乡村。" },
    ],
  },
  {
    id: "D",
    name: "乡土文化传播者",
    motto: "把乡土生活转化为可信、可理解、可传播的内容。",
    summary: "深耕本土文化土壤，深度挖掘、整理、传承乡村非遗技艺、民俗节庆、家风家训、红色文化、农耕文明、古村历史等乡土文脉。",
    tags: ["文化敏感", "善于表达", "影像审美", "数字传播", "尊重乡土"],
    traits: [
      { title: "角色定位", text: "深耕本土文化土壤，深度挖掘、整理、传承乡村非遗技艺、民俗节庆、家风家训、红色文化、农耕文明、古村历史等乡土文脉。" },
      { title: "发展方式", text: "擅长用新媒体传播、文旅策划、文化活动、文创开发等创新方式活化传统文化，讲好乡村故事。" },
      { title: "实践价值", text: "致力于唤醒村民文化自信，打造乡村文化品牌，传承乡村精神根脉，推动传统文化与现代生活融合。" },
      { title: "乡村意义", text: "增强乡村文化凝聚力、吸引力与辨识度，为乡村文化振兴注入持久生命力。" },
    ],
  },
  {
    id: "E",
    name: "乡村基层治理干部",
    motto: "当好群众主心骨，办好基层烦心事。",
    summary: "扎根乡村一线，直面基层民生事务，是政策落地、群众服务、乡村治理的中坚力量。",
    tags: ["为民初心", "公道正派", "执行力强", "沟通协调", "扎根基层"],
    traits: [
      { title: "角色定位", text: "扎根乡村一线，直面基层民生事务，是政策落地、群众服务、乡村治理的中坚力量。" },
      { title: "发展方式", text: "主要负责落实惠农政策、推进基层党建、调解邻里矛盾、开展民生服务、统筹乡村公共建设、推进乡风文明建设等工作。" },
      { title: "实践价值", text: "善于倾听村民诉求，搭建群众与政府的沟通桥梁，协调各方资源，维护乡村和谐稳定。" },
      { title: "乡村意义", text: "推动乡村治理精细化、规范化，凝聚乡村发展合力，保障乡村平稳有序发展。" },
    ],
  },
];

const profileStories = {
  A: {
    intro: "你毕业后选择返乡建设智慧农田。为改善传统农业依赖经验、灌溉不精准、抗灾能力弱的问题，你引入传感器与自动灌溉系统。某夜突遇极端暴雨，系统异常失控，排水与灌溉紊乱，部分农田迅速积水，幼苗被淹。若不及时处理，将面临严重减产风险。",
    choices: [
      { label: "立即人工干预抢救", result: "减少损失但成本增加", achievement: "务实型应对" },
      { label: "坚持优化系统，不人工干预", result: "部分作物损失", achievement: "技术理想主义" },
      { label: "彻底放弃智能系统", result: "效率下降，退回传统农业", achievement: "技术退化路线" },
      { label: "联合技术团队二次升级系统", result: "系统升级成功，进入稳定阶段", achievement: "技术迭代型创业者" },
    ],
    caseTitle: "魏巧·引领更多“新农人”投身乡村振兴",
    caseText: "魏巧曾在中国科学院工作，2017年辞去城市中稳定而体面的岗位，和丈夫一起回到江苏镇江的家乡投身农业。她没有把返乡当成“退路”，而是把它当成一次重新选择生活方式和事业方向的机会。返乡之后，她围绕智慧农业持续探索，利用无人机巡田、数字化管理、智能灌溉等现代技术提升种植效率，让传统农业从“靠经验”逐步走向“靠数据、靠技术、靠组织”。在这一过程中，她不仅关注自家农田的生产效益，也主动带动周边农户一起学习新技术、共享新模式，推动更多人理解现代农业的价值。作为全国人大代表，她还持续关注“谁来种地”这一现实问题，积极呼吁更多青年人投身“三农”事业。她的经历说明，返乡创业新农人不只是回到土地上种地，更是在用创新、技术和行动力重塑乡村产业的未来。",
    image: "image/weiqiao.png",
  },
  D: {
    intro: "你作为乡土文化传播者，准备为一个传统手工艺村制作首支互动网页内容。平台建议把普通竹编工艺包装成“千年秘术”来吸引点击，而传承人希望如实呈现制作过程。若处理不好，既会引发真实性争议，也会损害村民信任。",
    choices: [
      { label: "直接使用夸张标题抢流量", result: "点击率短暂提升但真实性受质疑", achievement: "流量优先路线" },
      { label: "完全不考虑传播包装", result: "内容真实但传播范围有限", achievement: "守真但保守" },
      { label: "真实呈现工艺过程并优化标题", result: "兼顾可信度与传播效果", achievement: "平衡型传播者" },
      { label: "编造传说增强神秘感", result: "引发误读，破坏文化信任", achievement: "失真传播风险" },
    ],
    caseTitle: "李子柒·让乡土文化被更多人看见",
    caseText: "李子柒长期以短视频呈现农事、饮食和传统手工艺，她的内容并不依赖夸张讲述，而是通过完整的劳动过程、克制的镜头语言和稳定的乡村生活叙事，让观众看见乡土文化背后的技艺、时间和生活关系。无论是做饭、酿造、编织还是田间劳作，她都尽量保留真实的步骤、真实的手感和真实的生活气息，使乡村文化不再只是被快速浏览的“符号”，而成为可以被理解、被尊重、被记住的生活经验。她的表达方式说明，乡土文化传播者真正重要的不是制造短暂热点，而是把地方文化讲得可信、讲得有温度、讲得能让更多人愿意走近乡村、理解乡村、喜欢乡村。",
    image: "image/liziqi.png",
  },
  B: {
    intro: "你是农业科技型人才，扎根种业创新、智慧农业和生物育种等前沿领域，希望通过技术攻关破解农业关键瓶颈。你手握成熟科研成果，但仍要面对成果转化与市场认可的问题。",
    choices: [
      { label: "搭建对比田并整理数据主动对接企业", result: "用实证打破偏见并推动合作", achievement: "实证破冰者" },
      { label: "先小规模试种积累口碑", result: "稳妥但周期较长", achievement: "佛系育种师" },
      { label: "下调合作标准以快速打开市场", result: "品种优势被削弱", achievement: "廉价合伙人" },
      { label: "专注实验室研究，等待政策扶持", result: "成果长期闲置", achievement: "沉睡研究员" },
    ],
    caseTitle: "傅廷栋·六十余年深耕油菜科研",
    caseText: "傅廷栋院士长期扎根华农，几十年如一日地深耕油菜科研，没有被外界的热闹环境带走，而是始终把全部精力放在作物育种、试验验证和成果转化上。他攻克了杂交油菜育种中的关键技术难题，发现并利用具有重大实用价值的油菜波里马细胞质雄性不育系，推动我国油菜育种实现了重要突破。此后，他又持续培育出一批高产稳产、优质抗病的杂交油菜新品种，并推动高油酸油菜、耐盐碱油菜等新型品种研发，让科研成果真正走出实验室、走向田间地头。傅廷栋院士的经历说明，农业科技型人才不是只做理论研究的人，而是要把科技创新转化为现实生产力，用硬核科研守护国家粮油安全。",
    image: "image/fuyandong.png",
  },
  C: {
    intro: "你是乡村生态守护者，关注生态保护、资源管理和乡村可持续发展。乡村推行生态文旅新业态后，网红航拍、私闯保育区、乱扔垃圾等行为增多，生态管护压力骤增。",
    choices: [
      { label: "联合村委划定防护区域并组织志愿清理", result: "快速止损修复环境，耗费较多人力精力", achievement: "乡土生态实干卫士" },
      { label: "借助短视频平台发布文明出游宣传", result: "线上引导明显，线下整改偏慢", achievement: "生态理念传播使者" },
      { label: "实地勘察并递交长效管护方案", result: "治标兼顾治本，落地需要周期", achievement: "乡村生态统筹守护者" },
      { label: "看重短期收益放任破坏", result: "客流短期增长但生态持续受损", achievement: "生态守护懈怠者" },
    ],
    caseTitle: "杨善洲·把荒山变成绿色森林",
    caseText: "杨善洲退休后没有选择安逸生活，而是扎根大亮山，坚持植树造林二十多年，带领群众把原本荒凉的山地一点点变成郁郁葱葱的绿色森林。他做的不只是种树，更是在长期的艰苦坚持中重建生态环境、改善水土条件、为当地群众留下可持续的发展基础。他始终把“为群众种树，为后代造福”作为自己的信念，用一生实践证明，生态守护不是口号，而是要在日常巡护、持续治理、长期投入和群众动员中一点点实现。对于乡村生态守护者来说，这样的案例说明，真正的绿色发展不是短期造景，而是守住自然底线、修复生态系统、让乡村在保护中实现更长远的发展。",
    image: "image/yangshanzhou.png",
  },
  E: {
    intro: "你是乡村基层治理干部，负责村内民生保障、项目推进与矛盾调解。村内集中供水主管道突发破裂，全村大范围断水，正值高温天气，村民情绪激动。若处置不当，容易引发群体不满。",
    choices: [
      { label: "第一时间到场安抚并协调抢修送水", result: "快速稳控局面，及时恢复供水", achievement: "应急处置先锋" },
      { label: "回避不见，让其他村干部代为处理", result: "矛盾升级，公信力下降", achievement: "回避型干部" },
      { label: "口头承诺尽快解决，拖延等待上级安排", result: "问题扩大，工作被动", achievement: "形式化履职" },
      { label: "联动专业队伍抢修并建立长效机制", result: "问题彻底解决，长效机制落地", achievement: "基层治理能手" },
    ],
    caseTitle: "黄文秀·新时代青年基层干部榜样",
    caseText: "黄文秀放弃城市中相对优越的工作机会，主动回到家乡担任驻村第一书记，把青春和热情都投入到基层一线。她到村后没有急着“讲大话”，而是先走村入户、摸清民情，深入了解村里的基础设施、产业条件和群众最关心的实际问题，然后有针对性地宣讲惠农政策、推动特色产业发展、协调资源改善村庄条件。面对群众之间的矛盾和现实困难，她始终坚持耐心沟通、真心服务，把一次次具体小事办实办好，逐渐赢得了村民信任，也带动了村庄的发展。她的经历说明，基层治理干部不是简单的“传达者”，而是既要懂政策、会协调、能应急，又要真正站在群众立场上解决问题的人。",
    image: "image/huangwenxiu.png",
  },
};

let answers = loadAnswers();
let activeQuiz = [];

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildActiveQuiz() {
  const knowledgeQuestions = shuffle(knowledgeSource).slice(0, KNOWLEDGE_COUNT).map((item) => ({
    ...item,
    type: "knowledge",
    quizId: item.id,
    label: "知识题",
  }));

  const personaQuestions = shuffle(personaSource).slice(0, PERSONA_COUNT).map((item) => ({
    ...item,
    type: "persona",
    quizId: item.id,
    label: "画像题",
  }));

  activeQuiz = shuffle([...knowledgeQuestions, ...personaQuestions]).map((item, index) => ({
    ...item,
    order: index + 1,
  }));

  answers = normalizeAnswers(answers);
  saveAnswers();
}

function loadAnswers() {
  try {
    return JSON.parse(sessionStorage.getItem(ANSWER_STORAGE_KEY) || "{}");
  } catch {
    sessionStorage.removeItem(ANSWER_STORAGE_KEY);
    return {};
  }
}

function saveAnswers() {
  sessionStorage.setItem(ANSWER_STORAGE_KEY, JSON.stringify(answers));
}

function normalizeAnswers(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return activeQuiz.reduce((safeAnswers, question) => {
    const answer = value[question.quizId];
    if (question.options[Number(answer) - 1]) safeAnswers[question.quizId] = String(answer);
    return safeAnswers;
  }, {});
}

function getQuestions() {
  return activeQuiz;
}

function answeredCount() {
  return getQuestions().filter((question) => answers[question.quizId]).length;
}

function hasCompletedQuiz() {
  return answeredCount() === getQuestions().length && getQuestions().length > 0;
}

function calculateScores() {
  const scores = Object.fromEntries(profiles.map((item) => [item.id, 0]));

  getQuestions().forEach((question) => {
    if (question.type !== "persona") return;
    const answerIndex = Number(answers[question.quizId]) - 1;
    if (answerIndex < 0) return;

    const optionLetter = question.options[answerIndex]?.[0];
    if (!optionLetter || scores[optionLetter] === undefined) return;

    scores[optionLetter] += 1;
  });

  return scores;
}

function getResultProfile() {
  if (!hasCompletedQuiz()) return null;
  const scores = calculateScores();
  const bestScore = Math.max(...Object.values(scores));
  const tiedProfiles = profiles.filter((item) => scores[item.id] === bestScore);
  return tiedProfiles[0] || profiles[0];
}

function resetQuiz() {
  answers = {};
  sessionStorage.removeItem(ANSWER_STORAGE_KEY);
  buildActiveQuiz();
  setRoute("/quiz");
}

function setRoute(path) {
  window.location.hash = path;
}

function buttonLink(label, path, variant = "") {
  return `<a class="btn ${variant}" href="${path}">${label}</a>`;
}

function sectionIntro(eyebrow, title, text) {
  return `
    <div class="section-intro">
      <div>
        <p class="eyebrow">${eyebrow}</p>
        <h2>${title}</h2>
      </div>
      <p>${text}</p>
    </div>
  `;
}

function renderLockedPage() {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">流程提示</p>
        <h1>请先完成职业画像测试</h1>
        <p class="lead">完成全部 20 题后，再进入后续页面。</p>
      </div>
    </section>
    <section class="section alt">
      <div class="container">
        <div class="empty-state">
          <h2>还没有可用结果</h2>
          <p class="muted">当前已完成 ${answeredCount()} / ${getQuestions().length} 题。</p>
          <div class="button-row">${buttonLink("继续答题", "#/quiz")}${buttonLink("返回首页", "#/", "secondary")}</div>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-content hero-content-center">
        <p class="eyebrow">三农政策 · 乡村振兴 · 职业画像</p>
        <h1>三农政策的乡村振兴职业画像测试</h1>
        <p class="lead">通过测试了解自己更适合承担的乡村振兴角色。</p>
        <div class="actions">${buttonLink("开始测试", "#/quiz")}${buttonLink("查看测试结果", "#/result", "secondary")}</div>
      </div>
    </section>
  `;
}

function renderQuiz() {
  const total = getQuestions().length;
  const done = answeredCount();
  const percent = total ? Math.round((done / total) * 100) : 0;

  const groups = getQuestions()
    .map((question) => {
      const options = question.options
        .map((option, optionIndex) => {
          const value = String(optionIndex + 1);
          const checked = answers[question.quizId] === value ? "checked" : "";
          return `<label class="option"><input type="radio" name="${question.quizId}" value="${value}" ${checked} /><span>${option}</span></label>`;
        })
        .join("");

      const answerIndex = Number(answers[question.quizId]) - 1;
      const isAnswered = Number.isInteger(answerIndex) && answerIndex >= 0;
      const isCorrect = question.type === "knowledge" ? answerIndex === question.answer : true;
      const feedback =
        question.type === "knowledge" && isAnswered
          ? `<p class="answer-feedback ${isCorrect ? "correct" : "wrong"}">${isCorrect ? "回答正确。" : `回答错误，正确答案是 ${question.options[question.answer]}`}${question.explanation ? `。${question.explanation}` : ""}</p>`
          : "";

      return `
        <div class="question">
          <p class="question-title">${question.order}. ${question.question}</p>
          <div class="question-meta">${question.label}</div>
          <div class="options">${options}</div>
          ${feedback}
        </div>
      `;
    })
    .join("");

  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">答题页</p>
        <h1>乡村振兴职业画像测试</h1>
        <p class="lead">前 10 题来自知识题库，后 10 题用于给五种画像加权计分，全部题目会随机混排。</p>
      </div>
    </section>

    <section class="section">
      <div class="container quiz-shell">
        <div class="card progress-wrap">
          <div class="progress-meta">
            <span>已完成 ${done} / ${total} 题</span>
            <span>${percent}%</span>
          </div>
          <div class="progress-track" aria-label="答题进度">
            <div class="progress-fill" style="width: ${percent}%"></div>
          </div>
        </div>
        <section class="card question-group">
          <header>
            <h3>混合题库</h3>
            <span class="group-index">随机抽题</span>
          </header>
          ${groups}
        </section>
      </div>
    </section>

    <div class="sticky-submit">
      <div class="submit-inner">
        <p class="muted" id="quizHint">${done === total ? "题目已完成，可以提交测试。" : `还有第 ${getQuestions().filter((question) => !answers[question.quizId]).map((question) => question.order).join("、")} 题未完成`}</p>
        <div class="button-row">
          ${buttonLink("返回首页", "#/", "secondary")}
          <button class="btn" id="submitQuiz" ${done === total ? "" : "disabled"}>提交测试</button>
        </div>
      </div>
    </div>
  `;
}

function renderResult() {
  const resultProfile = getResultProfile();
  if (!resultProfile) return renderLockedPage();

  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">测试结果</p>
        <h1>${resultProfile.name}</h1>
        <p class="lead">${resultProfile.motto}</p>
      </div>
    </section>

    <section class="section alt">
      <div class="container result-layout">
        <article class="card profile-card">
          <div class="profile-visual" aria-hidden="true">画像</div>
          <div>
            <h2>${resultProfile.name}</h2>
            <p class="muted">${resultProfile.summary}</p>
          </div>
          <div class="tag-list">
            ${resultProfile.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>

        <div class="split-list">
          ${resultProfile.traits
            .map(
              (item) => `
                <article class="info-block">
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </article>
              `,
            )
            .join("")}
          <div class="button-row">
            ${buttonLink("查看详情", "#/profile")}
            <button class="btn secondary" data-action="reset-quiz">重新测试</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderProfileDetail() {
  const resultProfile = getResultProfile();
  if (!resultProfile) return renderLockedPage();

  const story = profileStories[resultProfile.id];
  const choiceGroups = story
    ? story.choices
        .map(
          (choice, index) => `
            <article class="scenario-choice card">
              <div class="scenario-choice-head">
                <span class="choice-badge">${String.fromCharCode(65 + index)}</span>
                <div>
                  <h3>${choice.label}</h3>
                  <p class="muted">情景选项</p>
                </div>
              </div>
              <div class="scenario-outcome">
                <p><strong>结果：</strong>${choice.result}</p>
                <p><strong>成就：</strong>${choice.achievement}</p>
              </div>
            </article>
          `,
        )
        .join("")
    : "";
  const caseImage = story?.image ? `<img class="case-image-img" src="${story.image}" alt="${story.caseTitle}" />` : `<div class="case-image-fallback">图片位置</div>`;

  return `
    <section class="page-hero">
      <div class="container detail-hero">
        <div>
          <p class="eyebrow">画像详情页</p>
          <h1>${resultProfile.name}</h1>
          <p class="lead">${resultProfile.motto}</p>
          <div class="profile-meta">
            <div class="tag-list">
              ${resultProfile.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <div class="button-row">
              ${buttonLink("返回测试结果", "#/result", "secondary")}
              <button class="btn secondary" data-action="reset-quiz">重新测试</button>
            </div>
          </div>
        </div>
        <div class="detail-media" aria-hidden="true"></div>
      </div>
    </section>

    <section class="section alt">
      <div class="container">
        <div class="section-heading-only">
          <p class="eyebrow">角色介绍</p>
          <h2>从画像看见你的乡村振兴能力</h2>
        </div>
        <div class="intro-panel">
          <p>${resultProfile.summary}</p>
          <p style="margin-top: 12px;">这一画像不仅代表一种能力倾向，也对应着你在乡村振兴场景中可能更容易发挥作用的方向。</p>
        </div>
        <div class="grid three detail-traits">
          ${resultProfile.traits
            .map(
              (item) => `
                <article class="card detail-trait-card">
                  <p class="trait-kicker">${item.title}</p>
                  <p>${item.text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    ${story ? `
    <section class="section">
      <div class="container">
        <div class="section-heading-only">
          <p class="eyebrow">突发情景</p>
          <h2>把你的能力放进真实场景</h2>
        </div>
        <div class="intro-panel">
          <p>${story.intro}</p>
        </div>
        <div class="scenario-card-grid">
          ${choiceGroups}
        </div>
      </div>
    </section>

    <section class="section tint">
      <div class="container">
        <div class="section-heading-only">
          <p class="eyebrow">人物案例</p>
          <h2>${story.caseTitle}</h2>
        </div>
        <article class="case-panel card">
          <div class="case-top">
            <div class="case-image" aria-hidden="true">
              <img src="${story.image}" alt="${story.caseTitle}" />
            </div>
            <div class="case-summary">
              <div class="case-quote">“${resultProfile.motto}”</div>
              <p>${resultProfile.summary}</p>
              <p style="margin-top: 12px;">这类人物通常不是只停留在观点表达，而是会把能力放进真实场景里，通过持续行动把价值做出来。</p>
            </div>
          </div>
          <div class="case-columns">
            <div class="case-bio">
              <h3>人物经历</h3>
              <p>${story.caseText}</p>
            </div>
            <div class="case-bio">
              <h3>案例启发</h3>
              <p>${resultProfile.summary}</p>
              <p style="margin-top: 12px;">结合画像特征来看，这类人物往往更重视方向判断、行动路径和实际成果，能够把个人能力转化成乡村振兴中的真实贡献。</p>
            </div>
          </div>
        </article>
      </div>
    </section>
    ` : ""}
  `;
}

function syncNav(path) {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    const active = href === `#${path}` || (href === "#/result" && (path === "/profile" || path === "/result"));
    link.classList.toggle("is-active", active);
  });
}

function bindQuizEvents() {
  document.querySelectorAll(".option input").forEach((input) => {
    input.addEventListener("change", (event) => {
      answers[event.target.name] = event.target.value;
      saveAnswers();
      render({ preserveScroll: true });
    });
  });

  const submit = document.getElementById("submitQuiz");
  if (submit) {
    submit.addEventListener("click", () => {
      const unanswered = getQuestions()
        .filter((question) => !answers[question.quizId])
        .map((question) => question.order);

      if (unanswered.length > 0) {
        window.alert(`还有未完成的题目：第 ${unanswered.join("、")} 题。请先完成后再提交。`);
        return;
      }

      setRoute("/result");
    });
  }
}

function bindPageActions() {
  document.querySelectorAll("[data-action='reset-quiz']").forEach((button) => {
    button.addEventListener("click", resetQuiz);
  });
}

function render(options = {}) {
  const app = document.getElementById("app");
  const path = window.location.hash.replace("#", "") || "/";
  const preserveScroll = options.preserveScroll === true;
  const scrollY = window.scrollY;

  if (activeQuiz.length === 0) buildActiveQuiz();

  if (path === "/") app.innerHTML = renderHome();
  else if (path === "/quiz") app.innerHTML = renderQuiz();
  else if (path === "/result") app.innerHTML = renderResult();
  else if (path === "/profile") app.innerHTML = renderProfileDetail();
  else app.innerHTML = renderHome();

  bindQuizEvents();
  bindPageActions();
  syncNav(path);
  app.focus({ preventScroll: true });
  window.scrollTo({ top: preserveScroll ? scrollY : 0, behavior: "auto" });
}

buildActiveQuiz();
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
