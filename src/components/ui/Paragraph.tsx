import { cn } from "@/utils/cn";
import { type VariantProps, cva } from "class-variance-authority";
import { type FC } from "react";

interface Props
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const paragraphVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "4xl": "text-4xl",
      "6xl": "text-6xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Heading: FC<Props> = ({ size, className, children, ...props }) => {
  return (
    <p {...props} className={cn(paragraphVariants({ size, className }))}>
      {children}
    </p>
  );
};

export default Heading;
