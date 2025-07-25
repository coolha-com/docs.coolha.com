import Link from 'next/link';
import { RiArrowRightLine, RiBookOpenLine, RiBloggerLine, RiSlideshowLine } from 'react-icons/ri';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 md:py-0">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* 主标题 */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fd-primary to-fd-accent bg-clip-text text-transparent">
            欢迎来到 Coolha Docs
          </h1>
          <p className="text-xl md:text-2xl text-fd-muted-foreground max-w-2xl mx-auto">
            现代化的文档平台，为开发者提供优质的技术文档和学习资源
          </p>
        </div>

        {/* 特性介绍 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-lg border bg-fd-card hover:shadow-lg transition-shadow">
            <RiBookOpenLine className="w-8 h-8 text-fd-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">完整文档</h3>
            <p className="text-fd-muted-foreground text-sm">
              详细的技术文档，涵盖从基础到高级的各种主题
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-fd-card hover:shadow-lg transition-shadow">
            <RiBloggerLine className="w-8 h-8 text-fd-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">技术博客</h3>
            <p className="text-fd-muted-foreground text-sm">
              最新的技术趋势、最佳实践和深度技术分析
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-fd-card hover:shadow-lg transition-shadow">
            <RiSlideshowLine className="w-8 h-8 text-fd-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">项目展示</h3>
            <p className="text-fd-muted-foreground text-sm">
              精选的开源项目和实际应用案例展示
            </p>
          </div>
        </div>

        {/* 行动按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/docs/about"
            className="inline-flex items-center justify-center px-6 py-3 bg-fd-primary text-fd-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            开始阅读文档
            <RiArrowRightLine className="ml-2 w-4 h-4" />
          </Link>

        </div>

        {/* 快速导航 */}
        <div className="mt-16 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="https://coolha.com/about_us" target='_blank'
              className="p-4 rounded-lg border bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">关于我们</span>
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-fd-muted-foreground mt-1 group-hover:text-fd-accent-foreground">
                了解 Coolha 的使命和愿景
              </p>
            </Link>
            <Link
              href="/docs/apps"
              className="p-4 rounded-lg border bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">了解应用</span>
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-fd-muted-foreground mt-1 group-hover:text-fd-accent-foreground">
                去中心化应用的功能、架构和使用方法
              </p>
            </Link>
            <Link
              href="/docs/community"
              className="p-4 rounded-lg border bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">去中心化社区</span>
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-fd-muted-foreground mt-1 group-hover:text-fd-accent-foreground">
                贡献代码，参与治理，帮助翻译等              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}