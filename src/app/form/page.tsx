// @ts-nocheck
"use client";
import React from "react";
import Input from "./input";
import Image from "next/image";
import hangout from "./image/hangout.png";
import Link from "next/link";
import Service from "./service";
import Plan from "./plan";
import axios from "axios";
import Swal from "sweetalert2";
import { getCookies } from "cookies-next";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
  customClass: "toaster",
});

const Form = () => {
  var [formState, setFormState] = useState({});

  const [loading, setLoading] = useState(false);

  function onStateChange(state: any) {
    setFormState((s: any) => {
      return { ...s, ...state, status: "" };
    });
  }

  const submitForm = async () => {
    var cookies = getCookies();
    setLoading(true);
    await axios
      .post(
        "https://nice-story-production.up.railway.app/api/v1/cv-requests/create",
        formState,
        { headers: { Authorization: `Bearer ${cookies["token"]}` } }
      )
      .then((res) => {
        console.log(res);
        Toast.fire({
          icon: "success",
          title: "Form submitted successfully",
        });
      })
      .catch((err) => {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "Error Occured!",
        });
      });

    setLoading(false);
  };

  return (
    <section className="m-auto overflow-y-scroll bg-purple-50 flex items-center w-full h-screen flex-col rounded-lg min-w-[300px]">
      <div className="px-primary flex items-center flex-col rounded-lg max-w-[100vw]">
        <div className="w-full flex items-center flex-col mx-auto my-5">
          <Image
            src={
              "https://lh5.googleusercontent.com/SVovIVT2I4DZTZrt7Ma-kExc5rGOnqEqmEvVLH6AkZfwXJBMZ-_Wk6iSJHAlgBQHTcPmiU3m0boLXLZtNyM5IUyyO_exDoTNFxqcYVKIXPRZfMKvBuL80Y7StU-e3nWKCA=w1355"
            }
            alt="google pic"
            width={100}
            height={600}
            className="bg-cover bg-center w-[810px] lg:h-[600px] h-[600px] lg:w-[810px] rounded-lg"
          />
        </div>
        <div className="w-full flex items-center flex-col mx-auto my-5">
          <Image
            src={hangout}
            alt="google pic"
            width={100}
            hanging={100}
            className="bg-cover bg-center w-[810px] lg:h-[200px] h-[150px] lg:w-[810px] rounded-lg"
          />
        </div>

        <div className="bg-white w-full  max-w-[810px] my-5 mb-4 border border-gray-200 rounded-xl">
          <div className="p-8 border-t-[15px] border-purple-600 rounded-lg">
            <h1 className="text-3xl mb-5">JAPA &apos;S CV Revamp Form</h1>
            <p>
              Ready to unlock your CV&apos;s full potential? Complete our CV
              Revamp form and take the first step towards a standout resume that
              lands you interviews and career opportunities. Our expert team
              will carefully analyze your existing CV, provide personalized
              recommendations, and revamp it to perfection. Don&apos;t miss out
              on this opportunity to elevate your career prospects. Fill out the
              form now and let us transform your CV into a powerful tool for
              success!
            </p>
          </div>

          {/* <div className="flex flex-col p-7 border-t-2 border-gray-100 my-2">
                        <div className="flex gap-4">
                            <p className="text-gray-700">samuelvictoralexander@gmail.com</p>
                            <p> <Link href="/" className="text-blue-600 text-lg mr-4">Switch account</Link></p>
                        </div>
                        <p>Not shared</p>
                    </div> */}

          <div className="border-t-2">
            <p className="text-red-600 p-6">* Indicates required question</p>
          </div>
        </div>

        <Input onInputChange={onStateChange} />
        <Service onServiceChange={onStateChange} />
        <Plan onPlanChange={onStateChange} />
        {/* <div className="text-xl shadow-md bg-white  w-full max-w-[810px] rounded-lg p-8 mb-8">
                <p>Pay for the CV here</p>
            </div> */}

        <div className="w-full flex text-md  lg:text-lg">
          <div className="flex-1">
            <button
              className="  bg-purple-700 hover:bg-purple-600 rounded-lg py-4 px-8 text-white mb-24"
              onClick={submitForm}
              disabled={loading}
            >
              Submit
            </button>
          </div>
          {/* <div className="flex-2">
                        <p><Link href='/' className="text-purple-600">Clear Form</Link></p>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default Form;
