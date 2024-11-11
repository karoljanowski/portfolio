'use client'
import { useMemo } from 'react'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'

const SVGShape = ({url, rotation, position}: {url: string, rotation: [number, number, number], position: [number, number, number]}) => {
    const svgData = useLoader(SVGLoader, url);
    const shapes = useMemo(() => {
      return svgData.paths.map((p: any) => p.toShapes(true));
    }, [svgData]);
  
    return (
      <mesh scale={0.00125} rotation={rotation} position={position}>
        {shapes.map((s, i) => (
          <extrudeGeometry
            key={i}
            args={[
              s,
              {
                depth: 5,
                bevelEnabled: false,
                steps: 30
              }
            ]}
          />
        ))}
        <meshPhongMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
    );
  }

  export default SVGShape