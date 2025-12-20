# Investor Compass 项目部署指南

## 第一步：将项目推送到 GitHub（使用 GitHub Desktop）

### 1. 打开 GitHub Desktop
- 已经启动了 GitHub Desktop

### 2. 将项目添加到 GitHub Desktop
1. 在 GitHub Desktop 中，点击左上角的 "File" 菜单
2. 选择 "Add Local Repository..."
3. 在弹出的窗口中，点击 "Choose..."
4. 浏览到项目目录：`C:\Users\ben\source\repos\investor-compass`
5. 点击 "Add Repository"

### 3. 提交当前更改
1. 在 GitHub Desktop 中，你会看到所有未提交的更改
2. 在右侧的 "Summary" 字段中，输入一个有意义的提交信息，例如："Initial commit with project files"
3. 在 "Description" 字段中，可以添加更多细节（可选）
4. 确保所有需要提交的文件都已勾选
5. 点击底部的 "Commit to master" 按钮

### 4. 将本地仓库推送到 GitHub
1. 提交完成后，点击顶部的 "Publish repository" 按钮
2. 在弹出的窗口中，确认仓库名称为 "investor-compass"
3. 选择仓库可见性（Public 或 Private）
4. 点击 "Publish Repository"
5. 等待推送完成

## 第二步：部署网站到 GitHub Pages

### 1. 在 GitHub 上配置 GitHub Pages
1. 打开浏览器，登录你的 GitHub 账户
2. 导航到你的新仓库：`https://github.com/[你的用户名]/investor-compass`
3. 点击仓库顶部的 "Settings" 选项卡
4. 在左侧菜单中，点击 "Pages"

### 2. 配置 Pages 来源
1. 在 "Source" 部分，点击 "Branch" 下拉菜单
2. 选择 "master" 分支（或 "main" 分支，如果使用的是 main）
3. 在右侧的目录选择中，选择 "/root"（根目录）
4. 点击 "Save"
5. 等待几分钟，GitHub Pages 会自动构建和部署你的网站

### 3. 访问你的网站
- 部署完成后，你会在 GitHub Pages 设置页面看到你的网站 URL，格式为：`https://[你的用户名].github.io/investor-compass/`
- 你可以通过这个 URL 访问你的 Investor Compass 网站

## 第三步：后续更新流程

### 1. 本地更新项目
- 在本地修改代码、添加新功能等

### 2. 提交更改到 GitHub
1. 在 GitHub Desktop 中，查看并确认更改
2. 输入提交信息
3. 点击 "Commit to master"
4. 点击 "Push origin" 按钮将更改推送到 GitHub
5. GitHub Pages 会自动重新构建和部署你的网站

## 注意事项

1. **确保所有必要文件都已提交**：
   - 所有 HTML、CSS、JavaScript 文件
   - 数据文件（如 `data/` 目录下的文件）
   - 图片和其他静态资源
   - `.gitignore` 文件（已创建）

2. **GitHub Pages 部署时间**：
   - 首次部署可能需要几分钟
   - 后续更新通常在 1-2 分钟内完成

3. **网站 URL**：
   - 网站 URL 会显示在 GitHub Pages 设置页面
   - 如果访问出现 404 错误，请等待几分钟后再尝试

4. **自定义域名**（可选）：
   - 如果你有自定义域名，可以在 GitHub Pages 设置中配置
   - 需要在你的域名注册商处添加相应的 DNS 记录

## 本地测试

在部署之前，你可以在本地测试网站：
1. 确保本地 HTTP 服务器正在运行（已经启动，端口 8000）
2. 打开浏览器，访问 `http://localhost:8000`
3. 测试网站的所有功能，确保正常工作

## 技术支持

如果遇到问题：
1. 检查 GitHub Desktop 中的错误信息
2. 查看 GitHub 仓库的 "Actions" 选项卡，了解部署状态
3. 确保所有文件都已正确提交
4. 参考 GitHub Pages 官方文档：https://docs.github.com/cn/pages

---

恭喜！你已经成功将 Investor Compass 项目部署到 GitHub Pages。