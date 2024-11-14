'use client'
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useInView } from 'framer-motion';

const GlassBox = ({ isInView }: { isInView: boolean }) => {
    const boxRef = useRef<THREE.Mesh>(null!);
    
    const material = useMemo(() => new THREE.MeshPhysicalMaterial({
        transparent: true,
        opacity: 0.9, 
        color: 'cyan',
        thickness: 0.5, 
        roughness: 0.1,
        metalness: 0,
        clearcoat: 0.5, 
        clearcoatRoughness: 0.1,
        transmission: 0.9, 
    }), []);

    useFrame((_, delta) => {
        if (boxRef.current && isInView) {
            boxRef.current.rotation.y += delta * 0.3;
            boxRef.current.rotation.x += delta * 0.3;
        }
    })

    return (
        <mesh ref={boxRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <primitive object={material} />
        </mesh>
    )
}

export default GlassBox