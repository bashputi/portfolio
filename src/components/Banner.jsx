import { FaArrowAltCircleDown, FaRegEye } from "react-icons/fa";
import jsPDF from "jspdf";




const PDF_URL = "https://i.ibb.co.com/gWcXpMX/Screenshot-2024-11-21-000345.png";

const Banner = () => {
 
    
    const downloadFile = () => {
        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
            const pdf = new jsPDF();
            const imgWidth = pdf.internal.pageSize.getWidth();
            const imgHeight = (img.height * imgWidth) / img.width;

            pdf.addImage(img, "JPEG", 0, 0, imgWidth, imgHeight);
            pdf.save("image.pdf");
        };

        img.src = PDF_URL;
    };

    return (
        <div id="banner" className=" lg:pt-28 pb-0 lg:pb-16">
               <div className="sm:px-6 px-6 text-white pt-28 lg:pt-48 max-w-7xl mx-auto flex flex-row items-start gap-5">
             <div className="lg:flex flex-row-reverse w-[98vw] justify-between items-center">
                 
                 <div data-aos="fade-left" data-aos-duration="2000" className="pb-8">
                 <img className=" md:w-72 rounded-full" src="https://i.ibb.co.com/4RMhxS3/Whats-App-Image-2024-09-27-at-9-04-07-PM-2-removebg-preview.png" alt="profile picture" />
                 </div>
                 <div data-aos="fade-right" data-aos-duration="2000" className="pr-2">
                     <h1 className=" font-bold text-3xl lg:text-5xl">RIME ISLAM RIMU</h1>
                     <h3 className="lg:text-xl font-semibold text-yellow-600">Full Stack Developer</h3>
                        <p className="lg:w-96 w-48 mt-2">Hi there! I'm a passionate web developer 
                            who loves combining creativity with technical skills. I specialize in creating seamless, 
                            user-focused web experiences that bring together design and functionality in perfect harmony</p>

                     <div className="mt-5">
                        <h1 className="text-2xl font-semibold md:text-3xl">My Resume</h1>
                        <button onClick={() => { downloadFile() }} className="btn mt-4 btn-success px-5 ">
                <FaArrowAltCircleDown className="h-5 w-6 hover:scale-125"/>
            </button>
                       <a href="https://drive.google.com/file/d/1UHqoaPW1UYA2ySbM6Ni28kQEb9aSaG4h/view?usp=sharing"> <button className="btn ml-4 btn-warning px-5"><FaRegEye className="h-5 w-6 hover:scale-125"/></button></a>
                     </div>
                 </div>
             </div>
            
          
          </div>
        
          
    
<div className="fixed pl-12 lg:pl-28 bottom-3 md:bottom-10">
                 <a href="https://github.com/bashputi">
                 <div>
                     <img className="w-8 hover:scale-125" src="https://i.ibb.co/QCnktg0/523673-removebg-preview.png" alt="github logo" />
                 </div>
                 </a>
                 <a href="https://www.linkedin.com/in/rime-islam-b8a2142a1">
                 <div className="my-5">
                     <img className="w-8 hover:scale-125" src="https://i.ibb.co/4Jjr9My/png-transparent-linkedin-logo-computer-icons-facebook-user-profile-facebook-blue-angle-text-removebg.png" alt="linkedin logo" />
                 </div>
                 </a>
                 <a href="https://www.facebook.com/rimi.islam.9081323">
                 <div>
                     <img className="w-16 -ml-3 hover:scale-125" src="https://i.ibb.co/3Yx5FmR/images-removebg-preview.png" alt="facebook logo" />
                 </div>
                 </a>
            
             </div>

             

       </div>
             
   
    );
};

export default Banner;