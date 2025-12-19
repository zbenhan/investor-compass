// 结果页面逻辑
class ResultPage {
    constructor() {
        this.results = null;
        this.init();
    }

    init() {
        this.loadResults();
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
        
        // 更新结果标题
        const schoolNames = dominantSchools.map(school => investmentSchools[school].name).join('、');
        $('#dominantSchool').text(schoolNames).css('background-color', firstSchool.color);
        
        // 显示门派详细信息
        this.displaySchoolDetails(firstSchool);
        
        // 绘制雷达图
        this.drawRadarChart();
    }

    displaySchoolDetails(school) {
        $('#schoolName').text(school.name);
        $('#schoolCore').text(school.core);
        
        // 清空列表
        $('#strengthsList').empty();
        $('#weaknessesList').empty();
        $('#notesList').empty();
        $('#improvementList').empty();
        
        // 填充优点
        school.strengths.forEach(strength => {
            $('#strengthsList').append($('<li>').addClass('list-group-item').text(strength));
        });
        
        // 填充缺点
        school.weaknesses.forEach(weakness => {
            $('#weaknessesList').append($('<li>').addClass('list-group-item').text(weakness));
        });
        
        // 填充注意事项
        school.notes.forEach(note => {
            $('#notesList').append($('<li>').addClass('list-group-item').text(note));
        });
        
        // 填充提升路径
        school.improvement.forEach(item => {
            $('#improvementList').append($('<li>').addClass('list-group-item').text(item));
        });
    }

    drawRadarChart() {
        if (!this.results) return;
        
        const ctx = document.getElementById('radarChart').getContext('2d');
        const scores = this.results.scores;
        
        // 准备雷达图数据
        const chartData = {
            labels: [
                investmentSchools['value'].name,
                investmentSchools['trend'].name,
                investmentSchools['macro'].name,
                investmentSchools['narrative'].name
            ],
            datasets: [{
                label: '您的得分',
                data: [
                    scores.value,
                    scores.trend,
                    scores.macro,
                    scores.narrative
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
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
                        stepSize: 5
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.parsed.r;
                            return `${label}: ${value}分`;
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
