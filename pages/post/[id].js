import fetch from "isomorphic-unfetch";
import styles from "../../styles/home.module.css";

const comments = [
  {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

const Detail = ({ detail }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>There is title</h1>
      <p className={styles.author}> Author: Auther name</p>
      <div className={styles.imgContainer}>
        <img
          src="https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk="
          className={styles.image}
        />
      </div>
      <h1 className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Enter your comment here..."
          className={styles.input}
        />
        <button className={styles.btn}>Comment</button>
      </div>
      <div className={styles.comment}>
        {comments?.map((item, index) => (
          <p key={index} className={styles.comText}>
            {item.text}
          </p>
        ))}
      </div>
      <button className={styles.btn}>Load More</button>
    </div>
  );
};

export async function getServerSideProps(context) {
  console.log("---context", context.params.id);
  //   const res = await fetch(`http://localhost:3000/api/posts/${}`); //GET Request
  //   const { data } = await res.json();
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Detail;
