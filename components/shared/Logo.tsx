import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            className="text-medium flex justify-center items-center bg-gray-100 rounded-xl text-black-900 min-w-[102px] min-h-10"
        >
            logo
        </Link>
    )
}