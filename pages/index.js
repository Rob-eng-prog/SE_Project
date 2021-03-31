import fetch from "isomorphic-unfetch";
import HomeItem from "../components/HomeItem";

const Home = ({ posts }) => {
  console.log('---da', posts)
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
