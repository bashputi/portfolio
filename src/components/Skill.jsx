import Lottie from "react-lottie";
import okay from "../../public/okay.json"


const Skill = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: okay,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div id='skill' className='pt-28 md:pt-48 lg:flex justify-evenly gap-5 align-center text-white max-w-7xl mx-auto'>
           <div  className="flex-1">
           <div className="w-full mx-auto">
        <h1 className="text-center uppercase font-bold text-white text-3xl lg:text-5xl">Tech Stack</h1>
       <div className="flex justify-center my-20">
       <div  data-aos="fade-up"
     data-aos-duration="3000" className="flex justify-center flex-col">
           <div className="flex gap-5 lg:gap-10 justify-center">
           <img className="w-12 lg:w-16 h-12 lg:h-16 hover:scale-125" src="https://i.ibb.co.com/PxvLnRQ/13142323-removebg-preview.png" alt="Redux logo" />
            <img className="w-12 lg:w-16 h-12 lg:h-12 ml-2 hover:scale-125" src="https://i.ibb.co.com/y5Ks8z2/87a5a0fdc86455c3f94b0b0eebfdb1b9-400x400.webp" alt="typescript logo" />
            <img className="w-16 lg:w-24 h-16 lg:h-20 hover:scale-125 -mt-2" src="https://i.ibb.co.com/Fx1fwKK/download-removebg-preview.png" alt="Next.js logo" />
            <img className="w-20 lg:w-24 -ml-5 h-12 lg:h-16 hover:scale-125" src="https://i.ibb.co.com/87tV3hv/Postgresql-elephant-svg-removebg-preview.png" alt="postgreSQL logo" />
            <img className="w-20 lg:w-24 -ml-5 h-16 lg:h-20 -mt-2 hover:scale-125" src="https://i.ibb.co.com/C1VVB6T/plugin-Icon-removebg-preview.png" alt="mongodb logo" />
           </div>
           <div className="flex gap-5 lg:gap-10 justify-center mt-5">
           <img className="w-12 lg:w-16 h-12 lg:h-16 hover:scale-125" src="https://i.ibb.co/k0QSbBx/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243-4761515415233628528.png" alt="react logo" />
            <img className="w-16 mt-2 lg:w-20 h-10 lg:h-12 ml-2 hover:scale-125" src="https://i.ibb.co/P4MGX8Y/download-removebg-preview.png" alt="tailwind logo" />
            <img className="w-16 lg:w-16 h-12 lg:h-16 hover:scale-125" src="https://i.ibb.co/jbhPkVv/png-transparent-firebase-hd-logo-thumbnail-removebg-preview.png" alt="firebase logo" />
            <img className="w-16 lg:w-20 -ml-5 h-12 lg:h-16 hover:scale-125" src="https://i.ibb.co/98C0ndb/Mongo-DB-Emblem-removebg-preview.png" alt="mongodb logo" />
           </div>
        <div className="flex gap-2 lg:gap-5 mt-8 justify-center">
        <img className="w-12 lg:w-14 h-12 lg:h-14 hover:scale-125" src="https://i.ibb.co/8KB10fJ/javascript-logo-8892-AEFCAC-seeklogo-com-removebg-preview.png" alt="js logo" />
            <img className="w-14 lg:w-20 h-12 lg:h-14 hover:scale-125" src="https://i.ibb.co/wsWGjJs/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text-removebg.png" alt="node-js logo" />
            <img className="w-20 lg:w-24 h-8 mt-2 hover:scale-125" src="https://i.ibb.co/0VYGYbf/download-1.png" alt="express-js logo" />
        </div>
           <div className="flex justify-center mt-5 gap-2 lg:gap-5">
           <img className="w-16 h-8 mt-3 hover:scale-125" src="https://i.ibb.co.com/GR1GS41/css-removebg-preview.png" alt="css logo" />
            <img className="w-32 hover:scale-125" src="https://i.ibb.co.com/CJ8Kcc8/images-removebg-preview.png" alt="html logo" />
           </div>
           <div className="flex justify-center gap-2 lg:gap-5 -ml-8 ">
           <img className="w-12 lg:w-16 hover:scale-125" src="https://i.ibb.co/QCnktg0/523673-removebg-preview.png" alt="github logo" />
           </div>
           
        </div>
       </div>
       
       </div>
           </div>
           <div className="flex-1 ">
           <Lottie options={defaultOptions} width={350} height={400}/> 
           </div>
        </div>
    );
};

export default Skill;