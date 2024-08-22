import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  className,
  children, // Use lowercase 'children' here
}: {
  className?: string;
  children: ReactNode; // Also update the type to match 'children'
}) => {
  return (
    <div
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}
    >
      {children} {/* Render 'children' instead of 'Children' */}
    </div>
  );
};

export default MaxWidthWrapper;
