import React, {Component,Fragment} from 'react';

export default class Toggle extends Component {
    state = {on:false};
    toggle =  () => {
        this.setState(prevState => ({on: !prevState.on}));
    };
render(){
    const {children} = this.props;
    const {on} = this.state;
    return(
        <Fragment>
        <button onClick={this.toggle}>SomeText</button>
        {on && children}
        </Fragment>
    );
}
}