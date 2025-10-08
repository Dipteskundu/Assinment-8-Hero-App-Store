import React from 'react';
import ErrorImage from '../assets/Error-404.png'


const DefaultErrorPage = () => {
    return (
        <div>
            <img src={ErrorImage} alt="" />
        </div>
    );
};

export default DefaultErrorPage;