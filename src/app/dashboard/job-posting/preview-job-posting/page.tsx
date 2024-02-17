"use client";
import Button from "@/app/onboarding/Components/Button/Button";
import Link from "next/link";
import { Modal } from "flowbite-react";
import { useState } from "react";
import Image from "next/image";
import CheckSuccess from "../../../onboarding/assets/ep_success-filled.png"

const PreviewJobPosting = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="mt-[8.8rem]">
      <p className="font-bold text-lg">Preview Job Posting</p>
      <div className="mt-[3rem]">
        <div className="flex justify-end gap-10">
          <button className="bg-transparent text-[#7D30EE] underline">
            Save for later
          </button>
          <Button onClick={() => setOpenModal(true)}>
            <Link href={"/dashboard/job-posting/preview-job-posting"}>
              Publish
            </Link>
          </Button>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Body>
              <div className="space-y-6">
                <div className="flex justify-center">
                    <Image src={CheckSuccess} width={100} height={100} alt="check sucess"/>
                </div>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center">
                  Congratulations your job posting has been succesfully created
                  and is now live for the world to see.
                </p>
              </div>
            </Modal.Body>
            <div className="p-10 flex justify-center">
              <button
                className="bg-[#7d30ee] w-full text-white rounded-md py-4"
                onClick={() => setOpenModal(false)}
              >
                View Live Job Posting
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default PreviewJobPosting;
