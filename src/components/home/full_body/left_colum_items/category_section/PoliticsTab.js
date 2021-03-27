import React, { Component } from 'react';

import {  } from 'react-bootstrap';

import { Row, Col, Image, Media } from 'react-bootstrap';

import news from "../../../../../images/news-1.jpg"

class PoliticsTab extends Component {
  render() {
    return (
        <React.Fragment>
            <Row className="pt-4">
                <Col lg="6" className="mb-3">
                    <div className="news-text-in-img">
                        <Image src={news} alt="News One"/>
                        <div className="news-overlay position-absolute">
                            <div className="w-100">
                                <h4 className="heading">
                                <a href="gfd">Sample name</a>
                                </h4>
                                <Row>
                                    <Col>
                                        <p className="text-blue">
                                            Published: 23 Feb 2021
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
                    <hr/>
                </Col>
                <Col lg="6" className="mb-3">
                    <div className="news-text-in-img">
                        <Image src={news} alt="News One"/>
                        <div className="news-overlay position-absolute">
                            <div className="w-100">
                                <h4 className="heading">
                                <a href="gfd">Sample name</a>
                                </h4>
                                <Row>
                                    <Col>
                                        <p className="text-blue">
                                            Published: 23 Feb 2021
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
                    <hr/>
                </Col>
            </Row>
            <Row className="pb-4">
                <Col lg="6">
                    <div className="news-text-out-img">
                        <Media>
                            <a href="fd">
                                <img
                                    className="mr-3"
                                    src={news}
                                    alt="Generic placeholder"
                                />
                            </a>
                            <Media.Body>
                                <h5>
                                    <a href="fds">
                                        Media Heading
                                    </a>
                                </h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio...
                                </p>
                                <p className="text-blue">
                                    Published: 23 Feb 2021
                                </p>
                            </Media.Body>
                        </Media>
                    </div>
                    <hr/>
                </Col>
                <Col lg="6">
                    <div className="news-text-out-img">
                        <Media>
                            <a href="fd">
                                <img
                                    className="mr-3"
                                    src={news}
                                    alt="Generic placeholder"
                                />
                            </a>
                            <Media.Body>
                                <h5>
                                    <a href="fds">
                                        Media Heading
                                    </a>
                                </h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio...
                                </p>
                                <p className="text-blue">
                                    Published: 23 Feb 2021
                                </p>
                            </Media.Body>
                        </Media>
                    </div>
                    <hr/>
                </Col>
                <Col lg="6">
                    <div className="news-text-out-img">
                        <Media>
                            <a href="fd">
                                <img
                                    className="mr-3"
                                    src={news}
                                    alt="Generic placeholder"
                                />
                            </a>
                            <Media.Body>
                                <h5>
                                    <a href="fds">
                                        Media Heading
                                    </a>
                                </h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio...
                                </p>
                                <p className="text-blue">
                                    Published: 23 Feb 2021
                                </p>
                            </Media.Body>
                        </Media>
                    </div>
                    <hr/>
                </Col>
                <Col lg="6">
                    <div className="news-text-out-img">
                        <Media>
                            <a href="fd">
                                <img
                                    className="mr-3"
                                    src={news}
                                    alt="Generic placeholder"
                                />
                            </a>
                            <Media.Body>
                                <h5>
                                    <a href="fds">
                                        Media Heading
                                    </a>
                                </h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio...
                                </p>
                                <p className="text-blue">
                                    Published: 23 Feb 2021
                                </p>
                            </Media.Body>
                        </Media>
                    </div>
                    <hr/>
                </Col>
            </Row>
        </React.Fragment>
    );
  }
}

export default PoliticsTab;
