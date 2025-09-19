'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IconInfoCircle } from '@tabler/icons-react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({
  error,
  reset,
}: Readonly<GlobalErrorProps>) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error occurred:', error);
  }, [error]);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <html lang="en">
      <body>
        <div className="md:min-h-screen bg-background flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <Card className="border-destructive/20">
              <CardHeader className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <IconInfoCircle color="red" />
                </div>
                <CardTitle className="text-destructive">
                  Oops! Something went wrong
                </CardTitle>
                <CardDescription>
                  We encountered an unexpected error. Our team has been notified
                  and is working to fix it.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {process.env.NODE_ENV === 'development' && (
                  <div className="p-3 bg-muted rounded-md">
                    <p className="text-sm font-mono text-muted-foreground break-words">
                      <strong>Error:</strong> {error.message}
                    </p>
                    {error.digest && (
                      <p className="text-xs font-mono text-muted-foreground mt-1">
                        <strong>Digest:</strong> {error.digest}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <Button onClick={reset} className="w-full">
                    Try Again
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleReload}
                    className="w-full"
                  >
                    Reload Page
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.history.back()}
                    className="w-full"
                  >
                    Go Back
                  </Button>
                </div>

                <div className="text-center pt-4 border-t">
                  <p className="text-xs text-muted-foreground">
                    If the problem persists, please{' '}
                    <a
                      href="mailto:support@engpro.com"
                      className="text-primary hover:underline"
                    >
                      contact support
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </body>
    </html>
  );
}
