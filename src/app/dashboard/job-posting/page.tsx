import JobForms from "../Components/JobForms/JobForms";

const JobPosting = () => {
  return (
    <div>
      <div>
        <p className="font-bold mt-[8.8rem]">Post a New Job</p>
      </div>
      <div>
        <JobForms />
      </div>
    </div>
  );
};
export default JobPosting;
