import React, { Component } from 'react';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
import { PeopleList } from '../components';
import { ProfilePage } from '../pages';

const componentByType = {
  list: PeopleList,
  profile: ProfilePage,
}

export default class DataContainer extends Component {
  state = {
    data: null,
  }

  fetchData = () => {
    // const { id } = this.props.match.params;
    const now = new Date();
    const seed = now.getMinutes();

    // let url = `https://randomuser.me/api/?page=${id}&results=10&seed=${seed}&nat=fr`;
    let url = `https://randomuser.me/api/?page=1&results=10&seed=${seed}&nat=fr`;
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

  // componentDidUpdate = (prevProps) => {
  //   const { id } = this.props.match.params;

  //   if (id !== prevProps.match.params.id) {
  //     this.setState({ data: null });
  //     this.fetchData();
  //   this.props.match.params.id = Number(this.props.match.params.id) + 1;
  //   }
  // }

  render = () => {
    const { type } = this.props;
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

    const ComponentName = componentByType[type];

    console.log('LOG de DATA', data);
    return (
      <ComponentName
        people={data.results}
        fetchData={this.fetchData}
      />
    );
  }

}