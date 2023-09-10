import Link from 'next/link'

const Navbar = () => {

    return (
        <div className="navbar">
            <p>This is the navbar. Heading, whatever</p>
            <Link href={'/'}>Home</Link>
        </div>
    )
}

export default Navbar;