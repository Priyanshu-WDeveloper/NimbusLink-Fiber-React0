"use client";

import { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function CameraController() {
  const { camera, pointer } = useThree();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const dx = Math.sin(t * 0.08) * 0.25;
    const dy = Math.cos(t * 0.06) * 0.15;
    const tx = pointer.x * 0.4 + dx;
    const ty = -pointer.y * 0.25 + dy;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, tx, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, ty, 0.04);
    const zoom = 4.8 + Math.sin(t * 0.04) * 0.25;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, zoom, 0.02);
    camera.rotation.z = Math.sin(t * 0.05) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Effects() {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={0.6} mipmapBlur />
    </EffectComposer>
  );
}

function OrbitingLight() {
  const ref = useRef<THREE.DirectionalLight>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;
    ref.current.position.x = Math.cos(t * 0.4) * 4;
    ref.current.position.z = Math.sin(t * 0.4) * 4;
    ref.current.position.y = Math.sin(t * 0.2) * 1.5 + 1;
  });

  return <directionalLight ref={ref} intensity={0.6} color="#22d3ee" />;
}

function SignalRings() {
  const groupRef = useRef<THREE.Group>(null);
  const r1 = useRef<THREE.Mesh>(null);
  const r2 = useRef<THREE.Mesh>(null);
  const r3 = useRef<THREE.Mesh>(null);
  const refs = [r1, r2, r3];
  const centerRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      const es = Math.min(t / 1.5, 1);
      const ss = es * es * (3 - 2 * es);
      groupRef.current.scale.setScalar(0.9 + ss * 0.1);
      groupRef.current.rotation.y = 0.4 * (1 - ss);
    }

    refs.forEach((ref, i) => {
      if (!ref.current) return;
      const speeds = [0.25, 0.07, 0.12];
      const speed = speeds[i];
      const offset = i * 2;
      ref.current.rotation.x = Math.sin(t * 0.3 + offset) * 0.3 + 0.1;
      ref.current.rotation.y = t * speed + offset;
      ref.current.rotation.z = Math.sin(t * 0.2 + offset) * 0.1;
      const mat = ref.current.material as THREE.MeshPhysicalMaterial;
      const pulse = 0.5 + Math.sin(t * 0.5 + i * 1.5) * 0.3;
      const depthFactor = 0.6 + 0.4 * Math.abs(Math.sin(ref.current.rotation.x + 0.3));
      mat.emissiveIntensity = 0.3 + pulse * 0.4;
      mat.opacity = (0.2 + pulse * 0.25) * depthFactor;
    });

    if (centerRef.current) {
      const mat = centerRef.current.material as THREE.MeshPhysicalMaterial;
      const gp = 0.5 + Math.sin(t * Math.PI * 0.5) * 0.5;
      mat.emissiveIntensity = 0.6 + gp * 0.6;
      centerRef.current.scale.setScalar(1 + gp * 0.08);
    }
    if (glowRef.current) {
      const mat = glowRef.current.material as THREE.MeshPhysicalMaterial;
      const gp = 0.5 + Math.sin(t * Math.PI * 0.5 + 1) * 0.5;
      mat.emissiveIntensity = 0.3 + gp * 0.3;
      mat.opacity = 0.08 + gp * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {[1.3, 1.8, 2.3].map((r, i) => (
        <mesh key={i} ref={refs[i]}>
          <torusGeometry args={[r, 0.03, 24, 80]} />
          <meshPhysicalMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            transparent
            opacity={0.35 - i * 0.08}
            emissiveIntensity={0.5}
            metalness={0.3}
            roughness={0.25}
            clearcoat={0.3}
            clearcoatRoughness={0.2}
            envMapIntensity={0.8}
          />
        </mesh>
      ))}

      <mesh ref={centerRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhysicalMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.8} metalness={0.2} roughness={0.3} />
      </mesh>

      <mesh ref={glowRef}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhysicalMaterial color="#22d3ee" emissive="#22d3ee" transparent opacity={0.12} emissiveIntensity={0.4} metalness={0} roughness={1} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.12, 0.2, 64]} />
        <meshPhysicalMaterial color="#22d3ee" emissive="#22d3ee" transparent opacity={0.12} emissiveIntensity={0.3} side={THREE.DoubleSide} metalness={0.1} roughness={0.5} />
      </mesh>

      {[[-2.5, 0.8, -0.5], [2.5, 0.6, -0.3], [-2.2, -0.9, -0.2], [2.3, -0.8, -0.4]].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshPhysicalMaterial color="#5eead4" emissive="#5eead4" emissiveIntensity={0.3} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function FiberLines() {
  const lines = useMemo(() => {
    const result: THREE.CatmullRomCurve3[] = [];
    for (let i = 0; i < 3; i++) {
      const pts: THREE.Vector3[] = [];
      const offset = (i / 3) * Math.PI * 2;
      for (let j = 0; j <= 20; j++) {
        const t = j / 20;
        pts.push(
          new THREE.Vector3(
            -2.8 + t * 5.6,
            Math.sin(t * Math.PI * 2 + offset) * 0.8,
            Math.sin(t * Math.PI * 1.5 + offset) * 0.4,
          ),
        );
      }
      result.push(new THREE.CatmullRomCurve3(pts));
    }
    return result;
  }, []);

  return (
    <group>
      {lines.map((curve, i) => (
        <mesh key={i}>
          <tubeGeometry args={[curve, 64, 0.005, 8, false]} />
          <meshPhysicalMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={0.2}
            transparent
            opacity={0.15}
            metalness={0.1}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function Particles({ count = 120 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const [{ positions, speeds, depths, axes }] = useState(() => {
    const p = new Float32Array(count * 3);
    const sp = new Float32Array(count);
    const dp = new Float32Array(count);
    const ax = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 0.3 + Math.random() * 2.7;
      p[i * 3] = Math.cos(theta) * r;
      p[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      p[i * 3 + 2] = (Math.random() - 0.5) * 3;
      sp[i] = 0.15 + Math.random() * 0.7;
      dp[i] = (Math.random() - 0.5) * 0.8;
      const a = 0.5 + Math.random() * 1.8;
      ax[i * 2] = a;
      ax[i * 2 + 1] = a * (0.4 + Math.random() * 0.4);
    }
    return { positions: p, speeds: sp, depths: dp, axes: ax };
  });

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const theta = t * 0.15 * speeds[i] + i * 0.3;
      const a = axes[i * 2];
      const b = axes[i * 2 + 1];
      arr[i * 3] = Math.cos(theta) * a;
      arr[i * 3 + 1] = Math.sin(theta * 0.7) * b + Math.sin(t * 0.08 + i) * 0.3;
      arr[i * 3 + 2] = depths[i] + Math.sin(t * 0.05 + i) * 0.3;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#22d3ee" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.8], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 3, 3]} intensity={0.6} />
      <directionalLight position={[-3, 1, 2]} intensity={0.3} color="#67e8f9" />
      <OrbitingLight />
      <Suspense fallback={null}>
        <Environment preset="city" />
      </Suspense>
      <CameraController />
      <Effects />
      <SignalRings />
      <FiberLines />
      <Particles count={120} />
    </Canvas>
  );
}
