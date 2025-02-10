"use client"
import { Fingerprint } from "lucide-react";

export default function Sidebar() {
    const filterCategories = [
        {
            title: "Working schedule",
            options: ["Full Time", "Internship", "Freelance", "Contractual"],
        },
        {
            title: "Employment type",
            options: ["Full Day", "Flexible Schedule", "Distant Work"],
        },
    ];

    return (
        <div className="w-72 fixed bg-gray-100 pt-14 text-white dark:bg-gray-700 h-screen p-6 flex flex-col">
            <div className="bg-gray-800 p-4 rounded-xl text-center shadow-md">
                <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full">
                        <Fingerprint className="text-black h-8 w-8 -rotate-45" />
                    </div>
                </div>
                <h3 className="text-lg font-semibold">Update your data!</h3>
                <p className="text-sm text-gray-200 mt-2">
                    Update your data and find the best opportunities.
                </p>
                <button className="mt-3 bg-updateButton text-black px-4 py-2 rounded-3xl hover:bg-emerald-400">
                    Update your data
                </button>
            </div>

{/* filter part */}
            <div className="space-y-1">
                <h3 className="text-black pt-2 text-lg  font-semibold">Filters</h3>
                {filterCategories.map((category, index) => (
                    <div key={index}>
                        <h4 className="text-sm text-black mb-2">{category.title}</h4>
                        <div className="space-y-2">
                            {category.options.map((option, idx) => (
                                <label key={idx} className="flex items-center space-x-2 text-black">
                                    <input
                                        type="checkbox"
                                        defaultChecked={idx === 0}
                                        className="w-4 h-4 border border-gray-400 rounded-sm 
                       checked:bg-black checked:border-black checked:accent-black"
                                    />
                                    <span className="text-sm">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
