"use client";
//@ts-nocheck
import React, { ChangeEvent, useEffect, useState } from "react";
import Users from "./data/data";

type StateChangeCallback = (state: any) => null;

const Input: React.FC<{ onInputChange: StateChangeCallback }> = ({
  onInputChange,
}) => {
  const [state, setState] = useState<{}>();

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setState((e) => {
      return { ...e, [event.target.name]: event.target.value };
    });
  }

  useEffect(() => {
    onInputChange(state);
  }, [state, onInputChange]);

  return (
    <div className="w-full flex justify-center flex-col items-center mx-auto">
      {Users.map((user) => {
        return (
          <div
            key={user.id}
            className="w-full mb-8 p-8 bg-white  border-spacing-2 rounded-lg shadow-md"
          >
            <p>
              {user.name} <span className="text-red-600">*</span>
            </p>
            <input
              type="text"
              name={user.key}
              onChange={onChange}
              placeholder="Your answer"
              className="w-full mt-8 focus:outline-none border-b-2 border-gray-500 border-t-0 active:border-none"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Input;
