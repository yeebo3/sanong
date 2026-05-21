const profile = {
  id: "rural-strategist",
  name: "乡村策略协调者",
  motto: "擅长把政策目标、基层需求和资源协同转化为可执行方案。",
  summary:
    "你更适合在乡村振兴项目中承担统筹、沟通和落地推进角色，能够在多方诉求中寻找稳定方案。",
  tags: ["政策理解", "组织协调", "产业连接", "基层沟通", "问题拆解"],
  traits: [
    {
      title: "性格特点",
      text: "关注长期效果，处理问题时倾向先理解背景，再推动各方形成共识。",
    },
    {
      title: "能力特点",
      text: "适合做调研、资源整合、项目推进和跨部门协作，能把抽象政策转成行动清单。",
    },
    {
      title: "职业方向",
      text: "可面向乡村治理、产业运营、公共项目管理、农业社会化服务等方向继续探索。",
    },
  ],
};

const quizGroups = [
  {
    title: "政策理解与公共视角",
    questions: [
      {
        id: "q1",
        title: "面对一项新的惠农政策，你通常会先关注什么？",
        options: [
          "政策目标和适用对象",
          "可以调动哪些资源",
          "群众最关心的实际问题",
        ],
      },
      {
        id: "q2",
        title: "村里推进新项目遇到意见分歧时，你更愿意承担哪类工作？",
        options: ["梳理事实依据", "协调各方讨论", "先做小范围试点"],
      },
      {
        id: "q3",
        title: "你认为乡村振兴项目最需要优先保证的是哪一点？",
        options: ["方向符合政策", "资源持续投入", "村民真实受益"],
      },
    ],
  },
  {
    title: "产业思维与执行偏好",
    questions: [
      {
        id: "q4",
        title: "如果要发展本地特色农产品，你会先做哪件事？",
        options: ["调研市场需求", "盘点本地资源", "访谈种植农户"],
      },
      {
        id: "q5",
        title: "项目进入执行阶段后，你最习惯使用哪种方式推进？",
        options: ["制定节点表", "建立协作群", "边做边复盘"],
      },
      {
        id: "q6",
        title: "当资源有限时，你会优先选择哪类动作？",
        options: ["聚焦关键任务", "寻找外部合作", "优化现有流程"],
      },
    ],
  },
  {
    title: "基层沟通与情景判断",
    questions: [
      {
        id: "q7",
        title: "入户调研时，村民表达顾虑，你会如何回应？",
        options: ["解释政策边界", "记录诉求并跟进", "邀请参与方案讨论"],
      },
      {
        id: "q8",
        title: "你更希望自己在团队中被看作什么角色？",
        options: ["分析判断者", "组织推动者", "现场解决者"],
      },
      {
        id: "q9",
        title: "面对突发舆情或误解，你会优先做什么？",
        options: ["核对信息来源", "同步相关负责人", "公开回应关键事实"],
      },
    ],
  },
];

const people = [
  {
    name: "基层项目统筹人",
    role: "负责村级项目计划、沟通协调和过程跟进。",
    experience: "常见于驻村工作队、乡镇项目专班、公益助农团队。",
    reason: "与画像中的政策理解、节点管理和跨方沟通能力高度相关。",
    className: "",
  },
  {
    name: "农产品运营负责人",
    role: "连接农户、渠道、品牌和消费市场。",
    experience: "参与区域公用品牌建设、合作社运营、电商助农项目。",
    reason: "体现产业连接、资源整合与持续运营意识。",
    className: "second",
  },
  {
    name: "乡村治理协作者",
    role: "在公共议题中组织讨论，推动村民参与。",
    experience: "参与村民议事、公共空间改造、志愿服务组织。",
    reason: "对应画像中的群众沟通和共识形成能力。",
    className: "third",
  },
];

const scenarios = [
  {
    id: "industry",
    title: "特色农产品滞销应对",
    brief: "本地农产品上市后销量不及预期，需要快速判断原因并协调资源。",
    hint: "适合展示产业连接、市场调研与协作推进能力。",
  },
  {
    id: "governance",
    title: "村级公共空间改造争议",
    brief: "部分村民支持改造，部分村民担心影响日常使用，需要形成可执行方案。",
    hint: "适合展示基层沟通、议事组织与风险识别能力。",
  },
  {
    id: "policy",
    title: "惠农补贴政策解释",
    brief: "群众对补贴条件存在误解，需要清晰解释政策并收集反馈。",
    hint: "适合展示政策转译、耐心沟通与服务意识。",
  },
];

const scenarioDetails = {
  industry: {
    title: "特色农产品滞销应对",
    intro: "从市场、渠道、组织和信息四个维度拆解滞销问题。",
    sections: [
      ["背景说明", "某地特色果蔬集中上市，线下批发价格波动，合作社希望尽快打开销售渠道。"],
      ["行为分析", "画像角色会先核对库存、品级、价格和目标客群，再组织渠道方、村集体和农户明确分工。"],
      ["问题与建议", "避免只依赖临时促销，应同步完善品控、包装、冷链和复购机制。"],
      ["现实启发", "乡村产业工作不只是卖产品，更要建立稳定的供需连接和组织能力。"],
    ],
  },
  governance: {
    title: "村级公共空间改造争议",
    intro: "通过议事机制把分歧转化为可讨论的问题清单。",
    sections: [
      ["背景说明", "村内计划改造闲置广场，青年群体希望增加活动空间，老人担心原有休闲功能被削弱。"],
      ["行为分析", "画像角色会组织现场走访，拆分需求，推动形成分时使用、分区设计或阶段试点方案。"],
      ["问题与建议", "不能只追求视觉更新，应保留高频使用功能，并提前说明维护责任。"],
      ["现实启发", "乡村治理的关键是让不同群体有表达渠道，并把意见转成规则和安排。"],
    ],
  },
  policy: {
    title: "惠农补贴政策解释",
    intro: "把政策条文转化为群众听得懂、能核验的办理路径。",
    sections: [
      ["背景说明", "部分农户认为自己符合补贴条件，但实际材料、面积或时间节点不完整。"],
      ["行为分析", "画像角色会先明确政策边界，再用清单说明申请条件、材料要求和后续反馈渠道。"],
      ["问题与建议", "解释政策时要避免承诺超出权限的结果，同时建立问题登记和回访机制。"],
      ["现实启发", "政策服务能力体现在准确、透明、可追踪，而不只是把文件内容复述一遍。"],
    ],
  },
};

let answers = JSON.parse(sessionStorage.getItem("quizAnswers") || "{}");

function getQuestions() {
  return quizGroups.flatMap((group) => group.questions);
}

function answeredCount() {
  return getQuestions().filter((question) => answers[question.id]).length;
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

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">三农政策 · 乡村振兴 · 职业画像</p>
        <h1>三农政策的乡村振兴职业画像测试</h1>
        <p class="lead">通过一组结构化问题，判断你在政策理解、产业协作和基层沟通中的优势，生成更贴近乡村振兴场景的职业画像。</p>
        <div class="actions">
          ${buttonLink("开始测试", "#/quiz")}
          ${buttonLink("查看画像详情", "#/profile", "secondary")}
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="container">
        ${sectionIntro("测试路径", "从个人倾向看到真实工作场景", "页面将答题、画像解读、代表人物和情景模拟串在一起，让结果不只停留在一个称号。")}
        <div class="grid three">
          <article class="card feature-card">
            <div class="feature-icon">01</div>
            <h3>答题生成画像</h3>
            <p>围绕政策判断、项目推进和群众沟通设置问题，快速梳理你的做事偏好。</p>
          </article>
          <article class="card feature-card">
            <div class="feature-icon">02</div>
            <h3>查看代表人物</h3>
            <p>把抽象画像连接到具体岗位和典型经历，帮助你理解角色的真实工作面貌。</p>
          </article>
          <article class="card feature-card">
            <div class="feature-icon">03</div>
            <h3>进入情景模拟</h3>
            <p>在农产品滞销、公共空间改造、补贴解释等场景中观察你的处理方式。</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="notice">
          完成测试后，你可以继续查看画像详情、代表人物和情景模拟，逐步理解自己适合承担的乡村振兴工作角色。
        </div>
      </div>
    </section>
  `;
}

function renderQuiz() {
  const total = getQuestions().length;
  const done = answeredCount();
  const percent = Math.round((done / total) * 100);

  const groups = quizGroups
    .map((group, groupIndex) => {
      const questions = group.questions
        .map((question, questionIndex) => {
          const options = question.options
            .map((option, optionIndex) => {
              const value = `${optionIndex + 1}`;
              const checked = answers[question.id] === value ? "checked" : "";
              return `
                <label class="option">
                  <input type="radio" name="${question.id}" value="${value}" ${checked} />
                  <span>${option}</span>
                </label>
              `;
            })
            .join("");
          return `
            <div class="question">
              <p class="question-title">${groupIndex * 3 + questionIndex + 1}. ${question.title}</p>
              <div class="options">${options}</div>
            </div>
          `;
        })
        .join("");

      return `
        <section class="card question-group">
          <header>
            <h3>${group.title}</h3>
            <span class="group-index">题组 ${groupIndex + 1}</span>
          </header>
          ${questions}
        </section>
      `;
    })
    .join("");

  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">答题页</p>
        <h1>乡村振兴职业画像测试</h1>
        <p class="lead">请根据你的真实倾向选择。每道题没有标准答案，重点是呈现你更自然的判断方式。</p>
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
        ${groups}
      </div>
    </section>

    <div class="sticky-submit">
      <div class="submit-inner">
        <p class="muted" id="quizHint">${done === total ? "题目已完成，可以提交测试。" : `还有 ${total - done} 题未完成。`}</p>
        <div class="button-row">
          ${buttonLink("返回首页", "#/", "secondary")}
          <button class="btn" id="submitQuiz" ${done === total ? "" : "disabled"}>提交测试</button>
        </div>
      </div>
    </div>
  `;
}

function renderResult() {
  const total = getQuestions().length;
  const done = answeredCount();
  const hasResult = done === total;

  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">测试结果</p>
        <h1>${hasResult ? profile.name : "暂未生成完整画像"}</h1>
        <p class="lead">${hasResult ? profile.motto : "请先完成全部题目，再查看测试结果。"}</p>
      </div>
    </section>

    <section class="section alt">
      <div class="container result-layout">
        <article class="card profile-card">
          <div class="profile-visual" aria-hidden="true">画像</div>
          <div>
            <h2>${profile.name}</h2>
            <p class="muted">${profile.summary}</p>
          </div>
          <div class="tag-list">
            ${profile.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>

        <div class="split-list">
          ${profile.traits
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
            ${buttonLink("返回测试", "#/quiz", "secondary")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPeople() {
  return people
    .map(
      (person) => `
        <article class="card person-card">
          <div class="person-photo ${person.className}" aria-hidden="true"></div>
          <div>
            <h3>${person.name}</h3>
            <p>${person.role}</p>
          </div>
          <p><strong>主要经历：</strong>${person.experience}</p>
          <p><strong>对应原因：</strong>${person.reason}</p>
        </article>
      `,
    )
    .join("");
}

function renderScenarioCards() {
  return scenarios
    .map(
      (scenario) => `
        <article class="scenario-card">
          <div>
            <h3>${scenario.title}</h3>
            <p>${scenario.brief}</p>
            <p class="muted">${scenario.hint}</p>
          </div>
          ${buttonLink("查看详情", `#/scenario/${scenario.id}`, "secondary")}
        </article>
      `,
    )
    .join("");
}

function renderProfileDetail() {
  return `
    <section class="page-hero">
      <div class="container detail-hero">
        <div>
          <p class="eyebrow">画像详情页</p>
          <h1>${profile.name}</h1>
          <p class="lead">${profile.motto}</p>
          <div class="profile-meta">
            <div class="tag-list">
              ${profile.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <div class="button-row">
              ${buttonLink("进入情景模拟", "#/scenario")}
              ${buttonLink("重新测试", "#/quiz", "secondary")}
            </div>
          </div>
        </div>
        <div class="detail-media" aria-hidden="true"></div>
      </div>
    </section>

    <section class="section alt">
      <div class="container">
        ${sectionIntro("画像简介", "把政策理解转化为基层行动", "这个画像强调统筹、沟通和执行之间的平衡，适合在复杂的乡村振兴项目中推动共识落地。")}
        <div class="grid three">
          ${profile.traits
            .map(
              (item) => `
                <article class="card">
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionIntro("代表人物", "从相近角色理解画像价值", "下面的角色展示了这种画像在基层项目、农产品运营和乡村治理中的典型工作方式。")}
        <div class="grid three">${renderPeople()}</div>
      </div>
    </section>

    <section class="section tint">
      <div class="container">
        ${sectionIntro("情景模拟", "观察画像在真实工作情境中的表现", "不同情景会展开背景、行为分析、问题建议和现实启发，帮助你把画像转成行动判断。")}
        <div class="scenario-list">${renderScenarioCards()}</div>
      </div>
    </section>
  `;
}

function renderScenarioIndex() {
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">情景模拟模块</p>
        <h1>选择一个乡村振兴工作情景</h1>
        <p class="lead">通过情景详情页展示画像的可能反应、处理方式、优势分析、改进建议与现实启发。</p>
      </div>
    </section>
    <section class="section tint">
      <div class="container">
        <div class="scenario-list">${renderScenarioCards()}</div>
      </div>
    </section>
  `;
}

function renderScenarioDetail(id) {
  const detail = scenarioDetails[id] || scenarioDetails.industry;
  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">情景详情页</p>
        <h1>${detail.title}</h1>
        <p class="lead">${detail.intro}</p>
        <div class="button-row">
          ${buttonLink("返回情景列表", "#/scenario", "secondary")}
          ${buttonLink("查看画像详情", "#/profile", "secondary")}
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="container">
        <div class="timeline">
          ${detail.sections
            .map(
              ([title, text]) => `
                <article class="timeline-item">
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function syncNav(path) {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    const active =
      href === `#${path}` ||
      (href === "#/scenario" && path.startsWith("/scenario")) ||
      (href === "#/profile" && path === "/result");
    link.classList.toggle("is-active", active);
  });
}

function bindQuizEvents() {
  document.querySelectorAll(".option input").forEach((input) => {
    input.addEventListener("change", (event) => {
      answers[event.target.name] = event.target.value;
      sessionStorage.setItem("quizAnswers", JSON.stringify(answers));
      render();
    });
  });

  const submit = document.getElementById("submitQuiz");
  if (submit) {
    submit.addEventListener("click", () => {
      const total = getQuestions().length;
      if (answeredCount() < total) return;
      setRoute("/result");
    });
  }
}

function render() {
  const app = document.getElementById("app");
  const path = window.location.hash.replace("#", "") || "/";

  if (path === "/") {
    app.innerHTML = renderHome();
  } else if (path === "/quiz") {
    app.innerHTML = renderQuiz();
    bindQuizEvents();
  } else if (path === "/result") {
    app.innerHTML = renderResult();
  } else if (path === "/profile") {
    app.innerHTML = renderProfileDetail();
  } else if (path === "/scenario") {
    app.innerHTML = renderScenarioIndex();
  } else if (path.startsWith("/scenario/")) {
    app.innerHTML = renderScenarioDetail(path.split("/")[2]);
  } else {
    app.innerHTML = renderHome();
  }

  syncNav(path);
  app.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "auto" });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
