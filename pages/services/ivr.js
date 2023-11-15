import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import ivr from '@/assets/ivr.png'
import Link from 'next/link'

const IVR = () => {
    return (
        <>
            <Head>
                <title>IVR Services | Campaigning Source</title>
            </Head>
            <Layout>
                <div className='bg-blue-100 p-3 rounded-md text-black'>
                    <h1 className="title">IVR Services</h1>
                    <div className='flex justify-around items-center'>
                        <p className='w-1/2 text-xl font-light'>
                            Interactive Voice Response (IVR) is an automated telephony
                            system that interacts with callers, gathers information and routes calls to the appropriate
                            recipient. An IVR system (IVR) accepts a combination of voice telephone input and
                            touch-tone keypad selection and provides appropriate responses in the form of voice,
                            fax, callback, email and perhaps other media.
                        </p>
                        <Image src={ivr} alt="IVR" width={400} height={400}/>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 my-5'>
                    <h2 className='title'>Let's see how you're going to avail this service?</h2>
                    <p className='text-xl'>Fill this google form!</p>
                    <Link className='w-1/6 mx-auto' href="https://forms.gle/3w66Vm79fk7NYiL27"><button className='btn-primary'>Let's go</button></Link>
                    {/* <ol className='flex flex-col justify-center items-start list-decimal outline outline-gray-500 rounded-lg py-3 px-8 w-[75%]'>
                        <li>First of all you need to upload an excel file of contacts.</li>
                        <input type="file" name="contact-file" id="contact-file" className='my-2' required />
                        <li>Then, upload an excel file of all the forwarding contacts you have.</li>
                        <input type="file" name="forwarding-file" id="forwarding-file" className='my-2' required />
                        <li>Now, upload an audio file of the recorded message you have.</li>
                        <input type="file" name="audio-file" id="audio-file" className='my-2' required />
                        <li>Tell us your Whatsapp number.</li>
                        <input type="text" name="whatsapp-number" id="whatsapp-number" className='my-2' required />
                        <li>Finally, upload an workflow chart in the form of pdf or image, of how these calls will work</li>
                        <input type="file" name="workflow-file" id="workflow-file" className='my-2' required />
                        <button className='btn-primary'>Submit</button>
                    </ol> */}
                </div>
            </Layout>
        </>
    )
}

export default IVR