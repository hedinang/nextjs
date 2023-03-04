import Link from "next/link";

export default function Header() {
    return <div className='header'>
        <div className='left-icon'>
            <Link href="/">
                <img src='/img/left-icon.jpg' />
            </Link>
        </div>
        <div className='navbar'>
            <Link className='nav-item' href="/">Blog</Link>
            <Link className='nav-item' href="/about">Socials</Link>
            <Link className='nav-item' href="/services">Past Socials</Link>
            <Link className='nav-item' href="/contact">Clubs</Link>
            <Link className='nav-item' href="/contact">Contact</Link>
        </div>
    </div>
}