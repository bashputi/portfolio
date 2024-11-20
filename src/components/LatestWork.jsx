

const LatestWork = () => {
    const data = [
       
        {
            id: 1,
            name: "Apollo Level 2",
            institute: "Programming Hero",
            gpa: "ongoing",
            duration: "May 2024 - Decembar 2024"

          },
        {
            id: 2,
            name: "Complete web development course with Jhankar Mahbub",
            institute: "Programming Hero",
            gpa: "Black Belt",
            duration: "July 2023 - Decembar 2023"

          },
        {
            id: 3,
            name: "Responsive Web Design",
            institute: "Free Code Camp",
            gpa: "Completed",
            duration: "June 2022 - August 2022"

          },
          {
            id: 4,
            name: "BSc in Geography And Environment",
            institute: "Govt. Ragendra College, Faridpur",
            gpa: "2nd year running...",
            duration: "(2021-continue)"

          },
        {
            id: 5,
            name: "Higher Secondary School Certificate",
            institute: "Govt. Saroda Sundori Mohila College, Faridpur",
            gpa: "GPA: 5 (out of 5.00)",
            duration: "2018 - 2020"

          },
        {
            id: 6,
            name: "Secondary School Certificate",
            institute: "Govt. Saroda Sundori Mohila College, Faridpur",
            gpa: "GPA: 5 (out of 5.00)",
            duration: "2016 - 2018"

          },
    ];

    return (
        <div id="latestwork" className=" py-32 flex justify-center">
          <div>
          <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="text-center text-white text-3xl md:text-5xl font-semibold lg:font-bold">Academic Experience</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 pt-16 lg:pt-28">
            {
                data.map(item => (
                    <div key={item.id} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="text-white w-[370px] pl-4 lg:w-[550px] pb-16">
                    <h1 className="text-2xl pb-4 text-yellow-600 font-semibold">{item.name}</h1>
                    <p className="text-lg font-semibold">{item.institute}</p>
                    <p className="py-2">{item.gpa}</p>
                    <p>{item.duration}</p>
                </div>
                ))
            }
        </div>
          </div>
        </div>
    );
};

export default LatestWork;