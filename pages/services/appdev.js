import Link from "next/link";
import Head from 'next/head';
import Layout from '@/components/Layout';

const data = [
    {
        id: 1,
        title: 'Startup App',
        desc: 'Building a startup let us handle the stress for you. We will build a app that will help you to grow your business.',
    },
    {
        id: 2,
        title: 'E-Commerce App',
        desc: 'We will build a app for your business that will help you to grow your business.',
    },
    {
        id: 3,
        title: 'Personal App',
        desc: 'We will build your personal app that will help you to grow your profile.',
    },
    {
        id: 4,
        title: 'Organisation App',
        desc: 'We will build a app for your organisation that will help you to grow your organisation.',
    },
    {
        id: 5,
        title: 'College Project',
        desc: 'We will build a app for your college project that will help you to grow your project.',
    }
]


const AppDev = () => {
    return (
        <>
            <Head>
                <title>App Development | Campaigning Source</title>
            </Head>
            <Layout>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='title'>App Development</h1>
                    <div>
                        <Link href='/contact' className="btn-primary mb-3">Avail services</Link>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {data.map((item) => (
                            <div key={item.id} className='flex flex-col justify-center items-center bg-[#F6F1F1] p-4 rounded-md my-4 w-1/3'>
                                <h2 className='sub-title'>{item.title}</h2>
                                <p className='text-md w-1/2 my-3'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Link href='/contact' className="btn-primary mb-3">Avail services</Link>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default AppDev;