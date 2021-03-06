import React, { Component } from 'react';
import SmallItem from './SmallItem';

import axios from 'axios';

export default class SubHeadline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headLine: ['1','2','3','4'],
      loading:true
    };
  }
  componentDidMount() {
    axios
      .get(
        'http://localhost:5000/api/v1/news/headline'
      )
      .then((response) => {
        console.log(response.data.data.articles);
        this.setState({
          headLine: response.data.data.articles.slice(1, 5),
          loading:false
        });
      });
  }

  render() {
    const { headLine,loading } = this.state;

    return (
      <>
        {headLine.map((item,index) => (
          <SmallItem key={index} article={item} loading={loading}></SmallItem>
        ))}
      </>
    );
  }
}
