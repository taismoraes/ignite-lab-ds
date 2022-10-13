import { AnchorHTMLAttributes } from "react";
import clsx from "clsx";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  className?: string;
}

export function Link({ text, className, ...props }: LinkProps) {
  return (
    <a
      className={clsx(
        "text-gray-400 font-sans hover:text-gray-200 underline cursor-pointer",
        className
      )}
      {...props}
    >
      {text}
    </a>
  );
}
