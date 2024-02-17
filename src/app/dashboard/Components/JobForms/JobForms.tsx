"use client";
import React, { useState, useEffect, ChangeEvent } from "react";

type InputFormsProps = {
  onInputChange: (state: Record<string, string>) => void;
  label?: string; // Add a label prop
  placeholder?: string;
};

const InputForms: React.FC<InputFormsProps> = ({
  onInputChange,
  label,
  placeholder,
}) => {
  const [state, setState] = useState<Record<string, string>>({});

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  useEffect(() => {
    onInputChange(state);
  }, [state, onInputChange]);

  return (
    <div>
      <label className="text-sm py-4">{label}</label>
      <input
        type="text"
        onChange={onChange}
        name="email"
        className="w-full border rounded-md placeholder:text-[#AEAAAE] text-[12px]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForms;
