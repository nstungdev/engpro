'use client';

import { Button } from '@/components/ui/button';
import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function BackVocabularyFeatureButton() {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="mb-3"
      onClick={() => router.replace('/vocabulary')}
    >
      <IconArrowLeft />
      Back to vocabulary features
    </Button>
  );
}
