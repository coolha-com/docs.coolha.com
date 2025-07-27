# Coolha 文档网站

这是 Coolha 项目的官方文档网站，基于 [Fumadocs](https://fumadocs.dev/) 和 Next.js 构建的现代化文档平台。

## 🌟 项目概述

Coolha Docs 是一个去中心化社交 Web 应用的文档中心，提供了关于 Coolha 生态系统的全面指南和资源。网站采用现代化的设计和用户体验，支持多种内容类型和交互功能。

## 🛠️ 技术栈

- **框架**: Next.js 15.4.1 (App Router)
- **文档引擎**: Fumadocs (Core + UI + MDX)
- **样式**: Tailwind CSS 4.x
- **语言**: TypeScript
- **图标**: Lucide React + React Icons
- **内容格式**: MDX (Markdown + JSX)

## 📚 内容结构

文档网站包含以下主要部分：

- **📖 关于 (About)**: Coolha 项目介绍、常见问题、术语表等
- **🚀 应用程序 (Apps)**: Coolha DApps 介绍、使用指南、更新日志
- **👥 社区 (Community)**: 社区资源、贡献指南、参与方式
- **🔗 外部链接**: 
  - [博客](https://paragraph.com/@coolha) - 最新动态和深度文章
  - [联系方式](https://link3.to/coolha) - 社交媒体和联系信息

## ✨ 特性

- 🎨 **现代化 UI**: 基于 Fumadocs UI 的美观界面
- 📱 **响应式设计**: 完美适配桌面和移动设备
- 🔍 **全文搜索**: 内置文档搜索功能
- 🌐 **多语言支持**: 支持国际化 (i18n)
- ⚡ **快速加载**: 基于 Next.js 的优化性能
- 📝 **MDX 支持**: 在 Markdown 中使用 React 组件
- 🎯 **SEO 优化**: 搜索引擎友好的结构

## 🚀 快速开始

### 环境要求

- Node.js 18+ 
- npm 或 pnpm

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm run start
```

## 📁 项目结构

```
├── app/                    # Next.js App Router
│   ├── (home)/            # 主页路由组
│   ├── docs/              # 文档页面
│   ├── api/               # API 路由
│   └── layout.config.tsx  # 布局配置
├── content/               # 文档内容
│   ├── docs/              # MDX 文档文件
│   │   ├── about/         # 关于部分
│   │   ├── apps/          # 应用程序部分
│   │   └── community/     # 社区部分
│   └── blog/              # 博客内容
├── lib/                   # 工具库
└── public/                # 静态资源
```

## 📝 内容编辑

### 添加新文档

1. 在 `content/docs/` 相应目录下创建 `.mdx` 文件
2. 添加 frontmatter 元数据
3. 更新对应的 `meta.json` 文件

### MDX 示例

```mdx
---
title: 页面标题
description: 页面描述
---

# 标题

这是一个 MDX 文档，可以使用 Markdown 语法和 React 组件。

<Callout type="info">
这是一个信息提示框
</Callout>
```

## 🤝 贡献指南

我们欢迎社区贡献！请查看 [贡献指南](./content/docs/community/participate.mdx) 了解如何参与项目。

## 📄 许可证

本项目采用相应的开源许可证，详见 [LICENSE](./LICENSE) 文件。

## 🔗 相关链接

- [Coolha 官网](https://coolha.com)
- [GitHub 仓库](https://github.com/coolha-com/docs.coolha.com)
- [Fumadocs 文档](https://fumadocs.dev/)
- [Next.js 文档](https://nextjs.org/docs)

---

如有问题或建议，请通过 [GitHub Issues](https://github.com/coolha-com/docs.coolha.com/issues) 或 [联系我们](https://link3.to/coolha) 反馈。