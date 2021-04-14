import React from 'react';
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';

const SearchUser = () => {
    const [qname, Setqname] = useState("");
    const [data, Setdata] = useState({});
    //const [post, Setpost] = useState([]);
    useEffect(async() => {
            if(qname != ''){
                console.log("name is here")
                console.log(qname)
                const url = 'http://localhost:3000/api/users/' + qname;
                const res = await fetch(url); //GET Request
                const { data } = await res.json();
                const user = data;
                console.log(user)
                Setdata(user)
            }
    }, [qname])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        Setqname(e.target.value)
    }


    return (
        <div>
            
            <form className="m-3" onSubmit={handleSubmit}>
                    <h1 className="text-center text-2xl font-bold mb-6">Find a User</h1>
                    <label className="text-sm" htmlFor="username">Username</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800 " onChange={handleChange} type="text" id="name" name="name" placeholder="Username" /><br/>
                    <button className="m-auto w-full bg-red-800 rounded-md text-white mt-3 mb-2 h-10" type="submit">Join</button>
            </form>
            {data?
            <div>
                <h1>Info for {data.name}</h1>
                <h1>{data.email}</h1>
                <h1>{data.dateCreated}</h1>
            </div>
            :
            <h1>Look for someone</h1>
            }
        </div>
    )
}

export default SearchUser;