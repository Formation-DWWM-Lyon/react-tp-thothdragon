import React, { Component } from 'react';
import Axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  fetchData = () => {
    let url = `https://randomuser.me/api/?page=1&results=10&seed=abc&nat=fr`;
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
        <ListGroup>
          {data.results.map((item, index) =>
            <ListGroup.Item>
              {/* <Link to={`/${resource}/${id}`}> */}
              {item.name.title} {item.name.first} {item.name.last}
              {/* </Link> */}
            </ListGroup.Item>
          )}
        </ListGroup>
      );
    }
  }

}