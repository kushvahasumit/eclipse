"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <button className="p-2 dark:bg-gray-800 rounded" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "🌙" : "☀️"}
        </button>
    );
}
