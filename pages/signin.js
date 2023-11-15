"use client"

import { useSession, signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from "next/router"
import Head from "next/head"
import { useState } from "react"
import Background from "@/components/Background"

const Signin = () => {
    const router = useRouter()
    const { data: session } = useSession()
    if (session) {
        router.push("/")
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
            })

            if (res.error) {
                setError("Invalid Credentials")
            }

            if (res.success) {
                router.push("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return <>
        <Head>
            <title>Sign Up | Campaigning Source</title>
        </Head>
        <Background />
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[70%]">
                <h2 className="text-black text-3xl text-center font-bold mb-2">Login</h2>
                <div className="flex flex-col md:flex-row bg-blue-200 justify-around items-center mx-auto p-6">
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col justify-center items-center'>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                placeholder="Email ID"
                                className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                            // required
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                className="outline-none rounded-md px-2 py-1 m-2 text-black bg-gray-100"
                            // required
                            />
                        </div>
                        <div className='flex justify-center items-center'>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col gap-3 items-center justify-center">
                        <h2 className="text-xl">or</h2>
                        <button
                            className="bg-white p-2 text-black flex items-center gap-2 rounded-full transition hover:scale-105"
                            onClick={() => signIn('google')}
                        >
                            <FcGoogle />Signin using Google
                        </button>
                    </div>
                </div>
                <div>
                    <p className="text-center text-black">Don't have an account? <a href="/signup" className="text-blue-500 underline">Sign Up</a></p>
                </div>
                <div>
                    {error && <div className="bg-red-600 text-white p-3 rounded-md w-1/6 text-center mx-auto my-3">{error}</div>}
                </div>
            </div>
        </div>
    </>
}


export default Signin