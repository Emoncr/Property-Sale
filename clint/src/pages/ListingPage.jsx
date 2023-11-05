import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft, BsArrowDown } from "react-icons/bs";
import { BiSolidArea } from 'react-icons/bi'
import { FaLocationArrow, FaBed, FaBath, FaAngleUp, FaAngleDown } from "react-icons/fa"


const ListingPage = () => {
    const params = useParams();
    const [listings, setListings] = useState({})
    const [loading, setLoading] = useState(false)
    //====== Loading Post Data Here ======//
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/posts/${params.id}`)
            const json = await res.json();
            if (json.success === false) {
                toast.error(json.message, {
                    autoClose: 2000,
                })
            }
            else {
                setListings(json)
            }
        })()
    }, [])

    function SamplePrevArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 left-0 z-10  -translate-y-1/2 p-2 sm:p-4 rounded-e-md bg-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-white/90 duration-300'
                onClick={onClick}
            >
                <BsArrowLeft className='text-brand-blue text-lg sm:text-2xl' />
            </div>
        )
    }
    function SampleNextArrow({ onClick }) {
        return (
            <div
                className='absolute top-1/2 right-0 z-10  -translate-y-1/2 p-2 sm:p-4 rounded-s-md bg-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-white/90 duration-300'
                onClick={onClick}
            >
                <BsArrowRight className='text-brand-blue text-lg sm:text-2xl' />
            </div>
        )
    }


    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        appendDots: dots => (
            <div style={{ bottom: 25, }}>
                <ul style={{ margin: "0px", color: '#fff' }}> {dots} </ul>
            </div>
        ),
    };




    return (
        <div className="listing_section pb-16">
            <Slider {...settings} className='z-10 relative'>
                {
                    listings.imgUrl && listings.imgUrl.map((listing, index) => (
                        <div
                            key={index}
                            className="h-[300px] sm:h-[550px] w-full mx-auto z-10"
                        >
                            <img className='object-cover w-full h-full' src={listing} alt="image" />
                        </div>
                    ))
                }
            </Slider>
            <div className="container ">
                <div className="property_details_container pt-4 sm:pt-12 ">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        <div className="lg:col-span-7  ">
                            <div className='bg-white md:p-12 p-6 rounded-md shadow-md'>
                                <div className="property_info">
                                    <p className='font-heading text-brand-blue'>
                                        <span className='py-2 px-6 bg-brand-blue/70 rounded-full border border-brand-blue'>Sale</span>
                                    </p>

                                    <h1 className='font-heading font-bold mt-5 md:mt-8 text-2xl sm:text-3xl text-brand-blue capitalize'>this is heading</h1>
                                    <p className='font-content mt-3 font-medium text-lg flex items-center justify-left'>
                                        <FaLocationArrow className='text-brand-blue' />
                                        <span className='ml-1'>Dhaka,Bangladesh</span>
                                    </p>

                                    <div className="description">
                                        <p className='font-heading mt-4 font-medium text-lg sm:text-xl'>Description</p>
                                        <p className='font-content mt-1 font-medium text-xs sm:text-sm md:text-md lg:text-lg '>
                                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                        </p>
                                    </div>

                                    <p className='text-2xl font-heading text-brand-blue mt-3  text-'>
                                        $6000
                                    </p>
                                </div>


                                <div className="property_genarel_info grid-cols-3 grid max-w-md">
                                    <p className='font-heading mt-3 font-medium sm:text-lg  text-sm flex items-center justify-left'>
                                        <FaBed className='text-brand-blue' />

                                        <span className='ml-1'>3 Beds</span>
                                    </p>
                                    <p className='font-heading mt-3 font-medium sm:text-lg  text-sm flex items-center justify-left'>
                                        <FaBath className='text-brand-blue' />
                                        <span className='ml-1'>3 Beds</span>
                                    </p>
                                    <p className='font-heading mt-3 font-medium sm:text-lg text-sm flex items-center justify-left'><BiSolidArea className='text-brand-blue' />
                                        <span className='ml-1'>3 Beds</span>
                                    </p>
                                </div>

                            </div>

                            <div className="property_details mt-8 bg-white rounded-md shadow-md md:px-12 py-5  px-6">
                                <div
                                    className="feature_heading flex items-center justify-between cursor-pointer "
                                >
                                    <p className='font-heading  text-lg sm:text-xl font-extrabold '>Detail & Features</p>
                                    <FaAngleDown className='text-xl' />
                                </div>
                                <div className="feature_info mt-5">
                                    <p className='font-content  font-medium text-xs sm:text-sm md:text-md lg:text-lg '>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5  bg-amber-100">
                            <h1>shaj</h1>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ListingPage