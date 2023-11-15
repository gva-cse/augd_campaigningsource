import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const offersList = [
    {
        id: 1,
        title: "Get trending on Twitter",
        price: "as cheap as ₹ 14,999",
    },
    {
        id: 2,
        title: "Get Featured on WikiPedia",
        price: "as cheap as ₹ 8000",
    },
     {
        id: 3,
        title: "Press Release Services",
        price: "as cheap as ₹ 5000",
    },
    {
        id: 4,
        title: "Website Development",
        price: "₹ 9999",
    },
    {
        id: 5,
        title: "Get your Business on Google",
        price: "₹ 999",
    },
    {
        id: 6,
        title: "Get your Business on Facebook",
        price: "₹ 999",
    },
]

const OfferBox = ({ offer }) => (
    <div className=" p-4 rounded-xl duration-300 hover:scale-105 md:m-6 m-2 border text-gray-600 hover:bg-white hover:text-black">
        <h1 className="text-2xl font-bold"><span className="text-emerald-600">{offer.title}</span> at just <span className="text-red-600">{offer.price}</span></h1>
    </div>
);

const Offer = () => {

    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrent(prev => (prev + 1) % offersList.length);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const goToPrev = () => {
        setCurrent(prev => (prev - 1 + offersList.length) % offersList.length);
    }

    const goToNext = () => {
        setCurrent(prev => (prev + 1) % offersList.length);
    }

    const handleCarouselHover = () => {
        setIsPaused(true);
    }

    const handleCarouselLeave = () => {
        setIsPaused(false);
    }

    return (
        <div onMouseEnter={handleCarouselHover} onMouseLeave={handleCarouselLeave}>
            <div className="flex justify-between items-center">
                <button onClick={goToPrev} className="hover:scale-110"><FaArrowCircleLeft /></button>
                <Link href='/contact'>
                    <div className="flex items-center">
                        <OfferBox key={offersList[current].id} offer={offersList[current]} />
                    </div>
                </Link>
                <button onClick={goToNext} className="hover:scale-110"><FaArrowCircleRight /></button>
            </div>
        </div>
    )
}

export default Offer;
