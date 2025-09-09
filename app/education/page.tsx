import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Play,
  Download,
  Search,
  Filter,
  CheckCircle,
  Clock,
  Users,
  Star,
  Globe,
  FileText,
  Video,
  ImageIcon,
  Headphones,
  Award,
  TrendingUp,
} from "lucide-react"

// Mock educational content data
const learningModules = [
  {
    id: "MOD001",
    title: "Understanding Water-Borne Diseases",
    description: "Learn about cholera, diarrhea, and typhoid - their causes, symptoms, and prevention",
    type: "interactive",
    duration: "15 min",
    difficulty: "beginner",
    completions: 245,
    rating: 4.8,
    languages: ["English", "Assamese", "Bengali"],
    progress: 0,
    thumbnail: "/water-diseases-education.jpg",
  },
  {
    id: "MOD002",
    title: "Safe Water Practices",
    description: "Essential techniques for water purification, storage, and handling",
    type: "video",
    duration: "12 min",
    difficulty: "beginner",
    completions: 189,
    rating: 4.7,
    languages: ["English", "Assamese", "Hindi"],
    progress: 65,
    thumbnail: "/water-purification-methods.jpg",
  },
  {
    id: "MOD003",
    title: "Community Health Screening",
    description: "How to identify early symptoms and when to seek medical help",
    type: "interactive",
    duration: "20 min",
    difficulty: "intermediate",
    completions: 156,
    rating: 4.9,
    languages: ["English", "Assamese"],
    progress: 0,
    thumbnail: "/health-screening-community.jpg",
  },
  {
    id: "MOD004",
    title: "Emergency Response Protocols",
    description: "Step-by-step guide for handling health emergencies in rural areas",
    type: "document",
    duration: "25 min",
    difficulty: "advanced",
    completions: 89,
    rating: 4.6,
    languages: ["English", "Assamese", "Bengali"],
    progress: 0,
    thumbnail: "/emergency-response-medical.jpg",
  },
]

const downloadableResources = [
  {
    id: "RES001",
    title: "Water Purification Poster",
    description: "Visual guide for boiling and treating water safely",
    type: "poster",
    format: "PDF",
    size: "2.1 MB",
    downloads: 456,
    languages: ["English", "Assamese", "Bengali", "Hindi"],
    thumbnail: "/water-purification-poster.jpg",
  },
  {
    id: "RES002",
    title: "Disease Prevention Checklist",
    description: "Daily practices to prevent water-borne diseases",
    type: "checklist",
    format: "PDF",
    size: "1.5 MB",
    downloads: 324,
    languages: ["English", "Assamese"],
    thumbnail: "/health-checklist-prevention.jpg",
  },
  {
    id: "RES003",
    title: "Emergency Contact Cards",
    description: "Printable cards with important health emergency numbers",
    type: "cards",
    format: "PDF",
    size: "0.8 MB",
    downloads: 278,
    languages: ["English", "Assamese", "Bengali"],
    thumbnail: "/emergency-contact-cards.jpg",
  },
  {
    id: "RES004",
    title: "Community Health Assessment Form",
    description: "Template for volunteers to conduct health surveys",
    type: "form",
    format: "PDF",
    size: "1.2 MB",
    downloads: 145,
    languages: ["English", "Assamese"],
    thumbnail: "/health-assessment-form.jpg",
  },
]

const quizzes = [
  {
    id: "QUZ001",
    title: "Water Safety Knowledge Check",
    description: "Test your understanding of safe water practices",
    questions: 10,
    duration: "5 min",
    attempts: 234,
    averageScore: 78,
    difficulty: "beginner",
  },
  {
    id: "QUZ002",
    title: "Disease Prevention Assessment",
    description: "Evaluate your knowledge of preventing water-borne diseases",
    questions: 15,
    duration: "8 min",
    attempts: 189,
    averageScore: 82,
    difficulty: "intermediate",
  },
  {
    id: "QUZ003",
    title: "Emergency Response Quiz",
    description: "Test your readiness for health emergencies",
    questions: 12,
    duration: "7 min",
    attempts: 156,
    averageScore: 75,
    difficulty: "advanced",
  },
]

const featuredContent = [
  {
    id: "FEA001",
    title: "New: Monsoon Health Preparedness",
    description: "Special module on staying healthy during monsoon season",
    type: "featured",
    isNew: true,
    thumbnail: "/monsoon-health-preparedness.jpg",
  },
  {
    id: "FEA002",
    title: "Success Story: Village A's Clean Water Initiative",
    description: "Learn how one community eliminated water-borne diseases",
    type: "case_study",
    isNew: false,
    thumbnail: "/village-clean-water-success-story.jpg",
  },
]

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "beginner":
      return "bg-chart-4 text-white"
    case "intermediate":
      return "bg-secondary text-secondary-foreground"
    case "advanced":
      return "bg-destructive text-destructive-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function getTypeIcon(type: string) {
  switch (type) {
    case "video":
      return <Video className="h-4 w-4" />
    case "interactive":
      return <Play className="h-4 w-4" />
    case "document":
      return <FileText className="h-4 w-4" />
    case "audio":
      return <Headphones className="h-4 w-4" />
    default:
      return <BookOpen className="h-4 w-4" />
  }
}

function getResourceTypeIcon(type: string) {
  switch (type) {
    case "poster":
      return <ImageIcon className="h-4 w-4" />
    case "checklist":
      return <CheckCircle className="h-4 w-4" />
    case "cards":
      return <Users className="h-4 w-4" />
    case "form":
      return <FileText className="h-4 w-4" />
    default:
      return <Download className="h-4 w-4" />
  }
}

export default function EducationalResourcesHub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Educational Resources Hub</h1>
                  <p className="text-sm text-muted-foreground">Learn, prevent, and stay healthy</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-chart-4/10 text-chart-4">
                <TrendingUp className="h-3 w-3 mr-1" />
                1,250+ Learners
              </Badge>
              <Button variant="outline">
                <Globe className="h-4 w-4 mr-2" />
                Language: English
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Featured Content */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredContent.map((content) => (
              <Card key={content.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={content.thumbnail || "/placeholder.svg"}
                    alt={content.title}
                    className="w-full h-40 object-cover"
                  />
                  {content.isNew && (
                    <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">New</Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{content.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{content.description}</p>
                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Your Learning Progress</span>
            </CardTitle>
            <CardDescription>Track your health education journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <p className="text-sm text-muted-foreground">Modules Completed</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">45</div>
                <p className="text-sm text-muted-foreground">Minutes Learned</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-chart-4">2</div>
                <p className="text-sm text-muted-foreground">Certificates Earned</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">85%</div>
                <p className="text-sm text-muted-foreground">Average Quiz Score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="modules" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="modules">Learning Modules</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-4">
            {/* Search and Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search learning modules..." className="pl-10" />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Learning Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningModules.map((module) => (
                <Card key={module.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={module.thumbnail || "/placeholder.svg"}
                      alt={module.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="bg-background/80 backdrop-blur">
                        {getTypeIcon(module.type)}
                        <span className="ml-1 capitalize">{module.type}</span>
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className={getDifficultyColor(module.difficulty)}>{module.difficulty}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold mb-1">{module.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{module.description}</p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {module.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {module.completions}
                      </span>
                      <span className="flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        {module.rating}
                      </span>
                    </div>

                    {module.progress > 0 && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Progress</span>
                          <span>{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} />
                      </div>
                    )}

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Available in:</p>
                      <div className="flex flex-wrap gap-1">
                        {module.languages.map((lang) => (
                          <Badge key={lang} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">
                      {module.progress > 0 ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Continue Learning
                        </>
                      ) : (
                        <>
                          <BookOpen className="h-4 w-4 mr-2" />
                          Start Module
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Downloadable Resources</h3>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download All
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {downloadableResources.map((resource) => (
                <Card key={resource.id}>
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">{getResourceTypeIcon(resource.type)}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{resource.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {resource.format} • {resource.size}
                        </p>
                      </div>
                    </div>

                    <img
                      src={resource.thumbnail || "/placeholder.svg"}
                      alt={resource.title}
                      className="w-full h-24 object-cover rounded-lg"
                    />

                    <p className="text-xs text-muted-foreground line-clamp-2">{resource.description}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Download className="h-3 w-3 mr-1" />
                        {resource.downloads}
                      </span>
                      <span>{resource.languages.length} languages</span>
                    </div>

                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      <Download className="h-3 w-3 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quizzes" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Knowledge Assessments</h3>
              <Badge variant="outline" className="bg-chart-4/10 text-chart-4">
                <Award className="h-3 w-3 mr-1" />
                Earn Certificates
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <Card key={quiz.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{quiz.title}</CardTitle>
                      <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
                    </div>
                    <CardDescription>{quiz.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Questions</p>
                        <p className="font-semibold">{quiz.questions}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-semibold">{quiz.duration}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Average Score</span>
                        <span className="font-semibold">{quiz.averageScore}%</span>
                      </div>
                      <Progress value={quiz.averageScore} />
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {quiz.attempts} attempts
                      </span>
                    </div>

                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Take Quiz
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Achievements</CardTitle>
                  <CardDescription>Your educational milestones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-chart-4/10 rounded-lg">
                    <div className="p-2 bg-chart-4 text-white rounded-full">
                      <Award className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Water Safety Expert</p>
                      <p className="text-sm text-muted-foreground">Completed all water safety modules</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-secondary/10 rounded-lg">
                    <div className="p-2 bg-secondary text-secondary-foreground rounded-full">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Prevention Champion</p>
                      <p className="text-sm text-muted-foreground">Scored 90%+ on prevention quiz</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                    <div className="p-2 bg-primary text-primary-foreground rounded-full">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Dedicated Learner</p>
                      <p className="text-sm text-muted-foreground">Completed 5+ learning modules</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Impact</CardTitle>
                  <CardDescription>How your learning helps others</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-medium">People Educated</span>
                    </div>
                    <span className="font-bold text-primary">45</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-chart-4" />
                      <span className="font-medium">Health Reports</span>
                    </div>
                    <span className="font-bold text-chart-4">12</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-secondary" />
                      <span className="font-medium">Community Rating</span>
                    </div>
                    <span className="font-bold text-secondary">4.8</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
