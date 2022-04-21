import Nav from "./components/Nav"
import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import RacerTable from "./views/RacerTable";
import Kekambas from "./views/Kekambas";
import Posts from "./views/Posts";
import Home from "./views/Home";


export default class App extends Component { // exported in same line as class creation
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      racers: [],
      name: null
    }
  } 

  
  handleNameChange = (name) => {
    this.setState({name})
  }

  handleButtonClick = (step) => {
    let newCount = this.state.count + step
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <> 
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home handleClick={this.handleButtonClick} count={this.state.count} name={this.state.name} handleNameChange={this.handleNameChange} />}/>
            <Route path="racers" element={<RacerTable />}/>
            <Route path="kekambas" element={<Kekambas />}/>
            <Route path="posts" element={<Posts />}/>
            
          </Routes>

        </div>
      </> // This is the parent tag, a marker for content to be read, not functional
    ) // this is the return App content closer
  } // this curly bracket is the App() function closer
}



// function App(){ //function based render component for APP
//   return (
//     <> 
//     <Nav />
//     <div className="container">
//       <h1>Test</h1>
//       <Button step={1} />
//       <Button step={10} />
//       <Button step={100} />
//       <Button step={1000} />
//     </div>
//     </> // This is the parent tag, a marker for content to be read, not functional
//   ) // this is the return App content closer
// } // this curly bracket is the App() function closer


 // exports to index.js to be rendered
