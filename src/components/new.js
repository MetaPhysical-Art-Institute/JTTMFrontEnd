import { useEffect, useRef, useState, useMemo, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useCursor } from '@react-three/drei'
import { useAddress } from '@thirdweb-dev/react'
import { SHA256 } from 'crypto-js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import model from "../assets/threed/turtle.gltf"
import { PointsMaterial } from 'three'
import { AsciiEffect } from 'three-stdlib'

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash;
}

function getColorFromAddress(address) {
  // Convert the address string into a unique integer using the hashCode function
  const hash = hashCode(address);

  // Use the integer value to set the hue of an HSL color
  const color = `hsl(${hash % 360}, 100%, 40%)`;

  return color;
}

export default function Motm() {
  const address = useAddress();
  const color = getColorFromAddress(address);
  const walletAddress = useAddress();

  return (
    <Canvas>
      <color attach="background" args={[""]} />
      <spotLight position={[0, 10, 10]} angle={20.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Particlez  />
      <OrbitControls />
      
    </Canvas>
  );
}


function Particlez(props) {
  const walletAddress = useAddress()
  const seed = SHA256(walletAddress)
  const [clicked, click] = useState(false)
  const [hovered, hover] = useState(false)
  const hertz = parseInt(seed, 16)

  // Add a single particle
  const particles = [{ position: [-3, -3, -3] }]

  useCursor(hovered)
  return (
    <>
      {particles.map((particle, index) => (
        <Particle key={index} hertz={hertz} modelUrl={model} {...particle}  />
      ))}
    </>
  )
}

function Particle(props) {
  const { hertz, modelUrl, ...rest } = props
  const ref = useRef()
  const material = useRef(new PointsMaterial({
    
    size: 0.1,
    transparent: false,
    opacity: 0.5
  }))

  useEffect(() => {
    new GLTFLoader().load(modelUrl, gltf => {
      const model = gltf.scene
      ref.current.add(model)
    })
  }, [modelUrl])

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
  
    // Increment the rotation values over time
    ref.current.rotation.x = 0;
    ref.current.rotation.y = (t * 0.5) % (2 * Math.PI) ;
    ref.current.rotation.z = 0;
  });
  
  
  
  
  

  return (
    <points ref={ref} scale={[2, 2, 2]} material={material.current} {...rest} />
  )
}

function AsciiRenderer({
         
  renderIndex = 1,
  bgColor = 'black',
  fgColor = 'white',
  characters = '.metaphysical',
  invert = false,
  color = false,
  resolution = 0.15
}) {
  // Reactive state
  const { size, gl, scene, camera } = useThree()
  

  // Create effect

  const effect = useMemo(() => {
    const effect = new AsciiEffect(gl, characters, { invert, color, resolution })
    effect.domElement.style.position = 'absolute'
    effect.domElement.style.top = '0px'
    effect.domElement.style.left = '0px'
    effect.domElement.style.pointerEvents = 'none'
    return effect
  }, [characters, invert, color, resolution])

  // Styling
  useLayoutEffect(() => {
    effect.domElement.style.color = fgColor
    effect.domElement.style.backgroundColor = bgColor
  }, [fgColor, bgColor])

  // Append on mount, remove on unmount
  useEffect(() => {
    gl.domElement.style.opacity = '0'
    gl.domElement.parentNode.appendChild(effect.domElement)
    return () => {
      gl.domElement.style.opacity = '1'
      gl.domElement.parentNode.removeChild(effect.domElement)
    }
  }, [effect])

  // Set size
  useEffect(() => {
    effect.setSize(size.width, size.height)
  }, [effect, size])

  // Take over render-loop (that is what the index is for)
  useFrame((state) => {
    effect.render(scene, camera)
  }, renderIndex)
}