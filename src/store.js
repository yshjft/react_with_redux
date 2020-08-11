import {createStore} from 'redux';

export default createStore(function(state, action){
    if(state===undefined){
        return {number :0}
    }
    if(action.type === 'INCREMENT'){
        // spread operator(객체 또는 배열 복사)
        // 참고 :  https://velog.io/@chlwlsdn0828/Js-Spread-%EC%97%B0%EC%82%B0%EC%9E%90-Rest-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0
        return {...state, number : state.number + action.size} 
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());