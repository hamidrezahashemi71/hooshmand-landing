"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Typography from "./shared/ui-kit/Typography";
import { Call, CheckboxDeselected, CheckboxSelected, ProfileCircleRed, Sms } from "./shared/svgs";
import Input from "./shared/ui-kit/Input";
import CheckboxField from "./shared/ui-kit/CheckboxField";
import Button from "./shared/ui-kit/Button";

const servicesOptions = [
    "خدمات سئو ",
    "طراحی وب سایت",
    "اتوماسیون و بازاریابی",
    "کمپین‌های بازاریابی و تبلیغاتی",
    "خدمات تولید محتوا",
];

const formSchema = z.object({
    fullName: z
        .string()
        .min(3, "نام و نام خانوادگی الزامی است"),

    email: z
        .string()
        .min(1, "ایمیل الزامی است")
        .email("ایمیل معتبر نیست"),

    phone: z
        .string()
        .min(11, "شماره تماس معتبر نیست")
        .max(11, "شماره تماس معتبر نیست")
        .regex(/^09\d{9}$/, "شماره تماس معتبر نیست"),

    services: z
        .array(z.string())
        .min(1, "حداقل یک سرویس را انتخاب کنید"),

    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactFormSection() {
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, watch, setValue, formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            services: [],
            message: "",
        },
    });

    const selectedServices = watch("services");

    const handleCheckboxChange = (service: string) => {
        const updatedServices = selectedServices.includes(service)
            ? selectedServices.filter((item) => item !== service)
            : [...selectedServices, service];

        setValue("services", updatedServices, {
            shouldValidate: true,
        });
    };

    const onSubmit = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("form sent");
        setLoading(false);
    };

    return (
        <section className="mx-auto w-full max-w-7xl px-6 md:px-30 bg-gray-50">
            <div className="flex flex-col gap-6 mb-8 md:mb-4">
                <Typography
                    variant="service-title"
                    className="text-black-900"
                >
                    فرم دریافت مشاوره
                </Typography>
                <Typography
                    variant="form-caption"
                    className="text-black-500 text-center"
                >
                    برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل کنید تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند.
                </Typography>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-10 rounded-[8px] bg-white px-4 py-8 md:p-10 shadow-md md:p-10 border border-gray-200"
            >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Input
                        label="نام و نام خانوادگی خود را وارد کنید"
                        {...register("fullName")}
                        onChange={(e) =>
                            setValue("fullName", e.target.value, {
                                shouldValidate: true,
                            })
                        }
                        type="text"
                        placeholder="نام و نام خانوادگی"
                        icon={<ProfileCircleRed />}
                        error={errors.fullName?.message}
                    />

                    <Input
                        label="آدرس ایمیل خود را وارد کنید"
                        {...register("email")}
                        onChange={(e) =>
                            setValue("email", e.target.value, {
                                shouldValidate: true,
                            })
                        }
                        type="email"
                        placeholder="مثلا email@mail.com"
                        icon={<Sms />}
                        error={errors.email?.message}
                    />

                    <Input
                        label="شماره تماس خود را وارد کنید"
                        {...register("phone")}
                        onChange={(e) =>
                            setValue("phone", e.target.value, {
                                shouldValidate: true,
                            })
                        }
                        type="text"
                        placeholder="مثلا 09121234567"
                        icon={<Call />}
                        error={errors.phone?.message}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-[14px] font-medium text-black-900">
                        نوع سرویس(های) مورد نظر خود را انتخاب کنید.
                    </p>

                    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                        {servicesOptions.map((service) => (
                            <CheckboxField
                                key={service}
                                label={service}
                                checked={selectedServices.includes(service)}
                                onChange={() =>
                                    handleCheckboxChange(service)
                                }
                                icon={<CheckboxDeselected />}
                                checkedIcon={<CheckboxSelected />}
                            />
                        ))}
                    </div>

                    {errors.services && (
                        <span className="text-sm text-red-500">
                            {errors.services.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Input
                        as="textarea"
                        label="در مورد درخواست خود برای ما بنویسید."
                        {...register("message")}
                        onChange={(e) =>
                            setValue("message", e.target.value)
                        }
                        placeholder="توضیحات (اختیاری)"
                        rows={6}
                        error={errors.message?.message}
                    />
                </div>
                <Button
                    type="submit"
                    variant="secondary"
                    disabled={loading}
                    className="max-w-[386px] w-full mx-auto"
                >
                    {loading ? "در حال ارسال..." : "ثبت درخواست"}
                </Button>
            </form>
        </section>
    );
}
