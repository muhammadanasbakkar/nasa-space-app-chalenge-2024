// 'use client';

// import React, { useEffect } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { Box, Card, CardContent, CardMedia, Typography, IconButton, AppBar, Toolbar } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ShareIcon from '@mui/icons-material/Share';
// import SearchIcon from '@mui/icons-material/Search';

// function App() {
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('visualization').appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;

//     // Add a Sun
//     const sunGeometry = new THREE.SphereGeometry(1.5, 32, 32);
//     const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
//     const sun = new THREE.Mesh(sunGeometry, sunMaterial);
//     scene.add(sun);

//     // Helper function to create planets and their orbits
//     const createPlanetWithOrbit = (size, color, distance) => {
//       // Create the planet
//       const planetGeometry = new THREE.SphereGeometry(size, 32, 32);
//       const planetMaterial = new THREE.MeshBasicMaterial({ color });
//       const planet = new THREE.Mesh(planetGeometry, planetMaterial);
//       planet.position.x = distance;
//       scene.add(planet);

//       // Create the orbit line (circle) with the same color as the planet
//       const orbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(distance, 64));
//       const orbitMaterial = new THREE.LineBasicMaterial({ color });
//       const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//       scene.add(orbit);
//     };

//     // Function to generate points for a circular orbit
//     const getCirclePoints = (radius, segments) => {
//       const points = [];
//       for (let i = 0; i <= segments; i++) {
//         const theta = (i / segments) * Math.PI * 2;
//         points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
//       }
//       return points;
//     };

//     // Add stars in the background
//     const addStars = (count) => {
//       const starGeometry = new THREE.BufferGeometry();
//       const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
//       const starVertices = [];

//       for (let i = 0; i < count; i++) {
//         const x = (Math.random() - 0.5) * 2000; // Random position in 3D space
//         const y = (Math.random() - 0.5) * 2000;
//         const z = (Math.random() - 0.5) * 2000;
//         starVertices.push(x, y, z);
//       }

//       starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

//       const stars = new THREE.Points(starGeometry, starMaterial);
//       scene.add(stars);
//     };

//     // Call the function to add stars
//     addStars(1000); // 1000 stars in the background

//     // Add planets and their orbits
//     createPlanetWithOrbit(0.1, 0xa0a0a0, 2); // Mercury (gray)
//     createPlanetWithOrbit(0.2, 0xffd700, 3); // Venus (yellow-gold)
//     createPlanetWithOrbit(0.3, 0x0000ff, 4); // Earth (blue)
//     createPlanetWithOrbit(0.2, 0xff4500, 5); // Mars (red-orange)
//     createPlanetWithOrbit(0.6, 0xffa500, 8); // Jupiter (orange)

//     // Add Saturn, Uranus, and Neptune
//     createPlanetWithOrbit(0.5, 0xf4a460, 10); // Saturn (sandy brown)
//     createPlanetWithOrbit(0.4, 0x40e0d0, 12); // Uranus (turquoise)
//     createPlanetWithOrbit(0.4, 0x1e90ff, 15); // Neptune (blue)

//     camera.position.set(0, 5, 20); // Adjusted to zoom out for wider planet range

//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };

//     animate();

//     window.addEventListener('resize', () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     });

//     return () => {
//       window.removeEventListener('resize', () => {});
//       document.getElementById('visualization').removeChild(renderer.domElement);
//     };
//   }, []);

//   const missions = [
//     { title: 'Europa Clipper Launch', subtitle: 'Mission Launch October 10th, 2024', image: 'europa.png' },
//     { title: 'Asteroid and Comet Missions', subtitle: 'Eyes on Asteroids', image: 'asteroid.png' },
//     { title: 'Entry, Descent, and Landing', subtitle: 'Perseverance', image: 'perseverance.png' },
//     { title: 'Voyager\'s Grand Tour', subtitle: '1977 - Today', image: 'voyager.png' }
//   ];

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'black' }}>
//       {/* Left Panel */}
//       <Box sx={{ width: '25%', backgroundColor: '#1c1c1c', padding: 2 }}>
//         {missions.map((mission, index) => (
//           <Card key={index} sx={{ marginBottom: 2 }}>
//             <CardMedia component="img" height="140" image={mission.image} alt={mission.title} />
//             <CardContent>
//               <Typography variant="h6" color="text.primary">{mission.title}</Typography>
//               <Typography variant="subtitle2" color="text.secondary">{mission.subtitle}</Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>

//       {/* Right Panel - 3D Visualization */}
//       <Box id="visualization" sx={{ flexGrow: 1 }} />

//       {/* Top App Bar */}
//       <AppBar position="fixed" sx={{ top: 0, backgroundColor: 'transparent', boxShadow: 'none' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Eyes on the Solar System
//           </Typography>
//           <IconButton color="inherit">
//             <SearchIcon />
//           </IconButton>
//           <IconButton color="inherit">
//             <ShareIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default App;
// 'use client';

// import React, { useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import axios from 'axios';
// import { Box, Card, CardContent, CardMedia, Typography, IconButton, AppBar, Toolbar } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ShareIcon from '@mui/icons-material/Share';
// import SearchIcon from '@mui/icons-material/Search';

// const NASA_API_KEY = 'yNzMOSNiEo9ffO3Ps6etkAQ4T2S5oKu1YrVmYtLU'; // Replace with your actual NASA API key

// function App() {
//   const [neoData, setNeoData] = useState([]);

//   // Fetch NEO data only once when the component mounts
//   useEffect(() => {
//     const fetchNEOData = async () => {
//       const today = new Date().toISOString().split('T')[0]; // Get today's date
//       const endDate = new Date();
//       endDate.setDate(endDate.getDate() + 7); // 7 days from now
//       const formattedEndDate = endDate.toISOString().split('T')[0];

//       const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${formattedEndDate}&api_key=${NASA_API_KEY}`;
//       try {
//         const response = await axios.get(url);
//         const neos = response.data.near_earth_objects;
//         const allNEOs = Object.values(neos).flat(); // Flatten NEOs from multiple days
//         setNeoData(allNEOs); // Set the data once
//       } catch (error) {
//         console.error('Error fetching NEO data:', error);
//       }
//     };

//     fetchNEOData(); // Call the API only once when the component mounts
//   }, []); // Empty dependency array ensures this runs only once

//   useEffect(() => {
//     // Now render the scene and NEO asteroids after NEO data is fetched

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('visualization').appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;

//     // Add a Sun
//     const sunGeometry = new THREE.SphereGeometry(1.5, 32, 32);
//     const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
//     const sun = new THREE.Mesh(sunGeometry, sunMaterial);
//     scene.add(sun);

//     // Helper function to create planets and their orbits
//     const createPlanetWithOrbit = (size, color, distance) => {
//       // Create the planet
//       const planetGeometry = new THREE.SphereGeometry(size, 32, 32);
//       const planetMaterial = new THREE.MeshBasicMaterial({ color });
//       const planet = new THREE.Mesh(planetGeometry, planetMaterial);
//       planet.position.x = distance;
//       scene.add(planet);

//       // Create the orbit line (circle) with the same color as the planet
//       const orbitGeometry = new THREE.BufferGeometry().setFromPoints(getCirclePoints(distance, 64));
//       const orbitMaterial = new THREE.LineBasicMaterial({ color });
//       const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//       scene.add(orbit);
//     };

//     // Function to generate points for a circular orbit
//     const getCirclePoints = (radius, segments) => {
//       const points = [];
//       for (let i = 0; i <= segments; i++) {
//         const theta = (i / segments) * Math.PI * 2;
//         points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
//       }
//       return points;
//     };

//     // Add stars in the background
//     const addStars = (count) => {
//       const starGeometry = new THREE.BufferGeometry();
//       const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
//       const starVertices = [];

//       for (let i = 0; i < count; i++) {
//         const x = (Math.random() - 0.5) * 2000; // Random position in 3D space
//         const y = (Math.random() - 0.5) * 2000;
//         const z = (Math.random() - 0.5) * 2000;
//         starVertices.push(x, y, z);
//       }

//       starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

//       const stars = new THREE.Points(starGeometry, starMaterial);
//       scene.add(stars);
//     };

//     // Add NEO asteroids fetched from NASA's API
//     const addNEOAsteroids = () => {
//       const asteroidMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
//       neoData.forEach((neo) => {
//         const asteroidGeometry = new THREE.SphereGeometry(0.05, 16, 16); // Small size for NEOs
//         const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);

//         // For simplicity, randomly place NEOs around the Earth (in 3D space)
//         const distance = 6 + Math.random() * 2; // Distance between 6 and 8 units
//         const angle = Math.random() * Math.PI * 2;
//         asteroid.position.x = Math.cos(angle) * distance;
//         asteroid.position.y = (Math.random() - 0.5) * 0.5; // Small Y variation
//         asteroid.position.z = Math.sin(angle) * distance;

//         scene.add(asteroid);
//       });
//     };

//     // Call the function to add stars and NEO asteroids after data is fetched
//     if (neoData.length > 0) {
//       addNEOAsteroids(); // Add asteroids only after data is fetched
//     }

//     addStars(1000); // 1000 stars in the background

//     // Add planets and their orbits
//     createPlanetWithOrbit(0.1, 0xa0a0a0, 2); // Mercury (gray)
//     createPlanetWithOrbit(0.2, 0xffd700, 3); // Venus (yellow-gold)
//     createPlanetWithOrbit(0.3, 0x0000ff, 4); // Earth (blue)
//     createPlanetWithOrbit(0.2, 0xff4500, 5); // Mars (red-orange)
//     createPlanetWithOrbit(0.6, 0xffa500, 8); // Jupiter (orange)

//     // Add Saturn, Uranus, and Neptune
//     createPlanetWithOrbit(0.5, 0xf4a460, 10); // Saturn (sandy brown)
//     createPlanetWithOrbit(0.4, 0x40e0d0, 12); // Uranus (turquoise)
//     createPlanetWithOrbit(0.4, 0x1e90ff, 15); // Neptune (blue)

//     camera.position.set(0, 5, 20); // Adjusted to zoom out for wider planet range

//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };

//     animate();

//     window.addEventListener('resize', () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     });

//     return () => {
//       window.removeEventListener('resize', () => {});
//       document.getElementById('visualization').removeChild(renderer.domElement);
//     };
//   }, [neoData]); // Watch for neoData changes, but only after the data is fetched initially

//   const missions = [
//     { title: 'Europa Clipper Launch', subtitle: 'Mission Launch October 10th, 2024', image: 'europa.png' },
//     { title: 'Asteroid and Comet Missions', subtitle: 'Eyes on Asteroids', image: 'asteroid.png' },
//     { title: 'Entry, Descent, and Landing', subtitle: 'Perseverance', image: 'perseverance.png' },
//     { title: 'Voyager\'s Grand Tour', subtitle: '1977 - Today', image: 'voyager.png' }
//   ];

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'black' }}>
//       {/* Left Panel */}
//       <Box sx={{ width: '25%', backgroundColor: '#1c1c1c', padding: 2 }}>
//         {missions.map((mission, index) => (
//           <Card key={index} sx={{ marginBottom: 2 }}>
//             <CardMedia component="img" height="140" image={mission.image} alt={mission.title} />
//             <CardContent>
//               <Typography variant="h6" color="text.primary">{mission.title}</Typography>
//               <Typography variant="subtitle2" color="text.secondary">{mission.subtitle}</Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </Box>

//       {/* Right Panel - 3D Visualization */}
//       <Box id="visualization" sx={{ flexGrow: 1 }} />

//       {/* Top App Bar */}
//       <AppBar position="fixed" sx={{ top: 0, backgroundColor: 'transparent', boxShadow: 'none' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Eyes on the Solar System
//           </Typography>
//           <IconButton color="inherit">
//             <SearchIcon />
//           </IconButton>
//           <IconButton color="inherit">
//             <ShareIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default App;


// 'use client';

// import React, { useEffect, useState } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
// import axios from 'axios';
// import {
//   Box,
//   Typography,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Checkbox,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const NASA_API_KEY = 'yNzMOSNiEo9ffO3Ps6etkAQ4T2S5oKu1YrVmYtLU'; // Replace with your actual NASA API key

// // Keplerian Parameters for Planet Positions
// const planetErrors = {
//   Mercury: { lambda: 15, phi: 1, rho: 1 },
//   Venus: { lambda: 20, phi: 1, rho: 8 },
//   Earth: { lambda: 20, phi: 8, rho: 6 }, // EM Barycenter
//   Mars: { lambda: 40, phi: 2, rho: 30 },
//   Jupiter: { lambda: 400, phi: 10, rho: 1000 },
//   Saturn: { lambda: 600, phi: 10, rho: 1500 },
//   Uranus: { lambda: 50, phi: 2, rho: 3000 },
//   Neptune: { lambda: 10, phi: 2, rho: 4500 }
// };

// function App() {
//   const [neoData, setNeoData] = useState([]);
//   const [showTrajectories, setShowTrajectories] = useState(true);
//   const [showLabels, setShowLabels] = useState(true);
//   const [selectedObject, setSelectedObject] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);

//   // Fetch Near-Earth Objects (NEOs) from NASA API
//   useEffect(() => {
//     const fetchNEOData = async () => {
//       const today = new Date().toISOString().split('T')[0];
//       const endDate = new Date();
//       endDate.setDate(endDate.getDate() + 7);
//       const formattedEndDate = endDate.toISOString().split('T')[0];
//       const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${formattedEndDate}&api_key=${NASA_API_KEY}`;
//       try {
//         const response = await axios.get(url);
//         const neos = response.data.near_earth_objects;
//         const allNEOs = Object.values(neos).flat();
//         setNeoData(allNEOs); // Set the fetched NEO data
//       } catch (error) {
//         console.error('Error fetching NEO data:', error);
//       }
//     };

//     fetchNEOData();
//   }, []);




//   useEffect(() => {

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.getElementById('visualization').appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;

//     // Lighting Setup
//     const ambientLight = new THREE.AmbientLight(0xcccccc, 0.8);
//     scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 3, 5);
//     scene.add(directionalLight);

//     // Create Sun with Lens Flare
//     const sunGeometry = new THREE.SphereGeometry(2.5, 32, 32);
//     const sunMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
//     const sun = new THREE.Mesh(sunGeometry, sunMaterial);
//     scene.add(sun);



//     const textureLoader = new THREE.TextureLoader();
//     const textureFlare = textureLoader.load('/path/to/lensflare-texture.png'); // Update path as necessary
//     const lensflare = new Lensflare();
//     lensflare.addElement(new LensflareElement(textureFlare, 512, 0));
//     sun.add(lensflare);

//     // Raycaster for detecting clicks
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();

//     // Function to Create Planet with Orbit
//     const createPlanetWithOrbit = (name, size, color, baseDistance, label) => {
//       const error = planetErrors[name];
//       const distanceWithError = baseDistance + (error.rho / 1000); // Convert rho

//       // Calculate planet position
//       const planetX = distanceWithError;
//       const planetY = 0;
//       const planetZ = 0;

//       // Create planet mesh
//       const planetGeometry = new THREE.SphereGeometry(size, 32, 32);
//       const planetMaterial = new THREE.MeshStandardMaterial({ color });
//       const planet = new THREE.Mesh(planetGeometry, planetMaterial);

//       planet.position.set(planetX, planetY, planetZ);
//       scene.add(planet);

//       // Create orbit line
//       if (showTrajectories) {
//         const orbitPoints = getCirclePoints(baseDistance, 128);
//         const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
//         const orbitMaterial = new THREE.LineBasicMaterial({ color });
//         const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//         scene.add(orbit);

//         // Store orbit info
//         orbit.userData = { label, type: 'orbit', distance: baseDistance };
//       }

//       // Create label for the planet
//       if (showLabels) {
//         const labelSprite = createLabelSprite(label);
//         labelSprite.position.set(planetX, size + 0.5, planetZ); // Position the label above the planet
//         scene.add(labelSprite);
//       }

//       // Store object info
//       planet.userData = { label, type: 'planet' }; // Store planet info
//       planet.callback = () => handleObjectClick(planet.userData); // Set click event for planet
//     };

//     const addStars = (count) => {
//       const starGeometry = new THREE.BufferGeometry();
//       const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
//       const starVertices = [];

//       for (let i = 0; i < count; i++) {
//         const x = (Math.random() - 0.5) * 2000; // Random position in 3D space
//         const y = (Math.random() - 0.5) * 2000;
//         const z = (Math.random() - 0.5) * 2000;
//         starVertices.push(x, y, z);
//       }

//       starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

//       const stars = new THREE.Points(starGeometry, starMaterial);
//       scene.add(stars);
//     };

//     // Call the function to add stars
//     addStars(1000); // 1000 stars in the background


//     // Mouse click event listener
// // Mouse click event listener
// const onMouseClick = (event) => {
//   console.log(event.clientX,'anas')
//   // Convert mouse coordinates to normalized device coordinates (-1 to +1) for both components
//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//   // Calculate objects intersecting the picking ray
//   raycaster.setFromCamera(mouse, camera);
//   const intersects = raycaster.intersectObjects(scene.children, true); // 'true' to check all descendants

//   if (intersects.length > 0) {
//     // Check if the clicked object is a planet or an orbit
//     const clickedObject = intersects[0].object;

//     console.log(clickedObject, 'clickedObject');

//     // Check if the clicked object has a callback (meaning it's interactive)
//     if (clickedObject.callback) {
//       clickedObject.callback(); // Call the associated callback for planets or asteroids
//     }
//   }
// };


//     // Add event listener for mouse click
//     window.addEventListener('click', onMouseClick);

//     // Function to Get Points for Circular Orbits
//     const getCirclePoints = (radius, segments) => {
//       const points = [];
//       for (let i = 0; i <= segments; i++) {
//         const theta = (i / segments) * Math.PI * 2;
//         points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
//       }
//       return points;
//     };

//     const handleObjectClick = (object) => {
//       console.log(object)
//       setSelectedObject(object);
//       setOpenDialog(true); // Open dialog to show details
//     };

//     // Function to Handle Click on Orbit
//     const handleOrbitClick = (orbit) => {
//       setSelectedObject(orbit);
//       setOpenDialog(true); // Open dialog to show orbit info
//     };

//     // Add Asteroids to Scene
//    // Add Asteroids to Scene
// const addNEOAsteroids = () => {
//   const asteroidMaterial = new THREE.MeshStandardMaterial({ color: 0xff4500, emissive: 0xff2200 });
//   neoData.forEach((neo) => {
//     const asteroidGeometry = new THREE.SphereGeometry(0.05, 16, 16); // Small asteroids
//     const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);

//     // Random placement around the Sun
//     const distance = 6 + Math.random() * 2;
//     const angle = Math.random() * Math.PI * 2;
//     asteroid.position.x = Math.cos(angle) * distance;
//     asteroid.position.y = (Math.random() - 0.5) * 0.5; // Small variation in height
//     asteroid.position.z = Math.sin(angle) * distance;

//     // Attach data to the asteroid
//     asteroid.userData = {
//       name: neo.name,
//       diameter: neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2),
//       hazardous: neo.is_potentially_hazardous_asteroid,
//       velocity: neo.close_approach_data[0].relative_velocity.kilometers_per_hour,
//       missDistance: neo.close_approach_data[0].miss_distance.kilometers,
//       approachDate: neo.close_approach_data[0].close_approach_date,
//       type: 'asteroid' // Specify type
//     };

//     // Add click event listener
//     asteroid.callback = () => {
//       console.log('Asteroid clicked:', asteroid.userData); // Debug log
//       handleObjectClick(asteroid.userData); // Use the existing function to handle clicks
//     };

//     // Ensure the asteroid is clickable
//     asteroid.interactive = true; // Ensure it's interactive
//     scene.add(asteroid);
//   });
// };


//     // Call to add asteroids after fetching NEO data
//     if (neoData.length > 0) {
//       addNEOAsteroids();
//     }

//     camera.position.set(0, 15, 30);

//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };

//     animate();

//     window.addEventListener('resize', () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     });

//     const createLabelSprite = (text) => {
//       const canvas = document.createElement('canvas');
//       const context = canvas.getContext('2d');
//       canvas.width = 256;
//       canvas.height = 128;
//       context.fillStyle = 'white';
//       context.font = '30px Arial';
//       context.fillText(text, 50, 64);
//       const texture = new THREE.CanvasTexture(canvas);
//       const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
//       const sprite = new THREE.Sprite(spriteMaterial);
//       sprite.scale.set(2, 1, 1);
//       return sprite;
//     };

//     createPlanetWithOrbit('Mercury', 0.2, 0xa0a0a0, 2, 'Mercury');
//     createPlanetWithOrbit('Venus', 0.3, 0xffd700, 3, 'Venus');
//     createPlanetWithOrbit('Earth', 0.35, 0x0000ff, 4, 'Earth');
//     createPlanetWithOrbit('Mars', 0.28, 0xff4500, 5, 'Mars');
//     createPlanetWithOrbit('Jupiter', 0.6, 0xffa500, 8, 'Jupiter');
//     createPlanetWithOrbit('Saturn', 0.55, 0xf4a460, 10, 'Saturn');
//     createPlanetWithOrbit('Uranus', 0.4, 0x40e0d0, 12, 'Uranus');
//     createPlanetWithOrbit('Neptune', 0.4, 0x1e90ff, 15, 'Neptune');
//     return () => {
//       window.removeEventListener('resize', () => { });
//       window.removeEventListener('click', onMouseClick); // Clean up click event listener
//       document.getElementById('visualization').removeChild(renderer.domElement);
//     };
//   }, [neoData, showTrajectories, showLabels]);
//   // Dialog for displaying selected object details
//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setSelectedObject(null);
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'black' }}>
//       <Box sx={{ width: '25%', backgroundColor: '#1c1c1c', padding: 2, color: 'white', overflowY: 'auto' }}>
//         <Typography variant="h6">Orrery Controls</Typography>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography>Visibility Settings</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>Toggle Orbits:</Typography>
//             <Checkbox
//               checked={showTrajectories}
//               onChange={() => setShowTrajectories(!showTrajectories)}
//               style={{ color: 'white' }}
//             />
//             <Typography>Show Labels:</Typography>
//             <Checkbox
//               checked={showLabels}
//               onChange={() => setShowLabels(!showLabels)}
//               style={{ color: 'white' }}
//             />
//           </AccordionDetails>
//         </Accordion>
//       </Box>

//       <Box id="visualization" sx={{ flexGrow: 1 }} />

//       {/* Dialog for Selected Object Details */}
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>{selectedObject?.label || 'Object Details'}</DialogTitle>
//         <DialogContent>
//           {selectedObject?.type === 'asteroid' && (
//             <>
//               <Typography><strong>Name:</strong> {selectedObject.name}</Typography>
//               <Typography><strong>Max Diameter:</strong> {selectedObject.diameter} km</Typography>
//               <Typography><strong>Velocity:</strong> {selectedObject.velocity} km/h</Typography>
//               <Typography><strong>Miss Distance:</strong> {selectedObject.missDistance} km</Typography>
//               <Typography><strong>Approach Date:</strong> {selectedObject.approachDate}</Typography>
//               <Typography><strong>Hazardous:</strong> {selectedObject.hazardous ? 'Yes' : 'No'}</Typography>
//             </>
//           )}
//           {selectedObject?.type === 'orbit' && (
//             <>
//               <Typography><strong>Orbit Label:</strong> {selectedObject.label}</Typography>
//               <Typography><strong>Orbit Distance:</strong> {selectedObject.distance} AU</Typography>
//             </>
//           )}
//           {selectedObject?.type === 'planet' && (
//             <>
//               <Typography><strong>Planet Label:</strong> {selectedObject.label}</Typography>
//               <Typography><strong>Distance from Sun:</strong> {selectedObject.distance} AU</Typography>
//             </>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }

// export default App;



// Existing imports remain the same
// Existing imports remain the same
'use client';

import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import axios from 'axios';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NASA_API_KEY = 'yNzMOSNiEo9ffO3Ps6etkAQ4T2S5oKu1YrVmYtLU';

function App() {
  const [neoData, setNeoData] = useState([]);
  const [showTrajectories, setShowTrajectories] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [selectedObject, setSelectedObject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Fetch Near-Earth Objects (NEOs) from NASA API
  useEffect(() => {
    const fetchNEOData = async () => {
      const today = new Date().toISOString().split('T')[0];
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 7);
      const formattedEndDate = endDate.toISOString().split('T')[0];
      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${formattedEndDate}&api_key=${NASA_API_KEY}`;
      try {
        const response = await axios.get(url);
        const neos = response.data.near_earth_objects;
        const allNEOs = Object.values(neos).flat();
        setNeoData(allNEOs);
      } catch (error) {
        console.error('Error fetching NEO data:', error);
      }
    };

    fetchNEOData();
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('visualization').appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Create Sun with Lens Flare
    const sunGeometry = new THREE.SphereGeometry(2.5, 32, 32);
    const sunMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    const textureLoader = new THREE.TextureLoader();
    const textureFlare = textureLoader.load('/path/to/lensflare-texture.png'); // Update path as necessary
    const lensflare = new Lensflare();
    lensflare.addElement(new LensflareElement(textureFlare, 512, 0));
    sun.add(lensflare);

    // Raycaster for detecting clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Function to Create Planet with Orbit
    const createPlanetWithOrbit = (name, size, color, baseDistance, label) => {
      const planetGeometry = new THREE.SphereGeometry(size, 32, 32);
      const planetMaterial = new THREE.MeshStandardMaterial({ color });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);

      planet.position.set(baseDistance, 0, 0);
      planet.userData = { label, type: 'planet', distance: baseDistance };
      scene.add(planet);

      if (showTrajectories) {
        const orbitPoints = getCirclePoints(baseDistance, 128);
        const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
        const orbitMaterial = new THREE.LineBasicMaterial({ color });
        const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
        orbit.userData = { label, type: 'orbit', distance: baseDistance };
        scene.add(orbit);
      }

      if (showLabels) {
        const labelSprite = createLabelSprite(label);
        labelSprite.position.set(baseDistance, size + 0.5, 0);
        scene.add(labelSprite);
      }
    };

    const addStars = (count) => {
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
      const starVertices = [];

      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
      }

      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
    };
    addStars(1000);

    // Mouse click event listener
    const onMouseClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        // Log the clicked object details for debugging
        console.log('Clicked Object:', clickedObject.userData);

        // Check the type of the clicked object and open the dialog with details
        if (clickedObject.userData && clickedObject.userData.type) {
          setSelectedObject(clickedObject.userData);
          setOpenDialog(true);
        }
      }
    };

    window.addEventListener('click', onMouseClick);

    const getCirclePoints = (radius, segments) => {
      const points = [];
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      return points;
    };

    const addNEOAsteroids = () => {
      const asteroidMaterial = new THREE.MeshStandardMaterial({ color: 0xff4500, emissive: 0xff2200 });
      neoData.forEach((neo) => {
        const asteroidGeometry = new THREE.SphereGeometry(0.05, 16, 16);
        const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);

        const distance = 6 + Math.random() * 2;
        const angle = Math.random() * Math.PI * 2;
        asteroid.position.x = Math.cos(angle) * distance;
        asteroid.position.y = (Math.random() - 0.5) * 0.5;
        asteroid.position.z = Math.sin(angle) * distance;

        asteroid.userData = {
          name: neo.name,
          diameter: neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2),
          hazardous: neo.is_potentially_hazardous_asteroid,
          velocity: neo.close_approach_data[0].relative_velocity.kilometers_per_hour,
          missDistance: neo.close_approach_data[0].miss_distance.kilometers,
          approachDate: neo.close_approach_data[0].close_approach_date,
          type: 'asteroid'
        };
        scene.add(asteroid);
      });
    };

    if (neoData.length > 0) {
      addNEOAsteroids();
    }

    camera.position.set(0, 15, 30);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const createLabelSprite = (text) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 128;
      context.fillStyle = 'white';
      context.font = '30px Arial';
      context.fillText(text, 50, 64);
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(2, 1, 1);
      return sprite;
    };

    createPlanetWithOrbit('Mercury', 0.2, 0xa0a0a0, 2, 'Mercury');
    createPlanetWithOrbit('Venus', 0.3, 0xffd700, 3, 'Venus');
    createPlanetWithOrbit('Earth', 0.35, 0x0000ff, 4, 'Earth');
    createPlanetWithOrbit('Mars', 0.28, 0xff4500, 5, 'Mars');
    createPlanetWithOrbit('Jupiter', 0.6, 0xffa500, 8, 'Jupiter');
    createPlanetWithOrbit('Saturn', 0.55, 0xf4a460, 10, 'Saturn');
    createPlanetWithOrbit('Uranus', 0.4, 0x40e0d0, 12, 'Uranus');
    createPlanetWithOrbit('Neptune', 0.4, 0x1e90ff, 15, 'Neptune');

    return () => {
      window.removeEventListener('resize', () => { });
      window.removeEventListener('click', onMouseClick);
      document.getElementById('visualization').removeChild(renderer.domElement);
    };
  }, [neoData, showTrajectories, showLabels]);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedObject(null);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'black' }}>
      <Box sx={{ width: '25%', backgroundColor: '#1c1c1c', padding: 2, color: 'white', overflowY: 'auto' }}>
        <Typography variant="h6">Orrery Controls</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>``
            <Typography>Visibility Settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Toggle Orbits:</Typography>
            <Checkbox
              checked={showTrajectories}
              onChange={() => setShowTrajectories(!showTrajectories)}
              style={{ color: 'white' }}
            />
            <Typography>Show Labels:</Typography>
            <Checkbox
              checked={showLabels}
              onChange={() => setShowLabels(!showLabels)}
              style={{ color: 'white' }}
            />
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box id="visualization" sx={{ flexGrow: 1 }} />

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedObject?.label || 'Object Details'}</DialogTitle>
        <DialogContent>
          {selectedObject?.type === 'asteroid' && (
            <>
              <Typography><strong>Name:</strong> {selectedObject.name}</Typography>
              <Typography><strong>Max Diameter:</strong> {selectedObject.diameter} km</Typography>
              <Typography><strong>Velocity:</strong> {selectedObject.velocity} km/h</Typography>
              <Typography><strong>Miss Distance:</strong> {selectedObject.missDistance} km</Typography>
              <Typography><strong>Approach Date:</strong> {selectedObject.approachDate}</Typography>
              <Typography><strong>Hazardous:</strong> {selectedObject.hazardous ? 'Yes' : 'No'}</Typography>
            </>
          )}
          {selectedObject?.type === 'orbit' && (
            <>
              <Typography><strong>Orbit Label:</strong> {selectedObject.label}</Typography>
              <Typography><strong>Orbit Distance:</strong> {selectedObject.distance} AU</Typography>
            </>
          )}
          {selectedObject?.type === 'planet' && (
            <>
              <Typography><strong>Planet Label:</strong> {selectedObject.label}</Typography>
              <Typography><strong>Distance from Sun:</strong> {selectedObject.distance} AU</Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default App;

