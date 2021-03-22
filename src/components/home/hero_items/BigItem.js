import React, { Component } from 'react';

import { Col, Image } from 'react-bootstrap';

// import NewsOne from "../../../images/news-1.jpg"
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';

class BigItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLine: [],
      title: '',
      publishedAt: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=1fc1824e40174167b4cfafb5a39ddb11'
      )
      .then((response) => {
        console.log(response.data.articles[0]);
        this.setState({
          headLine: response.data.articles[0],
          title: response.data.articles[0].title.substring(0, 60),
          publishedAt: response.data.articles[0].publishedAt,
        });
      });
  }

  render() {
    const { headLine, publishedAt, title } = this.state;
    return (
      <Col lg="6" className="big-image mb-3">
        <Image src={headLine.urlToImage} alt="News One" fluid />
        <div className="news-overlay position-absolute">
          <div>
            <h2 className="heading">
              <a href="gfd">{title}</a>
            </h2>
            <p className="text-blue">
              Published: <Moment>{publishedAt}</Moment>
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default BigItem;
