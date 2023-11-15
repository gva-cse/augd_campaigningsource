import Link from "next/link"
import { AiOutlineLike, AiOutlineUser, AiOutlineEye, AiOutlineShareAlt, AiOutlineYoutube } from "react-icons/ai"

const SocialMedia = () => {
    return (
        <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-10 flex flex-col md:flex-row p-4 items-center justify-between bg-blue-600 rounded-lg text-white">
            <h2 className="text-md md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-0">Elevate your social game, boost now!</h2>
            <div className='flex flex-wrap justify-around items-center gap-2 py-1 px-4 rounded-md font-semibold text-secondaryText'>
                <div className='bg-blue-600 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='https://myfameguru.com/' target="_blank" rel="noopener noreferrer">
                        <AiOutlineLike />Likes
                    </Link>
                </div>
                <div className='bg-gray-800 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='https://myfameguru.com/' target="_blank" rel="noopener noreferrer">
                        <AiOutlineUser />Followers
                    </Link>
                </div>
                <div className='bg-green-600 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='https://myfameguru.com/' target="_blank" rel="noopener noreferrer">
                        <AiOutlineEye />Views
                    </Link>
                </div>
                <div className='bg-yellow-600 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='https://myfameguru.com/' target="_blank" rel="noopener noreferrer">
                        <AiOutlineShareAlt />Shares
                    </Link>
                </div>
                <div className='bg-red-800 py-0.5 px-1 rounded-lg transition duration-200 hover:bg-slate-600'>
                    <Link className='flex gap-1 items-center' href='https://myfameguru.com/' target="_blank" rel="noopener noreferrer">
                        <AiOutlineYoutube />Subscribers
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia