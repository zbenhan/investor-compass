// 投资风格测试题数据
const testQuestions = [
    {
        id: 1,
        category: {
            zh: "决策思维与依据",
            en: "Decision Thinking and Basis",
            fr: "Pensée et fondements de décision",
            es: "Pensamiento y base de decisión"
        },
        question: {
            zh: "当你看好一只股票但市场普遍看跌时，你的第一反应是？",
            en: "When you are bullish on a stock but the market is generally bearish, what is your first reaction?",
            fr: "Quand vous êtes optimiste sur un stock mais que le marché est généralement baissier, quelle est votre première réaction ?",
            es: "Cuando estás optimista sobre una acción pero el mercado está generalmente bajista, ¿cuál es tu primera reacción?"
        },
        options: [
            { id: 'A', text: { zh: "深入研究，坚持己见（理性独立）", en: "In-depth research, stick to your own opinions (rational independence)", fr: "Recherche approfondie, tenir son opinion (indépendance rationnelle)", es: "Investigación profunda, mantener sus propias opiniones (independencia racional)" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "非常焦虑，倾向于放弃（从众倾向）", en: "Very anxious, tend to give up (conformity tendency)", fr: "Très anxieux, tendance à abandonner (tendance à la conformité)", es: "Muy ansioso, tiende a abandonar (tendencia a la conformidad)" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "先小仓位买入，观察市场反应（灵活试探）", en: "First buy a small position, observe market reaction (flexible testing)", fr: "D'abord acheter une petite position, observer la réaction du marché (test flexible)", es: "Primero compre una pequeña posición, observe la reacción del mercado (prueba flexible)" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "立刻寻找反面观点来挑战自己（反思警惕）", en: "Immediately look for opposing views to challenge yourself (reflective vigilance)", fr: "Cherchez immédiatement des points de vue opposés pour vous défier (vigilance réflexive)", es: "Busque inmediatamente opiniones opuestas para desafiarse a sí mismo (vigilancia reflexiva)" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 2,
        category: {
            zh: "决策思维与依据",
            en: "Decision Thinking and Basis",
            fr: "Pensée et fondements de décision",
            es: "Pensamiento y base de decisión"
        },
        question: {
            zh: "你制定投资决策时，最重要的依据是什么？",
            en: "What is the most important basis for your investment decisions?",
            fr: "Quel est le critère le plus important pour vos décisions d'investissement ?",
            es: "¿Cuál es el criterio más importante para sus decisiones de inversión?"
        },
        options: [
            { id: 'A', text: { zh: "公司财报、商业模式与护城河（基本面驱动）", en: "Company financial reports, business models and moats (fundamental-driven)", fr: "Rapports financiers des entreprises, modèles d'affaires et fossés (fondamental-dérivé)", es: "Informes financieros de la empresa, modelos de negocio y fosos defensivos (impulsado por fundamentos)" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "图表的技术形态、交易量与价格趋势（技术面驱动）", en: "Chart technical patterns, trading volume and price trends (technical-driven)", fr: "Formes techniques des graphiques, volume de négociation et tendances de prix (technique-dérivé)", es: "Patrones técnicos del gráfico, volumen de negociación y tendencias de precio (impulsado por técnicos)" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "行业政策、宏观经济周期与利率环境（宏观面驱动）", en: "Industry policies, macroeconomic cycles and interest rate environment (macro-driven)", fr: "Politiques industrielles, cycles macroéconomiques et environnement des taux d'intérêt (macro-dérivé)", es: "Políticas industriales, ciclos macroeconómicos y entorno de tasas de interés (impulsado por macro)" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "市场热点、新闻故事与社交媒体情绪（情绪/叙事驱动）", en: "Market hotspots, news stories and social media sentiment (emotion/narrative-driven)", fr: "Points chauds du marché, histoires d'actualité et sentiment des médias sociaux (émotion/narration-dérivé)", es: "Temas calientes del mercado, historias de noticias y sentimiento en redes sociales (impulsado por emociones/narrativas)" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 3,
        category: {
            zh: "决策思维与依据",
            en: "Decision Thinking and Basis",
            fr: "Pensée et fondements de décision",
            es: "Pensamiento y base de decisión"
        },
        question: {
            zh: "你花在投资研究上的主要时间通常是？",
            en: "How do you usually spend your main time on investment research?",
            fr: "Comment passez-vous généralement votre temps principal sur la recherche d'investissement ?",
            es: "¿Cómo suele gastar su tiempo principal en investigación de inversiones?"
        },
        options: [
            { id: 'A', text: { zh: "深度阅读公司年报、券商研报", en: "Deep reading of company annual reports, brokerage research reports", fr: "Lecture approfondie des rapports annuels des entreprises, rapports de recherche des courtiers", es: "Lectura profunda de informes anuales de empresas, informes de investigación de corredores" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "分析K线图、研究各类技术指标", en: "Analyzing K-line charts, studying various technical indicators", fr: "Analyse des graphiques K, étude de divers indicateurs techniques", es: "Análisis de gráficos de velas, estudio de diversos indicadores técnicos" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "跟踪央行政策、宏观经济数据", en: "Tracking central bank policies, macroeconomic data", fr: "Suivi des politiques des banques centrales, données macroéconomiques", es: "Seguimiento de políticas de bancos centrales, datos macroeconómicos" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "浏览财经新闻、论坛与自媒体观点", en: "Browsing financial news, forums and self-media opinions", fr: "Navigation sur les actualités financières, forums et opinions des médias personnels", es: "Navegando por noticias financieras, foros y opiniones de medios personales" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 4,
        category: {
            zh: "决策思维与依据",
            en: "Decision Thinking and Basis",
            fr: "Pensée et fondements de décision",
            es: "Pensamiento y base de decisión"
        },
        question: {
            zh: "你如何理解\"市场先生\"这个概念？",
            en: "How do you understand the concept of \"Mr. Market\"?",
            fr: "Comment comprenez-vous le concept de \"Monsieur Marché\" ?",
            es: "¿Cómo entiende el concepto de \"Señor Mercado\"?"
        },
        options: [
            { id: 'A', text: { zh: "它是情绪的化身，为我提供低价买入优质资产的机会（价值视角）", en: "It is the embodiment of emotions, providing me with opportunities to buy high-quality assets at low prices (value perspective)", fr: "C'est l'incarnation des émotions, me fournissant des opportunités d'acheter des actifs de haute qualité à bas prix (perspective de valeur)", es: "Es la encarnación de las emociones, proporcionándome oportunidades para comprar activos de alta calidad a precios bajos (perspectiva de valor)" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "它是趋势的朋友，我需要判断其情绪并跟随（趋势视角）", en: "It is a friend of trends, I need to judge its emotions and follow (trend perspective)", fr: "C'est un ami des tendances, je dois juger ses émotions et suivre (perspective de tendance)", es: "Es un amigo de las tendencias, necesito juzgar sus emociones y seguir (perspectiva de tendencia)" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "它是周期性波动的根源，我需要利用这种周期（周期视角）", en: "It is the root of cyclical fluctuations, I need to utilize this cycle (cycle perspective)", fr: "C'est la racine des fluctuations cycliques, je dois utiliser ce cycle (perspective de cycle)", es: "Es la raíz de las fluctuaciones cíclicas, necesito utilizar este ciclo (perspectiva cíclica)" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "它是叙事的放大器，故事能否传播取决于它（叙事视角）", en: "It is a narrative amplifier, whether the story can spread depends on it (narrative perspective)", fr: "C'est un amplificateur narratif, la capacité de diffusion de l'histoire dépend de lui (perspective narrative)", es: "Es un amplificador narrativo, la capacidad de difusión de la historia depende de él (perspectiva narrativa)" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 5,
        category: {
            zh: "决策思维与依据",
            en: "Decision Thinking and Basis",
            fr: "Pensée et fondements de décision",
            es: "Pensamiento y base de decisión"
        },
        question: {
            zh: "你认为\"投资\"与\"投机\"最主要的区别是？",
            en: "What do you think is the main difference between \"investment\" and \"speculation\"?",
            fr: "Quelle est selon vous la principale différence entre \"investissement\" et \"spéculation\" ?",
            es: "¿Cuál cree que es la diferencia principal entre \"inversión\" y \"especulación\"?"
        },
        options: [
            { id: 'A', text: { zh: "是否基于资产的内在价值", en: "Whether based on the intrinsic value of assets", fr: "Si basé sur la valeur intrinsèque des actifs", es: "Si se basa en el valor intrínseco de los activos" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "是否具有明确的交易纪律和止损规则", en: "Whether it has clear trading discipline and stop-loss rules", fr: "Si il a une discipline commerciale claire et des règles de stop-loss", es: "Si tiene una disciplina de trading clara y reglas de stop-loss" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "时间周期的长短", en: "The length of the time period", fr: "La durée de la période", es: "La duración del período de tiempo" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "是否顺应了当下的市场共识", en: "Whether it conforms to the current market consensus", fr: "Si il se conforme au consensus de marché actuel", es: "Si se ajusta al consenso de mercado actual" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 6,
        category: {
            zh: "风险与持仓行为",
            en: "Risk and Position Behavior",
            fr: "Risque et comportement de position",
            es: "Riesgo y comportamiento de posición"
        },
        question: {
            zh: "投资后，股价短期下跌20%，但买入理由未变，你会？",
            en: "After investing, the stock price drops 20% in the short term, but the reason for buying remains unchanged, what will you do?",
            fr: "Après avoir investi, le prix de l'action chute de 20 % à court terme, mais la raison d'achat reste inchangée, que ferez-vous ?",
            es: "Después de invertir, el precio de la acción cae un 20% a corto plazo, pero la razón para comprar sigue siendo la misma, ¿qué harías?"
        },
        options: [
            { id: 'A', text: { zh: "只要基本面不变就加仓（逆向投资）", en: "Increase positions as long as fundamentals remain unchanged (contrarian investment)", fr: "Augmentez les positions tant que les fondamentaux restent inchangés (investissement contrarian)", es: "Aumentar posiciones siempre que los fundamentos se mantengan sin cambios (inversión contraria)" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "严格止损，卖出离场（纪律交易）", en: "Strict stop-loss, sell and exit (disciplined trading)", fr: "Stop-loss strict, vendre et quitter (trading discipliné)", es: "Stop-loss estricto, vender y salir (trading disciplinado)" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "非常焦虑，寻求他人意见或查看更多信息（情绪敏感）", en: "Very anxious, seek others' opinions or check more information (emotionally sensitive)", fr: "Très anxieux, cherchez l'avis des autres ou vérifiez plus d'informations (sensible émotionnellement)", es: "Muy ansioso, busque opiniones de otros o revise más información (sensible emocionalmente)" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "重新全面评估，可能减持或调仓（动态评估）", en: "Re-evaluate comprehensively, may reduce or adjust positions (dynamic evaluation)", fr: "Réévaluez globalement, peut réduire ou ajuster les positions (évaluation dynamique)", es: "Reevaluar exhaustivamente, puede reducir o ajustar posiciones (evaluación dinámica)" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 7,
        category: {
            zh: "风险与持仓行为",
            en: "Risk and Position Behavior",
            fr: "Risque et comportement de position",
            es: "Riesgo y comportamiento de posición"
        },
        question: {
            zh: "对于\"市场风险\"，你更担心哪一种？",
            en: "Regarding \"market risk\", which one are you more worried about?",
            fr: "Concernant le \"risque de marché\", lequel êtes-vous le plus inquiet ?",
            es: "Con respecto al \"riesgo de mercado\", ¿cuál es el que más te preocupa?"
        },
        options: [
            { id: 'A', text: { zh: "买错了公司（个股基本面风险）", en: "Bought the wrong company (individual stock fundamental risk)", fr: "Acheté la mauvaise entreprise (risque fondamental de stock individuel)", es: "Compró la empresa equivocada (riesgo fundamental de acción individual)" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "买错了时机（市场系统风险）", en: "Bought at the wrong time (market system risk)", fr: "Acheté au mauvais moment (risque système de marché)", es: "Compró en el momento equivocado (riesgo del sistema de mercado)" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "因情绪波动而错误操作（行为风险）", en: "Wrong operation due to emotional fluctuations (behavioral risk)", fr: "Mauvaise opération due aux fluctuations émotionnelles (risque comportemental)", es: "Operación incorrecta debido a fluctuaciones emocionales (riesgo conductual)" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "因信息不对称而落后（信息风险）", en: "Lagging due to information asymmetry (information risk)", fr: "Retardé en raison d'une asymétrie d'information (risque d'information)", es: "Retrasado debido a la asimetría de información (riesgo informativo)" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 8,
        category: {
            zh: "风险与持仓行为",
            en: "Risk and Position Behavior",
            fr: "Risque et comportement de position",
            es: "Riesgo y comportamiento de posición"
        },
        question: {
            zh: "你单只股票或单一行业的持仓上限通常是？",
            en: "What is usually your position limit for a single stock or a single industry?",
            fr: "Quelle est généralement votre limite de position pour un seul stock ou une seule industrie ?",
            es: "¿Cuál es generalmente su límite de posición para una sola acción o una sola industria?"
        },
        options: [
            { id: 'A', text: { zh: "深入研究后可集中持仓（如>30%）", en: "Can concentrate positions after in-depth research (e.g., >30%)", fr: "Peut concentrer les positions après une recherche approfondie (par exemple, >30%)", es: "Puede concentrar posiciones después de una investigación profunda (ej., >30%)" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "适度分散，有明确上限（如10%-20%）", en: "Moderately diversified, with clear upper limit (e.g., 10%-20%)", fr: "Modérément diversifié, avec une limite supérieure claire (par exemple, 10 %-20 %) ", es: "Moderadamente diversificado, con un límite superior claro (ej., 10%-20%)" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "高度分散，不依赖单个机会（如<10%）", en: "Highly diversified, not dependent on a single opportunity (e.g., <10%)", fr: "Très diversifié, pas dépendant d'une seule opportunité (par exemple, <10%)", es: "Altamente diversificado, no dependiente de una sola oportunidad (ej., <10%)" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "不确定，取决于机会大小和信心", en: "Uncertain, depends on the size of the opportunity and confidence", fr: "Incertain, dépend de la taille de l'opportunité et de la confiance", es: "Incierto, depende del tamaño de la oportunidad y la confianza" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 9,
        category: {
            zh: "风险与持仓行为",
            en: "Risk and Position Behavior",
            fr: "Risque et comportement de position",
            es: "Riesgo y comportamiento de posición"
        },
        question: {
            zh: "你的投资收益预期主要来源于？",
            en: "Where does your investment return expectation mainly come from?",
            fr: "D'où vient principalement votre attente de rendement sur investissement ?",
            es: "¿De dónde proviene principalmente tu expectativa de retorno de inversión?"
        },
        options: [
            { id: 'A', text: { zh: "企业成长带来的内在价值提升", en: "Increase in intrinsic value brought by enterprise growth", fr: "Augmentation de la valeur intrinsèque apportée par la croissance de l'entreprise", es: "Aumento del valor intrínseco provocado por el crecimiento empresarial" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "市场波动带来的价差机会", en: "Price difference opportunities brought by market fluctuations", fr: "Opportunités de différence de prix apportées par les fluctuations du marché", es: "Oportunidades de diferencia de precios provocadas por fluctuaciones del mercado" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "对经济或行业大趋势的准确判断", en: "Accurate judgment on economic or industry trends", fr: "Jugement précis sur les tendances économiques ou industrielles", es: "Juicio preciso sobre tendencias económicas o industriales" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "早于他人发现并验证一个新的投资故事", en: "Discover and verify a new investment story earlier than others", fr: "Découvrez et vérifiez une nouvelle histoire d'investissement avant les autres", es: "Descubrir y verificar una nueva historia de inversión antes que otros" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 10,
        category: {
            zh: "风险与持仓行为",
            en: "Risk and Position Behavior",
            fr: "Risque et comportement de position",
            es: "Riesgo y comportamiento de posición"
        },
        question: {
            zh: "你通常如何对待盈利的持仓？",
            en: "How do you usually treat profitable positions?",
            fr: "Comment traitez-vous généralement les positions rentables ?",
            es: "¿Cómo suele tratar las posiciones rentables?"
        },
        options: [
            { id: 'A', text: { zh: "达到目标估值或逻辑兑现前长期持有", en: "Hold long-term until target valuation or logic is realized", fr: "Conserver à long terme jusqu'à ce que la valorisation cible ou la logique soit réalisée", es: "Mantener a largo plazo hasta que se realice la valoración objetivo o la lógica" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "趋势破位或出现卖出信号时果断止盈", en: "Decisively take profits when trend breaks or sell signals appear", fr: "Prendre résolument des profits lorsque la tendance se casse ou que des signaux de vente apparaissent", es: "Tomar ganancias decisivamente cuando la tendencia se rompe o aparecen señales de venta" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "根据宏观环境变化调整仓位", en: "Adjust positions according to macro environment changes", fr: "Ajustez les positions en fonction des changements de l'environnement macro", es: "Ajustar posiciones según los cambios en el entorno macro" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "故事热度下降或出现新叙事时退出", en: "Exit when story popularity declines or new narratives emerge", fr: "Quittez lorsque la popularité de l'histoire diminue ou que de nouvelles narrations émergent", es: "Salir cuando la popularidad de la historia disminuye o surgen nuevas narrativas" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 11,
        category: {
            zh: "信息处理与学习",
            en: "Information Processing and Learning",
            fr: "Traitement de l'information et apprentissage",
            es: "Procesamiento de información y aprendizaje"
        },
        question: {
            zh: "一个投资决定最终亏损，你最主要的归因是？",
            en: "An investment decision ultimately resulted in a loss, what is your main attribution?",
            fr: "Une décision d'investissement a finalement entraîné une perte, quelle est votre attribution principale ?",
            es: "Una decisión de inversión resultó finalmente en una pérdida, ¿cuál es tu atribución principal?"
        },
        options: [
            { id: 'A', text: { zh: "自己的研究有疏漏或判断失误（内归因-能力）", en: "My research had omissions or judgment errors (internal attribution - ability)", fr: "Ma recherche avait des omissions ou des erreurs de jugement (attribution interne - capacité)", es: "Mi investigación tuvo omisiones o errores de juicio (atribución interna - capacidad)" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "市场的非理性或突发\"黑天鹅\"（外归因-环境）", en: "Market irrationality or sudden \"black swan\" (external attribution - environment)", fr: "Irrationalité du marché ou \"cygne noir\" soudain (attribution externe - environnement)", es: "Irrationalidad del mercado o \"cisne negro\" repentino (atribución externa - entorno)" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "运气不好，下次可能就会赢（外归因-运气）", en: "Bad luck, maybe I will win next time (external attribution - luck)", fr: "Mauvaise chance, peut-être que je gagnerai la prochaine fois (attribution externe - chance)", es: "Mala suerte, tal vez ganaré la próxima vez (atribución externa - suerte)" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "信息获取太慢、不足或被误导（外归因-信息）", en: "Information acquisition was too slow, insufficient, or misleading (external attribution - information)", fr: "L'acquisition d'informations était trop lente, insuffisante ou trompeuse (attribution externe - information)", es: "La adquisición de información fue demasiado lenta, insuficiente o engañosa (atribución externa - información)" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 12,
        category: {
            zh: "信息处理与学习",
            en: "Information Processing and Learning",
            fr: "Traitement de l'information et apprentissage",
            es: "Procesamiento de información y aprendizaje"
        },
        question: {
            zh: "你通常如何处理与自己持仓相反的观点？",
            en: "How do you usually handle opinions that are opposite to your positions?",
            fr: "Comment gérez-vous généralement les opinions opposées à vos positions ?",
            es: "¿Cómo suele manejar las opiniones opuestas a sus posiciones?"
        },
        options: [
            { id: 'A', text: { zh: "非常欢迎，作为压力测试来完善分析", en: "Very welcome, as a stress test to improve analysis", fr: "Très bienvenu, comme un test de stress pour améliorer l'analyse", es: "Muy bienvenido, como una prueba de estrés para mejorar el análisis" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "参考其技术面信号，判断是否影响趋势", en: "Refer to its technical signals to judge whether it affects the trend", fr: "Référez-vous à ses signaux techniques pour juger si cela affecte la tendance", es: "Consulte sus señales técnicas para juzgar si afecta la tendencia" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "评估其是否改变了宏观背景假设", en: "Evaluate whether it has changed the macro background assumptions", fr: "Évaluez si cela a changé les hypothèses de fond macro", es: "Evaluar si ha cambiado las suposiciones del contexto macro" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "判断其是否会形成新的市场共识和叙事", en: "Judge whether it will form a new market consensus and narrative", fr: "Jugez si cela formera un nouveau consensus et une nouvelle narration sur le marché", es: "Juzgar si formará un nuevo consenso y narrativa del mercado" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 13,
        category: {
            zh: "信息处理与学习",
            en: "Information Processing and Learning",
            fr: "Traitement de l'information et apprentissage",
            es: "Procesamiento de información y aprendizaje"
        },
        question: {
            zh: "你更倾向于相信哪类信息源？",
            en: "Which type of information source do you tend to trust more?",
            fr: "Quel type de source d'information aimez-vous croire le plus ?",
            es: "¿Qué tipo de fuente de información tiendes a confiar más?"
        },
        options: [
            { id: 'A', text: { zh: "公司官方文件、经核实的长期数据", en: "Official company documents, verified long-term data", fr: "Documents officiels de l'entreprise, données à long terme vérifiées", es: "Documentos oficiales de la empresa, datos a largo plazo verificados" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "盘面语言、资金流向数据", en: "Market language, capital flow data", fr: "Langage du marché, données de flux de capitaux", es: "Lenguaje del mercado, datos de flujo de capital" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "权威机构发布的宏观报告与数据", en: "Macro reports and data released by authoritative institutions", fr: "Rapports macro et données publiés par des institutions autorisées", es: "Informes macro y datos publicados por instituciones autorizadas" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "能敏锐反映市场情绪变化的社交平台", en: "Social platforms that can敏锐反映 market sentiment changes", fr: "Plateformes sociales qui peuvent refléter rapidement les changements de sentiment du marché", es: "Plataformas sociales que pueden reflejar rápidamente los cambios de sentimiento del mercado" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 14,
        category: {
            zh: "心理与性格特质",
            en: "Psychology and Personality Traits",
            fr: "Psychologie et traits de personnalité",
            es: "Psicología y rasgos de personalidad"
        },
        question: {
            zh: "在投资决策中，你更相信什么？",
            en: "In investment decisions, what do you believe more in?",
            fr: "Dans les décisions d'investissement, en quoi croyez-vous le plus ?",
            es: "En las decisiones de inversión, ¿en qué crees más?"
        },
        options: [
            { id: 'A', text: { zh: "逻辑与计算", en: "Logic and calculation", fr: "Logique et calcul", es: "Lógica y cálculo" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "信号与纪律", en: "Signals and discipline", fr: "Signaux et discipline", es: "Señales y disciplina" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "规律与周期", en: "Patterns and cycles", fr: "Modèles et cycles", es: "Patrones y ciclos" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "直觉与敏锐度", en: "Intuition and sensitivity", fr: "Intuition et sensibilité", es: "Intuición y sensibilidad" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 15,
        category: {
            zh: "心理与性格特质",
            en: "Psychology and Personality Traits",
            fr: "Psychologie et traits de personnalité",
            es: "Psicología y rasgos de personalidad"
        },
        question: {
            zh: "你会如何描述自己的投资操作频率？",
            en: "How would you describe your investment operation frequency?",
            fr: "Comment décririez-vous la fréquence de vos opérations d'investissement ?",
            es: "¿Cómo describirías la frecuencia de tus operaciones de inversión?"
        },
        options: [
            { id: 'A', text: { zh: "极低，以年为单位决策", en: "Very low, decisions on a yearly basis", fr: "Très bas, décisions sur une base annuelle", es: "Muy bajo, decisiones sobre una base anual" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "中等，以月或季度为单位调整", en: "Medium, adjustments on a monthly or quarterly basis", fr: "Moyen, ajustements sur une base mensuelle ou trimestrielle", es: "Medio, ajustes sobre una base mensual o trimestral" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "较高，捕捉波段机会", en: "High, capturing band opportunities", fr: "Élevé, capturant des opportunités de bande", es: "Alto, capturando oportunidades de banda" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "非常高，对短期信息快速反应", en: "Very high, quick response to short-term information", fr: "Très élevé, réponse rapide aux informations à court terme", es: "Muy alto, respuesta rápida a información de corto plazo" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 16,
        category: {
            zh: "心理与性格特质",
            en: "Psychology and Personality Traits",
            fr: "Psychologie et traits de personnalité",
            es: "Psicología y rasgos de personalidad"
        },
        question: {
            zh: "当市场出现剧烈波动时，你本能的第一关注点是？",
            en: "When the market experiences sharp fluctuations, what is your instinctive first concern?",
            fr: "Lorsque le marché subit de fortes fluctuations, quelle est votre première préoccupation instinctive ?",
            es: "Cuando el mercado experimenta fluctuaciones bruscas, ¿cuál es tu primera preocupación instintiva?"
        },
        options: [
            { id: 'A', text: { zh: "我的持仓公司价值是否受损", en: "Whether the value of my holding companies is damaged", fr: "Si la valeur de mes sociétés détenues est endommagée", es: "Si el valor de mis empresas en cartera se ve dañado" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "我的交易系统是否发出信号", en: "Whether my trading system is sending signals", fr: "Si mon système de trading envoie des signaux", es: "Si mi sistema de trading está enviando señales" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "波动背后的宏观驱动因素是什么", en: "What are the macro driving factors behind the fluctuations", fr: "Quels sont les facteurs de pilotage macro derrière les fluctuations", es: "¿Cuáles son los factores macro impulsores detrás de las fluctuaciones" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "市场情绪和共识发生了什么变化", en: "What changes have occurred in market sentiment and consensus", fr: "Quels changements ont eu lieu dans le sentiment et le consensus du marché", es: "¿Qué cambios han ocurrido en el sentimiento y el consenso del mercado" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 17,
        category: {
            zh: "心理与性格特质",
            en: "Psychology and Personality Traits",
            fr: "Psychologie et traits de personnalité",
            es: "Psicología y rasgos de personalidad"
        },
        question: {
            zh: "你认为自己在投资中的最大优势是？",
            en: "What do you think is your greatest advantage in investing?",
            fr: "Quelle est selon vous votre plus grand avantage en matière d'investissement ?",
            es: "¿Cuál crees que es tu mayor ventaja en las inversiones?"
        },
        options: [
            { id: 'A', text: { zh: "耐心与独立", en: "Patience and independence", fr: "Patience et indépendance", es: "Paciencia e independencia" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "纪律与执行力", en: "Discipline and execution ability", fr: "Discipline et capacité d'exécution", es: "Disciplina y capacidad de ejecución" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "视野与框架", en: "Vision and framework", fr: "Vision et cadre", es: "Visión y marco" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "灵活与敏锐", en: "Flexibility and sensitivity", fr: "Flexibilité et sensibilité", es: "Flexibilidad y sensibilidad" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 18,
        category: {
            zh: "投资目标与周期",
            en: "Investment Objectives and Cycles",
            fr: "Objectifs et cycles d'investissement",
            es: "Objetivos y ciclos de inversión"
        },
        question: {
            zh: "你期望的主要投资回报周期是？",
            en: "What is your expected main investment return cycle?",
            fr: "Quel est votre cycle de rendement d'investissement principal attendu ?",
            es: "¿Cuál es tu ciclo de retorno de inversión principal esperado?"
        },
        options: [
            { id: 'A', text: { zh: "数年甚至更长，陪伴企业成长（长期主义）", en: "Several years or longer, accompanying company growth (long-termism)", fr: "Plusieurs années ou plus, accompagnant la croissance de l'entreprise (long-terme)", es: "Varios años o más, acompañando el crecimiento empresarial (longevo)" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "数月到一两年，完成一轮趋势（中期趋势）", en: "Several months to one or two years, completing a trend cycle (medium-term trend)", fr: "Plusieurs mois à un ou deux ans, complétant un cycle de tendance (tendance à moyen terme)", es: "Varios meses a uno o dos años, completando un ciclo de tendencia (tendencia a mediano plazo)" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "几周或数月，赚取波段差价（短期交易）", en: "Several weeks or months, earning band price differences (short-term trading)", fr: "Plusieurs semaines ou mois, gagnant des différences de prix de bande (trading à court terme)", es: "Varias semanas o meses, ganando diferencias de precios de banda (trading a corto plazo)" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "几天到几周，快速兑现故事（事件驱动）", en: "A few days to several weeks, quickly realizing stories (event-driven)", fr: "Quelques jours à plusieurs semaines, réalisant rapidement des histoires (événement-dérivé)", es: "Unos días a varias semanas, materializando rápidamente historias (impulsado por eventos)" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 19,
        category: {
            zh: "投资目标与周期",
            en: "Investment Objectives and Cycles",
            fr: "Objectifs et cycles d'investissement",
            es: "Objetivos y ciclos de inversión"
        },
        question: {
            zh: "你开始一项投资的主要触发因素是？",
            en: "What is the main trigger factor for you to start an investment?",
            fr: "Quel est le principal facteur déclencheur pour vous de commencer un investissement ?",
            es: "¿Cuál es el principal factor desencadenante para que comiences una inversión?"
        },
        options: [
            { id: 'A', text: { zh: "价格显著低于估算的内在价值", en: "Price is significantly lower than estimated intrinsic value", fr: "Le prix est significativement inférieur à la valeur intrinsèque estimée", es: "El precio es significativamente más bajo que el valor intrínseco estimado" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "识别出明确的上涨趋势或启动信号", en: "Identified a clear upward trend or start signal", fr: "Identifié une tendance haussière claire ou un signal de début", es: "Identificó una clara tendencia al alza o señal de inicio" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "预判到宏观经济或行业周期的拐点", en: "Predicted the inflection point of economic or industry cycle", fr: "Prévu le point de rebroussement du cycle économique ou industriel", es: "Predijo el punto de inflexión del ciclo económico o industrial" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "发现一个未被充分定价的强劲新叙事", en: "Discovered a strong new narrative that is not fully priced", fr: "Découvert une nouvelle narration forte qui n'est pas pleinement valorisée", es: "Descubrió una fuerte nueva narrativa que no está completamente valuada" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    },
    {
        id: 20,
        category: {
            zh: "投资目标与周期",
            en: "Investment Objectives and Cycles",
            fr: "Objectifs et cycles d'investissement",
            es: "Objetivos y ciclos de inversión"
        },
        question: {
            zh: "你衡量投资成功与否的首要标准是？",
            en: "What is your primary criterion for measuring investment success?",
            fr: "Quel est votre critère principal pour mesurer le succès d'un investissement ?",
            es: "¿Cuál es tu criterio principal para medir el éxito de una inversión?"
        },
        options: [
            { id: 'A', text: { zh: "是否跑赢了企业长期盈利增长", en: "Whether it outperforms long-term corporate profit growth", fr: "Si elle surpasse la croissance des profits des entreprises à long terme", es: "Si supera el crecimiento de los beneficios corporativos a largo plazo" }, scores: { value: 2, trend: 0, macro: 0, narrative: 0 } },
            { id: 'B', text: { zh: "是否稳定执行系统并实现了正期望收益", en: "Whether it stably executes the system and achieves positive expected returns", fr: "Si elle exécute stablement le système et réalise des rendements attendus positifs", es: "Si ejecuta establemente el sistema y logra rendimientos esperados positivos" }, scores: { value: 0, trend: 2, macro: 0, narrative: 0 } },
            { id: 'C', text: { zh: "是否抓住了周期轮动的主要阶段", en: "Whether it seized the main stages of cycle rotation", fr: "Si elle a saisi les étapes principales de la rotation des cycles", es: "Si aprovechó las etapas principales de la rotación de ciclos" }, scores: { value: 0, trend: 0, macro: 2, narrative: 0 } },
            { id: 'D', text: { zh: "是否在泡沫形成早期参与并在扩散期退出", en: "Whether it participated in the early stage of bubble formation and exited during the diffusion period", fr: "Si elle a participé au stade initial de la formation d'une bulle et a quitté pendant la période de diffusion", es: "Si participó en la etapa inicial de formación de burbujas y salió durante el período de difusión" }, scores: { value: 0, trend: 0, macro: 0, narrative: 2 } }
        ]
    }
];
