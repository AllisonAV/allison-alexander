import React from 'react'
export default () => {
  return (
    <div className="flex-container-about">
      <div className="well flex-item-about-left">
          <div className="flex-item-col font">
                Recent Graduate of Grace Hopper Academy
          </div>
          <div className="flex-item-col font">
            <a href="https://www.gracehopper.com/curriculum"
               target="_blank">
              <img src="grace-hopper-academy.jpg"
                   className="img-logo"/>
            </a>
          </div>
          <br/>
          <div className="flex-item-col font">
                Software Engineer with 13 years of experience
          </div>
          <br/>
          <div className="flex-item-col font">I am a Full Stack Software Engineer who,
                in a previous life, was a COBOL and RPG
                Systems Engineer. But I wanted more,
                so I enrolled at Grace Hopper Academy,
                a coding bootcamp, where I learned full stack JavaScript.
                I love to code & learn new technologies,
                and I am excited to return to the field
                as a full stack developer!
          </div>
          <br/>
          <div className="flex-item-col font">
            <a href="https://docs.google.com/document/d/1kjKBbR1lA3fPZljm9jUDXntesqhqrSQJqk9fyKhzN-w/edit?usp=sharing"
               target="_blank">
            Please view my resume!
            </a>
          </div>
      </div>
      <div className="well flex-item-about">
        <img src="allison in hoboken.jpg"/>
      </div>
    </div>
  )
}
