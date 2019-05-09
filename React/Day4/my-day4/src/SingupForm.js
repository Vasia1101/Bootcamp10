import React, {Component} from 'react';

const PURFORM = {
    login:'',
    email:'',
    pass:'',
    gender:'',
    age:'',
    agreeeToTerm:false
}

export default class SingupForm extends Component{
    state ={
        ...PURFORM
    };
    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]:value})
    };
    handleSubmint = evt => {
        evt.preventDefault();
        
        console.log(this.state)
        this.reset();
    };
    reset = () => {
        this.setState({...PURFORM})
    };
    handleAgre=({target:{checked}}) => {
this.setState({agreeeToTerm:true})
    }
    render (){
        const {login, email, pass, age, agreeeToTerm} = this.state;
        return (
            <form onSubmit={this.handleSubmint}>
                <p><input 
                type='text'
                name='login'
                value={login}
                onChange={this.handleChange}
                placeholder='Enter your login'
                />
                </p>
                <p>
                 <input 
                type='text'
                name='email'
                value={email}
                onChange={this.handleChange}
                placeholder='Enter your email'
                />
                </p>
                <p>
                <input
                type='password'
                name='pass'
                value={pass}
                onChange={this.handleChange}
                placeholder='Enter your password'
                />
                </p>
                <section>
                    <h2> Who are you mother-facka?</h2>
                    <label>
                        Male
                        <input 
                        type='radio'
                        name='gender'
                        value='male'
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Female
                        <input 
                        type='radio'
                        name='gender'
                        value='female'
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Chose your age
                        <select name="age" value={age} onChange={this.handleChange } >
                        <option value="" disabled>...</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="35+">35+</option>
                        </select>
                    </label>
                    <p></p>
                    <label>
                        <input
                        type="checkbox"
                        checked={agreeeToTerm}
                        onChange={this.handleAgre}
                        />
                    </label>
                </section>
                <button disabled={!agreeeToTerm}>Sign up as {login}</button>
            </form>
        )
    }
}