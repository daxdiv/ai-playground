import { cn } from "@/utils/cn";
import { type VariantProps, cva } from "class-variance-authority";
import { type FC } from "react";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text: string;
}

const buttonVariants = cva(
  "bg-pink-300 rounded-lg p-2.5 text-sm cursor-pointer",
  {
    variants: {},
    defaultVariants: {},
  }
);

const Button: FC<Props> = ({ text = "Click me", className, ...props }) => {
  return (
    <button className={cn(buttonVariants({ className }))} {...props}>
      {text}
    </button>
  );
};

export default Button;
