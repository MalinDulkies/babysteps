import React from 'react';



function IMGComponent(props) {

    const url = props.src;

    return (
        <img src={url} ></img>
    );
}
export default IMGComponent
