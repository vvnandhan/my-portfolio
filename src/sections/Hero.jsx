import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import background from "../assets/background.png";
import planets from "../assets/planets.png";
import stones from "../assets/stones.png";


// 3D Astronaut with animation and responsive/scroll settings
const Spaceman = ({ scale, position, rotation }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF("/spaceman.glb");
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    if (actions?.Idle) actions["Idle"].play();
  }, [actions]);

  return (
    <mesh ref={spacemanRef} position={position} scale={scale} rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
};

// The canvas wrapper, applies rotation/scale/position responsiveness and scroll
function SpacemanCanvas() {
  const [rotation, setRotation] = useState([0, 2.2, 0]);
  const [scale, setScale] = useState([2, 2, 2]);
  const [position, setPosition] = useState([0.2, -0.7, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset || 0;
      setRotation([
        scrollTop * -0.0006,
        2.2 + scrollTop * -0.00075,
        0
      ]);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]);
        setPosition([0.2, -0.1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.33, 1.33, 1.33]);
        setPosition([0.2, -0.3, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0.2, -0.4, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([1.66, 1.66, 1.66]);
        setPosition([0.2, -0.5, 0]);
      } else {
        setScale([2.4, 2.4, 2.4]);
        setPosition([0.2, -1.1, 0]);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="avatar-canvas">
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={null}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000" intensity={1} />
          <Spaceman rotation={rotation} scale={scale} position={position} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Animated subtext under hero name
function AnimatedSubtext() {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      style={{
        fontWeight: 400,
        color: '#e0e8ff',
        marginTop: 10,
        fontSize: '1.3rem',
        textShadow: '0 2px 12px #000a',
        cursor: 'pointer',
        minHeight: 36
      }}
      initial={{ opacity: 1, y: 0 }}
      animate={hovered
        ? { opacity: 1, y: -20 }
        : { opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 250, damping: 30 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {hovered
        ? (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          > Backend Developer</motion.span>
        ) : (
          <motion.span
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >Full Stack Developer</motion.span>
        )
      }
    </motion.div>
  );
}

const backgroundPNGs = [background, planets, stones];

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen" style={{ background: '#000' }}>
      {/* Layered PNG backgrounds */}
      <div className="absolute inset-0 w-full h-full z-0">
        {backgroundPNGs.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            style={{
              position: 'absolute',
              zIndex: 1 + i,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
            draggable={false}
          />
        ))}
      </div>

      {/* HERO TEXT (left center) */}
      <div
        style={{
          position: 'absolute',
          top: '48%',
          left: '8%',
          transform: 'translateY(-50%)',
          zIndex: 200,
          color: 'white',
          fontSize: '2.6rem',
          fontWeight: 'bold',
          textShadow: '0 4px 16px #000c',
          letterSpacing: '1.5px',
          lineHeight: 1.18,
          maxWidth: 500,
          textAlign: 'left',
        }}
      >
        Vayu Nandhan
        <AnimatedSubtext />
      </div>

      {/* ABOUT BOX (bottom right) */}
      <div
        style={{
          position: 'absolute',
          bottom: '7%',
          right: '7%',
          zIndex: 200,
          background: 'rgba(0,0,0,0.68)',
          borderRadius: 20,
          padding: '1.6rem 2.3rem',
          boxShadow: '0 8px 40px 0 #0008',
          border: '1.5px solid rgba(255,255,255,0.07)',
          maxWidth: 370,
          minWidth: 210,
          color: '#fff',
          fontSize: '1.1rem',
        }}
      >
        {/* <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>
          About Me
        </div> */}
        <div>
          I’m a Full-Stack Developer with four years of experience building dynamic, high-performance web applications using React, Next.js, FastAPI, and AWS. I’m passionate about writing clean, accessible code and continuously learning so I can turn complex challenges into elegant, scalable solutions.
        </div>
      </div>

      {/* 3D Astronaut (Responsive, Animated) */}
      <SpacemanCanvas />

    </section>
  );
}
