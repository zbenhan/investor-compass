# 文章更新指南

## 1. 文章结构概述

首先，了解一下当前项目的文章结构：

- **文章文件位置**：`articles/` 目录下，按语言分类
  - 中文文章：`articles/zh/`
  - 英文文章：`articles/en/`
  - 法文文章：`articles/fr/`
  - 西班牙文文章：`articles/es/`

- **文章列表配置**：`articles.html` 文件中的 `articleLinks` JavaScript 对象

## 2. 添加新文章

### 2.1 创建文章文件

1. 根据文章语言，在对应的目录下创建HTML文件
   - 例如，添加中文文章：`articles/zh/new-article.html`

2. 文章文件的基本结构：
   ```html
   <!DOCTYPE html>
   <html lang="zh">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>文章标题</title>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
       <link rel="stylesheet" href="../../css/style.css">
   </head>
   <body>
       <!-- 导航栏 -->
       <!-- 复制index.html中的导航栏代码 -->
       
       <!-- 文章内容 -->
       <main class="container mt-5">
           <article class="article-content">
               <h1>文章标题</h1>
               <div class="article-meta mb-4">
                   <span class="badge bg-primary">文章分类</span>
                   <span class="text-muted">发布日期：2025-12-20</span>
               </div>
               <div class="article-body">
                   <!-- 文章正文内容 -->
                   <p>文章正文...</p>
               </div>
           </article>
       </main>
       
       <!-- 页脚 -->
       <!-- 复制index.html中的页脚代码 -->
       
       <!-- JavaScript -->
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
       <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
       <script src="../../js/main.js"></script>
   </body>
   </html>
   ```

### 2.2 更新文章列表配置

1. 打开 `articles.html` 文件
2. 找到 `articleLinks` JavaScript 对象
3. 在对应语言的对象中添加新文章的配置：
   ```javascript
   const articleLinks = {
       zh: {
           // 现有文章...
           'new-article': {
               title: '新文章标题'
           }
       },
       en: {
           // 英文文章配置...
       },
       // 其他语言...
   };
   ```

4. 确保为每种语言都添加对应的文章配置（如果支持多语言）

## 3. 编辑现有文章

1. 找到需要编辑的文章文件
   - 例如，编辑中文文章：`articles/zh/value-investing.html`

2. 使用文本编辑器打开文件
3. 修改文章内容
4. 保存文件

## 4. 删除文章

1. 删除对应的文章文件
   - 例如：`articles/zh/old-article.html`

2. 在 `articles.html` 的 `articleLinks` 对象中删除对应的配置

## 5. 推送更新到GitHub

### 5.1 使用Git命令行

1. 打开终端，进入项目目录
2. 执行以下命令：
   ```bash
   # 添加所有更改
   git add .
   
   # 提交更改
   git commit -m "更新文章：添加新文章/编辑现有文章"
   
   # 推送到GitHub
   git push origin main
   ```

### 5.2 使用GitHub Desktop

1. 打开GitHub Desktop
2. 选择您的项目
3. 查看并确认更改
4. 输入提交信息
5. 点击"Commit to main"
6. 点击"Push origin"

## 6. 等待GitHub Pages自动部署

- GitHub Pages会自动检测到您的推送，并开始构建和部署
- 部署通常需要1-2分钟完成
- 部署完成后，您的网站会自动更新

## 7. 验证更新

1. 打开浏览器，访问您的网站：`https://a-share.top/articles.html`
2. 检查新添加的文章是否显示在列表中
3. 点击文章标题，确认文章内容正确
4. 检查所有语言版本的文章是否都已更新

## 8. 注意事项

- **文件命名**：文章文件名建议使用小写字母和连字符，避免使用空格和特殊字符
- **多语言支持**：如果您支持多种语言，请确保为每种语言添加对应的文章
- **文章格式**：建议使用Markdown语法编写文章，然后转换为HTML
- **图片处理**：图片建议存放在 `images/` 目录下，使用相对路径引用
- **SEO优化**：为每篇文章添加合适的标题、描述和关键词

## 9. 自动化建议

如果您计划频繁更新文章，可以考虑：

1. **使用Markdown编写文章**：然后使用工具自动转换为HTML
2. **添加构建脚本**：自动化文章转换和部署流程
3. **使用CMS系统**：考虑集成一个简单的CMS系统，方便管理文章

按照以上步骤，您就可以轻松地更新和管理您的网站文章了。祝您更新顺利！