import React, {Fragment} from 'react';
import './App.css';
import Header from './header/Header';
import Dishes from './dishes/Dishes';
import DishesList from './dishes/DishesList';
import db from './dishes/assets/menu.json';


const App = () => (
      <Fragment>
       <Header src={'https://placeimg.com/320/240/arch'}></Header>
    <Dishes tittle ="Dishes-title">
<DishesList db={db}/>
    </Dishes>

      </Fragment>
    );
  

export default App;
