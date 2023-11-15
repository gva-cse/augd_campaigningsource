import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import brochure from '@/assets/graphics/brochure.jpg'
import brochure2 from '@/assets/graphics/brochure2.jpg'
import invite from '@/assets/graphics/invite.jpg'
import cards from '@/assets/graphics/cards.jpg'
import hording from '@/assets/graphics/hording.jpg'
import election from '@/assets/graphics/election.jpg'
import food from '@/assets/graphics/food.jpg'
import product from '@/assets/graphics/product.jpg'
import Contact from '@/components/Contact'
import Link from 'next/link'

const Graphics = () => {

    const [b, setB] = useState(false);
    let imgSrc = b ? brochure : brochure2;
    let imgSrc2 = b ? invite : cards;

    useEffect(() => {
        const interval = setInterval(() => {
            setB(!b);
        }, 3000);
        return () => clearInterval(interval);
    }, [b]);

    return (
        <>
            <Head>
                <title>Graphics | Campaigning Source</title>
            </Head>
            <Layout>
                <h1 className="title text-black">Get graphics on demand!</h1>
                <div className='w-1/6 mb-3 mx-auto'><Link href="/contact"><button className='btn-primary'>Let's go</button></Link></div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <Image src={imgSrc} onClick={() => setB(!b)} alt="brochure" width={500} className='rounded-md' />
                    <p className='text-xl text-gray-700'>
                        Get your business to new heights by getting our <strong>corporate brochure</strong>.<br />
                        Don't worry about the design, we will take care of it.<br />
                        Just tell us what you want and we will make it for you.
                    </p>
                </div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <p className='text-xl text-gray-700'>
                        Wedding, Birthday, Anniversary, or any other event, we will make the best <strong>invitation card</strong> for you.<br />
                        Just tell us what you want and we will make it for you.<br />
                        Design what you want and we will make it for you.
                    </p>
                    <Image src={imgSrc2} onClick={() => setB(!b)} alt="brochure" width={500} className='rounded-md' />
                </div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <Image src={hording} alt="hording" width={500} className='rounded-md' />
                    <p className='text-xl text-gray-700'>
                        Want to advertise on the highway? We will make the best <strong>hording</strong> for you.<br />
                        Just tell us what you want and we will make it for you.<br />
                        Design what you want and we will make it for you.
                    </p>
                </div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <p className='text-xl text-gray-700'>
                        Elections? We will make the best <strong>election posters</strong> for you.<br />
                        Just tell us what you want and we will make it for you.<br />
                        Design what you want and we will make it for you.
                    </p>
                    <Image src={election} alt="election" width={500} className='rounded-md' />
                </div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <Image src={product} onClick={() => setB(!b)} alt="product" width={500} className='rounded-md' />
                    <p className='text-xl text-gray-700'>
                        Want to sell your product? We will make the best <strong>product poster</strong> for you.<br />
                        Just tell us what you want and we will make it for you.<br />
                        Design what you want and we will make it for you.
                    </p>
                </div>
                <div className='outline p-3 rounded-md mb-3 flex justify-around items-center bg-blue-100 bg-opacity-90'>
                    <p className='text-xl text-gray-700'>
                        Design your <strong>food menu</strong>, get customers to your restaurant.<br />
                        Just tell us what you want and we will make it for you.<br />
                        Design what you want and we will make it for you.
                    </p>
                    <Image src={food} alt="food" width={500} className='rounded-md' />
                </div>
                <div>
                    <Contact />
                </div>
            </Layout>
        </>
    )
}

export default Graphics