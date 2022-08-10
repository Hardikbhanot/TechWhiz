import React from 'react'
import './signup.scss';
function signup() {
  return (
    <div className='signup-parent'>
        <iframe style={{height:'100vh',width:'100%'}} src="http://127.0.0.1:5501/index.html" frameborder="0"></iframe>
        <div className="signup-container">
        <h3>Welcome to TechWhiz </h3>
        </div>
    </div>
  )
}

export default signup