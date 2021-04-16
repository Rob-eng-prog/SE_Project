import Link from 'next/link';
import { useState, useEffect } from 'react';
 
 
//const account = typeof window !== undefined ? "/account": "/login";



const Navbar = ({data}) => {
    const [pname, Setpname] = useState('');
    const [name, Setname] = useState(''); //name state
    
    //soon as component/page loads 
    useEffect((() => {
        if(localStorage.getItem("Current_Name") === null){
            Setpname("/account")
        }
        else{
            Setpname("/account/"+ localStorage.getItem("Current_Name"))
            Setname(localStorage.getItem("Current_Name"))
        }
    }),[]);

    const Logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return(
    <nav className = "flex flex-row justify-around bg-red-400 text-gray-300">
    <h1 className = "p-2 m-2 text-3xl text-white"> Platts <span className="text-red-800 italic">Connect</span></h1>
    <div>{
        name?
        <button onClick = {Logout}>
                <p>Logout of account {name}</p>
        </button>
        :
        <p> No current User </p>
    }</div>
    <ul className = "flex justify-self-end">
        <li className = "p-2 m-2 hover:text-white">
            <Link href = "/">
                <a>Home</a>
            </Link>
        </li>
        <li className = "p-2 m-2 hover:text-white">
            <Link href= {pname}>
                <a>Account</a>
            </Link>
        </li>
        <li className = "p-2 m-2 hover:text-white">
            <Link href= "/searchUser">
                <a>Find users</a>
            </Link>
        </li>
        <li className = "p-2 m-2 hover:text-white">
            <Link href="/about">
                <a>About</a>
            </Link>
        </li>
        <li className = "p-2 m-2 hover:text-white">
            <Link href="/news">
                <a>News</a>
            </Link>
        </li>
        <li className = "p-2 m-2 hover:text-white">
            <Link href="/login">
                <a>Login</a>
            </Link>
        </li>
        <li className = "p-2 m-2 text-white ">
            <Link href="/sign">
                <a>
                    <button className = "hover:bg-red-800 rounded-lg px-4 py-1 bg-red-600">
                        SignUp
                    </button>
                </a>
            </Link>
        </li>
    </ul>
</nav>
)}



export default Navbar;
