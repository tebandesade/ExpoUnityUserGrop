import React, { Component } from 'react';
import { Container, TabContent, TabPane, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import './content.css';


class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="tabcontent">
<TabContent className="miContenido" activeTab={String(this.props.dataTab)}>
          <TabPane  className="miContenido1" tabId="0">
            <Row>
              <Col lg="12">
                <h1 >  <b>Bienvenidos a la web oficial del </b></h1>
              </Col>
            </Row>
                <Row>
              <Col lg="12">
                <h1 >  <b>Expo Unity User Group</b></h1>
              </Col>
            </Row>
               <Row>
              <Col lg="12">
                <p className="lead"> Único evento oficial de la comunidad Unity User Group Colombia</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane  className="miContenido2" tabId="1">
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
          </TabPane>
        </TabContent>
    </Container>
    );
  }
}

export default Content;