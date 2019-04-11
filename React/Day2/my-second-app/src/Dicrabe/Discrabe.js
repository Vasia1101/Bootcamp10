import React, {Fragment} from 'react';
import Button from './Button/Button';

const Discrabe = ({name, descr, price}) => (
<Fragment>
    
<ul className="container">
          <p className="colorName">
            {name}
          </p>
          <h1 className="nameClose">LEONARD COAT</h1>
          <p className="opusClose">Minimalistic coat in-blend</p>
          <p className="loremOpus">{descr}</p>
          <span className="chena">{price}</span>
          <Button/>

          </ul>
</Fragment>
)
export default Discrabe;