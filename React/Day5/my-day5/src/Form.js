import React,{Component} from 'react';
// import Toggle from 'Toggle';


const PURFORM = {
    names: '',
    email: '',
    color:'',
    size:'',
    }

    export default class SignUpForm extends Component{
state = {
    ...PURFORM
}
handleChange = ({target}) => {
    const {name, value} = target;
    this.setState({[name]:value})
}
handleSubmint = evt => {
    evt.preventDefault();
    console.log(
       this.state
    )
    this.reset();
}
reset = () => {
    this.setState({...PURFORM})
}
render(){
const {names, email, color, size} = this.state;

    return(
        <form onSubmit={this.handleSubmint}>
            <p><input
            type = 'text'
            name = 'names'
            value = {names}
            onChange= {this.handleChange}
            placeholder = "Enter your name"
            />
            </p>
            <p><input
            type = 'email'
            name = 'email'
            value = {email}
            onChange= {this.handleChange}
            placeholder = "Enter your email"
            />
            </p>
            <p></p>
            <label>
                Chose your color
                <select name="color" value={color} onChange= {this.handleChange}>
                    <option value='red' >red</option>
                    <option value='blue' >blue</option>
                    <option value='green' >green</option>
                </select>
            </label>
            <p></p>
            <label>
                Chose your size
                <select name="size" value={size} onChange= {this.handleChange}>
                    <option value='L' >L</option>
                    <option value='XL' >XL</option>
                    <option value='XXL' >XXL</option>
                </select>
            </label>
            <p></p>
        <button>Byu this {names}</button>
        </form>
    )
}
    }