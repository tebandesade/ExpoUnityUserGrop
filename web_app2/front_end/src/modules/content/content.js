import React, { Component } from 'react';
import { Container, TabContent, TabPane , Row, Col,Card, CardTitle,Button,CardText} from 'reactstrap';
import './content.css';
import logo2015 from '../expo/images/logo2015.jpg';
import logo2016 from '../expo/images/logo2016.jpg';
import logo2017 from '../expo/images/logo2017.jpg';
import logo2018 from '../expo/images/logo2018.jpg';
import axios from 'axios';


class Countries extends Component {
  render(){
    const {data} = this.props;
  const countries= data.map( proy =>{
    console.log(data[2].logo)
          return(
                <Card key={proy.id}body>

      

                 <img className='imagen' src='/datos/expo2018/shaio/logo.png' alt="logo proyecto" height="50%" width="50%" />
    
                  <CardTitle>{proy.nombre}</CardTitle>
                  <CardText>{proy.descripcion}</CardText>
                  <Button>Go somewhere</Button>
                </Card>
  )
        })
  return(
    <Row>
    <Col lg="4">
        {countries}
        </Col>
        </Row>
    )

}

}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state= { proyectos : [{id:0,expo:4,owner:'prueba',nombre:'Exorcist',descripcion:'Exorciza a las criaturas del inframundo en tu libro de sombras.',logo:"/datos/expo2018/exorcist/logo.png"},
                                {id:1,expo:4,owner:'prueba',nombre:'VR Salsa',descripcion:'VR Salsa es un ambiente en realidad virtual que provee herramientas al usuario para adquirir habilidades básicas para bailar salsa, de forma efectiva, divertida, cómoda e intuitiva.',logo:'\datos\expo2018\vrsalsa\logo.png'},
                                {id:2, expo:4,owner:'prueba',nombre:'Corazón Virtual - FCS',descripcion:'es un sistema de inmersión por medio de realidad virtual que permite al observador explorar dos estructuras cardiovasculares: la primera es un corazón humano adulto sin patología estructural en movimiento, donde no sólo se observa la anatomía de las estructuras cardiacas, sino además, es posible apreciar la contracción cardiaca de manera cíclica; la segunda estructura es la Aorta, con una dinámica de tipo recorrido desde la parte descendente hasta la parte ascendente para finalizar observando la válvula aortica. Toda la información observada presenta un alto nivel de fidelidad respecto a un estudio estructural y dinámico (4D) de TAC (Tomografía Axial Computarizada) de un paciente adulto.  Adicionalmente, cuenta con la posibilidad de utilizar audio 3D, por lo tanto, la amplitud y origen del sonido variará según la posición visual del observador. Los sonidos implementados actualmente son segmentaciones pregrabadas de fonocardiograma.   Hemos considerado la denominación 5D para todo este conjunto de posible herramienta Enseñanza. El objetivo de la aplicación es contribuir al aprendizaje práctico en el campo de la morfofisiología. Gracias a los beneficios que presenta la nueva realidad virtual tecnológica, la actividad académica se vuelve más estimulante, puesto que permite tener una percepción de profundidad muy cercana a la de una disección, pero con un componente adicional que es la visualización de la contracción cardiaca.',logo:'/datos/expo2018/shaio/logo.png'}
                                ]}
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
      <Col lg="12">
     <img className="img2015" src={logo2015} alt="logo"/>
      </Col>
      </Row>
          </TabPane>
                    <TabPane  className="miContenido2" tabId="2">
             <Row>
      <Col lg="12">
      <img className="img2016" src={logo2016} alt="logo"/>
      </Col>
        </Row>
        
        
        <Countries data={this.state.proyectos}></Countries>
        
          </TabPane>
                    <TabPane  className="miContenido2" tabId="3">
            <Row>
      <Col lg="12">
     <img className="img2017" src={logo2017} alt="logo"/>
      </Col>
        </Row>
          </TabPane>
                    <TabPane  className="miContenido2" tabId="4">
           <Row>
      <Col lg="12">
     <img className="img2018" src={logo2018} alt="logo"/>
      </Col>
        </Row>
          </TabPane>
        </TabContent>
    </Container>
    );
  }
}

export default Content;