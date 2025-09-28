import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border text-xs font-medium px-2.5 py-0.5",
  {
    variants: {
      tone: {
        profitable: "bg-profitable text-profitable-foreground",
        fair: "bg-fair text-fair-foreground",
        overpriced: "bg-overpriced text-overpriced-foreground",
      },
    },
    defaultVariants: { tone: "fair" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ tone }), className)} {...props} />;
}
