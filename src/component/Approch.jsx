import "../style/approach.css"
import { FaBars } from "react-icons/fa"

const Approch = () => {
  return (
    <div className="approach">
        <div className="approach-container">
            <div className="approach-top">
                <h1>my approach</h1>
                <p>
                My multi-talented approach is aimed at what matters: helping you reach your desired outcomes. Website and Mobile App is the heart of what i do. To help create, manage Web App and Mobile App successfully, i have the capabilities to make your project come live.
                </p>
            </div>
            <div className="approach-below">
                <div className="approach-1">

                    <div className="approach-element">
                       
                        <FaBars className="bars"/>
                        <h3>web development</h3>
                        
                        <button className="btn">know more</button>
                    </div>
                </div>
                <div className="approach-1">

                    <div className="approach-element">
                       
                        <FaBars className="bars"/>
                        <h3>Mobile App development</h3>
                        
                        <button className="btn">know more</button>
                    </div>
                </div>
                <div className="approach-1">

                    <div className="approach-element">
                       
                        <FaBars className="bars"/>
                        <h3>web Development</h3>
                        
                        <button className="btn">know more</button>
                    </div>
                </div>
                <div className="approach-1">

                    <div className="approach-element">
                       
                        <FaBars className="bars"/>
                        <h3>Graphics Design</h3>
                        
                        <button className="btn">know more</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
//{}[]
export default Approch