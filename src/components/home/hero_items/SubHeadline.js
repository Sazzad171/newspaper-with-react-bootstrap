import React, { Component } from 'react';
import SmallItem from './SmallItem';

import axios from 'axios';

export default class SubHeadline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLine: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=1fc1824e40174167b4cfafb5a39ddb11'
      )
      .then((response) => {
        console.log(response.data.articles);
        this.setState({
          headLine: response.data.articles.slice(1, 5),
        });
      });
  }

  render() {
    const { headLine } = this.state;

    return (
      <>
        {headLine.map((item) => (
          <SmallItem key={item.publishedAt} article={item}></SmallItem>
        ))}
      </>
    );
  }
}
