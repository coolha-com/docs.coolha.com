import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, 'zh'); // 默认使用中文
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
        <a
          href={`https://github.com/coolha-com/docs.coolha.com/blob/main/content/docs/${page.path}`}
          rel="noreferrer noopener"
          target="_blank"
          className="w-fit border rounded-xl p-2 font-medium text-sm text-fd-secondary-foreground bg-fd-secondary transition-colors hover:text-fd-accent-foreground hover:bg-fd-accent"
        >
          Edit on GitHub
        </a>
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, 'zh'); // 默认使用中文
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
