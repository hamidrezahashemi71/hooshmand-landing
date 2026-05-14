import Link from "next/link";
import { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps
  extends ComponentProps<typeof Link> {
  active?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      className,
      active,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Link
        ref={ref}
        className={cn(
          "text-sm font-medium transition-colors duration-200",
          active
            ? "text-black-900"
            : "text-black-200 hover:text-black-900 hover:font-bold",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export default NavLink;
