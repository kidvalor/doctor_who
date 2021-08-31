import React, {Component} from "react";
import DivOne from "./DivOne";
import DivTwo from "./DivTwo"
import DivThree from "./DivThree"
import './App.css';

class App extends Component {
  constructor(){
    super()
      this.state = {
        tardis: {
          name: 'Time and Relative Dimension in Space',
          caps: false,
        }
      }
    }
     
    changeIt = (text) =>  {
      if (this.state.tardis.caps) {
        this.setState({
          tardis: {
            name: text.toLowerCase(),
            caps: false
          }
        })
      } else {
        this.setState({
          tardis: {
            name: text.toUpperCase(),
            caps: true
          }
        })
        
      }
    
      this.changeIt = this.changeIt.bind(this)

}

    
render(){
  return(
    <div>
          {/* <h3>{this.state.tardis.name}</h3> */}

    <DivOne />
    <DivTwo name={this.state.tardis.name}>
    <DivThree  name={this.state.tardis.name} />
    </DivTwo>
    <DivThree  name={this.state.tardis.name}/> 
    
  </div>
  )  
}   
  
  }
 
 
  
     
     



export default App



