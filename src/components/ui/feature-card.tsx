import { PenSquareIcon } from 'lucide-react';

export interface FeatureCardProps extends React.ComponentProps<'div'> {
  title: string;
  description: string;
}

export function FeatureCard({
  title,
  description,
  className,
  ...props
}: Readonly<FeatureCardProps>) {
  return (
    <div
      className={`relative rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg ${className}`}
      {...props}
    >
      <div className="bg-white md:p-6 p-2 rounded-md">
        <div className="rounded-full p-0.5 inline-block bg-radial-[at_30%_90%] from-pink-400 to-blue-400 from-30% to-80%">
          <div className="bg-[white] backdrop-blur-md rounded-full p-2">
            <PenSquareIcon color="#9b9999" className="size-8 md:size-9" />
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-zinc-500 my-2 tracking-wide">
          {title}
        </h3>
        <p className="text-sm font-light text-gray-600 mb-2">{description}</p>
      </div>
    </div>
  );
}
