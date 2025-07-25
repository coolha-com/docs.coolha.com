import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import { BookIcon } from 'lucide-react';
import { RiBloggerLine, RiBookOpenLine, RiSlideshowLine } from 'react-icons/ri';

export const baseOptions: BaseLayoutProps = {

  nav: {
    transparentMode: 'always',
    title: (
      <>
        <img src="/favicon.ico" alt="favicon.ico" className=' w-6 h-6' />
        <span className=' hidden md:block'>Coolha Docs</span>
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    { icon: <RiBookOpenLine className='w-4 h-4' />, text: '文档', url: `/docs/about`, secondary: false, active: 'nested-url', },
    { icon: <RiBloggerLine className='w-4 h-4' />, text: '博客', url: `https://paragraph.com/@coolha`, secondary: false, active: 'nested-url', },
    { icon: <RiSlideshowLine className='w-4 h-4' />, text: '联系', url: `https://link3.to/coolha`, secondary: false, active: 'nested-url', },

    /*     {
          type: 'menu',
          text: 'Guide',
          items: [
            {
              text: 'Getting Started',
              description: 'Learn to use Fumadocs',
              url: '/docs',
            },
          ],
        }, */
  ],
/*   i18n: {
    languages: i18n.languages,
    defaultLanguage: i18n.defaultLanguage,
  }, */
  /* githubUrl: 'https://github.com', */

};
