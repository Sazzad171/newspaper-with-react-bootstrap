import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import newsImg from "../../images/news-1.jpg"

import { Media } from 'react-bootstrap';

export default class RelatedNews extends Component {
  render() {
    return (
      <>
        <div className="latest-news-area">
          <h3>Related News</h3>
            <div className="list-group">
              <Link to={ "/news?id=" } className="list-group-item">
                <Media>
                  <img
                    className="mr-3 news-img"
                    src={ newsImg }
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <p className="mb-0">China fines Alibaba record $2.75bn for anti-monopoly violati</p>
                  </Media.Body>
                </Media>
              </Link>
              <a href="dfs" className="list-group-item">
                <Media>
                  <img
                    className="mr-3 news-img"
                    src={ newsImg }
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <p className="mb-0">China fines Alibaba record $2.75bn for anti-monopoly violati</p>
                  </Media.Body>
                </Media>
              </a>
              <a href="dfs" className="list-group-item">
                <Media>
                  <img
                    className="mr-3 news-img"
                    src={ newsImg }
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <p className="mb-0">China fines Alibaba record $2.75bn for anti-monopoly violati</p>
                  </Media.Body>
                </Media>
              </a>
              <a href="dfs" className="list-group-item">
                <Media>
                  <img
                    className="mr-3 news-img"
                    src={ newsImg }
                    alt="Generic placeholder"
                  />
                  <Media.Body>
                    <p className="mb-0">China fines Alibaba record $2.75bn for anti-monopoly violati</p>
                  </Media.Body>
                </Media>
              </a>
            </div>
        </div>
      </>
    )
  }
}
