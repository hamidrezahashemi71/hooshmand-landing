import localFont from "next/font/local";

export const iranSans = localFont({
    src: [
        {
            path: "../public/assets/fonts/IRANSans-web.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/assets/fonts/IRANSansWeb(FaNum)_Bold.woff",
            weight: "700",
            style: "bold",
        },
    ],
    variable: "--font-iran-sans",
    display: "swap",
});
