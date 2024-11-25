/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useState } from 'react'

import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen  bg-blue-300">

      <Canvas  >
        {/* <PerspectiveCamera fov={75} makeDefault position={[0, 0, 2]} /> */}
        <Cube />

      </Canvas>
    </div>

  )
}

const Cube = () => {
  const meshRef = useRef<Mesh>(null)
  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  })
  return (
    <mesh ref={meshRef}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />

      {/* <pointLight position={[10, 10, 10]} />
       */}
      <ambientLight intensity={0.5} />
      <OrbitControls />
    </mesh>
  )
}

export default App
