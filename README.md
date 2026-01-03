# Investor Compass

Investor Compass 是一个投资风格测试和宏观经济指标分析平台，帮助投资者了解自己的投资偏好，并探索宏观经济指标之间的复杂联动关系。

## 本地部署指南

### 1. 安装 Node.js

确保你的电脑上已经安装了 Node.js（版本 14 或以上）。你可以从 [Node.js 官网](https://nodejs.org/) 下载并安装。

### 2. 克隆或下载项目

将项目克隆到本地，或者下载项目的 ZIP 文件并解压。

### 3. 安装依赖

打开终端，导航到项目目录，然后运行以下命令安装依赖：

```bash
npm install
```

### 4. 构建项目（可选）

如果项目需要构建（例如生成文章页面或站点地图），运行以下命令：

```bash
npm run build
```

### 5. 启动本地服务器

运行以下命令启动本地 HTTP 服务器：

```bash
npm run start
```

或者，如果你不想自动打开浏览器，可以运行：

```bash
npm run serve
```

### 6. 访问本地网站

服务器启动后，打开浏览器访问 `http://localhost:8000` 即可查看网站。

## 项目结构

- `/articles` - 存放多语言文章
- `/css` - 样式文件
- `/data` - 数据文件（语言、问题、投资流派等）
- `/js` - JavaScript 文件
- `/build.js` - 项目构建脚本
- `/index.html` - 网站首页
- `/macro-indicators.html` - 宏观经济指标页面
- `/test.html` - 投资风格测试页面

## 技术栈

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (jQuery)
- Node.js（用于构建和本地服务器）

## 部署到 GitHub Pages

详细的 GitHub Pages 部署指南请查看 [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) 文件。

## 许可证

MIT License