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
    const { id } = this.props.match.params;
    let url = `https://randomuser.me/api/?page=${id}&results=10&seed=zqsd&nat=fr`;
    Axios.get(url)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => console.log(error));
  }

  componentDidMount = () => {
    this.fetchData();
    this.props.match.params.id = Number(this.props.match.params.id) + 1;
  }

  componentDidUpdate = (prevProps) => {
    const { id } = this.props.match.params;

    if (id !== prevProps.match.params.id) {
      this.setState({ data: null });
      this.fetchData();
      this.props.match.params.id = Number(this.props.match.params.id) + 1;
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
          <ListGroup>
            {data.results.map((item, index) =>
              <ListGroup.Item>
                <Link to={`/${this.props.match.params.id}/profile`}>
                  {item.name.title} {item.name.first} {item.name.last}
                </Link>
              </ListGroup.Item>
            )}
          </ListGroup>
          <Link to={`/${this.props.match.params.id}`}>
            <Button>Page suivante</Button>
          </Link>
        </div>
      );
    }
  }

}