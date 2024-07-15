"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Points as ThreePoints } from "three";

type BgStarProps = {};

const Bg: React.FC<BgStarProps> = (props: any) => {
  const ref = useRef<ThreePoints | null>(null);

  const [flowerPositions] = useState(() => {
    const positions = new Float32Array(5001 * 3);
    for (let i = 0; i < 5001; i++) {
      const radius = Math.sqrt(Math.random()) * 1.2;
      const angle = Math.random() * Math.PI * 2;

      positions[i * 3] = radius * Math.cos(angle);
      positions[i * 3 + 1] = radius * Math.sin(angle);
      positions[i * 3 + 2] = 0;
    }
    return positions;
  });

  const [colors] = useState(() => {
    const colors = new Float32Array(5001 * 3);
    for (let i = 0; i < 5001; i++) {
      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random();
      colors[i * 3 + 2] = Math.random();
    }
    return colors;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta / 20;
    }
  });

  return (
    <group>
      <Points
        ref={ref}
        positions={flowerPositions}
        stride={3}
        frustumCulled
        {...props}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={flowerPositions.length / 3}
            array={flowerPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          vertexColors
          color="#fff"
          size={0.02} // Adjust size as needed
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Bg;
