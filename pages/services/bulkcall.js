import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import bulkcall from '@/assets/services/bulkcall.png'
import Link from 'next/link'

const Whatsapp = () => {
    return (
        <>
            <Head>
                <title>Whatsapp Broadcast | Campaigning Source</title>
            </Head>
            <Layout>
                <div className='bg-blue-100 p-3 rounded-md text-black'>
                    <h1 className="title">Bulk Calling</h1>
                    <div className="flex items-center justify-around my-4">
                        <p className="text-xl font-light w-1/3">
                            Bulk calling helps in promoting your business by calling a large number of people at once.
                            It is a great way to send a message to a group of people.
                            Let me assist you in availing the bulk calling service we offer.
                        </p>
                        <Image src={bulkcall} alt="Bulk SMS" width={400} height={400} className="my-2" />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 my-5'>
                    <h2 className='title'>Let's see how you're going to avail this service?</h2>
                    <p className='text-xl'>Fill this google form!</p>
                    <Link className='w-1/6 mx-auto' href="https://forms.gle/5sjnzFeUBSJSwZBz5"><button className='btn-primary'>Let's go</button></Link>
                    {/* <ol className='flex flex-col justify-center items-start list-decimal outline outline-gray-500 rounded-lg py-3 px-8 w-[75%]'>
                        <li>First of all you need to upload an excel file of contacts.</li>
                        <input type="file" name="contact-file" id="contact-file" className='my-2' required />
                        <li>Now, upload an audio file for the message.</li>
                        <input type="file" name="audio-file" id="audio-file" className='my-2' required />
                        <li>Finally, tell us your Whatsapp number.</li>
                        <input type="text" name="whatsapp-number" id="whatsapp-number" className='my-2' required />
                        <button className='btn btn-primary'>Submit</button>
                    </ol> */}
                </div>
            </Layout>
        </>
    )
}

export default Whatsapp