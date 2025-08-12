import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Brain, Database, Code, Zap, Bot, Wallet, ShoppingCart } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle'

const Projects = () => {
  usePageTitle('Projects', 'A showcase of backend development and web application projects by Arshia Shirzad.')

  const projects = [
    {
      id: 1,
      title: "GoshneYad - Telegram Bot",
      type: "Utility Bot",
      description: "Delivered daily and weekly menus and reminders to 1,200+ students across 3 top-ranked Iranian universities.",
      features: [
        "Built with Python, MySQL, and Docker for fast, scalable, and secure deployment.",
        "Implemented batching to send thousands of reminders simultaneously without server overload.",
        "Used APScheduler for reliable task scheduling and managed configs securely."
      ],
      technologies: ["Python", "MySQL", "Docker", "APScheduler", "Batch Processing"],
    },
    {
      id: 2,
      title: "PajoPhone - E-commerce Web App",
      type: "Web Application",
      description: "An e-commerce platform developed with a focus on high performance and a clean, maintainable architecture using design patterns.",
      features: [
        "Developed using design patterns like Repository for clean data access.",
        "Implemented caching and lazy loading for optimal performance.",
        "Integrated live price scraping to keep product data up-to-date.",
        "Enhanced product search and filtering with efficient database queries."
      ],
      technologies: [".NET", "ASP.NET MVC", "SQL Server", "Caching", "Lazy Loading", "Design Patterns"],
    },
    {
      id: 3,
      title: "Expense Tracker - Web App",
      type: "Web Application",
      description: "A responsive .NET 6 MVC app for expense tracking, categorization, and visualization.",
      features: [
        "Built with MySQL, Bootstrap, and Syncfusion for a rich user interface.",
        "Features interactive dashboards for at-a-glance data visualization.",
        "Provides full CRUD functionality for easy expense management."
      ],
      technologies: [".NET 6", "ASP.NET MVC", "MySQL", "Bootstrap", "Syncfusion"],
    }
  ]
  
  const getProjectIcon = (title) => {
    if (title.includes("Bot")) return <Bot className="h-6 w-6 text-purple-500" />;
    if (title.includes("PajoPhone")) return <ShoppingCart className="h-6 w-6 text-purple-500" />;
    if (title.includes("Expense")) return <Wallet className="h-6 w-6 text-purple-500" />;
    return <Code className="h-6 w-6 text-purple-500" />;
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-purple-900 dark:via-gray-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Code className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold text-foreground">Personal Projects</h1>
            <Zap className="h-8 w-8 text-purple-400 animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my personal and academic projects, driven by curiosity and a passion for problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col border-purple-200 dark:border-purple-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardHeader>
                    <div className="mb-4">
                        <span className="p-3 bg-purple-100 dark:bg-purple-800 rounded-md inline-block text-purple-600 dark:text-purple-300">
                            {getProjectIcon(project.title)}
                        </span>
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                    {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col justify-between pt-0">
                  <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-xs text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Brain className="h-4 w-4" />
                          Key Features
                        </h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-purple-500 mt-1.5">•</span>
                              {feature}
                              </li>
                          ))}
                        </ul>
                    </div>
                  
                    <div>
                        <h4 className="font-semibold text-xs text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Database className="h-4 w-4" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                              <div key={tech} className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200 rounded-full text-xs font-mono">
                                {tech}
                              </div>
                          ))}
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects