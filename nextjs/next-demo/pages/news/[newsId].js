import { useRouter } from "next/router";

function SomethingImportant() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1>Detail page with newsId - {newsId} </h1>;
}

export default SomethingImportant;
