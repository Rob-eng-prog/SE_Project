import Head from 'next/head';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';

 const Sign = () => {
  let [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  });
  let[submitted,setSubmitted] = useState(false);
  const router = useRouter();

  let handleSubmit = () => {
    e.preventDefault();
    validate();
    setSubmitted(true);
    createUser();
  }

  let handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:[e.target.value]
    })
  }

  const validate = () => {
    console.log("validate function")
  }

  const createUser = async () => {
    console.log(form)
    try {
        const res = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        router.push("/");
    } catch (error) {
        console.log(error);
    }
    }





  return(
    <section>{
      submitted
      ? <h1>Done</h1>
      :<form className="m-3" onSubmit={handleSubmit}>
                    <h1 className="text-center text-2xl font-bold mb-6">Create Account</h1>
                    <label className="text-sm" htmlFor="username">Username</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800 " onChange={handleChange} type="text" id="name" name="name" placeholder="Username" /><br/>
                    <label className="text-sm" htmlFor="email">Email</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800 " onChange={handleChange} type="text" id="email" name="email" placeholder="Email" /><br/>
                    <label className="text-sm" htmlFor="password">Password</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800" onChange={handleChange} type="text" id="password" name="password" placeholder="Password" /><br/>
                    <button className="m-auto w-full bg-red-800 rounded-md text-white mt-3 mb-2 h-10" type="submit">Join</button>
      </form> 
      }
                
    </section>
    
    
  )
}



export default Sign;