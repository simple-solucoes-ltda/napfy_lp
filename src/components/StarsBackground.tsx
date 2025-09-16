'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface StarProps {
  index: number
  x: number
  y: number
  size: number
}

function Star({ index, x, y, size }: StarProps) {
  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0, 0.7, 0],
        scale: [0.8, 1.3, 0.8],
      }}
      transition={{
        duration: 2 + (index % 3),
        repeat: Infinity,
        delay: index * 0.3,
        ease: "easeInOut",
      }}
    />
  )
}

export function StarsBackground() {
  const [stars, setStars] = useState<StarProps[]>([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, (_, index) => ({
      index,
      x: Math.random() * 90 + 5, // 5% to 95%
      y: Math.random() * 90 + 5, // 5% to 95%
      size: Math.random() * 2 + 1, // 1px to 3px
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {stars.map((star) => (
        <Star key={star.index} {...star} />
      ))}
    </div>
  )
}