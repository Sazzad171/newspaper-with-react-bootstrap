import React, { Component } from 'react';

import { Col, Image } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';


class SmallItem extends Component {
  render() {
    console.log(this.props.loading );
    return (
      <Col md="6" className="mb-3 pl-md-0">
         {this.props.loading ? <Skeleton width='100%' height={200}/> : <Image src={this.props.article.urlToImage} alt="News One" fluid />}
        <div className="news-overlay small-img position-absolute">
          <div>
            <h5 className="heading">
              <a target="blank" href={this.props.loading ?' ' :this.props.article.url}>{this.props.loading ?' ' :this.props.article.title.substring(0, 60)}</a>
            </h5>
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
