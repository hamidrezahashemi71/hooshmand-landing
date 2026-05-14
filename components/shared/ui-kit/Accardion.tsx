"use client";

import { ReactNode, useState } from "react";
import clsx from "clsx";
import { AddCircle } from "../svgs";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface AccordionItem {
    title: string;
    content: ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({
    items,
}: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => setOpenIndex((prev) => prev === index ? null : index);

    return (
        <div className="flex flex-col gap-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className="overflow-hidden min-h-[50px] md:min-h-[66px] py-4 px-6 bg-white-01 md:bg-white-02 rounded-[8px] border border-gray-100"
                    >
                        <button
                            type="button"
                            onClick={() => toggleItem(index)}
                            className="flex w-full items-center justify-between text-right"
                        >
                            <span className="text-[14px] md:text-medium font-medium text-black-900">
                                {item.title}
                            </span>

                            <AddCircle
                                className={clsx(
                                    "text-xl transition-transform duration-300",
                                    isOpen && "rotate-45"
                                )}
                            />

                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-5 py-5 text-[12px] leading-7 text-gray-600">
                                        {item.content}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
