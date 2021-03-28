import React, { Component } from 'react';

import { Media } from 'react-bootstrap';

import News from '../../../../images/news-2.jpg'

class LatestNews extends Component {
  render() {
    return (
        <div className="latest-news-area">
          <h3>Latest News</h3>
          <div class="marquee-area">
              <div class="marquee">
              <div class="list-group">
                <a href="#" class="list-group-item">
                  <Media>
                    <img className="mr-3 news-img" src={News} alt="Generic placeholder" />
                      <Media.Body>
                        <p className="mb-0">
                          Dapibus ac facilisis in. Morbi leo risus.
                        </p>
                      </Media.Body>
                  </Media>
                </a>
                <a href="#" class="list-group-item">
                  <Media>
                    <img className="mr-3 news-img" src={News} alt="Generic placeholder" />
                      <Media.Body>
                        <p className="mb-0">
                          Dapibus ac facilisis in. Morbi leo risus.
                        </p>
                      </Media.Body>
                  </Media>
                </a>
                <a href="#" class="list-group-item">
                  <Media>
                    <img className="mr-3 news-img" src={News} alt="Generic placeholder" />
                      <Media.Body>
                        <p className="mb-0">
                          Dapibus ac facilisis in. Morbi leo risus.
                        </p>
                      </Media.Body>
                  </Media>
                </a>
                <a href="#" class="list-group-item">
                  <Media>
                    <img className="mr-3 news-img" src={News} alt="Generic placeholder" />
                      <Media.Body>
                        <p className="mb-0">
                          Dapibus ac facilisis in. Morbi leo risus.
                        </p>
                      </Media.Body>
                  </Media>
                </a>
                <a href="#" class="list-group-item">
                  <Media>
                    <img className="mr-3 news-img" src={News} alt="Generic placeholder" />
                      <Media.Body>
                        <p className="mb-0">
                          Dapibus ac facilisis in. Morbi leo risus.
                        </p>
                      </Media.Body>
                  </Media>
                </a>
              </div>
              </div>
          </div>
        </div>
    );
  }
}

export default LatestNews;
