import classes from "./Post.module.css";

const PostDetails = props => {
  const { data } = props;
  return (
    <div className={classes.root}>
      <img src={data.image} alt={data?.title} className={classes.img} />
      <div>{data?.title} </div>
      <div>Describe here</div>
    </div>
  );
};

export default PostDetails;
