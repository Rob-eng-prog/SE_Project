import Head from 'next/head';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';



 const Login = () => {
    const [form, setForm] = useState({ name: '', password: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();


    const verifyUser = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/users/${form.name}`)
            console.log(res.status)
            const { data } = await res.json();
            localStorage.setItem('Current_Id', data._id);
            let cur = localStorage.getItem('Current_Id');
            setSubmitted(true);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyUser();
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }






  return(
    <section>{
      submitted
      ? <h1>Hello {form.name}</h1>
      :<form className="m-3" onSubmit={handleSubmit}>
                    <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
                    <label className="text-sm" htmlFor="username">Username</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800 " onChange={handleChange} type="text" id="name" name="name" placeholder="Username" /><br/>
                    <label className="text-sm" htmlFor="password">Password</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800" onChange={handleChange} type="text" id="password" name="password" placeholder="Password" /><br/>
                    <button className="m-auto w-full bg-red-800 rounded-md text-white mt-3 mb-2 h-10" type="submit">Login</button>
      </form> 
      }
                
    </section>
    
    
  )
}



export default Login;