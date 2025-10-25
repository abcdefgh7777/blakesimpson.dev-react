import { useGLTF } from '@react-three/drei'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import * as THREE from 'three'

const Pill = ({ position, rotation, scale, name }) => {
  const { scene } = useGLTF('/pill/scene.gltf')

  useEffect(() => {
    // Convert materials to MeshStandardMaterial for proper lighting
    scene.traverse((child) => {
      if (child.isMesh) {
        // Set name for selection
        if (name) child.name = name

        const originalMaterial = child.material
        let color = originalMaterial.color || new THREE.Color(0xffffff)

        // If the color is reddish, change it to green (darker green)
        // Check if red component is high and green/blue are low (red detection)
        if (color.r > 0.5 && color.g < 0.3 && color.b < 0.3) {
          color = new THREE.Color(0x006600) // Even darker green
        } else {
          // Darken other colors (like white) more for shadow effect
          color = new THREE.Color(
            color.r * 0.5,
            color.g * 0.5,
            color.b * 0.5
          )
        }

        child.material = new THREE.MeshStandardMaterial({
          map: originalMaterial.map,
          color: color,
          roughness: 0.6,
          metalness: 0.1,
          envMapIntensity: 0.3,
        })
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene, name])

  return (
    <>
      {/* Lights for the pill */}
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
        castShadow
        receiveShadow
      />
    </>
  )
}

Pill.displayName = 'Pill'

Pill.propTypes = {
  position: PropTypes.array,
  rotation: PropTypes.array,
  scale: PropTypes.number,
  name: PropTypes.string,
}

Pill.defaultProps = {
  // Position next to keyboard on desk
  position: [-0.3, 0.78, 0.15],
  rotation: [3.4, 5.9, 0.0],
  scale: 0.01,
}

export default Pill
