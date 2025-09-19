import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BookOpenIcon } from 'lucide-react';

export const metadata = {
  title: 'Vocabulary',
  description:
    'Access vocabulary learning tools including dictionary and word practice',
};

interface VocabularyFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

export default function VocabularyPage() {
  const vocabularyFeatures: VocabularyFeature[] = [
    {
      id: 'dictionary',
      title: 'Dictionary',
      description:
        'Look up words, explore meanings, and see example sentences to understand proper usage in context.',
      icon: BookOpenIcon,
      href: '/vocabulary/dictionary',
    },
  ];

  return (
    <main>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Vocabulary Learning
        </h1>
        <p className="text-gray-600">
          Enhance your English vocabulary with our comprehensive set of learning
          tools
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {vocabularyFeatures.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card
              key={feature.id}
              className="transition-all duration-200 hover:shadow-lg cursor-pointer hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pb-6">
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-0">
                <Button asChild className="w-full">
                  <Link href={feature.href}>Access Feature</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </section>

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Start Your Vocabulary Journey
        </h3>
        <p className="text-blue-700 mb-4">
          Begin with our dictionary feature to explore words and their meanings.
          Build your vocabulary knowledge step by step!
        </p>
        <Button asChild variant="default">
          <Link href="/vocabulary/dictionary">Explore Dictionary</Link>
        </Button>
      </div>
    </main>
  );
}
