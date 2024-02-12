import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";

interface FormFields {
  role: string;
  jobCategory: string;
  location: string;
}

export default function InputField() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="text-black block">First Name</label>
          <input
            {...register("role", {
              required: "First Name is required",
            })}
            type="text"
            placeholder="First Name"
            className="py-2 px-10 mr-3 text-black border border-1 rounded-md"
          />
          {errors.role && <p className="text-red-600">{errors.role.message}</p>}
        </div>
      </form>
    </>
  );
}