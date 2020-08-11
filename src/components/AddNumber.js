import React, {Component} from 'react';
import store from '../store';

class AddNumber extends Component{
    state={size : 1}
    render(){
      return(
        <div>
          <h1>Add Number</h1>
          <input type="button" value="+" onClick={function(){
            store.dispatch({type : "INCREMENT", size:this.state.size});
          }.bind(this)}></input>
          <input type="text" value={this.state.size} onChange={function(e){
            this.setState({size : Number(e.target.value)}); //문자형을 숫자형으로 변환
          }.bind(this)}></input> 
        </div>
      )
    }
  }

export default AddNumber