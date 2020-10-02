import React from 'react';
import PropTypes from 'prop-types';

import  {
Buttoncomponent
}
from './Button.style';

const Button = (props) => {
    return(
        <div>
        <Buttoncomponent primary={props.primary}>{props.text}</Buttoncomponent> 
        </div>
    );
}



Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
   
    

}

export default Button;