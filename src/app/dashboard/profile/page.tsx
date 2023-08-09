import ProfileForm from '@/components/profile/ProfileForm';
import React from 'react';

const ProfilePage = () => {
  return (
    <>
      <ProfileForm />
      <div className='mt-[89px] flex w-full justify-end'>
        <button className='text-[#4285F4] underline text-sm font-semibold cursor-pointer'>
          Close Your Account
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
