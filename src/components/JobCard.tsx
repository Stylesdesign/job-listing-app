import { useState } from "react";

type JobProps = {
  title: string;
  company: string;
  location: string;
  salary: string;
};

function JobCard({ title, company, location, salary }: JobProps) {

  const [showDetails, setShowDetails] = useState(false);

  return (

    <div className="job-card">

      <h2>{title}</h2>

      <p>{company}</p>

      <button
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div>
          <p>Location: {location}</p>
          <p>Salary: {salary}</p>
        </div>
      )}

    </div>

  );
}

export default JobCard;