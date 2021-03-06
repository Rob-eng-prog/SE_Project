import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import styles from "../../styles/home.module.css";
import { useRouter } from "next/router";

const Detail = ({ detail, id }) => {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const refreshData = () => {
    router.replace(router.asPath);
  };

  // comment
  const _comment = async () => {
    let user = localStorage.getItem("Current_Name");
    if (comment === "") {
      alert("Write comment...");
    } else if (!user) {
      alert("First login!");
    } else {
      let data = {
        comments: [
          ...detail.comments,
          {
            text: comment,
            commentBy: user,
          },
        ],
      };
      console.log('---data--', data)
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        refreshData();
        setComment("");
      } else {
        alert("Something went wrong! Please try again!");
      }
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{detail?.title}</h1>
      <p className={styles.author}> Author: {detail?.author}</p>
      <div className={styles.imgContainer}>
        {/* <img
          src="https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk="
          className={styles.image}
        /> */}
      </div>
      <h1 className={styles.description}>{detail?.content}</h1>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Enter your comment here..."
          className={styles.input}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className={styles.btn} onClick={_comment}>
          Comment
        </button>
      </div>
      <div className={styles.comment}>
        {detail?.comments?.map((item, index) => (
          <div key={index} className={styles.comText}>
            <p>By: {item?.commentBy}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/posts/${context.params.id}`
  ); //GET Request
  const { data } = await res.json();

  return {
    props: {
      detail: data,
      id: context.params.id,
    },
  };
}

export default Detail;
