import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"
import { FaMobile, FaUsers, FaHeadphones } from 'react-icons/fa'
import { GoFileMedia, GoGraph } from 'react-icons/go'
import { AiOutlineShop } from 'react-icons/ai'
import { GiMagnifyingGlass, GiClapperboard } from 'react-icons/gi'
import { RiAdvertisementFill } from 'react-icons/ri'
import { MdWeb, MdCall, MdSms } from 'react-icons/md'
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
    subsets: ["latin"],
    weights: [400, 500, 600, 700],
})

const businessData = [
    {
        id: 1,
        logo: <MdWeb />,
        link: '/services/webdev',
        title: 'Website Development',
        content: 'We can provide you with website development for your business development. We can develop your website for your business campaign.'
    },
    {
        id: 2,
        logo: <FaMobile />,
        link: '/services/appdev',
        title: 'App Development',
        content: 'We can provide you with app development for your business development. We can develop your app for your business campaign.'
    },
    {
        id: 3,
        logo: <GoFileMedia />,
        link: '/services/business',
        title: 'Social Media Marketing',
        content: 'We can provide you with social media marketing for your business development. We can promote your business on social media.'
    },
    {
        id: 4,
        logo: <RiAdvertisementFill />,
        link: '/services/business',
        title: 'Advertisements',
        content: 'We can provide you with advertisements for your business promotions. We can advertise your business on social media.'
    },
    {
        id: 5,
        logo: <MdCall />,
        link: '/services/ivr',
        title: 'IVR Calls',
        content: 'We can provide you with IVR calls for your business management. We can send IVR calls to your customers'
    },
    {
        id: 6,
        logo: <MdSms />,
        link: '/services/bulksms',
        title: 'Broadcast Messages',
        content: 'We can provide you with broadcast messages for your business management. We can send broadcast messages to your customers.'
    },
    {
        id: 7,
        logo: <FaUsers />,
        link: '/services/bulkcall',
        title: 'Bulk Calls',
        content: 'We can provide you with bulk calls for your business management. We can bulk calls to your customers.'
    },
    {
        id: 8,
        logo: <FaHeadphones />,
        link: '/services/business',
        title: 'CRM',
        content: 'We can provide you with CRM for your business management. We can manage your CRM.'
    },
    {
        id: 9,
        logo: <GiClapperboard />,
        link: '/services/business',
        title: 'Videos',
        content: 'We can provide you with videos for your business management. We can make videos for your business.'
    },
    {
        id: 10,
        logo: <GoGraph />,
        link: '/services/business',
        title: 'Analytics',
        content: 'We can provide you with analytics for your business management. We can manage your analytics.'
    },
    {
        id: 11,
        logo: <AiOutlineShop />,
        link: '/services/business',
        title: 'Sales Management',
        content: 'We can provide you with sales management for your business management. We can manage your sales.'
    },
    {
        id: 12,
        logo: <GiMagnifyingGlass />,
        link: '/services/business',
        title: 'SEM & SEO',
        content: 'We can provide you with SEM & SEO for your business management. We can manage your SEM & SEO.'
    }
]

const Business = () => {
    return (
        <>
            <Head>
                <title>Business | Campaigning Source</title>
            </Head>
            <Layout>
                <div className="bg-transparent outline rounded-lg my-2 p-4 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-center my-2 py-2 text-black"><span className={montserrat.className}>Business Development</span></h1>
                    <Link href="/contact" className="my-3">
                        <button className="btn-primary text-xl">Let's Go</button>
                    </Link>
                    <div className="flex flex-wrap justify-center items-center">
                        {businessData.map((data) => (
                            <div key={data.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
                                <Link href={data.link}>
                                    <div className="bg-gradient-to-r from-teal-200 to-teal-500 flex flex-col justify-center items-center text-black rounded-lg transition-all duration-200 ease-in-out p-4 scale-95 hover:scale-100">
                                        <span className="text-4xl mb-1">{data.logo}</span>
                                        <h2 className="text-2xl font-bold text-center"><span className={montserrat.className}>{data.title}</span></h2>
                                        <p className="text-md  text-center my-2 py-2"><span className={montserrat.className}>{data.content}</span></p>
                                    </div>
                                </Link>

                            </div>
                        ))}
                    </div>
                    <Link href="/contact" className="my-3">
                        <button className="btn-primary text-xl">Let's Go</button>
                    </Link>
                </div>

            </Layout>
        </>
    )
}

export default Business