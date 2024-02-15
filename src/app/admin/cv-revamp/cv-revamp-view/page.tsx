// import Badge from "@/components/Badge/Badge";
import { IoCheckmark } from "react-icons/io5";
import { FC } from "react";

interface PackageProps {
  id: number;
  label: string;
}
const packagePlans = [
  {
    id: 1,
    label: "Written to fit the Preferred Job",
  },
  {
    id: 2,
    label: "Stand out among Recruiters",
  },
  {
    id: 3,
    label: "keyword Optimization",
  },
  {
    id: 1,
    label: "ATS scanning",
  },
];
const CVRevampView: FC<PackageProps> = () => {
  return (
    <div>
      <div className="flex justify-between border-b items-center py-10">
        <div className="flex gap-4 items-center">
          <div className="bg-[#FFDDD2] rounded-full p-4">RF</div>
          <p className="text-2xl font-bold">Robert Fox</p>
          {/* <Badge>Pending</Badge> */}
        </div>
        <div>
          <button className="bg-[#7d30ee] rounded-lg text-white px-3 py-2">
            Mark as complete
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 px-[2rem] mt-10">
        <div className="block">
          <div className="flex justify-between py-2">
            <p>Request Date:</p>
            <p>28th November 2022</p>
          </div>
          <div className="flex justify-between">
            <p>Email:</p>
            <p>waza@gmail.com</p>
          </div>
          <div className="flex justify-between py-2">
            <p>Location:</p>
            <p>Lagos</p>
          </div>
          <div className="flex justify-between">
            <p>Phone Number:</p>
            <p>+234-901-866-00-95</p>
          </div>
          <br />
          <br />
          <div className="flex justify-between">
            <p>How did you hear about our services?</p>
            <p>Instagram</p>
          </div>
          <br />
          <div className="flex justify-between">
            <p>Plan:</p>
            <div>
              <p className="font-bold text-xl">Basic</p>
              <p>
                price: <span className="font-bold text-2xl">N10,000k</span>
              </p>
              <ul className="mt-3">
                {packagePlans.map(({ id, label }) => (
                  <li className="flex items-center gap-3" key={id}>
                    <IoCheckmark className="text-green-600 " size={20} />
                    <p>{label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CVRevampView;
