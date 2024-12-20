'use client'
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

const CylinderText = ({ isInView }: { isInView: boolean }) => {

    const sphereRef = useRef<THREE.Mesh>(null!);
    const texture = useMemo(() => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
    
        canvas.width = 1024;
        canvas.height = 80;
    
        if (context) {

            context.clearRect(0, 0, canvas.width, canvas.height);
            
            context.fillStyle = 'white';
            context.font = 'bold 44px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            
            const text = "FRONTEND DEVELOPER | KAROL JANOWSKI | ";
            context.fillText(text, canvas.width / 2, canvas.height / 2);
        }
    
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        
        texture.wrapS = THREE.RepeatWrapping;
        texture.repeat.x = 2;
        
        return texture;
    }, []);

    useFrame(({clock}) => {
        if (sphereRef.current && isInView) {
            sphereRef.current.rotation.y =  - clock.getElapsedTime() * 0.3;
        }
    })

  return (
    <mesh ref={sphereRef} rotation={[0, 0, 0]} position={[0, 0.5, 0]}>
      <cylinderGeometry args={[3, 3, 0.5, 32, 1, true]} />
      <meshStandardMaterial 
        map={texture}
        side={THREE.DoubleSide}
        transparent
        opacity={1}
      />
    </mesh>
  );
};

export default CylinderText