import React, { Component } from 'react';

import Header from './modules/header/header.js'
import Content from './modules/content/content.js'
import Auth from './modules/auth/auth.js'
import './App.css';


class App extends Component {

    constructor(props) {
    super(props);
    this.whichTab = this.whichTab.bind(this);
    this.state = {tab: '0', 
                  user:{}};
  }


      whichTab = (filterValue) =>  {
        if(filterValue!==this.state.tab){
        this.setState({tab: filterValue});
      }
    }


      whichUser = (filterValue) =>  {
        if(filterValue!==this.state.user){
          console.log('this userussusuer, ',filterValue )
          this.setState({user: filterValue});
        //this.setState({user: filterValue});
      }
    }

  
  render() {
    return ( 

      <div className="App">
        <Header tabFunc={this.whichTab}></Header>
        <Content dataTab={this.state.tab} user={this.state.user}></Content>
        <Auth userFunc={this.whichUser} usuario={this.state.user}></Auth>
      </div>

    );
  }
}

export default App;
