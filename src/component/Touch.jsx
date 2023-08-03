import "../style/touch.css"
import v2 from "../image/v2.mp4"

const Touch = () => {
  return (
    <div className="touch">

        <div className="touch-container overlay">
            <video autoPlay loop  type="video/mp4" muted poster="../image/c2.jpg" className="video" src={v2} />
        </div>
        <div className="touch-text">
                <div className="text-element">
                    
                    <h1 className="h2" data-text="let's Get In touch">let's Get In touch</h1>
                     <p>we can discuss on your next project while we have a cup of awesome coffee
                        the design and beautiful of the work will be handled by me. i gave my clients quality and awesome works.
                     </p>
                     <button>Send a Message</button>
                   
                </div>
        </div>
    </div>
  )
}
//{}[]

export default Touch
