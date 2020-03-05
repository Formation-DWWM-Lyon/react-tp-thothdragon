import React, { Component } from 'react';
import Axios from 'axios';
import { ListGroup, Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  fetchData = () => {
    const { id } = 0;
    let url = `https://randomuser.me/api/?page=${id}&results=10&seed=zqsd&nat=fr`;
    Axios.get(url)
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(error => console.log(error));
  }

  componentDidMount = () => {
    this.fetchData();
  }

  render = () => {
    const { data } = this.state;
    const { id } = 0;

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
      return (
        <div>
          {/* <h1>Page</h1> */}
          <Button>Page suivante</Button>
          <ListGroup>
            {data.results.map((item, index) =>
              <ListGroup.Item>
                {item.name.title} {item.name.first} {item.name.last}
              </ListGroup.Item>
            )}
          </ListGroup>
        </div>
      );
    }
  }

}