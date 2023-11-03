'use client';
import styles from './page.module.scss'
import Gallery from './components/gallery';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';
import { useSpring } from 'framer-motion';
import Description from './components/description';

const projects = [
  {
    name: "I AM",
    handle: "poble1"
  },
  {
    name: "Influencer",
    handle: "poble2"
  },
  {
    name: "Designer",
    handle: "poble3"
  },
  {
    name: "Developer",
    handle: "poble4"
  }
  ,
  {
    name: "Developer",
    handle: "poble5"
  } ,
  {
    name: "Developer",
    handle: "poble6"
  } ,
  {
    name: "Developer",
    handle: "poble7"
  } ,
  {
    name: "Developer",
    handle: "poble8"
  } ,
  {
    name: "Developer",
    handle: "poble9"
  } ,
  {
    name: "Developer",
    handle: "poble10"
  } ,
  {
    name: "Developer",
    handle: "poble11"
  } 

]

export default function Poblegarden() {

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2 * 0.25);
    const targetY = clientY - (window.innerWidth / 2 * 0.30);
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  }

  return (
    <main onMouseMove={mouseMove} className={styles.main}>
      {
        projects.map( ({handle}, i) => {
          return <Gallery mousePosition={mousePosition} handle={handle} key={i}/>
        })
      }
      <Description mousePosition={mousePosition} projects={projects}/>
    </main>
  )
}