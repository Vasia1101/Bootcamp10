import React, {Component} from 'react'
import { Transition } from 'react-transition-group';

const gefaultStyle = {
    margin: '0 auto',
    width: 400,
    height: 400,
    background: '#009666',
    opacity:0,
    transition: "opasity 500ms ease-in-out",
    
};

const transitionStyle = {
    entering:{opacity:0},
    entered:{opacity:1},
};

export default class MyComponent extends Component{
    state ={
        visible: false
    };
    toggle = () => {
        this.setState(prevState => ({visible: !prevState.visible}))
    };
    render(){
        const {visible} = this.state;
        return(
            <div>
                <button onClick={this.toggle}>Click</button>
                <Transition in={visible} timeout={1000} unmountOnExit>
{
    state => (
        <div>
            <h1>
                Current State: {state}
            </h1>
            <div  style={{...gefaultStyle, ...transitionStyle[state]}}></div>
        </div>
    )
}
                </Transition>
            </div>
        )
    }
}