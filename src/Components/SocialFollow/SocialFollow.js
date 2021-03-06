import React from 'react';
import { Link } from 'react-router-dom';
import './socialIcon.css'
import Facebook from '../../Icon/Facebook.png'
import Twitter from '../../Icon/Twitter.png'
import YouTube from '../../Icon/YouTube.png'




const SocialFollow = (props) => {
    const {strFacebook,strTwitter,strYoutube}=(props.teamDetail);
    // console.log(props.teamDetail);
    return (
        <div className="social-icon">
            <a href={strFacebook}>
            <img src={Facebook} alt=""/>
            </a>          
            <Link to={strTwitter}>
            <img src={Twitter} alt=""/>
            </Link>
            <Link to={strYoutube}>
            <img src={YouTube} alt=""/>
            </Link>
            
        </div>
    );
};

export default SocialFollow;