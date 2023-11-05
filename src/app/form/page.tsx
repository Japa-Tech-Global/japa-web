// @ts-nocheck

import Input from "./input";
import Image from "next/image";
import hangout from "./image/hangout.png"
import Link from "next/link";
import Service from './service'
import Plan from "./plan";
import Cloud from './image/cloud.png'
import Email from './image/emailBox.svg'


const Form = () => {
  return (
    <section className="m-auto overflow-y-scroll bg-purple-50 flex items-center w-full h-screen flex-col rounded-lg min-w-[300px]">
        <div className="px-primary flex items-center flex-col rounded-lg max-w-[100vw]">
            <div className="w-full flex items-center flex-col mx-auto my-5">
                <Image src={hangout}
                alt='google pic' 
                width={100} hanging={100} 
                className="bg-cover bg-center w-[810px] lg:h-[200px] h-[150px] lg:w-[810px] rounded-lg"/>
            </div>

            <div className="bg-white w-full  max-w-[810px] my-5 mb-4 border border-gray-200 rounded-xl">
                <div className="p-8 border-t-[15px] border-purple-600 rounded-lg">
                    <h1 className="text-3xl mb-5">JAPA &apos; CV Revamp Form</h1>
                    <p>Ready to unlock your CV&apos;s full potential?  Complete our CV Revamp form and take the first step towards a standout
                        resume that lands you interviews and career opportunities. Our expert team will carefully analyze your existing CV, 
                        provide personalized recommendations, and revamp it to perfection. Don&apos;t miss out on this opportunity to elevate 
                        your career prospects. Fill out the form now and let us transform your CV into a powerful tool for success!
                    </p>
                </div>
                
                    <div className="flex justify-between flex-wrap px-primary border-t-2 border-gray-100 p-7">
                        <div className="flex flex-col">
                            <div className="flex gap-2 flex-wrap">
                                <p className="text-gray-700 font-bold">samuelvictoralexander@gmail.com</p>
                                <p> <Link href="/" className="flex-1 text-blue-600 lg:text-lg mr-4 text-sm">Switch account</Link></p>
                            </div>
                            <div className="flex gap-2">
                                <Image 
                                    src={Email} 
                                    alt="Email symbol"  
                                    width={100} 
                                    height={100} 
                                    className="w-5"
                                />
                                
                                <p>Not shared</p>
                            </div>
                            
                        </div>
                        <div className="w-8 ">
                            <Link href="/">
                                <Image 
                                    src={Cloud} 
                                    width={100} 
                                    height={100}
                                    alt="cloud symbol"
                                />
                            </Link>
                        </div>
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

            <div className="w-full flex text-md  lg:text-lg">
            <div className="flex-1">
                <button className=" bg-purple-700 hover:bg-purple-600 rounded-lg py-4 px-8 text-white mb-24">Submit</button>
            </div>
            <div className="flex-2">
                <p><Link href='/' className="text-purple-600">Clear Form</Link></p>
            </div>
        </div>
        </div>
      

    </section>
  )
}

export default Form;