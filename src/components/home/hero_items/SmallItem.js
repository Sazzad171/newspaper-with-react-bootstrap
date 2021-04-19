import React, { Component } from 'react';

import { Col, Image } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom'


class SmallItem extends Component {
  render() {
    console.log(this.props.loading );
    return (
      <Col md="6" className="mb-3 pl-md-0">
         {this.props.loading ? <Skeleton width='100%' height={200}/> : <Image src={this.props.article.urlToImage} alt="News One" fluid />}
        <div className="news-overlay small-img position-absolute">
          <div>
            <h6 className="heading">
              <Link to={ "/news?id=" }> {this.props.loading ?' ' :this.props.article.title.substring(0, 60)} </Link>
            </h6>
            <p className="text-blue">
              Published: {this.props.loading ?' ' :this.props.article.publishedAt.split('T')[0]}
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default SmallItem;
