"use Client"
import { Bell, Settings, MapPin, Search, Play, Receipt, BriefcaseBusiness } from "lucide-react";
import DarkModeToggle from "./mode";
import profile from "../../public/image1.png"
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-gray-900 dark:bg-gray-700 text-white shadow-md">
            <div className="flex justify-between items-center px-6 py-2">
                <h1 className="text-2xl px-8 font-bold">Eclipse</h1>
                <div className="flex items-center space-x-6">
                    <a href="/" className="border-b border-white dark:text-gray-300">Find Job</a>
                    <a href="/jobs" className="dark:text-gray-300">Messages</a>
                    <a href="/jobs" className="dark:text-gray-300">Hiring</a>
                    <a href="/jobs" className="dark:text-gray-300">Community</a>
                    <a href="/jobs" className="dark:text-gray-300">FAQ</a>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-white dark:text-gray-300" />
                        <span>New York, NY</span>
                    </div>
                    <div className="rounded-full bg-gray-500 w-8 h-8 overflow-hidden">
                        <Image src={profile} alt="Profile" />
                    </div>
                    <Bell className="w-6 h-6 text-white dark:text-gray-300" />
                    <DarkModeToggle />
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-700 dark:bg-gray-500"></div>

            <div className="flex justify-center items-center space-x-6 py-2 px-6">
                <div className="flex items-center space-x-8">
                    <div className="rounded-full border border-gray-400 p-2 flex justify-center items-center">
                        <Search className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white">Designer</p>
                    <Play className="w-4 h-4 text-white rotate-90 fill-white" />
                </div>

                <div className="h-8 w-[1px] bg-gray-700 dark:bg-gray-500"></div>

                <div className="flex items-center space-x-8">
                    <div className="rounded-full border border-gray-400 p-2 flex justify-center items-center">
                        <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white">Work Location</p>
                    <Play className="w-4 h-4 text-white rotate-90 fill-white" />
                </div>

                <div className="h-8 w-[1px] bg-gray-700 dark:bg-gray-500"></div>
                <div className="flex items-center space-x-8">
                    <div className="rounded-full border border-gray-400 p-2 flex justify-center items-center">
                        <BriefcaseBusiness className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white">Experience</p>
                    <Play className="w-4 h-4 fill-white text-white rotate-90" />
                </div>

                <div className="h-8 w-[1px] bg-gray-700 dark:bg-gray-500"></div>

                <div className="flex items-center space-x-8">
                    <div className="rounded-full border border-gray-400 p-2 flex justify-center items-center">
                        <Receipt className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white">Per Month</p>
                    <Play className="w-4 fill-white h-4 text-white rotate-90" />
                </div>

                <div className="h-8 w-[1px] bg-gray-700 dark:bg-gray-500"></div>

                <div className="flex flex-col items-center">
                    <p className="text-white">Salary Range</p>
                    <div className="w-24 h-[2px] bg-gray-500 mt-1"></div>
                    <div className="flex fill-white justify-between w-24 text-sm text-white mt-1">
                        <p>$600</p>
                        <p>$900</p>
                    </div>
                </div>
            </div>

        </nav>
    );
}
