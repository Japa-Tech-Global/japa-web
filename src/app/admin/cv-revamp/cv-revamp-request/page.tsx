import { FilterForm } from "./Component/FilterForm/FilterForm";
import SearchForm from "./Component/SearchForm/SearchForm";
import { SortForm } from "./Component/SortForm/SortForm";
import { TabComponent } from "./Component/TabComponent/TabComponent";
// import { Tab } from "./Component/TabComponent/TabComponent";

const CvRevampRequest = () => {
  return (
    <div className="px-20 py-[5em]">
      <p className="font-bold text-3xl">CV Revamp Request</p>
      <div className="mt-6 flex">
        <SearchForm />
        <SortForm />
        <FilterForm />
      </div>
      <div className="mt-8">
        <TabComponent />
      </div>
    </div>
  );
};
export default CvRevampRequest;
