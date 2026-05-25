'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

// Module-level ref avoids triggering React re-renders on every mousemove
const mousePos = { x: 0, y: 0 }

function Orb() {
  const outerRef = useRef<Mesh>(null)
  const innerRef = useRef<Mesh>(null)
  const smoothTilt = useRef({ x: 0, y: 0 })

  useFrame((_, delta) => {
    if (!outerRef.current || !innerRef.current) return

    // Slow base rotation
    outerRef.current.rotation.y += delta * 0.11
    outerRef.current.rotation.x += delta * 0.035
    innerRef.current.rotation.y -= delta * 0.07
    innerRef.current.rotation.z += delta * 0.05

    // Smooth cursor-driven tilt via lerp
    smoothTilt.current.x +=
      (mousePos.y * 0.42 - smoothTilt.current.x) * 0.035
    smoothTilt.current.y +=
      (mousePos.x * 0.42 - smoothTilt.current.y) * 0.035

    outerRef.current.rotation.x += smoothTilt.current.x * 0.007
    outerRef.current.rotation.y += smoothTilt.current.y * 0.007
  })

  return (
    <group>
      {/* Outer wireframe — warm amber, semi-transparent */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial
          color="#C8965A"
          wireframe
          transparent
          opacity={0.38}
        />
      </mesh>

      {/* Inner geodesic — more opaque, creates depth */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.15, 0]} />
        <meshBasicMaterial
          color="#C8965A"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.x = (e.clientX / window.innerWidth) * 2 - 1
      mousePos.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 48 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
    >
      <Orb />
    </Canvas>
  )
}
