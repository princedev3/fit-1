import "../style/footer.css"
import {AiFillGithub,AiOutlineInstagram,AiOutlineFacebook,AiOutlineWhatsApp} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="footer">
      <h2>Hapi<span>Feet</span></h2>
    
      <AiFillGithub/>
      <AiOutlineInstagram/>
      <AiOutlineFacebook/>
      <AiOutlineWhatsApp/>
   </div>
  )
}
//{}[]
export default Footer