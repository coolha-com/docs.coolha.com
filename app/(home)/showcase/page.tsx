import Link from 'next/link';

export default async function ShowcasePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      ShowcasePage
    </main>
  );
}
