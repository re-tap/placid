import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Card, CardContent } from '@/components/ui/card';
import * as THREE from 'three';

const AnimatedSunflower = ({ hasAnimated }: { hasAnimated: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const stemRef = useRef<THREE.Mesh>(null);
  const flowerRef = useRef<THREE.Group>(null);
  const petalsRef = useRef<THREE.Group>(null);
  const centerRef = useRef<THREE.Mesh>(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  
  useFrame(({ clock }) => {
    if (groupRef.current && hasAnimated) {
      // Gentle swaying motion after bloom
      if (animationProgress >= 1) {
        const sway = Math.sin(clock.elapsedTime * 1.5) * 0.1;
        groupRef.current.rotation.z = sway;
      }
    }
  });

  useEffect(() => {
    if (hasAnimated && animationProgress < 1) {
      const startTime = Date.now();
      const duration = 3000; // 3 seconds animation
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
        
        setAnimationProgress(easeProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }
  }, [hasAnimated]);

  // Stem geometry
  const stemGeometry = new THREE.CylinderGeometry(0.2, 0.3, 8);
  
  // Flower center geometry
  const centerGeometry = new THREE.SphereGeometry(1.5);
  
  // Petal geometry
  const petalShape = new THREE.Shape();
  petalShape.moveTo(0, 0);
  petalShape.quadraticCurveTo(1.5, 1, 3, 0);
  petalShape.quadraticCurveTo(1.5, -0.5, 0, 0);
  
  const petalGeometry = new THREE.ExtrudeGeometry(petalShape, {
    depth: 0.1,
    bevelEnabled: true,
    bevelSize: 0.02,
    bevelThickness: 0.02
  });

  // Calculate scales based on animation progress
  const stemScale = animationProgress * 0.7 + 0.3; // Stem grows from 30% to 100%
  const flowerScale = Math.max(0, (animationProgress - 0.3) * 1.43); // Flower starts at 30% progress
  const petalScale = Math.max(0, (animationProgress - 0.6) * 2.5); // Petals start at 60% progress

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {/* Stem */}
      <mesh
        ref={stemRef}
        geometry={stemGeometry}
        position={[0, 0, 0]}
        scale={[1, stemScale, 1]}
      >
        <meshPhongMaterial color="#4ade80" />
      </mesh>
      
      {/* Flower group */}
      <group ref={flowerRef} position={[0, 4, 0]} scale={flowerScale}>
        {/* Flower center */}
        <mesh ref={centerRef} geometry={centerGeometry}>
          <meshPhongMaterial color="#8b4513" />
        </mesh>
        
        {/* Petals */}
        <group ref={petalsRef} scale={petalScale}>
          {Array.from({ length: 12 }, (_, i) => (
            <mesh
              key={i}
              geometry={petalGeometry}
              position={[0, 0, 0]}
              rotation={[0, 0, (i * Math.PI * 2) / 12]}
            >
              <meshPhongMaterial color="#ffd700" />
            </mesh>
          ))}
        </group>
      </group>
    </group>
  );
};

const CorePhilosophy = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-background via-background to-card py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_50%)] opacity-5" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6">
            Our Core Philosophy
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <div className="w-16 h-16">
              <Canvas camera={{ position: [0, 0, 15] }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffd700" />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#4ade80" />
                <AnimatedSunflower hasAnimated={hasAnimated} />
              </Canvas>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="glass-card rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <p className="text-foreground/90 leading-relaxed">
              We believe nature is as good as it can get and that it is in infinite wisdom, 
              possibility of state of form, has its own resilience and is affected by the change 
              of states in its element by various capacity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <p className="text-foreground/90 leading-relaxed">
              Hence, we believe it is best to work with nature rather than daring nature for the 
              thrill of an adventure. We encourage and aspire to learn it, to partner with it for 
              the best of the life of humanity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-xl p-6 border border-secondary/10 hover:border-secondary/20 transition-all duration-300">
            <p className="text-primary/90 font-medium leading-relaxed">
              We also ask, if what we are doing is not for the good of humans being a human 
              ourselves, then who are we doing it for?
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-card rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <p className="text-foreground/90 leading-relaxed">
              We aspire to make it a culture for innovations, policies, governances, health cares, 
              social architectures, subcultures, daily life demands, marketing, arts and 
              engineerings, etc to build up a stable and healthy society in both the internal 
              and external state and expressions of life.
            </p>
          </div>

          {/* Card 5 */}
          <div className="glass-card rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300">
            <p className="text-foreground/90 leading-relaxed">
              For us life is the most that matters. Anything advanced or basic that doesn't 
              edify or build up life, or maintain balance, stability and well being is an utter 
              distraction not just as simple as waste. Because everything has a consequence; 
              whatever induces imbalance or instability or steals from the well-being must 
              pay back through some type of calamity. This is the un-hackable code of nature 
              and the creator.
            </p>
          </div>

          {/* Card 6 - Special highlight card */}
          <div className="glass-card rounded-xl p-6 border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 hover:border-primary/30 transition-all duration-300">
            <p className="text-lg font-semibold leading-relaxed">
              <span className="text-primary">Re-think Civilization:</span> 
              <span className="text-secondary ml-1">
                We believe the utmost civilization resembles the utopian vision in Solar Punk.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePhilosophy;