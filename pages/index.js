import fetch from "isomorphic-unfetch";
import HomeItem from "../components/HomeItem";
import { useRouter } from "next/router";

const Home = ({ posts }) => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

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

  return (
    <div>
      {posts.map((post) => {
        return <HomeItem key={post._id} post={post} onLike={_like} />;
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
