import { Canvas } from "@react-three/fiber"
import BallCanvas from "../components/BallCanvas"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className=' hidden lg:flex flex-wrap justify-center gap-4'>
        
        {technologies.map((technology) => (
            <div key={technology.name} className="w-28 h-28">
                <BallCanvas icon={technology.icon} />
            </div>
        ))}
        
    </div>
  )
}

export default Tech