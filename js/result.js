// 结果页面逻辑
class ResultPage {
    constructor() {
        this.results = null;
        this.init();
    }

    init() {
        this.loadResults();
        this.setupLanguageChangeHandler();
    }
    
    setupLanguageChangeHandler() {
        // 监听自定义语言变更事件
        window.addEventListener('languageChanged', () => {
            this.displayResults();
        });
    }
    
    // 将十六进制颜色转换为RGB数组
    hexToRgb(hex) {
        // 移除#号
        hex = hex.replace(/^#/, '');
        
        // 解析十六进制值
        let bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        
        return `${r}, ${g}, ${b}`;
    }

    loadResults() {
        // 从localStorage加载结果
        const savedResults = localStorage.getItem('testResults');
        
        if (!savedResults) {
            // 如果没有结果，跳转到测试页面
            alert('请先完成测试！');
            window.location.href = 'test.html';
            return;
        }
        
        this.results = JSON.parse(savedResults);
        
        this.displayResults();
        this.setupEventListeners();
    }

    displayResults() {
        if (!this.results) return;
        
        // 获取主导门派
        const dominantSchools = this.results.dominantSchools;
        const firstSchool = investmentSchools[dominantSchools[0]];
        
        // 使用全局languageManager的翻译数据
        const translations = typeof languageManager !== 'undefined' ? languageManager.translations : {};
        const currentLanguage = typeof languageManager !== 'undefined' ? languageManager.currentLanguage : localStorage.getItem('language') || 'zh';
        
        // 更新结果标题，显示投资风格，使用对应门派的颜色
        let schoolNames = '';
        if (translations && translations.schools) {
            schoolNames = dominantSchools.map(school => {
                return translations.schools[school]?.name || investmentSchools[school].name;
            }).join(', ');
        } else {
            schoolNames = dominantSchools.map(school => investmentSchools[school].name).join('、');
        }
        $('#dominantSchool').text(schoolNames).css('color', firstSchool.color);
        
        // 生成多语言风格介绍
        let styleDescription = '';
        if (translations && translations.schools && translations.result && translations.result.styleIntro) {
            const schoolKey = dominantSchools[0];
            const schoolTranslation = translations.schools[schoolKey];
            if (schoolTranslation) {
                styleDescription = translations.result.styleIntro;
                styleDescription = styleDescription.replace('{name}', schoolTranslation.name);
                styleDescription = styleDescription.replace('{core}', schoolTranslation.core);
                styleDescription = styleDescription.replace('{introduction}', schoolTranslation.introduction);
            }
        }
        
        // 如果没有翻译，使用默认中文
        if (!styleDescription) {
            styleDescription = `您的投资风格主要体现为${firstSchool.name}，${firstSchool.core}。`;
            
            if (firstSchool.name.includes('价值')) {
                styleDescription += `价值投资是一种经典的投资理念，强调以低于内在价值的价格买入优质资产，并长期持有。这种风格要求投资者具备深入的财务分析能力，能够识别企业的真实价值和长期增长潜力。价值投资者通常关注企业的市盈率、市净率等估值指标，寻找被市场低估的机会。`;
            } else if (firstSchool.name.includes('趋势')) {
                styleDescription += `趋势投资是一种基于市场趋势的交易策略，通过技术分析识别价格走势的方向和强度。趋势投资者相信"趋势是你的朋友"，会跟随市场的主要趋势进行交易，同时设置严格的止损位来控制风险。这种风格需要投资者具备良好的市场敏感度和纪律性。`;
            } else if (firstSchool.name.includes('宏观')) {
                styleDescription += `宏观投资是一种自上而下的投资方法，首先分析宏观经济环境、政策走向和市场周期，然后再选择适合的资产类别和行业。宏观投资者关注GDP增长、通货膨胀、利率变化等宏观指标，试图把握大的市场趋势和资产配置机会。`;
            } else if (firstSchool.name.includes('信息')) {
                styleDescription += `信息叙事投资关注市场情绪、新闻事件和主题故事对资产价格的影响。这种风格的投资者善于捕捉市场热点和新兴趋势，通过分析信息传播和市场反应来寻找投资机会。信息叙事投资需要投资者具备快速获取和分析信息的能力，同时警惕市场泡沫和过度炒作。`;
            }
            
            styleDescription += `了解您的投资风格有助于制定更适合自己的投资策略，发挥优势，规避风险，实现长期投资目标。您在其他风格上也有不同程度的表现，这反映了您投资理念的多样性和灵活性。`;
        }
        
        $('#styleDescription').text(styleDescription);
        
        // 显示门派详细信息，传递翻译数据
        this.displaySchoolDetails(firstSchool, translations);
        
        // 绘制雷达图，传递翻译数据
        this.drawRadarChart(translations, currentLanguage);
    }

    displaySchoolDetails(school, translations) {
        // 清空列表
        $('#strengthsList').empty();
        $('#weaknessesList').empty();
        $('#notesList').empty();
        $('#improvementList').empty();
        
        // 获取当前语言的翻译
        let strengths = school.strengths;
        let weaknesses = school.weaknesses;
        let notes = school.notes;
        let improvement = school.improvement;
        
        // 检查是否有翻译
        const schoolKey = Object.keys(investmentSchools).find(key => investmentSchools[key].name === school.name);
        if (schoolKey && translations && translations.schools) {
            const translatedSchool = translations.schools[schoolKey];
            if (translatedSchool) {
                strengths = translatedSchool.strengths || strengths;
                weaknesses = translatedSchool.weaknesses || weaknesses;
                notes = translatedSchool.notes || notes;
                improvement = translatedSchool.improvement || improvement;
            }
        }
        
        // 填充优点
        strengths.forEach(strength => {
            $('#strengthsList').append($('<li>').css('margin-bottom', '5px').text(`• ${strength}`));
        });
        
        // 填充缺点
        weaknesses.forEach(weakness => {
            $('#weaknessesList').append($('<li>').css('margin-bottom', '5px').text(`• ${weakness}`));
        });
        
        // 填充注意事项
        notes.forEach(note => {
            $('#notesList').append($('<li>').css('margin-bottom', '5px').text(`• ${note}`));
        });
        
        // 填充提升路径
        improvement.forEach(item => {
            $('#improvementList').append($('<li>').css('margin-bottom', '5px').text(`• ${item}`));
        });
    }

    drawRadarChart(translations, currentLanguage) {
        if (!this.results) return;
        
        const ctx = document.getElementById('radarChart').getContext('2d');
        const scores = this.results.scores;
        
        // 获取主导门派
        const dominantSchools = this.results.dominantSchools;
        const firstSchool = investmentSchools[dominantSchools[0]];
        
        // 准备雷达图数据，每个风格下面写上得分，支持多语言
        const chartLabels = [];
        const scoreLabels = ['value', 'trend', 'macro', 'narrative'];
        const languageSuffix = currentLanguage === 'zh' ? '分' : ' pts';
        
        scoreLabels.forEach(scoreKey => {
            let schoolName = investmentSchools[scoreKey].name;
            if (translations && translations.schools) {
                schoolName = translations.schools[scoreKey]?.name || schoolName;
            }
            chartLabels.push(`${schoolName}: ${scores[scoreKey]}${languageSuffix}`);
        });
        
        const chartData = {
            labels: chartLabels,
            datasets: [{
                label: '', // 去掉标签
                data: [
                    scores.value,
                    scores.trend,
                    scores.macro,
                    scores.narrative
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // 使用固定颜色作为背景
                borderColor: firstSchool.color, // 使用主导门派的颜色作为边框
                borderWidth: 2,
                pointBackgroundColor: [
                    investmentSchools['value'].color, // 价值/基本面派-橘黄色
                    investmentSchools['trend'].color, // 趋势/技术派-浅蓝色
                    investmentSchools['macro'].color, // 宏观/周期派-深蓝色
                    investmentSchools['narrative'].color // 信息/叙事派-紫色
                ],
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: firstSchool.color,
                fill: true
            }]
        };
        
        // 雷达图配置
        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: Math.max(...Object.values(scores)) * 1.2,
                    ticks: {
                        display: false // 隐藏刻度
                    },
                    grid: {
                        display: true // 显示网格线
                    },
                    angleLines: {
                        display: true // 显示角度线
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // 隐藏图例
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.r;
                            return `${value}${languageSuffix}`;
                        }
                    }
                }
            }
        };
        
        // 创建雷达图
        new Chart(ctx, {
            type: 'radar',
            data: chartData,
            options: chartOptions
        });
    }

    setupEventListeners() {
        // 复制网址按钮
        $('#copyUrlBtn').on('click', () => {
            this.copyUrl();
        });
        
        // 下载结果按钮
        $('#downloadResultBtn').on('click', () => {
            this.downloadResult();
        });
    }

    copyUrl() {
        const url = window.location.href;
        
        // 使用Clipboard API复制网址
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('网址已复制到剪贴板！');
            })
            .catch(err => {
                console.error('复制失败:', err);
                alert('复制失败，请手动复制网址: ' + url);
            });
    }

    downloadResult() {
        // 使用html2canvas截图结果容器
        const container = document.getElementById('resultContainer');
        
        html2canvas(container, {
            scale: 2, // 提高分辨率
            useCORS: true,
            logging: false
        })
        .then(canvas => {
            // 创建下载链接
            const link = document.createElement('a');
            link.download = '投资风格测试结果.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        })
        .catch(err => {
            console.error('截图失败:', err);
            alert('下载失败，请重试！');
        });
    }
}

// 页面加载完成后初始化结果页面
$(document).ready(() => {
    new ResultPage();
});
