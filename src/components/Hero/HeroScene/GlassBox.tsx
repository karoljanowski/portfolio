'use client'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react'
import * as THREE from 'three'

const GlassBox = () => {

    const boxRef = useRef<THREE.Mesh>(null!);
  
    useFrame(({clock}) => {
        if (boxRef.current) {
            boxRef.current.rotation.y = clock.getElapsedTime() * 0.6;
            boxRef.current.rotation.x = clock.getElapsedTime() * 0.6;
        }
    })
    return (
      <mesh ref={boxRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        {/* MeshTransmissionMaterial */}
        <meshPhysicalMaterial 
          transparent
          opacity={1}
          color="cyan"
          thickness={1}
          roughness={0}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={1}
        />
      </mesh>
    )
  }

  export default GlassBox