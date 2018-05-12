import React, { Component } from 'react';
import { Menu, Feed, Image, Item, Divider } from 'semantic-ui-react';


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
    })
  }
  render() {
    const {articles} = this.state;
    return (
      <div className="news-container">
        <Item.Group>
        {articles.map(article =>
          <Item key={article.objectID} style={{ margin: '10px' }}>
            <a href={article.url} target="_blank">
            <Item.Content>
            <Item.Image src={article.urlToImage} size='small' style={{ padding: '10px', float: 'right' }}/>
              <Item.Header>
              {article.title}
              </Item.Header>
              <Item.Extra>
              { (article.description.length > 120) ?
                (`${article.description.substring(0, 120)}...`) :
                (`${article.description}`)
              }
              </Item.Extra>
            </Item.Content>
            </a>
          </Item>
        )}
        <Divider />
        </Item.Group>
      </div>
    )
  }
}

export default News;