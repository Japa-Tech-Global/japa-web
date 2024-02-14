import Link from "next/link";
import Button from "../Button/Button";
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

const Header = () => {
  return (
    <div className="bg-white w-full py-7 border-b shadow-sm">
      <nav className="flex justify-between items-center px-10">
        <div className="flex-start">
          <p className="text-[#7D30EE] font-bold">JAPA</p>
        </div>
        <div className="flex gap-4">
          {navItems.map((navlink, index) => (
            <Link href={navlink.link} key={index}>
              <p className="hover:text-[#7D30EE] transition-all ease-linear">
                {navlink.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex gap-5">
          <Button intent="secondary">Sign up</Button>
          <Button>Sign in</Button>
        </div>
      </nav>
    </div>
  );
};
export default Header;
