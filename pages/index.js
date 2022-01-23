import PostList from "../components/posts/PostList";
import styles from "../styles/Home.module.css";

const FAKE_DATA = [
  {
    id: "p1",
    title: "1st post",
    img: "https://res.cloudinary.com/dq0qx65vj/image/upload/v1630209577/whistler/products/kids/kayan-baby-MKB0fWRi84I-unsplash_mhldcp.jpg",
  },
  {
    id: "p2",
    title: "2nd post",
    img: "https://res.cloudinary.com/dq0qx65vj/image/upload/v1630184782/whistler/products/kids/mathilde-langevin-nyRyjBTID_0-unsplash_mdc7b8.jpg",
  },
];
export default function Home() {
  return (
    <div className={styles.container}>
      Home Page
      <PostList postsList={FAKE_DATA} />
    </div>
  );
}
