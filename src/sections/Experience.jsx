
import { workExperiences } from "../constants"


const Experience = () => {
  return (
    <section className="c-space my-20" id="work">
        <p className="head-text hover:text-white transition ease-in-out duration-500">Expériences professionnelles</p>

        <div className="gap-5 mt-12 max-w-4xl xl:max-w-6xl mx-auto">
            <div className="work-content">
                <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                    {workExperiences.map(({id, name, pos, duration, location, icon, title, tools, initials}) => (
                        <div key={id} className="work-content_container group">
                            <div className="flex flex-col h-full justify-start items-center py-2">
                                <div className="work-content_logo">
                                    {icon ? (
                                        <img src={icon} alt={`Logo ${name}`} className="w-full h-full object-contain"/>
                                    ) : (
                                        <span className="flex h-full items-center justify-center text-2xl font-bold text-black-500">{initials}</span>
                                    )}
                                </div>

                                <div className="work-content_bar"/>
                            </div>

                            <div className="sm:p-5 px-2.5 py-5 ">
                                <p className="text-lg font-bold text-white-800 group-hover:text-white transition ease-in-out duration-500">{pos}</p>
                                <p className="text-lg font-semibold text-white-600 group-hover:text-white transition ease-in-out duration-500">{name} </p>
                                <div className="flex flex-wrap gap-x-10 gap-y-2">
                                    <div className="flex items-center">
                                        <img src="/assets/calendar.png" alt="calendar" className="w-6 h-7 object-fit" />
                                        <p className="text-sm text-white-600 group-hover:text-white transition ease-in-out duration-500">{duration}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img src="/assets/location.png" alt="calendar" className="w-6 h-7" />
                                        <p className="text-sm text-white-600 group-hover:text-white transition ease-in-out duration-500">{location}</p>
                                    </div>
                                        
                                </div>
                                <p className="text-gray-400 group-hover:text-white transition ease-in-out duration-500 text-justify whitespace-pre-line">{title}</p>
                                {tools && <p className="mt-2 text-sm text-gray-500 group-hover:text-gray-300 transition ease-in-out duration-500"><span className="font-semibold text-gray-400">Technologies :</span> {tools}</p>}
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