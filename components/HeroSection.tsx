"use client";

import Image from "next/image";
import Button from "./shared/ui-kit/Button";
import Typography from "./shared/ui-kit/Typography";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function HeroSection() {
    return (
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto grid bg-white-02 max-w-7xl grid-cols-1 items-center gap-6 px-6 py-10 md:grid-cols-2 md:px-30 md:py-15"
        >
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative order-1 w-full md:order-2"
            >
                <Image
                    src="/assets/images/hero.svg"
                    alt="Hero Illustration"
                    width={1200}
                    height={900}
                    priority
                    className="h-auto w-full object-contain"
                />
            </motion.div>
            <div className="order-2 space-y-4 md:order-1">
                <Typography
                    as="h1"
                    variant="hero-title"
                    className="text-black-900"
                >
                    کمپین‌های بازاریابی و تبلیغاتی
                </Typography>
                <Typography
                    variant="body"
                    className="text-black-500"
                >
                    آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول را بردارید!
                </Typography>
                <Typography
                    variant="body"
                    className="text-gray-900"
                >
                    جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید
                </Typography>
                <div className="flex justify-center md:justify-start">
                    <Button size="lg">
                        دریافت مشاوره
                    </Button>
                </div>
            </div>
        </motion.section>

    );
}
