import JobCard from "./JobCard";
import { jobs } from "../data/jobs";

function JobList() {

  return (

    <div className="container">

      <h1 className="title">Job Listings</h1>

      {jobs.length > 0 ? (

        jobs.map((job) => (

          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
          />

        ))

      ) : (

        <p>No jobs available at the moment.</p>

      )}

    </div>

  );

}

export default JobList;