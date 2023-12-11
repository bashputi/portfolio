import Banner from "../Banner";
import Resume from "../Resume";


const About = () => {
    return (
       <>
       <Banner></Banner>
       <div className="bg-primary w-full mx-auto">
        <h1 className="text-center uppercase font-bold text-white text-3xl lg:text-5xl">Tech Stack</h1>
       <div className="flex justify-center my-20">
       <div className="flex flex-col">
           <div className="flex ml-5 md:ml-0 gap-10">
           <img className="w-16 h-16" src="https://i.ibb.co/k0QSbBx/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243-4761515415233628528.png" alt="react logo" />
            <img className="w-24 h-16 ml-2" src="https://i.ibb.co/P4MGX8Y/download-removebg-preview.png" alt="tailwind logo" />
            <img className="w-20 h-16" src="https://i.ibb.co/jbhPkVv/png-transparent-firebase-hd-logo-thumbnail-removebg-preview.png" alt="firebase logo" />
            <img className="w-20 -ml-5 h-16" src="https://i.ibb.co/98C0ndb/Mongo-DB-Emblem-removebg-preview.png" alt="mongodb logo" />
           </div>
        <div className="flex gap-5 ml-14 mt-12">
        <img className="w-15 h-16" src="https://i.ibb.co/8KB10fJ/javascript-logo-8892-AEFCAC-seeklogo-com-removebg-preview.png" alt="js logo" />
            <img className="w-20 h-16" src="https://i.ibb.co/wsWGjJs/png-clipart-node-js-javascript-npm-computer-icons-web-application-others-miscellaneous-text-removebg.png" alt="node-js logo" />
            <img className="w-36 h-12 mt-2" src="https://i.ibb.co/0VYGYbf/download-1.png" alt="express-js logo" />
        </div>
           <div className="flex ml-32 my-8 gap-5">
           <img className="w-20" src="https://i.ibb.co/pK6cFLz/download-2-removebg-preview.png" alt="css logo" />
            <img className="w-16 h-16 mt-2" src="https://i.ibb.co/cwDx5nk/download-3-removebg-preview.png" alt="html logo" />
           </div>
           <div>
           <img className="w-16 ml-44" src="https://i.ibb.co/QCnktg0/523673-removebg-preview.png" alt="github logo" />
           </div>
           
        </div>
       </div>
       <Resume></Resume>
       </div>
       

       </>
    );
};

export default About;