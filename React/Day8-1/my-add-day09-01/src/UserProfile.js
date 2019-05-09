import React from 'react';
import {AuthContext} from './context/AuthContext';

const UserProfile = () => (
    <AuthContext.Consumer>
        {
            ({user:{image, name, email, phone}}) =>(
    <section>
        <img src={image} alt='user face'/>
        <ul>
            <li>Name: {name}</li>
            <li>Name: {email}</li>
            <li>Name: {phone}</li>
        </ul>
        
    </section>)
        }
    </AuthContext.Consumer>
)

export default UserProfile;