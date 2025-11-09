import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const HeroCamera = ({ children }) => {
    const groupRef = useRef();

    useFrame(() => {
        
    })

    return (
        <group>{children}</group>
    )
}

export default HeroCamera