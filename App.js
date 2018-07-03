import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  constructor(){
    super();

    this.state={
      data:[
        {
          "id":1,
          "name":"Foo",
          "age":"20"
       },
       {
          "id":2,
          "name":"Bar",
          "age":"30"
       },
       {
          "id":3,
          "name":"Baz",
          "age":"40"

       }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">HHD COMPETENCY SURVEY</h1>
        </header>
        <p className="App-intro">
         <Header/>
         <table>
         <tbody>
           {/*We can use any variable name for anyvar... Its just a reference*/}
                  {this.state.data.map((anyvar, i) => <Footer key = {i} 
                     data = {anyvar} />)}
               </tbody>
           </table>
        
        </p>
      </div>
    );
  }
}

export default App;
