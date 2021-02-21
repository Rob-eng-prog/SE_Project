import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

 const Home = ({users}) => {
  users.map(user => console.log(user))
  return (
    <div>
      {users.map(user => {
        return(
        <h1 key={user._id}>{user.name}</h1>
        )
      })}
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/users'); //GET Request
  const { data } = await res.json();

  return { users: data }
}

export default Home;