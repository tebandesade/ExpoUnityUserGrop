import React, { Component } from 'react';
import { Container, TabContent, TabPane , Row, Col,Card, CardTitle,Button,CardText, Input} from 'reactstrap';
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
this.handleChangeDescri = this.handleChangeDescri.bind(this)
this.handleSubmitChange = this.handleSubmitChange.bind(this)
    this.state= {
      new_descri:''
    };
  }

  handleChangeDescri(event) {
  
    this.setState({new_descri: event.target.value});
  
   
  }

    handleSubmitChange(id_) {
    this.props.cambiar(this.state.new_descri,id_)
        axios.put('http://localhost:3001/updateProject/',{ data:{
        id: id_,
        descripcion: this.state.new_descri
      }})
      .then(response => {
        console.log('axioos: ', response)
        if(response.data.length===0)
        {
          alert('Algo esta mal')
        }
        else{
          console.log('mi respuesta: ',response)
        return response
        }

      })
      .catch(function (error) {
        console.log(error);
      })

     
  }

  render(){
      
    const update = (dueno,nombre,descri,id) => {
     
      let {user} = this.props; 
       console.log('nombre dueno: ', user)
      try{

      if(user[0].correo.toLowerCase()===dueno)
      {

        return ( 
          <div>   <CardTitle>{nombre}</CardTitle>
                  <CardText className='textoProyecto'>
                   <Input type="textarea" rows="5" name="text"  id="exampleText" defaultValue={descri} onChange={this.handleChangeDescri}></Input>
                   </CardText>
                    <Row>
              <Col sm="6">
                <Button>Más</Button>
              </Col>
               <Col sm="6">
                <Button className="pepe" onClick={()=>this.handleSubmitChange(id)}>Editar</Button>
              </Col>
            </Row></div>
)
      }
      else{

        return(<div>   <CardTitle>{nombre}</CardTitle>
                  <CardText className='textoProyecto'>{descri}</CardText>
                  <Button>Más</Button> </div>)
      }
    }
    catch(error){

       return (   <div> <CardTitle>{nombre}</CardTitle>
                  <CardText className='textoProyecto'>{descri}</CardText>
                  <Button>Más</Button></div>)
          }
  }
    const {data} = this.props; 
    
  const proyectos= data.map( proy =>{

          return(
                <Col lg="4">
                <Card key={proy.id}body>

              <img className='imagen' src={proy.logourl} alt="logo proyecto" height="50%" width="50%" />
                  {update(proy.correo,proy.nombre,proy.descripcion,proy.id)}  

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
    this.cambiarTexto = this.cambiarTexto.bind(this)
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


      cambiarTexto = (filterValue,id_) =>  {
        console.log('cambiar Texto', filterValue,id_)
        const newList = [...this.state.proyectos];
        const theProyect = newList.map(function(proyecto,indice,arr)  {

          
          if(proyecto.id===id_){
            if(proyecto.descripcion!==filterValue){
              proyecto.descripcion = filterValue;
            newList[indice]=proyecto
            }

            //this.setState({proyectos:newList})
          
          }
         
        })

      
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
            <Proyectos data={this.state.proyectos.filter(obj=> obj.expoid===4)}user={this.props.user} cambiar={this.cambiarTexto}></Proyectos>
          </TabPane>
        </TabContent>
    </Container>
    );
  }
}

export default Content;