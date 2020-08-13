import AddNumber from "../components/AddNumber";
import {connect} from "react-redux";

// mapDispatchToProps
// 1번째 인자로 store.dispatch라는 API를 공급
function mapReduxDispatchToReactProps(dispatch){
    return {
        onClick:function(size){
            dispatch({type : "INCREMENT", size:size});
        }
    }
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);


/* without react-redux
container component
컴포넌트가 redux에 종속되는 것을 방지하기위해 사용한다.
컴포넌트가 redux에 종속될 경우 재사용이 어렵다.
문제는 중간에 컴포넌트 사이에 컨테이너가 들어가 코드가 복잡해진다.

import React, { Component } from "react";
import store from "../store";
export default class extends Component{
    render(){
        return <AddNumber onClick={function(_size){
            store.dispatch({type : "INCREMENT", size:_size});
        }}></AddNumber>
    }
}
*/