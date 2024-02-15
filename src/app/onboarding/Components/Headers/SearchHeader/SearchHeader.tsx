import React from "react";
import { Inputs } from "../../Inputs/Inputs";
import Button from "../../Button/Button";

const SearchHeader = () => {
  return (
    <div className="flex justify-center gap-10">
      <div className="flex justify-center gap-6 items-center py-7">
        <p>Search Courses</p>
        <Inputs placeholder="What do you want to learn?" type={"text"} />
        <Button>Search</Button>
      </div>
      
    </div>
  );
};

export default SearchHeader;
