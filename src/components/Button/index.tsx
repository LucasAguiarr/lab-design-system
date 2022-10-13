import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}
export function Button({ children, asChild, className, ...rest }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'py-3 px-4 bg-cyan-300 rounded font-semibold text-black w-full text-sm transition-colors hover:bg-cyan-200 focus:bg-cyan-400 focus:ring-2 ring-white',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}