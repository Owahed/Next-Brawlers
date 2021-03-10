import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faYoutube,faFacebook,faTwitter,faInstagram ,faMars,faFutbol,faFlag,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import './TeamDetail.css';
import teamImgMale from '../../Photo/male.png'
import teamImgFemale from '../../Photo/female.png'
import SocialFollow from '../SocialFollow/SocialFollow';

const TeamDetail = () => {
    const { teamId } = useParams();
    const [teamDetail, setTeamDetail] = useState({});
    const { strTeam, strGender, strCountry, intFormedYear, strTeamBadge } = teamDetail;



    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]))
    }, []);
    const gender =teamDetail.strGender;
    console.log(gender);

    let teamImage= (gender=="Male") ?<img src={teamImgMale} alt=""/> : <img src={teamImgFemale} alt=""/>
    
    return (
        <div className="team-detail-container">
            <div className="team-info">

              <div>
              <h1>{strTeam}</h1>
                <p><strong><FontAwesomeIcon icon={faMapMarkerAlt} /> Formed Year: Since {intFormedYear}</strong></p>
                <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                <p><FontAwesomeIcon icon={faFutbol} /> Sports types: Football</p>
                <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
              </div>
              <div className="team-img">
                  {teamImage}
              </div>

            </div>
            <div className="team-detail">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis similique voluptatem perferendis aliquam assumenda autem est ex, nisi soluta, fugit, et iste ducimus minus illo! Recusandae laudantium animi, fuga deserunt optio tempora similique amet dolores, ipsum voluptatem iusto deleniti veritatis placeat magnam impedit nihil. Modi, ab. Accusantium error neque beatae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni modi autem excepturi debitis optio repellat accusantium eum laborum cum soluta laboriosam possimus quidem facere animi recusandae, quasi eaque esse a nam. Non quo hic est voluptatum? Quos nobis corrupti non, in iste ab aliquam deserunt tempora molestiae delectus vel debitis?</p>
                <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, hic harum ex impedit debitis ipsam praesentium doloremque aspernatur quibusdam voluptatum, aliquid nihil doloribus et, placeat dolorem accusamus animi minima iusto. Nesciunt obcaecati vel corporis placeat, in sed enim, modi numquam maxime incidunt animi labore fugiat vero blanditiis eveniet eius debitis?</p>

            </div>
            <div>
            <SocialFollow teamDetail={teamDetail}></SocialFollow>
            
            </div>

        </div>
    );
};

export default TeamDetail;