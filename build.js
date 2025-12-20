const fs = require('fs');
const path = require('path');

// 读取文章数据
const articles = require('./data/articles');

// 支持的语言
const languages = ['zh', 'en', 'fr', 'es'];

// 语言名称映射
const languageNames = {
  zh: '中文',
  en: 'English',
  fr: 'Français',
  es: 'Español'
};

// 分类名称的多语言映射
const categoryNames = {
  'value-investing': {
    zh: '价值投资',
    en: 'Value Investing',
    fr: 'Investissement de valeur',
    es: 'Inversión de valor'
  },
  'fundamentals': {
    zh: '基本面',
    en: 'Fundamentals',
    fr: 'Fundamentaux',
    es: 'Fundamentos'
  },
  'technical-analysis': {
    zh: '技术分析',
    en: 'Technical Analysis',
    fr: 'Analyse technique',
    es: 'Análisis técnico'
  },
  'trend-trading': {
    zh: '趋势交易',
    en: 'Trend Trading',
    fr: 'Trading de tendance',
    es: 'Trading de tendencias'
  }
};

// 确保目录存在
const ensureDirExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// 简单的模板替换函数
const renderTemplate = (template, data) => {
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => {
    return data[key] || '';
  });
};

// 生成HTML头部
const generateHtmlHead = (lang, seo) => {
  // 生成hreflang标签
  const hreflangTags = languages.map(l => {
    return `<link rel="alternate" hreflang="${l}" href="https://www.example.com/articles/${l}/${seo.slug || 'index'}.html">`;
  }).join('\n    ');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}">
    <meta name="keywords" content="${seo.keywords}">
    ${hreflangTags}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../css/style.css">
</head>`;
};

// 生成导航栏
const generateNavbar = (lang, activePage = 'articles') => {
  return `<!-- 导航栏 -->
<nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
        <a class="navbar-brand" href="../../index.html" data-lang="site.title">投知罗盘</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav me-4">
                <li class="nav-item">
                    <a class="nav-link ${activePage === 'home' ? 'active' : ''}" href="../../index.html" data-lang="nav.home">首页</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${activePage === 'test' ? 'active' : ''}" href="../../test.html" data-lang="nav.test">开始测试</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${activePage === 'articles' ? 'active' : ''}" href="./index.html" data-lang="nav.articles">投资知识</a>
                </li>
            </ul>
            <!-- 语言选择器 -->
            <select id="language-selector" class="form-select form-select-xs" style="width: auto;">
                <option value="zh" data-lang="language.zh">中文</option>
                <option value="en" data-lang="language.en">English</option>
                <option value="fr" data-lang="language.fr">Français</option>
                <option value="es" data-lang="language.es">Español</option>
            </select>
        </div>
    </div>
</nav>`;
};

// 生成页脚
const generateFooter = (lang) => {
  return `<!-- 页脚 -->
<footer class="py-4 mt-5">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <h5 data-lang="footer.contact">联系方式</h5>
                <p><span data-lang="footer.email">邮箱</span>: zbenhan0123@gmail.com</p>
            </div>
            <div class="col-md-4">
                <h5 data-lang="footer.links">友情链接</h5>
                <a href="https://valuegu.com" target="_blank">ValueGu.com</a>
            </div>
            <div class="col-md-4">
                <h5 data-lang="footer.legal">法律声明</h5>
                <a href="../../privacy.html" data-lang="footer.privacy">隐私政策</a> | 
                <a href="../../terms.html" data-lang="footer.terms">服务条款</a> | 
                <a href="../../about.html" data-lang="footer.about">关于网站</a>
            </div>
        </div>
        <div class="text-center mt-3">
            <p data-lang="footer.copyright">© 2025 投知罗盘 - A-share.com. 保留所有权利.</p>
        </div>
    </div>
</footer>`;
};

// 生成文章列表页
const generateArticleListPage = (lang) => {
  console.log(`Generating article list page for ${lang}...`);
  
  // 创建语言目录
  const langDir = path.join(__dirname, 'articles', lang);
  ensureDirExists(langDir);
  
  // 准备SEO数据
  const seo = {
    title: lang === 'zh' ? '投资知识 - 投知罗盘' : 
           lang === 'en' ? 'Investment Knowledge - Investor Compass' :
           lang === 'fr' ? 'Connaissances sur l\'investissement - Investor Compass' :
           'Conocimientos de inversión - Investor Compass',
    description: lang === 'zh' ? '探索投知罗盘的投资知识文章，涵盖价值投资、技术分析、宏观经济等多个领域。' :
                 lang === 'en' ? 'Explore investment knowledge articles on Investor Compass, covering value investing, technical analysis, macroeconomics and more.' :
                 lang === 'fr' ? 'Explorez les articles sur les connaissances en investissement sur Investor Compass, couvrant l\'investissement de valeur, l\'analyse technique, la macroéconomie et plus encore.' :
                 'Explora los artículos sobre conocimientos de inversión en Investor Compass, que cubren inversión de valor, análisis técnico, macroeconomía y más.',
    keywords: lang === 'zh' ? '投资知识, 价值投资, 技术分析, 宏观经济' :
              lang === 'en' ? 'investment knowledge, value investing, technical analysis, macroeconomics' :
              lang === 'fr' ? 'connaissances en investissement, investissement de valeur, analyse technique, macroéconomie' :
              'conocimientos de inversión, inversión de valor, análisis técnico, macroeconomía',
    slug: 'index'
  };
  
  // 过滤当前语言有内容的文章
  const langArticles = articles.filter(article => article.content[lang]);
  
  // 按发布日期排序（最新在前）
  langArticles.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
  
  // 分离基础文章和最新文章
  const basicArticles = langArticles.filter(article => article.isBasic);
  const latestArticles = langArticles; // 所有文章，包括基础文章，按时间倒序
  
  // 生成文章卡片HTML的辅助函数
  const generateArticleCard = (article) => {
    const content = article.content[lang];
    // 转换分类名称为当前语言
    const translatedCategories = article.categories.map(category => {
      return categoryNames[category] ? categoryNames[category][lang] : category;
    });
    return `
    <div class="card card-primary mb-4">
        <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="badge bg-primary">${translatedCategories.join(', ')}</span>
                <small class="text-muted">${article.publishDate}</small>
            </div>
            <h5 class="card-title">${content.title}</h5>
            <p class="card-text mt-3">${content.summary}</p>
            <a href="./${article.slug}.html" class="btn btn-primary mt-4">${lang === 'zh' ? '阅读全文' : 
                                                                          lang === 'en' ? 'Read More' :
                                                                          lang === 'fr' ? 'Lire la suite' :
                                                                          'Leer más'}</a>
        </div>
    </div>`;
  };
  
  // 生成基础文章HTML
  const basicArticlesHtml = basicArticles.map(generateArticleCard).join('');
  
  // 生成最新文章HTML
  const latestArticlesHtml = latestArticles.map(generateArticleCard).join('');
  
  // 生成完整HTML
  const html = `${generateHtmlHead(lang, seo)}
<body>
    ${generateNavbar(lang, 'articles')}
    
    <!-- 主要内容 -->
    <main class="container mt-5">
        <h1 class="text-center mb-5">${seo.title.split(' - ')[0]}</h1>
        
        <div class="row">
            <!-- 文章列表 -->
            <div class="col-md-8">
                <!-- 基础文章板块 -->
                <div class="mb-5">
                    <h2 data-lang="articles.basic">基础文章</h2>
                    <hr class="border-primary mb-4">
                    ${basicArticlesHtml}
                </div>
                
                <!-- 最新文章板块 -->
                <div class="mb-4">
                    <h2 data-lang="articles.recent">最新文章</h2>
                    <hr class="border-primary mb-4">
                    ${latestArticlesHtml}
                </div>
            </div>
            
            <!-- 侧边栏 -->
            <div class="col-md-4">
                <div class="card card-warning mb-4">
                    <div class="card-header bg-white">
                        <h5 data-lang="articles.popular">热门文章</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        ${langArticles.slice(0, 4).map(article => {
                          const content = article.content[lang];
                          return `
                        <li class="list-group-item p-3">
                            <a href="./${article.slug}.html" class="text-decoration-none text-primary">${content.title}</a>
                        </li>`;
                        }).join('')}
                    </ul>
                </div>
                
                <div class="card card-success">
                    <div class="card-header bg-white">
                        <h5 data-lang="articles.category">文章分类</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item p-3">
                            <a href="./index.html" class="text-decoration-none text-primary">${lang === 'zh' ? '价值投资' : 
                                                                                                 lang === 'en' ? 'Value Investing' :
                                                                                                 lang === 'fr' ? 'Investissement de valeur' :
                                                                                                 'Inversión de valor'}</a> <span class="badge bg-primary float-end">${articles.filter(a => a.categories.includes('value-investing') && a.content[lang]).length}</span>
                        </li>
                        <li class="list-group-item p-3">
                            <a href="./index.html" class="text-decoration-none text-primary">${lang === 'zh' ? '技术分析' : 
                                                                                                 lang === 'en' ? 'Technical Analysis' :
                                                                                                 lang === 'fr' ? 'Analyse technique' :
                                                                                                 'Análisis técnico'}</a> <span class="badge bg-info float-end">${articles.filter(a => a.categories.includes('technical-analysis') && a.content[lang]).length}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
    
    ${generateFooter(lang)}
    
    <!-- JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../../js/main.js"></script>
</body>
</html>`;
  
  // 写入文件
  fs.writeFileSync(path.join(langDir, 'index.html'), html, 'utf8');
  console.log(`✓ Article list page generated for ${lang}`);
};

// 生成文章详情页
const generateArticleDetailPage = (article, lang) => {
  console.log(`Generating article detail page for ${article.slug} in ${lang}...`);
  
  // 创建语言目录
  const langDir = path.join(__dirname, 'articles', lang);
  ensureDirExists(langDir);
  
  // 准备SEO数据
  const seo = {
    ...article.seo[lang],
    slug: article.slug
  };
  
  // 获取当前语言的文章内容
  const content = article.content[lang];
  
  // 生成完整HTML
  const html = `${generateHtmlHead(lang, seo)}
<body>
    ${generateNavbar(lang, 'articles')}
    
    <!-- 主要内容 -->
    <main class="container mt-5">
        <div class="row">
            <!-- 文章详情 -->
            <div class="col-md-8">
                <article class="card card-primary">
                    <div class="card-body p-5">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <span class="badge bg-primary">${article.categories.join(', ')}</span>
                            <small class="text-muted">${article.publishDate}</small>
                        </div>
                        <h1 class="mb-4">${content.title}</h1>
                        <h6 class="text-muted mb-5">${article.author}</h6>
                        
                        <!-- 文章内容 -->
                        <div class="article-content">
                            ${content.body}
                        </div>
                        
                        <!-- 返回列表 -->
                        <div class="mt-5">
                            <a href="./index.html" class="btn btn-outline-primary">
                                ${lang === 'zh' ? '返回文章列表' : 
                                  lang === 'en' ? 'Back to Article List' :
                                  lang === 'fr' ? 'Retour à la liste des articles' :
                                  'Volver a la lista de artículos'}
                            </a>
                        </div>
                    </div>
                </article>
            </div>
            
            <!-- 侧边栏 -->
            <div class="col-md-4">
                <div class="card card-warning mb-4">
                    <div class="card-header bg-white">
                        <h5>${lang === 'zh' ? '相关文章' : 
                              lang === 'en' ? 'Related Articles' :
                              lang === 'fr' ? 'Articles associés' :
                              'Artículos relacionados'}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        ${articles
                          .filter(a => a.id !== article.id && a.content[lang] && 
                                    a.categories.some(cat => article.categories.includes(cat)))
                          .slice(0, 3)
                          .map(a => {
                            const relatedContent = a.content[lang];
                            return `
                        <li class="list-group-item p-3">
                            <a href="./${a.slug}.html" class="text-decoration-none text-primary">${relatedContent.title}</a>
                        </li>`;
                          }).join('')}
                    </ul>
                </div>
            </div>
        </div>
    </main>
    
    ${generateFooter(lang)}
    
    <!-- JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../../js/main.js"></script>
</body>
</html>`;
  
  // 写入文件
  fs.writeFileSync(path.join(langDir, `${article.slug}.html`), html, 'utf8');
  console.log(`✓ Article detail page generated for ${article.slug} in ${lang}`);
};

// 生成站点地图
const generateSitemap = () => {
  console.log('Generating sitemap.xml...');
  
  const baseUrl = 'https://www.example.com';
  const today = new Date().toISOString().split('T')[0];
  
  // 生成URL条目
  let urlEntries = '';
  
  // 添加首页
  urlEntries += `
    <url>
        <loc>${baseUrl}/</loc>
        <lastmod>${today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>`;
  
  // 添加测试页
  urlEntries += `
    <url>
        <loc>${baseUrl}/test.html</loc>
        <lastmod>${today}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`;
  
  // 添加文章列表页和详情页
  languages.forEach(lang => {
    // 文章列表页
    urlEntries += `
    <url>
        <loc>${baseUrl}/articles/${lang}/index.html</loc>
        <lastmod>${today}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>`;
    
    // 文章详情页
    const langArticles = articles.filter(article => article.content[lang]);
    langArticles.forEach(article => {
      urlEntries += `
    <url>
        <loc>${baseUrl}/articles/${lang}/${article.slug}.html</loc>
        <lastmod>${article.publishDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`;
    });
  });
  
  // 生成完整sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
  
  // 写入文件
  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf8');
  console.log('✓ sitemap.xml generated');
};

// 主构建函数
const build = () => {
  console.log('Starting build process...');
  
  // 确保articles目录存在
  const articlesDir = path.join(__dirname, 'articles');
  ensureDirExists(articlesDir);
  
  // 为每种语言生成文章列表页
  languages.forEach(lang => {
    generateArticleListPage(lang);
  });
  
  // 为每篇文章生成所有语言的详情页
  articles.forEach(article => {
    languages.forEach(lang => {
      if (article.content[lang]) {
        generateArticleDetailPage(article, lang);
      }
    });
  });
  
  // 生成站点地图
  generateSitemap();
  
  console.log('\nBuild completed successfully!');
};

// 执行构建
if (require.main === module) {
  build();
}

module.exports = {
  build
};