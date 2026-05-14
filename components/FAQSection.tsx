import Accordion from "./shared/ui-kit/Accardion";
import Typography from "./shared/ui-kit/Typography";

const faqItems = [
    {
        title: "مراحل طراحی وب سایت چیست؟",
        content:"پس از ثبت فرم مشاوره، تیم ما با شما تماس می‌گیرد و نیازهای پروژه بررسی می‌شود.",
    },
    {
        title: "چرا طراحی وب سایت مهم است؟",
        content:"بسته به نوع پروژه و خدمات انتخابی، زمان اجرا متفاوت خواهد بود.",
    },
    {
        title: "چگونه یک وب سایت را بهینه کنیم؟",
        content:"بله، خدمات کامل سئو تکنیکال، محتوایی و لینک‌سازی ارائه می‌شود.",
    },
    {
        title: "راهکارهای جذب ترافیک وب سایت چیست؟",
        content:"تمام پروژه‌ها دارای پشتیبانی و امکان توسعه در آینده هستند.",
    },
    {
        title: "چطور ارزیابی امنیت وب سایت انجام دهیم؟",
        content:"تمام پروژه‌ها دارای پشتیبانی و امکان توسعه در آینده هستند.",
    },
];

export default function FAQSection() {
    return (
        <section className="mx-auto w-full max-w-7xl p-0 md:px-30 md:py-25 md:px-30 bg-white-02">
            <div className="flex flex-col gap-6 bg-white-02 md:bg-white-01 border border-gray-50 rounded-[8px] px-6 py-10 md:px-10 md:py-20 md:flex-row md:items-start md:justify-between">
                <div className="md:w-[35%] flex flex-col gap-4">
                    <Typography
                        variant="FAQ-title"
                        className="text-black-900 md:text-right"
                    >
                        FAQ
                    </Typography>
                    <Typography
                        variant="hero-title"
                        className="text-black-900 md:text-right"
                    >
                        سوالات متداولی که از ما می‌پرسید
                    </Typography>

                    <Typography
                        variant="form-caption"
                        className="hidden md:flex text-black-500 md:text-right"
                    >
                      سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده شده اند:
                    </Typography>
                </div>
                <div className="md:w-[60%]">
                    <Accordion items={faqItems} />
                </div>
            </div>
        </section>
    );
}
