import "../style/skills.css"
import {BsArrowLeft} from "react-icons/bs"
const Skills = () => {
  return (
    <div className="skill">
       
      <div className="skill-container">
            <h1>Skills</h1>
        <div className="skill-section">


            <div className="front">
                <div className="front-section">
                    <h2>front End</h2>
                    <div className="front-container">
                        <div className="front-element">
                            <div className="front-percent">
                            <p>hmtl/css</p>
                            60%
                            </div>
                            <div className="html"></div>
                        </div>
                        <div className="front-element">
                            <div className="front-percent">
                            <p>javascript</p>
                            65%
                            </div>
                            <div className="javas"></div>
                        </div>
                        <div className="front-element">
                            <div className="front-percent">
                            <p>react</p>
                            68%
                            </div>
                            <div className="react"></div>
                        </div>
                    </div>
                    
                </div>
             
            </div>

            <div className="back">
                <div className="front-section">
                    <h2>back End</h2>
                    <div className="front-container">
                        <div className="front-element">
                            <div className="front-percent">
                            <p>Express js</p>
                            50%
                            </div>
                            <div className="express"></div>
                        </div>
                        <div className="front-element">
                            <div className="front-percent">
                            <p>node js</p>
                            40%
                            </div>
                            <div className="node"></div>
                        </div>
                        <div className="front-element">
                            <div className="front-percent">
                            <p>mysql</p>
                            50%
                            </div>
                            <div className="sql"></div>
                        </div>
                    </div>
                </div>
            </div>


            
        </div>
        <div className="more-skill">
            <h3 className="h3">see more <span>skills</span> click here <BsArrowLeft className="bs"/></h3>
        </div>
        <div className="spiner">
            <div className="circle">
                <div className="circle1"></div>
            </div>
                
        </div>
      
        </div>
    </div>
  )
}
//{}[]
export default Skills