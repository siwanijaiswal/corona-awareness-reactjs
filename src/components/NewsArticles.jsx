import React from "react";
import NewsArticle from "../common/NewsArticle";
import { newsArticle } from "../helpers/Statistics";

const NewsArticles = () => {
  return (
    <>
      <section class="news-article" id="centers">
        <div class="news-article-header">
          <h2>News and Articles</h2>
          <p>
            {" "}
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Amet minim mollit non deserunt{" "}
          </p>
        </div>

        <NewsArticle items={newsArticle} />
      </section>
    </>
  );
};

export default NewsArticles;
