// 测试系统逻辑
class InvestmentTest {
    constructor() {
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.maxQuestions = testQuestions.length;
        this.init();
    }

    init() {
        this.loadQuestion();
        this.setupEventListeners();
        this.loadSavedProgress();
    }

    loadQuestion() {
        // 获取当前语言
        const currentLanguage = localStorage.getItem('language') || 'zh';
        const question = testQuestions[this.currentQuestionIndex];
        
        // 更新题目信息
        const categoryText = typeof question.category === 'object' ? question.category[currentLanguage] : question.category;
        const questionText = typeof question.question === 'object' ? question.question[currentLanguage] : question.question;
        $('#questionCategory').text(categoryText);
        $('#questionText').text(questionText);
        
        // 清空选项列表
        $('#optionsList').empty();
        
        // 生成选项
        question.options.forEach(option => {
            const optionText = typeof option.text === 'object' ? option.text[currentLanguage] : option.text;
            const optionItem = $('<a>')
                .addClass('list-group-item list-group-item-action')
                .attr('href', '#')
                .data('option-id', option.id)
                .text(optionText)
                .on('click', (e) => {
                    e.preventDefault();
                    this.selectOption(optionItem, option.id);
                });
            
            // 检查是否已选择此选项
            const savedAnswer = this.answers[this.currentQuestionIndex];
            if (savedAnswer && savedAnswer.includes(option.id)) {
                optionItem.addClass('active');
            }
            
            $('#optionsList').append(optionItem);
        });
        
        // 更新进度
        this.updateProgress();
        
        // 更新按钮状态
        this.updateButtons();
    }

    selectOption(optionElement, optionId) {
        // 检查当前选中的选项数量
        const selectedOptions = $('#optionsList .list-group-item.active');
        
        // 如果当前选项已选中，则取消选中
        if (optionElement.hasClass('active')) {
            optionElement.removeClass('active');
        } else {
            // 如果已选中两个选项，不能再选择
            if (selectedOptions.length >= 2) {
                alert('每题最多选择两个答案');
                return;
            }
            // 选中当前选项
            optionElement.addClass('active');
        }
        
        // 获取所有选中的选项ID
        const selectedOptionIds = [];
        $('#optionsList .list-group-item.active').each(function() {
            selectedOptionIds.push($(this).data('option-id'));
        });
        
        // 保存答案
        this.answers[this.currentQuestionIndex] = selectedOptionIds;
        this.saveProgress();
    }

    updateProgress() {
        const currentQuestion = this.currentQuestionIndex + 1;
        const progressPercent = (currentQuestion / this.maxQuestions) * 100;
        
        $('#progressText').text(`第 ${currentQuestion}/${this.maxQuestions} 题`);
        $('#progressBar').css('width', `${progressPercent}%`).attr('aria-valuenow', progressPercent);
    }

    updateButtons() {
        // 更新上一题按钮
        if (this.currentQuestionIndex === 0) {
            $('#prevBtn').prop('disabled', true);
        } else {
            $('#prevBtn').prop('disabled', false);
        }
        
        // 更新下一题和提交按钮
        if (this.currentQuestionIndex === this.maxQuestions - 1) {
            $('#nextBtn').hide();
            $('#submitBtn').show();
        } else {
            $('#nextBtn').show();
            $('#submitBtn').hide();
        }
    }

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.maxQuestions - 1) {
            // 检查是否已回答当前问题（至少选择一个答案）
            const currentAnswer = this.answers[this.currentQuestionIndex];
            if (!currentAnswer || currentAnswer.length === 0) {
                alert('请选择一个选项后再继续！');
                return;
            }
            
            this.currentQuestionIndex++;
            this.loadQuestion();
        }
    }

    submitTest() {
        // 检查是否完成所有题目
        if (this.answers.length < this.maxQuestions || this.answers.some(a => !a || a.length === 0)) {
            alert('请完成所有题目后再提交！');
            return;
        }
        
        // 计算结果
        const results = this.calculateResults();
        
        // 保存结果到localStorage
        localStorage.setItem('testResults', JSON.stringify(results));
        
        // 清除测试进度
        this.clearProgress();
        
        // 跳转到结果页面
        window.location.href = 'result.html';
    }

    calculateResults() {
        const scores = { value: 0, trend: 0, macro: 0, narrative: 0 };
        
        // 计算各门派得分
        this.answers.forEach((answer, index) => {
            const question = testQuestions[index];
            answer.forEach(optionId => {
                const option = question.options.find(opt => opt.id === optionId);
                if (option) {
                    Object.keys(scores).forEach(school => {
                        scores[school] += option.scores[school] || 0;
                    });
                }
            });
        });
        
        // 找到最高得分的门派
        const maxScore = Math.max(...Object.values(scores));
        const dominantSchools = Object.keys(scores).filter(school => scores[school] === maxScore);
        
        return {
            scores,
            dominantSchools,
            answers: this.answers,
            timestamp: new Date().toISOString()
        };
    }

    saveProgress() {
        const progress = {
            currentQuestionIndex: this.currentQuestionIndex,
            answers: this.answers
        };
        localStorage.setItem('testProgress', JSON.stringify(progress));
    }

    loadSavedProgress() {
        const savedProgress = localStorage.getItem('testProgress');
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            this.currentQuestionIndex = progress.currentQuestionIndex || 0;
            this.answers = progress.answers || [];
        }
    }

    clearProgress() {
        localStorage.removeItem('testProgress');
    }

    setupEventListeners() {
        $('#prevBtn').on('click', () => this.prevQuestion());
        $('#nextBtn').on('click', () => this.nextQuestion());
        $('#submitBtn').on('click', () => this.submitTest());
    }
}

// 页面加载完成后初始化测试系统
$(document).ready(() => {
    new InvestmentTest();
});
