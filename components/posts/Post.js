import classes from "./Post.module.css";
const Post = props => {
  const { data } = props;

  return (
    <div className={classes.root}>
      <img src={data.img} className={classes.img} />
      <div>{data.title} </div>
      <div>
        <button>Show Details</button>
      </div>
    </div>
  );
};

export default Post;
