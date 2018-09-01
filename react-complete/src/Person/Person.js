import React from 'react';

const person = (props) => {
    return (
    <h3 onClick={props.click} className='rajnish'>
    This is {props.name} and my {props.age} {props.children}
    </h3>);  
};

export default person;