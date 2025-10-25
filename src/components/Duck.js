import { useGLTF } from '@react-three/drei'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import * as THREE from 'three'

const Duck = ({ position, rotation, scale }) => {
  const { scene } = useGLTF('/duck/scene.gltf')

  useEffect(() => {
    // Convert materials to MeshStandardMaterial for proper lighting
    scene.traverse((child) => {
      if (child.isMesh) {
        const originalMaterial = child.material
        child.material = new THREE.MeshStandardMaterial({
          map: originalMaterial.map,
          color: originalMaterial.color || 0xffffff,
          roughness: 0.7,
          metalness: 0.1,
        })
      }
    })
  }, [scene])

  return (
    <>
      {/* Lights for the duck */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0.5, 1, 0.5]}
        intensity={0.8}
        castShadow
      />
      <pointLight
        position={[0, 1.2, 0]}
        intensity={0.3}
        color="#6BB6FF"
      />

      <primitive
        object={scene}
        position={position}
        rotation={rotation}
        scale={scale}
      />
    </>
  )
}

Duck.displayName = 'Duck'

Duck.propTypes = {
  position: PropTypes.array,
  rotation: PropTypes.array,
  scale: PropTypes.number,
}

Duck.defaultProps = {
  // Position it in front of the monitor, facing it
  position: [0.15, 0.58, 0.60],
  // Rotate to face the monitor (you see the back)
  rotation: [0.0, 5.2, 0.0],
  // Adjust scale as needed
  scale: 0.13,
}

export default Duck
