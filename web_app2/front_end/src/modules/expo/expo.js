import React, { Component } from 'react';
import {Container,Row, Col,CardTitle,CardText,Button, Card, Media } from 'reactstrap';
import './expo.css';
import logo2015 from './images/logo2015.jpg'
import logo2016 from './images/logo2016.jpg'
import logo2017 from './images/logo2017.jpg'
import logo2018 from './images/logo2018.jpg'
import Expo2018 from './expo2018/expo2018.js'


class Expo extends Component {
  constructor(props) {
    super(props);
        this.defineImage = this.defineImage.bind(this);
  }

   defineImage = (id_) =>
  {

    console.log(id_)
    if (id_===1){
        return <img className="img2015" src={logo2015} alt="logo"/>
    }
    if(id_===2){
      console.log('aaas')
        return <img className="img2016" src={logo2016} alt="logo"/>
    }
    if (id_===3){
      return <img className="img2017" src={logo2017} alt="logo"/>
    }
    if(id_===4){
       return <img className="img2018" src={logo2018} alt="logo"/>
    }
  }


  render() {
    return (
      <Container>
      <Row>
      <Col lg="12">
      {this.defineImage(this.props.id_expo)}
      </Col>
      </Row>
            <Container>
                 <Row>
              <Col lg="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col lg="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
            </Container>
          </Container>
     
    );
  }
}

export default Expo;