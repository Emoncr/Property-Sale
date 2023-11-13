import React from 'react'
import { FaBath, FaBed, FaCamera, FaCheck } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';





const PostCard = ({ postInfo }) => {
    const {
        bed,
        address,
        bath,
        description,
        discountPrice,
        furnished,
        imgUrl,
        offer,
        parking,
        price,
        title,
        type,
        _id } = postInfo.post;
    const navigate = useNavigate();

    return (
        <>
            <div
                className="rounded-md  bg-white  shadow-lg hover:shadow-xl "
            >
                <div
                    onClick={() => navigate(`/listing/${_id}`)}
                    className="relative flex items-end overflow-hidden rounded-md h-[200px] cursor-pointer "
                >
                    <img className='hover:scale-105 object-cover h-full w-full duration-300' src={imgUrl[0]} alt="wallpaper" />



                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-sm bg-brand-blue px-2 py-1 shadow-md">
                        <span className=" text-xs text-white uppercase font-heading">
                            For {type}
                        </span>
                    </div>
                    <div className="absolute bottom-3 right-3 inline-flex items-center rounded-sm  px-2 py-1 ">
                        <span className=" text-xs text-white uppercase font-heading flex items-center ">
                            <FaCamera className='mr-1' />{imgUrl.length}
                        </span>
                    </div>
                    {
                        offer && <div className="absolute top-3 left-0 inline-flex items-center rounded-sm bg-amber-400  px-2 py-1 ">
                            <span className=" text-xs text-black uppercase font-heading flex items-center ">
                                Discount!
                            </span>
                        </div>
                    }
                </div>



                {/* CARD BODY START HERE  */}
                <div className="p-4">
                    <div
                        onClick={() => navigate(`/listing/${_id}`)}
                        className='cursor-pointer'
                    >
                        <h2
                            className="text-brand-blue font-heading text-xl truncate cursor-pointer">
                            {title}
                        </h2>
                        <p className="mt-1 text-sm text-slate-500 font-content font-medium truncate"> {description}</p>
                        <p className="mt-2 text-sm text-slate-600 font-content font-bold truncate"><span className='font-medium'>Address:</span> {address}</p>
                        <div className='mt-3 flex items-end justify-start'>


                            <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaBed className='mr-1' /><span className='font-heading font-bold mr-1'>{bed}</span> Bed</p>



                            <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaBath className='mr-1' /><span className='font-heading font-bold mr-1'>{bath}</span> Bath</p>
                        </div>
                        <div className='mt-2 flex items-end justify-start'>
                            <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className={` mr-1 mt-[2px] ${parking ? 'text-green-600' : "text-gray-400"}`} />parking</p>

                            <p className='text-slate-700 w-1/2 font-content font-semibold text-sm flex items-center '><FaCheck className={`mr-1 mt-[2px] ${furnished ? 'text-green-600' : "text-gray-400"}`} />furnished</p>
                        </div>



                        <div className="mt-3 flex items-end justify-between">
                            {offer ?
                                <p className='font-content truncate'>
                                    <span className="text-2xl font-bold font-content text-brand-blue ">${discountPrice}</span>
                                    {
                                        type === 'rent' && <span className="text-sm text-slate-700">/m</span>
                                    }
                                    <s className='font-bold text-sm text-gray-600 ml-2 truncate'>${price}</s>
                                </p>

                                : <p className='font-content truncate'>
                                    <span className="text-2xl font-bold font-content text-brand-blue ">${price}</span>
                                    {
                                        type === 'rent' && <span className="text-sm text-slate-700">/m</span>
                                    }
                                </p>}

                            <div className="inline-flex rounded-xl max-w-[150px]  duration-500">
                                <p className='font-heading text-lg truncate'>{postInfo.post.area ? postInfo.post.area : 0} <span className='font-content'>/sqft</span> </p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-4 flex items-end justify-between'>
                        <button
                            onClick={() => navigate(`/update_post/${_id}`)}
                            className='bg-brand-blue rounded-sm py-2 px-7 font-heading text-white hover:opacity-95 text-sm'>
                            Edit
                        </button>
                        <button
                            onClick={() => postInfo.handlePostDelete(_id)}
                            className='bg-red-800 py-2 px-5 rounded-sm  font-heading text-white hover:opacity-95 text-sm z-10'>
                            Delete
                        </button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default PostCard