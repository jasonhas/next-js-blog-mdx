import { HeartIcon } from '@heroicons/react/24/solid';
import {FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa'

const Footer = () => {

    return (
        <>
        <footer className='sm:fixed sm:bottom-0 w-full'>
        <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
            <div className="p-5">
                <ul>
                    <p className="text-gray-800 font-bold text-3xl pb-6">
                        static<span className="text-blue-600">blog</span>
                    </p>
                    <div className="flex gap-6 pb-5">
                        <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600'/>
                        <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600'/>
                        <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600'/>
                        <FaYoutube className='text-2xl cursor-pointer hover:text-red-600'/>
                    </div>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Products</p>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Stocks</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Futures & Options</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Mutual Funds</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Fixed deposits</li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Company</p>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Products</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Pricing</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Careers</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Press & Media</li>
                </ul>
            </div>
            <div className='p-5'>
                <ul>
                    <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Contact</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Support Portal</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>List of Changes</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Downloads & Resources</li>
                    <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Videos</li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
            <h1 className='text-gray-800 font-semibold'>&copy; 2022-2023 All rights reserved | Built with &#128420; | by Qube6</h1>
        </div>
        </footer>
        </>
    )
}

export default Footer;