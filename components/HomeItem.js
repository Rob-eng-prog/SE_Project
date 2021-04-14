import Link from "next/link";
import styles from "../styles/home.module.css";
export default function HomeItem({ post, onLike }) {
  return (
    <div className={styles.container}>
      <Link href={`/post/[id]`} as={`/post/${post._id}`}>
        <div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.author}> Author: {post.author}</p>
          <p className={styles.author}> Like: {post.likes}</p>
          <h1 className={styles.description}>{post.content}</h1>
        </div>
      </Link>
      <button
        className={styles.like}
        onClick={() => onLike(post._id, post.likes)}
      >
        Like
      </button>
      {/**
      <div className={styles.form}>
        <input
          type="text"
          value={comment}
          placeholder="Enter your comment here..."
          onChange={(e) => setComment(e.target.value)}
          className={styles.input}
        />
        <button className={styles.btn}>Comment</button>
      </div>
    <div className={styles.comment}>
        {post?.comments?.slice(0, 3).map((item, index) => (
          <p key={index} className={styles.comText}>
      {item.text}
      </p>
    ))}
    </div>
  */}
    </div>
  );
}
