import React, { Component } from 'react'

import newsImg from "../../images/news-1.jpg"

export default class NewsDetailsArea extends Component {
  render() {
    return (
      <>
        <h3 className="heading">
          China fines Alibaba record $2.75bn for anti-monopoly violati
        </h3>
        <p className="published-time text-blue">Published: 12 April 2021</p>
        <img src={ newsImg } alt="News img" className="img-fluid mb-2"/>
        <p className="photo-credit text-center mb-4">Photo Credit: Collected</p>
        <p className="news-details">
          (Reuters) - Berkshire Hathaway Inc reversed course on Friday and told an activist group it could present a shareholder proposal remotely for the companys May 1 annual meeting, in line with renewed gu… [+2722 chars]
          (Reuters) - Berkshire Hathaway Inc reversed course on Friday and told an activist group it could present a shareholder proposal remotely for the companys May 1 annual meeting, in line with renewed gu… [+2722 chars]
          <br/><br/>
          (Reuters) - Berkshire Hathaway Inc reversed course on Friday and told an activist group it could present a shareholder proposal remotely for the companys May 1 annual meeting, in line with renewed gu… [+2722 chars]
        </p>
      </>
    )
  }
}
