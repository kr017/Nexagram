import Post from "./Post";

const PostList = props => {
  const { postsList } = props;

  return (
    <ul>
      {postsList &&
        postsList.map(post => <Post key={post.id} data={post} id={post.id} />)}
    </ul>
  );
};

export default PostList;
