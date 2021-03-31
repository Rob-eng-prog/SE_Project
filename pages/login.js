import Head from "next/head";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

const Login = () => {
  const [form, setForm] = useState({ name: "", password: "" });

  const verifyUser = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${form.name}`);
      const { data, success } = await res.json();
      if (success) {
        console.log("---data--", data);
        localStorage.setItem("Current_Id", data._id);
        localStorage.setItem("user", data.name);
        location.href = "/";
      } else {
        alert("Invalid username!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.password === "") {
      alert("Username and password required!");
    } else {
      verifyUser();
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <form className="m-3" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
        <label className="text-sm" htmlFor="username">
          Username
        </label>
        <br />
        <input
          className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800 "
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          placeholder="Username"
        />
        <br />
        <label className="text-sm" htmlFor="password">
          Password
        </label>
        <br />
        <input
          className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800"
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <button
          className="m-auto w-full bg-red-800 rounded-md text-white mt-3 mb-2 h-10"
          type="submit"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
