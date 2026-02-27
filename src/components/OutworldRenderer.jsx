"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Stage, PerspectiveCamera } from '@react-three/drei';

const ProductModel = ({ color = "#FF8C00" }) => {
    const meshRef = useRef();

    // Rotation logic - The "Boutique Engine" rotation (0.5 RPM)
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef}>
                {/* Placeholder High-Fidelity Geometry - For production, swap with .glb model */}
                <icosahedronGeometry args={[1, 15]} />
                <MeshDistortMaterial
                    color={color}
                    speed={2}
                    distort={0.4}
                    radius={1}
                    emissive={color}
                    emissiveIntensity={0.5}
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

const OutworldRenderer = ({ tier = "Reserve" }) => {
    // Map color to Tier based on Protocol R100-R180
    const tierColor = tier === "Reserve" ? "#FF8C00" : tier === "Premium" ? "#00FFFF" : "#E5E5E5";

    return (
        <div className="h-[250px] w-full cursor-grab active:cursor-grabbing relative z-10 transition-transform duration-700 ease-out group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />

                {/* "Field Mode" Lighting Profile */}
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} color="#FF8C00" intensity={1} /> {/* Sunset Orange Key */}
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} color="#00FFFF" intensity={2} /> {/* Cyber Cyan Rim */}

                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.5} contactShadow={false}>
                        <ProductModel color={tierColor} />
                    </Stage>
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    autoRotate={false}
                    makeDefault
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    );
};

export default OutworldRenderer;
