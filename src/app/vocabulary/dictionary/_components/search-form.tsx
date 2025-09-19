'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IconEraser, IconSearch } from '@tabler/icons-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';

interface SearchFormProps {
  initialKeyword: string;
}

export default function SearchForm({
  initialKeyword,
}: Readonly<SearchFormProps>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(initialKeyword);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (keyword.trim()) {
        params.set('q', keyword.trim());
      } else {
        params.delete('q');
      }

      router.push(`/vocabulary/dictionary?${params.toString()}`);
    });
  };

  const handleClear = () => {
    setKeyword('');
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.delete('q');
      router.push(`/vocabulary/dictionary?${params.toString()}`);
    });
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <Input
        type="text"
        placeholder="Search words..."
        aria-label="Search words input"
        value={keyword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setKeyword(e.target.value)
        }
        className="flex-1"
        disabled={isPending}
      />
      <Button
        type="submit"
        variant="default"
        aria-label="Search words submit button"
        disabled={isPending}
      >
        <IconSearch />
        {isPending ? 'Searching...' : 'Search'}
      </Button>
      {keyword && (
        <Button
          type="button"
          variant="outline"
          aria-label="Clear search button"
          onClick={handleClear}
          disabled={isPending}
        >
          <IconEraser />
          Clear
        </Button>
      )}
    </form>
  );
}
