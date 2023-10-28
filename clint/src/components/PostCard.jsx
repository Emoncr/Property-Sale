import React from 'react'
import { FaBath, FaBed, FaCheck } from "react-icons/fa"
const PostCard = () => {
    return (
        <>
        <div className="cursor-pointer rounded-md  bg-white  shadow-lg hover:shadow-xl">
            <div className="relative flex items-end overflow-hidden rounded-md ">
                <img className='hover:scale-105 duration-300' src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg" alt="wallpaper" />

                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-sm bg-brand-blue px-2 py-1 shadow-md">
                    <span className="ml-1 text-sm text-white uppercase font-heading">
                        For sale
                    </span>
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-brand-blue font-heading truncate">The Malta Hotel</h2>
                <p className="mt-1 text-sm text-slate-500 font-content font-medium truncate"> SVG React icons of popular icon packs using ES6 imports. Latest version: 4.11.0, last published: 2 months ago. Start using react-icons in</p>

                <div className='mt-3 flex items-end justify-start'>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><span className='font-heading font-bold mr-1'>4</span> Bed<FaBed className='ml-1' /></p>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><span className='font-heading font-bold mr-1'>4</span> Bed<FaBed className='ml-1' /></p>
                </div>
                <div className='mt-2 flex items-end justify-start'>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className='mr-1 mt-[2px] text-green-600' />parking</p>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className='mr-1 mt-[2px] text-green-600' />furnished</p>
                </div>
                <div className="mt-3 flex items-end justify-between">
                    <p>
                        <span className="text-lg font-bold text-brand-blue">$1,421</span>
                        <span className="text-sm text-slate-400">/night</span>
                    </p>

                    <div className="group inline-flex rounded-xl bg-brand-blue/10 p-2 hover:bg-brand-blue/25 duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-blue group-hover:text-brand-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                    </div>
                </div>

                <div className='mt-4 flex items-end justify-between'>
                    <button className='bg-brand-blue py-2 px-7 rounded-sm  font-heading text-white hover:opacity-95 text-sm'>Edit</button>
                    <button className='bg-red-800 py-2 px-5 rounded-sm  font-heading text-white hover:opacity-95 text-sm'>Delete</button>
                </div>
            </div>
        </div><div className="cursor-pointer rounded-md  bg-white  shadow-lg hover:shadow-xl">
            <div className="relative flex items-end overflow-hidden rounded-md ">
                <img className='hover:scale-105 duration-300' src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg" alt="wallpaper" />

                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-sm bg-brand-blue px-2 py-1 shadow-md">
                    <span className="ml-1 text-sm text-white uppercase font-heading">
                        For sale
                    </span>
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-brand-blue font-heading truncate">The Malta Hotel</h2>
                <p className="mt-1 text-sm text-slate-500 font-content font-medium truncate"> SVG React icons of popular icon packs using ES6 imports. Latest version: 4.11.0, last published: 2 months ago. Start using react-icons in</p>

                <div className='mt-3 flex items-end justify-start'>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><span className='font-heading font-bold mr-1'>4</span> Bed<FaBed className='ml-1' /></p>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><span className='font-heading font-bold mr-1'>4</span> Bed<FaBed className='ml-1' /></p>
                </div>
                <div className='mt-2 flex items-end justify-start'>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className='mr-1 mt-[2px] text-green-600' />parking</p>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className='mr-1 mt-[2px] text-green-600' />furnished</p>
                </div>
                <div className="mt-3 flex items-end justify-between">
                    <p>
                        <span className="text-lg font-bold text-brand-blue">$1,421</span>
                        <span className="text-sm text-slate-400">/night</span>
                    </p>

                    <div className="group inline-flex rounded-xl bg-brand-blue/10 p-2 hover:bg-brand-blue/25 duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-blue group-hover:text-brand-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                    </div>
                </div>

                <div className='mt-4 flex items-end justify-between'>
                    <button className='bg-brand-blue py-2 px-7 rounded-sm  font-heading text-white hover:opacity-95 text-sm'>Edit</button>
                    <button className='bg-red-800 py-2 px-5 rounded-sm  font-heading text-white hover:opacity-95 text-sm'>Delete</button>
                </div>
            </div>
        </div><div className="cursor-pointer rounded-md  bg-white  shadow-lg hover:shadow-xl">
            <div className="relative flex items-end overflow-hidden rounded-md ">
                <img className='hover:scale-105 duration-300' src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg" alt="wallpaper" />

                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-sm bg-brand-blue px-2 py-1 shadow-md">
                    <span className="ml-1 text-sm text-white uppercase font-heading">
                        For sale
                    </span>
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-brand-blue font-heading truncate">The Malta Hotel</h2>
                <p className="mt-1 text-sm text-slate-500 font-content font-medium truncate"> SVG React icons of popular icon packs using ES6 imports. Latest version: 4.11.0, last published: 2 months ago. Start using react-icons in</p>

                <div className='mt-3 flex items-end justify-start'>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><span className='font-heading font-bold mr-1'>4</span> Bed<FaBed className='ml-1' /></p>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><span className='font-heading font-bold mr-1'>4</span> Bed<FaBed className='ml-1' /></p>
                </div>
                <div className='mt-2 flex items-end justify-start'>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className='mr-1 mt-[2px] text-green-600' />parking</p>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className='mr-1 mt-[2px] text-green-600' />furnished</p>
                </div>
                <div className="mt-3 flex items-end justify-between">
                    <p>
                        <span className="text-lg font-bold text-brand-blue">$1,421</span>
                        <span className="text-sm text-slate-400">/night</span>
                    </p>

                    <div className="group inline-flex rounded-xl bg-brand-blue/10 p-2 hover:bg-brand-blue/25 duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-blue group-hover:text-brand-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                    </div>
                </div>

                <div className='mt-4 flex items-end justify-between'>
                    <button className='bg-brand-blue py-2 px-7 rounded-sm  font-heading text-white hover:opacity-95 text-sm'>Edit</button>
                    <button className='bg-red-800 py-2 px-5 rounded-sm  font-heading text-white hover:opacity-95 text-sm'>Delete</button>
                </div>
            </div>
        </div><div className="cursor-pointer rounded-md  bg-white  shadow-lg hover:shadow-xl">
            <div className="relative flex items-end overflow-hidden rounded-md ">
                <img className='hover:scale-105 duration-300' src="https://thumbnails.production.thenounproject.com/gA9eZOvsBYSHrMumgrslmRGoBto=/fit-in/1000x1000/photos.production.thenounproject.com/photos/BCBA88B6-5B41-4B50-A786-E60CAA0ECDA3.jpg" alt="wallpaper" />

                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-sm bg-brand-blue px-2 py-1 shadow-md">
                    <span className="ml-1 text-sm text-white uppercase font-heading">
                        For sale
                    </span>
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-brand-blue font-heading truncate">The Malta Hotel</h2>
                <p className="mt-1 text-sm text-slate-500 font-content font-medium truncate"> SVG React icons of popular icon packs using ES6 imports. Latest version: 4.11.0, last published: 2 months ago. Start using react-icons in</p>

                <div className='mt-3 flex items-end justify-start'>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><span className='font-heading font-bold mr-1'>4</span> Bed<FaBed className='ml-1' /></p>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><span className='font-heading font-bold mr-1'>4</span> Bed<FaBed className='ml-1' /></p>
                </div>
                <div className='mt-2 flex items-end justify-start'>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className='mr-1 mt-[2px] text-green-600' />parking</p>
                    <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className='mr-1 mt-[2px] text-green-600' />furnished</p>
                </div>
                <div className="mt-3 flex items-end justify-between">
                    <p>
                        <span className="text-lg font-bold text-brand-blue">$1,421</span>
                        <span className="text-sm text-slate-400">/night</span>
                    </p>

                    <div className="group inline-flex rounded-xl bg-brand-blue/10 p-2 hover:bg-brand-blue/25 duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-blue group-hover:text-brand-blue" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                    </div>
                </div>

                <div className='mt-4 flex items-end justify-between'>
                    <button className='bg-brand-blue py-2 px-7 rounded-sm  font-heading text-white hover:opacity-95 text-sm'>Edit</button>
                    <button className='bg-red-800 py-2 px-5 rounded-sm  font-heading text-white hover:opacity-95 text-sm'>Delete</button>
                </div>
            </div>
        </div>
        </>

    )
}

export default PostCard