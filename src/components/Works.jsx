import Lottie from "react-lottie";
import animation from "../../public/animation.json"


const Works = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const lottieContainerStyle = {
        transform: 'rotate(40deg)', // Counteract the default rotation
      };

    const services = [
        {
            id: '01',
            name: 'React js Developer',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magnam voluptatum, totam dolor labore obcaecati corrupti quidem exercitationem ea natus.'
        },
        {
            id: '02',
            name: 'Front-end Developer',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magnam voluptatum, totam dolor labore obcaecati corrupti quidem exercitationem ea natus.'
        },
        {
            id: '04',
            name: 'Back-end Developer',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magnam voluptatum, totam dolor labore obcaecati corrupti quidem exercitationem ea natus.'
        }
    ]

    return (
        <div id="work" className=" sm:px-16 pt-20 pb-12 px-1.5 text-white max-w-7xl mx-auto ">
                <h1 className="text-center uppercase mt-12 text-xl font-bold md:text-3xl lg:text-5xl">What I do</h1>
                <div className="lg:flex justify-evenly gap-16 items-center">
                <div className="flex-1">
                {/* animation  */}
                    <div style={lottieContainerStyle}>
                    <Lottie options={defaultOptions}
                        height={800}
                        width={400}
                        />   
                        </div>                 
            </div>
            <div className="flex-1">
                {/* services  */}
                {
                    services.map((item) => (
                        <div key={item.id} className="card px-5 py-5 mt-8 w-[410px] md:w-[600px] shadow-lg shadow-purple-400">
                           <h4 className="font-semibold text-2xl text-yellow-600 mb-3">{item.name}</h4>
                            <p>{item.description}</p>
                             </div>
                    ))
                }
            </div>
                </div>
         
        </div>
   
    );
};

export default Works;