'use client'
import { Addition, Base, Geometry, Subtraction } from "@react-three/csg";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useMemo, useRef, useEffect } from 'react';
import { Physics, RigidBody, RapierRigidBody } from "@react-three/rapier";
import { useTexture } from "@react-three/drei";

const MAIN_BLUE = "#3B53FB";
const MAIN_ORANGE = "#FF8319";
const MAIN_DARK = "#3C3C3C";

const Scene = () => {
    const mousePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mousePosition.current = {
                x: (e.clientX / window.innerWidth),
                y: (e.clientY / window.innerHeight)
            };
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <Canvas style={{ height: '100vh', width: '50vw' }} camera={{ position: [0, 0, 11] }}>
            <Physics gravity={[0, -9, 0]} colliders={false}>
                <directionalLight position={[0, 5, 10]} intensity={2} color="white" />
                <ambientLight intensity={0.3} />
                <BoxWithBalls mousePosition={mousePosition} />
            </Physics>
        </Canvas>
    );
}

const BoxWithBalls = ({ mousePosition }: { mousePosition: React.RefObject<{ x: number, y: number }> }) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current && mousePosition.current) {
            groupRef.current.rotation.x = mousePosition.current.y * 0.2;
            groupRef.current.rotation.y = mousePosition.current.x * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            <RigidBody type="fixed" colliders="trimesh">
                <mesh>
                    <Box />
                </mesh>
            </RigidBody>
            <Balls />
            <FontPlane />
            <PlaneBetween />
            <CylindricalCuts />
        </group>
    )
}

const Balls = () => (
    <>
        {[...Array(5)].map((_, i) => (
            <Ball key={i} position={[5, 8, 1]} imagePath="/js.png" />
        ))}
    </>
)

const FontPlane = () => (
    <RigidBody type="fixed" colliders="trimesh">
        <mesh position={[0, 0, 2]}>
            <planeGeometry args={[60, 60]} />
            <meshBasicMaterial color="transparent" opacity={0.1} transparent />
        </mesh>
    </RigidBody>
)

const PlaneBetween = () => (
    <>
        <RigidBody type="fixed" colliders="trimesh">
            <mesh position={[-1, -3, 1]} rotation={[Math.PI / 2, -Math.PI / 4, 0]}>
                <planeGeometry args={[2.8, 2]} />
                <meshStandardMaterial color={MAIN_ORANGE} side={THREE.DoubleSide} />
            </mesh>
        </RigidBody>
        <RigidBody type="fixed" colliders="trimesh">
            <mesh position={[1, 1, 1]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
                <planeGeometry args={[2.8, 2]} />
                <meshStandardMaterial color={MAIN_ORANGE} side={THREE.DoubleSide} />
            </mesh>
        </RigidBody>
    </>
)

const CylindricalCuts = () => (
    <>
        <CylindricalCut position={[0.5, 1, 1]} rotation={[0, 0, Math.PI / 2]} width={1} />
        <CylindricalCut position={[-1, -3, 1]} rotation={[0, Math.PI / 2, 0]} width={2} />
    </>
)

const CylindricalCut = ({ position, rotation, width }: { position: [number, number, number], rotation: [number, number, number], width: number }) => (
    <mesh>
        <Geometry useGroups>
            <Base position={position}>
                <boxGeometry args={[width, 2, 1.99]} />
                <meshStandardMaterial color={MAIN_ORANGE} side={THREE.DoubleSide} />
            </Base>
            <Subtraction position={position} rotation={rotation}>
                <cylinderGeometry args={[0.9, 0.9, width, 64]} />
                <meshStandardMaterial color={MAIN_ORANGE} side={THREE.DoubleSide} />
            </Subtraction>
        </Geometry>
    </mesh>
)

const Ball = ({ position, imagePath }: { position: [number, number, number], imagePath: string }) => {
    const texture = useTexture(imagePath);
    const rigidBodyRef = useRef<RapierRigidBody>(null);

    const handleClick = () => {
        if (rigidBodyRef.current) {
            rigidBodyRef.current.applyImpulse({ x: 5, y: 5, z: 0 }, true);
        }
    };

    return (
        <RigidBody ref={rigidBodyRef} colliders="ball" restitution={0.5}>
            <mesh position={position} onClick={handleClick}>
                <sphereGeometry args={[0.5, 100, 100]} />
                <meshStandardMaterial color={'white'} map={texture} side={THREE.DoubleSide} />
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
                    <SubstractionGeometryDoubleRounded color={MAIN_BLUE} />
                </Subtraction>
                <Subtraction position={[-3, 0, 0]}>
                    <SubstractionGeometryLeftRounded color={MAIN_ORANGE} />
                </Subtraction>
                <Subtraction position={[3, -4, 0]}>
                    <SubstractionGeometrySingleRounded color={MAIN_DARK} />
                </Subtraction>

                <Subtraction position={[5, 11, 1]}>
                    <cylinderGeometry args={[0.9, 0.9, 10, 64]} />
                    <meshStandardMaterial color={MAIN_BLUE} side={THREE.DoubleSide} />
                </Subtraction>

                <Subtraction position={[-1, -3, 1]}>
                    <boxGeometry args={[2, 2, 1.99]} />
                    <meshStandardMaterial color={MAIN_ORANGE} side={THREE.DoubleSide} />
                </Subtraction>

                <Subtraction position={[1, 1, 1]}>
                    <boxGeometry args={[2, 2, 1.99]} />
                    <meshStandardMaterial color={MAIN_BLUE} side={THREE.DoubleSide} />
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
            <Addition position={[-1, -1, 1]}>
                <boxGeometry args={[4, 2, 2]} />
                <meshStandardMaterial color={color} />
            </Addition>
            <Addition position={[1, 1, 1]}>
                <boxGeometry args={[4, 2, 2]} />
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
