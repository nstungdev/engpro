import { Skeleton } from '@/components/ui/skeleton';

const DEFAULT_SKELETON_ITEMS = 5;
const SKELETON_ITEMS = Array.from(
  { length: DEFAULT_SKELETON_ITEMS },
  (_, i) => i
);
export default function Loading() {
  return (
    <section>
      <h2>Vocabulary Dictionary</h2>

      {/* Search Form Skeleton */}
      <div className="flex gap-2 mb-4">
        <Skeleton className="flex-1 h-10 rounded-2xl" />
        <Skeleton className="w-20 h-10 rounded-2xl" />
      </div>

      {/* Results Skeleton */}
      <div className="mt-4">
        <Skeleton className="h-4 rounded w-48 mb-4" />
        <div className="grid gap-4">
          {SKELETON_ITEMS.map((item) => (
            <div
              key={`skeleton-item-${item}`}
              className="border rounded-lg p-4"
            >
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-16 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
