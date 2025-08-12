import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Briefcase, Brain, User, Languages, Database, Wrench, Code } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle'

const About = () => {
  usePageTitle('About Me', 'Learn more about Arshia Shirzad, a passionate backend developer specializing in .NET, C#, and scalable systems.')

  const categorizedSkills = [
    {
      category: "Languages & Frameworks",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "C#", citation: 90 },
        { name: ".NET Core", citation: 91 },
        { name: "JavaScript", citation: 92 },
        { name: "Python", citation: 93 },
        { name: "EntityFrameWork", citation: 104 }
      ]
    },
    {
      category: "Software Engineering",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "Design Patterns", citation: 97 },
        { name: "SOLID Principles", citation: 97 },
        { name: "MVC | CLEAN", citation: 97 },
        { name: "Database Design", citation: 102 }
      ]
    },
    {
      category: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "Sql", citation: 99 },
        { name: "Mysql", citation: 100 },
        { name: "Postgres", citation: 101 },
        { name: "Redis", citation: 103 },
        { name: "ElasticSearch", citation: 105 }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: "Git & Github", citation: 98 },
        { name: "Gitlab", citation: 98 },
        { name: "Docker", citation: 98 }
      ]
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-purple-900 dark:via-gray-900 dark:to-purple-900">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-full p-3 bg-purple-100 dark:bg-purple-800 mb-4 ring-4 ring-purple-200 dark:ring-purple-700/50">
            <User className="h-10 w-10 text-purple-600 dark:text-purple-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16 items-start">
          {/* Main Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="h-full border-purple-200 dark:border-purple-700 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Professional Summary</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Back-End Developer with a year of experience building scalable, fault-tolerant systems.I am skilled in problem-solving, rapid analysis, and developing innovative solutions under pressure.
                  </p>
                  <p>
                    My background includes developing ERP applications used by hundreds of users daily.I thrive in collaborative environments and am always seeking a role where I can contribute to a cross-functional team and drive impactful results.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="border-purple-200 dark:border-purple-700">
              <CardContent className="p-6">
                <ul className="space-y-4 text-sm">
                    <li className="flex items-start"><Briefcase className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-purple-500" /><div><span className="font-semibold text-foreground">Current Role:</span> Backend developer at Parsan Software Solutions</div></li>
                    <li className="flex items-start"><GraduationCap className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-purple-500" /><div><span className="font-semibold text-foreground">Education:</span> Bachelor of Software Engineering at Kharazmi University of Tehran </div></li>
                    <li className="flex items-start"><Languages className="h-4 w-4 mr-3 mt-1 flex-shrink-0 text-purple-500" /><div><span className="font-semibold text-foreground">Languages:</span> English (Advanced) | Spanish (Beginner) | Persian (Native) </div></li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Categorized Skills Section */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Core Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categorizedSkills.map((category) => (
                    <Card key={category.category} className="border-purple-200 dark:border-purple-700 shadow-sm hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <span className="p-2 bg-purple-100 dark:bg-purple-800 rounded-md text-purple-600 dark:text-purple-300">
                                    {category.icon}
                                </span>
                                {category.category}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill.name} className="text-sm text-muted-foreground flex items-center">
                                        <span className="text-purple-500 mr-2">•</span>
                                        {skill.name}
                                        <span className="sr-only"></span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About