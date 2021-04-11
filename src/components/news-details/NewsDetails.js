import React, { Component } from 'react'
import NewsDetailsArea from './NewsDetailsArea'
import RelatedNews from './RelatedNews'

export default class NewsDetails extends Component {
  render() {
    return (
      <>
        <section className="news-details-page py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mb-3">
                <NewsDetailsArea/>
              </div>
              <div className="col-md-4 mb-3">
                <RelatedNews/>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
