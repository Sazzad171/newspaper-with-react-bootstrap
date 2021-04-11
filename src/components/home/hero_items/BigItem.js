import React, { Component } from 'react';

import { Col, Image } from 'react-bootstrap';

import { Link } from 'react-router-dom'

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
      url:'',
      loading:true
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
          loading:false
        });
      });
  }

  render() {
    const { headLine, publishedAt, title ,loading } = this.state;
    return (
      <Col lg="6" className="big-image mb-3">
        {loading ? <Skeleton width='100%' height={400}/> : <Image src={headLine.urlToImage} alt="News One" fluid/>}
        <div className="news-overlay position-absolute">
          <div>
            <h2 className="heading">
              <Link to="/news-details">
                {title}
              </Link>
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
