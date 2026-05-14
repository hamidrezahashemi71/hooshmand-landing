import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant =
    | "hero-title"
    | "body"
    | "caption"
    | "card-title"
    | "card-caption"
    | "service-title"
    | "form-caption"
    | "FAQ-title"

type TypographyProps<T extends ElementType> = {
    as?: T;
    variant?: Variant;
    children: ReactNode;
    className?: string;
};

const variants: Record<Variant, string> = {
    "hero-title":"text-[18px] leading-[180%] font-bold text-center md:text-right md:text-[24px]",
    body: "text-[14px] leading-[200%] font-semibold text-center md:text-right md:text-[18px]",
    caption:"text-[12px] leading-[180%] md:text-[16px]",
    "service-title": "text-[18px] leading-[180%] font-bold text-center md:text-[20px]",
    "card-title": "text-[12px] font-bold",
    "card-caption": "text-[12px] font-medium",
    "form-caption" : "text-[14px] md:text-[16px]",
    "FAQ-title": "text-[18px] text-center md:text-start md:text-[32px] font-bold"
};

export default function Typography<T extends ElementType = "p">({
    as,
    variant = "body",
    children,
    className,
}: TypographyProps<T>) {
    const Component = as || "p";

    return (
        <Component
            className={cn(
                variants[variant],
                className
            )}
        >
            {children}
        </Component>
    );
}
