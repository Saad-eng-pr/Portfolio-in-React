import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Puydedome from '../components/Puydedome';


const About = () => {
  
  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-3 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:[276px] h-fit object-contain' />

                    <div > 
                        <p className='grid-headtext'>Rebonjour, c'est Saad AMAL</p>
                        <p className='grid-subtext'> Passionné par le développement logiciel et la conception d’applications fiables et évolutives, je cherche un stage de fin 
 d’études de 5 à 6 mois à partir d’avril 2026, afin de contribuer à la création de logiciels innovants et optimisés.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:[326px] h-fit object-contain'/>

                    <div>
                        <p className='grid-headtext'> Compétences Téchniques</p>
                        <p className='grid-subtext'>Durant mon parcours à l'ISIMA j'ai eu l'opportunité de travailler avec divers outils et languages.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <Canvas className='w-[80%] h-[80%]'>
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                                <Puydedome />
                                <OrbitControls />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                        </Suspense>
                    </Canvas>

                    <div>
                        <p className='grid-headtext'>Basé à Clermont-Ferrand</p>
                        <p className='grid-headtext'>Ouvert aux opportunités de stage partout en France.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-2 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:[266px] h-fit object-contain'/>

                    <div>
                        {/* <p className='grid-headtext'> Compétences Téchniques</p> */}
                        <p className='grid-subtext'>“The point is not to get away from problems, the point is to find problems you enjoy dealing with.”
 Une phrase qui résume ma vision du développement : la passion de créer, de chercher et de comprendre.</p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/rubikscube.png" alt="grid-4" className='w-full sm:[326px] h-fit object-contain'/>

                    <div>
                        <p className='grid-headtext'>Centres d’intérêt</p>
                        <p className='grid-subtext'>Si mes rubiks attirent votre attention, vous avez déjà deviné ma passion pour collectionner les variantes de Rubik’s Cube ! En dehors de ça, je m’évade en jouant aux échecs, en lisant des mangas, et je reste actif avec la course et le MMA.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About