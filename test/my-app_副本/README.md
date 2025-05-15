# 个人网站

这是一个简洁、现代的个人网站模板，使用原生HTML、CSS和JavaScript构建。网站采用响应式设计，包含多个精心设计的组件和交互效果。

## 功能特点

- 响应式导航栏，支持移动端菜单
- 全屏照片轮播展示
- 个人简介区域，包含技能展示
- 实时交互的AI小助手
- 现代化的页面过渡动画
- 社交媒体链接整合

## 目录结构

```
my-app/
  ├── index.html          # 主页面
  ├── css/               # 样式文件
  │   ├── style.css      # 主样式
  │   ├── carousel.css   # 轮播图样式
  │   └── chatbot.css    # AI助手样式
  ├── js/                # JavaScript文件
  │   ├── main.js        # 主逻辑
  │   ├── carousel.js    # 轮播图逻辑
  │   └── chatbot.js     # AI助手逻辑
  ├── images/            # 图片资源
  └── assets/            # 其他资源
```

## 使用说明

1. 克隆或下载本项目
2. 在 `images` 目录中添加以下图片：
   - `slide1.jpg`, `slide2.jpg`, `slide3.jpg` - 轮播图图片
   - `avatar.jpg` - 个人头像
   - `robot-icon.svg` - AI助手图标
   - 社交媒体图标：`wechat.svg`, `email.svg`, `linkedin.svg`, `instagram.svg`

3. 修改个人信息：
   - 在 `index.html` 中更新个人介绍文字
   - 在 `js/main.js` 中更新技能列表
   - 在 `js/carousel.js` 中更新轮播图内容
   - 在 `js/chatbot.js` 中自定义AI助手的回复

4. 使用本地服务器运行项目，例如：
   ```bash
   # 使用 Python 的简单服务器
   python -m http.server 8000
   
   # 或使用 Node.js 的 http-server
   npx http-server
   ```

## 自定义主题

你可以通过修改 `css/style.css` 中的CSS变量来自定义网站主题：

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --accent-color: #e74c3c;
    --text-color: #333;
    --light-text: #666;
    --background-color: #fff;
}
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 性能优化

- 使用了CSS动画而不是JavaScript动画来提高性能
- 图片懒加载
- 平滑的页面滚动
- 优化的移动端体验

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 许可证

MIT License 