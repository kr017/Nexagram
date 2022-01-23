import Link from "next/link";
import { Fragment } from "react";

const News = () => {
  return (
    <Fragment>
      <h1>News List</h1>

      <ul>
        {/* not offers a SPA but reloads new one everytime */}
        {/*           
        <li>
          <a href="/news/123"> Republic Day Ahead</a>
        </li> */}

        <Link href="/news/123">Republic Day Ahead</Link>
      </ul>
    </Fragment>
  );
};

export default News;
