import Head from 'next/head';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fromJSON } from 'postcss';



 const Post = () => {
    const[userName, setUser] = useState("");
    const [form, setForm] = useState({ 
        author: userName, 
        title: "", 
        content: "",
        imgs: [],
        tags: [],
        likes: 0,
        comments: [] });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();
    const allTags = ["events", "activites","questions","meta","rant"]
    let userTags = [];
    useEffect((() => {
        setUser(localStorage.getItem("Current_Name"))
    }),[]);

    const createPost = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/posts', {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost();
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            author: userName,
            tags: userTags,
            [e.target.name]: e.target.value
        })
    }


    const addTag = (e) => {
        var checkbox = document.getElementById(e.target.name);
    if (checkbox.checked != false) {
	    //userTags.push(e.target.name)
        form.tags.push(e.target.name)
    }else{
	    form.tags = form.tags.filter(tag => tag!=e.target.name);
    }
    }



  return(
    <section>{
        submitted
        ? <h1>Done</h1>
        :
        <form className="m-3" onSubmit={handleSubmit}>
                    <h1 className="text-center text-2xl font-bold mb-6">Make a Post</h1>
                    <label className="text-sm" htmlFor="title">Title</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800 " onChange={handleChange} type="text" id="title" name="title" placeholder="Title" /><br/>
                    <label className="text-sm" htmlFor="content">Content</label><br/>
                    <input className="block px-1 mt-2 w-full text-gray-500 appearance-none border-b-2 border-gray-100 focus:border-gray-400 hover:border-gray-800" onChange={handleChange} type="text" id="content" name="content" placeholder="Content" /><br/>

                    <fieldset>
                        <legend>Choose your interests</legend>
                        <div>
                            <input type="checkbox" id="events" name="events" value="events" onClick={addTag}/>
                            <label for="events"> Events</label>
                        </div>
                        <div>
                            <input type="checkbox" id="activites" name="activites" value="activites" onClick={addTag}/>
                            <label for="activites"> Activites</label>
                        </div>
                        <div>
                            <input type="checkbox" id="questions" name="questions" value="questions" onClick={addTag}/>
                            <label for="questions"> Questions</label>
                        </div>
                        <div>
                            <input type="checkbox" id="meta" name="meta" value="meta" onClick={addTag}/>
                            <label for="activites"> Meta</label>
                        </div>
                        <div>
                            <input type="checkbox" id="rant" name="rant" value="rant" onClick={addTag}/>
                            <label for="activites"> Rant</label>
                        </div>
                        
                    </fieldset>
                    <button className="m-auto w-full bg-red-700 rounded-md text-white mt-3 mb-2 h-10" type="submit">Post</button>
      </form> 
        

        }
                  
      </section>
      
    
    
    
  )
}





export default Post;