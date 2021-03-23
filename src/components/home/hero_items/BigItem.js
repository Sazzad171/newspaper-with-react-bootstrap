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
        'http://localhost:5000/api/v1/news/headline'
      )
      .then((response) => {
        console.log(response.data.data.articles);
        this.setState({
          headLine: response.data.data.articles[0],
          title: response.data.data.articles[0].title,
          publishedAt: response.data.data.articles[0].publishedAt,
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
