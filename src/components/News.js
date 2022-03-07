import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "",
    pagesize: 6,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async update() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let jsondata = await data.json();

    this.setState({ articles: jsondata.articles, loading: false });
  }

  async componentDidMount() {
    this.update();
  }

  handleprev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.update();
  };
  handlenext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.update();
  };
  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center" style={{ padding: "50px" }}>
          Headlines
        </h1>
        {this.state.loading && <Spinner />}

        {this.state.loading ? (
          console.log("loading")
        ) : (
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-dark"
                onClick={this.handleprev}
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalres / this.props.pagesize)
                }
                type="button"
                className="btn btn-dark"
                onClick={this.handlenext}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default News;
