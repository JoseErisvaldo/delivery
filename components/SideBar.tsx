"use client";

import { sideBar } from "@/data/SideBar/page";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SideBar() {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        const storedMenuState = localStorage.getItem("menuActive");
        if (storedMenuState !== null) {
            setMenuActive(JSON.parse(storedMenuState));
        }
    }, []);

    const toggleMenu = () => {
        setMenuActive((prev) => {
            const newState = !prev;
            localStorage.setItem("menuActive", JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <div className={`h-screen ${menuActive ? "" : "w-56"} p-2 flex flex-col gap-2`}>
            <div className="flex justify-end items-center gap-2 hover:bg-muted p-2 rounded-md border-l-4 border-transparent">
                <button onClick={toggleMenu}>
                    {menuActive ? <ChevronRight /> : <ChevronLeft />}
                </button>
            </div>
            <div className="flex flex-col gap-2">
                {sideBar.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-2 hover:bg-muted p-2 rounded-md border-l-4 ${
                            pathname === item.href ? "border-primary bg-muted" : "border-transparent"
                        }`}
                    >
                        {item.icon} <span className={`${menuActive ? "hidden" : ""}`}>{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
