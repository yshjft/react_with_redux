import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';

// mapStateToProps
// redux의 store 값이 바뀔 때마다 호출된다(subscribe 역할)
// state == redux의 state
/*
return{
    (전달될 props 이름) : (공급될 값)
}
*/
function mapReduxStateTReactoProps(state){
    return {
        number: state.number
    }
}

// connect()의 return 값은 함수이다.
// return된 함수를 통해 만들어진 값을 export 한다.
// 최종적으로 wrapping된 컴포넌트가 return된다.
// props 또한 자동 전달한다.
export default connect(mapReduxStateTReactoProps)(DisplayNumber);


/* without react-redux
import React, { Component } from "react";
import store from "../store";
export default class extends Component{
    state={number : store.getState().number};
    constructor(props){
        super(props);
        store.subscribe(function(){
            this.setState({number : store.getState().number});
        }.bind(this));
    }
    render(){
        return <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>;
    }
}
*/