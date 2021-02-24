import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

 const Home = ({posts}) => {
  posts.map(post => console.log(post))
  return (
    <div>
      {posts.map(post => {
        return(
          <div key={post._id} className="p-3 border-black">
            <div className="p-4 m-3 bg-red-400">
              <p className="text-md">{post.author}</p>
              <h1 className="text-2xl">{post.title}</h1>
              <h1 className="text-lg">{post.content}</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts'); //GET Request
  const { data } = await res.json();

  return { posts: data }
}

export default Home;