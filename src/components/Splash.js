import React from 'react'

class Splash extends React.Component {

  render () {
    return (
      <div>
        <h1>I'm the Splash Page</h1>
        <p>Who We Are / What We Do / How It Works</p>
        <ul>
          <li>Input your 2 most recent jobs including your current one.</li>
          <li>Input your 5 top skills that most directly relate to the job that you want.</li>
          <li>We analyze the jobs that are ACTIVELY HIRING that you will most likely receive interviews for.</li>
        </ul>

        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    )
  }
}

export default Splash
