import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BallCollider, Physics, RigidBody, RapierRigidBody } from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 20, 20);

const spheres = [...Array(30)].map(() => ({
  scale: [1, 1.1, 1.2, 1.3][Math.floor(Math.random() * 4)],
}));

type TechStackProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
  isAttracting: boolean;
  explosion: { x: number; y: number; time: number } | null;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
  isAttracting,
  explosion,
}: TechStackProps) {
  const api = useRef<RapierRigidBody | null>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.1, delta);

    const currentPos = api.current.translation();
    const cursorVec = new THREE.Vector3(
      (state.pointer.x * state.viewport.width) / 2,
      (state.pointer.y * state.viewport.height) / 2,
      0
    );

    // 1. Regular Mouse Push/Pull
    const direction = vec.copy(currentPos).sub(cursorVec);
    const distance = direction.length();
    
    if (distance < 10) {
      const forceMultiplier = isAttracting ? -300 : 180; // Harder Pull (-) vs Fast Passive Push (+)
      const impulse = direction
        .normalize()
        .multiplyScalar(forceMultiplier * delta * scale * (10 / (distance + 0.5)));
      api.current.applyImpulse(impulse, true);
    }

    // 3. Fast Centering Force (Snap back into the arena)
    const centeringForce = vec.copy(currentPos).multiplyScalar(-0.8 * delta);
    api.current.applyImpulse(centeringForce, true);

    // 2. Shockwave Explosion Logic (Extremely Fast PUSH)
    if (explosion && Date.now() - explosion.time < 150) {
      const explosionCenter = new THREE.Vector3(explosion.x, explosion.y, 0);
      const expoDir = vec.copy(currentPos).sub(explosionCenter);
      const expoDist = expoDir.length();
      if (expoDist < 18) {
        const boom = expoDir.normalize().multiplyScalar(1200 * scale * (1 / (expoDist + 0.5)));
        api.current.applyImpulse(boom, true);
      }
    }
  });

  return (
    <RigidBody
      linearDamping={0.2}
      angularDamping={0.2}
      friction={0.1}
      restitution={1}
      position={[r(20), r(20), r(10)]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[r(Math.PI), r(Math.PI), r(Math.PI)]}
      />
    </RigidBody>
  );
}

function Pointer() {
  const ref = useRef<RapierRigidBody>(null);
  useFrame(({ pointer, viewport }) => {
    ref.current?.setNextKinematicTranslation({
      x: (pointer.x * viewport.width) / 2,
      y: (pointer.y * viewport.height) / 2,
      z: 0,
    });
  });
  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAttracting, setIsAttracting] = useState(false);
  const [explosion, setExplosion] = useState<{ x: number; y: number; time: number } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document.getElementById("experience")?.getBoundingClientRect().top || 0;
      setIsActive(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.5,
          metalness: 0.6,
          roughness: 0.3,
          clearcoat: 0.5,
        })
    );
  }, []);

  const handlePointerDown = () => {
    setIsAttracting(true);
  };

  const handlePointerUp = (e: any) => {
    setIsAttracting(false);
    // Trigger Shockwave
    const x = (e.pointer.x * e.viewport.width) / 2;
    const y = (e.pointer.y * e.viewport.height) / 2;
    setExplosion({ x, y, time: Date.now() });
    setTimeout(() => setExplosion(null), 200);
  };

  return (
    <div className="techstack">
      <h2>Tech Arena</h2>
      <Canvas
        shadows
        gl={{ alpha: true, antialias: false }}
        camera={{ position: [0, 0, 25], fov: 45 }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="tech-canvas"
      >
        <ambientLight intensity={1.5} />
        <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow />
        <directionalLight position={[-10, 10, 5]} intensity={1} />
        
        <Physics gravity={[0, 0, 0]}>
          <Pointer />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[i % materials.length]}
              isActive={isActive}
              isAttracting={isAttracting}
              explosion={explosion}
            />
          ))}
        </Physics>

        <EffectComposer enableNormalPass={false}>
          <Bloom luminanceThreshold={1} intensity={0.3} radius={0.4} />
        </EffectComposer>

        <Environment preset="city" environmentIntensity={0.5} />
      </Canvas>
      <div className="tech-hint" style={{ opacity: isActive ? 1 : 0 }}>
        Hold Click to <span style={{ color: "var(--accentColor)" }}>ATTRACT</span> • Release to <span style={{ color: "#ff4444" }}>PUSH</span>
      </div>
    </div>
  );
};

export default TechStack;
