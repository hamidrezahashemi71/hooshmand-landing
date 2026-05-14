import {
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    ReactNode,
} from "react";
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
};

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
};

type Props = {
    label?: string;
    error?: string;
    icon?: ReactNode;
    className?: string;
} & (InputProps | TextareaProps);

export default function Input({
    as = "input",
    label,
    error,
    icon,
    className,
    ...props
}: Props) {
    const sharedClasses = clsx(
        "w-full rounded-[16px] border bg-white-02 outline-none transition text-[12px] text-gray-700",
        error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-200 focus:border-purple-600",
        icon ? "pr-12" : "pr-4",
        className
    );

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="text-[14px] text-black-900">
                    {label}
                </label>
            )}

            <div className="relative">
                {icon && as === "input" && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        {icon}
                    </div>
                )}

                {as === "textarea" ? (
                    <textarea
                        {...(props as TextareaProps)}
                        className={clsx(
                            sharedClasses,
                            "min-h-[140px] resize-none p-4"
                        )}
                    />
                ) : (
                    <input
                        {...(props as InputProps)}
                        autoComplete="off"
                        className={clsx(
                            sharedClasses,
                            "h-10 py-2 pl-4"
                        )}
                    />
                )}
            </div>

            {error && (
                <span className="text-[10px] text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
}
