import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Row, Col, Image, Media } from 'react-bootstrap';

import {
  FaShareAlt,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
} from 'react-icons/fa';

import axios from 'axios';
import Skeleton from 'react-loading-skeleton';


class BusinessTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buisness: ['1', '2', '3'],
      loading: true
    };
  }
  componentDidMount() {
    axios
      .get(
        'http://localhost:5000/api/v1/news/buisness'
      )
      .then((response) => {
        console.log(response.data.data.articles);
        this.setState({
            buisness: response.data.data.articles,
            loading: false
        });
      });
  }
  render() {
    const { buisness, loading } = this.state;
    return (
      <>
        <Row className="pt-4">
          {  buisness.slice(1,3).map((item, index)=>(
               <Col lg="6" key={index} className="mb-3">
               <div className="news-text-in-img">
                 { loading ? <Skeleton width='100%' height={300}/> : <Image src={item.urlToImage} alt="News One" /> }
                 <div className="news-overlay position-absolute">
                   <div className="w-100">
                     <h6 className="heading">
                       <Link to={ "/news?id=" }>{item.title}</Link>
                     </h6>
                     <Row>
                       <Col>
                         <p className="text-blue">{item.publishedAt}</p>
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
               <hr />
             </Col>
          ))}
        </Row>
        <Row className="pb-4">
            {buisness.slice(3, 7).map((item, index)=>(
                <Col lg="6" key={index}>
                <div className="news-text-out-img">
                  <Media>
                    <Link to={ "/news?id=" }>
                      { loading ? <Skeleton width='100%' height={200}/> : <img className="mr-3" src={item.urlToImage} alt="Generic placeholder" /> }
                    </Link>
                    <Media.Body>
                      <h6>
                        <Link to={ "/news?id=" }>{item.title}</Link>
                      </h6>
                      <p>
                       {item.content && item.content.substring(0, 50)}
                      </p>
                      <p className="text-blue">Published: {item.publishedAt}</p>
                    </Media.Body>
                  </Media>
                </div>
                <hr />
              </Col>
            ))}
          
        </Row>
      </>
    );
  }
}

export default BusinessTab;
