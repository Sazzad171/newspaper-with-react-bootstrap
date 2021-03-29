import React, { Component } from 'react';

import { Row, Col, Image, Media } from 'react-bootstrap';
import axios from 'axios';

class PoliticsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
        science: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/v1/news/science').then((response) => {
      console.log(response.data.data.articles);
      this.setState({
        science: response.data.data.articles,
      });
    });
  }
  render() {
    const { science } = this.state;
    return (
      <React.Fragment>
        <Row className="pt-4">
          {science.slice(0, 2).map((item,index) => (
            <Col lg="6" key={index} className="mb-3">
              <div className="news-text-in-img">
                <Image src={item.urlToImage} alt="News One" />
                <div className="news-overlay position-absolute">
                  <div className="w-100">
                    <h5 className="heading">
                      <a href="gfd">{item.title}</a>
                    </h5>
                    <Row>
                      <Col>
                        <p className="text-blue">
                          Published: {item.publishedAt}
                        </p>
                      </Col>
                      <Col>
                        <div className="share-icon text-right">
                          <span className="share-all-icon text-light">
                            <a href="df"> fb </a>
                            <a href="df"> twt </a>
                            <a href="df"> insta </a>
                          </span>
                          <span className="text-yellow"> Share </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <hr />
            </Col>
          ))}
        </Row>
        <Row className="pb-4">
          {science.slice(3, 7).map((item,index) => (
            <Col lg="6" key={index}>
              <div className="news-text-out-img">
                <Media>
                  <a href="fd">
                    <img
                      className="mr-3"
                      src={item.urlToImage}
                      alt="Generic placeholder"
                    />
                  </a>
                  <Media.Body>
                    <h6>
                      <a href="fds">{item.title}</a>
                    </h6>
                    <p>{item.content.substring(0, 50)}</p>
                    <p className="text-blue">Published: {item.publishedAt}</p>
                  </Media.Body>
                </Media>
              </div>
              <hr />
            </Col>
          ))}
        </Row>
      </React.Fragment>
    );
  }
}

export default PoliticsTab;
