import React,{Fragment} from "react";

import "../assets/css/SocialMedia.css";

import gitIcon from "../assets/images/github_media.png";
import inIcon from "../assets/images/linkedin_media.png";
import fbIcon from "../assets/images/facebook_media.png";
import ytIcon from "../assets/images/youtube_media.png";

const SocialMedia = (props) =>{
    return(
        <Fragment>
            <div className="ctr-social_media">
                <a target="_blank" href="https://github.com/VidalLeonardoDeLosSantosRincon">
                    <img src={gitIcon} alt=""/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/vidal-leonardo-de-los-santos-rincon-314644185/">
                    <img id="linkedin" src={inIcon} alt=""/>
                </a>
                <a href="#">
                    <img src={fbIcon} alt=""/>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCnCjc75kD9IBLjsL4Yb0wcQ">
                    <img src={ytIcon} alt=""/>
                </a>
            </div>
        </Fragment>
    );
};

export default SocialMedia;