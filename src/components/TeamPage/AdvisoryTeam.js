import React, {Component} from 'react';
import TeamItem from './TeamItem';
import {TeamItems} from '../../DataController/DataController';

class AdvisoryTeam extends Component{

    render(){

        let items = [];

        for (let i = 18; i < TeamItems.length; i++){
            let team = TeamItems[i];
            items.push(
                <TeamItem
                    key={`team-item-${i}`}
                    teamName={team.teamName}
                    teamIcon={team.teamIcon}
                    teamSpec={team.teamSpec}
                    teamDesc={team.teamDesc}
                />
            )
        }

        return(
            <ul className="team-employee__list">
                {items}
            </ul>
        )
    }
}

export default AdvisoryTeam;