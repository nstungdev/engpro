import prisma from '@/lib/prisma';
import SearchForm from './_components/search-form';
import VocabularyItem from './_components/vocabulary-item';
import BackVocabularyFeatureButton from '../_components/back-vocabulary-features-button';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const keyword = (await searchParams).q;

  return {
    title: keyword
      ? `Search results for "${keyword}"`
      : 'Vocabulary Dictionary',
    description: keyword
      ? `Search results for "${keyword}" in vocabulary dictionary`
      : 'Search and browse vocabulary words with meanings and examples',
  };
}

interface PageProps {
  readonly searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function VocabularyDictionaryPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const keyword = typeof params.q === 'string' ? params.q : '';

  const dict = await prisma.vocabulary.findMany({
    where: keyword
      ? {
          word: {
            contains: keyword,
          },
        }
      : {},
    include: {
      vocabularyMeaning: true,
    },
    orderBy: {
      word: 'asc',
    },
  });

  return (
    <section>
      <BackVocabularyFeatureButton />
      <h2>Vocabulary Dictionary</h2>
      <SearchForm initialKeyword={keyword} />

      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-4">
          {keyword
            ? `Found ${dict.length} results for "${keyword}"`
            : `Showing all ${dict.length} words`}
        </p>
        <div className="grid gap-4">
          {dict.map((item) => (
            <VocabularyItem
              key={item.id}
              word={item}
              meanings={item.vocabularyMeaning}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
