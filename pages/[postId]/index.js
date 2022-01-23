import { MongoClient, ObjectId } from "mongodb";
import PostDetails from "../../components/posts/PostDetails";

const postDetailsPage = props => {
  const { data } = props;
  return <PostDetails data={data} />;
};

// returns all the
export async function getStaticPaths(params) {
  const client = await MongoClient.connect("mongodb://localhost:27017/next-js");
  const db = client.db();
  const postsCollection = db.collection("post");
  const posts = await postsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    paths: posts.map(post => ({
      params: {
        postId: post._id.toString(),
      },
    })),

    // [
    //   {
    //     params: {
    //       postId: "p1",
    //     },
    //   },
    //   {
    //     params: {
    //       postId: "p2",
    //     },
    //   },
    // ],

    fallback: false,
  };
}

// a page is pregenerated at build time
export async function getStaticProps(context) {
  //we cant access useRouter here

  //fetch from api
  const postId = context.params.postId;
  const client = await MongoClient.connect("mongodb://localhost:27017/next-js");
  const db = client.db();
  const postsCollection = db.collection("post");
  const post = await postsCollection.findOne({ _id: ObjectId(postId) });

  client.close();
  return {
    props: {
      data: { id: post._id.toString(), title: post.title, image: post.image },

      // {
      //   id: "p2",
      //   title: "2nd post",
      //   img: "https://res.cloudinary.com/dq0qx65vj/image/upload/v1630184782/whistler/products/kids/mathilde-langevin-nyRyjBTID_0-unsplash_mdc7b8.jpg",
      // },
    },
  };
}
export default postDetailsPage;
