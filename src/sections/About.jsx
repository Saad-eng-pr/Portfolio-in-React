import React from 'react'
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
import BunnyDetective from '../components/BunnyDetective';


const About = () => {
  
  return (
    <section className='c-space mb-20 mt-[120px]' id="about">
        <div className='grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-3 grid-cols-1 gap-5 h-full grid-flow-row-dense auto-rows-auto '>
            <div className='col-span-1 xl:row-span-1'>
                <div className='grid-container items-center'>
                    <img src="/assets/profile.jpeg" alt="grid-1" className='xl:mt-24 w-[90%]  h-fit object-contain' />

                    <div > 
                        <p className='grid-headtext xl:text-xl'>Rebonjour, c'est Saad AMAL</p>
                        <p className='grid-subtext xl:text-xl'>Jeune diplômé ingénieur de l'ISIMA en informatique, spécialisé en génie logiciel et systèmes informatiques.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-1'>
                <div className='grid-container'>
                    <Canvas className='h-[200px]'>
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                                <BunnyDetective />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                        </Suspense>
                    </Canvas>

                    <div>
                        <p className='grid-headtext xl:text-xl'>À la recherche d'un premier emploi</p>
                        <p className='grid-subtext xl:text-xl'>Diplômé ingénieur en informatique, je recherche un premier poste en développement logiciel et/ou web. Curieux et motivé, je souhaite contribuer à des projets concrets et enrichissants tout en continuant à développer mes compétences.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-1'>
                <div className='grid-container'>
                    {/* <Canvas className='w-[80%] h-[80%]'>
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                                <Puydedome />
                                <OrbitControls maxPolarAngle={Math.PI / 2}/>
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                        </Suspense>
                    </Canvas> */}

                        <img src="/assets/about-pic.jpg" alt="Illustration de présentation" className='sm:hidden xl:block xl:border xl:rounded-xl xl:h-[200px] xl:border-black-200 xl:mt-6'/>
                        <p className='grid-subtext xl:text-xl '>Je suis une personne curieuse, ouverte aux nouvelles expériences et opportunités, toujours prêt à apprendre et à relever de nouveaux défis.
                            Passionné par l'informatique, le développement logiciel et l'intelligence artificielle, je cherche constamment à approfondir mes compétences dans ces domaines.</p>
                        <p className='grid-subtext xl:text-xl mt-4 '>En dehors du domaine professionnel, je suis un grand amateur de romans policiers, avec une affection particulière pour les œuvres d'Agatha Christie. 
                            Engagé et dynamique, je m'investis aussi dans des activités volontaires, cherchant à contribuer positivement autour de moi et à explorer de nouvelles perspectives.</p>
                    
                </div>
            </div>

            <div className='col-span-2 xl:row-span-1'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:[266px] h-fit object-contain xl:mt-24'/>

                    <div>
                        <p className='grid-subtext xl:text-xl xl:mt-10'>“The point is not to get away from problems, the point is to find problems you enjoy dealing with.”
 Une phrase qui résume ma vision du développement : la passion de créer, de chercher et de comprendre.</p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-1'>
                <div className='grid-container'>
                    <img src="/assets/rubikscube.png" alt="grid-4" className='w-full sm:[326px] h-fit object-contain xl:mt-24'/>

                    <div>
                        <p className='grid-headtext xl:text-xl xl:mt-24'>Centres d'intérêt</p>
                        <p className='grid-subtext xl:text-xl'>Si mes Rubik's Cubes attirent votre attention, vous avez déjà deviné ma passion pour collectionner leurs différentes variantes ! En dehors de cela, je m'évade en jouant aux échecs et en lisant, notamment des romans comme <em>1984</em> de George Orwell, mon préféré, ou encore <em>Of Mice and Men</em> de John Steinbeck. Je reste également actif avec la course et la musculation.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About