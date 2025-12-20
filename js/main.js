// 多语言支持系统
class LanguageManager {
    constructor() {
        this.currentLanguage = 'zh'; // 默认语言为中文
        this.translations = {};
        this.init();
    }

    init() {
        // 加载默认语言文件（中文）
        this.loadLanguage('zh');

        // 从localStorage加载用户上次选择的语言
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && ['zh', 'en', 'fr', 'es'].includes(savedLanguage)) {
            this.currentLanguage = savedLanguage;
            // 如果不是中文，重新加载用户选择的语言
            if (savedLanguage !== 'zh') {
                this.loadLanguage(savedLanguage);
            }
        }

        // 设置语言选择器事件
        this.setupLanguageSelector();
    }

    async loadLanguage(lang) {
        try {
            // 动态加载语言文件
            const response = await fetch(`data/languages/${lang}.js`);
            if (!response.ok) {
                throw new Error(`Failed to load language file: ${lang}`);
            }

            // 清空当前的translations对象
            for (const key in this.translations) {
                if (Object.prototype.hasOwnProperty.call(this.translations, key)) {
                    delete this.translations[key];
                }
            }

            // 执行语言文件代码
            const scriptText = await response.text();
            const script = new Function(scriptText + '; return translations;');
            this.translations = script();

            // 更新当前语言
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);

            // 更新页面内容
            this.updatePage();
            
            // 触发自定义语言变更事件
            const languageChangedEvent = new Event('languageChanged');
            window.dispatchEvent(languageChangedEvent);
        } catch (error) {
            console.error('Error loading language:', error);
        }
    }

    updatePage() {
        // 更新页面标题
        document.title = this.translations.site.title;
        
        // 更新所有带有data-lang属性的元素
        document.querySelectorAll('[data-lang]').forEach(element => {
            const langKey = element.getAttribute('data-lang');
            const value = this.getValueByKey(langKey);
            if (value) {
                // 根据元素类型设置内容
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = value;
                } else {
                    element.textContent = value;
                }
            }
        });
    }

    getValueByKey(key) {
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return null;
            }
        }
        
        return value;
    }

    setupLanguageSelector() {
        const selector = document.getElementById('language-selector');
        if (selector) {
            // 设置当前选中的语言
            selector.value = this.currentLanguage;
            
            // 添加语言切换事件
            selector.addEventListener('change', (e) => {
                this.loadLanguage(e.target.value);
            });
        }
    }
}

// 初始化语言管理器
const languageManager = new LanguageManager();

// 导出语言管理器供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = languageManager;
}