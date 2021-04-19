import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Media } from 'react-bootstrap';
import axios from 'axios';

class LatestNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      technology: [],
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/v1/news/technology')
      .then((response) => {
        console.log(response.data.data.articles);
        this.setState({
          technology: response.data.data.articles,
        });
      });
  }
  render() {
    const { technology } = this.state;
    return (
      <div className="latest-news-area">
        <h3>Latest News</h3>
        <div className="marquee-area">
          <div className="marquee">
            <div className="list-group">
              {technology.map((item, index) => (
                <Link to={ "/news?id=" } key={index} target="blank" className="list-group-item">
                  <Media>
                    <img
                      className="mr-3 news-img"
                      src={item.urlToImage}
                      alt="Generic placeholder"
                    />
                    <Media.Body>
                      <p className="mb-0">
                      {item.title}
                      </p>
                    </Media.Body>
                  </Media>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestNews;
