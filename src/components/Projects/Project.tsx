import { RoundedBox, Text3D, useTexture, Center, FontData } from "@react-three/drei";
import { Manrope } from '../../fonts/Manrope';

interface ProjectProps {
    image: string;
    title: string;
    position: [number, number, number];
    mainColor: string;
}

export const Project = ({image, title, position, mainColor}: ProjectProps) => {
    const texture = useTexture(image)

    return (
        <group position={position}>
            <pointLight position={[0, 2, -2]} intensity={1000} color={mainColor} />
            <RoundedBox args={[4, 2.5, 0.5]} position={[0, 1.25, 0]} radius={0.1}>
                <meshStandardMaterial color={mainColor}  />
            </RoundedBox>
            <mesh position={[0, 1.25, 0.251]}>
                <planeGeometry args={[3.5, 2]} />
                <meshStandardMaterial map={texture} transparent opacity={0.8} />
            </mesh>
            <Center position={[0, 0, 1.5]} rotation={[-Math.PI / 2, 0, 0]}>
                <Text3D size={0.5} lineHeight={0.5} height={0.1} font={(Manrope as unknown) as FontData}>
                    {title}
                    <meshStandardMaterial color={mainColor} />
                </Text3D>
            </Center>
        </group>
    )
} 