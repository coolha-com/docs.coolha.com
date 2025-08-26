import Link from 'next/link';
import { RiArrowRightLine, RiBookOpenLine, RiBloggerLine, RiSlideshowLine } from 'react-icons/ri';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 md:py-0">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* 主标题 */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold ">
            欢迎来到 Coolha Docs
          </h1>
          <p className="text-xl md:text-2xl text-fd-muted-foreground max-w-2xl mx-auto">
            现代化的文档平台，为开发者提供优质的技术文档和学习资源
          </p>
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
              href="/docs/about/resources" 
              className="p-4 rounded-lg border bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">认识我们</span>
                <RiArrowRightLine className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-fd-muted-foreground mt-1 group-hover:text-fd-accent-foreground">
                关于 Coolha 的运作架构
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
                <span className="font-medium">社区贡献</span>
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