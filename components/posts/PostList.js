import Post from "./Post";

const PostList = props => {
  const { postsList } = props;

  return (
    <ul>
      {postsList.map(post => (
        <Post key={post.id} data={post} />
      ))}
    </ul>
  );
};

export default PostList;
