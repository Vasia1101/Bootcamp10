import React,{Component} from 'react';

export default class NoteEditor extends Component{
    state={
        text:''
    };
    handleChange=({target:{value,  name}}) => {
        this.setState({
            [name]:value
        })
    }
    handleSubmint = e => {
        e.preventDefault();
        this.props.onSubmint(this.state.text);
        this.setState({text:''})
    }
    
    render(){
        const {text} = this.state;
        return(
            <form onSubmit={this.handleSubmint}>
                <input 
                type='text'
                name='text'
                value={text}
                onChange={this.handleChange}
                autoComplete='off'
                />
                <button>Enter fucking zametky</button>
            </form>
        )
    }
}