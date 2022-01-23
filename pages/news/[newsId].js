import { useRouter } from "next/router";

const News = () => {
  const router = useRouter();
  console.log(router.query.newsId);
  return <h1>Details Page {router.query.newsId}</h1>;
};
export default News;
