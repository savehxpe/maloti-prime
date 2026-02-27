"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const MaseruGrid = () => {
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < 1000; i++) {
            p.push((Math.random() - 0.5) * 10); // x
            p.push((Math.random() - 0.5) * 2);  // y (height)
            p.push((Math.random() - 0.5) * 10); // z
        }
        return new Float32Array(p);
    }, []);

    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
        }
    });

    return (
        <group>
            {/* City Wireframe Simulation */}
            <mesh ref={meshRef}>
                <boxGeometry args={[5, 0.2, 5]} />
                <meshBasicMaterial color="#00FFFF" wireframe opacity={0.3} transparent />
            </mesh>

            {/* Urban Points / Lights */}
            <Points positions={points}>
                <PointMaterial
                    transparent
                    color="#00FFFF"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>

            {/* Moving Fleet Unit (Cyan Dot) */}
            <MovingFleetUnit />
        </group>
    );
};

const MovingFleetUnit = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.position.x = Math.sin(t * 0.5) * 2;
            meshRef.current.position.z = Math.cos(t * 0.5) * 2;
            meshRef.current.position.y = 0.2 + Math.abs(Math.sin(t * 2)) * 0.1;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#00FFFF" />
            <pointLight color="#00FFFF" intensity={0.5} distance={1} />
        </mesh>
    );
};

export default function LatuMapHUD() {
    return (
        <div className="w-full h-full bg-black">
            <Canvas>
                <PerspectiveCamera makeDefault position={[5, 5, 5]} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <MaseruGrid />
                <fog attach="fog" args={['#000', 5, 15]} />
            </Canvas>
        </div>
    );
}
