import React from "react";

const NewsArticle = ({ items }) => {
  return (
    <>
      <div class="news-article-content">
        {items.map((index, id) => {
          return (
            <div className="news-article-contents" key={id}>
              <div className="news-img-container">
                <img src={index.mainImg} alt="" />
                <div className="news-img-rectangle">
                  <img src={index.dateIcon} alt="" />
                </div>
              </div>
              <div className="news-article-contents-items">
                <div className="news-article-social">
                  <div className="news-article-social-content">
                    <img src={index.icon} alt="" />
                    <p>{index.para1}</p>
                  </div>
                  <div className="news-article-social-content">
                    <img src={index.icon} alt="" />
                    <p>{index.para2}</p>
                  </div>
                </div>
                <p className="news-para">{index.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewsArticle;
