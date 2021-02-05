import React, {Component} from 'react';
import {Card, CardImg, CardText, CardTitle, CardBody, Col} from 'reactstrap';

export default class MainOption extends Component {
  state = {collapse: false};

  toggle = () => {
    this.setState({collapse: !this.state.collapse});
  };

  render() {
    return (
      <Col xs="12" md="6" lg="4">
        <Card className='card-style text-left'>
          <div className="card-img-container">
            <CardImg className='cardImg' top width="100%" src={require(`../../img/${this.props.desc.img}`)}
                     alt={this.props.desc.alt}/>
          </div>
          <CardBody>
            <CardTitle tag="h5" className="card-title-intro">{this.props.desc.title}</CardTitle>
            <div className="underline"></div>
            <CardText>{this.props.desc.description}</CardText>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
