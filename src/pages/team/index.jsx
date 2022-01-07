import TeamCard from "../../components/team/teamCard/TeamCard";
import TeamBackground from "../../components/team/teamBackground/TeamBackground";
import './Team.scss';
import React from 'react'
import CoreTeam from "../../components/team/CoreTeam/CoreTeam";
import Footer from "../../components/LayoutComponents/footer/footer";

function Team() {
    return (
        <div className="TeamContainer">
        <CoreTeam/>
        <Footer/>
        </div>
    )
}

export default Team



