import Input from "@/app/form/input";
import React from "react";
import { useState } from "react";

const JobForms = () => {
  const [formState, setFormState] = useState({});

  function onStateChange(state: any) {
    setFormState((s: any) => {
      return { ...s, ...state, status: "" };
    });
  }
  return <div>{/* <Input onInputChange={onStateChange} /> */}</div>;
};

export default JobForms;
