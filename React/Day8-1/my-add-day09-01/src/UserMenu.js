import React from 'react';
import Button from './Button';
import s from './UserMenu.module.css';

const UserMenu = ({
    image = 'https://placeimg.com/320/240/people', name = 'V/S/', onSignOut = () => null
}) => (
    <section>
        <img className={s.avatar} src={image} alt='avatar'/>
        <span className={s.name}>{name}</span>
        <Button label='Sign Out' onClick={onSignOut} castomClassName={s.button}/> 
    </section>
)

export default UserMenu;