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
        teaser: "你是一个返乡创业新农人，正用智慧农业改造家乡良田。突然有一天，极端暴雨袭来，智能系统失灵、农田迅速积水……",
        intro: "你毕业后选择了返乡建设智慧农田。为改善传统农业依赖经验、灌溉不精准、抗灾能力弱的问题，你引入部署传感器与自动灌溉系统。然而某夜突遇极端暴雨，系统异常失控，排水与灌溉紊乱，部分农田迅速积水，幼苗被淹，若不及时处理，将面临严重减产风险。",
        choices: [
          { label: "立即人工干预抢救", result: "减少损失但成本增加", achievement: "务实型应对" },
          { label: "坚持优化系统，不人工干预", result: "部分作物损失", achievement: "技术理想主义" },
          { label: "彻底放弃智能系统", result: "效率下降，退回传统农业", achievement: "技术退化路线" },
          { label: "联合技术团队二次升级系统", result: "系统升级成功，进入稳定阶段", achievement: "技术迭代型创业者" },
        ],
      },
    ],
    cases: [
      {
        name: "魏巧",
        badge: "智慧种稻能手",
        text: "魏巧，新时代“返乡创业新农人”代表。她曾在中国科学院工作，2017年与丈夫一同辞去城市工作，回到江苏镇江投身农业。她积极发展智慧农业，运用无人机、数字化管理等现代技术种植水稻，提高生产效率并带动周边农户。作为全国人大代表，她持续关注“谁来种地”问题，呼吁更多青年投身“三农”事业，为乡村振兴贡献力量。",
        image: "data/image/weiqiao.png",
        videoUrl: "https://b23.tv/K13EGNp",
      },
      {
        name: "冯小涛",
        badge: "苹果状元户",
        text: "冯小涛32岁时返回家乡河南洛宁县上戈镇，创办苹果种植合作社。他从对农业一无所知的“门外汉”，通过十年努力成为当地知名的“苹果状元户”，走上新型职业化农民之路。2023年全国两会期间，他建议政府进一步推动“农文旅”融合，吸引更多年轻人返乡创业，共同助力乡村振兴，为建设美好乡村贡献力量。",
        image: "data/image/fengxiaotao.png",
        videoUrl: "https://b23.tv/njqZGdt",
      },
      {
        name: "由硕",
        badge: "乡亲们的小麦专家",
        text: "由硕，00后，山东聊城临清人。身为青岛科技大学体育特长生，他放弃保研机会，于2022年回乡接手家中农资店。面对不解，他通过苦读专业书籍、请教老师，迅速从“外行”变为乡亲信赖的“小由专家”。他敏锐抓住新媒体机遇，在快手用方言直播讲解小麦、玉米种植技术，以贴近农民的大白话迅速走红，账号粉丝突破25万，被网友称为“掌管小麦的神”，成为用新思维服务家乡农业的新农人代表。",
        image: "data/image/youshuo.png",
        videoUrl: "https://b23.tv/cv43bWr",
      },
    ],
  },
  D: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "传统手工艺村遭遇流量包装争议",
        teaser: "你是一个乡土文化传播者，正准备为手工艺村留下真实记录。突然有一天，流量包装与传承人的坚持正面交锋……",
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
        teaser: "你的乡土文化作品一炮而红，村庄迎来前所未有的关注。突然有一天，过热的人流与仿冒产品让村民苦不堪言……",
        intro: "你的乡土文化内容走红后，大量游客涌入村庄，影响村民日常生活，一些商家还借热度销售低质仿品。",
        choices: [
          { label: "放任流量进入先扩大热度", result: "短期关注上升但社区压力增加", achievement: "流量冒进路线" },
          { label: "立即停止所有传播", result: "争议下降但文化传播中断", achievement: "回避型处理" },
          { label: "与村民共同制定参观规则和产品准入", result: "保护社区秩序并形成长期信任", achievement: "共治型传播者" },
          { label: "只保留商业带货不回应诉求", result: "收益可能增加但口碑下降", achievement: "商业失衡路线" },
        ],
      },
    ],
    cases: [
      {
        name: "李子柒",
        badge: "东方田园叙事者",
        text: "李子柒，知名乡村文化视频创作者。她以极具美感的镜头语言，系统呈现中国传统农事、饮食与手工艺，在海内外平台展现诗意田园生活。经历三年沉淀后，她于2024年携新作回归，并接受新华社独家专访，表达对非遗传承的持续热爱与探索。其作品将乡土经验转化为可感知、可传播的文化内容，成为连接传统与现代的独特桥梁。",
        image: "data/image/liziqi.png",
        videoUrl: "https://b23.tv/ctgRUoM",
      },
      {
        name: "李玉刚",
        badge: "乡情艺行者",
        text: "李玉刚出身吉林乡村，早年艰辛的打工经历使其对乡土怀有深厚情感。他不仅以《新贵妃醉酒》《昭君出塞》等作品创新传承中国古典美学，更以实际行动回馈乡土：2012年通过微博发起“救梨”助农行动，推动农产品产销步入“微时代”，入选央视年度三农新闻。其艺术创作与公益实践，共同体现了从乡土中生发、向世界传播东方文化的坚守与温度。",
        image: "data/image/liyugang.png",
        videoUrl: "https://b23.tv/Ciy0YTK",
      },
      {
        name: "左靖",
        badge: "乡土建筑师",
        text: "左靖作为策展人与乡村工作者，2016年起深度参与河南修武县大南坡村的乡建实践。他摒弃大拆大建，以“文化梳理”与“空间赋能”为核心，带领团队修复老大队部为社区中心，并策划“大南坡计划”，引入当代艺术、出版与地方风物，将废弃公共空间转化为美育场所。其工作旨在激活乡土内生文化，重建社群与土地的情感联结，是艺术介入乡村、实现“文化复兴”的典型样本。",
        image: "data/image/zuojing.png",
        videoUrl: "https://b23.tv/vrDUwJ4",
      },
    ],
  },
  B: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "高端育种技术落地遇行业偏见",
        teaser: "你是一个农业科技工作者，手握打破行业偏见的优质良种。突然有一天，推广陷入僵局，每一步都格外艰难……",
        intro: "你团队自主研发的抗病高产品种，各项试验数据远超进口品种。但本地农业企业长期依赖外来种源，不信任国产自研品种，不愿投入资金引种试种，你的科研成果陷入推广僵局。",
        choices: [
          { label: "搭建对比田并整理数据主动对接企业", result: "用实证打破偏见并推动合作", achievement: "实证破冰者" },
          { label: "暂时放缓新品种推广，先联合农户小规模试种积累口碑", result: "小规模种植见效慢，推广周期大幅拉长，优质良种错失最佳产业布局时机", achievement: "佛系育种师" },
          { label: "为快速打开市场，适当下调技术合作标准，简化部分种植配套流程", result: "删减部分种植流程后，品种原有优势大幅缩减，损害技术口碑", achievement: "廉价合伙人" },
          { label: "专注实验室理论研究，将成果存档搁置，等待政策扶持后再进行推广", result: "优质科研成果长期闲置，无法转化为实际生产力，科技助农价值难以体现", achievement: "沉睡研究员" },
        ],
      },
    ],
    cases: [
      {
        name: "傅廷栋",
        badge: "世界杂交油菜之父",
        text: "傅廷栋，中国工程院院士，毕生深耕油菜遗传育种。他在国际上首次发现油菜波里马细胞质雄性不育系，攻克杂交油菜育种世界难题，该种质资源被全球40余国应用，成为行业基石。他培育出大批高产、优质、抗病杂交油菜新品种，并研发高油酸、耐盐碱等新型品种，在全国推广，极大推动了我国油菜产业高质量发展。六十余年来，他坚持将论文写在大地上，常年深入田间，以科技守护国家油料安全。",
        image: "data/image/fuyandong.png",
        videoUrl: "https://b23.tv/xH8Mopq",
      },
      {
        name: "朱有勇",
        badge: "山地拓粮的实干院士",
        text: "朱有勇，中国工程院院士、云南农业大学名誉校长。他长期致力于农业科学技术的研究与推广，其主导的“水稻上山”技术，旨在利用山区生态条件创新水稻种植模式，以拓展粮食生产空间、助力山区农民增收。该技术在推广过程中曾引发关于可行性、生态影响及产量的广泛讨论与质疑。面对争议，朱有勇院士坚持实地研究与示范，并在山地现场接受专访进行回应，体现了其将论文写在大地上、直面现实问题的科研担当与实干精神。",
        image: "data/image/zhuyouyong.png",
        videoUrl: "https://b23.tv/KEsucqV",
      },
      {
        name: "张福锁",
        badge: "“科技小院”奠基人",
        text: "张福锁，中国工程院院士、中国农业大学教授，国际著名植物营养学家。他40多年扎根科研与农田一线，既在《自然》《科学》主刊发表多篇论文，取得前沿理论突破，更秉持“将论文写在大地上”的理念。他于2009年创建“科技小院”模式，带领师生驻守农家，为农民提供零距离科技服务，助力千万农民增产增收。该模式已被写入中央一号文件，成为科技兴农的创新抓手。他每年深蹲农村200余天，即便重病初愈，仍推动科技小院“出海”，践行“为农民当院士”的誓言。",
        image: "data/image/zhangfusuo.png",
        videoUrl: "https://b23.tv/BZn0cTn",
      },
    ],
  },
  C: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "生态文旅热潮下的保护压力",
        teaser: "你是一个乡村生态守护者，守护着家乡的绿水青山。突然有一天，生态保育区被流量搅乱，保护环境刻不容缓……",
        intro: "乡村推行生态文旅新业态后，大批网红跟风前来野外航拍、私自闯入生态保育区取景，肆意惊扰野生小动物，踩踏原生草本植被，还随意丢弃户外装备垃圾。",
        choices: [
          { label: "联合村委划定防护区域并组织志愿清理", result: "快速止损修复环境，耗费较多人力精力", achievement: "乡土生态实干卫士" },
          { label: "借助短视频平台发布文明出游宣传，普及乡土生态保护常识", result: "线上引导大众观念，线下整改见效偏慢", achievement: "生态理念传播使者" },
          { label: "实地勘察生态受损范围，汇总情况向上级递交长效管护方案", result: "治标更兼顾治本，落地推行需要一定周期", achievement: "乡村生态统筹守护者" },
          { label: "看重旅游带来的短期收益，放任生态破坏行为不予制止", result: "短期拉动村内客流，乡土生态持续遭到重创", achievement: "生态守护懈怠者" },
        ],
      },
    ],
    cases: [
      {
        name: "杨善洲",
        badge: "草鞋书记",
        text: "杨善洲，云南省保山原地委书记。退休后，他主动放弃进城安享晚年的机会，扎根家乡大亮山，义务植树造林22年，带领群众将5.6万亩荒山变为价值3亿多元的莽莽林海。他一生艰苦朴素，常头戴竹叶帽、脚踏草鞋深入基层，被群众亲切称为“草鞋书记”。他将林场无偿捐献给国家，践行了“绿了荒山，白了头，为民造福永不退休”的誓言，是党员干部“不忘初心、奉献一生”的楷模。",
        image: "data/image/yangshanzhou.png",
        videoUrl: "https://b23.tv/UFkpo0C",
      },
      {
        name: "拉巴次仁",
        badge: "高原蓝医生",
        text: "拉巴次仁，西藏拉萨市畜牧兽医总站副站长、2025年度“三农人物”。他出身牧区，学成后毅然返乡。2022年春，他在海拔4500米处坚守55天，成功确诊并控制了西藏首次成规模流行的牦牛疫病，建立起一套科学防治方案。十余年来，他翻译教材、培训大批乡村兽医，为高原畜牧业筑起健康屏障，被牧民亲切称为“蓝医生”。",
        image: "data/image/labaciren.png",
        videoUrl: "https://b23.tv/2eTcGbI",
      },
      {
        name: "党永富",
        badge: "土地医生",
        text: "党永富，第十三届全国人大代表，被誉为“土代表”。他三十余年深耕土壤治理，创立“三系法”系统解决方案，攻克农田污染与退化“卡脖子”难题。其研发的除草剂残留治理技术，已让5600万亩耕地重获生机，累计增产粮食近300亿公斤。他积极履职，围绕土壤污染防治等提交高质量议案数十件。",
        image: "data/image/dangyongfu.png",
        videoUrl: "https://b23.tv/hPbBj7L",
      },
    ],
  },
  E: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "集中供水主管道突发破裂",
        teaser: "你是一个乡村基层治理干部，把村民的冷暖挂在心上。突然有一天，供水主管道破裂，全村断水、现场一触即发……",
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
        teaser: "你正推进道路拓宽惠民项目，希望让全村出行更方便。突然有一天，征地调整引发群众抵触，项目陷入停滞……",
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
        teaser: "你习惯在田间地头化解邻里矛盾。突然有一天，一场宅基地纠纷再度激化，双方互不相让……",
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
        teaser: "你把惠农政策送到村民身边，希望人人都能应享尽享。突然有一天，漏享错享引发怨言，信任面临考验……",
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
        teaser: "你值守在防汛抗灾一线，守护着乡亲们的安全。突然有一天，台风暴雨来袭，转移安置刻不容缓……",
        intro: "台风暴雨来袭，村内存在山体滑坡、房屋进水、道路塌方风险，部分老人、低洼户需紧急转移，时间紧、任务重。",
        choices: [
          { label: "简单通知，不组织转移", result: "安全隐患大，易出现人员财产损失" },
          { label: "逐户排查、优先转移老弱病残、安置保障到位、全程值守巡查", result: "零伤亡零事故，群众生命财产安全得到保障" },
          { label: "只转移自家亲友，不管其他村民", result: "引发群众不满，丧失公信力" },
          { label: "等待上级指令，不主动行动", result: "错失最佳处置时机，造成严重后果" },
        ],
      },
    ],
    cases: [
      {
        name: "黄文秀",
        badge: "大山的女儿",
        text: "黄文秀，北京师范大学硕士毕业生，放弃大城市工作机会，回到家乡广西百色，担任百坭村驻村第一书记。她扎根山村，绘制“贫困户分布图”，带领群众发展砂糖橘等产业，全村贫困发生率从22.88%降至2.71%。2019年6月，她在返村途中遭遇山洪，因公殉职，年仅30岁。她被追授“时代楷模”“全国脱贫攻坚楷模”等称号，用生命诠释了共产党员的初心与忠诚。",
        image: "data/image/huangwenxiu.png",
        videoUrl: "https://b23.tv/JO0pkuK",
      },
      {
        name: "沈燕芬",
        badge: "铁犁玫瑰",
        text: "“90后”沈燕芬，曾为深圳都市白领。2018年，她应父亲呼唤返乡，从质疑“能开多少工资”到毅然接手家中农机合作社。她苦学驾驶各类大中型农机，用实干打消村民疑虑，后牵头组建广州首家农机联合社，年度服务面积超10万亩，带动村民增收。2023年，她当选全国人大代表，将“新农人”的声音带进人民大会堂。",
        image: "data/image/shenyanfen.png",
        videoUrl: "https://b23.tv/AeTECMG",
      },
      {
        name: "黄大发",
        badge: "当代愚公",
        text: "黄大发，贵州遵义草王坝村原党支部书记。为解山村缺水之困，他立下誓言，带领村民用锄头、铁锤，历时36年在绝壁上凿出一条跨3山9崖、总长9400米的“生命渠”，兑现“水过不去、拿命来铺”的诺言。通水后，他又带领村民发展产业脱贫致富。其事迹感动中国，被誉为“当代愚公”，荣获“七一勋章”“时代楷模”等至高荣誉。",
        image: "data/image/huangdafa.png",
        videoUrl: "https://b23.tv/fMnPDF4",
      },
    ],
  },
};

function getProfileStory(profileId) {
  const legacy = profileStories[profileId];
  const bankScenes = window.INCIDENT_BANK?.[profileId]?.scenes;
  if (legacy && bankScenes?.length) return { ...legacy, scenes: bankScenes };
  if (legacy) return legacy;
  if (bankScenes?.length) return { scenes: bankScenes };
  return null;
}

let knowledgeAnswers = loadKnowledgeAnswers();
let personaAnswers = loadPersonaAnswers();
let activeKnowledgeQuiz = [];
let activePersonaQuiz = [];
let activeQuizIndexByType = { knowledge: 0, persona: 0 };
let activeKnowledgeMistakeId = null;
let lastRenderedPath = "";
let activeScenarioIndexByProfile = {};
let activeProfileId = null;
let activeCaseIndexByProfile = {};
let activeIncidentDialog = null;
let incidentGateCompletedByProfile = {};
let incidentScenarioRevealedByProfile = {};
let forcedIncidentTimeoutId = null;
let forcedIncidentScheduledProfileId = null;

const FORCED_INCIDENT_MIN_MS = 3000;
const FORCED_INCIDENT_MAX_MS = 10000;

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
  activeKnowledgeMistakeId = null;
  buildActiveKnowledgeQuiz();
  setRoute("/knowledge");
}

function resetPersonaQuiz() {
  personaAnswers = {};
  sessionStorage.removeItem(PERSONA_ANSWER_STORAGE_KEY);
  sessionStorage.removeItem(PERSONA_QUIZ_IDS_STORAGE_KEY);
  activeQuizIndexByType.persona = 0;
  activeProfileId = null;
  activeCaseIndexByProfile = {};
  activeIncidentDialog = null;
  incidentGateCompletedByProfile = {};
  incidentScenarioRevealedByProfile = {};
  clearForcedIncidentSchedule();
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
    choice.progression1 || `你选择“${choice.label}”后，团队首先围绕“${scenario.title}”快速统一行动口径，明确由谁判断风险、谁沟通资源、谁负责落地。`,
    choice.progression2 || `随着处理推进，${profile.name}的能力倾向被进一步放大：${choice.result}，这让现场局势进入新的阶段。`,
  ];
}

function splitStoryPageText(text, sentencesPerPage = 2) {
  if (!text) return [];
  const parts = text.match(/[^。！？；]+[。！？；]?/g)?.map((part) => part.trim()).filter(Boolean) || [text.trim()];
  if (parts.length <= sentencesPerPage) return parts.filter(Boolean);
  const pages = [];
  for (let i = 0; i < parts.length; i += sentencesPerPage) {
    pages.push(parts.slice(i, i + sentencesPerPage).join(""));
  }
  return pages;
}

function deriveIncidentBranchResult(progression2, result1) {
  if (!progression2) return "局势未能好转，最终留下难以弥补的遗憾";
  const text = progression2.replace(/[。！？；]+$/g, "").trim();
  const rules = [
    [/返回城市|梦想.*破灭|离开.*乡村|离开村庄/, "理想受挫，你不得不告别这段返乡路"],
    [/心灰意冷|收拾行李/, "信心耗尽，只能选择抽身离去"],
    [/腐烂|眼睁睁|血本无归|付诸东流|白费|彻底荒废|再也无法恢复/, "核心损失难以挽回，前期投入大幅折损"],
    [/寥寥无几|观看人数|冷场|销量.*下滑|传播范围有限|澄清效果甚微/, "努力没有换来预期回应，计划被迫搁浅"],
    [/压价|低价抛售|利润微薄|成本.*增加|挤压.*利润|几乎没有盈利/, "虽勉强维持运转，却几乎赚不到收益"],
    [/卫生问题|投诉|声誉|失去.*信任|抵制|误解|低俗/, "信任与口碑受损，后续经营更加艰难"],
    [/受伤|误伤|冲突|威胁|对立|纠纷|恶性/, "矛盾激化并付出代价，局面比预想更被动"],
    [/赔付.*低于|进展缓慢|没有通过|未能成功|申请没有|没有获得批准/, "外部支持不及预期，推进节奏严重滞后"],
    [/消极怠工|解散|破裂|僵局|各执一词|迟迟得不到解决/, "协作难以为继，问题长期悬而未决"],
    [/拒绝|态度强硬|销毁|窃取|抢走了/, "遭遇强硬阻力，关键支持被切断"],
    [/效果不佳|效率低下|操作复杂|故障|混乱不堪|管理难度/, "执行层面频频受阻，方案难以落地"],
    [/彻底失传|彻底消亡|彻底崩溃|灭绝|彻底破坏/, "原有基础被不可逆地破坏或失去"],
    [/失望|失落|不尊重/, "辜负了他人期待，关系与信任出现裂痕"],
    [/诉讼|官司/, "矛盾升级为法律争端，消耗大量精力"],
    [/人员伤亡|无法挽回|恶劣的社会影响/, "事态失控并造成严重后果"],
  ];
  for (const [pattern, outcome] of rules) {
    if (pattern.test(text)) return outcome;
  }
  const clauses = text.split(/[，,；]/).map((part) => part.trim()).filter(Boolean);
  const last = clauses[clauses.length - 1] || text;
  if (last.length >= 8 && last.length <= 28 && last !== result1) return last;
  if (last.length > 28) return `${last.slice(0, 26)}……`;
  return `这一路径并未带来转机：${last}`;
}

function deriveIncidentBranchAchievement(progression2) {
  if (!progression2) return "受挫的决策者";
  const text = progression2;
  if (/返回城市|破灭|离开|荒废|失传|消亡|崩溃|灭绝|人员伤亡|彻底失败|恶性/.test(text)) return "失意途中的见证者";
  if (/受伤|冲突|威胁|纠纷|投诉|对立|风波|抵制/.test(text)) return "风波亲历者";
  if (/寥寥|冷场|不佳|缓慢|不足|受阻|僵局|误解|效果甚微|失败/.test(text)) return "受挫前行者";
  if (/利润|成本|挤压|亏损|价格上涨/.test(text)) return "代价承受的决策者";
  if (/拒绝|强硬|销毁|窃取|诉讼|官司/.test(text)) return "碰壁的实干者";
  if (/失望|失落|不尊重/.test(text)) return "关系失衡的经手人";
  if (/部分|少数|有限|依然/.test(text)) return "局部失利的操盘手";
  return "受挫的决策者";
}

function getIncidentBranchOutcome(choice, progressionIndex) {
  const branch = progressionIndex === 1 ? 2 : 1;
  if (branch === 1) {
    return {
      result: choice.result1 || choice.result,
      achievement: choice.achievement1 || choice.achievement,
    };
  }
  return {
    result: choice.result2 || deriveIncidentBranchResult(choice.progression2, choice.result1 || choice.result),
    achievement: choice.achievement2 || deriveIncidentBranchAchievement(choice.progression2),
  };
}

function hasSelectedIncidentProgression(progressionIndex) {
  return progressionIndex === 0 || progressionIndex === 1;
}

function buildPage2Development(choice, scenario) {
  return `你很快决定采取这一方案：${choice.label}。团队随即行动起来，局面开始变化，而真正的考验也在此时逼近。`;
}

function isIncidentBranchGood(progressionIndex) {
  return progressionIndex === 0;
}

function buildIncidentStoryPages(profile, scenario, choice, progressionIndex) {
  const progression = buildIncidentProgression(profile, scenario, choice);
  const pages = [
    { type: "text", text: scenario.intro },
    { type: "text", text: buildPage2Development(choice, scenario) },
    { type: "branch", progression },
  ];
  if (hasSelectedIncidentProgression(progressionIndex)) {
    const outcome = getIncidentBranchOutcome(choice, progressionIndex);
    pages.push({
      type: "result",
      text: outcome.result,
      isGood: isIncidentBranchGood(progressionIndex),
      achievement: outcome.achievement,
    });
  }
  return pages;
}

function buildIncidentSummaryNarrative(profile, scenario, choice, progressionIndex = 0) {
  const progression = buildIncidentProgression(profile, scenario, choice);
  const selectedIndex = progressionIndex === 1 ? 1 : 0;
  const outcome = getIncidentBranchOutcome(choice, progressionIndex);
  const intro = scenario.intro.replace(/[。！？；]+$/g, "");
  const development = progression[selectedIndex].replace(/[。！？；]+$/g, "");
  const resultText = outcome.result.replace(/[。！？；]+$/g, "");
  const narrative = `${intro}。你选择了「${choice.label}」。${development}。最终，${resultText}。`;
  return `
    <div class="incident-summary-story">
      <p class="incident-summary-narrative">${narrative}</p>
      ${outcome.achievement ? `<p class="incident-summary-achievement"><span>获得成就</span>${outcome.achievement}</p>` : ""}
    </div>
  `;
}

function getIncidentPlaybackContext(dialog) {
  const profile = getProfileById(dialog.profileId);
  const scenario = getIncidentScenario({
    scenarioProfileId: dialog.scenarioProfileId || dialog.profileId,
    scenarioIndex: dialog.scenarioIndex,
  });
  const choice = scenario?.choices?.[dialog.choiceIndex];
  return { profile, scenario, choice };
}

function getIncidentPlaybackPages(dialog) {
  if (!dialog || !Number.isInteger(dialog.choiceIndex)) return [];
  const { profile, scenario, choice } = getIncidentPlaybackContext(dialog);
  if (!profile || !scenario || !choice) return [];
  return buildIncidentStoryPages(
    profile,
    scenario,
    choice,
    hasSelectedIncidentProgression(dialog.progressionIndex) ? dialog.progressionIndex : null,
  );
}

function getIncidentBranchStep(pages) {
  return pages.findIndex((page) => page.type === "branch");
}

function getIncidentResultStep(pages) {
  return pages.findIndex((page) => page.type === "result");
}

function canCloseIncidentDialog() {
  return activeIncidentDialog?.phase === "summary"
    && Number.isInteger(activeIncidentDialog?.choiceIndex)
    && hasSelectedIncidentProgression(activeIncidentDialog?.progressionIndex);
}

function clearForcedIncidentSchedule() {
  if (forcedIncidentTimeoutId !== null) {
    clearTimeout(forcedIncidentTimeoutId);
    forcedIncidentTimeoutId = null;
  }
  forcedIncidentScheduledProfileId = null;
}

function getForcedIncidentDelayMs() {
  return (
    FORCED_INCIDENT_MIN_MS
    + Math.floor(Math.random() * (FORCED_INCIDENT_MAX_MS - FORCED_INCIDENT_MIN_MS + 1))
  );
}

function scheduleForcedIncident(profileId) {
  if (!profileId || incidentGateCompletedByProfile[profileId] || activeIncidentDialog) return;
  if (incidentScenarioRevealedByProfile[profileId]) return;
  if (!getProfileStory(profileId)?.scenes?.length) return;
  if (forcedIncidentScheduledProfileId === profileId && forcedIncidentTimeoutId !== null) return;

  clearForcedIncidentSchedule();
  forcedIncidentScheduledProfileId = profileId;
  const delayMs = getForcedIncidentDelayMs();

  forcedIncidentTimeoutId = setTimeout(() => {
    forcedIncidentTimeoutId = null;
    forcedIncidentScheduledProfileId = null;

    const path = window.location.hash.replace("#", "") || "/";
    if (path !== "/profile" || profileId !== activeProfileId) return;
    if (incidentGateCompletedByProfile[profileId] || activeIncidentDialog || incidentScenarioRevealedByProfile[profileId]) return;

    const scenarioIndex = activeScenarioIndexByProfile[profileId] ?? 0;
    openIncidentDialog(profileId, scenarioIndex);
    render({ preserveScroll: true });
  }, delayMs);
}

function openIncidentDialog(profileId, scenarioIndex = 0, scenarioProfileId = profileId) {
  clearForcedIncidentSchedule();
  activeScenarioIndexByProfile[profileId] = scenarioIndex;
  activeIncidentDialog = {
    profileId,
    scenarioProfileId,
    scenarioIndex,
    choiceIndex: null,
    progressionIndex: null,
    phase: "select",
    playbackStep: 0,
  };
}

function getAllIncidentScenarioRefs() {
  const profileIds = new Set([
    ...Object.keys(profileStories),
    ...Object.keys(window.INCIDENT_BANK || {}),
  ]);
  return [...profileIds].flatMap((scenarioProfileId) =>
    (getProfileStory(scenarioProfileId)?.scenes || []).map((scene, scenarioIndex) => ({ scenarioProfileId, scenarioIndex })),
  );
}

function getIncidentScenario(ref) {
  return getProfileStory(ref.scenarioProfileId || ref.profileId)?.scenes?.[ref.scenarioIndex] || null;
}

function refreshIncidentDialog() {
  if (!activeIncidentDialog) return;

  const currentScenarioProfileId = activeIncidentDialog.scenarioProfileId || activeIncidentDialog.profileId;
  const pool = getAllIncidentScenarioRefs();
  if (!pool.length) return;

  const alternatives = pool.filter(
    (ref) => ref.scenarioProfileId !== currentScenarioProfileId || ref.scenarioIndex !== activeIncidentDialog.scenarioIndex,
  );
  const candidates = alternatives.length ? alternatives : pool;
  const picked = candidates[Math.floor(Math.random() * candidates.length)];

  activeIncidentDialog = {
    profileId: activeIncidentDialog.profileId,
    scenarioProfileId: picked.scenarioProfileId,
    scenarioIndex: picked.scenarioIndex,
    choiceIndex: null,
    progressionIndex: null,
    phase: "select",
    playbackStep: 0,
  };
}

function renderIncidentPlayback() {
  const pages = getIncidentPlaybackPages(activeIncidentDialog);
  if (!pages.length) return "";

  let step = activeIncidentDialog.playbackStep || 0;
  if (!pages[step] && hasSelectedIncidentProgression(activeIncidentDialog.progressionIndex)) {
    const resultStep = getIncidentResultStep(pages);
    if (resultStep >= 0) step = resultStep;
  }
  if (step >= pages.length) step = pages.length - 1;

  const currentPage = pages[step];
  const isInitial = step === 0;
  const playbackClass = isInitial ? "incident-playback is-entering" : "incident-playback is-page-turn";

  if (currentPage?.type === "branch") {
    const branchButtons = currentPage.progression
      .map((text, index) => `
        <button class="incident-playback-branch" type="button" data-incident-progression="${index}">
          ${text}
        </button>
      `)
      .join("");

    return `
      <div class="${playbackClass} incident-playback-branch-page" role="dialog" aria-modal="true" aria-live="polite">
        <div class="incident-playback-inner">
          <p class="incident-playback-label">请选择事态走向</p>
          <div class="incident-playback-branches">${branchButtons}</div>
        </div>
      </div>
    `;
  }

  if (currentPage?.type === "result") {
    const resultClass = currentPage.isGood
      ? "incident-playback-result is-good"
      : "incident-playback-result is-bad";
    const effects = currentPage.isGood
      ? `
        <span class="firework firework-one" aria-hidden="true"></span>
        <span class="firework firework-two" aria-hidden="true"></span>
        <span class="firework firework-three" aria-hidden="true"></span>
      `
      : `
        <span class="incident-bad-vignette" aria-hidden="true"></span>
        <span class="incident-bad-glitch" aria-hidden="true"></span>
      `;

    return `
      <div class="${playbackClass} ${resultClass}" role="dialog" aria-modal="true" aria-live="polite" data-action="advance-incident-playback">
        ${effects}
        <div class="incident-playback-inner">
          <p class="incident-playback-text is-page-turn">${currentPage.text}</p>
          ${currentPage.achievement ? `
            <p class="incident-playback-achievement">
              <span>获得成就</span>${currentPage.achievement}
            </p>
          ` : ""}
        </div>
      </div>
    `;
  }

  const text = currentPage?.text || "";
  const textClass = isInitial ? "incident-playback-text is-entering" : "incident-playback-text is-page-turn";

  return `
    <div class="${playbackClass}" role="dialog" aria-modal="true" aria-live="polite" data-action="advance-incident-playback">
      <div class="incident-playback-inner">
        <p class="${textClass}">${text}</p>
      </div>
    </div>
  `;
}

function renderIncidentSummary(profile, scenario, choice, progressionIndex = 0) {
  return `
    <div class="incident-summary">
      ${buildIncidentSummaryNarrative(profile, scenario, choice, progressionIndex)}
      <div class="incident-finish-row">
        <button class="btn" type="button" data-action="close-incident">完成并关闭</button>
      </div>
    </div>
  `;
}

function renderIncidentDialog() {
  if (!activeIncidentDialog) return "";

  if (activeIncidentDialog.phase === "playback") {
    return renderIncidentPlayback();
  }

  const profile = getProfileById(activeIncidentDialog.profileId);
  const scenarioProfileId = activeIncidentDialog.scenarioProfileId || activeIncidentDialog.profileId;
  const scenario = getIncidentScenario({
    scenarioProfileId,
    scenarioIndex: activeIncidentDialog.scenarioIndex,
  });
  if (!profile || !scenario) return "";

  const isSummary = activeIncidentDialog.phase === "summary";
  const selectedChoice = Number.isInteger(activeIncidentDialog.choiceIndex)
    ? scenario.choices[activeIncidentDialog.choiceIndex]
    : null;

  if (isSummary && selectedChoice) {
    return `
      <div class="incident-backdrop" role="presentation">
        <section class="incident-dialog incident-dialog-summary" role="dialog" aria-modal="true" aria-labelledby="incidentSummaryTitle">
          <button class="incident-close" type="button" data-action="close-incident" aria-label="关闭突发状况">×</button>
          <div class="incident-topline">
            <p class="incident-alert">突发状况回顾</p>
          </div>
          <p class="incident-profile">${profile.name}</p>
          <h2 id="incidentSummaryTitle">${scenario.title}</h2>
          <div class="incident-result" aria-live="polite">
            ${renderIncidentSummary(profile, scenario, selectedChoice, activeIncidentDialog.progressionIndex ?? 0)}
          </div>
        </section>
      </div>
    `;
  }

  const choices = scenario.choices
    .map((choice, index) => `
        <button
          class="incident-choice"
          type="button"
          data-incident-choice="${index}"
          aria-pressed="false"
        >
          <span class="choice-badge">${String.fromCharCode(65 + index)}</span>
          <span>${choice.label}</span>
        </button>
      `)
    .join("");

  return `
    <div class="incident-backdrop" role="presentation">
      <section class="incident-dialog" role="dialog" aria-modal="true" aria-labelledby="incidentTitle" aria-describedby="incidentIntro">
        <div class="incident-topline">
          <p class="incident-alert">强制突发状况</p>
          <button class="incident-refresh" type="button" data-action="refresh-incident">刷新情景</button>
        </div>
        <p class="incident-profile">${profile.name}</p>
        <h2 id="incidentTitle">${scenario.title}</h2>
        <p class="incident-intro" id="incidentIntro">${scenario.intro}</p>
        <div class="incident-options" aria-label="突发状况应对选项">
          ${choices}
        </div>
        <p class="incident-placeholder">请选择一个应对方案，进入情景剧情。</p>
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
  const path = window.location.hash.replace("#", "") || "/";
  const total = questions.length;
  const done = answeredCount(questions, answersMap);
  const quizType = questions[0]?.type || "persona";
  const isKnowledgeResultPage = path === "/knowledge-result" && isSubmittedView && quizType === "knowledge";
  const showResultWorkspace = !isKnowledgeResultPage;
  const currentIndex = clampQuizIndex(activeQuizIndexByType[quizType], total);
  activeQuizIndexByType[quizType] = currentIndex;
  const currentQuestion = questions[currentIndex];
  const reviewIndex = isKnowledgeResultPage
    ? questions.findIndex((question) => question.quizId === activeKnowledgeMistakeId)
    : currentIndex;
  const stepperCurrentIndex = isKnowledgeResultPage ? reviewIndex : currentIndex;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const currentAnswerIndex = currentQuestion ? Number(answersMap[currentQuestion.quizId]) - 1 : -1;
  const currentAnswered = Number.isInteger(currentAnswerIndex) && currentAnswerIndex >= 0;
  const hint = isSubmittedView
    ? (submitRoute === "/result" ? "职业测试已完成，可以查看测试结果。" : "知识问答已提交，可以查看全部题库或重新答题。")
    : currentAnswered
      ? (done === total ? "题目已完成，可以提交测试。" : "本题已记录，将自动进入下一题。")
      : "请选择一项后继续。";

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
  const previousDisabled = isKnowledgeResultPage
    ? (reviewIndex <= 0 ? "disabled" : "")
    : (currentIndex === 0 ? "disabled" : "");
  const nextDisabled = isKnowledgeResultPage
    ? (reviewIndex < 0 ? "" : reviewIndex >= total - 1 ? "disabled" : "")
    : (currentIndex >= total - 1 ? "disabled" : "");
  const submitDisabled = done === total ? "" : "disabled";
  const resultStats = isKnowledgeResultPage ? getKnowledgeStats(questions, answersMap) : null;
  const reviewedQuestion = reviewIndex >= 0 ? questions[reviewIndex] : null;
  const heroStatus = reviewedQuestion
    ? `
        <span>第 ${reviewedQuestion.order} / ${total} 题</span>
        <strong>${getQuizStage(quizType, reviewIndex, total)}</strong>
      `
    : resultStats
      ? `
        <span>本次共 ${resultStats.total} 题</span>
        <strong>答对 ${resultStats.correct} · 答错 ${resultStats.wrong}</strong>
      `
      : `
        <span>第 ${currentQuestion.order} / ${total} 题</span>
        <strong>${getQuizStage(quizType, currentIndex, total)}</strong>
      `;
  const questionStageMarkup = showResultWorkspace
    ? `
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
        `
    : "";
  const workspaceMarkup = questionStageMarkup
    ? `<div class="quiz-workspace">${questionStageMarkup}</div>`
    : "";

  return `
    <section class="page-hero quiz-hero">
      <div class="container quiz-hero-grid">
        <div>
          <p class="eyebrow">答题页</p>
          <h1>${title}</h1>
          <p class="lead">${intro}</p>
        </div>
        <div class="quiz-hero-status">
          ${heroStatus}
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
            ${renderQuizStepper(questions, answersMap, stepperCurrentIndex, showFeedback)}
          </div>
        </div>
        ${extraContent}
        ${workspaceMarkup}
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

function scrollKnowledgeReviewPreview() {
  requestAnimationFrame(() => {
    document.querySelector(".mistake-preview")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function setKnowledgeReviewQuestion(questions, questionIndex) {
  const safeIndex = clampQuizIndex(questionIndex, questions.length);
  activeQuizIndexByType.knowledge = safeIndex;
  activeKnowledgeMistakeId = questions[safeIndex]?.quizId || null;
}

function renderKnowledgeReviewPreview(row, wrongRows) {
  const wrongIndex = wrongRows.findIndex((item) => item.question.quizId === row.question.quizId);
  const label = row.isCorrect
    ? `第 ${row.question.order} 题 · 回答正确`
    : `错题 ${wrongIndex + 1} · 第 ${row.question.order} 题`;

  return `
    <div class="mistake-preview ${row.isCorrect ? "is-correct-review" : ""}" aria-live="polite">
      <p class="mistake-preview-label">${label}</p>
      <h4 class="mistake-preview-stem">${row.question.order}. ${row.question.question}</h4>
      <p><strong>你的答案：</strong>${row.selectedOption}</p>
      <p><strong>正确答案：</strong>${row.correctOption}</p>
      ${row.isCorrect ? `<p class="review-result-tag correct">回答正确</p>` : ""}
      <p><strong>详解：</strong>${row.question.explanation || "暂无详解。"}</p>
    </div>
  `;
}

function renderKnowledgeSubmitSummary() {
  const stats = getKnowledgeStats();
  const wrongRows = stats.rows.filter((row) => row.isAnswered && !row.isCorrect);
  const selectedRow = stats.rows.find((row) => row.question.quizId === activeKnowledgeMistakeId) || null;
  const reviewPreview = selectedRow ? renderKnowledgeReviewPreview(selectedRow, wrongRows) : "";

  const wrongList = wrongRows.length
    ? `
      <div class="mistake-list">
        ${wrongRows
          .map(
            (row, index) => `
              <button
                class="mistake-item ${activeKnowledgeMistakeId === row.question.quizId ? "is-active" : ""}"
                type="button"
                data-action="select-mistake"
                data-quiz-id="${row.question.quizId}"
                aria-pressed="${activeKnowledgeMistakeId === row.question.quizId ? "true" : "false"}"
              >
                <p class="mistake-index">错题 ${index + 1} · 第 ${row.question.order} 题</p>
                <p><strong>你的答案：</strong>${row.selectedOption}</p>
                <p><strong>正确答案：</strong>${row.correctOption}</p>
              </button>
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
        ${reviewPreview}
        <h3>错题汇总</h3>
        <p class="mistake-summary-hint">点击上方题号或下列错题，可在「错题汇总」上方查看原题与详解。</p>
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
    "以下为知识问答的作答结果。点击错题汇总可查看原题，点击题号可逐题浏览。",
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
  return renderQuizPage("职业问答", "10 题职业画像问答，答完后提交即可查看职业画像结果。", activePersonaQuiz, personaAnswers, "提交职业问答", "/result", false);
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
    const optionText = getOptionParts(selectedOption, answerIndex).text;
    return {
      question,
      selectedOption,
      optionText,
      selectedProfile,
      isCoreMatch,
    };
  });
}

function buildPersonaResultInsight(resultProfile) {
  const analysisRows = getPersonaAnswerAnalysis(resultProfile);
  const coreMatches = analysisRows.filter((row) => row.isCoreMatch);
  const optionTexts = coreMatches.map((row) => row.optionText);
  const matchCount = coreMatches.length;
  const scores = calculatePersonaScores();
  const resultScore = scores[resultProfile.id] || 0;

  const profileDrivers = {
    A: "更关注市场机会、产业转化与创业落地",
    B: "更关注技术条件、科学方法与科研推广",
    C: "更关注生态影响、可持续与环境治理",
    D: "更关注传播价值、文化表达与内容塑造",
    E: "更关注组织落实、协调推动与基层服务",
  };

  const profileOutcomes = {
    A: "善于发现机会、整合资源，与「返乡创业新农人」的画像特征高度吻合",
    B: "习惯以技术路径破解难题，与「农业科技型人才」以科研推动农业现代化的定位一致",
    C: "强调长期可持续与生态底线，契合「乡村生态守护者」的角色特质",
    D: "重视文化叙事与传播表达，贴近「乡土文化传播者」的能力结构",
    E: "突出统筹协同与服务落地，接近「乡村基层治理干部」的工作方式",
  };

  const paragraphs = [];
  if (optionTexts.length > 0) {
    const highlight = optionTexts.slice(0, 4).map((text) => `「${text}」`).join("、");
    paragraphs.push(
      `在 ${matchCount} 道与画像相关的题目中，你反复选择了 ${highlight} 等选项，说明你在面对乡村发展场景时，${profileDrivers[resultProfile.id] || "形成了较为鲜明的能力倾向"}。`,
    );
  } else {
    paragraphs.push(
      `你的各题选择综合加权后，${profileDrivers[resultProfile.id] || "呈现出较为稳定的能力倾向"}。`,
    );
  }

  paragraphs.push(
    `这些选项累积计分后，「${resultProfile.name}」得分最高（${resultScore.toFixed(1)} 分），${profileOutcomes[resultProfile.id] || "因此得出这一职业画像结果"}。`,
  );

  return paragraphs;
}

function renderPersonaResultInsight(resultProfile) {
  return buildPersonaResultInsight(resultProfile)
    .map((paragraph) => `<p class="result-insight-text">${paragraph}</p>`)
    .join("");
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

function renderResult() {
  const resultProfile = getResultProfile();
  if (!resultProfile) return renderLockedPage();
  activeProfileId = resultProfile.id;
  const story = profileStories[resultProfile.id];
  const scores = calculatePersonaScores();
  const resultInsight = renderPersonaResultInsight(resultProfile);

  return `
    <section class="section result-page">
      <div class="result-simple-layout">
        <aside class="result-photo-panel">
          <div class="result-identity">
            <img src="${resultProfile.avatar || story?.image || "data/image/beijing.png"}" alt="${resultProfile.name}" />
            <div class="result-photo-caption">
              <h2>${resultProfile.name}</h2>
            </div>
          </div>
        </aside>

        <article class="result-analysis-panel">
          <header class="result-analysis-head">
            <p class="eyebrow">结果解读</p>
            <h2>匹配依据</h2>
          </header>

          <div class="result-analysis-stack">
            <div class="score-board" aria-label="职业画像得分">
              ${renderPersonaScoreBars(scores, resultProfile.id)}
            </div>

            <div class="result-insight" aria-label="选项分析与画像关联">
              ${resultInsight}
            </div>
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

function getCaseVideoUrl(caseItem) {
  if (caseItem?.videoUrl) return caseItem.videoUrl;
  const keyword = formatCaseTitle(caseItem) || "乡村振兴 人物 介绍";
  return `https://search.bilibili.com/all?keyword=${encodeURIComponent(keyword)}`;
}

function getProfileCases(profileId) {
  return getProfileStory(profileId)?.cases || [];
}

function formatCaseTitle(caseItem) {
  if (!caseItem) return "";
  return caseItem.badge ? `${caseItem.name}【${caseItem.badge}】` : caseItem.name;
}

function renderCaseDetailHeading(caseItem) {
  if (!caseItem) return "";
  if (!caseItem.badge) return `<h3><span class="case-stack-name">${caseItem.name}</span></h3>`;
  return `
    <h3>
      <span class="case-stack-name">${caseItem.name}</span>
      <span class="case-stack-badge">【${caseItem.badge}】</span>
    </h3>
  `;
}

function renderCasePhotoMedia(caseItem) {
  if (caseItem.image) {
    return `<img src="${caseItem.image}" alt="${caseItem.name}" />`;
  }

  return `
    <div class="case-stack-photo-placeholder">
      <strong>${caseItem.name}</strong>
      ${caseItem.badge ? `<span>${caseItem.badge}</span>` : ""}
    </div>
  `;
}

function getCaseFanOffset(index, active, total) {
  const forward = (index - active + total) % total;
  const backward = (active - index + total) % total;
  if (forward === 0) return 0;
  if (backward < forward) return -backward;
  if (forward < backward) return forward;
  return index < active ? -backward : forward;
}

function renderCaseStackCarousel(profileId) {
  const profile = getProfileById(profileId);
  const cases = getProfileCases(profileId);
  if (!profile || !cases.length) return "";

  if (!Number.isInteger(activeCaseIndexByProfile[profileId])) {
    activeCaseIndexByProfile[profileId] = 0;
  }

  const activeIndex = clampQuizIndex(activeCaseIndexByProfile[profileId], cases.length);
  activeCaseIndexByProfile[profileId] = activeIndex;
  const activeCase = cases[activeIndex];
  const total = cases.length;

  const photoCards = cases
    .map((caseItem, index) => {
      const fanOffset = getCaseFanOffset(index, activeIndex, total);
      const isActive = fanOffset === 0;

      return `
        <article
          class="case-stack-photo${isActive ? " is-active" : ""}${caseItem.image ? "" : " is-placeholder"}"
          data-case-index="${index}"
          data-offset="${fanOffset}"
          data-profile-id="${profileId}"
          role="button"
          tabindex="${isActive ? "0" : "-1"}"
          aria-label="${formatCaseTitle(caseItem)}"
          aria-pressed="${isActive ? "true" : "false"}"
        >
          ${renderCasePhotoMedia(caseItem)}
          ${isActive && caseItem.videoUrl ? `
            <a
              class="case-video-link"
              href="${getCaseVideoUrl(caseItem)}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="打开${caseItem.name}的视频介绍"
            >视频介绍</a>
          ` : ""}
        </article>
      `;
    })
    .join("");

  const dots = cases
    .map((caseItem, index) => `
      <button
        type="button"
        class="case-stack-dot${index === activeIndex ? " is-active" : ""}"
        data-case-index="${index}"
        data-profile-id="${profileId}"
        aria-label="${formatCaseTitle(caseItem)}"
        aria-current="${index === activeIndex ? "true" : "false"}"
      ></button>
    `)
    .join("");

  return `
    <div class="case-stack-shell" data-profile-id="${profileId}">
      <div class="case-stack-panel">
        <div class="case-stack-head">
          <div>
            <p class="eyebrow">人物案例</p>
            <h2>${profile.name}</h2>
          </div>
          <div class="case-stack-controls">
            <button class="btn secondary case-stack-nav" type="button" data-case-nav="prev" data-profile-id="${profileId}">上一位</button>
            <span class="case-stack-counter">${activeIndex + 1}/${total}</span>
            <button class="btn secondary case-stack-nav" type="button" data-case-nav="next" data-profile-id="${profileId}">下一位</button>
          </div>
        </div>
        <div class="case-stack-layout">
          <div class="case-stack-photo-col">
            <div class="case-stack-photo-viewport">
              ${photoCards}
            </div>
            <div class="case-stack-dots" role="tablist" aria-label="人物案例切换">${dots}</div>
          </div>
          <article class="case-stack-detail" aria-live="polite">
            ${renderCaseDetailHeading(activeCase)}
            <p class="case-stack-body">${activeCase.text}</p>
          </article>
        </div>
      </div>
    </div>
  `;
}

function getScenarioTeaser(scenario, profileName) {
  if (scenario?.teaser) return scenario.teaser;
  if (scenario?.intro) {
    const snippet = scenario.intro.slice(0, 42).replace(/\s+/g, "");
    return `${snippet}……`;
  }
  return `你是一个${profileName || "乡村振兴工作者"}，日常扎根乡村一线。突然有一天，意外状况接踵而至……`;
}

function renderProfileDetail() {
  const resultProfile = getResultProfile();
  if (!resultProfile) return renderLockedPage();

  activeProfileId = resultProfile.id;
  const story = profileStories[resultProfile.id];
  const scenarioIndex = activeScenarioIndexByProfile[resultProfile.id] ?? 0;
  const scenario = story?.scenes?.[scenarioIndex];
  const scenarioCount = story?.scenes?.length || 0;
  const scenarioTeaser = getScenarioTeaser(scenario, resultProfile.name);
  const scenarioNav = scenarioCount > 1
    ? `
      <div class="scenario-teaser-nav">
        <button class="btn secondary scenario-nav" type="button" data-scenario-nav="prev">上一则</button>
        <span class="scenario-counter">${scenarioIndex + 1} / ${scenarioCount}</span>
        <button class="btn secondary scenario-nav" type="button" data-scenario-nav="next">下一则</button>
      </div>
    `
    : "";
  const scenarioRevealed = incidentScenarioRevealedByProfile[resultProfile.id];

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
    ${scenarioRevealed ? `
    <section class="section scenario-section">
      <div class="container">
        <div class="section-heading-only">
          <h2>突发情景</h2>
        </div>
        <article class="scenario-teaser-card">
          ${scenarioNav}
          <p class="scenario-teaser-text">${scenarioTeaser}</p>
          <button
            class="btn warn scenario-teaser-trigger"
            type="button"
            data-action="open-incident"
            data-profile-id="${resultProfile.id}"
            data-scenario-index="${scenarioIndex}"
          >再次体验突发情景</button>
        </article>
      </div>
    </section>
    ` : ""}

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
      const questionId = event.target.name;
      let quizType = null;

      if (path === "/knowledge" || path === "/knowledge-result") {
        knowledgeAnswers[questionId] = event.target.value;
        saveKnowledgeAnswers();
        if (path === "/knowledge") quizType = "knowledge";
      } else if (path === "/persona" || path === "/persona-result") {
        personaAnswers[questionId] = event.target.value;
        savePersonaAnswers();
        if (path === "/persona") quizType = "persona";
      }

      if (quizType) {
        const questions = quizType === "knowledge" ? activeKnowledgeQuiz : activePersonaQuiz;
        const currentIndex = activeQuizIndexByType[quizType] ?? 0;
        if (currentIndex < questions.length - 1) {
          activeQuizIndexByType[quizType] = currentIndex + 1;
        }
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
      if (path === "/knowledge-result" && quizType === "knowledge") {
        let index = questions.findIndex((question) => question.quizId === activeKnowledgeMistakeId);
        if (index < 0) index = delta > 0 ? 0 : questions.length - 1;
        else index = clampQuizIndex(index + delta, questions.length);
        setKnowledgeReviewQuestion(questions, index);
        render({ preserveScroll: true });
        scrollKnowledgeReviewPreview();
        return;
      }
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
      if (path === "/knowledge-result" && quizType === "knowledge") {
        setKnowledgeReviewQuestion(questions, Number(button.dataset.questionIndex));
        render({ preserveScroll: true });
        scrollKnowledgeReviewPreview();
        return;
      }
      activeQuizIndexByType[quizType] = clampQuizIndex(Number(button.dataset.questionIndex), questions.length);
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-action='select-mistake']").forEach((button) => {
    button.addEventListener("click", () => {
      activeKnowledgeMistakeId = button.dataset.quizId || null;
      const index = activeKnowledgeQuiz.findIndex((question) => question.quizId === activeKnowledgeMistakeId);
      if (index >= 0) activeQuizIndexByType.knowledge = index;
      render({ preserveScroll: true });
      scrollKnowledgeReviewPreview();
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
      refreshIncidentDialog();
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-incident-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeIncidentDialog || activeIncidentDialog.phase !== "select") return;
      const profileId = activeIncidentDialog.profileId;
      activeIncidentDialog = {
        ...activeIncidentDialog,
        choiceIndex: Number(button.dataset.incidentChoice),
        progressionIndex: null,
        phase: "playback",
        playbackStep: 0,
      };
      if ((activeIncidentDialog.scenarioProfileId || profileId) === profileId) {
        activeScenarioIndexByProfile[profileId] = activeIncidentDialog.scenarioIndex;
      }
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-action='advance-incident-playback']").forEach((element) => {
    element.addEventListener("click", () => {
      if (!activeIncidentDialog || activeIncidentDialog.phase !== "playback") return;
      const pages = getIncidentPlaybackPages(activeIncidentDialog);
      const step = activeIncidentDialog.playbackStep || 0;
      if (pages[step]?.type === "branch") return;
      if (pages[step]?.type === "result" || getIncidentResultStep(pages) === step) {
        const profileId = activeIncidentDialog.profileId;
        activeIncidentDialog = {
          ...activeIncidentDialog,
          phase: "summary",
          playbackStep: step,
        };
        incidentScenarioRevealedByProfile[profileId] = true;
        render({ preserveScroll: true });
        return;
      }
      const nextStep = step + 1;
      if (nextStep >= pages.length) return;
      activeIncidentDialog = {
        ...activeIncidentDialog,
        playbackStep: nextStep,
      };
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-incident-progression]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (!activeIncidentDialog || activeIncidentDialog.phase !== "playback") return;

      const progressionIndex = parseInt(button.dataset.incidentProgression, 10);
      if (!hasSelectedIncidentProgression(progressionIndex)) return;

      const pagesBefore = getIncidentPlaybackPages(activeIncidentDialog);
      const branchStep = getIncidentBranchStep(pagesBefore);
      const currentStep = activeIncidentDialog.playbackStep || 0;
      if (branchStep < 0 || currentStep !== branchStep) return;

      const { profile, scenario, choice } = getIncidentPlaybackContext(activeIncidentDialog);
      if (!profile || !scenario || !choice) return;

      const pages = buildIncidentStoryPages(profile, scenario, choice, progressionIndex);
      const resultStep = getIncidentResultStep(pages);
      const profileId = activeIncidentDialog.profileId;

      if (resultStep < 0) {
        activeIncidentDialog = {
          ...activeIncidentDialog,
          progressionIndex,
          phase: "summary",
          playbackStep: branchStep,
        };
        incidentScenarioRevealedByProfile[profileId] = true;
        render({ preserveScroll: true });
        return;
      }

      activeIncidentDialog = {
        ...activeIncidentDialog,
        progressionIndex,
        playbackStep: resultStep,
        phase: "playback",
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

  document.querySelectorAll("[data-case-index]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      if (event.target.closest(".case-video-link")) return;
      const profileId = trigger.dataset.profileId || trigger.closest("[data-profile-id]")?.dataset?.profileId || activeProfileId;
      const index = parseInt(trigger.dataset.caseIndex, 10);
      if (!profileId || Number.isNaN(index) || index === activeCaseIndexByProfile[profileId]) return;
      activeCaseIndexByProfile[profileId] = index;
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-case-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      const profileId = button.dataset.profileId || activeProfileId;
      const cases = getProfileCases(profileId);
      if (!profileId || !cases.length) return;
      const current = activeCaseIndexByProfile[profileId] ?? 0;
      activeCaseIndexByProfile[profileId] = button.dataset.caseNav === "next"
        ? (current + 1) % cases.length
        : (current - 1 + cases.length) % cases.length;
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

  if (path === "/knowledge-result" && lastRenderedPath !== "/knowledge-result") {
    activeKnowledgeMistakeId = null;
  }
  lastRenderedPath = path;

  if (activeKnowledgeQuiz.length === 0) buildActiveKnowledgeQuiz();
  if (activePersonaQuiz.length === 0) buildActivePersonaQuiz();
  if (path !== "/result" && path !== "/profile") {
    activeIncidentDialog = null;
    clearForcedIncidentSchedule();
  }

  if (path === "/") app.innerHTML = renderHome();
  else if (path === "/knowledge") app.innerHTML = renderKnowledgeQuiz();
  else if (path === "/persona") app.innerHTML = renderPersonaQuiz();
  else if (path === "/knowledge-bank") app.innerHTML = renderKnowledgeBank();
  else if (path === "/knowledge-result") app.innerHTML = renderKnowledgeResult();
  else if (path === "/persona-result") app.innerHTML = renderPersonaResult();
  else if (path === "/result") app.innerHTML = renderResult();
  else if (path === "/profile") {
    app.innerHTML = renderProfileDetail();
    scheduleForcedIncident(activeProfileId);
  }
  else app.innerHTML = renderHome();

  if (activeIncidentDialog?.phase === "playback" && !getIncidentPlaybackPages(activeIncidentDialog).length) {
    activeIncidentDialog = null;
  }

  const incidentRoot = document.getElementById("incident-root");
  if (incidentRoot) {
    incidentRoot.innerHTML = renderIncidentDialog();
  }

  bindQuizEvents();
  bindPageActions();
  syncNav(path);
  document.body.classList.toggle("is-result-page", path === "/result");
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
