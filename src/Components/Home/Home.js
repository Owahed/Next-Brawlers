import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    
    
        // const allTeams = teams.teams;
        

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain";
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);

   
    console.log(teams);
    return (
        <div className="home-component">
            

            {
              teams && teams.map(team => <Team team={team}></Team>)
            }
        </div>
    );
};

export default Home;