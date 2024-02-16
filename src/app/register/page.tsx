"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { PiWarningFill } from 'react-icons/pi';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Swal from 'sweetalert2';
import axios from 'axios';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import HelloJapa from "../../assets/brand/HelloJapa.svg"


export default function SignUp() {
  const [first_name,setFirst_name] = useState('');
  const [last_name,setLast_name] = useState('');
  const [email,setEmail] = useState('');
  const [phone_number,setPhone_number] = useState('');
  const [age_range,setAge_range] = useState('');
  const [gender,setGender] = useState('');
  const [password,setPassword] = useState('');
  const [validphone_number,setValidphone_number] = useState(true);
  const [validEmail,setValidemail] = useState(true);
  const [showPassword,setShowpassword] = useState(false);
  const [validpassword,setValidpassword] = useState(false);
  const [loading,setLoading] = useState(false);
  const router = useRouter();

  function isValidEmail(e) {
    setEmail(e.target.value);
    if(/\S+@\S+\.\S+/.test(e.target.value)){
      setValidemail(true);
    }else{
      setValidemail(false);
    }
  }

  function isValidatePassword(e){
    setPassword(e.target.value);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/;
    console.log(passwordRegex.test(e.target.value));
    if(passwordRegex.test(e.target.value)){
      setValidpassword(true);
    }else{
      setValidpassword(false);
    }
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
    customClass:'toaster'
  });

  function handleSubmit(e){
    e.preventDefault();
    if(validEmail && validpassword && phone_number.length === 13){
      setLoading(true);
      axios.post('http://[::1]:3000/api/v1/auth/register',{
        firstName:first_name,
        lastName:last_name,
        email:email,
        phone:phone_number,
        ageRange:age_range,
        gender:gender,
        password:password,
      })
      .then(res=>{
        Toast.fire({
          icon: 'success',
          title: 'Signed Up Successfully. Log in to access your account'
        });
        router.push('/login');
      }).catch(err=>{
        console.log(err);
        Toast.fire({
          icon: 'error',
          title: 'Error Occured!'
        });
      }).finally(()=>{
        setLoading(false);
      });
    }
  }

  return (
    <>
    <Header page={'register'} auth={undefined} userInfo={undefined} signOut={undefined} menuStatus={undefined} setMenuStatus={undefined}/>
      <main className="w-screen h-screen flex items-center text-txtPrimary gap-16 bg-[#f3f4f6] overflow-hidden">
        
        <div className='h-screen w-full  flex-1 relative'>
                <Image src={HelloJapa} width={1000} height={1000} alt='Hello Japa' className='w-full object-cover h-full'/>
        </div>

        <div className='flex-1 mb-8 md:my-32 text-center '>
          <div className='text-center'>
            <h2 className='text-3xl font-semibold pb-3'>
              Create Account
            </h2>
            <p className='text-sm text-center'>
              Are you ready to take the next step towards a succesful future?
            </p>
          </div>
    
          <form className='pt-2 text-xs w-[80vw] sm:w-[60vw] md:w-[40vw]' onSubmit={(e)=>handleSubmit(e)}>
            <div className='pt-5 flex justify-between gap-2'>
              <div className='flex-1'>
                <p className='text-left pb-1'>First Name</p>
                <input className='w-full p-3 border border-txtinput rounded-[5px]' name='first_name' value={first_name} required={true} onChange={(e)=>setFirst_name(e.target.value)} type='text' placeholder='Newton Adeola'/>
              </div>
    
              <div className='flex-1'>
                <p className='text-left pb-1'>Last Name</p>
                <input className='w-full p-3 border border-txtinput rounded-[5px]' name='last_name' value={last_name} required={true} onChange={(e)=>setLast_name(e.target.value)} type='text' placeholder='Idowu'/>
              </div>
            </div>
            
            <div className='pt-5'>
              <p className='text-left pb-1'>Email Address</p>
              <input className='w-full p-3 border border-txtinput rounded-[5px]' name='text' value={email} onChange={(e)=>isValidEmail(e)} type='email' required={true} placeholder='e.g: Samuel John'/>
              <div className='flex items-center mt-1 text-[10px] text-red-600'>
                { email && !validEmail &&
                  <>
                    <span className='mr-1'><PiWarningFill/></span>
                    <p>Your Email Address must be unique</p>
                  </>
                }
              </div>
            </div>
    
            <div className={`${ validEmail ? 'pt-5' : 'pt-1'}`}>
              <p className='text-left pb-1'>Phone Number</p>
              <PhoneInput
                country={'ng'}
                value={phone_number}
                onChange={(e)=>setPhone_number(e)}
                inputProps={{
                  required:true
                }}
                // className='w-full'
                defaultMask='... ... ....'
              />
                <div className='flex items-center mt-1 text-[10px] text-red-600'>
                  {phone_number && phone_number.length < 13 &&
                    <>
                      <span className='mr-1'><PiWarningFill/></span>
                      <p>Your Phone Number must be unique</p>
                    </>
                  }
                </div>
            </div>
    
            <div className={`${validphone_number ? 'pt-5' : 'pt-1'} flex justify-between gap-2`}>
              <div className='flex-1'>
                <p className='text-left pb-1'>Age Range</p>
                <select name='age_range' value={age_range} onChange={(e)=>setAge_range(e.target.value)} required={true} className='w-full p-3 border border-txtinput rounded-[5px]'>
                  <option></option>
                  <option>10 - 17</option>
                  <option>18 - 25</option>
                  <option>16 - 32</option>
                  <option>Above 32</option>
                </select>
              </div>
    
              <div className='flex-1'>
                <p className='text-left pb-1'>Gender</p>
                <select name='gender' value={gender} onChange={(e)=>setGender(e.target.value)} required={true} className='w-full p-3 border border-txtinput rounded-[5px]'>
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
    
            <div className='pt-5'>
              <p className='text-left pb-1'>Password</p>
              <div className='flex items-center'>
                <input className='w-full p-3 border border-txtinput rounded-[5px]' name='password' value={password} 
                  onChange={(e)=>isValidatePassword(e)} type={showPassword ? 'text' : 'password'} 
                  required={true} placeholder='Your Password'/>
                <span className='relative right -ml-9'>{showPassword ? 
                  <AiFillEye className='text-xl cursor-pointer' onClick={()=>setShowpassword(!showPassword)}/> : 
                  <AiFillEyeInvisible className='text-xl cursor-pointer' onClick={()=>setShowpassword(!showPassword)}/>}</span>
              </div>
              <div className='flex items-center mt-1 text-[10px] text-red-600'>
                { password && password.length < 8 &&
                  <>
                    <span className='mr-1'><PiWarningFill/></span>
                    <p>Must be at least 8 characters</p>
                  </>
                }
              </div>
              <div className='flex items-center mt-1 text-[10px] text-red-600'>
                { password && !validpassword &&
                  <>
                    <span className='mr-1'><PiWarningFill/></span>
                    <p>Must contain a capital letter, small letter, a number and a symbol</p>
                  </>
                }
              </div>
            </div>
    
            <button className={`bg-primary text-white w-full mt-5 py-3 rounded-[5px] px-4 font-semibold ${loading && 'opacity-30'}`} disabled={loading ? true : false}>Sign Up</button>
    
          </form>
    
    
          <div className='text-xs pt-16'>
            <p>Already have an account? <Link className='text-primary font-medium' href='/login'>Log In</Link></p>
          </div>
        </div>
  
      </main>
    </>
  )
}
