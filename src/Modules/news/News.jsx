import React, { Component } from 'react';


class News extends Component {
  constructor(props) {
    super(props);

    this.state={
      articles: [],
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=5810cfa4f4974a078d4ca19601bfb653')
    .then(results => {
      return results.json();
    }).then(data => {
      let articles = data.articles;
      this.setState({ articles: articles });
    })
  }
  render() {
    const {articles} = this.state;
    return (
      <div className="news-container">
        {articles.map(article =>
          <div key={article.objectID}>
            <a href={article.url}>{article.title}</a>
          </div>
        )}
      </div>
    )
  }
}

export default News;