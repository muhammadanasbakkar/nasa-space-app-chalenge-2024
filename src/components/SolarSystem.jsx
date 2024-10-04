'use client'

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const planets = [
  { name: 'Mercury', size: 0.38, color: 0xaaaaaa, distance: 4, speed: 0.02 },
  { name: 'Venus', size: 0.95, color: 0xffe4b5, distance: 7, speed: 0.015 },
  { name: 'Earth', size: 1, color: 0x0000ff, distance: 10, speed: 0.01 },
  { name: 'Mars', size: 0.53, color: 0xff6347, distance: 15, speed: 0.008 },
  { name: 'Jupiter', size: 11, color: 0xffa500, distance: 25, speed: 0.004 },
  { name: 'Saturn', size: 9.4, color: 0xd2b48c, distance: 40, speed: 0.003 },
];

const Planet = ({ size, color, distance, speed, timeScale, onClick }) => {
    const planetRef = useRef();
    useFrame(({ clock }) => {
      const time = clock.getElapsedTime() * speed * timeScale;
      planetRef.current.position.x = distance * Math.sin(time);
      planetRef.current.position.z = distance * Math.cos(time);
    });
  
    return (
      <mesh ref={planetRef} onClick={onClick}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };
  
  const SolarSystem = () => {
    const [timeScale, setTimeScale] = useState(1);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
  
    const handlePlanetClick = (planet) => {
      setSelectedPlanet(planet);
    };
  
    return (
      <div>
        <div className="controls" style={{ position: 'absolute', top: 20, left: 20 }}>
          <h3>Time Control</h3>
          <button onClick={() => setTimeScale(timeScale * 2)}>Speed Up</button>
          <button onClick={() => setTimeScale(timeScale / 2)}>Slow Down</button>
        </div>
  
        {selectedPlanet && (
          <div className="info-panel" style={{ position: 'absolute', top: 100, left: 20 }}>
            <h3>{selectedPlanet.name}</h3>
            <p>Size: {selectedPlanet.size}</p>
            <p>Distance: {selectedPlanet.distance} AU</p>
          </div>
        )}
  
        <Canvas camera={{ position: [0, 50, 100], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 0, 0]} intensity={2} />
          <Stars />
  
          {/* The Sun */}
          <mesh>
            <sphereGeometry args={[5, 32, 32]} />
            <meshStandardMaterial emissive={new THREE.Color(0xffff00)} />
          </mesh>
  
          {/* Planets */}
          {planets.map((planet, index) => (
            <Planet
              key={index}
              size={planet.size}
              color={planet.color}
              distance={planet.distance}
              speed={planet.speed}
              timeScale={timeScale}
              onClick={() => handlePlanetClick(planet)}
            />
          ))}
  
          {/* Orbit Controls */}
          <OrbitControls enableZoom enablePan />
        </Canvas>
      </div>
    );
  };
  
export default SolarSystem;
