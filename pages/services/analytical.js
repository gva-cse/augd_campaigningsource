"use client"

import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

import analytics from "@/assets/services/analytics.jpg"
import google from "@/assets/services/google.jpg"
import twitter from "@/assets/services/twitter.jpg"
import meta from "@/assets/services/meta.jpg"

const data = [
    {
        id: 1,
        title: 'Twitter Analytics',
        img: twitter,
        link: 'https://www.tweetbinder.com/',
    },
    {
        id: 2,
        title: 'Google Analytics',
        img: google,
        link: 'https://ads.google.com/intl/en_in/start/overview-ha/?subid=in-en-ha-awa-bk-c-c00!o3~Cj0KCQjw9rSoBhCiARIsAFOipllwtJHi0Bcv1KQNiHsl1xdCONEYsVWXdIImpuhMg0_6t38SoSAB3_8aAuN_EALw_wcB~140706620052~aud-570778807830:kwd-94527731~16862088904~592470418766&&&gclid=Cj0KCQjw9rSoBhCiARIsAFOipllwtJHi0Bcv1KQNiHsl1xdCONEYsVWXdIImpuhMg0_6t38SoSAB3_8aAuN_EALw_wcB&gclsrc=aw.ds',
    },
    {
        id: 3,
        title: 'Meta Analytics',
        img: meta,
        link: '/services/whatsapp',
    },
    {
        id: 4,
        title: 'Business Analytics',
        img: analytics,
        link: '/services/bulkcall',
    }
]

const Analytical = () => {
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

export default Analytical