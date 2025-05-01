
import * as React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

export type IconName = keyof typeof LucideIcons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
  fallback?: IconName; // Fallback icon if name doesn't exist
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, fallback = "CircleAlert", className, size = 24, color, ...props }, ref) => {
    const LucideIcon = LucideIcons[name] || LucideIcons[fallback];

    return (
      <LucideIcon
        ref={ref}
        className={cn("", className)}
        size={size}
        color={color}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export default Icon;
