import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {  } from 'react-bootstrap';

import { Row, Col, Image, Media } from 'react-bootstrap';

import  axios  from "axios";
import {
    FaShareAlt,
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagram,
  } from 'react-icons/fa';

class CultureTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            culture: [],
        };
      }
      componentDidMount() {
        axios
          .get(
            'http://localhost:5000/api/v1/news/culture'
          )
          .then((response) => {
            console.log(response.data.data.articles);
            this.setState({
                culture: response.data.data.articles,
            });
          });
      }
  render() {
      const {culture}=this.state
    return (
        <React.Fragment>
            <Row className="pt-4">
                {culture.slice(0,2).map((item,index)=>(
                    <Col lg="6" key={index} className="mb-3">
                    <div className="news-text-in-img">
                        <Image src={item.urlToImage} alt="News One"/>
                        <div className="news-overlay position-absolute">
                            <div className="w-100">
                                <h6 className="heading">
                                <Link to={ "/news?id=" }>{item.title}</Link>
                                </h6>
                                <Row>
                                    <Col>
                                        <p className="text-blue">
                                            Published: {item.publishedAt}
                                        </p>
                                    </Col>
                                    <Col>
                                    <div className="share-icon text-right">
                                        <span className="share-all-icon text-light">
                                            <a href="df" className="px-1">
                                            <FaFacebookSquare />
                                            </a>
                                            <a href="df" className="px-1">
                                            <FaTwitterSquare />
                                            </a>
                                            <a href="df" className="px-1">
                                            <FaInstagram />
                                            </a>
                                        </span>
                                        <span className="text-yellow">
                                            <FaShareAlt />
                                        </span>
                                    </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <hr/>
                 </Col>
                ))}
            </Row>
            <Row className="pb-4">
                {culture.slice(3,7).map((item,index)=>(
                     <Col lg="6" key={index}>
                     <div className="news-text-out-img">
                         <Media>
                             <Link to={ "/news?id=" }>
                                 <img
                                     className="mr-3"
                                     src={item.urlToImage}
                                     alt="Generic placeholder"
                                 />
                             </Link>
                             <Media.Body>
                                 <h6>
                                     <Link to={ "/news?id=" }>
                                         {item.title}
                                     </Link>
                                 </h6>
                                 <p>
                                     { item.content && item.content.substring(0, 50) }
                                 </p>
                                 <p className="text-blue">
                                     Published: {item.publishedAt}
                                 </p>
                             </Media.Body>
                         </Media>
                     </div>
                     <hr/>
                 </Col>
                ))}
               
            </Row>
        </React.Fragment>
    );
  }
}

export default CultureTab;
