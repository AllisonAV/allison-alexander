import React from 'react'

export default() => {
  return (
  <div>
    <div className="well">
      <h3 className="center-text font">Full Stack Software Engineer transitioned from Mainframe/Midrage Developer</h3>
    </div>
    <div className="flex-container-home">
      <div className="well well-sm">
        <a href="mailto:allison.alexander0707@gmail.com?subject=Mail from allisonalexander.com">
          <img className="img-contact"
               src="gmail.png"/>
        </a>
      </div>
      <div className="well well-sm">
        <a href="https://stackoverflow.com/users/8132131/allison-alexander?tab=profile"
           target="_blank">
          <img className="img-contact"
               src="so-icon.svg"/>
        </a>
      </div>
      <div className="well well-sm">
        <a href="https://www.linkedin.com/in/allisonveleberalexander/"
           target="_blank">
           <img className="img-contact-linkedin"
                src="linked-in.png"/>
        </a>
      </div>
      <div className="well well-sm">
        <a href="https://github.com/AllisonAV"
           target="_blank">
          <img className="img-github"
               src="GitHub_Logo_White.png"/>
        </a>
      </div>
    </div>
  </div>
  )
}
