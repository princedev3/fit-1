import "../style/experience.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdOutlineSchool} from "react-icons/md"
import {SiGooglescholar,SiSemanticscholar} from "react-icons/si"
import {TbSchoolOff} from "react-icons/tb"
const Experirnce = () => {
  return (
    <div className="experience">
            <VerticalTimeline lineColor="wheat">
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2023-05-21"  iconStyle={{background:"wheat",color:"#fff"}} icon={ <MdOutlineSchool/>}>
                    <h3 className="vertical-timeline-element-title">Project 01</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo obcaecati hic quam rerum ullam perspiciatis tempore sequi consequatur iste ipsum.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2023-05-21"  iconStyle={{background:"wheat",color:"#fff"}} icon={ <MdOutlineSchool/>}>
                    <h3 className="vertical-timeline-element-title">Project 02</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo obcaecati hic quam rerum ullam perspiciatis tempore sequi consequatur iste ipsum.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2023-05-21"  iconStyle={{background:"wheat",color:"#fff"}} icon={ <SiGooglescholar/>}>
                    <h3 className="vertical-timeline-element-title">Project 03</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo obcaecati hic quam rerum ullam perspiciatis tempore sequi consequatur iste ipsum.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2023-05-21"  iconStyle={{background:"wheat",color:"#fff"}} icon={ <SiSemanticscholar/>}>
                    <h3 className="vertical-timeline-element-title">Project 04</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo obcaecati hic quam rerum ullam perspiciatis tempore sequi consequatur iste ipsum.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" date="2023-05-21"  iconStyle={{background:"wheat",color:"#fff"}} icon={ <TbSchoolOff/>}>
                    <h3 className="vertical-timeline-element-title">Project 05</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo obcaecati hic quam rerum ullam perspiciatis tempore sequi consequatur iste ipsum.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
    </div>
  )
}
//{}[]
export default Experirnce