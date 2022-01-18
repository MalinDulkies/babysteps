import React, { useState, useEffect } from 'react';

import PlayerComponent from '../PlayerComponent/PlayerComponent'
import IMGComponent from '../IMGComponent/IMGComponent'



function DisplayComponent(props) {

    const [IMG, isIMG] = useState(false);

    const site = props.url;

    /* 

    const connection = site.openConnection();
    const contentType = connection.getHeaderField("Content-Type");

        let checkIMG = () => {
        if (splitURL.contains("jpg", "png", "jpeg")) {
            IMG = true;
        }
      }
    
      let getVideo = () => {
        if(splitURL.contains("mp4", "mov", "avi")){
            Video = true;

        } 
      }

     */

    const splitURL = site.split(".").pop();

    console.log(site.type)
    console.log(site);
    console.log(splitURL);

    useEffect(() => {
        if (splitURL.includes("jpg", "png", "jpeg")) {
            isIMG(true);
        }
        if (splitURL.includes("mp4", "mov", "avi")) {
            isIMG(false);
        }
    });

    return (
        <div>
            {IMG ? < IMGComponent src={site} /> : < PlayerComponent url={site} />}
        </div>
    );
}
export default DisplayComponent