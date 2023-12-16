import { FaArrowAltCircleDown, FaRegEye } from "react-icons/fa";
import jsPDF from "jspdf";



const PDF_URL = "https://i.ibb.co/kKYZvjq/Screenshot-2023-12-12-133541.png";

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
        <div id="banner" className="pt-28 pb-16">
        <div className="sm:px-16 px-6 text-white  inset-0 top-[70px] md:top-[100px] lg:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
             <div className="flex w-[98vw] h-[70vh] justify-between items-center">
                 <div className="">
                     <h1 className="text-xl font-bold md:text-3xl lg:text-5xl">RIME ISLAM RIMU</h1>
                     <h3 className="lg:text-xl font-semibold text-yellow-600">Front-end Developer</h3>
                        <p className="lg:w-96 w-56 mt-2">Allow me to introduce myself: I'm a Junior Development Dynamo! With a passion for blending creativity and coding expertise, I thrive on crafting captivating web experiences that seamlessly merge pixels and logic into user-centric marvels.</p>
                        <p className="text-purple-300 md-2 md:mt-5">BSc in Geography and Environment </p>
                     <p className="text-sm text-blue-500 font-semibold">(2020-continue)</p>
                     <div className="mt-5">
                        <h1 className="text-2xl font-semibold md:text-3xl">My Resume</h1>
                        <button onClick={() => { downloadFile() }} className="btn mt-4 btn-success px-5">
                <FaArrowAltCircleDown />
            </button>
                       <a href="https://drive.google.com/file/d/1OBpEzPxbqfzDMfcefPXzWk9EbhrpqyP0/view?usp=drive_link"> <button className="btn ml-4 btn-warning px-5"><FaRegEye /></button></a>
                     </div>
                 </div>
                 <div className="">
                 <img className="w-40 md:w-72 rounded-full" src="https://i.ibb.co/Lg9qNrG/405953333-1402037064079628-8175730261259233325-n-removebg-preview-1.png" alt="profile picture" />
                 </div>
             </div>
            
          
          </div>
    
<div className="fixed pl-12 lg:pl-28 bottom-3 md:bottom-10">
                 <a href="https://github.com/bashputi">
                 <div>
                     <img className="w-8" src="https://i.ibb.co/QCnktg0/523673-removebg-preview.png" alt="github logo" />
                 </div>
                 </a>
                 <a href="https://www.linkedin.com/in/rime-islam-b8a2142a1">
                 <div className="my-5">
                     <img className="w-8 " src="https://i.ibb.co/4Jjr9My/png-transparent-linkedin-logo-computer-icons-facebook-user-profile-facebook-blue-angle-text-removebg.png" alt="linkedin logo" />
                 </div>
                 </a>
                 <a href="https://www.facebook.com/rimi.islam.9081323">
                 <div>
                     <img className="w-16 -ml-2.5" src="https://i.ibb.co/3Yx5FmR/images-removebg-preview.png" alt="facebook logo" />
                 </div>
                 </a>
            
             </div>
             
     </div>
    );
};

export default Banner;