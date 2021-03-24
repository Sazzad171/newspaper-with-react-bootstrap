import React, { Component } from 'react';

import { Tabs, Tab, Row, Col, Image, Media } from 'react-bootstrap';

import news from "../../../../images/news-1.jpg"

class AllCategoryTab extends Component {
  render() {
    return (
        <div className="all-cat-tab">
            <Tabs defaultActiveKey="business" id="uncontrolled-tab-example">
                <Tab eventKey="business" title="Business">
                    <Row className="py-4">
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
                                                        fb twt insta
                                                    </span>
                                                    <span className="text-yellow"> Share </span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                            <hr/>
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
                        </Col>
                        <Col lg="6" className="mb-3">
                            <div className="news-text-in-img">
                                <Image src={news} alt="News One"/>
                                <div className="news-overlay position-absolute">
                                    <div>
                                        <h4 className="heading">
                                        <a href="gfd">Sample name</a>
                                        </h4>
                                        <p className="text-blue">
                                            Published: 23 Feb 2021
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
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
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="culture" title="Culture">
                
                    </Tab>
                <Tab eventKey="politics" title="Politics">
                
                </Tab>
                <Tab eventKey="sports" title="Sports">
                
                </Tab>
            </Tabs>
        </div>
    );
  }
}

export default AllCategoryTab;
