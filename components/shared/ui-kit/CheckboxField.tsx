import { ReactNode } from "react";
import clsx from "clsx";

interface CheckboxFieldProps {
    label: string;
    checked: boolean;
    onChange: () => void;
    icon?: ReactNode;
    checkedIcon?: ReactNode;
    className?: string;
}

export default function CheckboxField({
    label,
    checked,
    onChange,
    icon,
    checkedIcon,
    className,
}: CheckboxFieldProps) {
    return (
        <button
            type="button"
            onClick={onChange}
            className={clsx(
                "flex items-center gap-2 text-right bg-white-02 px-2 py-2 rounded-[16px] border border-gray-200",
                className
            )}
        >
            <span>
                {checked ? checkedIcon : icon}
            </span>

            <span className="text-[10px] text-black-500">
                {label}
            </span>
        </button>
    );
}
