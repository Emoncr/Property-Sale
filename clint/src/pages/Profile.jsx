import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'

const Profile = () => {
  const { currentUser } = useSelector(state => state.user)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




  return (
    <section className='py-10 sm:py-20'>
      <div className="container !max-w-lg mx-auto">
        <div className="profile_info">
          <form className='flex items-center justify-center flex-col'>
            <img src={currentUser.avatar} className='h-24 w-24 mb-3 rounded-full border-[1px]  border-brand-blue' alt="profile image" />

            <input defaultValue={currentUser.username} {...register("username", { required: true })} type="text" placeholder="Username" className="form_input bg-slate-200 rounded-md !pl-3 mt-5 !border-[1px] focus:!border-brand-blue" />


            <input defaultValue={currentUser.email} {...register("email", { required: true })} type="email" placeholder="Username" className=" mt-3 form_input bg-slate-200 rounded-md !pl-3 !border-[1px] focus:!border-brand-blue" />


            <input  {...register("password", { required: true })} type="password" placeholder="Password" className="mt-3 form_input bg-slate-200 rounded-md !pl-3 !border-[1px] focus:!border-brand-blue" />

            <button type='submit' className='py-2 px-5 bg-brand-blue text-white rounded-md w-full mt-4 hover:opacity-90'>Save</button>
          </form>
          <div className="btns-container flex justify-between items-center">
            <button className='py-2 px-5 bg-brand-blue text-white rounded-md font-content  mt-2 hover:opacity-90'>Create Post</button>

            <button className='py-2 px-5 bg-red-800  text-white font-content rounded-md mt-2 hover:opacity-90'>Sign Out</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Profile