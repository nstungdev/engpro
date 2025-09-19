import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: 'Home',
  description:
    'Welcome to Engpro - Your comprehensive English learning platform with vocabulary, grammar, and practice tools',
};

export default function Home() {
  const items = [
    {
      title: 'Vocabulary dictionary',
      description:
        'Look up new words, learn their meanings, and see example sentences to understand how to use them correctly.',
      link: '/vocabulary/dictionary',
    },
  ];

  return (
    <main>
      <h2 className="mb-3 font-bold">key features</h2>
      <section className="grid gap-2 md:grid-cols-3">
        {items.map((feature) => (
          <Card key={feature.title} className="py-2">
            <CardHeader className="text-zinc-600 font-semibold">
              {feature.title}
            </CardHeader>
            <CardContent className="text-zinc-500 text-sm">
              <p>{feature.description}</p>
            </CardContent>
            <CardFooter className="flex flex-row-reverse">
              <Button variant="outline" size={'sm'} asChild>
                <Link href={feature.link}>View details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
