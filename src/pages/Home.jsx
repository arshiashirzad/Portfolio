import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

// Floating shapes component
const FloatingShape = ({ initial, animate, className }) => (
  <motion.div
    initial={initial}
    animate={animate}
    className={`absolute -z-10 border border-purple-200/50 dark:border-purple-800/50 ${className}`}
  />
)

const Home = () => {
  usePageTitle(
    'Arshia Shirzad - Backend & AI Developer',
    'Arshia Shirzad - Professional Back-End Developer specializing in C#, .NET Core, ASP.NET, and scalable enterprise solutions.'
  )

  const subtitle = 'Back-End Developer | Ai Researcher'
  const subtitleChars = Array.from(subtitle)

  const shapes = [
    { initial: { top: '15%', left: '10%', rotate: 0, scale: 0.8 }, animate: { top: '20%', left: '15%', rotate: 45, scale: 1 }, className: "w-24 h-24 rounded-lg bg-purple-500/5" },
    { initial: { top: '60%', left: '5%', rotate: 10, scale: 1 }, animate: { top: '55%', left: '10%', rotate: -30, scale: 0.8 }, className: "w-32 h-32 rounded-full bg-purple-500/10" },
    { initial: { top: '10%', left: '80%', rotate: -15, scale: 1.1 }, animate: { top: '15%', left: '75%', rotate: 20, scale: 1 }, className: "w-28 h-28 rounded-2xl bg-purple-500/5" },
    { initial: { top: '70%', left: '60%', rotate: 25, scale: 1 }, animate: { top: '65%', left: '65%', rotate: -10, scale: 1.2 }, className: "w-20 h-20 rounded-lg bg-purple-500/10" },
    { initial: { top: '50%', left: '85%', rotate: 0, scale: 0.9 }, animate: { top: '55%', left: '80%', rotate: 50, scale: 1.1 }, className: "w-24 h-24 rounded-full bg-purple-500/5" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center">
      {/* Hero Section */}
      <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 gap-12 items-center">

            {/* Image first on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.5, duration: 1 }}
              className="flex justify-center items-center"
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] relative">
                {/* Floating Shapes */}
                {shapes.map((shape, index) => (
                  <FloatingShape
                    key={index}
                    initial={shape.initial}
                    animate={shape.animate}
                    className={shape.className}
                  />
                ))}
                {/* Profile Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Arshia Shirzad"
                    className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-black/20 dark:shadow-black/50 border-2 border-purple-200/20 dark:border-purple-800/20"
                  />
                </div>
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm <span className="text-purple-500">Arshia Shirzad</span>
              </h1>

              <h2 className="text-xl sm:text-2xl text-muted-foreground font-mono">
                {subtitleChars.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.5 + index * 0.05 }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Passionate for solving problems with clean codes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Link to="/experience">
                  <Button size="lg" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20">
                    View Experience
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-border hover:bg-secondary">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              <div className="flex space-x-4 pt-4 justify-center">
                <a href="https://github.com/arshiashirzad" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-muted-foreground bg-secondary hover:bg-purple-100 dark:hover:bg-purple-800 hover:text-purple-600 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/arshiashirzad" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-muted-foreground bg-secondary hover:bg-purple-100 dark:hover:bg-purple-800 hover:text-purple-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:arshiashirzad@khu.ac.ir" className="p-2 rounded-full text-muted-foreground bg-secondary hover:bg-purple-100 dark:hover:bg-purple-800 hover:text-purple-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
