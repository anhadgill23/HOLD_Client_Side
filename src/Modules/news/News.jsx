import React, { Component } from 'react';
import { Item, Divider } from 'semantic-ui-react';


class News extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    fetch( 'https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=5810cfa4f4974a078d4ca19601bfb653' )
      .then( results => results.json() ).then( ( data ) => {
        const articles = data.articles;
        this.setState( { articles } );
      } );
  }
  render() {
    const { articles } = this.state;
    return (
      <div className="news-container" >
        <Item.Group>
          {articles.map( article =>
          ( <Item key={article.objectID} style={{ margin: '10px', paddingTop: '10px' }}>
            <a href={article.url} target="_blank">
              <Item.Content>
                <Item.Image src={article.urlToImage} size="small" style={{ padding: '10px', float: 'right' }} />
                <Item.Header>
                  {article.title}
                </Item.Header>
                <Item.Extra style={{ textAlign: 'justify', color: '#3F3F3F' }}>
                  { ( article.description.length > 130 ) ?
                ( `${article.description.substring( 0, 130 )}...` ) :
                ( `${article.description}` )
              }
                </Item.Extra>
              </Item.Content>
            </a>
          </Item> ) )}
        </Item.Group>
      </div>
    );
  }
}

export default News;
