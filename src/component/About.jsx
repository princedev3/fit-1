import avatar2 from "../image/avatar2.jpg"
import Typewriter from 'typewriter-effect';
import { FaTwitter } from "react-icons/fa";
import "../style/about.css"
import {AiOutlineInstagram,AiOutlineMessage,AiFillLinkedin} from "react-icons/ai"



const About = () => {
  return (
    <div className='about'>
        <div className='about-container'>

          <div className='aboutleft'>
            <div className='left'>
              <h1><span>i'm</span> Marvin</h1>
                <div className=' type-container'>
                  <h3>hello, i am </h3>
                  <Typewriter  className="type"
                    options={{
                      strings: [' ui/ ux developer',"Front-end developer"],
                      autoStart: true,
                      loop: true,
                      
                    }}
                  />
                </div >
                <div className='left-image'>
                    <img src={avatar2} alt=''/>
                    <button>hire me</button>
                </div>
            </div>
          </div>
        
         
          <div className='aboutright'>
            <img src={avatar2}/>
          </div>

          <div  className="center-container">
          <div className='aboutcenter' >



            <div className="center-icon" >
              <div className="twitter" >
                    <a href="#" className="alink">
                    <FaTwitter className="icon" />
                    <h4>
                      twitter
                    </h4>
                    </a>
              </div>
            </div>
            
             <div className="center-icon">
              <div >
                    <a href="#" className="alink" >
                    <AiFillLinkedin className="icon" />
                    <h4>

                      Linkedln
                    </h4>
                    </a>
              </div>
            </div>
            <div className="center-icon">
              <div >
                    <a href="#" className="alink" >
                    <AiOutlineInstagram className="icon" />
                    <h4>

                      instagram
                    </h4>
                    </a>
              </div>
            </div>
            <div className="center-icon">
              <div >
                    <a href="#" className="alink" >
                    <AiOutlineMessage className="icon" />
                    <h4>

                      messenger
                    </h4>
                    </a>
              </div> 
            </div>

          




          </div>

    </div>


    </div>
    </div>
    
  )
  
}
//{}[]
export default About