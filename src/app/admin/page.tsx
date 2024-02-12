import Header from "@/components/Header";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SideProvider } from "@/components/Sidebar/SideContext";
import CvRevampRequest from "./cv-revamp/cv-revamp-request/page";

export default function Admin() {
  return (
    <div>
      <div className="w-[250px]">
        <SideProvider>
          <Sidebar />
        </SideProvider>
        <div>
            <CvRevampRequest />
        </div>
      </div>
    </div>
  );
}
