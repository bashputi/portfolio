// import { Carousel, IconButton } from "@material-tailwind/react";
// import { FaEye } from "react-icons/fa";

const Project = () => {
  const data = [
    {
      "id": 1,
      "name": "Project A",
      "frontend": "React",
      "backend": "Node.js",
      "live": "https://project-a-live.com",
      "image": "https://i.ibb.co.com/VBMrh46/compressed-img-8e2wy-FEjujid-Uk-ZYT5-QAhb-Yg.jpg"
    },
    {
      "id": 2,
      "name": "Project B",
      "frontend": "Vue.js",
      "backend": "Django",
      "live": "https://project-a-live.com",
      "image": "https://i.ibb.co.com/VBMrh46/compressed-img-8e2wy-FEjujid-Uk-ZYT5-QAhb-Yg.jpg"
    },
    {
      "id": 3,
      "name": "Project C",
      "frontend": "Angular",
      "backend": "Spring Boot",
      "live": "https://project-a-live.com",
      "image": "https://i.ibb.co.com/VBMrh46/compressed-img-8e2wy-FEjujid-Uk-ZYT5-QAhb-Yg.jpg"
    },
    {
      "id": 4,
      "name": "Project D",
      "frontend": "Next.js",
      "backend": "Express",
       "live": "https://project-a-live.com",
      "image": "https://i.ibb.co.com/VBMrh46/compressed-img-8e2wy-FEjujid-Uk-ZYT5-QAhb-Yg.jpg"
    }
  ];
    return (
        <div id="portfolio" className=" bg-primary min-h-screen w-full mx-auto">
        <div className="sm:px-16 px-5 py-28 bg-primary text-white container mx-auto">  
         <h1 data-aos="zoom-in" data-aos-duration="2000" className="text-center text-2xl md:text-5xl font-bold md:my-20">My <span className="text-[#915]">Projects</span> </h1>
         {/* 1 no project  */}
        <div id="portfolio-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          data?.map((item) => (
            <div key={item.id} id="portfolio-box" className="relative flex shadow-xl rounded w-full h-full group">
            <img className="w-full h-full" src={item.image} alt="project image" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#915] to-transparent flex flex-col justify-end pb-8 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-white mb-4">{item.name}</h4>
              <div className="flex gap-5 justify-center">
                <a href="#" className="text-white hover:underline">Front-end</a>
                <a href="#" className="text-white hover:underline">Back-end</a>
                <a href="#" className="text-white hover:underline">Live Link</a>
              </div>
            </div>
          </div>
          ))
        }

        </div>
  
        </div>
       
     </div>
    );
};

export default Project;