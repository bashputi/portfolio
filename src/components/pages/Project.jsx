import { Carousel, IconButton } from "@material-tailwind/react";
import { FaEye } from "react-icons/fa";

const Project = () => {
    return (
        <div className=" bg-primary w-full mx-auto">
        <div className="sm:px-16 px-5 py-28 bg-primary text-white">  
         <h1 className="text-center text-2xl md:text-5xl font-bold md:my-20">My Projects</h1>
         {/* 1 no project  */}
        <div className="lg:flex justify-center bg-primary lg:w-4/5 mx-auto gap-12 mt-20">
          
        <div className="flex-1 pb-8">
          <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src="https://i.ibb.co/jGhZtN9/Screenshot-2023-12-12-110818.png"
        alt="image 1"
        className="h-96 w-full object-cover"
      />
      <img
        src="https://i.ibb.co/7rBpTxV/Screenshot-2023-12-12-110914.png"
        alt="image 2"
        className="h-96 w-full object-cover"
      />
      <img
        src="https://i.ibb.co/9vMwWHD/Screenshot-2023-12-12-110934.png"
        alt="image 3"
        className="h-96 w-fulll object-cover"
      />
      <img
        src="https://i.ibb.co/wrX4d5B/Screenshot-2023-12-12-111035.png"
        alt="image 4"
        className="h-96 w-full object-cover"
      />
    </Carousel>
          
          </div>
        <div className="">
            <h1 className="text-3xl font-semibold">MREN Stack Project</h1>
            <p className="text-yellow-500">A parcel order and delivery website</p>
            <p className="text-xl py-5">Front-end Code: <a href="https://github.com/bashputi/parcel_client"><button className="btn btn-outline px-8 ml-4 btn-accent"><FaEye /></button></a></p>
              <p className="text-xl pb-6">Back-end Code: <a href="https://github.com/bashputi/parcel-server"><button className="btn btn-outline px-8 ml-4 btn-accent"><FaEye /></button></a></p>
              <a href="https://parcel-delivery-user.web.app"><button className="btn btn-success">Live Site</button></a>
              <div>
                <p className=" pt-3"> <span className="text-xl">Tecnology:</span> React, react-hook-form, <br /> email.js, stripe-js, material-uI, <br /> firebase, mongoDB, express.js</p>
              </div>
        </div>
        </div>
        {/* 2 no project  */}
      <div className="lg:flex justify-center my-44 bg-primary lg:w-4/5 mx-auto gap-12">
          <div className="mb-8">
              <h1 className="text-3xl font-semibold">Full Stack Project</h1>
              <p className="text-yellow-500">Food ordering website</p>
              <p className="text-xl py-5">Front-end Code: <a href="https://github.com/bashputi/bakery-client"><button className="btn btn-outline px-8 ml-4 btn-accent"><FaEye /></button></a></p>
              <p className="text-xl pb-6">Back-end Code: <a href="https://github.com/bashputi/bakery-server"><button className="btn btn-outline px-8 ml-4 btn-accent"><FaEye /></button></a></p>
              <a href="https://bakery-client-2384d.web.app"><button className="btn btn-success">Live Site</button></a>
              <div>
                <p className=" pt-3"> <span className="text-xl">Tecnology:</span> React, react-hook-form, <br />firebase, mongoDB, express.js</p>
              </div>
              
          </div>
           
          <div className="flex-1">
          <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src="https://i.ibb.co/r7JQvK7/Screenshot-2023-12-12-114102.png"
        alt="image 1"
        className="h-96 w-full object-cover"
      />
      <img
        src="https://i.ibb.co/vqS6psH/Screenshot-2023-12-12-113930.png"
        alt="image 2"
        className="h-96 w-full object-cover"
      />
      <img
        src="https://i.ibb.co/fxHtLdm/Screenshot-2023-12-12-113949.png"
        alt="image 3"
        className="h-96 w-fulll object-cover"
      />
      <img
        src="https://i.ibb.co/d52WS2z/Screenshot-2023-12-12-113847.png"
        alt="image 4"
        className="h-96 w-full object-cover"
      />
    </Carousel>
          
          </div>
          </div>
          {/* 3 no projects  */}
       
      <div className="lg:flex justify-center bg-primary lg:w-4/5 mx-auto gap-12 mt-20">
          
          <div className="flex-1 mb-8">
          <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src="https://i.ibb.co/7t2WtLG/Screenshot-2023-12-12-125715.png"
        alt="image 1"
        className="h-96 w-full object-cover"
      />
      <img
        src="https://i.ibb.co/7bjbKqc/Screenshot-2023-12-12-125518.png"
        alt="image 2"
        className="h-96 w-full object-cover"
      />
      <img
        src="https://i.ibb.co/BzR8ctK/Screenshot-2023-12-12-125703.png"
        alt="image 3"
        className="h-96 w-fulll object-cover"
      />
    
    </Carousel>
          
          </div>
          <div className="">
              <h1 className="text-3xl font-semibold">Front-end Project</h1>
              <p className="text-yellow-500">Car selling website according to brand</p>
              <p className="text-xl py-6">Front-end Code: <a href="https://github.com/bashputi/Brandshop-client"><button className="btn btn-outline px-8 ml-4 btn-accent"><FaEye /></button></a></p>
              <p className="text-xl pb-6">Back-end Code: <a href="https://github.com/bashputi/Brand-shop-server"><button className="btn btn-outline px-8 ml-4 btn-accent"><FaEye /></button></a></p>
              <a href="https://brandsore-client.web.app"><button className="btn btn-success">Live Site</button></a>
              <div>
                <p className=" pt-3"> <span className="text-xl">Tecnology:</span> React, firebase, <br /> mongoDB, express.js</p>
              </div>
          </div>
          </div>
  
        </div>
       
     </div>
    );
};

export default Project;