import React, { Component } from 'react'

import {Col, Image} from 'react-bootstrap'

// import NewsTwo from "../../../images/news-2.jpg"


class SmallItem extends Component {
  render() {
    return (
      <Col md="6" className="mb-3 pl-md-0">
          <Image src={this.props.article.urlToImage} alt="News One" fluid/>
          <div className="news-overlay small-img position-absolute">
              <div>
                  <h5 className="heading">
                      <a href="fds">{this.props.article.title}</a>
                  </h5>
                  <p className="text-blue">Published: {this.props.article.publishedAt}</p>
              </div>
          </div>
      </Col>
    )
  }
  
}
  
  export default SmallItem;