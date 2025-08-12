import { useEffect, useState } from 'react'

const FloatingParticles = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const createParticle = () => ({
      id: Math.random(),
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 2
    })

    // Create initial particles
    const initialParticles = Array.from({ length: 15 }, createParticle)
    setParticles(initialParticles)

    // Recreate particles periodically
    const interval = setInterval(() => {
      setParticles(Array.from({ length: 15 }, createParticle))
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            background: 'var(--purple-400)'
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles

