import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const subtexts = [
  "Full Stack Developer",
  "3D Design Enthusiast"
]

export default function Subtext() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative h-8 w-[260px] text-lg font-medium text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      aria-label="Animated developer subtext"
      role="status"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={hovered ? 'enthusiast' : 'dev'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
          className="absolute w-full left-0"
        >
          {hovered ? subtexts[1] : subtexts[0]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
