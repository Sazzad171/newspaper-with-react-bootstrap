import React, { Component } from 'react'

import {Col, Image} from 'react-bootstrap'

// import NewsOne from "../../../images/news-1.jpg"
import axios from 'axios'

class BigItem extends Component {

    // const {headLine,setHeadLine}=useState('');
    constructor(props) {
      super(props);
      this.state = {
        headLine: [],
      };
    }

    componentDidMount() {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=1fc1824e40174167b4cfafb5a39ddb11')
            .then(response=>{
              this.setState({
                headLine:response.data.articles[0]
              })
            })
      }
  
    render() {
      const {headLine} =this.state
      return (
        <Col lg="6" className="big-image mb-3">
            <Image src={headLine.urlToImage} alt="News One" fluid/>
            <div className="news-overlay position-absolute">
                <div>
                    <h2 className="heading">
                        <a href="gfd">{headLine.title}</a>
                    </h2>
                    <p className="text-blue">Published: {headLine.publishedAt}</p>
                </div>
            </div>
        </Col>
      )
    }
    
  }
  
  export default BigItem;