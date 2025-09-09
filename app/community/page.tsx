"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  Droplets,
  AlertCircle,
  BookOpen,
  Users,
  Phone,
  Send,
  CheckCircle,
  Info,
  Activity,
  TrendingUp,
  BarChart3,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { toast } from "sonner"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
} from "recharts"
import Image from "next/image"

// Mock data for community updates
const communityUpdates = [
  {
    id: 1,
    title: "Water Quality Alert - Village D",
    message: "Please boil water before drinking. Health team is investigating.",
    type: "alert",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Health Camp This Weekend",
    message: "Free health checkups at Community Center on Saturday 9 AM - 4 PM",
    type: "info",
    time: "1 day ago",
  },
  {
    id: 3,
    title: "New Water Purification Tablets Available",
    message: "Collect from your local health volunteer. Instructions included.",
    type: "success",
    time: "3 days ago",
  },
]

const healthTips = [
  {
    title: "Safe Water Practices",
    tips: [
      "Always boil water for at least 1 minute before drinking",
      "Store boiled water in clean, covered containers",
      "Use water purification tablets when boiling is not possible",
      "Keep water sources clean and covered",
    ],
  },
  {
    title: "Recognizing Symptoms",
    tips: [
      "Diarrhea lasting more than 2 days - seek medical help",
      "Severe dehydration - drink ORS solution immediately",
      "High fever with stomach pain - contact health volunteer",
      "Blood in stool - visit health center urgently",
    ],
  },
  {
    title: "Prevention Methods",
    tips: [
      "Wash hands frequently with soap and clean water",
      "Eat freshly cooked, hot food",
      "Avoid raw vegetables and fruits unless you can peel them",
      "Keep your surroundings clean and dispose waste properly",
    ],
  },
]

const communityHealthData = [
  { name: "Healthy", value: 85, color: "hsl(var(--chart-4))" },
  { name: "Minor Issues", value: 12, color: "hsl(var(--secondary))" },
  { name: "Needs Attention", value: 3, color: "hsl(var(--chart-5))" },
]

const weeklyReportsData = [
  { day: "Mon", reports: 3, resolved: 3 },
  { day: "Tue", reports: 5, resolved: 4 },
  { day: "Wed", reports: 2, resolved: 2 },
  { day: "Thu", reports: 7, resolved: 6 },
  { day: "Fri", reports: 4, resolved: 4 },
  { day: "Sat", reports: 6, resolved: 5 },
  { day: "Sun", reports: 3, resolved: 3 },
]

const symptomTrendsData = [
  { month: "Jan", diarrhea: 8, fever: 12, vomiting: 4 },
  { month: "Feb", diarrhea: 6, fever: 9, vomiting: 3 },
  { month: "Mar", diarrhea: 4, fever: 7, vomiting: 2 },
  { month: "Apr", diarrhea: 9, fever: 11, vomiting: 5 },
  { month: "May", diarrhea: 5, fever: 8, vomiting: 2 },
  { month: "Jun", diarrhea: 3, fever: 6, vomiting: 1 },
]

const villageComparisonData = [
  { village: "Village A", healthScore: 92, reports: 12 },
  { village: "Village B", healthScore: 78, reports: 18 },
  { village: "Village C", healthScore: 95, reports: 8 },
  { village: "Village D", healthScore: 65, reports: 25 },
]

interface HealthReportForm {
  name: string
  village: string
  symptoms: string
  duration: string
  details: string
}

interface WaterQualityForm {
  waterSource: string
  issueType: string
  location: string
  description: string
}

export default function CommunityHealthPortal() {
  const [isSubmittingHealth, setIsSubmittingHealth] = useState(false)
  const [isSubmittingWater, setIsSubmittingWater] = useState(false)

  const healthForm = useForm<HealthReportForm>()
  const waterForm = useForm<WaterQualityForm>()

  const onSubmitHealthReport = async (data: HealthReportForm) => {
    setIsSubmittingHealth(true)
    try {
      console.log("[v0] Health report submitted:", data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Health report submitted successfully! Our team will review it shortly.")
      healthForm.reset()
    } catch (error) {
      toast.error("Failed to submit health report. Please try again.")
    } finally {
      setIsSubmittingHealth(false)
    }
  }

  const onSubmitWaterReport = async (data: WaterQualityForm) => {
    setIsSubmittingWater(true)
    try {
      console.log("[v0] Water quality report submitted:", data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Water quality report submitted successfully! We'll investigate immediately.")
      waterForm.reset()
    } catch (error) {
      toast.error("Failed to submit water quality report. Please try again.")
    } finally {
      setIsSubmittingWater(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/community-health.jpg"
            alt="Community health background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-foreground/20 rounded-xl">
                <Heart className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Community Health Portal</h1>
                <p className="text-primary-foreground/80">Your health, our priority</p>
              </div>
            </div>
            <Button variant="secondary" size="sm" className="flex items-center space-x-2 shadow-lg">
              <Phone className="h-4 w-4" />
              <span>Emergency: 108</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 border-destructive/20 hover:border-destructive/40">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="p-3 bg-destructive/10 rounded-full mb-3">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="font-semibold mb-2">Report Health Issue</h3>
              <p className="text-sm text-muted-foreground">Tell us about symptoms or concerns</p>
              <Badge variant="outline" className="mt-2 text-xs">
                Quick Response
              </Badge>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 border-primary/20 hover:border-primary/40">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Water Quality Report</h3>
              <p className="text-sm text-muted-foreground">Report water quality issues</p>
              <Badge variant="outline" className="mt-2 text-xs">
                24/7 Monitoring
              </Badge>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 border-secondary/20 hover:border-secondary/40">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="p-3 bg-secondary/10 rounded-full mb-3">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Health Education</h3>
              <p className="text-sm text-muted-foreground">Learn about disease prevention</p>
              <Badge variant="outline" className="mt-2 text-xs">
                Free Resources
              </Badge>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 border-chart-4/20 hover:border-chart-4/40">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="p-3 bg-chart-4/10 rounded-full mb-3">
                <Users className="h-8 w-8 text-chart-4" />
              </div>
              <h3 className="font-semibold mb-2">Find Health Volunteer</h3>
              <p className="text-sm text-muted-foreground">Contact local health workers</p>
              <Badge variant="outline" className="mt-2 text-xs">
                Local Support
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-chart-4/10 to-chart-4/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Community Health</p>
                  <p className="text-2xl font-bold text-chart-4">92%</p>
                </div>
                <Activity className="h-8 w-8 text-chart-4" />
              </div>
              <Progress value={92} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Water Safety</p>
                  <p className="text-2xl font-bold text-primary">Safe</p>
                </div>
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <Progress value={88} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Reports</p>
                  <p className="text-2xl font-bold text-secondary">24</p>
                </div>
                <BarChart3 className="h-8 w-8 text-secondary" />
              </div>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="text-2xl font-bold text-accent">2.3h</p>
                </div>
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <Progress value={95} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Community Updates */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="h-5 w-5" />
              <span>Community Health Updates</span>
            </CardTitle>
            <CardDescription>Latest news and alerts from your health monitoring team</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {communityUpdates.map((update) => (
              <Alert
                key={update.id}
                className={`transition-all duration-200 hover:shadow-md ${
                  update.type === "alert"
                    ? "border-destructive bg-destructive/5"
                    : update.type === "success"
                      ? "border-chart-4 bg-chart-4/5"
                      : "border-primary bg-primary/5"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <AlertTitle className="text-base">{update.title}</AlertTitle>
                    <AlertDescription className="mt-1">{update.message}</AlertDescription>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{update.time}</span>
                </div>
              </Alert>
            ))}
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="report" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1 rounded-lg">
            <TabsTrigger value="report" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
              Report Issue
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
              Health Tips
            </TabsTrigger>
            <TabsTrigger value="status" className="data-[state=active]:bg-background data-[state=active]:shadow-sm">
              Community Status
            </TabsTrigger>
          </TabsList>

          <TabsContent value="report" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Health Issue Report Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" />
                    <span>Report Health Symptoms</span>
                  </CardTitle>
                  <CardDescription>Help us track and prevent disease outbreaks in your community</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={healthForm.handleSubmit(onSubmitHealthReport)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          {...healthForm.register("name", { required: "Name is required" })}
                        />
                        {healthForm.formState.errors.name && (
                          <p className="text-sm text-destructive">{healthForm.formState.errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="village">Village</Label>
                        <Select onValueChange={(value) => healthForm.setValue("village", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select village" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="village-a">Village A</SelectItem>
                            <SelectItem value="village-b">Village B</SelectItem>
                            <SelectItem value="village-c">Village C</SelectItem>
                            <SelectItem value="village-d">Village D</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptoms">Symptoms</Label>
                      <Select onValueChange={(value) => healthForm.setValue("symptoms", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select primary symptom" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="diarrhea">Diarrhea</SelectItem>
                          <SelectItem value="fever">Fever</SelectItem>
                          <SelectItem value="vomiting">Vomiting</SelectItem>
                          <SelectItem value="stomach-pain">Stomach Pain</SelectItem>
                          <SelectItem value="dehydration">Dehydration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">How long have you had these symptoms?</Label>
                      <Select onValueChange={(value) => healthForm.setValue("duration", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="less-than-day">Less than 1 day</SelectItem>
                          <SelectItem value="1-2-days">1-2 days</SelectItem>
                          <SelectItem value="3-5-days">3-5 days</SelectItem>
                          <SelectItem value="more-than-week">More than 1 week</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details">Additional Details</Label>
                      <Textarea
                        id="details"
                        placeholder="Describe your symptoms in detail..."
                        rows={3}
                        {...healthForm.register("details")}
                      />
                    </div>

                    <Button type="submit" className="w-full shadow-lg" disabled={isSubmittingHealth}>
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmittingHealth ? "Submitting..." : "Submit Health Report"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Water Quality Report Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Droplets className="h-5 w-5" />
                    <span>Report Water Quality Issue</span>
                  </CardTitle>
                  <CardDescription>Help us monitor water safety in your area</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={waterForm.handleSubmit(onSubmitWaterReport)} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="water-source">Water Source</Label>
                      <Select onValueChange={(value) => waterForm.setValue("waterSource", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select water source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="well">Community Well</SelectItem>
                          <SelectItem value="borehole">Borehole</SelectItem>
                          <SelectItem value="river">River/Stream</SelectItem>
                          <SelectItem value="pond">Pond</SelectItem>
                          <SelectItem value="tap">Tap Water</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="issue-type">Type of Issue</Label>
                      <Select onValueChange={(value) => waterForm.setValue("issueType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select issue type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cloudy">Water looks cloudy/dirty</SelectItem>
                          <SelectItem value="smell">Bad smell</SelectItem>
                          <SelectItem value="taste">Strange taste</SelectItem>
                          <SelectItem value="color">Unusual color</SelectItem>
                          <SelectItem value="contamination">Visible contamination</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Exact Location</Label>
                      <Input
                        id="location"
                        placeholder="Describe the location of water source"
                        {...waterForm.register("location", { required: "Location is required" })}
                      />
                      {waterForm.formState.errors.location && (
                        <p className="text-sm text-destructive">{waterForm.formState.errors.location.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="water-details">Description</Label>
                      <Textarea
                        id="water-details"
                        placeholder="Describe the water quality issue..."
                        rows={3}
                        {...waterForm.register("description")}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full shadow-lg bg-transparent"
                      variant="outline"
                      disabled={isSubmittingWater}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmittingWater ? "Submitting..." : "Submit Water Report"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Community Health Overview</CardTitle>
                  <CardDescription>Current health status distribution in your community</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={communityHealthData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {communityHealthData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Weekly Report Activity</CardTitle>
                  <CardDescription>Health reports submitted and resolved this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyReportsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="reports" fill="hsl(var(--chart-1))" name="Reports Submitted" />
                      <Bar dataKey="resolved" fill="hsl(var(--chart-4))" name="Reports Resolved" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Symptom Trends</CardTitle>
                  <CardDescription>Monthly tracking of reported symptoms in your area</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={symptomTrendsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="diarrhea"
                        stackId="1"
                        stroke="hsl(var(--chart-1))"
                        fill="hsl(var(--chart-1))"
                        fillOpacity={0.6}
                        name="Diarrhea"
                      />
                      <Area
                        type="monotone"
                        dataKey="fever"
                        stackId="1"
                        stroke="hsl(var(--chart-2))"
                        fill="hsl(var(--chart-2))"
                        fillOpacity={0.6}
                        name="Fever"
                      />
                      <Area
                        type="monotone"
                        dataKey="vomiting"
                        stackId="1"
                        stroke="hsl(var(--chart-5))"
                        fill="hsl(var(--chart-5))"
                        fillOpacity={0.6}
                        name="Vomiting"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Village Health Comparison</CardTitle>
                  <CardDescription>Health scores and report activity across villages</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={villageComparisonData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="village" type="category" width={80} />
                      <Tooltip />
                      <Bar dataKey="healthScore" fill="hsl(var(--chart-4))" name="Health Score" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-chart-4/10 to-chart-4/5 border-chart-4/20">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-chart-4 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-chart-4">156</h3>
                  <p className="text-sm text-muted-foreground">Reports Resolved</p>
                  <Badge className="mt-2 bg-chart-4 text-white">+12% this week</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Activity className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-primary">2.3h</h3>
                  <p className="text-sm text-muted-foreground">Avg Response Time</p>
                  <Badge className="mt-2 bg-primary text-primary-foreground">-15% improvement</Badge>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-secondary">89%</h3>
                  <p className="text-sm text-muted-foreground">Community Participation</p>
                  <Badge className="mt-2 bg-secondary text-secondary-foreground">High engagement</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthTips.map((section, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-secondary" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-chart-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact Card */}
            <Card className="bg-destructive/5 border-destructive shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-destructive">
                  <Phone className="h-5 w-5" />
                  <span>Emergency Contacts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-destructive text-destructive-foreground p-3 rounded-full shadow-lg">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Emergency Services</p>
                      <p className="text-2xl font-bold text-destructive">108</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">Health Volunteer</p>
                      <p className="text-2xl font-bold text-primary">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="status" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Your Village Health Status</CardTitle>
                  <CardDescription>Current health indicators for your community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-chart-4/10 rounded-lg border border-chart-4/20">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-chart-4/20 rounded-full">
                        <Droplets className="h-5 w-5 text-chart-4" />
                      </div>
                      <span className="font-medium">Water Quality</span>
                    </div>
                    <Badge className="bg-chart-4 text-white shadow-sm">Safe</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-secondary/20 rounded-full">
                        <Activity className="h-5 w-5 text-secondary" />
                      </div>
                      <span className="font-medium">Disease Risk</span>
                    </div>
                    <Badge variant="secondary" className="shadow-sm">
                      Low
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/20 rounded-full">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">Community Participation</span>
                    </div>
                    <Badge className="bg-primary text-primary-foreground shadow-sm">High</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Community Activity</CardTitle>
                  <CardDescription>Health reports and activities in your area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg border hover:shadow-sm transition-shadow">
                      <div className="bg-chart-4 text-white p-2 rounded-full shadow-sm">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Water quality test completed</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg border hover:shadow-sm transition-shadow">
                      <div className="bg-secondary text-secondary-foreground p-2 rounded-full shadow-sm">
                        <Users className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">5 new health reports submitted</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg border hover:shadow-sm transition-shadow">
                      <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-sm">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Health education session held</p>
                        <p className="text-xs text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
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
