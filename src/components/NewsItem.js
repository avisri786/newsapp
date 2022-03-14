import React from "react";

const NewsItem=(props)=> {
  
    let { title, description, imgurl, url, author, date,source } = props;
    return (
      <div>
        <div className="card-deck">
          <div className="card">
            <img
              className="card-img-top"
              src={imgurl ? imgurl : "./logo.jpg"}
              alt='Sorry Not Available'
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">Published by </small>
                <small>{author ? author : "Unknown"} </small>
                <small className="text-muted"> on </small>
                <small>{new Date(date).toGMTString()}</small>
              </p>
              <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Read More
              </a>
              <div style={{position:'absolute',top:'0',right:'0',display:'flex'}}>
              <span className="  badge rounded-pill bg-danger">
                {source}
                <span className="visually-hidden">unread messages</span>
              </span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
