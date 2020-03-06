import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import data from '../data';

export default class CommentForm extends Component {
  state = {
    text: '',
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { personIndex } = this.props;
    const { text } = this.state;
    data[personIndex].comments.push({
      text
    });
  }

  render = () => {
    const { text } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Label>Entrez votre commentaire</Form.Label>
        <Form.Control
          as="textarea"
          onChange={this.handleChange}
          value={text}
          row="3"
        />
        <Button type="submit" variant="primary" disabled={text === ''}>Submit</Button>
      </Form>
    )
  }

}