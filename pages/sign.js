import Head from 'next/head';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';

 const Sign = () => {
  let onSubmit = () => {
    console.log("working");
  }
  return(
    <section>
      <form className="m-3" onSubmit={onSubmit}>
                    <h1 className="text-center text-2xl font-bold mb-6">Create Account</h1>
                    <label className="text-sm" for="username">Username</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800 " type="text" id="username" name="username" placeholder="Username" /><br/>
                    <label className="text-sm" for="email">Email</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800 " type="text" id="email" name="email" placeholder="Email" /><br/>
                    <label className="text-sm" for="password">Password</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800" type="text" id="password" name="password" placeholder="Password" /><br/>
                    <button className="m-auto w-full bg-red-800 rounded-md text-white mt-3 mb-2 h-10">Join</button>
                  </form>           
    </section>
    
    
  )
}



export default Sign;