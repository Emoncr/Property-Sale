import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowRight } from "react-icons/ai";


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

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#000000", left: '0px', zIndex: '999' }}
                onClick={onClick}
            />
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                style={{ ...style, display: "block", background: "#000000", right: '70px', zIndex: '999' }}
                onClick={onClick}
                className={`arrow ${className}`}
            >
                <i><AiOutlineArrowRight class="arrows" style={{ color: "#000" }} /></i>
            </div>
        )
    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,

    };




    return (
        <div className="listing_section">
            <Slider {...settings} className='z-10'>
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
            <div className="container">

            </div>
            <ToastContainer />
        </div>
    )
}

export default ListingPage