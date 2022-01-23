import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

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
export default function Home(props) {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   setPosts(FAKE_DATA);
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>I'm Posters</title>
        <meta name="description" content="Posters list" />
      </Head>
      <div className={styles.container}>
        {/* <Layout> */}
        <PostList postsList={props.posts} />
        {/* </Layout> */}
      </div>
    </Fragment>
  );
}

export async function getStaticProps(params) {
  const client = await MongoClient.connect("mongodb://localhost:27017/next-js");
  const db = client.db();
  const postsCollection = db.collection("post");

  const posts = await postsCollection.find().toArray();

  client.close();

  return {
    props: {
      posts: posts.map(post => ({
        title: post.title,
        image: post.image,
        id: post._id.toString(),
      })), //posts,
    },
  };
}
