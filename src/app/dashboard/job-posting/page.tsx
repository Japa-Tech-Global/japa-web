"use client";
import InputForms from "../Components/JobForms/JobForms";
import MessageBox from "../Components/JobForms/MessageForms/MessageForms";
import RadioInputs from "../Components/JobForms/RadioInputs/RadioInputs";
import Select from "../Components/JobForms/SelectForm/Select";
import { messageData } from "../Components/JobForms/MessageForms/messageboxData";
import Button from "@/app/onboarding/Components/Button/Button";

const radioData = ["Full time", "Part time", "Intern", "Volunteer", "Others"];
const JobPosting = () => {
  const handleInputChange = (formData: Record<string, string>) => {
    // Handle the form data here, you can log it or update the state in the parent component
    console.log(formData);
  };
  return (
    <div>
      <div>
        <p className="font-bold mt-[8.8rem]">Post a New Job</p>
      </div>
      <div className="my-10 grid lg:grid-cols-2 gap-10 w-full">
        <InputForms
          onInputChange={handleInputChange}
          label="Job Title"
          placeholder="Job title must describe one position"
        />
        <InputForms
          onInputChange={handleInputChange}
          label="Job Category"
          placeholder=""
        />
      </div>
      <div className="my-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-black font-bold">Job Type</p>
            <div>
              {radioData.map((radio, index) => (
                <RadioInputs key={index} label={radio} />
              ))}
            </div>
          </div>
          <div>
            <Select label="Location" placeholder="Select the company country" />
            <div className="mt-4">
              <InputForms
                onInputChange={handleInputChange}
                placeholder="Select the city"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div>
            <p className="font-bold text-black">Salary</p>
            <p className="text-gray-300 text-sm">
              Specify the min and max salary range
            </p>
          </div>
          <div className="my-5 grid lg:grid-cols-2 gap-10 w-full">
            <InputForms
              onInputChange={handleInputChange}
              label="Minimum"
              placeholder="$20"
            />
            <InputForms
              onInputChange={handleInputChange}
              label="Maximun"
              placeholder="$20000"
            />
          </div>
        </div>
        <div className="mt-10">
          <div className="grid lg:grid-cols-2 items-center gap-10">
            {messageData.map((data, index) => (
              <MessageBox
                key={index}
                label={data.label}
                subtext={data.subtext}
              />
            ))}
          </div>
          <div className="flex gap-10 justify-end">
            <button className="bg-transparent text-[#7D30EE] underline">
              Save for later
            </button>
            <Button>Preview</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobPosting;
