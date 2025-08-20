import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Building, Code, Database, Brain, Award, Briefcase } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle'

const Experience = () => {
  usePageTitle('Experience', 'Professional experience and career journey of Arshia Shirzad in backend development and AI.')

  const experiences = [
    {
      id: 1,
      company: "Parsan Software Solutions",
      position: "Backend Developer",
      duration: "August 2025 - Present",
      status: "Current Position",
      technologies: ["C#", ".NET", "Enterprise Solutions", "SQL Server", "Architecture Patterns"],
      highlights: [
        "Contributing to the development of large-scale enterprise software.",
        "Applying modern backend architecture patterns to ensure system scalability and performance.",
        "Collaborating within a cross-functional team to deliver high-quality, impactful software."
      ]
    },
    {
      id: 2,
      company: "Ide Pardaz | Website Development Co., Ltd.",
      position: "Backend developer",
      duration: "April 2025 - August 2025",
      status: "Completed",
      technologies: ["C#", ".NET", "SQL Server", "Performance Tuning", "Data Handling", "Excel Export"],
      highlights: [
        "Improved page load and filtering speed by over 600% through deep backend optimizations, efficient querying, and refactored data handling.",
        "Designed a fast, memory-efficient Excel export feature for 15,000+ complex driver records, ensuring reliability and responsiveness under heavy data loads."
      ]
    },
    {
      id: 3,
      company: "IAIS",
      position: "Backend developer",
      duration: "June 2024 - April 2025",
      status: "Completed",
      technologies: [".NET Core", "SignalR", "WebSockets", "AJAX", "Entity Framework", "SQL Server", "PostgreSQL", "JavaScript", "DevOps"],
      highlights: [
        "Applied SOLID principles and design patterns to architect modular, maintainable systems in .NET Core.",
        "Engineered a real-time live response system using SignalR, AJAX, and WebSockets, enabling instant AI-generated interactions.",
        "Enhanced performance of critical operations by optimizing Entity Framework LINQ queries and fine-tuning SQL Server execution plans over 150%.",
        "Optimized PostgreSQL queries over 300% and implemented Full-Text Search (FTS) for fast, scalable handling of large datasets.",
        "Deployed and hosted an AI model with real-time WebSocket integration.",
        "Handled DevOps challenges, including production-level database migrations and urgent issue triage."
      ]
    }
  ];

  const skills = [
    { name: "C#", citation: 12 }, { name: ".NET Core", citation: 13 }, { name: "JavaScript", citation: 14 }, 
    { name: "Python", citation: 15 }, { name: "EntityFrameWork", citation: 26 }, { name: "Design Patterns", citation: 19 }, 
    { name: "SOLID Principles", citation: 19 }, { name: "MVC | CLEAN", citation: 19 }, { name: "Database Design", citation: 24 }, 
    { name: "Sql", citation: 21 }, { name: "Mysql", citation: 22 }, { name: "Postgres", citation: 23 }, { name: "Redis", citation: 25 }, 
    { name: "ElasticSearch", citation: 27 }, { name: "Git & Github", citation: 20 }, { name: "Docker", citation: 20 }
  ];

  const certifications = [
    { name: "Task-Oriented Course In SQL (Quera)", citation: 65 },
    { name: "Scrum foundations (Scrum Alliance)", citation: 66 },
    { name: "Team work Practical Course (Shoroue)", citation: 67 },
    { name: "Task-Oriented Course In NoSQL (Quera)", citation: 68 }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-purple-900 dark:via-gray-900 dark:to-purple-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16"
>
  <div className="flex items-center justify-center space-x-3 mb-4">
    <Building className="h-8 w-8 text-purple-500" />
    <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Work Experience</h1>
    <Briefcase className="h-8 w-8 text-purple-400 animate-pulse" />
  </div>
  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
    A timeline of my professional roles and key contributions in the field of software engineering.
  </p>
</motion.div>


        {/* Experience Timeline */}
        <div className="relative pl-6 before:absolute before:top-0 before:left-6 before:h-full before:w-px before:bg-purple-200 dark:before:bg-purple-700/50">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-purple-500 ring-4 ring-white dark:ring-background"></div>
              <div className="pl-10">
                <Card className="border-purple-200 dark:border-purple-700 shadow-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                        <p className="text-md font-semibold text-purple-600 dark:text-purple-400">{exp.company}</p>
                      </div>
                      <Badge 
                        variant={exp.status === "Current Position" ? "default" : "secondary"}
                        className={exp.status === "Current Position" ? "bg-purple-500 hover:bg-purple-600" : ""}
                      >
                        {exp.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 pt-2">
                      <Calendar className="h-4 w-4" /> {exp.duration}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Brain className="h-4 w-4 text-purple-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                              <span className="text-purple-500 mt-1.5">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Database className="h-4 w-4 text-purple-500" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200 font-mono">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Skills & Certifications Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Card className="h-full border-purple-200 dark:border-purple-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-purple-500" /> Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.name} variant="outline" className="border-purple-300 text-purple-700 dark:border-purple-600 dark:text-purple-300 font-mono">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <Card className="h-full border-purple-200 dark:border-purple-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-500" /> Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert.name} className="text-sm text-muted-foreground flex items-center">
                      <span className="text-purple-500 mr-2">✓</span>
                      {cert.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Experience