import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${page +
      1}&pageSize=${props.pagesize}`;
    setpage(page + 1); //error occurs as page is not updated in url so as setpage is asynchronous function and it takes time to update page but url is updated before that

    let data = await fetch(url);
    let jsondata = await data.json();
    setArticles(articles.concat(jsondata.articles));
    settotalResults(jsondata.totalResults);
  };
  const update = async () => {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    props.setprogress(30);
    setloading(true);
    let data = await fetch(url);
    let jsondata = await data.json();
    props.setprogress(70);
    setArticles(jsondata.articles);
    setloading(false);
    props.setprogress(100);
  };
  useEffect(() => {
    update();
  }, []);

  // handleprev = () => {
  //   useState({ page: page - 1 });
  //   update();
  // };
  // handlenext = () => {
  //   useState({ page: page + 1 });

  //   update();
  // };

  return (
    <>
      <h1
        className="text-center"
        style={{ padding: "50px", marginTop: "90px" }}
      >
        Headlines
      </h1>
      {loading && <Spinner />}

      {/* {loading ? (
          console.log("loading")
        ) : ( */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgurl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container">
            <div className="row">
               {articles.map((element) => {
                return (
                  <div className="col-md-4 my-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgurl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
            <div
              className="d-flex justify-content-between fixed-bottom"
              style={{
                padding: "30px",
                paddingLeft: "80px",
                paddingRight: "80px",
              }}
            >
              <button
                disabled={page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={handleprev}
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  page + 1 >
                  Math.ceil(totalres / props.pagesize)
                }
                type="button"
                className="btn btn-dark"
                onClick={handlenext}
              >
                Next &rarr;
              </button>
            </div>
          </div>
               } */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  category: "",
  pagesize: 6,
};
export default News;
