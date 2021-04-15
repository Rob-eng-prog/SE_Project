import Head from 'next/head';
import Link from 'next/link';
import HomeItem from '../components/HomeItem'
import fetch from 'isomorphic-unfetch';

 const Home = ({posts}) => {
  let idLink = "/" + posts._id;
  posts.map(post => console.log(post))
  return (
    <div>
      {posts.map((post) => {
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
