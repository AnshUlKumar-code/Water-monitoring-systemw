import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  MapPin,
  Phone,
  Calendar,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Plus,
  Search,
  Filter,
  Star,
  Activity,
  Target,
  TrendingUp,
} from "lucide-react"

// Mock volunteer data
const volunteers = [
  {
    id: "VOL001",
    name: "Priya Sharma",
    phone: "+91 98765 43210",
    email: "priya.sharma@email.com",
    village: "Village A",
    coverageArea: ["Village A", "Village B"],
    joinDate: "2023-08-15",
    status: "active",
    trainingLevel: "advanced",
    completedTrainings: 8,
    totalTrainings: 10,
    reportsSubmitted: 45,
    communitiesServed: 320,
    rating: 4.8,
    specializations: ["Water Quality Testing", "Disease Prevention", "Community Education"],
    lastActive: "2 hours ago",
    availability: "available",
  },
  {
    id: "VOL002",
    name: "Raj Kumar Das",
    phone: "+91 98765 43211",
    email: "raj.kumar@email.com",
    village: "Village C",
    coverageArea: ["Village C", "Village D"],
    joinDate: "2023-09-20",
    status: "active",
    trainingLevel: "intermediate",
    completedTrainings: 6,
    totalTrainings: 10,
    reportsSubmitted: 32,
    communitiesServed: 280,
    rating: 4.6,
    specializations: ["Health Screening", "Emergency Response"],
    lastActive: "1 day ago",
    availability: "busy",
  },
  {
    id: "VOL003",
    name: "Anita Devi",
    phone: "+91 98765 43212",
    email: "anita.devi@email.com",
    village: "Village E",
    coverageArea: ["Village E", "Village F"],
    joinDate: "2023-07-10",
    status: "active",
    trainingLevel: "advanced",
    completedTrainings: 9,
    totalTrainings: 10,
    reportsSubmitted: 58,
    communitiesServed: 350,
    rating: 4.9,
    specializations: ["Maternal Health", "Child Nutrition", "Disease Prevention"],
    lastActive: "30 minutes ago",
    availability: "available",
  },
  {
    id: "VOL004",
    name: "Suresh Baruah",
    phone: "+91 98765 43213",
    email: "suresh.baruah@email.com",
    village: "Village G",
    coverageArea: ["Village G"],
    joinDate: "2023-11-05",
    status: "training",
    trainingLevel: "beginner",
    completedTrainings: 3,
    totalTrainings: 10,
    reportsSubmitted: 8,
    communitiesServed: 120,
    rating: 4.2,
    specializations: ["Basic Health Education"],
    lastActive: "3 hours ago",
    availability: "available",
  },
]

const trainingPrograms = [
  {
    id: "TRN001",
    title: "Water Quality Testing Certification",
    description: "Learn to use IoT sensors and conduct water quality assessments",
    duration: "2 weeks",
    level: "intermediate",
    enrolled: 12,
    completed: 8,
    status: "ongoing",
  },
  {
    id: "TRN002",
    title: "Disease Prevention and Community Education",
    description: "Comprehensive training on water-borne disease prevention strategies",
    duration: "3 weeks",
    level: "beginner",
    enrolled: 18,
    completed: 15,
    status: "completed",
  },
  {
    id: "TRN003",
    title: "Emergency Response and First Aid",
    description: "Essential emergency response skills for health volunteers",
    duration: "1 week",
    level: "intermediate",
    enrolled: 8,
    completed: 0,
    status: "upcoming",
  },
]

const recentActivities = [
  {
    id: 1,
    volunteer: "Priya Sharma",
    action: "Submitted water quality report",
    location: "Village A",
    time: "2 hours ago",
    type: "report",
  },
  {
    id: 2,
    volunteer: "Anita Devi",
    action: "Completed health screening for 15 residents",
    location: "Village E",
    time: "4 hours ago",
    type: "screening",
  },
  {
    id: 3,
    volunteer: "Raj Kumar Das",
    action: "Conducted community education session",
    location: "Village C",
    time: "1 day ago",
    type: "education",
  },
  {
    id: 4,
    volunteer: "Suresh Baruah",
    action: "Completed training module: Basic Health Assessment",
    location: "Training Center",
    time: "2 days ago",
    type: "training",
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "active":
      return "bg-chart-4 text-white"
    case "training":
      return "bg-secondary text-secondary-foreground"
    case "inactive":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function getAvailabilityColor(availability: string) {
  switch (availability) {
    case "available":
      return "bg-chart-4 text-white"
    case "busy":
      return "bg-secondary text-secondary-foreground"
    case "unavailable":
      return "bg-destructive text-destructive-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function getTrainingLevelColor(level: string) {
  switch (level) {
    case "advanced":
      return "bg-chart-4 text-white"
    case "intermediate":
      return "bg-secondary text-secondary-foreground"
    case "beginner":
      return "bg-primary text-primary-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function HealthVolunteerManagement() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Health Volunteer Management</h1>
                  <p className="text-sm text-muted-foreground">Community health worker coordination</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-chart-4/10 text-chart-4">
                <Activity className="h-3 w-3 mr-1" />
                32 Active Volunteers
              </Badge>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Volunteer
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Volunteers</p>
                <p className="text-2xl font-bold text-primary">32</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Communities Covered</p>
                <p className="text-2xl font-bold text-secondary">24</p>
              </div>
              <MapPin className="h-8 w-8 text-secondary" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Training Completion</p>
                <p className="text-2xl font-bold text-chart-4">78%</p>
              </div>
              <BookOpen className="h-8 w-8 text-chart-4" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Performance</p>
                <p className="text-2xl font-bold text-secondary">4.6</p>
              </div>
              <Star className="h-8 w-8 text-secondary" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="volunteers" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="volunteers" className="space-y-4">
            {/* Search and Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search volunteers..." className="pl-10" />
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Volunteers</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="training">In Training</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>

            {/* Volunteer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteers.map((volunteer) => (
                <Card key={volunteer.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={`/abstract-geometric-shapes.png?height=40&width=40&query=${volunteer.name}`} />
                        <AvatarFallback>
                          {volunteer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{volunteer.name}</CardTitle>
                        <CardDescription className="flex items-center text-sm">
                          <MapPin className="h-3 w-3 mr-1" />
                          {volunteer.village}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(volunteer.status)}>{volunteer.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Training Level</p>
                        <Badge variant="outline" className={getTrainingLevelColor(volunteer.trainingLevel)}>
                          {volunteer.trainingLevel}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Availability</p>
                        <Badge variant="outline" className={getAvailabilityColor(volunteer.availability)}>
                          {volunteer.availability}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Training Progress</span>
                        <span>
                          {volunteer.completedTrainings}/{volunteer.totalTrainings}
                        </span>
                      </div>
                      <Progress value={(volunteer.completedTrainings / volunteer.totalTrainings) * 100} />
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Reports</p>
                        <p className="font-semibold">{volunteer.reportsSubmitted}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Rating</p>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-secondary text-secondary" />
                          <span className="font-semibold">{volunteer.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Specializations</p>
                      <div className="flex flex-wrap gap-1">
                        {volunteer.specializations.slice(0, 2).map((spec) => (
                          <Badge key={spec} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                        {volunteer.specializations.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{volunteer.specializations.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Phone className="h-3 w-3 mr-1" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Training Programs</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Program
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPrograms.map((program) => (
                <Card key={program.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className={
                          program.status === "ongoing"
                            ? "bg-secondary/10 text-secondary"
                            : program.status === "completed"
                              ? "bg-chart-4/10 text-chart-4"
                              : "bg-primary/10 text-primary"
                        }
                      >
                        {program.status}
                      </Badge>
                    </div>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-semibold">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Level</p>
                        <Badge variant="outline" className={getTrainingLevelColor(program.level)}>
                          {program.level}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Completion Rate</span>
                        <span>
                          {program.completed}/{program.enrolled}
                        </span>
                      </div>
                      <Progress value={(program.completed / program.enrolled) * 100} />
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        Manage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Recent Activities</h3>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Task
              </Button>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <Card key={activity.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-2 rounded-full ${
                          activity.type === "report"
                            ? "bg-primary/10 text-primary"
                            : activity.type === "screening"
                              ? "bg-chart-4/10 text-chart-4"
                              : activity.type === "education"
                                ? "bg-secondary/10 text-secondary"
                                : "bg-muted/10 text-muted-foreground"
                        }`}
                      >
                        {activity.type === "report" && <Target className="h-4 w-4" />}
                        {activity.type === "screening" && <CheckCircle className="h-4 w-4" />}
                        {activity.type === "education" && <BookOpen className="h-4 w-4" />}
                        {activity.type === "training" && <Award className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.volunteer}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {activity.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {activity.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>Volunteers with highest community impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {volunteers
                      .sort((a, b) => b.rating - a.rating)
                      .slice(0, 3)
                      .map((volunteer, index) => (
                        <div key={volunteer.id} className="flex items-center space-x-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            {index + 1}
                          </div>
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={`/abstract-geometric-shapes.png?height=32&width=32&query=${volunteer.name}`}
                            />
                            <AvatarFallback className="text-xs">
                              {volunteer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{volunteer.name}</p>
                            <p className="text-xs text-muted-foreground">{volunteer.village}</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-secondary text-secondary" />
                            <span className="text-sm font-semibold">{volunteer.rating}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Overall volunteer network statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-chart-4" />
                      <span className="font-medium">Reports Submitted</span>
                    </div>
                    <span className="font-bold text-chart-4">143</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-secondary" />
                      <span className="font-medium">People Served</span>
                    </div>
                    <span className="font-bold text-secondary">1,070</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="font-medium">Training Hours</span>
                    </div>
                    <span className="font-bold text-primary">256</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-secondary" />
                      <span className="font-medium">Certifications</span>
                    </div>
                    <span className="font-bold text-secondary">89</span>
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
