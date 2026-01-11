// 多语言支持系统
class LanguageManager {
    constructor() {
        this.currentLanguage = 'zh'; // 默认语言为中文
        this.translations = {};
        this.isLoaded = false;
        this.init();
    }

    init() {
        // 从localStorage加载用户上次选择的语言
        const savedLanguage = localStorage.getItem('language');
        const initialLanguage = savedLanguage && ['zh', 'en', 'fr', 'es'].includes(savedLanguage) ? savedLanguage : 'zh';
        
        // 加载初始语言（默认或用户保存的语言）
        this.loadLanguageSync(initialLanguage);

        // 设置语言选择器事件
        this.setupLanguageSelector();
        
        // 标记初始化完成
        this.isLoaded = true;
    }

    loadLanguageSync(lang) {
        try {
            console.log(`Loading language: ${lang}`);
            
            // 使用同步的XHR请求加载语言文件
            const xhr = new XMLHttpRequest();
            // Add timestamp to prevent caching
            xhr.open('GET', `data/languages/${lang}.js?v=${new Date().getTime()}`, false);
            xhr.send();
            
            if (xhr.status === 200) {
                // 执行语言文件代码，使用try-catch确保安全性
                let translationsObj = {};
                try {
                    // 创建一个新的函数作用域来执行语言文件
                    const scriptFn = new Function('window', xhr.responseText + '; return translations;');
                    translationsObj = scriptFn(window);
                } catch (scriptError) {
                    console.error(`Error executing language file for ${lang}:`, scriptError);
                    return false;
                }
                
                // 验证翻译对象结构
                if (typeof translationsObj !== 'object' || translationsObj === null) {
                    console.error(`Invalid translations object for ${lang}`);
                    return false;
                }
                
                // 更新翻译对象
                this.translations = translationsObj;
                this.currentLanguage = lang;
                localStorage.setItem('language', lang);
                
                console.log(`Language loaded successfully: ${lang}`);
                
                // 更新页面内容
                this.updatePage();
                
                // 更新语言选择器的值
                const selector = document.getElementById('language-selector');
                if (selector) {
                    selector.value = this.currentLanguage;
                }
                
                // 触发自定义语言变更事件
                const languageChangedEvent = new Event('languageChanged');
                window.dispatchEvent(languageChangedEvent);
                
                return true;
            } else {
                console.error(`Failed to load language file for ${lang}: HTTP ${xhr.status}`);
                return false;
            }
        } catch (error) {
            console.error(`Error loading language ${lang}:`, error);
            return false;
        }
    }

    updatePage() {
        console.log('Updating page content for language:', this.currentLanguage);
        
        // 更新页面标题
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const titleKey = titleElement.getAttribute('data-lang');
            if (titleKey) {
                const titleValue = this.getValueByKey(titleKey);
                if (titleValue) {
                    document.title = titleValue;
                }
            } else {
                // 如果没有data-lang属性，使用默认的site.title
                document.title = this.translations.site?.title || "投知罗盘";
            }
        }
        
        // 更新meta标签的属性
        document.querySelectorAll('meta[data-lang]').forEach(metaElement => {
            const langKey = metaElement.getAttribute('data-lang');
            const value = this.getValueByKey(langKey);
            if (value) {
                // 设置meta标签的content属性
                metaElement.setAttribute('content', value);
            }
        });
        
        // 更新SEO相关的meta标签
        this.updateSEOMetaTags();
        
        // 更新所有带有data-lang属性的元素
        const elementsWithLang = document.querySelectorAll('[data-lang]');
        console.log(`Found ${elementsWithLang.length} elements with data-lang attribute`);
        
        elementsWithLang.forEach(element => {
            // 跳过meta标签，已经单独处理过了
            if (element.tagName === 'META') {
                return;
            }
            
            const langKey = element.getAttribute('data-lang');
            const value = this.getValueByKey(langKey);
            if (value) {
                // 根据元素类型设置内容
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = value;
                } else {
                    element.innerHTML = value;
                }
            } else {
                console.log(`No translation found for key: ${langKey}`);
            }
        });
    }

    updateSEOMetaTags() {
        const siteData = this.translations.site;
        if (!siteData) return;

        // 更新keywords meta标签
        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (keywordsMeta && siteData.keywords) {
            keywordsMeta.setAttribute('content', siteData.keywords);
        }

        // 更新description meta标签
        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta && siteData.description) {
            descriptionMeta.setAttribute('content', siteData.description);
        }

        // 更新Open Graph标签
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && siteData.title) {
            ogTitle.setAttribute('content', siteData.title);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription && siteData.description) {
            ogDescription.setAttribute('content', siteData.description);
        }

        // 更新Twitter Card标签
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle && siteData.title) {
            twitterTitle.setAttribute('content', siteData.title);
        }

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription && siteData.description) {
            twitterDescription.setAttribute('content', siteData.description);
        }

        // 更新HTML lang属性
        document.documentElement.setAttribute('lang', this.currentLanguage);

        // 更新language meta标签
        const languageMeta = document.querySelector('meta[name="language"]');
        if (languageMeta) {
            languageMeta.setAttribute('content', this.currentLanguage);
        }

        // 更新Open Graph locale标签
        const localeMap = {
            'zh': 'zh_CN',
            'en': 'en_US',
            'fr': 'fr_FR',
            'es': 'es_ES'
        };

        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            ogLocale.setAttribute('content', localeMap[this.currentLanguage] || 'zh_CN');
        }
    }

    getValueByKey(key) {
        if (!key || typeof key !== 'string') {
            return null;
        }
        
        const keys = key.split('.');
        let value = this.translations;
        
        try {
            for (const k of keys) {
                if (value && typeof value === 'object' && k in value) {
                    value = value[k];
                } else {
                    return null;
                }
            }
        } catch (error) {
            console.error(`Error getting value for key ${key}:`, error);
            return null;
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
                const newLang = e.target.value;
                console.log(`Language selector changed to: ${newLang}`);
                this.loadLanguageSync(newLang);
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