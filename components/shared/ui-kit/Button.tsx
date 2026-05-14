import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

type ButtonSize =
  | "sm"
  | "md"
  | "lg"
  | "icon";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-servicePurple text-white-01 rounded-lg  hover:opacity-90",

  secondary:
    "bg-black-500 text-white-02 rounded-[16px] py-1 hover:bg-black-900",

  outline:
    "border border-gray-100 bg-transparent text-black-900 hover:bg-gray-100",

  ghost:
    "bg-transparent text-black-900 hover:bg-gray-100",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-11 w-11",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200",
          "disabled:pointer-events-none disabled:opacity-50",
          "focus:outline-none focus:ring-2 focus:ring-black-900/10",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
