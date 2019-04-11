import React from 'react';



   const Menu = ({items}) => (
       
       <ul>
           {
               items.map(item => (<li key={item.id}><a href="#"> {item.name}</a></li>))
           }
       </ul>
   )

   export default Menu;