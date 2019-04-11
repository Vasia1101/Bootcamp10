import React, {Fragment} from 'react';
// import DishesMenu from './assets/menujson.';

const Dishes = ({title, children}) => (
    <Fragment>
    <h2>{title}</h2>
    <input label="true"/>
    {
        children
    }
    </Fragment>
);
export default Dishes;

