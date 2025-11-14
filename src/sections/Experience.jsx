import { Canvas } from "@react-three/fiber"
import { workExperiences } from "../constants"
import { div } from "three/tsl"

const Experience = () => {
  return (
    <section className="c-space my-20">
        <p className="head-text">Expériences profetionnelles</p>

        <div className="gap-5 mt-12">
            <div className="work-content">
                <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                    {workExperiences.map(({id, name, pos, duration, icon, title, animation}) => (
                        <div key={id} className="work-content_container group">
                            <div className="flex flex-col h-full justify-start items-center py-2">
                                <div className="work-content_logo">
                                    <img src={icon} alt="logo" className="w-full h-full"/>
                                </div>

                                <div className="work-content_bar"/>
                            </div>

                            <div className="sm:p-5 px-2.5 py-5">
                                <p className="font-bold text-white-800">{name}</p>
                                <p className="text-sm text-white-600">{pos} -- {duration}</p>
                                <p className="text-gray-400 group-hover:text-white transition ease-in-out duration-500">{title}</p>
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