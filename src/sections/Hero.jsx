import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DevRoom from "../components/DevRoom";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import JavaLogo from "../components/JavaLogo";
import CppLogo from "../components/CppLogo";
import CsharpLogo from "../components/CsharpLogo";
import AngularLogo from "../components/AngularLogo";
import JavascriptLogo from "../components/JavascriptLogo";
import HeroCamera from "../components/HeroCamera";
import RubiksCube from "../components/RubiksCube";
import Pyraminx from "../components/Pyraminx";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      {/* Phrase introductif */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Bonjour, c'est Saad AMAL <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Étudiant Ingénieur en Informatique
        </p>
      </div>

      {/* 3D model below the text */}
      <div className="w-full h-full absolute mt-10"> 
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              
            <HeroCamera isMobile={isMobile}>
              <DevRoom
                position={sizes.deskPosition}   
                rotation={[0, -Math.PI, 0]}
                scale={sizes.deskScale}
              />
            </HeroCamera>
            <group>
              <CsharpLogo position={sizes.csharpPosition} />  
              <ReactLogo position={sizes.reactLogoPosition}/>
              <JavaLogo position={sizes.javaPosition}/>
              <CppLogo position={sizes.cppPosition} />
              <AngularLogo position={sizes.angularLogoPosition} />
              <JavascriptLogo position={sizes.javascriptPosition} />
              <RubiksCube position={sizes.rubiksCubePosition} />
              <Pyraminx position={sizes.pyraminxPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
