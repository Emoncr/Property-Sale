import React, { useState } from 'react'
import Singup from '../components/Singup'
import SingIn from '../components/SingIn'

const Login = () => {

    const [isNewUser, setisNewUser] = useState(false)



    return (
        <section className='form-section py-10 md:py-20 '>
            <div className="container ">
                <div className="form-container px-4 sm:px-8 bg-white py-6 pb-8 sm:py-9 sm:pb-12 max-w-lg mx-auto rounded-sm border-[1px] border-brand-blue/50 shadow-brand shadow-brand-blue/40">
                    <h1 className='text-left text-brand-blue mb-3 font-medium font-heading text-md sm:text-xl'>
                        {
                            isNewUser ? "Login" : 'Create an account'
                        }
                    </h1>
                    {
                        isNewUser ? <SingIn /> : <Singup />
                    }
                    <p className="content text-center font-heading text-black mt-4">
                        {
                            isNewUser ? "Don’t have an account?" : 'Already have an account?'
                        }
                        <u className='ml-1 border-brand-blue text-brand-blue cursor-pointer'
                            onClick={() => setisNewUser(!isNewUser)}
                        >
                            {isNewUser ? 'Create an account' : 'Login'}
                        </u>
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Login