import { Canvas } from "@react-three/fiber"
import { workExperiences } from "../constants"
import { div } from "three/tsl"

const Experience = () => {
  return (
    <section className="c-space my-20" id="work">
        <p className="head-text">Expériences profetionnelles</p>

        <div className="gap-5 mt-12 max-w-4xl xl:max-w-6xl mx-auto">
            <div className="work-content">
                <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                    {workExperiences.map(({id, name, pos, duration, location, icon, title}) => (
                        <div key={id} className="work-content_container group">
                            <div className="flex flex-col h-full justify-start items-center py-2">
                                <div className="work-content_logo">
                                    <img src={icon} alt="logo" className="w-full h-full"/>
                                </div>

                                <div className="work-content_bar"/>
                            </div>

                            <div className="sm:p-5 px-2.5 py-5 ">
                                <p className="text-lg font-bold text-white-800 group-hover:text-white transition ease-in-out duration-500">{pos}</p>
                                <p className="text-lg font-semibold text-white-600 group-hover:text-white transition ease-in-out duration-500">{name} </p>
                                <div className="flex gap-10">
                                    <div className="flex justify-content items-center">
                                        <img src="/assets/calendar.png" alt="calendar" className="w-6 h-7 object-fit" />
                                        <p className="text-sm text-white-600 group-hover:text-white transition ease-in-out duration-500">{duration}</p>
                                    </div>
                                    <div className="flex justify-content items-center">
                                        <img src="/assets/location.png" alt="calendar" className="w-6 h-7" />
                                        <p className="text-sm text-white-600 group-hover:text-white transition ease-in-out duration-500">{location}</p>
                                    </div>
                                        
                                </div>
                                <p className="text-gray-400 group-hover:text-white transition ease-in-out duration-500 text-justify">{title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Experience