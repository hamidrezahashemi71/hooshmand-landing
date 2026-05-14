"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Typography from "./shared/ui-kit/Typography";

import {
    ArrowLeft,
    ArrowRight,
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
} from "@/components/shared/svgs";

const slides = [
    {
        icon: Slide1,
        title: "نداشتن برنامه برای رشد",
        text: "اگر استراتژی مشخصی برای رشد ندارید، پرشین سایت نقشه راه جامعی برای شما طراحی خواهد کرد.",
    },
    {
        icon: Slide2,
        title: "دغدغه هدر رفتن بودجه",
        text: " اگر نگران عدم کسب نتیجه هستید، پرشین سایت با برنامه‌ریزی دقیق به شما اطمینان می‌دهد که از بودجه خود به بهترین نحو استفاده خواهید کرد.",
    },
    {
        icon: Slide3,
        title: "عدم تخصص تیم در تبلیغات",
        text: "اگر تیم شما تجربه کافی در زمینه تبلیغات ندارد، ما تمامی فرآیندها را به صورت حرفه‌ای و با کیفیت بالا انجام خواهیم داد.",
    },
    {
        icon: Slide4,
        title: "نبود استراتژی مشخص",
        text: "نگران هماهنگی با اهداف کسب‌وکار خود نباشید؛ پرشین سایت برنامه‌ای متناسب با نیازهای شما طراحی خواهد کرد.",
    },
    {
        icon: Slide5,
        title: "ناآگاهی از تأثیر تبلیغات",
        text: " بسیاری از افراد نمی‌دانند که کمپین‌های تبلیغاتی چگونه می‌توانند منجر به افزایش فروش شوند؛ ما این تأثیرات را به وضوح برای شما نمایش خواهیم داد.",
    },
    {
        icon: Slide6,
        title: "تصور زمان‌بر بودن نتایج",
        text: "برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی به نتایج مطلوب یاری می‌کند.",
    },
    {
        icon: Slide7,
        title: "ترس از پیچیدگی مدیریت",
        text: "مدیران ممکن است نگران دشواری مدیریت کمپین‌ها باشند، اما ما تمامی فرآیندها را به ساده‌ترین شکل ممکن ارائه می‌دهیم.",
    },
    {
        icon: Slide8,
        title: "نگرانی از هزینه‌های تبلیغات",
        text: "برخی افراد ممکن است تصور کنند که تبلیغات هزینه‌بر است؛ اما پرشین سایت با ارائه سود بالا، این هزینه‌ها را جبران می‌کند.",
    },
];

export default function ServicesSection() {
    return (
        <section className="relative w-full bg-gray-50">
            <div className="absolute top-0 right-0 left-0 bottom-[70px] bg-[linear-gradient(0deg,#7A3DE2_0%,#43217C_100%)]" />
            <div className="relative mx-auto w-full text-center pr-6 md:px-6 md:px-30 ">
                <div className="mt-6">
                    <Typography
                        variant="service-title"
                        className="text-white-01 "
                    >
                        موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
                    </Typography>
                </div>
                <div className="relative py-6">
                    <button className="services-prev absolute top-1/2 left-[-20px] z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[8px] border border-gray-100 bg-white-01 transition hover:bg-gray-100 md:flex">
                        <ArrowLeft />
                    </button>
                    <button className="services-next absolute top-1/2 right-[-20px] z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[8px] border border-gray-100 bg-white-01 transition hover:bg-gray-100 md:flex">
                        <ArrowRight />
                    </button>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: ".services-prev",
                            nextEl: ".services-next",
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop
                        spaceBetween={16}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.2,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {slides.map((slide, index) => {
                            const Icon = slide.icon;
                            return (
                                <SwiperSlide key={index}>
                                    <div className="flex h-[198px] w-full flex-col items-center gap-2 rounded-[8px] border border-gray-200 bg-white-01 px-4 py-3 text-center transition hover:shadow-md md:h-[226px]  md:py-6">
                                        <div className="h-10 w-10 md:h-14 md:w-14">
                                            <Icon />
                                        </div>

                                        <Typography variant="card-title">
                                            {slide.title}
                                        </Typography>

                                        <Typography variant="card-caption">
                                            {slide.text}
                                        </Typography>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
