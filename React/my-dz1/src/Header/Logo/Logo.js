import React, {Component}  from 'react';
import s from './Logo.module.css';
class Logo extends Component {
    render() {
        return (
            <div >
            <img className={s.image} src="https://placeimg.com/240/240/arch?t=1555220700357" alt="logo"/>
        </div>
            
        )
    }
}








export default Logo;