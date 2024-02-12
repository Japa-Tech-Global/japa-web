"use client";
import { useState } from "react";
import cx from "classnames";
import TableComponent from "../Table/TableComponent";

const TabContent = ({ activeTab }) => {
  if (activeTab === 1) {
    return (
      <div>
        <TableComponent />
      </div>
    );
  } else if (activeTab === 2) {
    return <div>Content for Tab 2</div>;
  }

  return null;
};

export const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="">
      <div className="flex justify-between border-b border-grey-300 ">
        <div
          className={cx(
            "cursor-pointer py-2 px-4 w-[500px] text-center",
            activeTab === 1 ? "border-b-2 border-purple-500" : ""
          )}
          onClick={() => handleTabClick(1)}
        >
          Pending
        </div>

        <div
          className={cx(
            "cursor-pointer py-2 px-4 w-[500px] text-center",
            activeTab === 2 ? "border-b-2 border-purple-500" : ""
          )}
          onClick={() => handleTabClick(2)}
        >
          Completed
        </div>
      </div>
      <div className="mt-4">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};
