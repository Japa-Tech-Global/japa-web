"use client";

import { ReactNode, useState } from "react";

interface Props {
  formik?: any;
  name: string;
  className?: string;
  useFormik?: boolean;
  showError?: boolean;
  error?: string;
  children?: ReactNode;
}

function LabelSelect({
  formik,
  name,
  children,
  className = "",
  useFormik = true,
  showError = false,
  error,
  ...rest
}: Props & React.HTMLProps<HTMLSelectElement>) {
  return (
    <div className={"inputContainer " + className}>
      {useFormik ? (
        <>
          {rest.label && (
            <label
              htmlFor={name}
              className={`${
                formik.touched[name] && formik.errors[name] ? "errorText" : ""
              }`}
            >
              {rest.label}

              {rest.required && <span>*</span>}
            </label>
          )}
          <div className="relative">
            <select
              {...rest}
              id={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched[name] && formik.errors[name] ? "inputError" : ""
              }
            >
              {children}
            </select>
          </div>

          {formik.touched[name] && formik.errors[name] && (
            <div className="error">{formik.errors[name]}</div>
          )}
        </>
      ) : (
        <>
          {rest.label && (
            <label htmlFor={name} className={`${showError ? "errorText" : ""}`}>
              {rest.label}
            </label>
          )}
          <div className="relative">
            <select
              {...rest}
              id={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched[name] && formik.errors[name] ? "inputError" : ""
              }
            >
              {children}
            </select>
          </div>

          {showError && <div className="error">{error}</div>}
        </>
      )}
    </div>
  );
}

export default LabelSelect;
