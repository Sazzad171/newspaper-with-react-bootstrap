import React, { Component } from 'react'

import {Row, Col, Container} from 'react-bootstrap'

import BigItem from "./hero_items/BigItem"
import SmallItem from "./hero_items/SmallItem"

class HomeHero extends Component {
  
    render() {
      return (
        <section className="home-hero-area py-5">
            <Container fluid>
                <Row>
                    <BigItem/>
                    <Col lg="6">
                        <Row className="h-100">
                            <SmallItem/>
                            <SmallItem/>
                            <SmallItem/>
                            <SmallItem/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
      )
    }
    
  }
  
  export default HomeHero;