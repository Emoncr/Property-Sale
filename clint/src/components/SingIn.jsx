import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';



const SingIn = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    //======handling form submting function =====//
    const onSubmit = async (formData) => {
        setLoading(true)
        const res = await fetch('/api/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        // console.log(data);
        navigate('/home')
        setLoading(false)
    };


    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <input {...register("email", { required: true })} type="email" placeholder="Email" className="form_input mt-5" />
                {errors.email && <span className='text-red-700 font-semibold text-sm mb-2 mt-1'>This field is required</span>}


                <input {...register("password", { required: true })} type="password" placeholder="Password" className="form_input mt-5" />
                {errors.password && <span className='text-red-700 font-semibold text-sm mb-2 mt-1'>This field is required</span>}


                <button
                    type='submit'
                    disabled={loading}
                    className="btn bg-brand-blue text-white mt-5 rounded-md w-full hover:bg-brand-blue/[.90]">
                    {
                        loading ? 'Loading...' : 'Login'
                    }
                </button>
            </form>

        </>
    )
}

export default SingIn