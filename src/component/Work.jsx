import "../style/work.css"
import avatar4 from "../image/avatar4.jpg"

const Work = () => {
  return (
    <div id="project" className="work">
        <div className="work-upper">
            <h1>Latest Works</h1>
            <p >
            Building a visually stunning and user-friendly portfolio website to showcase my unique skills and projects, designed to help me stand out in a crowded field and achieve my goals as a developer. My skills in HTML, CSS, SASS, JavaScript, and React.js, I built a visually appealing and user-friendly projects
            </p>
        </div>
            <div className="work-container">
                <div  className="box work-1" >
                   
                        <h1>Project title</h1>
                        <p>google legends</p>
                   
                    </div>
                <div className="box work-2">
      
                        <h1>Project title</h1>
                        <p>google legends</p>
                </div>

                <div  className="box work-3">
                        <h1>Project title</h1>
                        <p>google legends</p>
                </div>

                <div style={{marginLeft:2}} className="box work-4">
                        <h1>Project title</h1>
                         <p>google legends</p>
                </div>
            </div>
    </div>
  )
}
//{}[]
export default Work