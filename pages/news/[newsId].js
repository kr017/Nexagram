import { useRouter } from "next/router";

const News = () => {
  const router = useRouter();
  // console.log(router.query.newsId);

  return (
    <div>
      {router.query.newsId ? (
        <h1>Details Page {router.query.newsId}</h1>
      ) : (
        <h3>Not Found</h3>
      )}
    </div>
  );
};
export default News;
