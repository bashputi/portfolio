// import { Carousel, IconButton } from "@material-tailwind/react";
// import { FaEye } from "react-icons/fa";

const Project = () => {
  const data = [
    {
      "id": 1,
      "name": "GrootHub: Blog posting platform.",
      "frontend": "https://github.com/bashputi/tech-tips-frontend",
      "backend": "https://github.com/bashputi/tech-tips-backend",
      "live": "https://tech-tips-khaki.vercel.app",
      "image": "https://i.ibb.co.com/vzqrkD5/Screenshot-2024-11-22-004704.png"
    },
    {
      "id": 2,
      "name": "AutoRide: Car rental reservation System.",
      "frontend": "https://github.com/bashputi/car_rental_reservation-frontend",
      "backend": "https://github.com/bashputi/batch-3",
      "live": "https://empty-oven.surge.sh",
      "image": "https://i.ibb.co.com/hLMwbM3/Screenshot-2024-11-22-004927.png"
    },
    {
      "id": 3,
      "name": "Trail Hunter: Camper product selling e-commerce platform",
      "frontend": "https://github.com/bashputi/assignment-4-frontend",
      "backend": "https://github.com/bashputi/assignment-4-backend",
      "live": "https://tan-friction.surge.sh",
      "image": "https://i.ibb.co.com/S5RPNzB/Screenshot-2024-11-22-005557.png"
    },
    {
      "id": 4,
      "name": "Movie ticket booking platform.",
      "frontend": "https://github.com/bashputi/Movie_ticket",
      "backend": "",
       "live": "https://movieticket-48054.web.app",
      "image": "https://i.ibb.co.com/K6t8vr0/Screenshot-2024-11-22-010231.png"
    },
    {
      "id": 5,
      "name": "Pakked: Parcel order and delivery platform",
      "frontend": "https://github.com/bashputi/parcel_client",
      "backend": "https://github.com/bashputi/parcel-server",
       "live": "https://parcel-delivery-user.web.app/",
      "image": "https://i.ibb.co.com/zxRHGpm/Screenshot-2024-11-22-011341.png"
    },
    {
      "id": 6,
      "name": "Automotive: Car selling platform.",
      "frontend": "https://github.com/bashputi/Brandshop-client",
      "backend": "https://github.com/bashputi/Brand-shop-server",
       "live": "https://brandsore-client.web.app",
      "image": "https://i.ibb.co.com/Qn0ymXj/Screenshot-2024-11-22-011850.png"
    },
    {
      "id": 7,
      "name": "SL Bakery: A bakery website.",
      "frontend": "https://github.com/bashputi/bakery-client",
      "backend": "https://github.com/bashputi/bakery-server",
       "live": "https://bakery-client-2384d.web.app",
      "image": "https://i.ibb.co.com/fdnfcP0/Screenshot-2024-11-22-012433.png"
    },
    {
      "id": 8,
      "name": "A resturant webside.",
      "frontend": "https://github.com/bashputi/Bistro_boss_client",
      "backend": "https://github.com/bashputi/Bistro_boss_server",
       "live": "https://bistro-boss-client-8c756.web.app",
      "image": "https://i.ibb.co.com/j6VdxQw/Screenshot-2024-11-22-010712.png"
    }
  ];
    return (
        <div className=" bg-primary min-h-screen w-full mx-auto">
        <div className="sm:px-16 px-5 py-28 bg-primary text-white container mx-auto">  
         <h1 data-aos="fade-up" data-aos-duration="2000" className="text-center text-2xl md:text-5xl font-bold md:my-20">My Projects </h1>
         {/* 1 no project  */}
        <div data-aos="fade-down" data-aos-duration="2000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          data?.map((item) => (
            <div key={item.id}  className="relative flex shadow-xl rounded w-full h-full group">
            <img className="w-full h-full" src={item.image} alt="project image" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#915] to-transparent flex flex-col justify-end pb-5 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-white mb-4 px-5 font-semibold text-lg">{item.name}</h4>
              <div className="flex gap-5 justify-center">
                <a href={item?.frontend} target="_blank" rel="noopener noreferrer" className="text-white hover:underline hover:font-semibold hover:text-blue-500">Front-end</a>
                <a href={item?.backend} target="_blank" rel="noopener noreferrer" className="text-white hover:underline hover:font-semibold hover:text-blue-500">Back-end</a>
                <a href={item?.live} target="_blank" rel="noopener noreferrer" className="text-white hover:underline hover:font-semibold hover:text-blue-500">Live Link</a>
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