import React, {useRef} from 'react'
import './Modal.scss'
import TeamCard from '../teamCard/TeamCard'
import {useSpring,animated} from 'react-spring'
function Modal({showModal,setShowModal,club}) {
    const modalRef= useRef()
    const animation= useSpring({
        config:{
            duration:250
        },
        opacity:showModal ? 1:0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })
    const closeModal= e=>{
        if(modalRef.current===e.target){
            setShowModal(false)
        }
    }
    return (
        <div >
           {showModal ? <div className='modal-background' ref={modalRef} onClick={closeModal}>
            <animated.div style={animation}> <div className="modal">
               <h1>{club}</h1>
               <div className="members">
                <div className="member">
               <TeamCard name="abc"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                </div>
                <div className="member">
               <TeamCard name="abc"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                </div>
                <div className="member">
               <TeamCard name="abc"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                </div>
                <div className="member">
               <TeamCard name="abc"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                </div>
                <div className="member">
               <TeamCard name="abc"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                </div>
                <div className="member">
               <TeamCard name="abc"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                </div>
                <div className="member">
               <TeamCard name="abc"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                </div>
                <div className="member">
               <TeamCard name="abc"
                github="https://github.com/Hardikbhanot"
                instagram="https://www.instagram.com/_.h.a.r.d.i.k.__/"
                linkedin="https://www.linkedin.com/in/hardik-bhanot/"
                />
                </div>
               
               </div>
           </div> 
           </animated.div>
           </div>
            :null} 
        </div>
    )
}

export default Modal
