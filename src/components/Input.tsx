import { InputHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface InputRootProps {
  children: ReactNode;
}

function InputRoot({ children }: InputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800   w-full focus-within: ring-2 ring-cyan-300"
      )}
    >
      {children}
    </div>
  );
}
InputRoot.displayName = "Input.Root";

export interface InputIconProps {
  children: ReactNode;
}

function InputIcon({ children }: InputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

InputIcon.displayName = "Input.Icon";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputText(props: InputProps) {
  return (
    <input
      className="bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400 "
      {...props}
    />
  );
}

InputText.displayName = "Input.Text";

export const Input = {
  Root: InputRoot,
  Input: InputText,
  Icon: InputIcon,
};
