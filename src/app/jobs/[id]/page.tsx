import { GetServerSideProps } from "next";

const JobDetails = ({ jobId }:  { jobId: string } ) => {
    return (
        <div className="p-10 mt-10">
            <h1 className="text-3xl font-bold">Job Details - {jobId}</h1>
            <p>Details about the job will be displayed here.</p>
        </div>
    );
}

export default JobDetails;
