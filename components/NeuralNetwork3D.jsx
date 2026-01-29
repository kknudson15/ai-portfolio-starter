```javascript
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function BrainParticles({ count = 100, scrollYProgress }) {
    const points = useRef();
    const materialRef = useRef();

    // Generate random particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const x = (Math.random() - 0.5) * 10; // spread
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 10;

            temp.push({ t, factor, speed, x, y, z });
        }
        return temp;
    }, [count]);

    // Create lines positions
    const linesGeometry = useMemo(() => {
        const p = [];
        // naive n^2 loop for 100 points is fine (10,000 checks)
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dz = particles[i].z - particles[j].z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < 4) { // Connection threshold
                    p.push(
                        particles[i].x, particles[i].y, particles[i].z,
                        particles[j].x, particles[j].y, particles[j].z
                    );
                }
            }
        }
        return new Float32Array(p);
    }, [particles, count]);

    useFrame((state, delta) => {
        if (!points.current) return;

        // Animate particles
        // We'll just rotate the whole group for now for simplicity + a subtle wave
        points.current.rotation.y += delta * 0.05;
        points.current.rotation.x += delta * 0.02;

        // Scrollytelling Color Logic
        if (scrollYProgress && materialRef.current) {
            const scroll = scrollYProgress.get(); // 0 to 1

            // Define colors
            const colorStart = new THREE.Color("#5b21b6"); // Purple
            const colorMid = new THREE.Color("#0071e3");   // Blue
            const colorEnd = new THREE.Color("#0f172a");   // Dark Slate

            // Simple Lerp
            const targetColor = new THREE.Color().copy(colorStart);
            if (scroll < 0.5) {
                targetColor.lerp(colorMid, scroll * 2);
            } else {
                targetColor.copy(colorMid).lerp(colorEnd, (scroll - 0.5) * 2);
            }

            materialRef.current.color.lerp(targetColor, 0.1); // Smooth transition
        }
    });

    return (
        <group ref={points}>
            {/* Particles */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.length}
                        array={new Float32Array(particles.flatMap(p => [p.x, p.y, p.z]))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    ref={materialRef}
                    size={0.15}
                    color="#5b21b6" // Deep purple
                    sizeAttenuation={true}
                    transparent={true}
                    opacity={0.8}
                />
            </points>

            {/* Connecting Lines */}
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linesGeometry.length / 3}
                        array={linesGeometry}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#0071e3"
                    transparent
                    opacity={0.15}
                    linewidth={1}
                />
            </lineSegments>
        </group>
    );
}

function Scene({ scrollYProgress }) {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#0071e3" />
            <BrainParticles count={80} scrollYProgress={scrollYProgress} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            {/* Fog for depth */}
            <fog attach="fog" args={['#0f172a', 10, 25]} />
        </>
    );
}

export default function NeuralNetwork3D({ scrollYProgress }) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="absolute inset-0 -z-10 w-full h-full opacity-60">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 60 }}
                dpr={[1, 2]} // Optimize for high DPI screens
                gl={{ antialias: true, alpha: true }}
            >
                <Scene scrollYProgress={scrollYProgress} />
                {!shouldReduceMotion && (
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 3}
                    />
                )}
            </Canvas>
        </div>
    );
}
```
