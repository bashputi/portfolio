import Banner from "../Banner"; 
import LatestWork from "../LatestWork";
import Skill from "../Skill";
import Works from "../Works"; 



const About = () => {
    
    return (
       <div className="bg-primary mx-auto">
        <Banner></Banner>
       <Works></Works>
       <Skill></Skill>
       <LatestWork></LatestWork>  
       </div>
    );
};

export default About;