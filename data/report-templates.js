const reportTemplates = {
    basic: {
        name: "basic",
        title: {
            zh: "基本信息",
            en: "Basic Information",
            fr: "Informations de base",
            es: "Información básica"
        },
        fields: [
            {
                id: "title",
                type: "text",
                label: {
                    zh: "报告标题",
                    en: "Report Title",
                    fr: "Titre du rapport",
                    es: "Título del informe"
                },
                required: true,
                placeholder: {
                    zh: "例如：腾讯控股投资分析报告",
                    en: "e.g., Tencent Holdings Investment Analysis Report",
                    fr: "ex., Rapport d'analyse d'investissement Tencent Holdings",
                    es: "ej., Informe de análisis de inversión Tencent Holdings"
                }
            },
            {
                id: "companyName",
                type: "text",
                label: {
                    zh: "公司名称",
                    en: "Company Name",
                    fr: "Nom de l'entreprise",
                    es: "Nombre de la empresa"
                },
                required: true,
                placeholder: {
                    zh: "例如：腾讯控股有限公司",
                    en: "e.g., Tencent Holdings Limited",
                    fr: "ex., Tencent Holdings Limited",
                    es: "ej., Tencent Holdings Limited"
                }
            },
            {
                id: "stockCode",
                type: "text",
                label: {
                    zh: "股票代码",
                    en: "Stock Code",
                    fr: "Code d'action",
                    es: "Código de acción"
                },
                required: true,
                placeholder: {
                    zh: "例如：00700.HK",
                    en: "e.g., 00700.HK",
                    fr: "ex., 00700.HK",
                    es: "ej., 00700.HK"
                }
            },
            {
                id: "industry",
                type: "select",
                label: {
                    zh: "行业分类",
                    en: "Industry Classification",
                    fr: "Classification de l'industrie",
                    es: "Clasificación de la industria"
                },
                required: true,
                options: {
                    zh: ["科技", "金融", "医疗", "消费", "制造", "能源", "房地产", "其他"],
                    en: ["Technology", "Finance", "Healthcare", "Consumer", "Manufacturing", "Energy", "Real Estate", "Other"],
                    fr: ["Technologie", "Finance", "Santé", "Consommation", "Fabrication", "Énergie", "Immobilier", "Autre"],
                    es: ["Tecnología", "Finanzas", "Salud", "Consumo", "Manufactura", "Energía", "Bienes Raíces", "Otro"]
                }
            },
            {
                id: "reportDate",
                type: "date",
                label: {
                    zh: "报告日期",
                    en: "Report Date",
                    fr: "Date du rapport",
                    es: "Fecha del informe"
                },
                required: true
            },
            {
                id: "investmentGoal",
                type: "textarea",
                label: {
                    zh: "投资目标",
                    en: "Investment Goal",
                    fr: "Objectif d'investissement",
                    es: "Objetivo de inversión"
                },
                required: true,
                placeholder: {
                    zh: "描述您的投资目标和期望...",
                    en: "Describe your investment goals and expectations...",
                    fr: "Décrivez vos objectifs d'investissement et attentes...",
                    es: "Describa sus objetivos de inversión y expectativas..."
                }
            }
        ]
    },
    dimensions: {
        name: "dimensions",
        title: {
            zh: "选择分析维度",
            en: "Select Analysis Dimensions",
            fr: "Sélectionner les dimensions d'analyse",
            es: "Seleccionar dimensiones de análisis"
        },
        description: {
            zh: "您可以选择以下投资门派的分析维度，也可以全部选择进行综合分析",
            en: "You can select the analysis dimensions of the following investment schools, or select all for comprehensive analysis",
            fr: "Vous pouvez sélectionner les dimensions d'analyse des écoles d'investissement suivantes, ou sélectionner toutes pour une analyse complète",
            es: "Puede seleccionar las dimensiones de análisis de las siguientes escuelas de inversión, o seleccionar todas para un análisis completo"
        },
        options: [
            {
                id: "value",
                name: {
                    zh: "价值/基本面派",
                    en: "Value/Fundamental School",
                    fr: "École de valeur/fondamentale",
                    es: "Escuela de valor/fundamental"
                },
                description: {
                    zh: "以资产内在价值为核心，深入研究公司财务、商业模式和护城河",
                    en: "Focus on intrinsic value of assets, in-depth research on company finance, business model and moat",
                    fr: "Se concentrer sur la valeur intrinsèque des actifs, recherche approfondie sur la finance de l'entreprise, le modèle d'affaires et le fossé",
                    es: "Centrarse en el valor intrínseco de los activos, investigación profunda sobre las finanzas de la empresa, el modelo de negocio y el foso defensivo"
                },
                color: "#fd7e14"
            },
            {
                id: "trend",
                name: {
                    zh: "趋势/技术派",
                    en: "Trend/Technical School",
                    fr: "École de tendance/technique",
                    es: "Escuela de tendencia/técnica"
                },
                description: {
                    zh: "跟随市场趋势，通过图表分析、技术指标和交易系统，捕捉价格波动机会",
                    en: "Follow market trends, capture price fluctuation opportunities through chart analysis, technical indicators and trading systems",
                    fr: "Suivre les tendances du marché, capturer les opportunités de fluctuation de prix par l'analyse graphique, les indicateurs techniques et les systèmes de trading",
                    es: "Seguir las tendencias del mercado, capturar oportunidades de fluctuación de precios a través del análisis gráfico, indicadores técnicos y sistemas de trading"
                },
                color: "#17a2b8"
            },
            {
                id: "macro",
                name: {
                    zh: "宏观/周期派",
                    en: "Macro/Cycle School",
                    fr: "École macro/cycle",
                    es: "Escuela macro/ciclo"
                },
                description: {
                    zh: "基于宏观经济周期和政策环境，配置不同资产类别，把握经济周期转换机会",
                    en: "Based on macroeconomic cycles and policy environment, allocate different asset classes, grasp economic cycle transition opportunities",
                    fr: "Basé sur les cycles macroéconomiques et l'environnement politique, allouer différentes classes d'actifs, saisir les opportunités de transition du cycle économique",
                    es: "Basado en los ciclos macroeconómicos y el entorno político, asignar diferentes clases de activos, aprovechar las oportunidades de transición del ciclo económico"
                },
                color: "#0056b3"
            },
            {
                id: "narrative",
                name: {
                    zh: "信息/叙事派",
                    en: "Information/Narrative School",
                    fr: "École d'information/narrative",
                    es: "Escuela de información/narrativa"
                },
                description: {
                    zh: "关注市场情绪和叙事传播，通过快速捕捉和验证新的投资故事，获取超额收益",
                    en: "Focus on market sentiment and narrative propagation, capture excess returns by quickly catching and verifying new investment stories",
                    fr: "Se concentrer sur le sentiment du marché et la propagation narrative, capturer des rendements excédentaires en capturant et vérifiant rapidement de nouvelles histoires d'investissement",
                    es: "Centrarse en el sentimiento del mercado y la propagación narrativa, capturar rendimientos excesivos capturando y verificando rápidamente nuevas historias de inversión"
                },
                color: "#6f42c1"
            }
        ]
    },
    value: {
        name: "value",
        title: {
            zh: "价值投资分析",
            en: "Value Investment Analysis",
            fr: "Analyse d'investissement de valeur",
            es: "Análisis de inversión de valor"
        },
        fields: [
            {
                id: "financialMetrics",
                type: "table",
                label: {
                    zh: "财务指标分析",
                    en: "Financial Metrics Analysis",
                    fr: "Analyse des indicateurs financiers",
                    es: "Análisis de indicadores financieros"
                },
                columns: {
                    zh: ["指标", "数值", "说明"],
                    en: ["Metric", "Value", "Description"],
                    fr: ["Indicateur", "Valeur", "Description"],
                    es: ["Indicador", "Valor", "Descripción"]
                },
                rows: {
                    zh: [
                        ["PE（市盈率）", "", "市价/每股收益"],
                        ["PB（市净率）", "", "市价/每股净资产"],
                        ["ROE（净资产收益率）", "", "净利润/净资产"],
                        ["ROA（总资产收益率）", "", "净利润/总资产"],
                        ["毛利率", "", "（营收-成本）/营收"],
                        ["净利率", "", "净利润/营收"],
                        ["营收增长率", "", "（本期营收-上期营收）/上期营收"],
                        ["利润增长率", "", "（本期利润-上期利润）/上期利润"]
                    ],
                    en: [
                        ["PE (P/E Ratio)", "", "Price/Earnings"],
                        ["PB (P/B Ratio)", "", "Price/Book"],
                        ["ROE (Return on Equity)", "", "Net Income/Equity"],
                        ["ROA (Return on Assets)", "", "Net Income/Total Assets"],
                        ["Gross Margin", "", "(Revenue-Cost)/Revenue"],
                        ["Net Margin", "", "Net Income/Revenue"],
                        ["Revenue Growth Rate", "", "(Current Revenue-Previous Revenue)/Previous Revenue"],
                        ["Profit Growth Rate", "", "(Current Profit-Previous Profit)/Previous Profit"]
                    ],
                    fr: [
                        ["PE (Ratio P/E)", "", "Prix/Bénéfices"],
                        ["PB (Ratio P/B)", "", "Prix/Valeur comptable"],
                        ["ROE (Rentabilité des capitaux propres)", "", "Bénéfice net/Capitaux propres"],
                        ["ROA (Rentabilité des actifs)", "", "Bénéfice net/Total des actifs"],
                        ["Marge brute", "", "(Chiffre d'affaires-Coût)/Chiffre d'affaires"],
                        ["Marge nette", "", "Bénéfice net/Chiffre d'affaires"],
                        ["Taux de croissance du chiffre d'affaires", "", "(CA actuel-CA précédent)/CA précédent"],
                        ["Taux de croissance du bénéfice", "", "(Bénéfice actuel-Bénéfice précédent)/Bénéfice précédent"]
                    ],
                    es: [
                        ["PE (Ratio P/E)", "", "Precio/Ganancias"],
                        ["PB (Ratio P/B)", "", "Precio/Valor contable"],
                        ["ROE (Rentabilidad del patrimonio)", "", "Ingreso neto/Patrimonio"],
                        ["ROA (Rentabilidad de los activos)", "", "Ingreso neto/Total de activos"],
                        ["Margen bruto", "", "(Ingresos-Costo)/Ingresos"],
                        ["Margen neto", "", "Ingreso neto/Ingresos"],
                        ["Tasa de crecimiento de ingresos", "", "(Ingresos actuales-Ingresos anteriores)/Ingresos anteriores"],
                        ["Tasa de crecimiento de ganancias", "", "(Ganancias actuales-Ganancias anteriores)/Ganancias anteriores"]
                    ]
                }
            },
            {
                id: "businessModel",
                type: "textarea",
                label: {
                    zh: "商业模式分析",
                    en: "Business Model Analysis",
                    fr: "Analyse du modèle d'affaires",
                    es: "Análisis del modelo de negocio"
                },
                placeholder: {
                    zh: "描述公司的商业模式、盈利模式、核心竞争力...",
                    en: "Describe the company's business model, profit model, core competitiveness...",
                    fr: "Décrivez le modèle d'affaires de l'entreprise, le modèle de profit, la compétitivité centrale...",
                    es: "Describa el modelo de negocio de la empresa, el modelo de ganancias, la competitividad central..."
                }
            },
            {
                id: "moat",
                type: "textarea",
                label: {
                    zh: "竞争护城河评估",
                    en: "Competitive Moat Assessment",
                    fr: "Évaluation du fossé concurrentiel",
                    es: "Evaluación del foso competitivo"
                },
                placeholder: {
                    zh: "分析公司的护城河：品牌、专利、网络效应、成本优势、转换成本等...",
                    en: "Analyze the company's moat: brand, patents, network effects, cost advantages, switching costs, etc...",
                    fr: "Analysez le fossé de l'entreprise: marque, brevets, effets de réseau, avantages de coût, coûts de changement, etc...",
                    es: "Analice el foso de la empresa: marca, patentes, efectos de red, ventajas de costo, costos de cambio, etc..."
                }
            },
            {
                id: "management",
                type: "textarea",
                label: {
                    zh: "管理层评估",
                    en: "Management Assessment",
                    fr: "Évaluation de la direction",
                    es: "Evaluación de la gerencia"
                },
                placeholder: {
                    zh: "评估管理层的背景、经验、战略执行能力、治理结构...",
                    en: "Evaluate management background, experience, strategic execution ability, governance structure...",
                    fr: "Évaluez le background de la direction, l'expérience, la capacité d'exécution stratégique, la structure de gouvernance...",
                    es: "Evalúe el antecedentes de la gerencia, la experiencia, la capacidad de ejecución estratégica, la estructura de gobierno..."
                }
            },
            {
                id: "valuation",
                type: "textarea",
                label: {
                    zh: "估值模型",
                    en: "Valuation Model",
                    fr: "Modèle d'évaluation",
                    es: "Modelo de valoración"
                },
                placeholder: {
                    zh: "描述使用的估值方法：DCF、相对估值、PEG等，以及估值结果...",
                    en: "Describe the valuation methods used: DCF, relative valuation, PEG, etc., and valuation results...",
                    fr: "Décrivez les méthodes d'évaluation utilisées: DCF, évaluation relative, PEG, etc., et les résultats d'évaluation...",
                    es: "Describa los métodos de valoración utilizados: DCF, valoración relativa, PEG, etc., y los resultados de valoración..."
                }
            },
            {
                id: "safetyMargin",
                type: "textarea",
                label: {
                    zh: "安全边际分析",
                    en: "Safety Margin Analysis",
                    fr: "Analyse de la marge de sécurité",
                    es: "Análisis del margen de seguridad"
                },
                placeholder: {
                    zh: "分析买入价格的安全边际，以及潜在风险...",
                    en: "Analyze the safety margin of the purchase price and potential risks...",
                    fr: "Analysez la marge de sécurité du prix d'achat et les risques potentiels...",
                    es: "Analice el margen de seguridad del precio de compra y los riesgos potenciales..."
                }
            }
        ]
    },
    trend: {
        name: "trend",
        title: {
            zh: "趋势投资分析",
            en: "Trend Investment Analysis",
            fr: "Analyse d'investissement de tendance",
            es: "Análisis de inversión de tendencia"
        },
        fields: [
            {
                id: "technicalPattern",
                type: "textarea",
                label: {
                    zh: "技术形态分析",
                    en: "Technical Pattern Analysis",
                    fr: "Analyse des formes techniques",
                    es: "Análisis de patrones técnicos"
                },
                placeholder: {
                    zh: "分析K线形态、图表形态、价格走势...",
                    en: "Analyze K-line patterns, chart patterns, price trends...",
                    fr: "Analysez les formes de K-line, les formes de graphique, les tendances de prix...",
                    es: "Analice los patrones de K-line, las formas de gráfico, las tendencias de precio..."
                }
            },
            {
                id: "volumeAnalysis",
                type: "textarea",
                label: {
                    zh: "交易量分析",
                    en: "Volume Analysis",
                    fr: "Analyse du volume",
                    es: "Análisis del volumen"
                },
                placeholder: {
                    zh: "分析成交量变化、量价关系、资金流向...",
                    en: "Analyze volume changes, volume-price relationship, capital flow...",
                    fr: "Analysez les changements de volume, la relation volume-prix, le flux de capital...",
                    es: "Analice los cambios de volumen, la relación volumen-precio, el flujo de capital..."
                }
            },
            {
                id: "trendLine",
                type: "textarea",
                label: {
                    zh: "趋势线识别",
                    en: "Trend Line Identification",
                    fr: "Identification de la ligne de tendance",
                    es: "Identificación de la línea de tendencia"
                },
                placeholder: {
                    zh: "识别上升趋势线、下降趋势线、支撑线、阻力线...",
                    en: "Identify uptrend lines, downtrend lines, support lines, resistance lines...",
                    fr: "Identifiez les lignes de tendance haussière, les lignes de tendance baissière, les lignes de support, les lignes de résistance...",
                    es: "Identifique las líneas de tendencia alcista, las líneas de tendencia bajista, las líneas de soporte, las líneas de resistencia..."
                }
            },
            {
                id: "supportResistance",
                type: "textarea",
                label: {
                    zh: "支撑位/阻力位",
                    en: "Support/Resistance Levels",
                    fr: "Niveaux de support/résistance",
                    es: "Niveles de soporte/resistencia"
                },
                placeholder: {
                    zh: "分析关键支撑位和阻力位，以及突破信号...",
                    en: "Analyze key support and resistance levels, and breakout signals...",
                    fr: "Analysez les niveaux de support et de résistance clés, et les signaux de rupture...",
                    es: "Analice los niveles clave de soporte y resistencia, y las señales de ruptura..."
                }
            },
            {
                id: "indicators",
                type: "textarea",
                label: {
                    zh: "技术指标",
                    en: "Technical Indicators",
                    fr: "Indicateurs techniques",
                    es: "Indicadores técnicos"
                },
                placeholder: {
                    zh: "分析MACD、RSI、KDJ、布林带等技术指标...",
                    en: "Analyze technical indicators such as MACD, RSI, KDJ, Bollinger Bands...",
                    fr: "Analysez les indicateurs techniques tels que MACD, RSI, KDJ, Bandes de Bollinger...",
                    es: "Analice indicadores técnicos como MACD, RSI, KDJ, Bandas de Bollinger..."
                }
            },
            {
                id: "signals",
                type: "textarea",
                label: {
                    zh: "入场/出场信号",
                    en: "Entry/Exit Signals",
                    fr: "Signaux d'entrée/sortie",
                    es: "Señales de entrada/salida"
                },
                placeholder: {
                    zh: "描述入场和出场的信号、止损位、止盈位...",
                    en: "Describe entry and exit signals, stop-loss levels, take-profit levels...",
                    fr: "Décrivez les signaux d'entrée et de sortie, les niveaux de stop-loss, les niveaux de take-profit...",
                    es: "Describa las señales de entrada y salida, los niveles de stop-loss, los niveles de take-profit..."
                }
            }
        ]
    },
    macro: {
        name: "macro",
        title: {
            zh: "宏观投资分析",
            en: "Macro Investment Analysis",
            fr: "Analyse d'investissement macro",
            es: "Análisis de inversión macro"
        },
        fields: [
            {
                id: "cyclePosition",
                type: "select",
                label: {
                    zh: "行业周期位置",
                    en: "Industry Cycle Position",
                    fr: "Position du cycle industriel",
                    es: "Posición del ciclo industrial"
                },
                options: {
                    zh: ["复苏", "扩张", "过热", "衰退"],
                    en: ["Recovery", "Expansion", "Overheating", "Recession"],
                    fr: ["Reprise", "Expansion", "Surchauffe", "Récession"],
                    es: ["Recuperación", "Expansión", "Sobrecalentamiento", "Recesión"]
                }
            },
            {
                id: "policy",
                type: "textarea",
                label: {
                    zh: "政策环境分析",
                    en: "Policy Environment Analysis",
                    fr: "Analyse de l'environnement politique",
                    es: "Análisis del entorno político"
                },
                placeholder: {
                    zh: "分析相关政策、监管环境、政府支持...",
                    en: "Analyze relevant policies, regulatory environment, government support...",
                    fr: "Analysez les politiques pertinentes, l'environnement réglementaire, le soutien gouvernemental...",
                    es: "Analice las políticas relevantes, el entorno regulatorio, el apoyo gubernamental..."
                }
            },
            {
                id: "macroIndicators",
                type: "textarea",
                label: {
                    zh: "宏观经济指标影响",
                    en: "Macro Economic Indicators Impact",
                    fr: "Impact des indicateurs macroéconomiques",
                    es: "Impacto de indicadores macroeconómicos"
                },
                placeholder: {
                    zh: "分析利率、GDP、通胀、失业率等宏观指标对行业的影响...",
                    en: "Analyze the impact of macro indicators such as interest rates, GDP, inflation, unemployment rate on the industry...",
                    fr: "Analysez l'impact des indicateurs macro tels que les taux d'intérêt, le PIB, l'inflation, le taux de chômage sur l'industrie...",
                    es: "Analice el impacto de indicadores macro como tasas de interés, PIB, inflación, tasa de desempleo en la industria..."
                }
            },
            {
                id: "industryChain",
                type: "textarea",
                label: {
                    zh: "产业链分析",
                    en: "Industry Chain Analysis",
                    fr: "Analyse de la chaîne industrielle",
                    es: "Análisis de la cadena industrial"
                },
                placeholder: {
                    zh: "分析上下游产业链、供应链、价值链...",
                    en: "Analyze upstream and downstream industry chain, supply chain, value chain...",
                    fr: "Analysez la chaîne industrielle amont et aval, la chaîne d'approvisionnement, la chaîne de valeur...",
                    es: "Analice la cadena industrial aguas arriba y abajo, la cadena de suministro, la cadena de valor..."
                }
            },
            {
                id: "assetAllocation",
                type: "textarea",
                label: {
                    zh: "资产配置建议",
                    en: "Asset Allocation Recommendations",
                    fr: "Recommandations d'allocation d'actifs",
                    es: "Recomendaciones de asignación de activos"
                },
                placeholder: {
                    zh: "基于宏观分析，提供资产配置建议...",
                    en: "Provide asset allocation recommendations based on macro analysis...",
                    fr: "Fournir des recommandations d'allocation d'actifs basées sur l'analyse macro...",
                    es: "Proporcionar recomendaciones de asignación de activos basadas en el análisis macro..."
                }
            },
            {
                id: "economicCycle",
                type: "textarea",
                label: {
                    zh: "经济周期判断",
                    en: "Economic Cycle Assessment",
                    fr: "Évaluation du cycle économique",
                    es: "Evaluación del ciclo económico"
                },
                placeholder: {
                    zh: "判断当前经济周期阶段，以及对投资的影响...",
                    en: "Assess the current economic cycle stage and its impact on investment...",
                    fr: "Évaluez le stade actuel du cycle économique et son impact sur l'investissement...",
                    es: "Evalúe la etapa actual del ciclo económico y su impacto en la inversión..."
                }
            }
        ]
    },
    narrative: {
        name: "narrative",
        title: {
            zh: "叙事投资分析",
            en: "Narrative Investment Analysis",
            fr: "Analyse d'investissement narrative",
            es: "Análisis de inversión narrativa"
        },
        fields: [
            {
                id: "sentiment",
                type: "textarea",
                label: {
                    zh: "市场情绪分析",
                    en: "Market Sentiment Analysis",
                    fr: "Analyse du sentiment du marché",
                    es: "Análisis del sentimiento del mercado"
                },
                placeholder: {
                    zh: "分析市场情绪、投资者情绪、恐慌/贪婪指数...",
                    en: "Analyze market sentiment, investor sentiment, fear/greed index...",
                    fr: "Analysez le sentiment du marché, le sentiment des investisseurs, l'indice de peur/cupidité...",
                    es: "Analice el sentimiento del mercado, el sentimiento de los inversores, el índice de miedo/codicia..."
                }
            },
            {
                id: "story",
                type: "textarea",
                label: {
                    zh: "投资故事梳理",
                    en: "Investment Story Outline",
                    fr: "Esquisse de l'histoire d'investissement",
                    es: "Esquema de la historia de inversión"
                },
                placeholder: {
                    zh: "梳理投资故事的核心逻辑、关键论点、预期...",
                    en: "Outline the core logic, key arguments, expectations of the investment story...",
                    fr: "Esquissez la logique centrale, les arguments clés, les attentes de l'histoire d'investissement...",
                    es: "Esboce la lógica central, los argumentos clave, las expectativas de la historia de inversión..."
                }
            },
            {
                id: "propagation",
                type: "textarea",
                label: {
                    zh: "叙事传播路径",
                    en: "Narrative Propagation Path",
                    fr: "Chemin de propagation narrative",
                    es: "Camino de propagación narrativa"
                },
                placeholder: {
                    zh: "分析叙事的传播渠道、传播速度、影响范围...",
                    en: "Analyze the propagation channels, propagation speed, impact scope of the narrative...",
                    fr: "Analysez les canaux de propagation, la vitesse de propagation, la portée d'impact de la narration...",
                    es: "Analice los canales de propagación, la velocidad de propagación, el alcance de impacto de la narrativa..."
                }
            },
            {
                id: "popularity",
                type: "textarea",
                label: {
                    zh: "热度评估",
                    en: "Popularity Assessment",
                    fr: "Évaluation de la popularité",
                    es: "Evaluación de la popularidad"
                },
                placeholder: {
                    zh: "评估搜索量、讨论度、社交媒体热度...",
                    en: "Assess search volume, discussion level, social media popularity...",
                    fr: "Évaluez le volume de recherche, le niveau de discussion, la popularité des médias sociaux...",
                    es: "Evalúe el volumen de búsqueda, el nivel de discusión, la popularidad en redes sociales..."
                }
            },
            {
                id: "turningPoint",
                type: "textarea",
                label: {
                    zh: "情绪转折点识别",
                    en: "Sentiment Turning Point Identification",
                    fr: "Identification du point de virage du sentiment",
                    es: "Identificación del punto de giro del sentimiento"
                },
                placeholder: {
                    zh: "识别市场情绪的转折点、风险信号...",
                    en: "Identify turning points in market sentiment, risk signals...",
                    fr: "Identifiez les points de virage du sentiment du marché, les signaux de risque...",
                    es: "Identifique los puntos de giro del sentimiento del mercado, las señales de riesgo..."
                }
            },
            {
                id: "theme",
                type: "textarea",
                label: {
                    zh: "主题投资关联",
                    en: "Theme Investment Correlation",
                    fr: "Corrélation d'investissement thématique",
                    es: "Correlación de inversión temática"
                },
                placeholder: {
                    zh: "分析与其他投资主题的关联性...",
                    en: "Analyze the correlation with other investment themes...",
                    fr: "Analysez la corrélation avec d'autres thèmes d'investissement...",
                    es: "Analice la correlación con otros temas de inversión..."
                }
            }
        ]
    },
    summary: {
        name: "summary",
        title: {
            zh: "综合分析",
            en: "Comprehensive Analysis",
            fr: "Analyse complète",
            es: "Análisis completo"
        },
        fields: [
            {
                id: "investmentLogic",
                type: "textarea",
                label: {
                    zh: "投资逻辑总结",
                    en: "Investment Logic Summary",
                    fr: "Résumé de la logique d'investissement",
                    es: "Resumen de la lógica de inversión"
                },
                required: true,
                placeholder: {
                    zh: "总结核心投资逻辑和关键论点...",
                    en: "Summarize core investment logic and key arguments...",
                    fr: "Résumez la logique d'investissement centrale et les arguments clés...",
                    es: "Resuma la lógica de inversión central y los argumentos clave..."
                }
            },
            {
                id: "riskAnalysis",
                type: "textarea",
                label: {
                    zh: "风险分析",
                    en: "Risk Analysis",
                    fr: "Analyse des risques",
                    es: "Análisis de riesgos"
                },
                required: true,
                placeholder: {
                    zh: "分析主要风险因素、潜在风险、风险缓解措施...",
                    en: "Analyze major risk factors, potential risks, risk mitigation measures...",
                    fr: "Analysez les facteurs de risque majeurs, les risques potentiels, les mesures d'atténuation des risques...",
                    es: "Analice los factores de riesgo principales, los riesgos potenciales, las medidas de mitigación de riesgos..."
                }
            },
            {
                id: "investmentAdvice",
                type: "textarea",
                label: {
                    zh: "投资建议",
                    en: "Investment Recommendations",
                    fr: "Recommandations d'investissement",
                    es: "Recomendaciones de inversión"
                },
                required: true,
                placeholder: {
                    zh: "提供具体的投资建议和操作策略...",
                    en: "Provide specific investment recommendations and trading strategies...",
                    fr: "Fournir des recommandations d'investissement spécifiques et des stratégies de trading...",
                    es: "Proporcionar recomendaciones de inversión específicas y estrategias de trading..."
                }
            },
            {
                id: "followUp",
                type: "textarea",
                label: {
                    zh: "后续跟踪计划",
                    en: "Follow-up Plan",
                    fr: "Plan de suivi",
                    es: "Plan de seguimiento"
                },
                required: true,
                placeholder: {
                    zh: "制定后续跟踪计划、关键观察点、调整策略...",
                    en: "Formulate follow-up plan, key observation points, adjustment strategies...",
                    fr: "Formulez le plan de suivi, les points d'observation clés, les stratégies d'ajustement...",
                    es: "Formule el plan de seguimiento, los puntos de observación clave, las estrategias de ajuste..."
                }
            }
        ]
    }
};