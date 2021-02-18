import Link from 'next/link';

const Navbar = () => (
    <nav className="inline">
        <li class="list-none">
            <Link href="/">
                <a>PlattsConnect</a>
            </Link>
        </li>
    </nav>
)

export default Navbar;