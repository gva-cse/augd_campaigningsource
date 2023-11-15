import { useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Image from "next/image";
import election1 from "@/assets/election/election1.png";
import election2 from "@/assets/election/election2.png";
import election3 from "@/assets/election/election3.png";
import election4 from "@/assets/election/election4.png";
import election5 from "@/assets/election/election5.png";
import election6 from "@/assets/election/election6.png";
import election7 from "@/assets/election/election7.png";
import election8 from "@/assets/election/election8.png";
import election9 from "@/assets/election/election9.png";
import election10 from "@/assets/election/election10.png";
import election11 from "@/assets/election/election11.png";

const testimonials = [
    {
        id: 1,
        image: election1,
    },
    {
        id: 2,
        image: election2,
    },
    {
        id: 3,
        image: election3,
    },
    {
        id: 4,
        image: election4,
    },
    {
        id: 5,
        image: election5,
    },
    {
        id: 6,
        image: election6,
    },
    {
        id: 7,
        image: election7,
    },
    {
        id: 8,
        image: election8,
    },
    {
        id: 9,
        image: election9,
    },
    {
        id: 10,
        image: election10,
    },
    {
        id: 11,
        image: election11,
    }
];

const Testimonial = ({ testimonial }) => (
    <div className="bg-transparent p-4 rounded-xl duration-300 hover:scale-105 md:m-6 m-2 border hover:bg-gradient-to-r from-violet-200 to-pink-200">
        <div className="flex items-center">
            <div className="flex-shrink-0">
                <Image
                    className="scale-100"
                    src={testimonial.image}
                    alt={testimonial.id}
                    width={300}
                    height={300}
                />
            </div>
        </div>
    </div>
);

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [numVisible, setNumVisible] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) {
                setNumVisible(1);
            } else if (screenWidth < 768) {
                setNumVisible(2);
            } else {
                setNumVisible(3);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);

    const visibleTestimonials = testimonials.slice(current, current + numVisible);

    const goToPrev = () => {
        if (current === 0) {
            setCurrent(testimonials.length - numVisible);
        } else {
            setCurrent(current - 1);
        }
    };

    const goToNext = () => {
        if (current === testimonials.length - numVisible) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [current]);

    return (
        <div className="mb-5">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center mb-3">
                    <button
                        onClick={goToPrev}
                        className=" text-white flex justify-center items-center mr-2 text-4xl hover:text-purple-300"
                    >
                        {<FaArrowCircleLeft />}
                    </button>
                    {visibleTestimonials.map((testimonial) => (
                        <div key={testimonial.id}>
                            <Testimonial testimonial={testimonial} />
                        </div>
                    ))}
                    <button
                        onClick={goToNext}
                        className="text-white flex justify-center items-center ml-2 text-4xl hover:text-purple-300"
                    >
                        {<FaArrowCircleRight />}
                    </button>
                </div>
                <div className="flex justify-center">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`h-2 w-2 rounded-full mx-2 bg-gray-400 ${current === index ? "bg-gray-200" : "bg-gray-900"
                                }`}
                            onClick={() => setCurrent(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;