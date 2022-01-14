import React from 'react';

import PlayerComponent from './components/PlayerComponent/PlayerComponent'
import IMGComponent from './components/IMGComponent/IMGComponent'



function DisplayComponent(props){

    const [IMG, isIMG] = useState(false);
    const [Video, isVideo] = useState(false);

    const connection = props.website.openConnection();
    const contentType = connection.getHeaderField("Content-Type");

    let checkIMG = () => {
        if (contentType.startsWith("image/")) {
            isIMG = true;
            isVideo = false;
            IMG = props.website;
        }
      }
    
      let getVideo = () => {
        if(contentType.startsWith("video/")){
            isVideo = true;
            isIMG = false;
            Video = props.website;

        } 
      }

    return(
        <div>
            {isVideo && props.website.length > 0 ? < PlayerComponent url={Video} /> : null}
            {isIMG && props.website.length > 0 ? < IMGComponent url={IMG} /> : null}
        </div>
    );
}
export default DisplayComponent