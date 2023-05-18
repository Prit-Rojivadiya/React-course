import Link from "next/link";
function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href="/news/list1"> list 1 </Link>
        </li>

        <li>
          <Link href="/news/list2"> list 2 </Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
