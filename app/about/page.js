import Link from 'next/link'

const About = () => {

    return (
        <div className="flex flex-col max-w-7xl mx-auto px-5 pb-6">
            <div className="text-sm md:text-lg breadcrumbs pb-5">
            <ul>
                <li className='text-blue-600'><Link href="/">Home</Link></li> 
                <li className='text-blue-600'><Link href="/about">About</Link></li> 
            </ul>
            </div>
            <h1 className="text-3xl font-bold">About Me</h1>
        </div>
    )
}

export default About