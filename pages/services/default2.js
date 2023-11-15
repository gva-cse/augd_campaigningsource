import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import webdev from '@/assets/services/webdev.png'
import appdev from '@/assets/services/appdev.png'
import default2 from '@/assets/services/default2.png'
import Link from 'next/link'
import Banner from '@/components/Banner'
import { FaCss3, FaGithubSquare, FaHtml5, FaJsSquare, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiVercel } from 'react-icons/si'

const icons = [
    {
        id: 1,
        name: "React",
        icon: <FaReact />,
    },
    {
        id: 2,
        name: "Next.js",
        icon: <SiNextdotjs />
    },
    {
        id: 3,
        name: "TailwindCSS",
        icon: <SiTailwindcss />
    },
    {
        id: 4,
        name: "Node.js",
        icon: <FaNodeJs />
    },
    {
        id: 5,
        name: "Express.js",
        icon: <SiExpress />
    },
    {
        id: 6,
        name: "MongoDB",
        icon: <SiMongodb />
    },
    {
        id: 7,
        name: "HTML",
        icon: <FaHtml5 />
    },
    {
        id: 8,
        name: "CSS",
        icon: <FaCss3 />
    },
    {
        id: 9,
        name: "JavaScript",
        icon: <FaJsSquare />
    },
    {
        id: 10,
        name: "Vercel",
        icon: <SiVercel />
    },
    {
        id: 11,
        name: "Python",
        icon: <FaPython />
    },
    {
        id: 12,
        name: "GitHub",
        icon: <FaGithubSquare />
    }
]

const Default2 = () => {
    return (
        <>
            <Head>
                <title>Campaigning Source</title>
            </Head>
            <Layout>
                <div>
                    <h1 className="title text-black">Software Development</h1>
                    <div className='grid grid-cols-5'>
                        <div className='col-span-3 row-span-2'>
                            <Image src={default2} alt="default2" width={720} />
                        </div>
                        <div className='col-span-2'>
                            <div className="flex flex-col gap-4 mb-6 p-4 rounded-md">
                                <div className="flex flex-col justify-around items-center outline rounded-md">
                                    <h2 className='sub-title'>Web Development</h2>
                                    <div className='flex justify-around items-center'>
                                        <Image src={webdev} alt="web development" width={180} height={180} className='mt-2 mb-3' />
                                        <p className='text-md w-1/2 my-3 text-center'>
                                            We build beautiful, responsive and feature-rich web based applications that solve real customer problems.
                                        </p>
                                    </div>
                                    <Link href="/services/webdev" className='bg-[#242424] p-3 rounded text-secondaryText hover:scale-95 my-4 transition duration-100 ease-in-out'>
                                        Learn more
                                    </Link>
                                </div>
                                <div className="flex flex-col justify-around items-center outline rounded-md">
                                    <h2 className='sub-title'>App Development</h2>
                                    <div className='flex justify-around items-center'>
                                        <Image src={appdev} alt="app development" width={180} height={180} className='mt-2 mb-3' />
                                        <p className='text-md w-1/2 my-3 text-center'>
                                            We build Android, iOS and PWA's that work great across multiple devices, screen sizes and resolutions.
                                        </p>
                                    </div>
                                    <Link href="/services/appdev" className='bg-[#242424] p-3 rounded text-secondaryText hover:scale-95 my-4 transition duration-100 ease-in-out'>
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Banner />
                    <div className='mb-4 mt-4 outline rounded-md'>
                        <h1 className="title text-black">Technologies we use</h1>
                        <div className="flex flex-wrap justify-center items-center gap-4 w-1/2 mx-auto">
                            {icons.map((icon) => (
                                <div key={icon.id} className="w-24 mb-3 flex flex-col justify-center items-center gap-2 p-4 rounded-md bg-gray-100 hover:bg-gray-200 hover:scale-110 transition ease-in-out">
                                    <div className="text-4xl text-black">{icon.icon}</div>
                                    <p className="text-gray-600">{icon.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Default2