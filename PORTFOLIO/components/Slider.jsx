function Slider() {

    const skills = [
        "Python",
        "Java",
        "HTML",
        "CSS",
        "Tailwind",
        "React",
        "JavaScript",
        "SQL",
        "Node",
        "Express",
    ]

    return (
        <div className="overflow-hidden w-full py-10 my-40">

            <div className="flex animate-scroll">

                <div className="flex   gap-8 pr-8">
                    {skills.map((item, index) => (
                        <div key={index} className="slider_lang">
                            <h1>{item}</h1>
                        </div>
                    ))}
                </div>

                <div className="flex  gap-8 pr-8">
                    {skills.map((item, index) => (
                        <div key={index} className="slider_lang">
                            <h1>{item}</h1>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Slider
// function Slider(){
//     return (
//         <>
//             <div className="mt-40 mb-20 flex gap-10 p-3 m-20">
//                 <div className="slider_lang motion-translate-x-in-[490%] motion-duration-9000 ">
//                     <h1>Python</h1>
//                 </div>

//                 <div className="slider_lang motion-translate-x-in-[340%] motion-duration-9000  bg-red-500 text-black">
//                     <h1>Java</h1>
//                 </div>

//                 <div className="slider_lang motion-translate-x-in-[190%] motion-duration-9000  ">
//                     <h1>REACT</h1>
//                 </div>

//                 <div className="slider_lang motion-translate-x-in-[40%] motion-duration-9000  bg-red-500  text-black">
//                     <h1>JavaScript</h1>
//                 </div>

//                 <div className="slider_lang motion-translate-x-in-[10%] motion-duration-9000  w-1/6   ">
//                     <h1>SQL</h1>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Slider
