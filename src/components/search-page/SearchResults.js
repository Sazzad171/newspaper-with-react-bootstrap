import React, { Component } from 'react'

import { Card, Button } from 'react-bootstrap'

import NewsOne from "../../images/news-1.jpg"

export default class SearchResults extends Component {
  render() {
    return (
      <section className="search-results my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <Card>
                <Card.Img variant="top" src={ NewsOne } />
                <Card.Body>
                  <Card.Title>News Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="secondary">Read More</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-3">
              <Card>
                  <Card.Img variant="top" src={ NewsOne } />
                  <Card.Body>
                    <Card.Title>News Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="secondary">Read More</Button>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-md-4 mb-3">
              <Card>
                  <Card.Img variant="top" src={ NewsOne } />
                  <Card.Body>
                    <Card.Title>News Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="secondary">Read More</Button>
                  </Card.Body>
                </Card>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
