import React, {Component,Fragment} from 'react';
const Button = ({changeFalse, lable}) => (
    <button onClick ={changeFalse}>{lable}</button>
)
export default class Toggle extends Component {
    state = {on:false};
    toggle =  () => {
        this.setState(prevState => ({on: !prevState.on}));
    };
render(){
    
    const {on} = this.state;
    const {children} = this.props;
    return(
        <Fragment>
        <button onClick={this.toggle}>SomeText</button>
        <Button lable='go away' changeFalse={this.toggle}/>
        {on && children}
        </Fragment>
    );
}
}