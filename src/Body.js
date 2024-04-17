import React, { useState, useEffect } from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Body({ val }) {
  const [articles, setArticles] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [articlesToShow, setArticlesToShow] = useState(15);

  useEffect(() => {
    if (val) {
      setArticles(val.articles);
    }
  }, [val]);

  const handleShowMore = () => {
    setShowMore(true);
    setArticlesToShow(articles.length);
  };

  return (
    <>
    <div id="body">
      {articles.slice(0, articlesToShow).map((article, index) => (
        <div key={index} id="card">
          <a href={article.url}>
            <img id="img" src={article.urlToImage} alt="article" />
            <span id="article">{article.title}</span>
            <p id="description">{article.description}</p>
          </a>
        </div>
      ))}
    </div>
    <div id="showmore" className="text-center">
    {!showMore && (
        <button onClick={handleShowMore} className="btn btn-primary showmore">Show more</button>
      )}
    </div>
    </>
  );
}

export default Body;

