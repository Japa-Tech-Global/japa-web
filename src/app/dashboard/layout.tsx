import { ReactNode } from "react";
import { SideProvider } from "../../components/Sidebar/SideContext";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row flex-1">
      <SideProvider>
        <Sidebar />
      </SideProvider>
      <Header />
      <main className="flex-1 pl-[20.5rem] pr-[2rem]">{children}</main>
    </div>
  );
};
export default DashboardLayout;
