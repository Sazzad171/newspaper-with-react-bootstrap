import React, { Component } from 'react';

import { Col, Image } from 'react-bootstrap';

// import NewsOne from "../../../images/news-1.jpg"
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import Skeleton from 'react-loading-skeleton';

class BigItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLine: [],
      title: '',
      publishedAt: '',
      url:''
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
          url:response.data.data.articles[0].url
        });
      });
  }

  render() {
    const { headLine, publishedAt, title,url } = this.state;
    return (
      <Col lg="6" className="big-image mb-3">
        <Image src={headLine.urlToImage} alt="News One" fluid/>
        <Skeleton width={400} height={200}/>
        <div className="news-overlay position-absolute">
          <div>
            <h2 className="heading">
              <a target="blank" href={url}>{title}</a>
            </h2>
            <p className="text-blue">
              Published: <Moment fromNow>{publishedAt}</Moment>
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default BigItem;
