class ReportManager {
    constructor() {
        this.reports = this.loadReports();
        this.currentReport = null;
        this.autoSaveTimer = null;
        this.autoSaveInterval = 30000;
    }

    loadReports() {
        const data = localStorage.getItem('reportGenerator_reports');
        return data ? JSON.parse(data) : [];
    }

    saveReports() {
        localStorage.setItem('reportGenerator_reports', JSON.stringify(this.reports));
    }

    createReport(data) {
        const report = {
            id: this.generateUUID(),
            title: data.title || '未命名报告',
            company: {
                name: data.companyName || '',
                code: data.stockCode || '',
                industry: data.industry || ''
            },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isDraft: true,
            progress: {
                basic: 0,
                value: 0,
                trend: 0,
                macro: 0,
                narrative: 0,
                summary: 0
            },
            sections: {
                basic: {},
                dimensions: {},
                value: {},
                trend: {},
                macro: {},
                narrative: {},
                summary: {}
            },
            versions: []
        };
        
        this.reports.unshift(report);
        this.saveReports();
        return report;
    }

    updateReport(id, data) {
        const index = this.reports.findIndex(r => r.id === id);
        if (index === -1) return null;

        const report = this.reports[index];
        Object.assign(report, data);
        report.updatedAt = new Date().toISOString();
        
        this.saveReports();
        return report;
    }

    deleteReport(id) {
        const index = this.reports.findIndex(r => r.id === id);
        if (index === -1) return false;

        this.reports.splice(index, 1);
        this.saveReports();
        return true;
    }

    getReport(id) {
        return this.reports.find(r => r.id === id);
    }

    getAllReports() {
        return this.reports;
    }

    saveVersion(report) {
        if (!report.versions) report.versions = [];
        
        const version = {
            timestamp: new Date().toISOString(),
            data: JSON.parse(JSON.stringify(report))
        };
        
        report.versions.unshift(version);
        if (report.versions.length > 10) {
            report.versions = report.versions.slice(0, 10);
        }
        
        this.saveReports();
    }

    generateUUID() {
        return 'report-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    exportToJSON(report) {
        const data = JSON.stringify(report, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${report.title}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    exportAllToJSON() {
        const data = JSON.stringify(this.reports, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `report-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    async importFromJSON(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (Array.isArray(data)) {
                        resolve(data);
                    } else if (data.id) {
                        resolve([data]);
                    } else {
                        reject(new Error('Invalid JSON format'));
                    }
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        });
    }

    async exportToPDF(report) {
        const element = document.getElementById('previewContent');
        if (!element) return;

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 10, pdfWidth, pdfHeight);
        pdf.save(`${report.title}.pdf`);
    }

    async exportToWord(report) {
        const doc = new docx.Document({
            sections: [{
                properties: {},
                children: [
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: report.title,
                                bold: true,
                                size: 32
                            })
                        ],
                        spacing: { after: 400 }
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: `公司名称: ${report.company.name}`,
                                size: 24
                            })
                        ],
                        spacing: { after: 200 }
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: `股票代码: ${report.company.code}`,
                                size: 24
                            })
                        ],
                        spacing: { after: 200 }
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: `行业: ${report.company.industry}`,
                                size: 24
                            })
                        ],
                        spacing: { after: 200 }
                    }),
                    new docx.Paragraph({
                        children: [
                            new docx.TextRun({
                                text: `创建时间: ${new Date(report.createdAt).toLocaleString()}`,
                                size: 20
                            })
                        ],
                        spacing: { after: 400 }
                    })
                ]
            }]
        });

        const blob = await docx.Packer.toBlob(doc);
        saveAs(blob, `${report.title}.docx`);
    }
}

class ReportEditor {
    constructor(reportManager) {
        this.reportManager = reportManager;
        this.currentStep = 0;
        this.selectedDimensions = [];
        this.currentLanguage = 'zh';
        this.steps = [
            'basic',
            'dimensions',
            'value',
            'trend',
            'macro',
            'narrative',
            'summary'
        ];
    }

    init() {
        this.bindEvents();
        this.updateLanguage();
        $('#language-selector').show();
        this.showReportManager();
    }

    bindEvents() {
        $('#newReportBtn').on('click', () => this.createNewReport());
        $('#importReportBtn').on('click', () => this.importReport());
        $('#importFileInput').on('change', (e) => this.handleImport(e));
        $('#searchInput').on('input', () => this.filterReports());
        $('#filterSelect').on('change', () => this.filterReports());
        $('#sortSelect').on('change', () => this.sortReports());
        $('#backToListBtn').on('click', () => this.showReportManager());
        $('#saveReportBtn').on('click', () => this.saveReport());
        $('#prevStepBtn').on('click', () => this.prevStep());
        $('#nextStepBtn').on('click', () => this.nextStep());
        $('#backToEditorBtn').on('click', () => this.showEditor());
        $('#exportPDFBtn').on('click', () => this.exportPDF());
        $('#exportWordBtn').on('click', () => this.exportWord());
        $('#exportJSONBtn').on('click', () => this.exportJSON());
        
        window.addEventListener('languageChanged', () => this.updateLanguage());
    }

    updateLanguage() {
        this.currentLanguage = languageManager.currentLanguage;
        this.updateUI();
    }

    updateUI() {
        const lang = this.currentLanguage;
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            const value = languageManager.getValueByKey(key);
            if (value) {
                el.textContent = value;
            }
        });
    }

    showReportManager() {
        $('#reportManager').show();
        $('#reportEditor').hide();
        $('#reportPreview').hide();
        $('#language-selector').show();
        this.renderReportList();
    }

    showEditor() {
        $('#reportManager').hide();
        $('#reportEditor').show();
        $('#reportPreview').hide();
        $('#language-selector').hide();
        this.renderForm();
    }

    showPreview() {
        $('#reportManager').hide();
        $('#reportEditor').hide();
        $('#reportPreview').show();
        $('#language-selector').hide();
        this.renderPreview();
    }

    createNewReport() {
        const report = this.reportManager.createReport({});
        this.reportManager.currentReport = report;
        this.currentStep = 0;
        this.selectedDimensions = [];
        this.showEditor();
        this.startAutoSave();
    }

    editReport(id) {
        const report = this.reportManager.getReport(id);
        if (!report) return;

        this.reportManager.currentReport = report;
        this.currentStep = 0;
        this.selectedDimensions = Object.keys(report.sections).filter(key => 
            key !== 'basic' && key !== 'summary' && Object.keys(report.sections[key]).length > 0
        );
        this.showEditor();
        this.startAutoSave();
    }

    deleteReport(id) {
        if (confirm(languageManager.getValueByKey('report.deleteConfirm') || '确定要删除此报告吗？')) {
            this.reportManager.deleteReport(id);
            this.renderReportList();
        }
    }

    renderReportList() {
        const reports = this.reportManager.getAllReports();
        const searchTerm = $('#searchInput').val().toLowerCase();
        const filter = $('#filterSelect').val();
        const sort = $('#sortSelect').val();

        let filteredReports = reports.filter(report => {
            const matchesSearch = report.title.toLowerCase().includes(searchTerm) ||
                                report.company.name.toLowerCase().includes(searchTerm);
            const matchesFilter = filter === 'all' ||
                                    (filter === 'draft' && report.isDraft) ||
                                    (filter === 'completed' && !report.isDraft);
            return matchesSearch && matchesFilter;
        });

        filteredReports.sort((a, b) => {
            if (sort === 'updated') {
                return new Date(b.updatedAt) - new Date(a.updatedAt);
            } else if (sort === 'created') {
                return new Date(b.createdAt) - new Date(a.createdAt);
            } else if (sort === 'name') {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

        const container = $('#reportList');
        container.empty();

        if (filteredReports.length === 0) {
            $('#emptyState').show();
        } else {
            $('#emptyState').hide();
            filteredReports.forEach(report => {
                const card = this.createReportCard(report);
                container.append(card);
            });
        }
    }

    createReportCard(report) {
        const progress = this.calculateProgress(report);
        const statusClass = report.isDraft ? 'warning' : 'success';
        const statusText = report.isDraft ? 
            (languageManager.getValueByKey('report.draft') || '草稿') : 
            (languageManager.getValueByKey('report.completed') || '已完成');

        return `
            <div class="col-md-4 mb-4">
                <div class="card h-100 hover-card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title">${this.escapeHtml(report.title)}</h5>
                            <span class="badge bg-${statusClass}">${statusText}</span>
                        </div>
                        <p class="card-text mb-2">
                            <strong>${this.escapeHtml(report.company.name)}</strong><br>
                            <small class="text-muted">${this.escapeHtml(report.company.code)}</small>
                        </p>
                        <div class="progress mb-2" style="height: 8px;">
                            <div class="progress-bar" style="width: ${progress}%"></div>
                        </div>
                        <small class="text-muted">
                            ${new Date(report.updatedAt).toLocaleDateString()}
                        </small>
                    </div>
                    <div class="card-footer bg-transparent border-0">
                        <div class="d-flex gap-2">
                            <button class="btn btn-sm btn-primary flex-fill edit-btn" data-id="${report.id}">
                                <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-sm btn-success flex-fill preview-btn" data-id="${report.id}">
                                <i class="bi bi-eye"></i>
                            </button>
                            <button class="btn btn-sm btn-danger delete-btn" data-id="${report.id}">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    calculateProgress(report) {
        const sections = report.sections;
        const totalSteps = 6;
        let completedSteps = 0;

        if (sections.basic && Object.keys(sections.basic).length > 0) completedSteps++;
        if (sections.dimensions && Object.keys(sections.dimensions).length > 0) completedSteps++;
        if (sections.value && Object.keys(sections.value).length > 0) completedSteps++;
        if (sections.trend && Object.keys(sections.trend).length > 0) completedSteps++;
        if (sections.macro && Object.keys(sections.macro).length > 0) completedSteps++;
        if (sections.summary && Object.keys(sections.summary).length > 0) completedSteps++;

        return Math.round((completedSteps / totalSteps) * 100);
    }

    renderForm() {
        const step = this.steps[this.currentStep];
        const template = reportTemplates[step];
        
        if (!template) return;

        const formContainer = $('#formContainer .card-body');
        formContainer.empty();

        if (step === 'dimensions') {
            this.renderDimensionsForm(template);
        } else if (step === 'value' || step === 'trend' || step === 'macro' || step === 'narrative') {
            if (this.selectedDimensions.includes(step)) {
                this.renderAnalysisForm(template);
            } else {
                formContainer.html(`
                    <div class="text-center py-5">
                        <i class="bi bi-x-circle fs-1 text-muted mb-3"></i>
                        <h4 class="text-muted mb-3">${languageManager.getValueByKey('report.dimensionNotSelected') || '未选择此维度'}</h4>
                        <p class="text-muted">${languageManager.getValueByKey('report.selectDimensionFirst') || '请先在"选择分析维度"步骤中选择此分析维度'}</p>
                        <button class="btn btn-primary" onclick="reportEditor.goToStep(1)">
                            ${languageManager.getValueByKey('report.goToDimensions') || '前往维度选择'}
                        </button>
                    </div>
                `);
            }
        } else {
            this.renderBasicForm(template);
        }

        this.updateStepIndicator();
        this.updateProgress();
        this.updateButtons();
    }

    renderBasicForm(template) {
        const report = this.reportManager.currentReport;
        const lang = this.currentLanguage;
        const container = $('#formContainer .card-body');

        let html = `<h4 class="mb-4">${template.title[lang]}</h4>`;

        template.fields.forEach(field => {
            const value = report.sections.basic[field.id] || '';
            const required = field.required ? '<span class="text-danger">*</span>' : '';
            const label = field.label[lang] + required;

            if (field.type === 'text') {
                html += `
                    <div class="mb-3">
                        <label class="form-label">${label}</label>
                        <input type="text" class="form-control" 
                               id="field-${field.id}" 
                               value="${this.escapeHtml(value)}"
                               placeholder="${field.placeholder[lang] || ''}"
                               ${field.required ? 'required' : ''}>
                    </div>
                `;
            } else if (field.type === 'textarea') {
                html += `
                    <div class="mb-3">
                        <label class="form-label">${label}</label>
                        <textarea class="form-control" 
                                  id="field-${field.id}" 
                                  rows="4"
                                  placeholder="${field.placeholder[lang] || ''}"
                                  ${field.required ? 'required' : ''}>${this.escapeHtml(value)}</textarea>
                    </div>
                `;
            } else if (field.type === 'select') {
                const options = field.options[lang].map(opt => 
                    `<option value="${opt}" ${value === opt ? 'selected' : ''}>${opt}</option>`
                ).join('');
                html += `
                    <div class="mb-3">
                        <label class="form-label">${label}</label>
                        <select class="form-select" id="field-${field.id}" ${field.required ? 'required' : ''}>
                            <option value="">${languageManager.getValueByKey('report.selectOption') || '请选择'}</option>
                            ${options}
                        </select>
                    </div>
                `;
            } else if (field.type === 'date') {
                html += `
                    <div class="mb-3">
                        <label class="form-label">${label}</label>
                        <input type="date" class="form-control" 
                               id="field-${field.id}" 
                               value="${value ? value.split('T')[0] : ''}"
                               ${field.required ? 'required' : ''}>
                    </div>
                `;
            }
        });

        container.html(html);
    }

    renderDimensionsForm(template) {
        const report = this.reportManager.currentReport;
        const lang = this.currentLanguage;
        const container = $('#formContainer .card-body');

        let html = `<h4 class="mb-4">${template.title[lang]}</h4>`;
        html += `<p class="text-muted mb-4">${template.description[lang]}</p>`;

        template.options.forEach(option => {
            const isSelected = this.selectedDimensions.includes(option.id);
            html += `
                <div class="card mb-3 dimension-card ${isSelected ? 'border-primary' : ''}" data-dimension="${option.id}">
                    <div class="card-body">
                        <div class="form-check">
                            <input class="form-check-input dimension-checkbox" type="checkbox" 
                                   id="dimension-${option.id}" 
                                   data-dimension-id="${option.id}"
                                   ${isSelected ? 'checked' : ''}>
                            <label class="form-check-label" for="dimension-${option.id}">
                                <h5 class="mb-2">${option.name[lang]}</h5>
                                <p class="text-muted mb-0">${option.description[lang]}</p>
                            </label>
                        </div>
                    </div>
                </div>
            `;
        });

        container.html(html);
        
        // 绑定复选框事件
        $('.dimension-checkbox').on('change', (e) => {
            const dimensionId = $(e.target).data('dimension-id');
            this.toggleDimension(dimensionId);
        });
    }

    renderAnalysisForm(template) {
        const report = this.reportManager.currentReport;
        const lang = this.currentLanguage;
        const container = $('#formContainer .card-body');

        let html = `<h4 class="mb-4">${template.title[lang]}</h4>`;

        template.fields.forEach(field => {
            const value = report.sections[this.steps[this.currentStep]]?.[field.id] || '';
            const label = field.label[lang];

            if (field.type === 'textarea') {
                html += `
                    <div class="mb-3">
                        <label class="form-label">${label}</label>
                        <textarea class="form-control" 
                                  id="field-${field.id}" 
                                  rows="6"
                                  placeholder="${field.placeholder[lang] || ''}">${this.escapeHtml(value)}</textarea>
                    </div>
                `;
            } else if (field.type === 'select') {
                const options = field.options[lang].map(opt => 
                    `<option value="${opt}" ${value === opt ? 'selected' : ''}>${opt}</option>`
                ).join('');
                html += `
                    <div class="mb-3">
                        <label class="form-label">${label}</label>
                        <select class="form-select" id="field-${field.id}">
                            <option value="">${languageManager.getValueByKey('report.selectOption') || '请选择'}</option>
                            ${options}
                        </select>
                    </div>
                `;
            } else if (field.type === 'table') {
                html += `
                    <div class="mb-3">
                        <label class="form-label">${label}</label>
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        ${field.columns[lang].map(col => `<th>${col}</th>`).join('')}
                                    </tr>
                                </thead>
                                <tbody>
                                    ${field.rows[lang].map(row => `
                                        <tr>
                                            ${row.map(cell => `<td><input type="text" class="form-control form-control-sm" value="${this.escapeHtml(cell)}"></td>`).join('')}
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                `;
            }
        });

        container.html(html);
    }

    toggleDimension(dimensionId) {
        const index = this.selectedDimensions.indexOf(dimensionId);
        if (index === -1) {
            this.selectedDimensions.push(dimensionId);
        } else {
            this.selectedDimensions.splice(index, 1);
        }
        
        $(`.dimension-card[data-dimension="${dimensionId}"]`).toggleClass('border-primary');
    }

    collectFormData() {
        const step = this.steps[this.currentStep];
        const template = reportTemplates[step];
        const data = {};

        if (step === 'dimensions') {
            data.selected = this.selectedDimensions;
        } else {
            template.fields.forEach(field => {
                const element = document.getElementById(`field-${field.id}`);
                if (element) {
                    if (field.type === 'table') {
                        const rows = [];
                        const table = element.closest('table');
                        const tbody = table.querySelector('tbody');
                        const trs = tbody.querySelectorAll('tr');
                        trs.forEach(tr => {
                            const cells = tr.querySelectorAll('input');
                            const rowData = Array.from(cells).map(cell => cell.value);
                            rows.push(rowData);
                        });
                        data[field.id] = rows;
                    } else {
                        data[field.id] = element.value;
                    }
                }
            });
        }

        return data;
    }

    validateStep(step) {
        const template = reportTemplates[step];
        if (!template) return true;

        const data = this.collectFormData();
        const requiredFields = template.fields.filter(f => f.required);
        
        for (const field of requiredFields) {
            if (!data[field.id] || data[field.id].trim() === '') {
                return false;
            }
        }

        return true;
    }

    nextStep() {
        if (!this.validateStep(this.steps[this.currentStep])) {
            alert(languageManager.getValueByKey('report.fillRequired') || '请填写所有必填项');
            return;
        }

        const data = this.collectFormData();
        const report = this.reportManager.currentReport;
        report.sections[this.steps[this.currentStep]] = data;
        
        if (this.currentStep < this.steps.length - 1) {
            this.currentStep++;
            this.renderForm();
        } else {
            this.showPreview();
        }
    }

    prevStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.renderForm();
        }
    }

    goToStep(step) {
        if (step >= 0 && step < this.steps.length) {
            this.currentStep = step;
            this.renderForm();
        }
    }

    updateStepIndicator() {
        const container = $('#stepIndicator');
        container.empty();

        this.steps.forEach((step, index) => {
            const isActive = index === this.currentStep;
            const isCompleted = index < this.currentStep;
            const template = reportTemplates[step];
            const title = template ? template.title[this.currentLanguage] : step;

            const badgeClass = isActive ? 'primary' : (isCompleted ? 'success' : 'secondary');
            const stepNumber = index + 1;

            container.append(`
                <div class="step-badge mx-1">
                    <div class="step-number">${stepNumber}</div>
                    <div class="step-title">${title}</div>
                </div>
            `);
        });
    }

    updateProgress() {
        const report = this.reportManager.currentReport;
        const progress = this.calculateProgress(report);
        $('#progressBar').css('width', `${progress}%`);
    }

    updateButtons() {
        const isFirstStep = this.currentStep === 0;
        const isLastStep = this.currentStep === this.steps.length - 1;

        $('#prevStepBtn').prop('disabled', isFirstStep);
        $('#nextStepBtn').text(
            isLastStep ? 
            (languageManager.getValueByKey('report.preview') || '预览') : 
            (languageManager.getValueByKey('report.nextStep') || '下一步')
        );
    }

    renderPreview() {
        const report = this.reportManager.currentReport;
        const lang = this.currentLanguage;
        const container = $('#previewContent .card-body');

        let html = `
            <div class="report-header mb-4">
                <h1>${this.escapeHtml(report.title)}</h1>
                <div class="report-meta">
                    <p><strong>${languageManager.getValueByKey('report.companyName') || '公司名称'}:</strong> ${this.escapeHtml(report.company.name)}</p>
                    <p><strong>${languageManager.getValueByKey('report.stockCode') || '股票代码'}:</strong> ${this.escapeHtml(report.company.code)}</p>
                    <p><strong>${languageManager.getValueByKey('report.industry') || '行业'}:</strong> ${this.escapeHtml(report.company.industry)}</p>
                    <p><strong>${languageManager.getValueByKey('report.reportDate') || '报告日期'}:</strong> ${new Date(report.sections.basic?.reportDate || report.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
        `;

        if (report.sections.basic) {
            html += `<h3 class="mt-4 mb-3">${languageManager.getValueByKey('report.basicInfo') || '基本信息'}</h3>`;
            html += `<p><strong>${languageManager.getValueByKey('report.investmentGoal') || '投资目标'}:</strong></p>`;
            html += `<p>${this.escapeHtml(report.sections.basic.investmentGoal || '')}</p>`;
        }

        const dimensions = ['value', 'trend', 'macro', 'narrative'];
        dimensions.forEach(dim => {
            if (report.sections[dim] && Object.keys(report.sections[dim]).length > 0) {
                const template = reportTemplates[dim];
                html += `<h3 class="mt-4 mb-3">${template.title[lang]}</h3>`;
                
                template.fields.forEach(field => {
                    const value = report.sections[dim][field.id];
                    if (value) {
                        html += `<h5 class="mt-3">${field.label[lang]}</h5>`;
                        if (field.type === 'table' && Array.isArray(value)) {
                            html += `
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            ${field.columns[lang].map(col => `<th>${col}</th>`).join('')}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${value.map(row => `
                                            <tr>
                                                ${row.map(cell => `<td>${this.escapeHtml(cell)}</td>`).join('')}
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            `;
                        } else {
                            html += `<p>${this.escapeHtml(value)}</p>`;
                        }
                    }
                });
            }
        });

        if (report.sections.summary) {
            html += `<h3 class="mt-4 mb-3">${languageManager.getValueByKey('report.summary') || '综合分析'}</h3>`;
            const summary = report.sections.summary;
            
            if (summary.investmentLogic) {
                html += `<h5 class="mt-3">${languageManager.getValueByKey('report.investmentLogic') || '投资逻辑总结'}</h5>`;
                html += `<p>${this.escapeHtml(summary.investmentLogic)}</p>`;
            }
            if (summary.riskAnalysis) {
                html += `<h5 class="mt-3">${languageManager.getValueByKey('report.riskAnalysis') || '风险分析'}</h5>`;
                html += `<p>${this.escapeHtml(summary.riskAnalysis)}</p>`;
            }
            if (summary.investmentAdvice) {
                html += `<h5 class="mt-3">${languageManager.getValueByKey('report.investmentAdvice') || '投资建议'}</h5>`;
                html += `<p>${this.escapeHtml(summary.investmentAdvice)}</p>`;
            }
            if (summary.followUp) {
                html += `<h5 class="mt-3">${languageManager.getValueByKey('report.followUp') || '后续跟踪计划'}</h5>`;
                html += `<p>${this.escapeHtml(summary.followUp)}</p>`;
            }
        }

        container.html(html);
    }

    saveReport() {
        const data = this.collectFormData();
        const report = this.reportManager.currentReport;
        report.sections[this.steps[this.currentStep]] = data;
        report.updatedAt = new Date().toISOString();
        
        this.reportManager.saveReports();
        this.showSaveStatus(languageManager.getValueByKey('report.saveSuccess') || '保存成功');
    }

    startAutoSave() {
        this.stopAutoSave();
        this.reportManager.autoSaveTimer = setInterval(() => {
            this.saveReport();
        }, this.reportManager.autoSaveInterval);
    }

    stopAutoSave() {
        if (this.reportManager.autoSaveTimer) {
            clearInterval(this.reportManager.autoSaveTimer);
            this.reportManager.autoSaveTimer = null;
        }
    }

    showSaveStatus(message) {
        const statusEl = $('#saveStatus');
        const statusText = message || languageManager.getValueByKey('report.saveSuccess') || '保存成功';
        $('#saveStatusText').text(statusText);
        statusEl.fadeIn().delay(2000).fadeOut();
    }

    filterReports() {
        this.renderReportList();
    }

    sortReports() {
        this.renderReportList();
    }

    async importReport() {
        $('#importFileInput').click();
    }

    async handleImport(event) {
        const file = event.target.files[0];
        if (!file) return;

        try {
            const reports = await this.reportManager.importFromJSON(file);
            
            reports.forEach(importedReport => {
                const existingIndex = this.reportManager.reports.findIndex(r => r.id === importedReport.id);
                if (existingIndex === -1) {
                    this.reportManager.reports.unshift(importedReport);
                } else {
                    if (confirm(languageManager.getValueByKey('report.overwriteConfirm') || '报告已存在，是否覆盖？')) {
                        this.reportManager.reports[existingIndex] = importedReport;
                    }
                }
            });
            
            this.reportManager.saveReports();
            
            this.renderReportList();
            alert(languageManager.getValueByKey('report.importSuccess') || '导入成功');
            event.target.value = '';
        } catch (error) {
            console.error('Import failed:', error);
            alert(languageManager.getValueByKey('report.importFailed') || '导入失败：' + error.message);
        }
    }

    exportPDF() {
        const report = this.reportManager.currentReport;
        if (report) {
            this.reportManager.exportToPDF(report);
        }
    }

    exportWord() {
        const report = this.reportManager.currentReport;
        if (report) {
            this.reportManager.exportToWord(report);
        }
    }

    exportJSON() {
        const report = this.reportManager.currentReport;
        if (report) {
            this.reportManager.exportToJSON(report);
        }
    }

    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

const reportManager = new ReportManager();
const reportEditor = new ReportEditor(reportManager);

$(document).ready(function() {
    reportEditor.init();
    
    $(document).on('click', '.edit-btn', function() {
        const id = $(this).data('id');
        reportEditor.editReport(id);
    });
    
    $(document).on('click', '.preview-btn', function() {
        const id = $(this).data('id');
        reportEditor.editReport(id);
        reportEditor.showPreview();
    });
    
    $(document).on('click', '.delete-btn', function() {
        const id = $(this).data('id');
        reportEditor.deleteReport(id);
    });
});