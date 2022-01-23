import { useRouter } from "next/router";
import CreatePost from "../../components/posts/CreatePost";

const NewPostPage = () => {
  const router = useRouter();
  const onAddPost = async postData => {
    const response = await fetch("/api/new-post", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");
  };

  return <CreatePost onAddPost={onAddPost} />;
};

export default NewPostPage;
