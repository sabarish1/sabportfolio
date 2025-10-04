import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ButterflyProps {
  targetPosition: [number, number, number];
}

function Butterfly3DModel({ targetPosition }: ButterflyProps) {
  const groupRef = useRef<THREE.Group>(null);
  const leftWingRef = useRef<THREE.Group>(null);
  const rightWingRef = useRef<THREE.Group>(null);
  
  const [currentPosition, setCurrentPosition] = useState<THREE.Vector3>(
    new THREE.Vector3(targetPosition[0], targetPosition[1], targetPosition[2])
  );
  const targetRef = useRef(new THREE.Vector3(...targetPosition));
  const velocityRef = useRef(new THREE.Vector3());
  const timeRef = useRef(0);

  useEffect(() => {
    targetRef.current.set(...targetPosition);
  }, [targetPosition]);

  useFrame((state, delta) => {
    if (!groupRef.current || !leftWingRef.current || !rightWingRef.current) return;

    timeRef.current += delta;

    // Calculate direction to target
    const direction = new THREE.Vector3()
      .subVectors(targetRef.current, currentPosition)
      .normalize();

    const distance = currentPosition.distanceTo(targetRef.current);

    // Natural flying movement
    if (distance > 0.1) {
      // Smooth acceleration
      const acceleration = direction.multiplyScalar(0.02);
      velocityRef.current.add(acceleration);
      velocityRef.current.clampLength(0, 0.15);
      
      // Add some natural waviness to flight
      const wave = Math.sin(timeRef.current * 3) * 0.02;
      velocityRef.current.y += wave;
      
      currentPosition.add(velocityRef.current);
      
      // Update position
      groupRef.current.position.copy(currentPosition);
      
      // Rotate to face movement direction
      if (velocityRef.current.length() > 0.01) {
        const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 0, 1),
          velocityRef.current.clone().normalize()
        );
        groupRef.current.quaternion.slerp(targetQuaternion, 0.1);
      }

      // Fast wing flapping when flying
      const flapSpeed = 15;
      const flapAngle = Math.sin(timeRef.current * flapSpeed) * 0.8;
      leftWingRef.current.rotation.y = flapAngle;
      rightWingRef.current.rotation.y = -flapAngle;
    } else {
      // Slow wing flapping when resting
      velocityRef.current.multiplyScalar(0.95);
      const idleFlapSpeed = 2;
      const idleFlapAngle = Math.sin(timeRef.current * idleFlapSpeed) * 0.2;
      leftWingRef.current.rotation.y = idleFlapAngle;
      rightWingRef.current.rotation.y = -idleFlapAngle;
      
      // Gentle hovering
      groupRef.current.position.y = currentPosition.y + Math.sin(timeRef.current * 2) * 0.03;
    }
  });

  // Create curvy wing shape
  const createWingShape = (isUpper: boolean) => {
    const shape = new THREE.Shape();
    
    if (isUpper) {
      // Upper wing - larger, more rounded
      shape.moveTo(0, 0);
      shape.bezierCurveTo(0.05, 0.15, 0.15, 0.25, 0.25, 0.28);
      shape.bezierCurveTo(0.3, 0.29, 0.35, 0.27, 0.38, 0.22);
      shape.bezierCurveTo(0.4, 0.15, 0.39, 0.08, 0.35, 0.02);
      shape.bezierCurveTo(0.3, -0.02, 0.2, -0.03, 0.1, -0.02);
      shape.bezierCurveTo(0.05, -0.01, 0.02, 0, 0, 0);
    } else {
      // Lower wing - smaller, more elongated
      shape.moveTo(0, 0);
      shape.bezierCurveTo(0.03, -0.08, 0.08, -0.15, 0.15, -0.18);
      shape.bezierCurveTo(0.2, -0.2, 0.25, -0.19, 0.28, -0.15);
      shape.bezierCurveTo(0.3, -0.1, 0.28, -0.04, 0.22, -0.01);
      shape.bezierCurveTo(0.15, 0.01, 0.08, 0.01, 0, 0);
    }
    
    return shape;
  };

  const upperWingGeometry = new THREE.ShapeGeometry(createWingShape(true));
  const lowerWingGeometry = new THREE.ShapeGeometry(createWingShape(false));

  return (
    <group ref={groupRef}>
      {/* Body - elongated and organic */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <capsuleGeometry args={[0.015, 0.2, 8, 16]} />
        <meshStandardMaterial 
          color="#2D1B4E"
          emissive="#9333EA"
          emissiveIntensity={0.4}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Body segments */}
      <mesh position={[0, 0.05, 0]}>
        <sphereGeometry args={[0.02, 12, 12]} />
        <meshStandardMaterial 
          color="#1E1B4B"
          emissive="#9333EA"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <sphereGeometry args={[0.018, 12, 12]} />
        <meshStandardMaterial 
          color="#1E1B4B"
          emissive="#9333EA"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Head - more detailed */}
      <mesh position={[0, 0.11, 0]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshStandardMaterial 
          color="#1F2937"
          emissive="#EC4899"
          emissiveIntensity={0.5}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Eyes */}
      <mesh position={[0.015, 0.115, 0.025]}>
        <sphereGeometry args={[0.008, 8, 8]} />
        <meshStandardMaterial 
          color="#000000"
          emissive="#FF1493"
          emissiveIntensity={1.2}
        />
      </mesh>
      <mesh position={[-0.015, 0.115, 0.025]}>
        <sphereGeometry args={[0.008, 8, 8]} />
        <meshStandardMaterial 
          color="#000000"
          emissive="#FF1493"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Antennae - curved */}
      <mesh position={[0.012, 0.13, 0]} rotation={[0.3, 0.2, 0]}>
        <cylinderGeometry args={[0.003, 0.001, 0.1, 6]} />
        <meshStandardMaterial 
          color="#1E1B4B"
          emissive="#9333EA"
          emissiveIntensity={0.6}
        />
      </mesh>
      <mesh position={[-0.012, 0.13, 0]} rotation={[0.3, -0.2, 0]}>
        <cylinderGeometry args={[0.003, 0.001, 0.1, 6]} />
        <meshStandardMaterial 
          color="#1E1B4B"
          emissive="#9333EA"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Left Wings Group */}
      <group ref={leftWingRef} position={[0.02, 0, 0]}>
        {/* Left Upper Wing */}
        <mesh geometry={upperWingGeometry} position={[0, 0.03, 0]}>
          <meshStandardMaterial
            color="#FF1493"
            emissive="#FF69B4"
            emissiveIntensity={0.9}
            side={THREE.DoubleSide}
            transparent
            opacity={0.95}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
        {/* Left Lower Wing */}
        <mesh geometry={lowerWingGeometry} position={[0, -0.02, 0]}>
          <meshStandardMaterial
            color="#EC4899"
            emissive="#F472B6"
            emissiveIntensity={0.8}
            side={THREE.DoubleSide}
            transparent
            opacity={0.9}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      </group>

      {/* Right Wings Group */}
      <group ref={rightWingRef} position={[-0.02, 0, 0]} rotation={[0, Math.PI, 0]}>
        {/* Right Upper Wing */}
        <mesh geometry={upperWingGeometry} position={[0, 0.03, 0]}>
          <meshStandardMaterial
            color="#FF1493"
            emissive="#FF69B4"
            emissiveIntensity={0.9}
            side={THREE.DoubleSide}
            transparent
            opacity={0.95}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
        {/* Right Lower Wing */}
        <mesh geometry={lowerWingGeometry} position={[0, -0.02, 0]}>
          <meshStandardMaterial
            color="#EC4899"
            emissive="#F472B6"
            emissiveIntensity={0.8}
            side={THREE.DoubleSide}
            transparent
            opacity={0.9}
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      </group>

      {/* Wing glow effects */}
      <pointLight 
        position={[0.15, 0, 0]} 
        intensity={0.8} 
        distance={1.5} 
        color="#FF69B4"
      />
      <pointLight 
        position={[-0.15, 0, 0]} 
        intensity={0.8} 
        distance={1.5} 
        color="#FF69B4"
      />
      
      {/* Body glow */}
      <pointLight 
        position={[0, 0, 0]} 
        intensity={0.6} 
        distance={1} 
        color="#9333EA"
      />
    </group>
  );
}

const targets = [
  { id: 'header', selector: 'h1', offset: { x: 2, y: 0.5, z: 0 } },
  { id: 'about', selector: 'h3', offset: { x: 1.5, y: 0.3, z: 0 } },
  { id: 'skills', selector: '.frontend-tech', offset: { x: 1, y: 0.2, z: 0 } },
  { id: 'experience', selector: '.company-name', offset: { x: 1, y: 0.2, z: 0 } },
  { id: 'experience', selector: '.experience-date', offset: { x: 1, y: 0.2, z: 0 } },
  { id: 'education', selector: '.college-name', offset: { x: 1, y: 0.2, z: 0 } },
  { id: 'socials', selector: 'footer', offset: { x: 0, y: -0.5, z: 0 } },
];

export default function Butterfly3D() {
  const [targetPosition, setTargetPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [showMessage, setShowMessage] = useState(false);
  const [messagePosition, setMessagePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  useEffect(() => {
    const updatePosition = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Determine which section we're in
      let currentTargetIndex = 0;
      
      for (let i = 0; i < targets.length; i++) {
        const section = document.getElementById(targets[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + scrollY;
          
          if (scrollY + windowHeight / 2 >= sectionTop) {
            currentTargetIndex = i;
          }
        }
      }

      const target = targets[currentTargetIndex];
      const section = document.getElementById(target.id);
      
      if (section) {
        const element = section.querySelector(target.selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          const x = ((rect.left + rect.width / 2) / window.innerWidth) * 4 - 2 + target.offset.x;
          const y = -((rect.top + rect.height / 2) / window.innerHeight) * 4 + 2 + target.offset.y;
          
          setTargetPosition([x, y, target.offset.z]);
          
          // Update message position to follow butterfly
          setMessagePosition({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2 + 100
          });
        }
      }
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-50"
        style={{ mixBlendMode: 'screen' }}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
          style={{ pointerEvents: 'auto' }}
        >
          <ambientLight intensity={0.5} />
          <group
            onClick={() => setShowMessage(true)}
            onPointerOver={() => setShowMessage(true)}
            onPointerOut={() => setShowMessage(false)}
          >
            <Butterfly3DModel targetPosition={targetPosition} />
          </group>
        </Canvas>
      </div>
      
      {showMessage && (
        <div 
          className="fixed z-[60] pointer-events-none animate-fade-in"
          style={{
            left: `${messagePosition.x}px`,
            top: `${messagePosition.y}px`,
            transform: 'translate(-50%, 0)'
          }}
        >
          <div className="bg-gradient-to-r from-pink-500/95 to-purple-600/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg border border-pink-400/40">
            <p className="text-white font-medium text-xs whitespace-nowrap">
              I'm an AI butterfly ✨
            </p>
          </div>
        </div>
      )}
    </>
  );
}
