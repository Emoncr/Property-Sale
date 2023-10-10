import React from 'react'

const SingIn = () => {
    return (
        <form>
            <input type="text" placeholder="Username" className="form_input" />
            <input type="password" placeholder="Password" className="form_input mt-5" />
            <div className="btn bg-brand-blue text-white mt-5 rounded-md w-full hover:bg-brand-blue/[.90]">Login</div>
        </form>
    )
}

export default SingIn