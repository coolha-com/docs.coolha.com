import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Translations } from 'fumadocs-ui/i18n';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

// translations
const zh: Partial<Translations> = {
  search: '搜索',
  searchNoResult: '没有找到结果',
  toc: '目录',
  lastUpdate: '最后更新于',
  chooseLanguage: '选择语言',
  nextPage: '下一页',
  previousPage: '上一页',
};

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
  {
    name: '中文',
    locale: 'zh',
  },
  {
    name: 'English',
    locale: 'en',
  },
];

export default function RootLayout({ children, }: { children: ReactNode; }) {
  const lang = 'zh'; // 默认使用中文

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: lang === 'zh' ? zh : undefined,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}