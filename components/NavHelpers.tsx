import Link from "next/link";
import { motion } from "framer-motion";

// Desktop main menu link
export function HoverLink({ href, icon, children }: any) {
    return (
        <Link href={href} className="flex items-center gap-2 group relative">
            {icon}
            <span className="group-hover:text-yellow-300 transition">{children}</span>
            <motion.div
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all duration-300"
            />
        </Link>
    );
}

// Dropdown items
export function DropdownLink({ href, children }: any) {
    return (
        <Link href={href} className="block px-4 py-2 hover:bg-gray-100 transition">
            {children}
        </Link>
    );
}

// Mobile main link
export function MobileLink({ href, icon, children }: any) {
    return (
        <Link href={href} className="flex items-center gap-2 py-2 border-b border-gray-200">
            {icon}
            <span>{children}</span>
        </Link>
    );
}

// Mobile dropdown sub link
export function MobileSubLink({ href, children }: any) {
    return (
        <Link href={href} className="block py-1 text-gray-600 hover:text-indigo-600 transition">
            {children}
        </Link>
    );
}
