import "../style/blog.css"
import c1 from "../image/c1.jpg"
import c2 from "../image/c2.jpg"
import c3 from "../image/c3.jpg"
import c4 from "../image/c4.jpg"
import c5 from "../image/c5.jpg"
import v4 from "../image/avatar4.jpg"

const Blog = () => {
  return (
    <div className="blog">
            
        <div className="blog-container">
            <h1 className="h1" >Blog</h1>

            <div className="blog-section">
                <div className="blog-element">
                    <div className="maincontainer">
                        <div className="thecard">
                        <div className="thefront">
                             <img src={c1} className="img1"/>
                             <div className="thefront-div1">

                            <h2>web development</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptate eius modi sed ut? Optio adipisci a aut unde veniam explicabo qui at! Consectetur cupiditate impedit ipsum, accusantium iure eveniet.</p>
                             </div>
                            <div  className="thefront-div">
                                <img src={v4} alt="" />
                                <p>10 min ago</p>
                            </div> 
                                
                        </div>
                        <div className="theback"><button>read more</button></div>
                        </div>

                    </div>
                    <div className="maincontainer">
                        <div className="thecard">
                        <div className="thefront">
                             <img src={c2} className="img1"/>
                             <div className="thefront-div1">

                            <h2>web development</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptate eius modi sed ut? Optio adipisci a aut unde veniam explicabo qui at! Consectetur cupiditate impedit ipsum, accusantium iure eveniet.</p>
                             </div>
                            <div className="thefront-div">
                                <img src={v4} alt="" />
                                <p>10 min ago</p>
                            </div> 
                                
                        </div>
                        <div className="theback"><button>read more</button></div>
                        </div>

                    </div>
                    <div className="maincontainer">
                        <div className="thecard">
                        <div className="thefront">
                             <img src={c3} className="img1"/>
                             <div className="thefront-div1">

                            <h2>web development</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptate eius modi sed ut? Optio adipisci a aut unde veniam explicabo qui at! Consectetur cupiditate impedit ipsum, accusantium iure eveniet.</p>
                             </div>
                            <div className="thefront-div">
                                <img src={v4} alt="" />
                                <p>10 min ago</p>
                            </div> 
                                
                        </div>
                        <div className="theback"><button>read more</button></div>
                        </div>

                    </div>
                    <div className="maincontainer">
                        <div className="thecard">
                        <div className="thefront">
                             <img src={c4} className="img1"/>
                             <div className="thefront-div1">

                            <h2>web development</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptate eius modi sed ut? Optio adipisci a aut unde veniam explicabo qui at! Consectetur cupiditate impedit ipsum, accusantium iure eveniet.</p>
                             </div>
                            <div className="thefront-div">
                                <img src={v4} alt="" />
                                <p>10 min ago</p>
                            </div> 
                                
                        </div>
                        <div className="theback">
                        <button>read more</button>
                        </div>
                        </div>

                    </div>
                    <div className="maincontainer">
                        <div className="thecard">
                        <div className="thefront">
                             <img src={c5} className="img1"/>
                             <div className="thefront-div1">

                            <h2>web development</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptate eius modi sed ut? Optio adipisci a aut unde veniam explicabo qui at! Consectetur cupiditate impedit ipsum, accusantium iure eveniet.</p>
                             </div>
                            <div  className="thefront-div">
                                <img src={v4} alt="" />
                                <p>10 min ago</p>
                            </div> 
                                
                        </div>
                        <div className="theback">
                            <button>read more</button>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
//{}[]
export default Blog