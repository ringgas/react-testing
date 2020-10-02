import React from 'react';
import PropTypes from 'prop-types';



import './Avatar.css';


const Avatar = ({src, alt }) => {
    return (
        <img src={src} alt={alt} className="Avatar"/>

    );
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    
    

}

export default Avatar;