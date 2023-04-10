import React, { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const carouselRef = useRef()

  useEffect(() => {
    // crearea scenelor
    const scene = new THREE.Scene()

    // crearea camerei
    const camera = new THREE.PerspectiveCamera(
      75,
      carouselRef.current.clientWidth / carouselRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    // crearea planului pentru a afișa imaginea
    const planeGeometry = new THREE.PlaneGeometry(3, 3)
    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load(images[currentImageIndex])
    const planeMaterial = new THREE.MeshBasicMaterial({ map: texture })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)

    // adăugarea planului la scenă
    scene.add(plane)

    // crearea render-ului și adăugarea la container
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(
      carouselRef.current.clientWidth,
      carouselRef.current.clientHeight
    )
    carouselRef.current.appendChild(renderer.domElement)

    // funcția de animare
    const animate = () => {
      requestAnimationFrame(animate)

      // rotația planului
      plane.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      // eliminarea render-ului atunci când componenta este distrusă
      renderer.dispose()
    }
  }, [currentImageIndex, images])

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    )
  }

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
    return (
      <div>
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
        <div ref={carouselRef} />
      </div>
    )
  }
}
export default Carousel
