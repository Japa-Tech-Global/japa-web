import { Sidebar } from "@/components/Sidebar/Sidebar";
import { FilterForm } from "./Component/FilterForm/FilterForm";
import PaginationComponent from "./Component/Pagination/PaginationComponent";
import SearchForm from "./Component/SearchForm/SearchForm";
import { SortForm } from "./Component/SortForm/SortForm";
import { TabComponent } from "./Component/TabComponent/TabComponent";

const CvRevampRequest = () => {
  return (
    <div>
      <div className=" h-[30rem] pt-[4rem] flex-grow bg-white">
        <p className="font-bold text-3xl">CV Revamp Request</p>
        <div className="mt-6 flex">
          <SearchForm />
          <SortForm />
          <FilterForm />
        </div>
        <div className="mt-8">
          <TabComponent />
        </div>
        <div className="flex justify-end mt-5">
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};
export default CvRevampRequest;
