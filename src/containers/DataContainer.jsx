import React, { Component } from 'react';
import Axios from 'axios';

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  fetchData = () => {
    const { resource, id } = this.props.match.params;
    let url = `https://randomuser.me/api/?page=1&results=10&seed=abc&nat=fr`;
    // if (id) {
    //   url += `/${id}`;
    // }
    Axios.get(url)
      .then(response => {
        console.log(response);
        this.setState({ data: response.data })
      })
      .catch(error => console.log(error));
  }

  componentDidMount = () => {
    this.fetchData();
  }

  render = () => {
    const { resource, id } = this.props.match.params;
    const { data } = this.state;
    return (
      <div>DataContainer</div>
    )
  }

}