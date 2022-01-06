import React, {useState} from 'react'
import TeamBackground from '../teamBackground/TeamBackground'
import TeamCard from '../teamCard/TeamCard'
import './CoreTeam.scss'
import Modal from '../Modal/Modal'
function CoreTeam() {
    const [showModal, setShowModal]=useState(false)
    const openModal=()=>{
        setShowModal(prev=>!prev)
    }
    return (
        <div>
            
            <TeamBackground/>
            <div className="p-vp">
                <div className="prez">
            <TeamCard name="Mohit Jain"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                <h3>President</h3>
                </div>
                <div className="vice-prez">
            <TeamCard name="Anwesha Sanyal"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                <h3>Vice President</h3>
                </div>
            </div>

            <h1 className='coord-heading'>Coordinators</h1>
            
            <div className="coords">
                <div>
            <TeamCard name="Vaibhav"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
            />
            <h3>Graphic Design</h3>
            <div onClick={openModal} className='teamButton' >Members</div>
            
            </div>
                <div>
                <TeamCard name="Hardik Bhanot"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                <h3>Web Development</h3>
                <div className='teamButton' >Members</div>
                </div>
                <div>
                <TeamCard name="Prachi Tiwari"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                <h3 className='quiz-code'>Quizzing and Coding</h3>
                <div className='teamButton' >Quizzing Members</div>
                <div className='teamButton' >Coding Members</div>
                </div>
                <div>
                <TeamCard name="Vishesh"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                <h3>Gaming</h3>
                <div className='teamButton' >Members</div>
                </div>
            </div>
            <Modal club="Graphic Designing Members" showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}

export default CoreTeam
