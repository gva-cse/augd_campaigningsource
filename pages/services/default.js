import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import bulkcall from "@/assets/services/bulkcall.png"
import bulksms from "@/assets/services/bulksms.png"
import ivr from "@/assets/services/ivr.png"
import whatsapp from "@/assets/services/whatsapp.png"
import email from "@/assets/services/email.jpg"
import manyMore from "@/assets/services/manyMore.png"

const data = [
    {
        id: 1,
        title: 'IVR',
        img: ivr,
        link: '/services/ivr',
    },
    {
        id: 2,
        title: 'Bulk SMS',
        img: bulksms,
        link: '/services/bulksms',
    },
    {
        id: 3,
        title: 'Whatsapp Broadcast',
        img: whatsapp,
        link: '/services/whatsapp',
    },
    {
        id: 4,
        title: 'Bulk Voice Calls',
        img: bulkcall,
        link: '/services/bulkcall',
    },
    {
        id: 5,
        title: 'Email Marketing',
        img: email,
        link: '/',
    },
    {
        id: 6,
        title: '',
        img: manyMore,
        link: "/"
    }
]

const Default = () => {
    return (
        <>
            <Head>
                <title>Campaigning Source</title>
            </Head>
            <Layout>
                <h1 className="title">Here are the services...</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-2 my-4">
                    {data.map((item) => (
                        <div key={item.id} className="bg-blue-200 bg-opacity-90 p-2 rounded-lg flex flex-col items-center justify-around">
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <Image src={item.img} alt={item.title} width={200} height={200} className="my-2" />
                            <Link
                                className="bg-black text-white my-2 px-3 py-1 w-1/3 text-center font-light rounded-md transition duration-200 ease-in-out hover:rounded-none"
                                href={item.link}>
                                Let's go
                            </Link>
                        </div>
                    ))}
                </div>
            </Layout>
        </>
    )
}

export default Default