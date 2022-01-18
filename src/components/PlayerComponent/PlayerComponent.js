import React from 'react';
import ReactPlayer from 'react-player';



function PlayerComponent(props){

    return(
    <ReactPlayer playing ={true} controls={true} url={props.url} />
    );
}
export default PlayerComponent
