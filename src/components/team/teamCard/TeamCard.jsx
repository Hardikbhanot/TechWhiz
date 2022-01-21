import React from 'react'
import './TeamCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TeamCard({name,github,linkedin,instagram}) {
    return (
        <div class="team-card card0">
        <div class="card-border">
          <h2>{name}</h2>
          <div class="icons">
            <a aria-hidden="true" href={github}><FontAwesomeIcon className='icon' icon={["fab", "github"]} /></a>
            <a aria-hidden="true" href={linkedin}><FontAwesomeIcon className='icon' icon={["fab", "linkedin"]} /></a>
            <a aria-hidden="true" href={instagram}><FontAwesomeIcon className='icon' icon={["fab", "instagram"]} /></a>
          </div>
        </div>
      </div>
     
    )
}

export default TeamCard
