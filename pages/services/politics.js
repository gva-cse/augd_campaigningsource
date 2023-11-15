import Layout from "@/components/Layout"
import Head from "next/head"
import { Montserrat } from "next/font/google"
import { FaSms, FaVoteYea, FaVideo, FaUsers, FaFire, FaFlag, FaChessRook, FaDoorOpen } from 'react-icons/fa'
import { GoFileMedia } from 'react-icons/go'
import { GiMagnifyingGlass } from 'react-icons/gi'
import { RiAdvertisementFill } from 'react-icons/ri'
import { MdVerified } from 'react-icons/md'
import Carousel from "@/components/Carousel"
import Link from "next/link"

const montserrat = Montserrat({
    subsets: ["latin"],
    weights: [400, 500, 600, 700],
})

const politicsData = [
    {
        id: 1,
        logo: <FaVoteYea />,
        link: '/services/politics',
        title: 'Graphics',
        content: 'We can provide you with graphics for your political campaign. We can design your logo, flyers, banners and many more.'
    },
    {
        id: 2,
        logo: <FaSms />,
        link: '/services/default',
        title: 'Bulk SMS/Calls',
        content: 'We can provide you with bulk SMS and calls for your political campaign. We can send SMS and calls to your voters.'
    },
    {
        id: 3,
        logo: <GoFileMedia />,
        link: '/services/politics',
        title: 'Social Media Marketing',
        content: 'We can provide you with social media marketing for your political campaign. We can promote your political campaign on social media.'
    },
    {
        id: 4,
        logo: <RiAdvertisementFill />,
        link: '/services/politics',
        title: 'Advertisements',
        content: 'We can provide you with advertisements for your political campaign. We can advertise your political campaign on social media.'
    },
    {
        id: 5,
        logo: <FaVideo />,
        link: '/services/politics',
        title: 'Video/Reels',
        content: 'We can provide you with video/reels for your political campaign. We can make video/reels for your political campaign.'
    },
    {
        id: 6,
        logo: <MdVerified />,
        link: '/services/politics',
        title: 'Blue Tick Verification',
        content: 'We can provide you with blue tick verification for your political campaign. We can verify your social media accounts.'
    },
    {
        id: 7,
        logo: <FaUsers />,
        link: '/services/politics',
        title: 'Fan Page Management',
        content: 'We can provide you with fan page management for your political campaign. We can manage your social media accounts.'
    },
    {
        id: 8,
        logo: <FaFire />,
        link: '/services/politics',
        title: 'Roast Videos',
        content: 'We can provide you with roast videos for your political campaign. We can make roast videos for your political campaign.'
    },
    {
        id: 9,
        logo: <FaFlag />,
        link: '/services/politics',
        title: 'Flag Printing',
        content: 'We can provide you with flag printing for your political campaign. We can print flags for your political campaign.'
    },
    {
        id: 10,
        logo: <FaChessRook />,
        link: '/services/politics',
        title: 'Election War Room',
        content: 'We can provide you with election war room for your political campaign. We can manage your election war room.'
    },
    {
        id: 11,
        logo: <FaDoorOpen />,
        link: '/services/politics',
        title: 'D2D Campaigning',
        content: 'We can provide you with D2D campaigning for your political campaign. We can do D2D campaigning for your political campaign.'
    },
    {
        id: 12,
        logo: <GiMagnifyingGlass />,
        link: '/services/politics',
        title: 'Political Research',
        content: 'We can provide you with political research for your political campaign. We can do political research for your political campaign.'
    }
]

const Politics = () => {
    return (
        <>
            <Head>
                <title>Public Choice | Campaigning Source</title>
            </Head>
            <Layout>
                <div className="bg-transparent outline rounded-lg my-2 p-4 flex flex-col justify-center items-center">
                    <h1 className="title text-black"><span className={montserrat.className}>Political Promotion</span></h1>
                    <Link href="/contact" className="my-3">
                        <button className="btn-primary text-xl">Let's Go</button>
                    </Link>
                    <div className="flex flex-wrap justify-center items-center">
                        {politicsData.map((data) => (
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
                <div className="bg-blue-200 bg-opacity-60 outline p-4 my-2 rounded-lg">
                    <h2 className="title text-black">Examples</h2>
                    <div>
                        <Carousel />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Politics
