import Link from "next/link";
import { CiBellOn } from "react-icons/ci";

const navItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/",
    label: "Jobs",
  },
  {
    link: "/",
    label: "Course",
  },
  {
    link: "/",
    label: "Blog",
  },
];

const AuthHeader = () => {
  return (
    <div className="bg-white w-full py-7 border-b shadow-sm">
      <nav className="flex justify-between items-center px-10">
        <div className="flex-start">
          <p className="text-[#7D30EE] font-bold">JAPA</p>
        </div>
        <div className="flex gap-20">
          {navItems.map((navlink, index) => (
            <Link href={navlink.link} key={index}>
              <p className="hover:text-[#7D30EE] transition-all ease-linear">
                {navlink.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <CiBellOn className="text-black" size={20} />
          </div>
          <div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full p-2 text-center text-white font-bold bg-slate-500">
              H
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default AuthHeader;
