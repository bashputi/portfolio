import { Link } from "react-scroll";
import Banner from "../Banner";
import LatestWork from "../LatestWork";
import Skill from "../Skill";
import Works from "../Works";
import { FaGraduationCap, FaClipboardList, FaUserAlt, FaBriefcase } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";






const About = () => {
    
    return (
       <div className="bg-primary w-full">
       <Banner></Banner>
       <Works></Works>
       <Skill></Skill>
       <LatestWork></LatestWork>

       
       <div className="fixed flex flex-col items-center  h-32 gap-5 top-[30vh] mx-auto w-14 right-12 lg:right-28">
                <Link activeClass="active" smooth={true} spy={true} to="banner">
                  
                  <FaUserAlt className="text-center w-6 text-white h-6"/>
                 
                  </Link>
                  <Link activeClass="active" smooth={true} spy={true} to="work">
                    <FaClipboardList className="text-center w-6 text-white h-6"/>
                  </Link>
                  <Link activeClass="active" smooth={true} spy={true} to="skill">
                 <GiSkills className="text-center w-6 text-white h-6"/>
                  </Link>
                  <Link activeClass="active" smooth={true} spy={true} to="latestwork">
                    <FaBriefcase className="text-center w-6 text-white h-6"/>
                  </Link>
                 
             </div>

       </div>
    );
};

export default About;