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
        intro: "你毕业后选择返乡建设智慧农田。为改善传统农业依赖经验、灌溉不精准、抗灾能力弱的问题，你引入传感器与自动灌溉系统。某夜突遇极端暴雨，系统异常失控，排水与灌溉紊乱，部分农田迅速积水，幼苗被淹。若不及时处理，将面临严重减产风险。",
        choices: [
          { label: "立即人工干预抢救", result: "减少损失但成本增加", achievement: "务实型应对" },
          { label: "坚持优化系统，不人工干预", result: "部分作物损失", achievement: "技术理想主义" },
          { label: "彻底放弃智能系统", result: "效率下降，退回传统农业", achievement: "技术退化路线" },
          { label: "联合技术团队二次升级系统", result: "系统升级成功，进入稳定阶段", achievement: "技术迭代型创业者" },
        ],
      },
      {
        eyebrow: "突发情景二",
        title: "农产品品牌上线后遇到流量与品质冲突",
        intro: "你打造的乡村品牌农产品在平台上迅速走红，但随之而来的大订单导致产能紧张、品质波动，合作社成员意见分歧，部分村民担心过度扩张会影响长期口碑。",
        choices: [
          { label: "先扩产抢占市场", result: "短期销量增长但管理压力增大", achievement: "市场冲锋型" },
          { label: "暂停扩张重做标准", result: "节奏放慢但品牌更稳", achievement: "品质稳控型" },
          { label: "外包全部生产环节", result: "效率提升但品牌掌控下降", achievement: "轻资产冒进型" },
          { label: "建立分级分工和统一标准", result: "兼顾品质与规模，品牌持续成长", achievement: "品牌经营型" },
        ],
      },
      {
        eyebrow: "突发情景三",
        title: "村集体闲置资源盘活受阻",
        intro: "村里有一批闲置厂房和宅基地，但前期多次招商都没有成果。你想把这些资源改造成乡村电商仓储和休闲体验空间，却遭遇资金短缺和村民观望。",
        choices: [
          { label: "直接自筹资金先干起来", result: "推进快但风险较大", achievement: "敢冲敢干型" },
          { label: "继续等待外部投资", result: "项目拖延，机会流失", achievement: "保守等待型" },
          { label: "改做低成本试点", result: "先小范围验证模式", achievement: "试点探索型" },
          { label: "联动村集体、合作社和企业共建", result: "资源整合成功，项目落地", achievement: "协同创业型" },
        ],
      },
    ],
    caseTitle: "魏巧·引领更多“新农人”投身乡村振兴",
    caseText: "魏巧曾在中国科学院工作，2017年辞去城市中稳定而体面的岗位，和丈夫一起回到江苏镇江的家乡投身农业。她没有把返乡当成“退路”，而是把它当成一次重新选择生活方式和事业方向的机会。返乡之后，她围绕智慧农业持续探索，利用无人机巡田、数字化管理、智能灌溉等现代技术提升种植效率，让传统农业从“靠经验”逐步走向“靠数据、靠技术、靠组织”。在这一过程中，她不仅关注自家农田的生产效益，也主动带动周边农户一起学习新技术、共享新模式，推动更多人理解现代农业的价值。作为全国人大代表，她还持续关注“谁来种地”这一现实问题，积极呼吁更多青年人投身“三农”事业。她的经历说明，返乡创业新农人不只是回到土地上种地，更是在用创新、技术和行动力重塑乡村产业的未来。",
    image: "image/weiqiao.png",
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
      {
        eyebrow: "突发情景三",
        title: "古村文化内容上线后数据表现平平",
        intro: "你制作的古村文化专题已经完成上线，但在短时间内传播数据一般，团队开始怀疑内容是否需要更强的视觉冲击和更快的传播节奏。",
        choices: [
          { label: "继续优化内容表达", result: "内容逐步被更多人理解", achievement: "内容耐心型" },
          { label: "增加夸张元素博眼球", result: "短期热度上升但真实性下降", achievement: "流量刺激型" },
          { label: "回到田野重新调研", result: "内容更扎实，表达更有温度", achievement: "深耕调研型" },
          { label: "联动文旅做系列策划", result: "传播与转化同步推进", achievement: "内容转化型" },
        ],
      },
    ],
    caseTitle: "李子柒·让乡土文化被更多人看见",
    caseText: "李子柒长期以短视频呈现农事、饮食和传统手工艺，她的内容并不依赖夸张讲述，而是通过完整的劳动过程、克制的镜头语言和稳定的乡村生活叙事，让观众看见乡土文化背后的技艺、时间和生活关系。无论是做饭、酿造、编织还是田间劳作，她都尽量保留真实的步骤、真实的手感和真实的生活气息，使乡村文化不再只是被快速浏览的“符号”，而成为可以被理解、被尊重、被记住的生活经验。她的表达方式说明，乡土文化传播者真正重要的不是制造短暂热点，而是把地方文化讲得可信、讲得有温度、讲得能让更多人愿意走近乡村、理解乡村、喜欢乡村。",
    image: "image/liziqi.png",
  },
  B: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "高端育种技术落地遇行业偏见",
        intro: "你团队自主研发的抗病高产品种，各项试验数据远超进口品种。但本地农业企业长期依赖外来种源，不信任国产自研品种，不愿投入资金引种试种，你的科研成果陷入推广僵局。",
        choices: [
          { label: "搭建对比田并整理数据主动对接企业", result: "用实证打破偏见并推动合作", achievement: "实证破冰者" },
          { label: "先小规模试种积累口碑", result: "稳妥但周期较长", achievement: "佛系育种师" },
          { label: "下调合作标准以快速打开市场", result: "品种优势被削弱", achievement: "廉价合伙人" },
          { label: "专注实验室研究，等待政策扶持", result: "成果长期闲置", achievement: "沉睡研究员" },
        ],
      },
      {
        eyebrow: "突发情景二",
        title: "智慧灌溉系统遭遇数据误判",
        intro: "你主导的智慧灌溉系统在连续高温下出现传感器误判，部分地块被过度灌溉，造成资源浪费，农户担心新技术不稳定，要求恢复传统人工判断。",
        choices: [
          { label: "立即关闭系统恢复人工管理", result: "短期稳定但技术优势缩水", achievement: "保守回退型" },
          { label: "继续按原方案执行", result: "问题扩大，农田受损", achievement: "技术僵化型" },
          { label: "重新校准数据并分区测试", result: "系统逐步修复，风险下降", achievement: "技术修正型" },
          { label: "联合企业升级传感与算法", result: "系统性能提升，推广更顺利", achievement: "技术协同型" },
        ],
      },
      {
        eyebrow: "突发情景三",
        title: "新品种推广遭遇农户观望",
        intro: "你培育的新品种有明显增产优势，但农户担心种植习惯被打乱、投入成本增加，对新品种持观望态度，影响推广进度。",
        choices: [
          { label: "强行要求统一改种", result: "抵触加剧，推广受阻", achievement: "强推冒进型" },
          { label: "取消推广计划", result: "成果停留在试验阶段", achievement: "保守停滞型" },
          { label: "先做示范田再扩面", result: "先树样板再扩展", achievement: "示范带动型" },
          { label: "建立技术服务包同步落地", result: "品种与服务一起推广", achievement: "成果转化型" },
        ],
      },
    ],
    caseTitle: "傅廷栋·六十余年深耕油菜科研",
    caseText: "傅廷栋院士长期扎根华农，几十年如一日地深耕油菜科研，没有被外界的热闹环境带走，而是始终把全部精力放在作物育种、试验验证和成果转化上。他攻克了杂交油菜育种中的关键技术难题，发现并利用具有重大实用价值的油菜波里马细胞质雄性不育系，推动我国油菜育种实现了重要突破。此后，他又持续培育出一批高产稳产、优质抗病的杂交油菜新品种，并推动高油酸油菜、耐盐碱油菜等新型品种研发，让科研成果真正走出实验室、走向田间地头。傅廷栋院士的经历说明，农业科技型人才不是只做理论研究的人，而是要把科技创新转化为现实生产力，用硬核科研守护国家粮油安全。",
    image: "image/fuyandong.png",
  },
  C: {
    scenes: [
      {
        eyebrow: "突发情景一",
        title: "生态文旅热潮下的保护压力",
        intro: "乡村推行生态文旅新业态后，大批网红跟风前来野外航拍、私自闯入生态保育区取景，肆意惊扰野生小动物，踩踏原生草本植被，还随意丢弃户外装备垃圾。",
        choices: [
          { label: "联合村委划定防护区域并组织志愿清理", result: "快速止损修复环境，耗费较多人力精力", achievement: "乡土生态实干卫士" },
          { label: "借助短视频平台发布文明出游宣传", result: "线上引导明显，线下整改偏慢", achievement: "生态理念传播使者" },
          { label: "实地勘察并递交长效管护方案", result: "治标兼顾治本，落地需要周期", achievement: "乡村生态统筹守护者" },
          { label: "看重短期收益放任破坏", result: "客流短期增长但生态持续受损", achievement: "生态守护懈怠者" },
        ],
      },
      {
        eyebrow: "突发情景二",
        title: "村庄河道水质出现异常",
        intro: "连续降雨后，村内河道水体变浑并伴有异味，部分村民怀疑上游企业排污，但缺乏准确证据。你需要在保护生态和稳定民心之间尽快采取行动。",
        choices: [
          { label: "直接公开指责上游企业", result: "舆情迅速升温但证据不足", achievement: "情绪化应对" },
          { label: "先组织巡查与水样检测", result: "逐步查清问题来源", achievement: "科学取证型" },
          { label: "暂时掩盖问题避免扩散", result: "短期平稳但隐患积累", achievement: "回避失职型" },
          { label: "联合多方制定治理方案", result: "问题逐步解决并形成机制", achievement: "协同治理型" },
        ],
      },
      {
        eyebrow: "突发情景三",
        title: "生态修复项目与发展需求冲突",
        intro: "村里准备推进荒地修复和植被恢复，但部分村民担心会影响现有种植收益，对生态修复项目存在抵触。",
        choices: [
          { label: "强制推进不做解释", result: "短期推进快但矛盾加剧", achievement: "刚性推进型" },
          { label: "完全暂停修复项目", result: "生态问题继续累积", achievement: "保守停摆型" },
          { label: "边修复边说明收益", result: "生态与收益逐步兼顾", achievement: "平衡协调型" },
          { label: "引入绿色产业联动", result: "治理与产业同步推进", achievement: "生态增收型" },
        ],
      },
    ],
    caseTitle: "杨善洲·把荒山变成绿色森林",
    caseText: "杨善洲退休后没有选择安逸生活，而是扎根大亮山，坚持植树造林二十多年，带领群众把原本荒凉的山地一点点变成郁郁葱葱的绿色森林。他做的不只是种树，更是在长期的艰苦坚持中重建生态环境、改善水土条件、为当地群众留下可持续的发展基础。他始终把“为群众种树，为后代造福”作为自己的信念，用一生实践证明，生态守护不是口号，而是要在日常巡护、持续治理、长期投入和群众动员中一点点实现。对于乡村生态守护者来说，这样的案例说明，真正的绿色发展不是短期造景，而是守住自然底线、修复生态系统、让乡村在保护中实现更长远的发展。",
    image: "image/yangshanzhou.png",
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
        title: "道路拓宽征地引发群众抵触",
        intro: "村内实施道路拓宽惠民项目，需要调整少量农户宅基地与菜地，部分村民不理解、不配合，出现阻工、信访苗头，项目停滞。",
        choices: [
          { label: "强制推进施工不做解释", result: "矛盾激化，引发舆情", achievement: "强压推进型" },
          { label: "简单宣讲政策不回应诉求", result: "顾虑未消除，阻力持续", achievement: "形式传达型" },
          { label: "逐户沟通并召开村民议事会", result: "凝聚共识，项目顺利推进", achievement: "协商共治型" },
          { label: "直接上交等待，不主动化解", result: "项目长期拖延", achievement: "被动搁置型" },
        ],
      },
      {
        eyebrow: "突发情景三",
        title: "惠农政策落地“最后一公里”",
        intro: "上级下发农业补贴、养老医保、技能培训等多项惠农政策，村民不了解、不会办，出现漏享、错享问题，群众有怨言。",
        choices: [
          { label: "只张贴公告不讲解", result: "政策知晓率低", achievement: "被动发布型" },
          { label: "选择性传达不全面覆盖", result: "信息不对称，引发质疑", achievement: "偏差传达型" },
          { label: "入户宣讲、代办公开公示", result: "政策直达快享，群众满意", achievement: "服务落实型" },
          { label: "等待村民主动咨询", result: "服务缺位，公信力下降", achievement: "懒政等待型" },
        ],
      },
    ],
    caseTitle: "黄文秀·新时代青年基层干部榜样",
    caseText: "黄文秀放弃城市中相对优越的工作机会，主动回到家乡担任驻村第一书记，把青春和热情都投入到基层一线。她到村后没有急着“讲大话”，而是先走村入户、摸清民情，深入了解村里的基础设施、产业条件和群众最关心的实际问题，然后有针对性地宣讲惠农政策、推动特色产业发展、协调资源改善村庄条件。面对群众之间的矛盾和现实困难，她始终坚持耐心沟通、真心服务，把一次次具体小事办实办好，逐渐赢得了村民信任，也带动了村庄的发展。她的经历说明，基层治理干部不是简单的“传达者”，而是既要懂政策、会协调、能应急，又要真正站在群众立场上解决问题的人。",
    image: "image/huangwenxiu.png",
  },
};

let answers = loadAnswers();
let activeQuiz = [];
let activeScenarioIndexByProfile = {};
let activeProfileId = null;

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

function getCurrentResultProfile() {
  return getResultProfile();
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
  activeProfileId = resultProfile.id;
  const scenarioIndex = activeScenarioIndexByProfile[resultProfile.id] ?? 0;
  const scenario = profileStories[resultProfile.id]?.scenes?.[scenarioIndex];
  const scenarioCount = profileStories[resultProfile.id]?.scenes?.length || 0;
  const choiceGroups = scenario
    ? scenario.choices
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
        <article class="card profile-card result-summary-card">
          <div class="profile-visual" aria-hidden="true">画像</div>
          <div>
            <h2>${resultProfile.name}</h2>
            <p class="muted">${resultProfile.summary}</p>
          </div>
          <article class="result-lead-block">
            <p class="result-lead-kicker">核心画像</p>
            <div>
              <h3>${resultProfile.name}的核心画像</h3>
              <p>${resultProfile.summary}</p>
            </div>
          </article>
          <div class="tag-list">
            ${resultProfile.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </article>

        <div class="result-content">
          <div class="result-grid">
            ${resultProfile.traits
              .map(
                (item, index) => `
                  <article class="info-block result-block-${(index % 3) + 1}">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                  </article>
                `,
              )
              .join("")}
          </div>

          <div class="button-row result-actions">
            <button class="btn" data-action="open-profile">查看详情</button>
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
  const scenarioIndex = activeScenarioIndexByProfile[resultProfile.id] ?? 0;
  const scenario = story?.scenes?.[scenarioIndex];
  const scenarioCount = story?.scenes?.length || 0;
  const choiceGroups = scenario
    ? scenario.choices
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
            <div class="scenario-card-grid">
              ${choiceGroups}
            </div>
          </div>
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

  document.querySelectorAll("[data-action='open-profile']").forEach((button) => {
    button.addEventListener("click", () => setRoute("/profile"));
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
