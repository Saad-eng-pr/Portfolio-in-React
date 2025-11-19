import { parcoursAcademique, workExperiences } from "../constants"

const Education = () => {
  return (
    <section className="c-space my-20" id="education">
        <p className="head-text hover:text-white transition ease-in-out duration-500">Diplômes et formations</p>

        <div className="gap-5 mt-12 max-w-4xl xl:max-w-6xl mx-auto">
            <div className="work-content">
                <div className="py-5 px-2.5">
                    {parcoursAcademique.map(({id, name, school, speciality, location, duration, icon, cours}) => (
                      <div key={id} className="work-content_container group">
                        <div className="flex flex-col h-full justify-start items-center py-2">
                            <div className="work-content_logo">
                                <img src={icon} alt="logo" className="w-full h-full"/>
                            </div>

                            <div className="work-content_bar"/>
                        </div>

                        <div className="py-5 px-2.5 sm:p-5">
                          <p className="text-lg font-bold text-white-800 group-hover:text-white transition ease-in-out duration-500">{name}</p>
                          <p className="font-semibold text-white-600 group-hover:text-white transition ease-in-out duration-500">{school}</p>
                          <div className="flex gap-10">
                            <div className="flex justify-content items-center">
                              <img src="/assets/calendar.png" alt="calendar" className="w-6 h-7"/>
                              <p className="text-sm text-white-600">{duration}</p>
                            </div>
                            <div className="flex justify-content items-center">
                              <img src="/assets/location.png" alt="location" className="w-6 h-7"/>
                              <p className="text-sm text-white-600">{location}</p>
                            </div>
                          </div>

                          <p className="text-gray-400 group-hover:text-white transition ease-in-out duration-500 text-justify">{speciality}</p>
                          <p className="mt-2 text-gray-400 group-hover:text-white transition ease-in-out duration-500 text-justify">{cours}</p>
                        </div>
                      </div>
                    )
                    )}
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education