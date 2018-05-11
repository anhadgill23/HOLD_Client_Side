import React, { Component } from 'react';
import { Menu, Feed, Image, Item } from 'semantic-ui-react';


class News extends Component {
  constructor(props) {
    super(props);
    this.state={
      articles: [],
    }
  }

  componentWillMount() {
    fetch('https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=5810cfa4f4974a078d4ca19601bfb653')
    .then(results => {
      return results.json();
    }).then(data => {
      let articles = data.articles;
      this.setState({ articles: articles });
      console.log(this.state)

    })
  }
  render() {
    const {articles} = this.state;
    return (
      <div className="news-container">
        <Item.Group>
        {articles.map(article =>
          <Item key={article.objectID}>
            <a href={article.url} target="_blank">
            <Item.Image src={article.urlToImage} size='tiny' />
            <Item.Content>
              <Item.Header>
              {article.title}
              </Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
              {article.description.substring(0, 100)}
              </Item.Description>

            </Item.Content>
            </a>
          </Item>
        )}
        </Item.Group>
      </div>
    )
  }
}

export default News;