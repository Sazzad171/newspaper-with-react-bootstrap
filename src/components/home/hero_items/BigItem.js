import React, { Component } from 'react'

import {Col, Image} from 'react-bootstrap'

import NewsOne from "../../../images/news-1.jpg"

class BigItem extends Component {
  
    render() {
      return (
        <Col lg="6" className="big-image mb-3">
            <Image src={NewsOne} alt="News One" fluid/>
            <div className="news-overlay position-absolute">
                <div>
                    <h2 className="heading">
                        <a href="gfd">If Obama Had Ruled Like This in 2009, He’d Be the Reforming President We All Hoped For</a>
                    </h2>
                    <p className="text-blue">Published: 23 Feb 2021</p>
                </div>
            </div>
        </Col>
      )
    }
    
  }
  
  export default BigItem;