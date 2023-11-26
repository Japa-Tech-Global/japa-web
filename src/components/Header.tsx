import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi';

export default function Header({page,auth,userInfo,signOut,menuStatus,setMenuStatus}){

  return(
    <>
      
      { page !== 'home' ? <header className=' p-7 pb-5'>
        <h1 className='text-primary text-2xl'>
          <Link href='/' className='font-extrabold'>JAPA</Link>
        </h1>
      </header> 
      
      : 

      <header className="flex justify-between items-center px-7 py-5">
        <div>
            <h1 className='text-primary text-2xl'>
              <Link href='/' className='font-extrabold'>JAPA</Link>
            </h1>
        </div>

        <div className="hidden text-xs font-medium sm:flex gap-7 md:gap-16">
            <Link href='/' className="border-b-2 border-primary">Home</Link>
            <select className="border-0 p-0 m-0 focus:border-transparent focus:outline-none">
              <option value="">            <
                Link href={ auth ? '/form' : '/login'}>CV Revamp</Link>
              </option>
              <option value="" className="">Cv Template</option>
              <option value="">Others</option>
            </select>
            <Link href='/jobs'>Jobs</Link>
            <Link href='/courses'>Courses</Link>
            <Link href='/blog'>Blog</Link>
        </div>

        <div className="hidden sm:flex gap-3">
          { auth ?
            <div onClick={()=>setMenuStatus(!menuStatus)}><p className="bg-primary rounded-full text-white w-8 h-8 cursor-pointer flex justify-center items-center">{userInfo&&userInfo?.firstName.charAt(0)}</p></div>
            :
            <>
                <Link href='/register' className="font-semibold text-xs py-2 px-9 md:px-12 border border-gray-700 rounded-[4px]">Sign Up</Link>
                <Link href='/login' className="font-semibold text-sm py-2 px-9 md:px-12 rounded-[4px] bg-primary text-white">Sign In</Link>
              </>
          }
        </div>

        <div className="block sm:hidden">
        { auth ?
          <div onClick={()=>setMenuStatus(!menuStatus)}><p className="bg-primary rounded-full text-white w-8 h-8 cursor-pointer flex justify-center items-center">{userInfo&&userInfo?.firstName.charAt(0)}</p></div>
          :
          (menuStatus ? 
            <IoMdClose size={22} onClick={()=>setMenuStatus(!menuStatus)} className='cursor-pointer'/> 
            : <FiMenu size={22} onClick={()=>setMenuStatus(!menuStatus)} className='cursor-pointer'/>)
          }
        </div>

        {
          menuStatus &&
          <div className="z-20 absolute right-2 top-24 text-white font-medium bg-primary p-4  w-[200px] rounded-md text-[13px]">
            { auth &&
              <>
                <div className="block mt-3 mb-3 py-2 px-3 -mx-1 text-center bg-bgPrimary text-white rounded">{userInfo.firstName + ' ' + userInfo.lastName}</div>
              </>
            }
            <Link href='/' className="block sm:hidden"> Home </Link>
            <Link href={ auth ? '/form' : '/login'} className="block sm:hidden">CV Revamp</Link>
            <Link href='/jobs' className="block sm:hidden my-3 "> Jobs </Link>
            <Link href='/courses' className="block sm:hidden my-3 "> Courses </Link>
            <Link href='/blog' className="block sm:hidden my-3 "> Blog </Link>
            {auth && <div onClick={()=>signOut()} className="cursor-pointer block  py-2 px-3 -mx-1 text-center bg-white text-black rounded">Sign Out</div>}
            { !auth &&
              <>
                <Link href='/register' className="block mt-3 py-2 px-3 -mx-1 text-center bg-bgPrimary text-primary rounded">Sign Up</Link>
                <Link href='/login' className="block mt-3 py-2 px-3 -mx-1 text-center bg-bgPrimary text-primary rounded">Sign In</Link>
              </>
            }
          </div>
        }

      </header>
      }

    </>
  )
}



// import Link from "next/link";
// import { useState } from "react";
// import { IoMdClose } from 'react-icons/io'
// import { FiMenu } from 'react-icons/fi';

// export default function Header({ page }) {
//   const [menuStatus, setMenuStatus] = useState(false);

//   return (
//     <>

//       {page !== 'home' ? <header className=' p-7 pb-5'>
//         <h1 className='text-primary text-2xl'>
//           <Link href='/' className='font-extrabold'>JAPA</Link>
//         </h1>
//       </header> :

//         <header className="flex justify-between items-center px-7 py-5">
//           <div>
//             <h1 className='text-primary text-2xl'>
//               <Link href='/' className='font-extrabold'>JAPA</Link>
//             </h1>
//           </div>

//           <div className="hidden text-xs font-medium sm:flex gap-7 md:gap-16">
//             <Link href='/' className="border-b-2 border-primary">Home</Link>
//             <Link href='/form'>Jobs</Link>
//             <Link href='/#jobs'>Jobs</Link>
//             <Link href='/#courses'>Courses</Link>
//             <Link href='/#blog'>Blog</Link>
//           </div>

//           <div className="hidden sm:flex gap-3">
//             <Link href='/sign_up' className="font-semibold text-xs py-2 px-9 md:px-12 border border-gray-700 rounded-[4px]">Sign Up</Link>
//             <Link href='/log_in' className="font-semibold text-sm py-2 px-9 md:px-12 rounded-[4px] bg-primary text-white">Sign In</Link>
//           </div>

//           <div className="block sm:hidden">
//             {menuStatus ?
//               <IoMdClose size={22} onClick={() => setMenuStatus(!menuStatus)} className='cursor-pointer' />
//               : <FiMenu size={22} onClick={() => setMenuStatus(!menuStatus)} className='cursor-pointer' />}
//           </div>

//           {menuStatus &&
//             <div className="z-20 absolute right-2 top-24 text-white font-medium bg-primary p-7 pt-10 w-[200px] rounded-md text-[13px]">
//               <Link href='/' className="block">Home</Link>
//               <Link href='/' className="block my-3 ">Jobs</Link>
//               <Link href='/' className="block my-3 ">Courses</Link>
//               <Link href='/' className="block my-3 ">Blog</Link>
//               <Link href='/sign_up' className="block mt-3 py-2 px-3 -mx-1 text-center bg-white text-primary rounded">Sign Up</Link>
//               <Link href='/log_in' className="block mt-3 py-2 px-3 -mx-1 text-center bg-white text-primary rounded">Sign In</Link>
//             </div>
//           }

//         </header>
//       }

//     </>
//   )
// }