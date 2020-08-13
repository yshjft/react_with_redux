import AddNumber from "../components/AddNumber";
import React, { Component } from "react";
import store from "../store";

// container component
// 컴포넌트가 redux에 종속되는 것을 방지하기위해 사용한다.
// 컴포넌트가 redux에 종속될 경우 재사용이 어렵다.
export default class extends Component{
    render(){
        return <AddNumber onClick={function(_size){
            store.dispatch({type : "INCREMENT", size:_size});
        }}></AddNumber>
    }
}