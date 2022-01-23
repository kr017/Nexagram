import { useRouter } from "next/router";
import classes from "./Post.module.css";
const Post = props => {
  const router = useRouter();
  const { data } = props;

  const navigateToDetails = () => {
    router.push(`/${props.id}`);
  };
  return (
    <div className={classes.root}>
      <img src={data.image} className={classes.img} />
      <div>{data.title} </div>
      <div>
        <button onClick={navigateToDetails}>Show Details</button>
      </div>
    </div>
  );
};

export default Post;
