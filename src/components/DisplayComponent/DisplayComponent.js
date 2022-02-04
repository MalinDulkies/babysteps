import React, { useState, useEffect } from 'react';

import PlayerComponent from '../PlayerComponent/PlayerComponent'
import IMGComponent from '../IMGComponent/IMGComponent'



function DisplayComponent(props) {

    const [IMG, isIMG] = useState(false);
    const [VID, isVID] = useState(false);

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

    const splitURL = site.split(".");

    console.log(site.type)
    console.log(site);
    console.log(splitURL);

    useEffect(() => {
        if (splitURL.includes("jpg") || splitURL.includes("png") || splitURL.includes("jpeg"))  {
            isIMG(true);
        }
        if (splitURL.includes("mp3") || splitURL.includes("mov") || splitURL.includes("avi")) {
            isVID(true);
        }
    }, {});

    return (
        <div>
            {IMG ? < IMGComponent src={site} /> : VID ? < PlayerComponent url={site}/> : null}
        </div>
    );
}
export default DisplayComponent