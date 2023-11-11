import React, { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';




const Theme = () => {

    return (
        <div className='sticky  z-50 top-1/2 transform -translate-y-1/2 right-0  p-0'>
            <div className="button_container">
                <button className='p-2 rounded-l-md bg-white'>
                    <AiOutlineSetting className='text-xl sm:text-3xl'/>
                </button>
            </div>
        </div>
    );
};

export default Theme; 
