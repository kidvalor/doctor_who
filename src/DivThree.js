import React, {Component} from "react"


class DivThree extends Component {
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
constructor(props){
super(props)  
}
      render(){
        return(
            <div>
         <h3 onClick={this.changeIt}>{this.props.name}</h3>
          </div>
        )  

    }
    

    }


export default DivThree