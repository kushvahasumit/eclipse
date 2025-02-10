import Link from "next/link";

export default function JobCard({ job }: { job: { id: number; title: string; location: string; salary: string } }) {
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h2 className="text-lg font-bold">{job.title}</h2>
            <p className="text-gray-600">{job.location}</p>
            <p className="text-green-600 font-semibold">{job.salary}</p>
            <Link href={`/jobs/${job.id}`} className="text-blue-500 mt-2 block">View Details</Link>
        </div>
    );
}
