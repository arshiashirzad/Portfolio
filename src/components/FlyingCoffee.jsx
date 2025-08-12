import { useEffect, useState } from 'react'

const FlyingCoffee = () => {
  const [coffees, setCoffees] = useState([])

  const coffeeEmojis = ['☕', '🍵', '☕', '🫖', '☕']

  useEffect(() => {
    const createCoffee = () => {
      const newCoffee = {
        id: Date.now() + Math.random(),
        emoji: coffeeEmojis[Math.floor(Math.random() * coffeeEmojis.length)],
        left: Math.random() * 100,
        animationDuration: 12 + Math.random() * 8, // 12-20 seconds
        size: 1.5 + Math.random() * 1, // 1.5-2.5rem
        delay: Math.random() * 2 // 0-2 seconds delay
      }
      return newCoffee
    }

    // Create initial coffees
    const initialCoffees = Array.from({ length: 5 }, createCoffee)
    setCoffees(initialCoffees)

    // Add new coffee every 3 seconds
    const interval = setInterval(() => {
      setCoffees(prev => {
        const newCoffees = [...prev, createCoffee()]
        // Keep only the last 8 coffees to prevent memory issues
        return newCoffees.slice(-8)
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="coffee-container">
      {coffees.map((coffee) => (
        <div
          key={coffee.id}
          className="flying-coffee"
          style={{
            left: `${coffee.left}%`,
            fontSize: `${coffee.size}rem`,
            animationDuration: `${coffee.animationDuration}s`,
            animationDelay: `${coffee.delay}s`
          }}
        >
          {coffee.emoji}
        </div>
      ))}
    </div>
  )
}

export default FlyingCoffee

