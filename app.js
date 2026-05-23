const KNOWLEDGE_ANSWER_STORAGE_KEY = "knowledgeQuizAnswers";
const PERSONA_ANSWER_STORAGE_KEY = "personaQuizAnswers";
const KNOWLEDGE_QUIZ_IDS_STORAGE_KEY = "knowledgeQuizQuestionIds";
const PERSONA_QUIZ_IDS_STORAGE_KEY = "personaQuizQuestionIds";
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
    avatar: "data/figures/01 返乡创业新农人.png",
    tags: ["敢于创新", "市场意识", "行动力突出", "数字经济", "返乡实践"],
    leftHighlights: [
      { title: "核心特质", text: "敢闯敢干、商业思维、落地执行、资源整合" },
      { title: "适配岗位", text: "乡村产业带头人、农村电商运营、特色种养大户、乡村文旅创业者、村级集体经济负责人" },
    ],
    traits: [
      { title: "角色定位", text: "带着城市视野、市场思维与乡土情怀主动返乡扎根，是连接城乡资源、激活乡村内生动力的重要群体。" },
      { title: "发展方式", text: "熟悉电商运营、特色种养、农产品加工、乡村休闲业态等新模式，善于挖掘乡村特色资源，打造本土特色产业。" },
      { title: "实践价值", text: "在自主创业增收的同时，主动带动周边村民就业、拓展销路，盘活闲置土地、房屋等乡村资源。" },
      { title: "乡村意义", text: "以实干带动产业兴旺，助力村民共同致富，为乡村注入年轻活力与创新动力，是乡村产业振兴的领头雁与实干家。" },
      { title: "核心能力", text: "擅长资源整合、市场调研、电商运营、团队管理、风险把控，能够快速对接外部市场，落地乡村创业项目，推动产业模式创新。" },
      { title: "发展建议", text: "可深耕特色农产品、乡村文旅、农村电商赛道，主动对接惠农政策，整合村集体资源，打造标准化、品牌化的乡村创业项目。" },
    ],
  },
  {
    id: "B",
    name: "农业科技型人才",
    motto: "以科研和技术突破推动农业现代化。",
    summary: "聚焦现代农业发展需求，深耕智慧农业、良种繁育、绿色植保、节水灌溉、农机应用、农产品质量安全等专业领域，兼具专业知识与实践能力。",
    avatar: "data/figures/02 农业科技型人才.png",
    tags: ["种业创新", "智慧农业", "生物育种", "科技攻关", "成果转化"],
    leftHighlights: [
      { title: "核心特质", text: "严谨务实、技术钻研、耐心细致、科学落地" },
      { title: "适配岗位", text: "农业技术员、农技推广员、智慧农业工程师、农产品质量检测员、良种培育专员" },
    ],
    traits: [
      { title: "角色定位", text: "聚焦现代农业发展需求，深耕智慧农业、良种繁育、绿色植保、节水灌溉、农机应用、农产品质量安全等专业领域，兼具专业知识与实践能力。" },
      { title: "发展方式", text: "立足田间地头，用科学技术改造传统农业，破解传统种植养殖效率低、病虫害频发、产能受限等难题。" },
      { title: "实践价值", text: "推动农业标准化、规模化、数字化升级，善于将科研成果转化为落地技术，优化农业生产模式，降低生产风险。" },
      { title: "乡村意义", text: "提升农产品品质与附加值，为乡村产业高质量发展提供硬核技术支撑。" },
      { title: "核心能力", text: "具备专业农学知识、田间实操能力、技术推广能力，擅长将科研成果转化为可落地的实用技术。" },
      { title: "发展建议", text: "可深耕智慧农业、生态种植、农产品溯源领域，对接农业科研院所，推动技术下乡、技术普惠。" },
    ],
  },
  {
    id: "C",
    name: "乡村生态守护者",
    motto: "守护绿水青山，让乡村发展更可持续。",
    summary: "秉持绿水青山就是金山银山的发展理念，以守护乡村自然本底为核心使命。",
    avatar: "data/figures/03 乡村生态守护者.png",
    tags: ["生态保护", "责任感", "公共服务", "数字工具", "可持续发展"],
    leftHighlights: [
      { title: "核心特质", text: "责任心强、热爱自然、细心严谨、长期坚守" },
      { title: "适配岗位", text: "村级环保专员、生态管护员、人居环境整治负责人、乡村绿化专员、生态旅游规划员" },
    ],
    traits: [
      { title: "角色定位", text: "秉持绿水青山就是金山银山的发展理念，以守护乡村自然本底为核心使命。" },
      { title: "发展方式", text: "专注乡村山水林田湖草系统保护、农村人居环境整治、水土保持、垃圾分类治理、污染防治等工作，兼顾生态保护与合理开发。" },
      { title: "实践价值", text: "推动绿色农业、生态旅游、林下经济等生态友好型产业发展，平衡乡村发展与环境保护的关系。" },
      { title: "乡村意义", text: "改善村容村貌，守护乡村自然风貌与宜居环境，助力建设生态优美、宜居宜业的和美乡村。" },
      { title: "核心能力", text: "具备生态保护意识、环境治理能力、统筹规划能力，擅长生态资源维护与绿色项目落地。" },
      { title: "发展建议", text: "可参与乡村生态旅游、林下经济、绿色农业项目，推动生态保护与产业发展双向共赢。" },
    ],
  },
  {
    id: "D",
    name: "乡土文化传播者",
    motto: "把乡土生活转化为可信、可理解、可传播的内容。",
    summary: "深耕本土文化土壤，深度挖掘、整理、传承乡村非遗技艺、民俗节庆、家风家训、红色文化、农耕文明、古村历史等乡土文脉。",
    avatar: "data/figures/04 乡土文化传播者.png",
    tags: ["文化敏感", "善于表达", "影像审美", "数字传播", "尊重乡土"],
    leftHighlights: [
      { title: "核心特质", text: "热爱乡土、善于表达、创意策划、共情力强" },
      { title: "适配岗位", text: "乡村文旅策划、非遗文化专员、乡村新媒体运营、民俗活动组织者、村史馆管理员" },
    ],
    traits: [
      { title: "角色定位", text: "深耕本土文化土壤，深度挖掘、整理、传承乡村非遗技艺、民俗节庆、家风家训、红色文化、农耕文明、古村历史等乡土文脉。" },
      { title: "发展方式", text: "擅长用新媒体传播、文旅策划、文化活动、文创开发等创新方式活化传统文化，讲好乡村故事。" },
      { title: "实践价值", text: "致力于唤醒村民文化自信，打造乡村文化品牌，传承乡村精神根脉，推动传统文化与现代生活融合。" },
      { title: "乡村意义", text: "增强乡村文化凝聚力、吸引力与辨识度，为乡村文化振兴注入持久生命力。" },
      { title: "核心能力", text: "擅长内容创作、活动策划、新媒体运营、文化挖掘，具备较强的传播力与共情能力。" },
      { title: "发展建议", text: "可深耕乡村文旅融合、非遗活化、乡村新媒体赛道，打造特色乡土文化品牌。" },
    ],
  },
  {
    id: "E",
    name: "乡村基层治理干部",
    motto: "当好群众主心骨，办好基层烦心事。",
    summary: "扎根乡村一线，直面基层民生事务，是政策落地、群众服务、乡村治理的中坚力量。",
    avatar: "data/figures/05 基层治理服务者.png",
    tags: ["为民初心", "公道正派", "执行力强", "沟通协调", "扎根基层"],
    leftHighlights: [
      { title: "核心特质", text: "务实担当、善于沟通、公正负责、群众意识强" },
      { title: "适配岗位", text: "村干部、驻村工作者、基层网格员、乡村政务专员、乡风文明建设负责人" },
    ],
    traits: [
      { title: "角色定位", text: "扎根乡村一线，直面基层民生事务，是政策落地、群众服务、乡村治理的中坚力量。" },
      { title: "发展方式", text: "主要负责落实惠农政策、推进基层党建、调解邻里矛盾、开展民生服务、统筹乡村公共建设、推进乡风文明建设等工作。" },
      { title: "实践价值", text: "善于倾听村民诉求，搭建群众与政府的沟通桥梁，协调各方资源，维护乡村和谐稳定。" },
      { title: "乡村意义", text: "推动乡村治理精细化、规范化，凝聚乡村发展合力，保障乡村平稳有序发展。" },
      { title: "核心能力", text: "具备群众沟通、统筹协调、应急处理、政策落地能力，有极强的责任心与服务意识。" },
      { title: "发展建议", text: "深耕基层党建、乡村治理、民生服务领域，优化基层服务模式，提升乡村治理精细化水平。" },
    ],
  },
];

const profileStories = {
  A: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "智慧农田遇极端暴雨",
        intro: "你毕业后选择了返乡建设智慧农田。为改善传统农业依赖经验、灌溉不精准、抗灾能力弱的问题，你引入部署传感器与自动灌溉系统。然而某夜突遇极端暴雨，系统异常失控，排水与灌溉紊乱，部分农田迅速积水，幼苗被淹，若不及时处理，将面临严重减产风险。",
        choices: [
          { label: "立即人工干预抢救", result: "减少损失但成本增加", achievement: "务实型应对" },
          { label: "坚持优化系统，不人工干预", result: "部分作物损失", achievement: "技术理想主义" },
          { label: "彻底放弃智能系统", result: "效率下降，退回传统农业", achievement: "技术退化路线" },
          { label: "联合技术团队二次升级系统", result: "系统升级成功，进入稳定阶段", achievement: "技术迭代型创业者" },
        ],
      },
    ],
    caseTitle: "魏巧·引领更多“新农人”投身乡村振兴",
    caseText: "魏巧，曾在中国科学院工作，2017年，她和丈夫辞去城市中的稳定工作，回到江苏镇江家乡投身农业，成为新时代“返乡创业新农人”。返乡后，她积极发展智慧农业，利用无人机、数字化管理等现代技术种植水稻，提高农业生产效率，并带动周边农户共同发展。作为全国人大代表，她还持续关注“谁来种地”的问题，积极呼吁吸引更多青年投身“三农”事业，为乡村振兴注入青春力量。",
    image: "data/image/weiqiao.png",
  },
  D: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "传统手工艺村遭遇流量包装争议",
        intro: "你作为乡土文化传播者，准备为一个传统手工艺村制作首支互动网页内容。平台建议把普通竹编工艺包装成“千年秘术”来吸引点击，而传承人希望如实呈现制作过程。",
        choices: [
          { label: "直接使用夸张标题抢流量", result: "点击率短暂提升但真实性受质疑", achievement: "流量优先路线" },
          { label: "完全不考虑传播包装", result: "内容真实但传播范围有限", achievement: "守真但保守" },
          { label: "真实呈现工艺过程并优化标题", result: "兼顾可信度与传播效果", achievement: "平衡型传播者" },
          { label: "编造传说增强神秘感", result: "引发误读，破坏文化信任", achievement: "失真传播风险" },
        ],
      },
      {
        eyebrow: "突发情景二",
        title: "乡土文化热度过高引发村民困扰",
        intro: "你的乡土文化内容走红后，大量游客涌入村庄，影响村民日常生活，一些商家还借热度销售低质仿品。",
        choices: [
          { label: "放任流量进入先扩大热度", result: "短期关注上升但社区压力增加", achievement: "流量冒进路线" },
          { label: "立即停止所有传播", result: "争议下降但文化传播中断", achievement: "回避型处理" },
          { label: "与村民共同制定参观规则和产品准入", result: "保护社区秩序并形成长期信任", achievement: "共治型传播者" },
          { label: "只保留商业带货不回应诉求", result: "收益可能增加但口碑下降", achievement: "商业失衡路线" },
        ],
      },
    ],
    caseTitle: "李子柒·让乡土文化被更多人看见",
    caseText: "李子柒长期以短视频呈现农事、饮食和传统手工艺，通过完整的劳动过程、克制的镜头语言和稳定的乡村生活叙事，让观众看见乡土文化背后的技艺、时间与生活关系。她的事迹说明，乡土文化传播者不只是制造流量，更要把地方经验转化为可信、可理解、可传播的文化内容。",
    image: "data/image/liziqi.png",
  },
  B: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "高端育种技术落地遇行业偏见",
        intro: "你团队自主研发的抗病高产品种，各项试验数据远超进口品种。但本地农业企业长期依赖外来种源，不信任国产自研品种，不愿投入资金引种试种，你的科研成果陷入推广僵局。",
        choices: [
          { label: "搭建对比田并整理数据主动对接企业", result: "用实证打破偏见并推动合作", achievement: "实证破冰者" },
          { label: "暂时放缓新品种推广，先联合农户小规模试种积累口碑", result: "小规模种植见效慢，推广周期大幅拉长，优质良种错失最佳产业布局时机", achievement: "佛系育种师" },
          { label: "为快速打开市场，适当下调技术合作标准，简化部分种植配套流程", result: "删减部分种植流程后，品种原有优势大幅缩减，损害技术口碑", achievement: "廉价合伙人" },
          { label: "专注实验室理论研究，将成果存档搁置，等待政策扶持后再进行推广", result: "优质科研成果长期闲置，无法转化为实际生产力，科技助农价值难以体现", achievement: "沉睡研究员" },
        ],
      },
    ],
    caseTitle: "傅廷栋·六十余年潜心深耕油菜科研",
    caseText: "傅廷栋是作物遗传育种专家，中国工程院院士、第三世界科学院院士，华中农业大学教授，国家油菜工程技术研究中心主任。他毕业后便扎根华农，六十余年潜心深耕油菜科研领域，始终坚守农业科研一线。他在国际上首次发现具有重大实用价值的油菜波里马细胞质雄性不育系，成功攻克杂交油菜育种世界性技术难题，并牵头培育出一大批高产稳产、优质抗病的杂交油菜新品种，以硬核农业科技守护国家油料安全。",
    image: "data/image/fuyandong.png",
  },
  C: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "生态文旅热潮下的保护压力",
        intro: "乡村推行生态文旅新业态后，大批网红跟风前来野外航拍、私自闯入生态保育区取景，肆意惊扰野生小动物，踩踏原生草本植被，还随意丢弃户外装备垃圾。",
        choices: [
          { label: "联合村委划定防护区域并组织志愿清理", result: "快速止损修复环境，耗费较多人力精力", achievement: "乡土生态实干卫士" },
          { label: "借助短视频平台发布文明出游宣传，普及乡土生态保护常识", result: "线上引导大众观念，线下整改见效偏慢", achievement: "生态理念传播使者" },
          { label: "实地勘察生态受损范围，汇总情况向上级递交长效管护方案", result: "治标更兼顾治本，落地推行需要一定周期", achievement: "乡村生态统筹守护者" },
          { label: "看重旅游带来的短期收益，放任生态破坏行为不予制止", result: "短期拉动村内客流，乡土生态持续遭到重创", achievement: "生态守护懈怠者" },
        ],
      },
    ],
    caseTitle: "杨善洲·把荒山变成绿色森林",
    caseText: "杨善洲退休后扎根大亮山，二十多年坚持植树造林，带领群众建设生态林场，把荒山变成绿色森林。他始终坚持“为群众种树，为后代造福”的信念，用实际行动诠释了生态守护精神。如今，他的事迹仍激励着许多青年投身乡村生态保护与绿色发展事业。",
    image: "data/image/yangshanzhou.png",
  },
  E: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "集中供水主管道突发破裂",
        intro: "你是乡村基层治理干部，负责村内民生保障、项目推进与矛盾调解。村内集中供水主管道突发破裂，全村大范围断水，正值高温天气，村民情绪激动。若处置不当，容易引发群体不满。",
        choices: [
          { label: "第一时间到场安抚并协调抢修送水", result: "快速稳控局面，及时恢复供水", achievement: "应急处置先锋" },
          { label: "回避不见，让其他村干部代为处理", result: "矛盾升级，公信力下降", achievement: "回避型干部" },
          { label: "口头承诺尽快解决，拖延等待上级安排", result: "问题扩大，工作被动", achievement: "形式化履职" },
          { label: "联动专业队伍抢修并建立长效机制", result: "问题彻底解决，长效机制落地", achievement: "基层治理能手" },
        ],
      },
      {
        eyebrow: "突发情景二",
        title: "项目征地引发群众抵触",
        intro: "村内实施道路拓宽惠民项目，需调整少量农户宅基地与菜地，部分村民不理解、不配合，出现阻工、信访苗头，项目停滞，影响全村出行与长远发展。",
        choices: [
          { label: "强制推进施工，不做解释沟通", result: "矛盾激化，引发舆情与信访风险" },
          { label: "直接上报等待，不主动上门化解", result: "项目长期拖延，全村发展受影响" },
          { label: "简单宣讲政策，不解决实际诉求", result: "群众顾虑未消除，抵触情绪不减" },
          { label: "逐户上门沟通、讲清政策收益、解决合理诉求，召开村民议事会公开协商", result: "凝聚全村共识，项目顺利推进，民生改善获好评" },
        ],
      },
      {
        eyebrow: "突发情景三",
        title: "邻里纠纷激化难化解",
        intro: "村民因宅基地边界、排水通行问题发生长期争执，多次争吵激化矛盾，若不及时处置，可能引发冲突、影响村内稳定。",
        choices: [
          { label: "实地核查、现场调解、依法依规、兼顾情理，促成双方和解", result: "矛盾圆满化解，邻里重归于好，乡风更加和谐" },
          { label: "劝双方各自忍让，不做实质调处", result: "问题悬而未决，矛盾持续积累" },
          { label: "直接上交司法所，不跟进处理", result: "群众不信任，基层治理效能下降" },
          { label: "偏袒一方，简单粗暴判定对错", result: "矛盾进一步激化，引发更大冲突" },
        ],
      },
      {
        eyebrow: "突发情景四",
        title: "惠农政策落地“最后一公里”",
        intro: "上级下发农业补贴、养老医保、技能培训等多项惠农政策，村民不了解、不会办，出现漏享、错享问题，群众有怨言。",
        choices: [
          { label: "只张贴公告，不讲解不指导", result: "政策知晓率低，群众应享未享" },
          { label: "选择性传达，不全面覆盖", result: "信息不对称，引发不公平质疑" },
          { label: "入户宣讲、一对一指导、全程代办、公开公示", result: "政策直达快享，群众满意认可" },
          { label: "等待村民主动咨询，不主动服务", result: "服务缺位，影响政府公信力" },
        ],
      },
      {
        eyebrow: "突发情景五",
        title: "突发极端天气应急处置",
        intro: "台风暴雨来袭，村内存在山体滑坡、房屋进水、道路塌方风险，部分老人、低洼户需紧急转移，时间紧、任务重。",
        choices: [
          { label: "简单通知，不组织转移", result: "安全隐患大，易出现人员财产损失" },
          { label: "逐户排查、优先转移老弱病残、安置保障到位、全程值守巡查", result: "零伤亡零事故，群众生命财产安全得到保障" },
          { label: "只转移自家亲友，不管其他村民", result: "引发群众不满，丧失公信力" },
          { label: "等待上级指令，不主动行动", result: "错失最佳处置时机，造成严重后果" },
        ],
      },
    ],
    caseTitle: "黄文秀·新时代青年基层干部榜样",
    caseText: "黄文秀放弃城市优越工作，主动回乡担任驻村第一书记，扎根基层一线，把群众安危冷暖放在心上。她走村入户摸清民情，宣讲惠农政策，发展特色产业，化解邻里矛盾，改善基础设施，用真心真情服务村民，带领群众脱贫增收。她把最美青春献给乡村基层，以忠诚与担当诠释基层干部的初心使命，是青年扎根基层、服务乡村振兴的优秀典范。",
    image: "data/image/huangwenxiu.png",
  },
};

let knowledgeAnswers = loadKnowledgeAnswers();
let personaAnswers = loadPersonaAnswers();
let activeKnowledgeQuiz = [];
let activePersonaQuiz = [];
let activeQuizIndexByType = { knowledge: 0, persona: 0 };
let activeScenarioIndexByProfile = {};
let activeProfileId = null;
let activeCaseIndex = null;
let activeIncidentDialog = null;
let incidentGateCompletedByProfile = {};

const quizStages = {
  knowledge: ["政策基础", "关键概念", "实践判断", "集中复盘"],
  persona: ["观察乡村", "判断路径", "选择行动", "生成画像"],
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function clampQuizIndex(index, total) {
  if (total <= 0) return 0;
  const safeIndex = Number.isInteger(index) ? index : 0;
  return Math.min(Math.max(safeIndex, 0), total - 1);
}

function loadQuizIds(storageKey) {
  try {
    const value = JSON.parse(sessionStorage.getItem(storageKey) || "[]");
    return Array.isArray(value) ? value.filter((id) => typeof id === "string") : [];
  } catch {
    sessionStorage.removeItem(storageKey);
    return [];
  }
}

function saveQuizIds(storageKey, questions) {
  sessionStorage.setItem(storageKey, JSON.stringify(questions.map((question) => question.id)));
}

function buildQuizFromSource(source, count, type, label, storageKey) {
  const targetCount = Math.min(count, source.length);
  const sourceById = new Map(source.map((item) => [item.id, item]));
  const storedIds = loadQuizIds(storageKey);
  const storedQuestions = storedIds.map((id) => sourceById.get(id)).filter(Boolean);
  const hasStoredOrder =
    storedIds.length === targetCount &&
    storedQuestions.length === targetCount &&
    new Set(storedIds).size === targetCount;
  const selectedQuestions = hasStoredOrder
    ? storedQuestions
    : shuffle(source).slice(0, targetCount);
  const questions = selectedQuestions.map((item, index) => ({
    ...item,
    type,
    quizId: item.id,
    label,
    order: index + 1,
  }));

  saveQuizIds(storageKey, questions);
  return questions;
}

function buildActiveKnowledgeQuiz() {
  activeKnowledgeQuiz = buildQuizFromSource(
    knowledgeSource,
    KNOWLEDGE_COUNT,
    "knowledge",
    "知识题",
    KNOWLEDGE_QUIZ_IDS_STORAGE_KEY,
  );

  activeQuizIndexByType.knowledge = clampQuizIndex(activeQuizIndexByType.knowledge, activeKnowledgeQuiz.length);
  knowledgeAnswers = normalizeAnswers(knowledgeAnswers, activeKnowledgeQuiz);
  saveKnowledgeAnswers();
}

function buildActivePersonaQuiz() {
  activePersonaQuiz = buildQuizFromSource(
    personaSource,
    PERSONA_COUNT,
    "persona",
    "画像题",
    PERSONA_QUIZ_IDS_STORAGE_KEY,
  );

  activeQuizIndexByType.persona = clampQuizIndex(activeQuizIndexByType.persona, activePersonaQuiz.length);
  personaAnswers = normalizeAnswers(personaAnswers, activePersonaQuiz);
  savePersonaAnswers();
}

function buildActiveQuizzes() {
  buildActiveKnowledgeQuiz();
  buildActivePersonaQuiz();
}

function loadKnowledgeAnswers() {
  try {
    return JSON.parse(sessionStorage.getItem(KNOWLEDGE_ANSWER_STORAGE_KEY) || "{}");
  } catch {
    sessionStorage.removeItem(KNOWLEDGE_ANSWER_STORAGE_KEY);
    return {};
  }
}

function loadPersonaAnswers() {
  try {
    return JSON.parse(sessionStorage.getItem(PERSONA_ANSWER_STORAGE_KEY) || "{}");
  } catch {
    sessionStorage.removeItem(PERSONA_ANSWER_STORAGE_KEY);
    return {};
  }
}

function saveKnowledgeAnswers() {
  sessionStorage.setItem(KNOWLEDGE_ANSWER_STORAGE_KEY, JSON.stringify(knowledgeAnswers));
}

function savePersonaAnswers() {
  sessionStorage.setItem(PERSONA_ANSWER_STORAGE_KEY, JSON.stringify(personaAnswers));
}

function normalizeAnswers(value, questions) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return questions.reduce((safeAnswers, question) => {
    const answer = value[question.quizId];
    if (question.options[Number(answer) - 1]) safeAnswers[question.quizId] = String(answer);
    return safeAnswers;
  }, {});
}

function getKnowledgeQuestions() {
  return activeKnowledgeQuiz;
}

function getPersonaQuestions() {
  return activePersonaQuiz;
}

function getProfileById(profileId) {
  return profiles.find((item) => item.id === profileId);
}

function answeredCount(questions, answersMap) {
  return questions.filter((question) => answersMap[question.quizId]).length;
}

function hasCompletedQuiz(questions, answersMap) {
  return answeredCount(questions, answersMap) === questions.length && questions.length > 0;
}

function hasCompletedPersonaQuiz() {
  return hasCompletedQuiz(getPersonaQuestions(), personaAnswers);
}

function getKnowledgeStats(questions = getKnowledgeQuestions(), answersMap = knowledgeAnswers) {
  const rows = questions.map((question) => {
    const answerIndex = Number(answersMap[question.quizId]) - 1;
    const isAnswered = Number.isInteger(answerIndex) && answerIndex >= 0;
    const isCorrect = isAnswered && answerIndex === question.answer;
    return {
      question,
      answerIndex,
      isAnswered,
      isCorrect,
      selectedOption: isAnswered ? question.options[answerIndex] : "未作答",
      correctOption: question.options[question.answer],
    };
  });

  return {
    total: rows.length,
    correct: rows.filter((row) => row.isCorrect).length,
    wrong: rows.filter((row) => row.isAnswered && !row.isCorrect).length,
    rows,
  };
}

function calculatePersonaScores() {
  const scores = Object.fromEntries(profiles.map((item) => [item.id, 0]));

  getPersonaQuestions().forEach((question) => {
    const answerIndex = Number(personaAnswers[question.quizId]) - 1;
    if (answerIndex < 0) return;

    const optionLetter = question.options[answerIndex]?.[0];
    if (!optionLetter || scores[optionLetter] === undefined) return;

    const weightedScore = Number(question.weights?.[optionLetter]) || 1;
    scores[optionLetter] += weightedScore;
  });

  return scores;
}

function getResultProfile() {
  if (!hasCompletedPersonaQuiz()) return null;
  const scores = calculatePersonaScores();
  const bestScore = Math.max(...Object.values(scores));
  const tiedProfiles = profiles.filter((item) => scores[item.id] === bestScore);
  return tiedProfiles[0] || profiles[0];
}

function getCurrentResultProfile() {
  return getResultProfile();
}

function resetKnowledgeQuiz() {
  knowledgeAnswers = {};
  sessionStorage.removeItem(KNOWLEDGE_ANSWER_STORAGE_KEY);
  sessionStorage.removeItem(KNOWLEDGE_QUIZ_IDS_STORAGE_KEY);
  activeQuizIndexByType.knowledge = 0;
  buildActiveKnowledgeQuiz();
  setRoute("/knowledge");
}

function resetPersonaQuiz() {
  personaAnswers = {};
  sessionStorage.removeItem(PERSONA_ANSWER_STORAGE_KEY);
  sessionStorage.removeItem(PERSONA_QUIZ_IDS_STORAGE_KEY);
  activeQuizIndexByType.persona = 0;
  activeProfileId = null;
  activeCaseIndex = null;
  activeIncidentDialog = null;
  incidentGateCompletedByProfile = {};
  buildActivePersonaQuiz();
  setRoute("/persona");
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

function buildIncidentProgression(profile, scenario, choice) {
  return [
    `你选择“${choice.label}”后，团队首先围绕“${scenario.title}”快速统一行动口径，明确由谁判断风险、谁沟通资源、谁负责落地。`,
    `随着处理推进，${profile.name}的能力倾向被进一步放大：${choice.result}，这让现场局势进入新的阶段。`,
  ];
}

function canCloseIncidentDialog() {
  return Number.isInteger(activeIncidentDialog?.choiceIndex);
}

function openIncidentDialog(profileId, scenarioIndex = 0) {
  activeScenarioIndexByProfile[profileId] = scenarioIndex;
  activeIncidentDialog = { profileId, scenarioIndex, choiceIndex: null };
}

function ensureForcedIncident(profileId) {
  if (!profileId || incidentGateCompletedByProfile[profileId] || activeIncidentDialog) return;
  const scenarioIndex = activeScenarioIndexByProfile[profileId] ?? 0;
  openIncidentDialog(profileId, scenarioIndex);
}

function renderBlackoutEffect() {
  return `
    <div class="blackout-effect" aria-hidden="true">
      <span class="firework firework-one"></span>
      <span class="firework firework-two"></span>
      <span class="firework firework-three"></span>
      <span class="surprise-text">结局揭晓</span>
    </div>
  `;
}

function renderIncidentDialog() {
  if (!activeIncidentDialog) return "";

  const profile = getProfileById(activeIncidentDialog.profileId);
  const story = profileStories[activeIncidentDialog.profileId];
  const scenario = story?.scenes?.[activeIncidentDialog.scenarioIndex] || story?.scenes?.[0];
  if (!profile || !scenario) return "";

  const selectedChoice = Number.isInteger(activeIncidentDialog.choiceIndex)
    ? scenario.choices[activeIncidentDialog.choiceIndex]
    : null;
  const choices = scenario.choices
    .map((choice, index) => {
      const isSelected = activeIncidentDialog.choiceIndex === index;
      return `
        <button
          class="incident-choice ${isSelected ? "is-selected" : ""}"
          type="button"
          data-incident-choice="${index}"
          aria-pressed="${isSelected}"
        >
          <span class="choice-badge">${String.fromCharCode(65 + index)}</span>
          <span>${choice.label}</span>
        </button>
      `;
    })
    .join("");

  const outcome = selectedChoice
    ? (() => {
      const progression = buildIncidentProgression(profile, scenario, selectedChoice);
      return `
      <div class="incident-development">
        <article>
          <p class="incident-outcome-label">情景发展 1</p>
          <p>${progression[0]}</p>
        </article>
        <article>
          <p class="incident-outcome-label">情景发展 2</p>
          <p>${progression[1]}</p>
        </article>
      </div>
      <div class="incident-outcome-grid">
        <div>
          <p class="incident-outcome-label">结局</p>
          <p>${selectedChoice.result}</p>
        </div>
        ${selectedChoice.achievement ? `<div>
          <p class="incident-outcome-label">获得成就</p>
          <p>${selectedChoice.achievement}</p>
        </div>` : ""}
      </div>
      <div class="incident-finish-row">
        <button class="btn" type="button" data-action="close-incident">完成并关闭</button>
      </div>
    `;
    })()
    : `<p class="incident-placeholder">请选择一个应对方案，查看它带来的结局与成就。</p>`;

  return `
    ${selectedChoice ? renderBlackoutEffect() : ""}
    <div class="incident-backdrop" role="presentation">
      <section class="incident-dialog" role="dialog" aria-modal="true" aria-labelledby="incidentTitle" aria-describedby="incidentIntro">
        ${canCloseIncidentDialog() ? `<button class="incident-close" type="button" data-action="close-incident" aria-label="关闭突发状况">×</button>` : ""}
        <div class="incident-topline">
          <p class="incident-alert">强制突发状况</p>
          <button class="incident-refresh" type="button" data-action="refresh-incident">刷新状况</button>
        </div>
        <p class="incident-profile">${profile.name}</p>
        <h2 id="incidentTitle">${scenario.title}</h2>
        <p class="incident-intro" id="incidentIntro">${scenario.intro}</p>
        <div class="incident-options" aria-label="突发状况应对选项">
          ${choices}
        </div>
        <div class="incident-result" aria-live="polite">
          ${outcome}
        </div>
      </section>
    </div>
  `;
}

function renderLockedPage() {
  const knowledgeDone = answeredCount(activeKnowledgeQuiz, knowledgeAnswers);
  const personaDone = answeredCount(activePersonaQuiz, personaAnswers);
  const actions = [
    !hasCompletedQuiz(activePersonaQuiz, personaAnswers) ? buttonLink("继续职业问答", "#/persona") : "",
    buttonLink("进入知识问答", "#/knowledge", "secondary"),
    buttonLink("返回首页", "#/", "secondary"),
  ].join("");

  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">流程提示</p>
        <h1>请先完成职业测试</h1>
        <p class="lead">职业测试会生成画像结果；知识问答可单独提交查看对错，不影响画像生成。</p>
      </div>
    </section>
    <section class="section alt">
      <div class="container">
        <div class="empty-state">
          <h2>还没有可用结果</h2>
          <p class="muted">当前已完成：职业问答 ${personaDone} / ${activePersonaQuiz.length} 题。知识问答进度 ${knowledgeDone} / ${activeKnowledgeQuiz.length} 题。</p>
          <div class="button-row">${actions}</div>
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
        <div class="actions">
          ${buttonLink("开始职业测试", "#/persona")}
          ${buttonLink("开始知识问答", "#/knowledge", "secondary")}
        </div>
      </div>
    </section>
  `;
}

function getPostSubmitAction(currentType) {
  if (currentType === "knowledge") {
    return { label: "查看全部题目", route: "/knowledge-bank" };
  }

  return { label: "进入测试结果", route: "/result" };
}

function getQuizTypeFromPath(path) {
  if (path === "/knowledge" || path === "/knowledge-result") return "knowledge";
  if (path === "/persona" || path === "/persona-result") return "persona";
  return null;
}

function getQuizStage(type, index, total) {
  const stages = quizStages[type] || quizStages.persona;
  if (total <= 1) return stages[0];
  const stageIndex = Math.min(stages.length - 1, Math.floor((index / (total - 1)) * stages.length));
  return stages[stageIndex];
}

function getOptionParts(option, optionIndex) {
  const match = String(option).match(/^([A-Z])\.\s*(.+)$/);
  return {
    badge: match ? match[1] : String.fromCharCode(65 + optionIndex),
    text: match ? match[2] : option,
  };
}

function renderQuizStepper(questions, answersMap, currentIndex, showFeedback) {
  return questions
    .map((question, index) => {
      const answerIndex = Number(answersMap[question.quizId]) - 1;
      const isAnswered = Number.isInteger(answerIndex) && answerIndex >= 0;
      const isCorrect = question.type === "knowledge" && showFeedback && isAnswered && answerIndex === question.answer;
      const isWrong = question.type === "knowledge" && showFeedback && isAnswered && answerIndex !== question.answer;
      const stateClass = [
        index === currentIndex ? "is-current" : "",
        isAnswered ? "is-answered" : "",
        isCorrect ? "is-correct-step" : "",
        isWrong ? "is-wrong-step" : "",
      ].filter(Boolean).join(" ");

      return `
        <button
          class="quiz-step ${stateClass}"
          type="button"
          data-action="go-question"
          data-question-index="${index}"
          aria-label="跳转到第 ${question.order} 题"
          aria-current="${index === currentIndex ? "step" : "false"}"
        >
          ${question.order}
        </button>
      `;
    })
    .join("");
}

function renderQuizAside(type, questions, answersMap, currentQuestion, currentIndex, showFeedback) {
  const total = questions.length;
  const done = answeredCount(questions, answersMap);
  const stage = getQuizStage(type, currentIndex, total);
  const currentAnswerIndex = Number(answersMap[currentQuestion.quizId]) - 1;
  const currentSelection = currentQuestion.options[currentAnswerIndex] || "尚未选择";
  const statBlock = type === "knowledge" && showFeedback
    ? (() => {
      const stats = getKnowledgeStats(questions, answersMap);
      return `
        <div class="quiz-stat-grid">
          <div><strong>${stats.correct}</strong><span>答对</span></div>
          <div><strong>${stats.wrong}</strong><span>答错</span></div>
          <div><strong>${stats.total}</strong><span>总题</span></div>
        </div>
      `;
    })()
    : `
      <div class="quiz-stat-grid">
        <div><strong>${done}</strong><span>已答</span></div>
        <div><strong>${Math.max(total - done, 0)}</strong><span>未答</span></div>
        <div><strong>${Math.round((done / total) * 100) || 0}%</strong><span>进度</span></div>
      </div>
    `;

  if (type === "knowledge") {
    return `
      <aside class="quiz-side-panel" aria-label="知识问答状态">
        <p class="quiz-side-kicker">当前阶段</p>
        <h3>${stage}</h3>
        ${statBlock}
        <div class="quiz-side-note">
          <span>当前选择</span>
          <strong>${currentSelection}</strong>
        </div>
      </aside>
    `;
  }

  return `
    <aside class="quiz-side-panel" aria-label="职业画像状态">
      <p class="quiz-side-kicker">当前阶段</p>
      <h3>${stage}</h3>
      ${statBlock}
      <div class="quiz-side-note">
        <span>当前选择</span>
        <strong>${currentSelection}</strong>
      </div>
    </aside>
  `;
}

function renderQuizPage(
  title,
  intro,
  questions,
  answersMap,
  submitLabel,
  submitRoute,
  showFeedback = false,
  isSubmittedView = false,
  extraContent = "",
  extraActions = "",
) {
  const total = questions.length;
  const done = answeredCount(questions, answersMap);
  const quizType = questions[0]?.type || "persona";
  const currentIndex = clampQuizIndex(activeQuizIndexByType[quizType], total);
  activeQuizIndexByType[quizType] = currentIndex;
  const currentQuestion = questions[currentIndex];
  const percent = total ? Math.round((done / total) * 100) : 0;
  const currentAnswerIndex = currentQuestion ? Number(answersMap[currentQuestion.quizId]) - 1 : -1;
  const currentAnswered = Number.isInteger(currentAnswerIndex) && currentAnswerIndex >= 0;
  const hint = isSubmittedView
    ? (submitRoute === "/result" ? "职业测试已完成，可以查看测试结果。" : "知识问答已提交，可以查看全部题库或重新答题。")
    : currentAnswered
      ? (done === total ? "题目已完成，可以提交测试。" : "本题已记录，可以继续下一题。")
      : "当前题还未作答。";

  if (!currentQuestion) {
    return `
      <section class="page-hero quiz-hero">
        <div class="container">
          <p class="eyebrow">答题页</p>
          <h1>${title}</h1>
          <p class="lead">当前没有可用题目。</p>
        </div>
      </section>
    `;
  }

  const options = currentQuestion.options
    .map((option, optionIndex) => {
      const value = String(optionIndex + 1);
      const checked = answersMap[currentQuestion.quizId] === value ? "checked" : "";
      const disabled = isSubmittedView ? "disabled" : "";
      const isKnowledgeFeedback = showFeedback && currentQuestion.type === "knowledge";
      const isSelected = currentAnswerIndex === optionIndex;
      const isCorrectOption = optionIndex === currentQuestion.answer;
      const feedbackClass = isKnowledgeFeedback && isCorrectOption
        ? "is-correct-option"
        : isKnowledgeFeedback && isSelected && !isCorrectOption
          ? "is-wrong-option"
          : "";
      const optionParts = getOptionParts(option, optionIndex);

      return `
        <label class="option ${isSelected ? "is-selected" : ""} ${feedbackClass}">
          <input type="radio" name="${currentQuestion.quizId}" value="${value}" ${checked} ${disabled} />
          <span class="option-badge">${optionParts.badge}</span>
          <span class="option-copy">${optionParts.text}</span>
        </label>
      `;
    })
    .join("");
  const isCorrect = currentQuestion.type === "knowledge" ? currentAnswerIndex === currentQuestion.answer : true;
  const questionClass = showFeedback && currentQuestion.type === "knowledge"
    ? (isCorrect ? "is-correct-question" : "is-wrong-question")
    : "";
  const feedback =
    showFeedback && currentQuestion.type === "knowledge" && currentAnswered
      ? `<p class="answer-feedback ${isCorrect ? "correct" : "wrong"}">${isCorrect ? "回答正确" : `回答错误，正确答案是 ${currentQuestion.options[currentQuestion.answer]}`}${currentQuestion.explanation ? `。${currentQuestion.explanation}` : "。"}</p>`
      : "";
  const previousDisabled = currentIndex === 0 ? "disabled" : "";
  const nextDisabled = currentIndex >= total - 1 ? "disabled" : "";
  const submitDisabled = done === total ? "" : "disabled";

  return `
    <section class="page-hero quiz-hero">
      <div class="container quiz-hero-grid">
        <div>
          <p class="eyebrow">答题页</p>
          <h1>${title}</h1>
          <p class="lead">${intro}</p>
        </div>
        <div class="quiz-hero-status">
          <span>第 ${currentQuestion.order} / ${total} 题</span>
          <strong>${getQuizStage(quizType, currentIndex, total)}</strong>
        </div>
      </div>
    </section>

    <section class="section quiz-section">
      <div class="container quiz-shell">
        <div class="quiz-progress-panel">
          <div class="progress-wrap">
            <div class="progress-meta">
              <span>已完成 ${done} / ${total} 题</span>
              <span>${percent}%</span>
            </div>
            <div class="progress-track" aria-label="答题进度">
              <div class="progress-fill" style="width: ${percent}%"></div>
            </div>
          </div>
          <div class="quiz-stepper" aria-label="题目导航">
            ${renderQuizStepper(questions, answersMap, currentIndex, showFeedback)}
          </div>
        </div>
        ${extraContent}
        <div class="quiz-workspace">
          <section class="question-stage ${questionClass}" aria-labelledby="currentQuestionTitle">
            <div class="question-stage-top">
              <div>
                <p class="question-meta">${currentQuestion.label} · ${getQuizStage(quizType, currentIndex, total)}</p>
                <p class="question-count">第 ${currentQuestion.order} 题</p>
              </div>
              <span class="question-status-pill ${currentAnswered ? "is-done" : ""}">${currentAnswered ? "已作答" : "待作答"}</span>
            </div>
            <h2 class="question-title" id="currentQuestionTitle">${currentQuestion.question}</h2>
            <div class="options quiz-options">${options}</div>
            ${feedback}
          </section>
          ${renderQuizAside(quizType, questions, answersMap, currentQuestion, currentIndex, showFeedback)}
        </div>
      </div>
    </section>

    <div class="sticky-submit">
      <div class="submit-inner">
        <p class="muted" id="quizHint">${hint}</p>
        <div class="button-row">
          ${buttonLink("返回首页", "#/", "secondary")}
          ${extraActions}
          <button class="btn secondary" type="button" data-action="quiz-nav" data-quiz-direction="prev" ${previousDisabled}>上一题</button>
          <button class="btn secondary" type="button" data-action="quiz-nav" data-quiz-direction="next" ${nextDisabled}>下一题</button>
          <button class="btn" type="button" data-action="submit-quiz" data-submit-route="${submitRoute}" ${submitDisabled}>${submitLabel}</button>
        </div>
      </div>
    </div>
  `;
}

function renderKnowledgeSubmitSummary() {
  const stats = getKnowledgeStats();
  const wrongRows = stats.rows.filter((row) => row.isAnswered && !row.isCorrect);

  const wrongList = wrongRows.length
    ? `
      <div class="mistake-list">
        ${wrongRows
          .map(
            (row, index) => `
              <article class="mistake-item">
                <p class="mistake-index">错题 ${index + 1}</p>
                <h3>${row.question.order}. ${row.question.question}</h3>
                <p><strong>你的答案：</strong>${row.selectedOption}</p>
                <p><strong>正确答案：</strong>${row.correctOption}</p>
                <p><strong>详解：</strong>${row.question.explanation || "暂无详解。"}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    `
    : `<p class="all-correct">本次知识问答全部答对，可以继续查看完整题库复习。</p>`;

  return `
    <section class="knowledge-summary" aria-label="知识问答结果汇总">
      <div class="knowledge-score-card correct">
        <span>${stats.correct}</span>
        <p>答对题数</p>
      </div>
      <div class="knowledge-score-card wrong">
        <span>${stats.wrong}</span>
        <p>答错题数</p>
      </div>
      <div class="knowledge-score-card total">
        <span>${stats.total}</span>
        <p>本次题数</p>
      </div>
      <div class="mistake-summary">
        <h3>错题汇总</h3>
        ${wrongList}
      </div>
    </section>
  `;
}

function renderKnowledgeBank() {
  const showAnswers = hasCompletedQuiz(activeKnowledgeQuiz, knowledgeAnswers);
  const questions = knowledgeSource.map((question, index) => ({
    ...question,
    type: "knowledge",
    quizId: question.id,
    label: "题库题",
    order: index + 1,
  }));

  const items = questions
    .map(
      (question) => `
        <article class="bank-question">
          <p class="question-meta">${question.label}</p>
          <h3>${question.order}. ${question.question}</h3>
          <div class="bank-options">
            ${question.options
              .map(
                (option, index) => `
                  <span class="bank-option ${showAnswers && index === question.answer ? "is-answer" : ""}">${option}</span>
                `,
              )
              .join("")}
          </div>
          ${showAnswers ? `<p class="bank-explanation"><strong>答案：</strong>${question.options[question.answer]}。<strong>详解：</strong>${question.explanation || "暂无详解。"}</p>` : ""}
        </article>
      `,
    )
    .join("");

  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">知识题库</p>
        <h1>全部题目</h1>
        <p class="lead">${showAnswers ? "已提交知识问答，下面展示完整题库、正确答案和详解，便于集中复习。" : "这里先展示完整题库的题干和选项。完成并提交知识问答后，再开放答案与详解。"}</p>
        <div class="button-row">
          ${buttonLink("返回知识问答", "#/knowledge", "secondary")}
          ${showAnswers ? buttonLink("查看本次结果", "#/knowledge-result", "secondary") : ""}
        </div>
      </div>
    </section>
    <section class="section alt">
      <div class="container bank-list">
        ${items}
      </div>
    </section>
  `;
}

function renderKnowledgeQuiz() {
  return renderQuizPage(
    "知识问答",
    "10 题知识问答，答完后可单独提交查看结果。",
    activeKnowledgeQuiz,
    knowledgeAnswers,
    "提交知识问答",
    "/knowledge-result",
    false,
    false,
    "",
    buttonLink("所有题目", "#/knowledge-bank", "secondary"),
  );
}

function renderKnowledgeResult() {
  const nextAction = getPostSubmitAction("knowledge");
  return renderQuizPage(
    "知识问答已提交",
    "以下为知识问答的作答结果、错题汇总与逐题详解。",
    activeKnowledgeQuiz,
    knowledgeAnswers,
    nextAction.label,
    nextAction.route,
    true,
    true,
    renderKnowledgeSubmitSummary(),
    `<button class="btn secondary" type="button" data-action="reset-quiz">重新答题</button>`,
  );
}

function renderPersonaQuiz() {
  return renderQuizPage("职业问答", "10 题职业画像问答，答完后可单独提交查看结果。", activePersonaQuiz, personaAnswers, "提交职业问答", "/persona-result", false);
}

function renderPersonaResult() {
  const nextAction = getPostSubmitAction("persona");
  return renderQuizPage("职业问答已提交", "职业画像问答已完成，可以进入最终画像结果。", activePersonaQuiz, personaAnswers, nextAction.label, nextAction.route, false, true);
}

function getPersonaAnswerAnalysis(resultProfile) {
  return getPersonaQuestions().map((question) => {
    const answerIndex = Number(personaAnswers[question.quizId]) - 1;
    const selectedOption = question.options[answerIndex] || "";
    const selectedProfileId = selectedOption[0];
    const selectedProfile = getProfileById(selectedProfileId);
    const isCoreMatch = selectedProfileId === resultProfile.id;
    return {
      question,
      selectedOption,
      selectedProfile,
      isCoreMatch,
      analysis: isCoreMatch
        ? `这道题的选择直接指向“${resultProfile.name}”，说明你在这个场景里更倾向于用该画像的方式判断和行动。`
        : selectedProfile
          ? `这道题体现了“${selectedProfile.name}”的局部倾向，它与最终画像共同构成你的复合能力结构。`
          : "这道题体现了你的综合判断倾向。",
    };
  });
}

function renderPersonaScoreBars(scores, activeProfileIdForResult) {
  const maxScore = Math.max(...Object.values(scores), 1);
  return profiles
    .map((profile) => {
      const score = scores[profile.id] || 0;
      const width = Math.max(4, Math.round((score / maxScore) * 100));
      return `
        <div class="score-row ${profile.id === activeProfileIdForResult ? "is-active" : ""}">
          <span>${profile.name}</span>
          <div class="score-track"><i style="width: ${width}%"></i></div>
          <strong>${score.toFixed(1)}</strong>
        </div>
      `;
    })
    .join("");
}

function renderPersonaChoiceAnalysis(resultProfile) {
  const analysisRows = getPersonaAnswerAnalysis(resultProfile);
  const coreMatches = analysisRows.filter((row) => row.isCoreMatch);
  const displayedRows = [
    ...coreMatches.slice(0, 4),
    ...analysisRows.filter((row) => !row.isCoreMatch).slice(0, Math.max(0, 4 - coreMatches.length)),
  ];

  return displayedRows
    .map(
      (row) => `
        <article class="choice-analysis-item ${row.isCoreMatch ? "is-core" : ""}">
          <p class="choice-analysis-question">${row.question.order}. ${row.question.question}</p>
          <p class="choice-analysis-answer">${row.selectedOption}</p>
          <p>${row.analysis}</p>
        </article>
      `,
    )
    .join("");
}

function renderResult() {
  const resultProfile = getResultProfile();
  if (!resultProfile) return renderLockedPage();
  activeProfileId = resultProfile.id;
  const story = profileStories[resultProfile.id];
  const scores = calculatePersonaScores();
  const topChoices = renderPersonaChoiceAnalysis(resultProfile);

  return `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">测试结果</p>
        <h1>${resultProfile.name}</h1>
        <p class="lead">${resultProfile.motto}</p>
      </div>
    </section>

    <section class="section alt">
      <div class="container result-simple-layout">
        <aside class="result-photo-panel">
          <img src="${resultProfile.avatar || story?.image || "data/image/beijing.png"}" alt="${resultProfile.name}" />
          <div class="result-photo-caption">
            <p class="eyebrow">你的职业画像</p>
            <h2>${resultProfile.name}</h2>
            <p>${resultProfile.motto}</p>
          </div>
        </aside>

        <article class="result-analysis-panel">
          <p class="eyebrow">答题分析</p>
          <h2>你的选择更接近“${resultProfile.name}”</h2>
          <p class="result-analysis-lead">${resultProfile.summary}</p>

          <div class="score-board" aria-label="职业画像得分">
            ${renderPersonaScoreBars(scores, resultProfile.id)}
          </div>

          <div class="choice-analysis-list">
            ${topChoices}
          </div>

          <div class="tag-list result-tag-list">
            ${resultProfile.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>

          <div class="button-row result-actions">
            <button class="btn" data-action="open-profile">查看详情</button>
            <button class="btn secondary" data-action="reset-quiz">重新测试</button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function getCaseVideoUrl(story) {
  const keyword = story?.caseTitle || "乡村振兴 人物 介绍";
  return `https://search.bilibili.com/all?keyword=${encodeURIComponent(keyword)}`;
}

function renderCaseStackCarousel(resultProfileId) {
  const initialIndex = profiles.findIndex((profile) => profile.id === resultProfileId);
  if (activeCaseIndex === null) activeCaseIndex = Math.max(0, initialIndex);

  const total = profiles.length;
  const activeProfile = profiles[activeCaseIndex] || profiles[0];
  const cards = profiles
    .map((profile, index) => {
      const story = profileStories[profile.id];
      if (!story) return "";
      const relative = (index - activeCaseIndex + total) % total;
      const stackClass = relative === 0
        ? "is-active"
        : relative === 1
          ? "is-next"
          : relative === total - 1
            ? "is-prev"
            : "is-hidden";

      return `
        <article class="case-stack-card ${stackClass}" aria-hidden="${relative === 0 ? "false" : "true"}">
          <a class="case-image-link" href="${getCaseVideoUrl(story)}" target="_blank" rel="noopener noreferrer" tabindex="${relative === 0 ? "0" : "-1"}" aria-label="打开${story.caseTitle}的视频介绍">
            <img src="${story.image}" alt="${story.caseTitle}" />
            <span>视频介绍</span>
          </a>
          <div class="case-stack-copy">
            <p class="trait-kicker">${profile.name}</p>
            <h3>${story.caseTitle}</h3>
            <p>${story.caseText}</p>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <div class="case-stack-shell">
      <div class="case-stack-head">
        <div>
          <p class="eyebrow">人物案例</p>
          <h2>${activeProfile ? activeProfile.name : "人物介绍"}</h2>
        </div>
        <div class="case-stack-controls">
          <button class="btn secondary" type="button" data-case-nav="prev">上一位</button>
          <span>${activeCaseIndex + 1} / ${total}</span>
          <button class="btn secondary" type="button" data-case-nav="next">下一位</button>
        </div>
      </div>
      <div class="case-stack-viewport">
        ${cards}
      </div>
    </div>
  `;
}

function renderProfileDetail() {
  const resultProfile = getResultProfile();
  if (!resultProfile) return renderLockedPage();

  activeProfileId = resultProfile.id;
  const story = profileStories[resultProfile.id];
  const scenarioIndex = activeScenarioIndexByProfile[resultProfile.id] ?? 0;
  const scenario = story?.scenes?.[scenarioIndex];
  const scenarioCount = story?.scenes?.length || 0;

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
        <figure class="detail-media" aria-label="${resultProfile.name}职业画像">
          <img src="${resultProfile.avatar || story?.image || "data/image/beijing.png"}" alt="${resultProfile.name}职业画像" />
        </figure>
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
          <h2>${scenario?.eyebrow || "把你的能力放进真实场景"}</h2>
        </div>
        <div class="scenario-carousel">
          <div class="scenario-carousel-panel">
            <div class="scenario-carousel-header">
              <div>
                <p class="scenario-kicker">${scenario?.eyebrow || "突发情景一"}</p>
                <h3>${scenario?.title || "把你的能力放进真实场景"}</h3>
              </div>
              <div class="scenario-carousel-controls">
                <button class="btn secondary scenario-nav" data-scenario-nav="prev">上一页</button>
                <span class="scenario-indicator-bar" aria-hidden="true">
                  ${story.scenes.map((_, idx) => `<span class="scenario-indicator ${idx === scenarioIndex ? "is-active" : ""}"></span>`).join("")}
                </span>
                <span class="scenario-counter">${scenarioIndex + 1} / ${scenarioCount}</span>
                <button class="btn secondary scenario-nav" data-scenario-nav="next">下一页</button>
              </div>
            </div>
            <div class="intro-panel scenario-intro">
              <p>${scenario?.intro || story.intro}</p>
            </div>
            <article class="scenario-trigger-panel">
              <div>
                <p class="trait-kicker">即时应对</p>
                <h3>点击触发这个突发状况</h3>
                <p>弹窗会给出可选处理方案。选择后，将展示对应的结局和成就。</p>
              </div>
              <button class="btn warn" type="button" data-action="open-incident" data-profile-id="${resultProfile.id}" data-scenario-index="${scenarioIndex}">触发突发状况</button>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section tint">
      <div class="container">
        ${renderCaseStackCarousel(resultProfile.id)}
      </div>
    </section>
    ` : ""}
  `;
}

function syncNav(path) {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    const active = href === `#${path}`
      || (href === "#/persona" && (path === "/persona-result" || path === "/result" || path === "/profile"))
      || (href === "#/knowledge" && (path === "/knowledge-result" || path === "/knowledge-bank"));
    link.classList.toggle("is-active", active);
  });
}

function bindQuizEvents() {
  document.querySelectorAll(".option input").forEach((input) => {
    input.addEventListener("change", (event) => {
      const path = window.location.hash.replace("#", "") || "/";
      if (path === "/knowledge" || path === "/knowledge-result") {
        knowledgeAnswers[event.target.name] = event.target.value;
        saveKnowledgeAnswers();
      } else if (path === "/persona" || path === "/persona-result") {
        personaAnswers[event.target.name] = event.target.value;
        savePersonaAnswers();
      }
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-action='quiz-nav']").forEach((button) => {
    button.addEventListener("click", () => {
      const path = window.location.hash.replace("#", "") || "/";
      const quizType = getQuizTypeFromPath(path);
      if (!quizType) return;
      const questions = quizType === "knowledge" ? activeKnowledgeQuiz : activePersonaQuiz;
      const delta = button.dataset.quizDirection === "next" ? 1 : -1;
      activeQuizIndexByType[quizType] = clampQuizIndex(activeQuizIndexByType[quizType] + delta, questions.length);
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-action='go-question']").forEach((button) => {
    button.addEventListener("click", () => {
      const path = window.location.hash.replace("#", "") || "/";
      const quizType = getQuizTypeFromPath(path);
      if (!quizType) return;
      const questions = quizType === "knowledge" ? activeKnowledgeQuiz : activePersonaQuiz;
      activeQuizIndexByType[quizType] = clampQuizIndex(Number(button.dataset.questionIndex), questions.length);
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-action='submit-quiz']").forEach((submit) => {
    submit.addEventListener("click", () => {
      const path = window.location.hash.replace("#", "") || "/";
      const isKnowledge = path === "/knowledge" || path === "/knowledge-result";
      const quizType = isKnowledge ? "knowledge" : "persona";
      const questions = isKnowledge ? activeKnowledgeQuiz : activePersonaQuiz;
      const answersMap = isKnowledge ? knowledgeAnswers : personaAnswers;
      const unanswered = questions
        .filter((question) => !answersMap[question.quizId])
        .map((question) => question.order);

      if (unanswered.length > 0) {
        const firstUnansweredIndex = questions.findIndex((question) => !answersMap[question.quizId]);
        activeQuizIndexByType[quizType] = clampQuizIndex(firstUnansweredIndex, questions.length);
        render({ preserveScroll: true });
        window.alert(`还有未完成的题目：第 ${unanswered.join("、")} 题。请先完成后再提交。`);
        return;
      }

      setRoute(submit.dataset.submitRoute);
    });
  });
}

function bindPageActions() {
  document.querySelectorAll("[data-action='reset-quiz']").forEach((button) => {
    button.addEventListener("click", () => {
      const path = window.location.hash.replace("#", "") || "/";
      if (path === "/knowledge" || path === "/knowledge-result") {
        resetKnowledgeQuiz();
      } else if (path === "/persona" || path === "/persona-result") {
        resetPersonaQuiz();
      } else if (path === "/result" || path === "/profile") {
        resetPersonaQuiz();
      } else {
        setRoute("/");
      }
    });
  });

  document.querySelectorAll("[data-action='open-profile']").forEach((button) => {
    button.addEventListener("click", () => setRoute("/profile"));
  });

  document.querySelectorAll("[data-action='open-incident']").forEach((button) => {
    button.addEventListener("click", () => {
      const profileId = button.dataset.profileId || activeProfileId;
      const scenarioIndex = Number(button.dataset.scenarioIndex || 0);
      openIncidentDialog(profileId, scenarioIndex);
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-action='close-incident']").forEach((element) => {
    element.addEventListener("click", () => {
      if (!canCloseIncidentDialog()) return;
      incidentGateCompletedByProfile[activeIncidentDialog.profileId] = true;
      activeIncidentDialog = null;
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-action='refresh-incident']").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeIncidentDialog) return;
      const profileId = activeIncidentDialog.profileId;
      const scenes = profileStories[profileId]?.scenes || [];
      if (!scenes.length) return;
      const nextIndex = (activeIncidentDialog.scenarioIndex + 1) % scenes.length;
      openIncidentDialog(profileId, nextIndex);
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-incident-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeIncidentDialog) return;
      activeIncidentDialog = {
        ...activeIncidentDialog,
        choiceIndex: Number(button.dataset.incidentChoice),
      };
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-scenario-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeProfileId) return;
      const scenes = profileStories[activeProfileId]?.scenes || [];
      if (!scenes.length) return;
      const current = activeScenarioIndexByProfile[activeProfileId] ?? 0;
      const nextIndex = button.dataset.scenarioNav === "next"
        ? (current + 1) % scenes.length
        : (current - 1 + scenes.length) % scenes.length;
      activeScenarioIndexByProfile[activeProfileId] = nextIndex;
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-case-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      const total = profiles.length;
      const current = activeCaseIndex ?? 0;
      activeCaseIndex = button.dataset.caseNav === "next"
        ? (current + 1) % total
        : (current - 1 + total) % total;
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-route]").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });
}

function render(options = {}) {
  const app = document.getElementById("app");
  const path = window.location.hash.replace("#", "") || "/";
  const preserveScroll = options.preserveScroll === true;
  const scrollY = window.scrollY;

  if (activeKnowledgeQuiz.length === 0) buildActiveKnowledgeQuiz();
  if (activePersonaQuiz.length === 0) buildActivePersonaQuiz();
  if (path !== "/result" && path !== "/profile") activeIncidentDialog = null;

  if (path === "/") app.innerHTML = renderHome();
  else if (path === "/knowledge") app.innerHTML = renderKnowledgeQuiz();
  else if (path === "/persona") app.innerHTML = renderPersonaQuiz();
  else if (path === "/knowledge-bank") app.innerHTML = renderKnowledgeBank();
  else if (path === "/knowledge-result") app.innerHTML = renderKnowledgeResult();
  else if (path === "/persona-result") app.innerHTML = renderPersonaResult();
  else if (path === "/result") app.innerHTML = renderResult();
  else if (path === "/profile") {
    app.innerHTML = renderProfileDetail();
    ensureForcedIncident(activeProfileId);
  }
  else app.innerHTML = renderHome();

  app.innerHTML += renderIncidentDialog();
  bindQuizEvents();
  bindPageActions();
  syncNav(path);
  app.focus({ preventScroll: true });
  window.scrollTo({ top: preserveScroll ? scrollY : 0, behavior: "auto" });
}

buildActiveQuizzes();
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activeIncidentDialog && canCloseIncidentDialog()) {
    incidentGateCompletedByProfile[activeIncidentDialog.profileId] = true;
    activeIncidentDialog = null;
    render({ preserveScroll: true });
  }
});
window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
