import React, { Component } from 'react';

import { Col, Image } from 'react-bootstrap';

class SmallItem extends Component {
  render() {
    return (
      <Col md="6" className="mb-3 pl-md-0">
        <Image src={this.props.article.urlToImage} alt="News One" fluid />
        <div className="news-overlay small-img position-absolute">
          <div>
            <h5 className="heading">
              <a href="fds">{this.props.article.title.substring(0, 60)}</a>
            </h5>
            <p className="text-blue">
              Published: {this.props.article.publishedAt.split('T')[0]}
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default SmallItem;
