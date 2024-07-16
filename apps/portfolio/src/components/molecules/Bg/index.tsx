import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useRef, useState } from "react";
import { Points as ThreePoints } from "three";

type BgStarProps = {};

const Bg: React.FC<BgStarProps> = (props: any) => {
  const ref = useRef<ThreePoints | null>(null);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5001), { radius: 1.5 }),
  );

  const [colors] = useState(() => {
    const colors = new Float32Array(5001 * 3);
    for (let i = 0; i < 5001; i++) {
      colors[i * 3] = Math.random(); // Red component
      colors[i * 3 + 1] = Math.random(); // Green component
      colors[i * 3 + 2] = Math.random(); // Blue component
    }
    return colors;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Suspense fallback={null}>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          colors={colors}
          stride={3}
          frustumCulled
          {...props}
        >
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={sphere.length / 3}
              array={sphere}
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
            size={0.01}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </Suspense>
  );
};

export default Bg;
