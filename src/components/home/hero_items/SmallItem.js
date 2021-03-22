import React, { Component } from 'react'

import {Col, Image} from 'react-bootstrap'

import NewsTwo from "../../../images/news-2.jpg"

class SmallItem extends Component {
  
    render() {
      return (
        <Col md="6" className="mb-3 pl-md-0">
            <Image src={NewsTwo} alt="News One" fluid/>
            <div className="news-overlay small-img position-absolute">
                <div>
                    <h5 className="heading">
                        <a href="fds">If Obama Had Ruled Like This in 2009, He’d Be the Reforming President</a>
                    </h5>
                    <p className="text-blue">Published: 23 Feb 2021</p>
                </div>
            </div>
        </Col>
      )
    }
    
  }
  
  export default SmallItem;