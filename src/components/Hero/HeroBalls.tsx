'use client'
import { Addition, Base, Geometry, Subtraction } from "@react-three/csg";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useMemo, useRef, useEffect } from 'react';
import { Physics, RigidBody } from "@react-three/rapier";

const Scene = () => {
    const mousePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mousePosition.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1
            };
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <Canvas style={{ height: '100vh', width: '50vw' }} camera={{ position: [-2, 0, 12] }}>
            <directionalLight position={[-5, 5, 10]} intensity={2} color="white" />
            <ambientLight intensity={0.3} />

            <Physics gravity={[0, -40, 0]}>
                <BoxWithBalls mousePosition={mousePosition} />
            </Physics>
        </Canvas>
    );
}

const BoxWithBalls = ({ mousePosition }: { mousePosition: React.RefObject<{ x: number, y: number }> }) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current && mousePosition.current) {
            groupRef.current.rotation.x = -mousePosition.current.y * 0.1;
            groupRef.current.rotation.y = mousePosition.current.x * 0.1;
        }
    });

    return (
        <group ref={groupRef} scale={1}>
            <RigidBody type="fixed" colliders="trimesh">
                <mesh>
                    <Geometry useGroups>
                        <Base position={[0, 0, 0]}>
                            <Box />
                        </Base>
                    </Geometry>
                </mesh>
            </RigidBody>
            <Ball position={[3, 4, 1]} />
            <Ball position={[3, 5, 1]} />
            <Ball position={[3, 6, 1]} />
            <Ball position={[3, 4, 1.5]} />
            <Ball position={[3, 5, 1.5]} />
            <Ball position={[3, 6, 1.5]} />

            <RigidBody type="fixed" colliders="trimesh">
                <mesh position={[0, 0, 2]}>
                    <planeGeometry args={[60, 60]} />
                    <meshBasicMaterial color="transparent" opacity={0.1} transparent />
                </mesh>
            </RigidBody>
        </group>
    )
}

const Ball = ({ position }: { position: [number, number, number] }) => {
    return (
        <RigidBody colliders="ball" restitution={0.7}>
            <mesh position={position}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </RigidBody>
    )
}

const Box = () => {
    return (
        <>
            <Geometry useGroups>
                <Base position={[0, 0, 0]}>
                    <boxGeometry args={[60, 60, 4]} />
                    <meshBasicMaterial color="#FDFDFD" side={THREE.DoubleSide} />
                </Base>
                <Subtraction position={[3, 4, 0]}>
                    <SubstractionGeometryDoubleRounded color="#3B53FB" />
                </Subtraction>
                <Subtraction position={[-3, 0, 0]}>
                    <SubstractionGeometryLeftRounded color="#FF8319" />
                </Subtraction>
                <Subtraction position={[3, -4, 0]}>
                    <SubstractionGeometrySingleRounded color="#3C3C3C" />
                </Subtraction>
                <Subtraction position={[-1, 3, 0.95]}>
                    <boxGeometry args={[2, 2, 1.9]} />
                    <meshStandardMaterial color="#3B53FB" side={THREE.DoubleSide} />
                </Subtraction>
                <Subtraction position={[-0.5, -2, 0.75]}>
                    <boxGeometry args={[1, 3, 1.5]} />
                    <meshStandardMaterial color="3C3C3C" side={THREE.DoubleSide} />
                </Subtraction>
            </Geometry>
        </>
    );
}

const SubstractionGeometryDoubleRounded = ({ color }: { color: string }) => {
    return (
        <Geometry useGroups>
            <Base position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <ExtendedLShape color={color} />
            </Base>
            <Addition position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <ExtendedLShape color={color} />
            </Addition>
            <Addition position={[0, 0, 1]}>
                <boxGeometry args={[2, 4, 2]} />
                <meshStandardMaterial color={color} />
            </Addition>
            <Addition position={[2, 1, 1]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={color} />
            </Addition>
            <Addition position={[-2, -1, 1]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={color} />
            </Addition>
        </Geometry>
    )
}
const SubstractionGeometrySingleRounded = ({ color }: { color: string }) => {
    return (
        <Geometry useGroups>
            <Base position={[1, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <ExtendedLShape color={color} />
            </Base>
            <Addition position={[2, 1, 1]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={color} />
            </Addition>
            <Addition position={[-1, 0, 1]}>
                <boxGeometry args={[4, 4, 2]} />
                <meshStandardMaterial color={color} />
            </Addition>
        </Geometry>
    )
}
const SubstractionGeometryLeftRounded = ({ color }: { color: string }) => {
    return (
        <Geometry useGroups>
            <Base position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <ExtendedLShape color={color} />
            </Base>
            <Base position={[-1, 0, 0]} rotation={[0, 0, -Math.PI / 1]}>
                <ExtendedLShape color={color} />
            </Base>
            <Addition position={[1, 0, 1]}>
                <boxGeometry args={[4, 4, 2]} />
                <meshStandardMaterial color={color} />
            </Addition>
        </Geometry>
    )
}
const LShape = ({ color }: { color: string }) => {
    const shape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.absarc(0, 0, 2, 0, Math.PI / 2, false);
        shape.lineTo(0, 2);
        shape.lineTo(0, 0);
        return shape;
    }, []);

    return (
        <>
            <extrudeGeometry
                args={[
                    shape,
                    {
                        steps: 1,
                        depth: 1,
                        bevelEnabled: false
                    }
                ]}
            />
            <meshStandardMaterial color={color} side={THREE.DoubleSide} />
        </>
    );
}
const ExtendedLShape = ({ color }: { color: string }) => {
    return (
        <Geometry useGroups>
            <Base position={[0, 0, 0]}>
                <LShape color={color} />
            </Base>
            <Addition position={[0, 0, 1]}>
                <LShape color={color} />
            </Addition>
        </Geometry>
    )
}

export default Scene;
