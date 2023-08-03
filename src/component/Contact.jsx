import "../style/contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {BsArrowLeft} from "react-icons/bs"
const Contact = () => {
  return (
    <div id="contact" className="contact">
        <div className="contact-container">
          <div className="email-header">

          <h3>get in touch</h3>
          <h2>contact me</h2>
          </div>

          <div className="email-container">
             <AiOutlineMail className="svg1"/>
              <h3>Email</h3>
             <div className="email-arrow">

             <a className="a" href="mailto:marvinprince232@gmail.com">send a message </a> 
                   <BsArrowLeft className="svg2"/> 
             </div>

          </div>
        </div>
    </div>
    )
  }
  
//{}[]
export default Contact