import { DocsLayout, DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { RiApps2AddLine, RiBookOpenLine, RiUserCommunityLine } from 'react-icons/ri';
import { i18n } from '@/lib/i18n';

export default function Layout({ children, }: { children: ReactNode; }) {
  const lang = 'zh'; // 默认使用中文
  const docsOptions: DocsLayoutProps = {
    ...baseOptions,
    tree: source.pageTree[lang],
    sidebar: {
      tabs: [
        {
          title: '文档',
          description: '什么是 Coolha ?',
          url: `/docs/about`,
          icon: <RiBookOpenLine className="w-4 h-4" />
        },
        {
          title: '应用程序',
          description: '介绍 Coolha Dapps',
          url: `/docs/apps`,
          icon: <RiApps2AddLine className="w-4 h-4" />
        },
        {
          title: '社区',
          description: '社区资源和贡献',
          url: `/docs/community`,
          icon: <RiUserCommunityLine className="w-4 h-4" />
        },
      ],
    },
    links: [],
  };

  return (
    <DocsLayout {...docsOptions}>
      {children}
    </DocsLayout>
  );
}
