//@ts-nocheck
"use client"
import Link from "next/link"

const Button = () => {
  return (
        <div className=" bg-purple-600 hover:bg-purple-700 cursor-pointer text-white mb-48 rounded-lg px-8 py-2 text-center">
            <Link href="/">
                Submit
            </Link>
        </div>
  )
}

export default Button