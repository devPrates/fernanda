'use client'
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { dataMenu } from "@/types/data";
import { iconMap } from "@/types/types";


export default function Navbar() {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-300 flex flex-col">
                {/* Navbar */}
                <div className="navbar w-full container mx-auto">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">Navbar Title</div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            <ThemeSwitch />
                            {/* Navbar menu content here */}
                            {dataMenu.map((item) => {
                                const Icon = iconMap[item.icon];
                                return(
                                    <li key={item.id}>
                                        <Link href={item.link}>
                                            <div className="flex gap-2 items-center">
                                                <span className="">{Icon && <Icon />}</span>
                                                {/* renderizar icone aqui */}
                                                <p className="font-bold">{item.titulo}</p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            }) }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {dataMenu.map((item) => {
                                const Icon = iconMap[item.icon];
                                return(
                                    <li key={item.id}>
                                        <Link href={item.link}>
                                            <div className="flex gap-2 items-center">
                                                <span className="">{Icon && <Icon />}</span>
                                                {/* renderizar icone aqui */}
                                                <p className="font-bold">{item.titulo}</p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            }) }
                    <ThemeSwitch />
                </ul>
            </div>
        </div>
    )
}