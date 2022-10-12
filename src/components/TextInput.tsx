import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}
function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        'h-[3rem] flex items-center gap-3 py-4 px-3 rounded bg-zinc-800 w-full focus-within:ring-2 ring-cyan-300'
      )}
    >
      {children}
    </div>
  );
}
TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}
function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="h-6 w-6 text-zinc-400">{children}</Slot>;
}
TextInputIcon.displayName = 'TextInput.Icon';

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput({ ...rest }: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-zinc-100 text-xs placeholder:text-zinc-400 outline-none"
      {...rest}
    />
  );
}
TextInputInput.displayName = 'TextInput.Input';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
