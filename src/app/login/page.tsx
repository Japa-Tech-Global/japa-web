"use client"
import Header from '@/components/Header';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { setCookie } from 'cookies-next';
import HelloJapa from '../../assets/brand/HelloJapa.svg'
import JapaLogo from '../../assets/shapes/JapaLogo.svg'


export default function LogIn() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const router = useRouter();

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
    // className:'w-[100px]'
  });
  // Mikeidowu1.
  function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    axios.post('https://nice-story-production.up.railway.app/api/v1/auth/login',{
      email:email,
      password:password,
    })
    .then(res=>{
      console.log(res);
      const data = res.data;
      if(data.succeeded === true){
        Toast.fire({
          icon: 'success',
          title: data.message
        });    
        setCookie('token', data.token, { maxAge: 60 * 60 * 24 * 30, httpOnly: false, secure: true, sameSite: 'strict', path: '/' });
        localStorage.setItem('user', JSON.stringify({firstName:data.data.firstName,lastName:data.data.lastName}));
        router.push('/dashboard');
        
      }else{
        Toast.fire({
          icon: 'error',
          title: 'Error Occured!'
        });
      }

    }).catch(err=>{
      console.log(err);
      Toast.fire({
        icon: 'error',
        title: 'Error Occured!'
      });
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <>
    <Header page={'login'} auth={undefined} userInfo={undefined} signOut={undefined} menuStatus={undefined} setMenuStatus={undefined}/>
    <main className="w-screen h-screen flex gap-16 justify-center items-center overflow-hidden">
            <div className='flex-1'>
              <Image src={HelloJapa} width={100} height={100} alt='Hello Japa' className='w-full h-full object-cover'/>
            </div>

          <div className='flex flex-1 flex-col justify-center items-center lg:items-start'>
            <div className='text-center'>
              <h2 className=' mb-8'>
                <Image src={JapaLogo} width={150} height={150} alt='JapaLogo'/>
              </h2>
              <h2 className='text-2xl font-bold w-[234px] text-left'>
                Welcome Back!
              </h2>
            </div>
      
            <form className='pt-2 text-xs w-[80vw] sm:w-[60vw] md:w-[40vw]' onSubmit={(e)=>handleSubmit(e)}>
              <div className='pt-5'>
                <p className='text-left pb-1 font-medium'>Email Address</p>
                <input className='w-full p-3 border border-txtinput rounded-[5px]' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' type='email' required={true} placeholder='e.g: Samuel John'/>
              </div>
      
              <div className='pt-5'>
                <p className='text-left pb-1 font-medium'>Password</p>
                <input className='w-full p-3 border border-txtinput rounded-[5px]' value={password} onChange={(e)=>setPassword(e.target.value)} name='password' type='password' required={true} placeholder='Your Password'/>
                <p className='text-right pt-1'><Link href='#' className='text-primary font-medium mb-2'>Forgot Password?</Link></p>
              </div>
      
              <button className={`bg-primary text-white w-full mt-5 py-3 rounded-[5px] px-4 font-semibold ${loading && 'opacity-30'}`} disabled={loading ? true : false}>Log In</button>
      
            </form>
      
      
            <div className='text-xs pt-8'>
              <p>Don&apos;t have an account? <Link className='text-primary font-medium' href='/register'>Sign Up</Link></p>
            </div>
          </div>
      </main>
    </>
  )
}

