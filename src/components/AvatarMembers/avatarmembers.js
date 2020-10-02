import React from 'react';
import PropTypes from 'prop-types';



import './avatarmembers.css';


const Avatarmemberss = ({src, alt }) => {
    return (
        <img src={src} alt={alt} className="avatarmembers"/>

    );
}

Avatarmemberss.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    
    

}

export default Avatarmemberss;

