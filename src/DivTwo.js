import React, {Component} from "react"

class DivTwo extends Component {
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
              <h3 onClick={this.changeIt}>{this.props.name}</h3>
          </div>
        )  
        
    }

    }



export default DivTwo