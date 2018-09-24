import React, { Component } from 'react';
import { Container, TabContent, TabPane , Row, Col,Card, CardTitle,Button,CardText} from 'reactstrap';
import './content.css';
import logo2015 from '../expo/images/logo2015.jpg';
import logo2016 from '../expo/images/logo2016.jpg';
import logo2017 from '../expo/images/logo2017.jpg';
import logo2018 from '../expo/images/logo2018.jpg';
import logo from '../../logouug.png';
import axios from 'axios';


class Proyectos extends Component {
    constructor(props) {
    super(props);
  }

  render(){
      
    const update = (dueno) => {
     
      let {user} = this.props; 
       console.log('nombre dueno: ', user)
      try{

      if(user[0].correo.toLowerCase()===dueno)
      {

        return (              <Row>
              <Col sm="6">
                <Button>Más</Button>
              </Col>
               <Col sm="6">
                <Button>Editar</Button>
              </Col>
            </Row>)
      }
      else{

        return <Button>Más</Button>
      }
    }
    catch(error){

       return <Button>Más</Button>
          }
  }
    const {data} = this.props; 
    
  const proyectos= data.map( proy =>{

          return(
                <Col lg="4">
                <Card key={proy.id}body>

      

                 <img className='imagen' src={proy.logourl} alt="logo proyecto" height="50%" width="50%" />
    
                  <CardTitle>{proy.nombre}</CardTitle>
                  <CardText className='textoProyecto'>{proy.descripcion}</CardText>
                  {update(proy.correo)}  
                </Card>
                    </Col>
  )
        })
  return(
    <Row>
{proyectos}

        </Row>
    )

}

}


class Content extends Component {
  constructor(props) {
    super(props);
    this.state= { proyectos : []}
  }

  componentDidMount()
  {
       let tab_id = this.props.dataTab
       let componentActual = this
      if(this.state.proyectos.length===0){
        axios.get('http://localhost:3001/getData')
      .then(response => {
        console.log('axioos: ', response.data)
        return response
      })
      .then(function(response){
     
  return componentActual.setState({proyectos:response.data})
})
      .catch(function (error) {
        console.log(error);
      })
      }
  }


  render() {
    return (
      <Container className="tabcontent">
      <TabContent className="miContenido" activeTab={this.props.dataTab}>
          <TabPane  className="miContenido1" tabId="0">
<Row>
                 <Col lg="12">
      <img className="logo_uug" src={logo} alt="logo"/>
      </Col>
      </Row>
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
      <Col lg="12">
     <img className="img2015" src={logo2015} alt="logo"/>
      </Col>
      </Row>
          <Proyectos data={this.state.proyectos.filter(obj=> obj.expoid===1)} user={this.props.user}></Proyectos>
          </TabPane>
                    <TabPane  className="miContenido2" tabId="2">
             <Row>
      <Col lg="12">
      <img className="img2016" src={logo2016} alt="logo"/>
      </Col>
        </Row>
        
          <Proyectos data={this.state.proyectos.filter(obj=> obj.expoid===2)}user={this.props.user}></Proyectos>
      
        
          </TabPane>
                    <TabPane  className="miContenido2" tabId="3">
            <Row>
      <Col lg="12">
     <img className="img2017" src={logo2017} alt="logo"/>
      </Col>
        </Row>
            <Proyectos data={this.state.proyectos.filter(obj=> obj.expoid===3)}user={this.props.user}></Proyectos>
          </TabPane>
                    <TabPane  className="miContenido2" tabId="4">
           <Row>
      <Col lg="12">
     <img className="img2018" src={logo2018} alt="logo"/>
      </Col>
        </Row>
            <Proyectos data={this.state.proyectos.filter(obj=> obj.expoid===4)}user={this.props.user}></Proyectos>
          </TabPane>
        </TabContent>
    </Container>
    );
  }
}

export default Content;