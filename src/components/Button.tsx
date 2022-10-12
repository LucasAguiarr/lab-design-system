import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}
export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-4 px-3 bg-cyan-300 rounded font-semibold text-black w-full text-sm transition-colors hover:bg-cyan-200 focus:bg-cyan-400 focus:ring-2 ring-white'
      )}
    >
      {children}
    </Comp>
  );
}
