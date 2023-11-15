"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo.png"
import Footer from "./Footer"
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import Background from "./Background"
import { VscSignIn } from "react-icons/vsc"
import { useSession } from "next-auth/react"
import UserProfile from "./UserProfile"
import Chatbot from "./Chatbot"
import { useRouter } from "next/router"

const Layout = ({ children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [menuExpanded, setMenuExpanded] = useState(false)
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!session && router.pathname !== "/signin" && router.pathname !== "/signup") {
            router.push("/signin")
        }
    }, [session, router])

    return (
        <>
            <Background />
            <div className="offers">
                <h3>Boost your business in this festive season to new heights. 🗻</h3>
            </div>
            <div className="sticky top-0 left-0 right-0 z-10">
                <input id="toggle" type="checkbox" className="hidden" onClick={() => {
                    setMenuExpanded(!menuExpanded)
                }} />
                <label htmlFor="toggle" className="hamburger">
                    <div className="top-bun"></div>
                    <div className="meat"></div>
                    <div className="bottom-bun"></div>
                </label>

                <div className='flex justify-around items-center bg-white px-6 mb-4 bg-opacity-90'>
                    <div className="brand">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="logo"
                                width={225}
                                height={225}
                                className="p-2"
                            />
                        </Link>
                    </div>
                    <ul className={`${menuExpanded ? "navbar expanded" : "navbar"}`}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/contact">Influencers</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li>
                            <div className="relative group">
                                <Link
                                    href="#"
                                    className="group flex items-center"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    Services{isDropdownOpen ? <MdArrowDropUp size={28} /> : <MdArrowDropDown size={28} />}
                                </Link>
                                {isDropdownOpen && (
                                    <div className="absolute top-full right-0 bg-[#fff] shadow-lg transition ease-in-out duration-200"
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <ul className="dropdown-menu">
                                            <li className="min-w-max"><Link href="/services/politics">Public Choice Promotion</Link></li>
                                            <li className="min-w-max"><Link href="/services/business">Business Development</Link></li>
                                            <li className="min-w-max"><Link href="/services/default2">Website & Application Development</Link></li>
                                            <li className="min-w-max"><Link href="/services/default">IVR, Bulk SMS, Whatsapp Broadcasts</Link></li>
                                            <li className="min-w-max"><Link href="/services/graphics">Graphic Designing</Link></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/services/analytical">Analytical</Link></li>
                        <li><Link href="/contact">Internship</Link></li>
                        <li><Link href="/swags">Swags</Link></li>
                        <li><Link href="/payments">Payment</Link></li>
                        {!session ? <li><Link className="signin-button" href="/signin"><VscSignIn />Sign In</Link></li> : <UserProfile />}

                    </ul>
                </div>
            </div>

            <div className="content">
                {children}

                <Footer />
            </div>
            <div>
                <Chatbot />
            </div>
        </>
    )
}

export default Layout
