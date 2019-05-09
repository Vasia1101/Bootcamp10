import React from 'react';
import s from './Navigation.module.css';

const Navigation = ({items}) => (
<ul className={s.list}>
    {
        items.map((item=>(<li key={item}><a href='/' className={s.link}>{item}</a></li>)))
    }
</ul>
)

export default Navigation;