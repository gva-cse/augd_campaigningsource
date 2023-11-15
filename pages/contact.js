import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const createAlert = (message) => {
        const alertBox = document.querySelector(".alert");
        alertBox.innerHTML = message;
        alertBox.style.display = "block";
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_9bzyutl",
                "template_r938qvo",
                form.current,
                "Rv5e_uBZzEM1DIk9W"
            )
            .then(
                (result) => {
                    createAlert("Message Sent Successfully!");
                    console.log(result.text);
                },
                (error) => {
                    createAlert("Message Sending Failed!, Try Again Later!");
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <Head>
                <title>Contact Us | Campaigning Source</title>
            </Head>
            <Layout>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
                    <div className="flex flex-col gap-5 items-center">
                        <h1 className="title text-black">Contact Us</h1>
                        <div className="p-3 w-full md:w-3/4 mx-auto">
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="flex flex-col"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Your Name"
                                        className="input-form"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Your Email"
                                        className="input-form"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row">
                                    <select
                                        name="service"
                                        required
                                        className="input-form"
                                    >
                                        <option value="None">{"<"}Select{">"}</option>
                                        <option value="Campaigning">Campaigning</option>
                                        <option value="Social Media Marketing">Social Media Marketing</option>
                                        <option value="Website Development">Website Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="SEO">SEO</option>
                                        <option value="Content Writing">Content Writing</option>
                                        <option value="Graphic Designing">Graphic Designing</option>
                                        <option value="Video Editing">Video Editing</option>
                                        <option value="Photography">Photography</option>
                                        <option value="Videography">Videography</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="purpose"
                                        placeholder="For? Like Company, Political Party etc."
                                        className="input-form"
                                        required
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    className="input-form"
                                />
                                <button
                                    className="bg-orange-500 px-4 py-2 w-1/2 md:w-1/3 mx-auto rounded-full text-secondaryText mt-2 transition duration-200 ease-in-out hover:bg-secondaryText hover:text-bg hover:scale-95"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                            <div className="alert"></div>
                        </div>
                        <div className="flex items-center text-4xl gap-4 mt-3 p-2">
                            <Link
                                href="https://github.com/prnvtripathi/campaigning-source"
                                className="transition-all ease-in-out duration-200 hover:text-gray-500 hover:scale-125"
                            >
                                <FaGithub />
                            </Link>
                            <Link
                                href="/"
                                className="transition-all ease-in-out duration-200 hover:text-blue-500 hover:scale-125"
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                href="/"
                                className="transition-all ease-in-out duration-200 hover:text-blue-500 hover:scale-125"
                            >
                                <FaFacebook />
                            </Link>
                            <Link
                                href="/"
                                className="transition-all ease-in-out duration-200 hover:text-purple-500 hover:scale-125"
                            >
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="outline bg-blue-200 bg-opacity-40 rounded px-3 w-full md:w-1/2 h-auto md:h-1/4">
                            <h1 className="text-xl text-black mb-5">Address:</h1>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.87140791622!2d77.44511047522582!3d28.63361588403194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d4e3485ed%3A0xe0fe1689b57c7d2e!2sABESIT%20GROUP%20OF%20INSTITUTIONS!5e0!3m2!1sen!2sin!4v1691946892434!5m2!1sen!2sin"
                                width="100%"
                                height="60%"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="outline outline-black my-2 rounded-md"
                            ></iframe>
                        </div>
                        <div className="outline outline-orange-300 bg-orange-100 bg-opacity-40 rounded py-3 w-full md:w-1/2 px-3 h-auto md:h-1/4">
                            <h1 className="text-xl text-black mb-5">Phone:</h1>
                            <p className="text-gray-600 mb-3">
                                Assistance Hours:<br /> Monday - Friday, 9AM to 5PM
                            </p>
                            <p className="text-black">+91 82874 04804</p>
                        </div>
                        <div className="outline outline-green-600 bg-green-200 bg-opacity-40 rounded py-3 w-full md:w-1/2 px-3 h-auto md:h-1/4">
                            <h1 className="text-xl text-black mb-5">Email:</h1>
                            <p className="text-gray-600 mb-3">
                                Our team will get back to you in 24 business hours
                            </p>
                            <Link
                                href="mailto:info@campaigningsource.com"
                                className="text-black underline"
                            >
                                info@campaigningsource.com
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Contact;
