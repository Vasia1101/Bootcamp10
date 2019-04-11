import React, { Fragment} from 'react';
import Menu from '../menu/Menu';
import Img from '../Img';

const Header = ({src}) =>{
    const menuItem = [
        {id:1, name:'home'},
        {id:2, name:'portfolio'},
        {id:3, name:'about us'},
        {id:4, name:'price'},
        {id:5, name:'contact'}
       ];
       return(
           <Fragment>
           <h1><a href="#"><Img src={src}/></a></h1>
           {menuItem.length>0 ? (<Menu items={menuItem}/>): <Img src={'https://placeimg.com/640/480/animals/grayscale'}/>}
           </Fragment>
       )
};
export default Header;