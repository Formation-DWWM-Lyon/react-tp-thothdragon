import React, { Component } from 'react';
import Axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { PeopleList } from '../components';

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  fetchData = () => {
    const { id } = this.props.match.params;
    const now = new Date();
    const seed = now.getMinutes();

    let url = `https://randomuser.me/api/?page=${id}&results=10&seed=${seed}&nat=fr`;
    Axios.get(url)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => console.log(error));
  }

  componentDidMount = () => {
    this.fetchData();
    // this.props.match.params.id = Number(this.props.match.params.id) + 1;
  }

  componentDidUpdate = (prevProps) => {
    const { id } = this.props.match.params;

    if (id !== prevProps.match.params.id) {
      this.setState({ data: null });
      this.fetchData();
      // this.props.match.params.id = Number(this.props.match.params.id) + 1;
    }
  }

  render = () => {
    const { data } = this.state;
    // const { id } = 1;

    if (!data) {
      return (
        <div className="text-center">
          <Loader
            type="Oval"
            color="#bf9b30"
            height={100}
            width={100}
          />
        </div>
      )
    }

    if (data.results) {
      console.log('LOG de DATA', data);
      return (
        <div>
          <PeopleList
            people={data}
            fetchData={this.fetchData}
          />

          {/* <Link to={`/${this.props.match.params.id}`}>
            <Button>Page suivante</Button>
          </Link> */}
        </div>
      );
    }
  }

}