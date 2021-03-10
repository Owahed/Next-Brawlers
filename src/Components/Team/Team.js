import React from 'react';
import { useHistory } from 'react-router';
import './Team.css'

const Team = (props) => {
    const { strTeam, strTeamBadge,strGender, idTeam } = props.team;

    const history = useHistory()
    function routeChange(teamId) {
        history.push(`/team/${teamId}`);
    };
    return (
        <div className="team-component">
            <img src={strTeamBadge} alt="Football-Team" />
            <p>Sports types: Football</p>
            <h3>{strTeam}</h3>
            <button onClick={() => routeChange(idTeam)}>Explore</button>
        </div>
    );
};

export default Team;