import { useRef } from "react";

const CreatePost = props => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const postData = {
      title: title,
      image: image,
    };

    props.onAddPost(postData);
  };
  return (
    <div>
      Form
      <form onSubmit={submitHandler}>
        <div>
          <label>Post Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div>
          <label>Post Image</label>
          <input type="url" required id="url" ref={imageInputRef} />
        </div>

        <div>
          <button>Add Post </button>
        </div>
      </form>
    </div>
  );
};
export default CreatePost;
