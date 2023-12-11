

const Banner = () => {
    return (
        <div className="relative bg-primary w-full h-screen mx-auto">
        <div className="sm:px-16 px-6 text-white absolute inset-0 top-[70px] md:top-[100px] lg:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
             <div className="flex w-[96vw] h-[60vh] justify-evenly items-center">
                 <div className="">
                     <h1 className="text-xl font-bold md:text-3xl lg:text-5xl">RIME ISLAM RIMU</h1>
                     <h3 className="lg:text-xl font-semibold text-yellow-600">MERN stack Developer</h3>
                     <p className="text-sm md-2 md:mt-5">BSc in Geography and Environment </p>
                     <p className="text-sm text-blue-500 font-semibold">(2020-continue)</p>
                 </div>
                 <div className="">
                 <img className="w-40 md:w-72 rounded-full" src="https://i.ibb.co/Lg9qNrG/405953333-1402037064079628-8175730261259233325-n-removebg-preview-1.png" alt="profile picture" />
                 </div>
             </div>
             <div className="fixed bottom-10">
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
          
     </div>
    );
};

export default Banner;