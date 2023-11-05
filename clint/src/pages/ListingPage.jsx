import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



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
                style={{ ...style, display: "block", background: "#00000000", left: '70px', zIndex: '999' }}
                onClick={onClick}
            />
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        console.log(props);
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#00000000", right: '70px', zIndex: '999'}}
                onClick={onClick}
            />
        );
    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    console.log(listings);


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