import React, {Component} from 'react';
import './URLComponent.css';

class URLComponent extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
           url: ''
        }
        this.updateState = this.updateState.bind(this);
     };
     updateState(e) {
        this.setState({url: e.target.value});
     }
     render() {
        return (
           <div>
              <input type = "text" value = {this.state.url} 
                 onChange = {this.updateState} />
              <h4>{this.state.url}</h4>
           </div>
        );
     }
  }

  export default URLComponent