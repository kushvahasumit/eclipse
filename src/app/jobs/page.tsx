"use client"
import React from "react";
import {  Star, MapPin, Bookmark } from "lucide-react";
import img1 from "../../../public/image2.png"
import img2 from "../../../public/image3.png"
import img3 from "../../../public/image4.png"
import img4 from "../../../public/image5.png"
import img5 from "../../../public/image6.png"
import img6 from "../../../public/image7.png"

import Image from "next/image";

const jobs = [
    {
        id: 1,
        title: "Senior Product Manager",
        location: "California, CA",
        salary: "$2.5k/Monthly",
        company: "Google",
        type: "Full Time",
        level: "Senior Level",
        remote: true,
        reviews: 42,
        color: "bg-yellow-100",
        img: img1
    },
    {
        id: 2,
        title: "Front End Developer",
        location: "New York, NY",
        salary: "$1.5k/Monthly",
        company: "Twitch",
        type: "Part Time",
        level: "Mid Level",
        remote: false,
        reviews: 27,
        color: "bg-purple-100",
        img: img2
    },
    {
        id: 3,
        title: "Quality Assurance Engineer",
        location: "Rome, IT",
        salary: "$1.5k/Monthly",
        company: "Spotify",
        type: "Full Time",
        level: "Mid Level",
        remote: false,
        reviews: 42,
        color: "bg-green-100",
        img: img3
    },
    {
        id: 4,
        title: "Full Stack Developer",
        location: "San Francisco, CA",
        salary: "$3.5k/Monthly",
        company: "Airbnb",
        type: "Part Time",
        level: "Mid Level",
        remote: false,
        reviews: 42,
        color: "bg-red-100",
        img: img4
    },
    {
        id: 5,
        title: "User Interface Designer",
        location: "San Francisco, CA",
        salary: "$3.5k/Monthly",
        company: "Twitter",
        type: "Full Time",
        level: "Senior Level",
        remote: false,
        reviews: 123,
        color: "bg-blue-100",
        img: img5
    },
    {
        id: 6,
        title: "User Experience Designer",
        location: "Dhaka, BD",
        salary: "$3.5k/Monthly",
        company: "Spotify",
        type: "Full Time",
        level: "Mid Level",
        remote: false,
        reviews: 89,
        color: "bg-green-100",
        img: img6
    },
];

const JobCards = () => {
    return (
        <div className="pt-16 p-4">
            <div className="mb-4 flex justify-between items-center">
                <div className="flex text-xl justify-between gap-2">
                    <h1 className="text-xl font-bold">Recommended Jobs</h1>
                    <p className="space-x-2 pl-3 pr-3 border border-black text-center rounded-2xl">386</p>
                </div>
                <p className="text-gray-600">Sort by: Last Updated</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className={`p-6 border m-3 rounded-2xl shadow-lg flex flex-col gap-4 ${job.color}`}
                    >
                        <div className="flex items-center justify-between">
                            <Image src={job.img} alt="company logo" className="w-8 h-8" />
                            <Bookmark className="text-black p-1 h-8  w-8 rounded-full bg-white" />
                        </div>
                        <h2 className="text-lg font-semibold">{job.title}</h2>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`text-black ${i < 4 ? 'fill-current' : ''}`} />
                            ))}
                            <span className="text-sm pl-4 text-gray-600">({job.reviews} Reviews)</span>
                        </div>
                        <p className="text-gray-700 flex items-center gap-2">
                            <MapPin className="text-black" /> {job.location}
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 text-sm border rounded-full bg-gray-200">{job.type}</span>
                            <span className="px-3 py-1 text-sm border rounded-full bg-gray-200">{job.level}</span>
                            {job.remote && <span className="px-3 py-1 text-sm border rounded-full bg-gray-200">Remote</span>}
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-lg font-bold">{job.salary}</p>
                            <button className="px-4 py-2 bg-black text-white rounded-xl">Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCards;
