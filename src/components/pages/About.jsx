import Banner from "../Banner"; 
import LatestWork from "../LatestWork";
import Skill from "../Skill";
import Works from "../Works"; 
import {FaClipboardList, FaUserAlt, FaGraduationCap } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-scroll";



const About = () => {
    
    return (
       <div id="about" className="bg-primary mx-auto">
        <Banner></Banner>
       <Works></Works>
       <Skill></Skill>
       <LatestWork></LatestWork>  

       <div className="fixed flex flex-col items-center  h-32 gap-5 top-[30vh] mx-auto w-14 right-12 l">
                <Link activeClass="active" smooth={true} spy={true} to="banner">
                  
                  <FaUserAlt className="text-center w-6 text-white h-6 hover:scale-125"/>
                 
                  </Link>
                  <Link activeClass="active" smooth={true} spy={true} to="work">
                    <FaClipboardList className="text-center w-6 text-white h-6 hover:scale-125" />
                  </Link>
                  <Link activeClass="active" smooth={true} spy={true} to="skill">
                 <GiSkills className="text-center w-6 text-white h-6 hover:scale-125"/>
                  </Link>
                  <Link activeClass="active" smooth={true} spy={true} to="latestwork">
                    <FaGraduationCap className="text-center w-6 text-white h-6 hover:scale-125"/>
                  </Link>
                 
             </div>
       </div>
    );
};

export default About;