import { Vocabulary, VocabularyMeaning } from '@/generated/prisma';

interface VocabularyItemProps {
  word: Vocabulary;
  meanings: VocabularyMeaning[];
}

export default function VocabularyItem({
  word,
  meanings,
}: Readonly<VocabularyItemProps>) {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold text-lg">{word.word}</h3>
      {meanings.map((meaning) => (
        <div key={meaning.id} className="mt-2">
          <span className="text-sm text-blue-600 font-medium">
            {meaning.partOfSpeech}
          </span>
          <p className="text-gray-700">{meaning.meaning}</p>
          {meaning.example && (
            <p className="text-sm text-gray-500 italic mt-1">
              Example: {meaning.example}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
