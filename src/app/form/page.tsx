// @ts-nocheck

// import cloud from "./image/cloud.png"
import Input from "./input";
import Image from "next/image";
import hangout from "./image/hangout.png"
import Link from "next/link";
import Service from './service'
import Plan from "./plan";
const Form = () => {
  return (
    <section className="overflow-y-scroll bg-[#f5f6f7] flex w-full h-screen flex-col rounded-lg overflow-hidden">
        <div className="px-primary flex items-center flex-col  rounded-lg">
            <div className="w-full flex items-center flex-col mx-auto my-5">
                <Image src={hangout}
                alt='google pic' 
                width={100} hanging={100} 
                className="bg-cover bg-center h-[200px] w-[810px] rounded-lg"/>
            </div>

            <div className="bg-white w-full  max-w-[810px] my-5 mb-4 border border-gray-200 rounded-xl">
                <div className="p-8 border-t-[15px] border-purple-600 rounded-lg">
                    <h1 className="text-3xl mb-5">JAPA's CV Revamp Form</h1>
                    <p>Ready to unlock your CV's full potential?  Complete our CV Revamp form and take the first step towards a standout
                        resume that lands you interviews and career opportunities. Our expert team will carefully analyze your existing CV, 
                        provide personalized recommendations, and revamp it to perfection. Don't miss out on this opportunity to elevate 
                        your career prospects. Fill out the form now and let us transform your CV into a powerful tool for success!
                    </p>
                </div>
                
                    <div className="flex flex-col p-7 border-t-2 border-gray-100 my-2">
                        <div className="flex gap-4">
                            <p className="text-gray-700">samuelvictoralexander@gmail.com</p>
                            <p> <Link href="/" className="text-blue-600 text-lg mr-4">Switch account</Link></p>
                        </div>
                        <p>Not shared</p>
                    </div>

                    <div className="border-t-2">
                        <p className="text-red-600 p-6">* Indicates required question</p>
                    </div>
            </div>
            <Input />
            <Service />
            <Plan />
            <div className="text-xl shadow-md bg-white  w-full max-w-[810px] rounded-lg p-8 mb-8">
                <p>Pay for the CV here</p>
            </div>
        </div>
      
        <div className="flex justify-center gap-[37rem]">
            <div className="flex justify-start">
                <button className=" bg-purple-700 hover:bg-purple-600 rounded-lg py-4 px-8 text-white mb-24">Submit</button>
            </div>
            <div className="flex justify-end">
                <p><Link href='/' className="text-purple-600">Clear Form</Link></p>
            </div>
        </div>
    </section>
  )
}

export default Form;