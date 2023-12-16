
import Banner from "../Banner";
import LatestWork from "../LatestWork";
import Skill from "../Skill";
import Works from "../Works";
import { FaGraduationCap, FaClipboardList, FaUserAlt, FaBriefcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";





const About = () => {
    
    return (
       <div className="bg-primary w-full h-[2800px] ">
       <Banner></Banner>
       <Works></Works>
       <LatestWork></LatestWork>
       <Skill></Skill>
       
       <div className="fixed top-[30vh] right-12 lg:right-28">
                <a href="#banner">
                  <div className="p-3 rounded-full">
                  <FaUserAlt className="w-6 text-white h-6"/>
                  </div>
                  </a>
                  <a href="#work">
                    <div className="p-3  rounded-full"><FaClipboardList className="w-6 text-white h-6"/></div>
                  </a>
                  <a href="#latestwork">
                    <div className="p-3 touch-auto rounded-full"><FaBriefcase className="w-6 text-white h-6"/></div>
                  </a>
                  <a href="#skill">
                 <div className="p-3 rounded-full"><GiSkills className="w-6 text-white h-6"/></div>
                  </a>
                  <a href="#education">
                    <div className="p-3 rounded-full"><FaGraduationCap className="w-6 text-white h-6"/></div>
                  </a>
             </div>

       </div>
    );
};

export default About;