import Head from 'next/head';
import Link from 'next/link';
import HomeItem from '../components/HomeItem'
import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';

 const Home = ({posts}) => {
  const[sorting, setSorting] = useState("default")
  const[filtering, setFiltering] = useState("default")
  const[logged, setLogged] = useState(false)
  //let idLink = "/" + posts._id;
  useEffect(async() => {
   //console.log("sorted")
   if(localStorage.getItem("Current_Name") === null){
    setLogged(false)
  }
  else{
    setLogged(true)
  }
  },[sorting, filtering]);

  const _like = async (id, like) => {
    let _id = localStorage.getItem("Current_Id");
    if (!_id) {
      alert("First login!");
    } else {
      let data = {
        likes: like + 1,
      };
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        refreshData();
      } else {
        alert("Something went wrong! Please try again!");
      }
    }
  };
  
  const orderPost = (e) => {
    const val = e.target.value;
    if(val == "default"){
      setSorting("default")
    }
    else if(val == "High likes"){
      console.log("high")
      setSorting("high")
    }
    else if(val == "Low likes"){
      console.log("low")
      setSorting("low")
    }
  }

  const filterPost = (e) => {
    const val = e.target.value;
    if(val == "default"){
      setFiltering("default")
    }
    else{
      console.log("something")
      setFiltering(val)
    }
  }
  //posts.map(post => console.log(post))
  return (
    <div>
      <div>
      <label htmlFor="ordering">Sort by:</label>
        <select name="ordering" id="ordering" onClick={orderPost}>
          <option value="default">Default</option>
          <option value="High likes">High Likes</option>
          <option value="Low likes">Low likes</option>
        </select>
      <label htmlFor="filtering">Filter by:</label>
        <select name="filtering" id="filtering" onClick={filterPost}>
          <option value="default">Default</option>
          <option value="events">Events</option>
          <option value="activites">Activites</option>
          <option value="questions">Questions</option>
          <option value="meta">Meta</option>
          <option value="rant">Rant</option>
        </select>
      </div>
      <div>
        {logged
        ?
        <div className = "p-2 m-2 bg-red-500 text-black">
          <Link href="/createPost">
              <a>Create a Post</a>
          </Link>
        </div>
    :
        <div>
          <p className = "pb-2">You must be logged in to create a Post</p>
          <Link href="/login">
            <a className = "p-2 pb-3 m-2 hover:text-red bg-red-500">Login</a>
          </Link>
        </div>
    }
      </div>
      {posts.
      sort((a,b) => {
        if(sorting == "low"){
          return a.likes - b.likes
        }
        else if(sorting == "high"){
          return b.likes - a.likes
        }
        else{
          return a.title.localeCompare(b.title);
        }
      })
      .filter(post => {
        if(filtering == "default"){
          return true
        }
        else{
          return post.tags.includes(filtering)
        }
      })
      .map((post) => {
        return <HomeItem key={post._id} post={post} />;
      })}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/posts"); //GET Request
  const { data } = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}

export default Home;
