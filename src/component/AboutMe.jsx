import "../style/aboutme.css"
import avatar3 from "../image/avatar3.jpg"

const AboutMe = () => {
  return (
    <div  id="aboutme" className="aboutme">
        <div className="aboutme-left">
            <div className="aboutme-left-image">

            <img src={avatar3}/>
            </div>
        </div>
        <div className="aboutme-right">
            <div className="aboutme-right-container">
                    <h1>about me</h1>
                    <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum, fugit aut, maxime, fugiat tempora impedit repudiandae atque sed expedita mollitia distinctio quia! Velit quod, necessitatibus perspiciatis corrupti ullam asperiores.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus sapiente eveniet, sint fugit quo minus. Hic repellat, praesentium, modi, natus assumenda necessitatibus facere neque ratione ducimus deserunt cumque iure blanditiis?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum, fugit aut, maxime, fugiat tempora impedit repudiandae atque sed expedita mollitia distinctio quia! Velit quod, necessitatibus perspiciatis corrupti ullam asperiores.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus sapiente eveniet, sint fugit quo minus. Hic repellat, praesentium, modi, natus assumenda necessitatibus facere neque ratione ducimus deserunt cumque iure blanditiis?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum, fugit aut, maxime, fugiat tempora impedit repudiandae atque sed expedita mollitia distinctio quia! Velit quod, necessitatibus perspiciatis corrupti ullam asperiores.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus sapiente eveniet, sint fugit quo minus. Hic repellat, praesentium, modi, natus assumenda necessitatibus facere neque ratione ducimus deserunt cumque iure blanditiis?
                    </p>
                    <button className="aboutme-right-container-btn">read more</button>
            </div>
        </div>

    </div>
  )
}

export default AboutMe