// 中文语言文件
const translations = {
    site: {
        title: "投知罗盘",
        description: "测试您的投资风格，了解您属于哪个投资门派"
    },
    language: {
        zh: "中文",
        en: "English",
        fr: "Français",
        es: "Español"
    },
    home: {
        heroTitle: "投知罗盘",
        heroSubtitle: "三分钟，挖掘您的投资潜力。",
        startButton: "开始测试",
        styleTestButton: "投资风格",
        about: "关于我们",
        aboutContent: "投知罗盘是一个专业的投资风格测试平台，通过科学的测试题帮助投资者了解自己的投资偏好和风格，从而制定更合适的投资策略。",
        schools: "投资门派",
        schoolsValue: "价值/基本面派",
        schoolsValueDesc: "以资产内在价值为核心，深入研究公司财务、商业模式和护城河，长期持有优质资产。",
        schoolsTrend: "趋势/技术派",
        schoolsTrendDesc: "跟随市场趋势，通过图表分析、技术指标和交易系统，捕捉价格波动带来的投资机会。",
        schoolsMacro: "宏观/周期派",
        schoolsMacroDesc: "基于宏观经济周期和政策环境，配置不同资产类别，把握经济周期转换带来的投资机会。",
        schoolsNarrative: "信息/叙事派",
        schoolsNarrativeDesc: "关注市场情绪和叙事传播，通过快速捕捉和验证新的投资故事，获取超额收益。",
        macroIndicators: "宏观经济指标关联关系",
        macroIndicatorsDesc: "探索利率、失业率、GDP、债券收益率等宏观经济指标之间的复杂联动关系，深入理解经济传导机制。",
        macroIndicatorsButton: "查看指标关系",
    },
    test: {
        title: "投资风格测试",
        progress: "测试进度",
        question: "问题",
        prevButton: "上一题",
        nextButton: "下一题",
        submitButton: "提交测试",
        selectOption: "请选择一个选项后再继续！",
        completeAll: "请完成所有题目后再提交！"
    },
    schools: {
        value: {
            name: "价值/基本面派",
            core: "以资产内在价值为核心，寻找被低估的优质资产",
            introduction: "价值投资是一种经典的投资理念，强调以低于内在价值的价格买入优质资产，并长期持有。这种风格要求投资者具备深入的财务分析能力，能够识别企业的真实价值和长期增长潜力。价值投资者通常关注企业的市盈率、市净率等估值指标，寻找被市场低估的机会。",
            strengths: [
                "注重长期价值，避免短期波动干扰",
                "基于扎实的基本面研究，决策更稳健",
                "利用市场情绪波动创造买入机会",
                "关注企业长期竞争力和护城河"
            ],
            weaknesses: [
                "可能错过短期市场热点和趋势机会",
                "研究周期长，需要大量时间和专业知识",
                "在市场长期非理性时可能承受较大压力",
                "对新兴行业和无盈利企业评估困难"
            ],
            notes: [
                "避免过度分散或过度集中持仓",
                "定期重新评估企业基本面变化",
                "警惕价值陷阱，区分暂时低估和永久衰落",
                "保持足够的安全边际"
            ],
            improvement: [
                "加强对新技术和新兴行业的理解",
                "学习适当的技术分析辅助判断买入时机",
                "关注企业管理层变化和战略调整",
                "建立更系统的估值模型和决策流程"
            ]
        },
        trend: {
            name: "趋势/技术派",
            core: "跟随市场趋势，利用技术分析制定交易策略",
            introduction: "趋势投资是一种基于市场趋势的交易策略，通过技术分析识别价格走势的方向和强度。趋势投资者相信\"趋势是你的朋友\"，会跟随市场的主要趋势进行交易，同时设置严格的止损位来控制风险。这种风格需要投资者具备良好的市场敏感度和纪律性。",
            strengths: [
                "能快速响应市场变化，捕捉短期机会",
                "有明确的入场和止损规则，风险可控",
                "适合各种市场环境，包括熊市",
                "不需要深入研究企业基本面"
            ],
            weaknesses: [
                "容易受到市场噪音和假突破干扰",
                "在横盘震荡市场中表现不佳",
                "长期复合收益可能低于价值投资",
                "需要严格遵守纪律，克服心理偏差"
            ],
            notes: [
                "避免过度交易，控制交易成本",
                "使用多种技术指标相互验证，减少假信号",
                "设置合理的止损位，避免大幅亏损",
                "不要过度依赖单一技术分析方法"
            ],
            improvement: [
                "学习基本面分析辅助判断趋势的可持续性",
                "优化交易系统，减少胜率但提高盈亏比",
                "培养耐心，等待高确定性的交易信号",
                "记录交易日志，总结经验教训"
            ]
        },
        macro: {
            name: "宏观/周期派",
            core: "基于宏观经济周期和政策变化制定投资策略",
            introduction: "宏观投资是一种自上而下的投资方法，首先分析宏观经济环境、政策走向和市场周期，然后再选择适合的资产类别和行业。宏观投资者关注GDP增长、通货膨胀、利率变化等宏观指标，试图把握大的市场趋势和资产配置机会。",
            strengths: [
                "能够把握大的市场周期和趋势",
                "对资产配置有宏观指导意义",
                "在经济转型期有明显优势",
                "适合大资金和长期资产配置"
            ],
            weaknesses: [
                "宏观预测难度大，准确率较低",
                "对微观企业情况关注不足",
                "可能错过结构性机会",
                "需要较长的投资周期"
            ],
            notes: [
                "避免过度自信，保持风险分散",
                "关注多个宏观指标，避免单一因素决策",
                "结合行业分析和企业研究",
                "定期更新宏观经济模型"
            ],
            improvement: [
                "学习行业分析，深化对产业链的理解",
                "结合技术分析判断周期拐点的具体时机",
                "关注全球宏观经济相互影响",
                "培养对政策变化的敏感度"
            ]
        },
        narrative: {
            name: "信息/叙事派",
            core: "关注市场情绪和叙事传播，捕捉市场热点和主题投资机会",
            introduction: "信息叙事投资关注市场情绪、新闻事件和主题故事对资产价格的影响。这种风格的投资者善于捕捉市场热点和新兴趋势，通过分析信息传播和市场反应来寻找投资机会。信息叙事投资需要投资者具备快速获取和分析信息的能力，同时警惕市场泡沫和过度炒作。",
            strengths: [
                "能快速把握市场热点和新兴趋势",
                "对市场情绪变化敏感",
                "适合新兴行业和创新领域投资",
                "短期收益潜力大"
            ],
            weaknesses: [
                "容易陷入泡沫和过度炒作",
                "缺乏坚实的基本面支撑",
                "信息过载，真假难辨",
                "长期持有风险较大"
            ],
            notes: [
                "避免追高，建立严格的止盈止损规则",
                "验证信息来源的可靠性",
                "关注叙事的可持续性和兑现能力",
                "控制仓位，避免过度集中"
            ],
            improvement: [
                "学习基本面分析，评估叙事的合理性",
                "建立信息筛选和验证机制",
                "培养独立判断能力，避免随波逐流",
                "结合技术分析判断市场情绪转折点"
            ]
        }
    },
    result: {
        title: "投资风格测试结果",
        yourSchool: "您的投资风格：",
        radarChart: "投资风格雷达图",
        strengths: "优点分析",
        weaknesses: "缺点分析",
        notes: "注意事项",
        improvement: "未来提升路径",
        styleIntro: "您的投资风格主要体现为{name}，{core}。{introduction}了解您的投资风格有助于制定更适合自己的投资策略，发挥优势，规避风险，实现长期投资目标。您在其他风格上也有不同程度的表现，这反映了您投资理念的多样性和灵活性。",
        actionText: "您可以将网址复制转发给更多的朋友，帮助他们了解自己的投资风格。您可以下载本次测试结果，以备后续查询。",
        shareText: "您可以将网址复制转发给更多的朋友，帮助他们了解自己的投资风格。",
        downloadText: "您可以下载本次测试结果，以备后续查询。",
        copyUrl: "复制网址",
        downloadResult: "下载结果",
        backHome: "返回首页",
        viewArticles: "阅览文章",
        copySuccess: "网址已复制到剪贴板！",
        copyFailed: "复制失败，请手动复制网址：",
        downloadFailed: "下载失败，请重试！",
        noResults: "请先完成测试！"
    },
    articles: {
        title: "投资知识",
        category: "分类",
        recent: "最新文章",
        popular: "热门文章",
        basic: "基础文章",
        categories: {
            macro: "宏观投资",
            value: "价值投资",
            technical: "技术分析",
            narrative: "叙事投资",
            comparison: "综合比较"
        }
    },
    terms: {
        title: "服务条款",
        intro: "欢迎使用投知罗盘（以下简称\"我们\"或\"网站\"）提供的服务。请仔细阅读以下服务条款，您的使用行为将被视为同意接受本条款的约束。",
        section1: "1. 服务内容",
        content1: "投知罗盘是一个投资风格测试平台，为用户提供投资风格测试、投资知识文章阅读等服务。",
        section2: "2. 用户权利与义务",
        right1: "用户有权自由使用网站提供的测试服务和浏览投资知识文章。",
        right2: "用户应当遵守法律法规，不得利用网站进行任何违法活动。",
        right3: "用户应当尊重知识产权，不得复制、传播或修改网站上的内容。",
        right4: "用户应当保护自己的账号安全，如发现账号异常应及时联系我们。",
        section3: "3. 网站权利与义务",
        obligation1: "网站有权根据需要调整服务内容和功能。",
        obligation2: "网站有义务保护用户的隐私和个人信息安全。",
        obligation3: "网站有权删除违反法律法规或服务条款的内容。",
        obligation4: "网站有义务提供稳定的服务，但不保证服务的绝对无故障。",
        section4: "4. 知识产权保护",
        ip: "网站上的所有内容，包括但不限于文字、图片、音频、视频、图表、设计等，均受知识产权法的保护。未经授权，任何人不得复制、修改、传播或用于商业目的。",
        section5: "5. 免责声明",
        disclaimer: "网站提供的投资知识和测试结果仅供参考，不构成任何投资建议。用户应当自行承担投资风险，网站不承担任何因使用网站内容而导致的损失。",
        section6: "6. 服务条款的变更",
        changes: "我们可能会不时更新本服务条款，更新后的条款将在网站上公布。用户应当定期查看服务条款的变更，继续使用网站服务将被视为接受变更后的条款。",
        section7: "7. 法律适用与争议解决",
        law: "本服务条款的解释和适用均适用中华人民共和国法律。如发生争议，双方应首先通过友好协商解决；协商不成的，任何一方均可向有管辖权的人民法院提起诉讼。",
        section8: "8. 联系方式",
        contact: "如果您对本服务条款有任何疑问，请通过以下方式联系我们："
    },
    privacy: {
        title: "隐私政策",
        intro: "投知罗盘（以下简称\"我们\"）重视用户的隐私保护，我们将按照本隐私政策的规定收集、使用、保存和披露您的个人信息。",
        section1: "1. 我们收集的信息",
        content1: "当您使用我们的服务时，我们可能会收集以下信息：",
        info1: "您的测试答案和结果",
        info2: "您的浏览器类型和版本",
        info3: "您的IP地址",
        info4: "您的语言偏好",
        section2: "2. 我们如何使用您的信息",
        content2: "我们收集的信息将用于以下目的：",
        use1: "提供和改进我们的服务",
        use2: "保存您的测试进度和结果",
        use3: "个性化您的用户体验",
        use4: "分析和统计用户行为",
        section3: "3. 信息存储和保护",
        protect1: "我们将采取合理的安全措施保护您的个人信息，防止信息丢失、滥用或未经授权的访问、披露、修改和销毁。",
        protect2: "您的测试答案和结果将存储在您的浏览器的localStorage中，我们不会将这些信息上传到服务器。",
        section4: "4. 信息共享",
        content4: "我们不会将您的个人信息出售、出租或与第三方共享，除非：",
        share1: "您明确同意",
        share2: "法律要求我们这样做",
        share3: "为了保护我们的权利、财产或安全",
        section5: "5. 隐私政策的变更",
        changes: "我们可能会不时更新本隐私政策，我们将通过网站公告或其他适当方式通知您。",
        section6: "6. 联系方式",
        contact: "如果您对本隐私政策有任何疑问，请通过以下方式联系我们：",
        email: "邮箱：zbenhan0123@gmail.com"
    },
    about: {
        title: "关于我们",
        intro: "投知罗盘是一个专业的投资风格测试和投资知识分享平台，致力于帮助投资者更好地了解自己的投资风格，提高投资决策水平。",
        mission: "我们的使命",
        missionContent: "我们的使命是通过科学的测试方法和专业的投资知识，帮助投资者认识自己的投资偏好和风格特点，从而制定更加适合自己的投资策略，实现长期稳健的投资收益。",
        vision: "我们的愿景",
        visionContent: "成为最受投资者信赖的投资风格测试和教育平台，为投资者提供个性化、专业化的投资指导，助力投资者在复杂的市场环境中做出明智的投资决策。",
        team: "团队介绍",
        teamContent: "我们的团队由一群热爱投资、具有丰富金融行业经验的专业人士组成，包括投资分析师、金融顾问、数据科学家和用户体验设计师。我们致力于将专业的投资知识以通俗易懂的方式呈现给投资者，帮助投资者提升投资能力。",
        values: "核心价值观",
        value1: "专业性：我们坚持以专业的态度和方法为投资者提供服务。",
        value2: "客观性：我们保持客观中立的立场，不推荐具体投资产品。",
        value3: "实用性：我们注重内容的实用性，帮助投资者解决实际问题。",
        value4: "创新性：我们不断创新服务模式和内容形式，提升用户体验。",
        contact: "联系方式",
        contactInfo: "如果您对我们的平台有任何意见或建议，欢迎通过以下方式联系我们："
    },
    footer: {
        contact: "联系方式",
        email: "邮箱",
        links: "友情链接",
        legal: "法律声明",
        privacy: "隐私政策",
        terms: "服务条款",
        about: "关于网站",
        copyright: "© 2025 投知罗盘 - A-share.com. 保留所有权利."
    },
    macro: {
        title: "宏观经济指标关联关系 - 利率、失业率、GDP、债券收益率联动分析",
        description: "探索利率、失业率、债券价格/收益率、进出口额和GDP等宏观经济指标之间的复杂联动关系，分析经济传导机制和货币政策影响，帮助投资者理解宏观经济走势和制定投资策略。",
        mainTitle: "宏观经济指标关联关系",
        subTitle: "探索利率、失业率、债券价格/收益率、进出口额和GDP等指标之间的复杂联动关系",
        overview: "核心关系总览",
        overviewContent1: "利率、失业率、债券价格/收益率、进出口额和GDP等指标之间存在着复杂而紧密的联动关系，构成了宏观经济分析的骨架。我们可以将它们之间的关系梳理成一个动态的网络，核心是 \"经济增长（GDP）\" 和 \"中央银行（通过利率调控）\"。",
        overviewContent2: "上图展示了各指标间的主要传导机制，下面我们对每个环节进行具体阐释。",
        network: "指标关系网络",
        reset: "重置所有指标",
        legend: {
            positive: "正相关 (同向变动)",
            negative: "负相关 (反向变动)"
        },
        importantNotes: "重要提醒",
        note1: "<strong>预期至关重要</strong>：金融市场交易的是\"预期\"。有时数据尚未变化，但市场已因预期而提前反应（如债券收益率因预期加息而提前上升）。",
        note2: "<strong>时滞效应</strong>：政策利率变化传导至实体经济（影响GDP、失业率）通常需要6-18个月的时间。",
        note3: "<strong>外部冲击</strong>：战争、疫情、能源危机等外部冲击会同时扰动多个指标，打破传统关联。",
        note4: "<strong>因果关系复杂</strong>：这些关系是双向、动态的，并非简单单向。例如，GDP增长本身也会影响利率预期，从而影响债券收益率。",
        noteConclusion: "理解这些指标的关联，是分析宏观经济走势、进行资产配置和制定投资策略的基础。您可以将它们想象成一个精密的生态系统，任何一个部分的变化都会引发连锁反应。",
        indicators: {
            interestRate: "利率",
            gdp: "GDP",
            unemployment: "失业率",
            bondYield: "债券收益率",
            export: "出口",
            import: "进口"
        },
        controlSection: "指标控制",
        controlDesc: "点击以下指标的\"上涨\"或\"下跌\"按钮，观察指标间的传导路径和详细解释",
        transmissionTitle: "传导路径和解释",
        waitingForChange: "等待指标变化...",
        clickIndicatorToSee: "点击上方指标的\"上涨\"或\"下跌\"按钮，观察指标间的传导路径和详细解释。",
        indicatorsDetail: "关键指标详解与传导机制",
        definition: "定义",
        howItWorks: "如何作用",
        keyRelationship: "关键关系",
        mainInfluencingFactors: "主要影响因素",
        importExportFactors: "：汇率和国内外的需求强弱。",
        transmissionChain: "传导链条",
        keyCharacteristics: "关键特性",
        relationshipsWithOtherIndicators: "与其它指标的关系",
        indicator1Title: "1. 利率 —— 整个体系的\"指挥棒\"",
        indicator2Title: "2. 债券价格/收益率 —— 市场的\"温度计\"",
        indicator3Title: "3. 进出口额 —— 连接内外的\"桥梁\"",
        indicator4Title: "4. GDP —— 最终目标的\"记分牌\"",
        indicator5Title: "5. 失业率 —— 滞后但关键的\"民生指标\"",
        scenarioExercise: "综合情景演练",
        scenario1Title: "情景一：经济过热，通胀高企",
        scenario2Title: "情景二：经济衰退，失业率高企",
        cause: "起因",
        centralBankAction: "央行行动",
        marketTransmission: "市场传导",
        finalResult: "最终结果",
        // Button texts
        rise: "上涨",
        fall: "下跌",
        // Relationship descriptions
        interestRateToGdp: "利率↑ → 融资成本↑ → 投资消费↓ → GDP↓",
        interestRateToGdp_rise: "利率↑ → 融资成本↑ → 投资消费↓ → GDP↓",
        interestRateToGdp_fall: "利率↓ → 融资成本↓ → 投资消费↑ → GDP↑",
        
        interestRateToBondYield: "利率↑ → 债券价格↓ → 债券收益率↑",
        interestRateToBondYield_rise: "利率↑ → 债券价格↓ → 债券收益率↑",
        interestRateToBondYield_fall: "利率↓ → 债券价格↑ → 债券收益率↓",
        
        interestRateToUnemployment: "利率↑ → 经济活动↓ → 失业率↑",
        interestRateToUnemployment_rise: "利率↑ → 经济活动↓ → 失业率↑",
        interestRateToUnemployment_fall: "利率↓ → 经济活动↑ → 失业率↓",
        
        interestRateToExport: "利率↑ → 本币升值 → 出口商品价格↑ → 出口↓",
        interestRateToExport_rise: "利率↑ → 本币升值 → 出口商品价格↑ → 出口↓",
        interestRateToExport_fall: "利率↓ → 本币贬值 → 出口商品价格↓ → 出口↑",
        
        interestRateToImport: "利率↑ → 本币升值 → 进口商品价格↓ → 进口↑",
        interestRateToImport_rise: "利率↑ → 本币升值 → 进口商品价格↓ → 进口↑",
        interestRateToImport_fall: "利率↓ → 本币贬值 → 进口商品价格↑ → 进口↓",
        
        gdpToInterestRate: "GDP↑ → 通胀压力↑ → 央行加息 → 利率↑",
        gdpToInterestRate_rise: "GDP↑ → 通胀压力↑ → 央行加息 → 利率↑",
        gdpToInterestRate_fall: "GDP↓ → 通胀压力↓ → 央行降息 → 利率↓",
        
        gdpToUnemployment: "GDP↑ → 经济活动↑ → 就业机会↑ → 失业率↓",
        gdpToUnemployment_rise: "GDP↑ → 经济活动↑ → 就业机会↑ → 失业率↓",
        gdpToUnemployment_fall: "GDP↓ → 经济活动↓ → 就业机会↓ → 失业率↑",
        
        gdpToBondYield: "GDP↑ → 经济增长预期↑ → 债券收益率↑",
        gdpToBondYield_rise: "GDP↑ → 经济增长预期↑ → 债券收益率↑",
        gdpToBondYield_fall: "GDP↓ → 经济增长预期↓ → 债券收益率↓",
        
        gdpToImport: "GDP↑ → 国内需求↑ → 进口↑",
        gdpToImport_rise: "GDP↑ → 国内需求↑ → 进口↑",
        gdpToImport_fall: "GDP↓ → 国内需求↓ → 进口↓",
        
        unemploymentToInterestRate: "失业率↑ → 央行降息 → 利率↓",
        unemploymentToInterestRate_rise: "失业率↑ → 央行降息 → 利率↓",
        unemploymentToInterestRate_fall: "失业率↓ → 央行加息 → 利率↑",
        
        unemploymentToGdp: "失业率↑ → 消费能力↓ → GDP↓",
        unemploymentToGdp_rise: "失业率↑ → 消费能力↓ → GDP↓",
        unemploymentToGdp_fall: "失业率↓ → 消费能力↑ → GDP↑",
        
        unemploymentToBondYield: "失业率↑ → 经济衰退预期↑ → 债券收益率↓",
        unemploymentToBondYield_rise: "失业率↑ → 经济衰退预期↑ → 债券收益率↓",
        unemploymentToBondYield_fall: "失业率↓ → 经济复苏预期↑ → 债券收益率↑",
        
        bondYieldToInterestRate: "债券收益率↑ → 市场利率预期↑ → 央行加息 → 利率↑",
        bondYieldToInterestRate_rise: "债券收益率↑ → 市场利率预期↑ → 央行加息 → 利率↑",
        bondYieldToInterestRate_fall: "债券收益率↓ → 市场利率预期↓ → 央行降息 → 利率↓",
        
        bondYieldToGdp: "债券收益率↑ → 融资成本↑ → 投资↓ → GDP↓",
        bondYieldToGdp_rise: "债券收益率↑ → 融资成本↑ → 投资↓ → GDP↓",
        bondYieldToGdp_fall: "债券收益率↓ → 融资成本↓ → 投资↑ → GDP↑",
        
        exportToGdp: "出口↑ → 净出口↑ → GDP↑",
        exportToGdp_rise: "出口↑ → 净出口↑ → GDP↑",
        exportToGdp_fall: "出口↓ → 净出口↓ → GDP↓",
        
        exportToInterestRate: "出口↑ → 经济增长↑ → 通胀压力↑ → 利率↑",
        exportToInterestRate_rise: "出口↑ → 经济增长↑ → 通胀压力↑ → 利率↑",
        exportToInterestRate_fall: "出口↓ → 经济增长↓ → 通胀压力↓ → 利率↓",
        
        exportToUnemployment: "出口↑ → 生产扩张↑ → 就业机会↑ → 失业率↓",
        exportToUnemployment_rise: "出口↑ → 生产扩张↑ → 就业机会↑ → 失业率↓",
        exportToUnemployment_fall: "出口↓ → 生产收缩 → 就业机会↓ → 失业率↑",
        
        importToGdp: "进口↑ → 净出口↓ → GDP↓",
        importToGdp_rise: "进口↑ → 净出口↓ → GDP↓",
        importToGdp_fall: "进口↓ → 净出口↑ → GDP↑",
        
        importToInterestRate: "进口↑ → 经济压力↑ → 央行降息 → 利率↓",
        importToInterestRate_rise: "进口↑ → 经济压力↑ → 央行降息 → 利率↓",
        importToInterestRate_fall: "进口↓ → 经济压力↓ → 央行加息 → 利率↑",
        
        importToUnemployment: "进口↑ → 国内产业竞争↑ → 失业率↑",
        importToUnemployment_rise: "进口↑ → 国内产业竞争↑ → 失业率↑",
        importToUnemployment_fall: "进口↓ → 国内产业竞争↓ → 失业率↓",
        
        gdpToExport: "GDP↑ → 生产能力提升↑ → 出口竞争力↑ → 出口↑",
        gdpToExport_rise: "GDP↑ → 生产能力提升↑ → 出口竞争力↑ → 出口↑",
        gdpToExport_fall: "GDP↓ → 生产能力下降 → 出口竞争力↓ → 出口↓",
        
        bondYieldToUnemployment: "债券收益率↑ → 企业融资成本↑ → 裁员↑ → 失业率↑",
        bondYieldToUnemployment_rise: "债券收益率↑ → 企业融资成本↑ → 裁员↑ → 失业率↑",
        bondYieldToUnemployment_fall: "债券收益率↓ → 企业融资成本↓ → 招聘↑ → 失业率↓",
        // Transmission explanation texts
        initialChange: "初始变化",
        transmissionPaths: "传导路径",
        level: "级传导",
        levelFormat: "第{0}级传导",
        explanationTitleFormat: "{0}{1}的{2}",
        valueChangeFormat: "{0}{1}",
        
        // Indicator detailed content
        interestRateDefinition: "这里主要指由中央银行设定的政策利率（如美国的联邦基金利率），它是整个金融市场利率的基准。",
        interestRateEffect1: "影响国内需求：利率↓ → 企业贷款成本↓、个人房贷/消费贷成本↓ → 刺激企业投资和居民消费 → 总需求↑ → GDP↑。",
        interestRateEffect2: "影响国际资本流动与汇率：本国利率↑ → 吸引海外资本流入以追求更高回报 → 本币需求↑ → 本币汇率升值。反之亦然。",
        interestRateEffect3: "直接影响债券价格：市场利率与债券价格存在反向关系。利率↑，则已发行债券的固定利息吸引力下降，其价格↓（债券收益率上升）。",
        bondYieldDefinition: "债券收益率（尤其是长期国债收益率）是市场利率的体现，反映了市场对经济增长、通胀和货币政策的预期。",
        bondYieldRelationship1: "债券价格 ↑ = 债券收益率 ↓",
        bondYieldRelationship2: "债券价格 ↓ = 债券收益率 ↑",
        bondYieldEffect1: "经济预期：当市场预期未来经济增长（GDP↑）、通胀升温时，会预期央行将加息，从而导致债券价格下跌（收益率上升）。",
        bondYieldEffect2: "避险情绪：经济前景不佳（GDP↓）或出现危机时，资金涌入国债避险，推高债券价格（收益率下降）。",
        exportImportEffect1: "利率 → 汇率 → 进出口：如上所述，利率↑ → 本币升值 → 本国出口商品变贵、进口商品变便宜 → 出口额↓，进口额↑（可能恶化贸易差额）。",
        exportImportEffect2: "GDP（国内需求） → 进口：本国GDP增长强劲 → 内需旺盛 → 通常会增加对国外商品的需求 → 进口额↑。",
        gdpDefinition: "国内生产总值，衡量一个国家最终产出的总和。从支出法看：GDP = 消费 + 投资 + 政府支出 + 净出口（出口 - 进口）。",
        gdpEffect1: "它是结果：上述的利率变化通过影响消费、投资、净出口，最终会体现在GDP的增速上。",
        gdpEffect2: "它是原因：GDP的强弱（经济增长率）反过来又会影响央行政策、失业率和市场预期。",
        unemploymentDefinition: "失业人口占劳动人口的比例。",
        unemploymentCharacteristics: "滞后指标。经济变差（GDP↓）时，企业不会立即裁员；经济变好（GDP↑）时，企业也不会立即大规模招聘。",
        unemploymentRelationship1: "与GDP：存在奥肯定律的经验关系——GDP增长率高于潜在增长率时，失业率会下降。",
        unemploymentRelationship2: "与利率/央行政策：失业率是央行（尤其是美联储）实施\"双重使命\"（物价稳定、充分就业）时重点关注的指标。高失业率通常支持央行维持低利率或降息。",
        
        // Scenario content
        scenario1Cause: "GDP增长过快，失业率很低，通胀持续上升。",
        scenario1Action: "中央银行加息以抑制总需求。",
        scenario1Transmission1: "市场利率上升 → 债券价格下跌（收益率上升）。",
        scenario1Transmission2: "融资成本上升 → 企业投资和居民消费放缓 → GDP增速预期下降。",
        scenario1Transmission3: "本币汇率可能升值 → 出口受抑制，进口增加 → 净出口对GDP的贡献可能减少。",
        scenario1Result: "经济增速（GDP）回归平稳。",
        scenario2Cause: "GDP连续下滑，失业率攀升，通胀低迷。",
        scenario2Action: "中央银行降息以刺激经济。",
        scenario2Transmission1: "市场利率下降 → 债券价格上涨（收益率下降）。",
        scenario2Transmission2: "融资成本降低 → 鼓励投资和消费。",
        scenario2Transmission3: "本币汇率可能贬值 → 提升出口竞争力，抑制进口 → 净出口改善。",
        scenario2Result: "经济走向复苏。"
    },
    nav: {
        home: "首页",
        test: "风格测试",
        macro: "宏观指标",
        articles: "投资知识",
        report: "调查报告"
    },
    report: {
        title: "调查报告",
        newReport: "新建报告",
        editReport: "编辑报告",
        deleteReport: "删除报告",
        exportReport: "导出报告",
        importReport: "导入报告",
        reportList: "报告列表",
        search: "搜索",
        filter: "筛选",
        filterAll: "全部",
        filterDraft: "草稿",
        filterCompleted: "已完成",
        sort: "排序",
        sortUpdated: "按更新时间",
        sortCreated: "按创建时间",
        sortName: "按名称",
        emptyState: "还没有报告",
        emptyStateDesc: "点击\"新建报告\"开始创建您的第一个调查报告",
        basicInfo: "基本信息",
        valueAnalysis: "价值投资分析",
        trendAnalysis: "趋势投资分析",
        macroAnalysis: "宏观投资分析",
        narrativeAnalysis: "叙事投资分析",
        summary: "综合分析",
        saveDraft: "保存草稿",
        autoSave: "自动保存",
        exportPDF: "导出PDF",
        exportWord: "导出Word",
        exportJSON: "导出备份",
        importJSON: "导入备份",
        preview: "预览",
        deleteConfirm: "确定要删除此报告吗？",
        saveSuccess: "保存成功",
        saveFailed: "保存失败",
        importSuccess: "导入成功",
        importFailed: "导入失败",
        backToList: "返回列表",
        backToEditor: "返回编辑",
        prevStep: "上一步",
        nextStep: "下一步",
        companyName: "公司名称",
        stockCode: "股票代码",
        industry: "行业",
        reportDate: "报告日期",
        investmentGoal: "投资目标",
        dimensionNotSelected: "未选择此维度",
        selectDimensionFirst: "请先在\"选择分析维度\"步骤中选择此分析维度",
        goToDimensions: "前往维度选择",
        selectOption: "请选择",
        fillRequired: "请填写所有必填项",
        overwriteConfirm: "报告已存在，是否覆盖？",
        investmentLogic: "投资逻辑总结",
        riskAnalysis: "风险分析",
        investmentAdvice: "投资建议",
        followUp: "后续跟踪计划"
    }
};
