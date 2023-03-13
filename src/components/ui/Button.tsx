import { cn } from "@/utils/cn";
import { type VariantProps, cva } from "class-variance-authority";
import { type FC } from "react";

interface Props
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  type?: "button" | "submit" | "reset";
}

const buttonVariants = cva("bg-pink-300 rounded-lg p-2.5 text-sm", {
  variants: {},
  defaultVariants: {},
});

const Button: FC<Props> = ({ type = "button", className, ...props }) => {
  return (
    <button type={type} className={cn(buttonVariants(className))} {...props}>
      Button
    </button>
  );
};

export default Button;
