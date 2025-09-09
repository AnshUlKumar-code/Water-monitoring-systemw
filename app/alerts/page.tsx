"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import {
  AlertTriangle,
  Send,
  CheckCircle,
  Users,
  MessageSquare,
  Phone,
  Bell,
  Eye,
  Edit,
  Trash2,
  Plus,
  Filter,
  Download,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { toast } from "sonner"

// Mock alert data
const recentAlerts = [
  {
    id: "ALT001",
    title: "Water Quality Alert - Village D",
    message: "High turbidity detected in main water source. Boil water before consumption.",
    type: "water_quality",
    severity: "high",
    status: "sent",
    createdAt: "2024-01-15T10:30:00Z",
    sentAt: "2024-01-15T10:32:00Z",
    recipients: 245,
    channels: ["sms", "app", "community_board"],
    responses: 89,
    acknowledged: 156,
  },
  {
    id: "ALT002",
    title: "Health Camp Announcement",
    message: "Free health checkups available at Community Center this Saturday 9 AM - 4 PM.",
    type: "health_service",
    severity: "low",
    status: "scheduled",
    createdAt: "2024-01-14T15:45:00Z",
    scheduledFor: "2024-01-16T08:00:00Z",
    recipients: 320,
    channels: ["app", "community_board"],
    responses: 0,
    acknowledged: 0,
  },
  {
    id: "ALT003",
    title: "Disease Outbreak Warning",
    message: "Increased diarrhea cases in Village B. Seek medical attention if symptoms persist.",
    type: "disease_outbreak",
    severity: "medium",
    status: "sent",
    createdAt: "2024-01-13T08:15:00Z",
    sentAt: "2024-01-13T08:17:00Z",
    recipients: 180,
    channels: ["sms", "app", "volunteer_network"],
    responses: 45,
    acknowledged: 120,
  },
]

const alertTemplates = [
  {
    id: "TPL001",
    name: "Water Quality Alert",
    type: "water_quality",
    template: "Water quality issue detected at {location}. {action_required}. Contact health volunteer for assistance.",
    variables: ["location", "action_required"],
  },
  {
    id: "TPL002",
    name: "Disease Outbreak Warning",
    type: "disease_outbreak",
    template:
      "Health alert: Increased {disease} cases reported in {location}. {prevention_measures}. Seek medical help if symptoms develop.",
    variables: ["disease", "location", "prevention_measures"],
  },
  {
    id: "TPL003",
    name: "Health Service Announcement",
    type: "health_service",
    template: "{service_type} available at {location} on {date} from {time}. {additional_info}",
    variables: ["service_type", "location", "date", "time", "additional_info"],
  },
]

const recipientGroups = [
  { id: "all_communities", name: "All Communities", count: 1250, type: "community" },
  { id: "village_a", name: "Village A Residents", count: 320, type: "community" },
  { id: "village_b", name: "Village B Residents", count: 280, type: "community" },
  { id: "village_c", name: "Village C Residents", count: 350, type: "community" },
  { id: "village_d", name: "Village D Residents", count: 300, type: "community" },
  { id: "health_volunteers", name: "Health Volunteers", count: 32, type: "volunteer" },
  { id: "health_officials", name: "Health Officials", count: 18, type: "official" },
]

function getSeverityColor(severity: string) {
  switch (severity) {
    case "high":
      return "bg-destructive text-destructive-foreground"
    case "medium":
      return "bg-secondary text-secondary-foreground"
    case "low":
      return "bg-primary text-primary-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "sent":
      return "bg-chart-4 text-white"
    case "scheduled":
      return "bg-secondary text-secondary-foreground"
    case "draft":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function getTypeIcon(type: string) {
  switch (type) {
    case "water_quality":
      return "💧"
    case "disease_outbreak":
      return "🦠"
    case "health_service":
      return "🏥"
    case "emergency":
      return "🚨"
    default:
      return "📢"
  }
}

interface AlertForm {
  alertType: string
  severity: string
  title: string
  message: string
  channels: string[]
  scheduled: boolean
  scheduledDate?: string
  scheduledTime?: string
}

export default function AlertManagementSystem() {
  const [isSubmittingAlert, setIsSubmittingAlert] = useState(false)
  const [selectedChannels, setSelectedChannels] = useState<string[]>([])
  const [isScheduled, setIsScheduled] = useState(false)

  const alertForm = useForm<AlertForm>()

  const onSubmitAlert = async (data: AlertForm) => {
    setIsSubmittingAlert(true)
    try {
      const alertData = {
        ...data,
        channels: selectedChannels,
        scheduled: isScheduled,
      }
      console.log("[v0] Alert created:", alertData)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (isScheduled) {
        toast.success("Alert scheduled successfully! It will be sent at the specified time.")
      } else {
        toast.success("Alert sent successfully to all selected channels!")
      }

      alertForm.reset()
      setSelectedChannels([])
      setIsScheduled(false)
    } catch (error) {
      toast.error("Failed to create alert. Please try again.")
    } finally {
      setIsSubmittingAlert(false)
    }
  }

  const handleChannelChange = (channel: string, checked: boolean) => {
    if (checked) {
      setSelectedChannels((prev) => [...prev, channel])
    } else {
      setSelectedChannels((prev) => prev.filter((c) => c !== channel))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-8 w-8 text-secondary" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Alert Management System</h1>
                  <p className="text-sm text-muted-foreground">Community notification and emergency response</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-chart-4/10 text-chart-4">
                <CheckCircle className="h-3 w-3 mr-1" />3 Active Alerts
              </Badge>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Plus className="h-4 w-4 mr-2" />
                Create Alert
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Alerts Sent</p>
                <p className="text-2xl font-bold text-primary">127</p>
              </div>
              <Send className="h-8 w-8 text-primary" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Recipients</p>
                <p className="text-2xl font-bold text-secondary">1,250</p>
              </div>
              <Users className="h-8 w-8 text-secondary" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Response Rate</p>
                <p className="text-2xl font-bold text-chart-4">78%</p>
              </div>
              <MessageSquare className="h-8 w-8 text-chart-4" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Emergency Alerts</p>
                <p className="text-2xl font-bold text-destructive">2</p>
              </div>
              <Bell className="h-8 w-8 text-destructive" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="create" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="create">Create Alert</TabsTrigger>
            <TabsTrigger value="history">Alert History</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="recipients">Recipients</TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Alert Creation Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Create New Alert</CardTitle>
                    <CardDescription>Send important health notifications to your community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={alertForm.handleSubmit(onSubmitAlert)} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="alert-type">Alert Type</Label>
                          <Select onValueChange={(value) => alertForm.setValue("alertType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select alert type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="water_quality">Water Quality</SelectItem>
                              <SelectItem value="disease_outbreak">Disease Outbreak</SelectItem>
                              <SelectItem value="health_service">Health Service</SelectItem>
                              <SelectItem value="emergency">Emergency</SelectItem>
                              <SelectItem value="general">General Announcement</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="severity">Severity Level</Label>
                          <Select onValueChange={(value) => alertForm.setValue("severity", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low - Information</SelectItem>
                              <SelectItem value="medium">Medium - Advisory</SelectItem>
                              <SelectItem value="high">High - Urgent Action Required</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="title">Alert Title</Label>
                        <Input
                          id="title"
                          placeholder="Enter alert title..."
                          {...alertForm.register("title", { required: "Title is required" })}
                        />
                        {alertForm.formState.errors.title && (
                          <p className="text-sm text-destructive">{alertForm.formState.errors.title.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Alert Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Enter detailed alert message..."
                          rows={4}
                          {...alertForm.register("message", { required: "Message is required" })}
                        />
                        {alertForm.formState.errors.message && (
                          <p className="text-sm text-destructive">{alertForm.formState.errors.message.message}</p>
                        )}
                      </div>

                      <div className="space-y-4">
                        <Label>Delivery Channels</Label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="sms"
                              checked={selectedChannels.includes("sms")}
                              onCheckedChange={(checked) => handleChannelChange("sms", checked as boolean)}
                            />
                            <Label htmlFor="sms" className="flex items-center space-x-2">
                              <Phone className="h-4 w-4" />
                              <span>SMS</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="app"
                              checked={selectedChannels.includes("app")}
                              onCheckedChange={(checked) => handleChannelChange("app", checked as boolean)}
                            />
                            <Label htmlFor="app" className="flex items-center space-x-2">
                              <Bell className="h-4 w-4" />
                              <span>App Notification</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="community"
                              checked={selectedChannels.includes("community")}
                              onCheckedChange={(checked) => handleChannelChange("community", checked as boolean)}
                            />
                            <Label htmlFor="community" className="flex items-center space-x-2">
                              <MessageSquare className="h-4 w-4" />
                              <span>Community Board</span>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="volunteers"
                              checked={selectedChannels.includes("volunteers")}
                              onCheckedChange={(checked) => handleChannelChange("volunteers", checked as boolean)}
                            />
                            <Label htmlFor="volunteers" className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>Volunteer Network</span>
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label>Scheduling Options</Label>
                        <div className="flex items-center space-x-2">
                          <Switch id="schedule" checked={isScheduled} onCheckedChange={setIsScheduled} />
                          <Label htmlFor="schedule">Schedule for later</Label>
                        </div>

                        {isScheduled && (
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-2">
                              <Label htmlFor="scheduled-date">Date</Label>
                              <Input id="scheduled-date" type="date" {...alertForm.register("scheduledDate")} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="scheduled-time">Time</Label>
                              <Input id="scheduled-time" type="time" {...alertForm.register("scheduledTime")} />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          type="submit"
                          className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                          disabled={isSubmittingAlert}
                        >
                          <Send className="h-4 w-4 mr-2" />
                          {isSubmittingAlert ? "Processing..." : isScheduled ? "Schedule Alert" : "Send Alert Now"}
                        </Button>
                        <Button type="button" variant="outline" className="flex-1 bg-transparent">
                          Save as Draft
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Templates */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Templates</CardTitle>
                    <CardDescription>Use pre-built templates for common alerts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {alertTemplates.slice(0, 3).map((template) => (
                      <div key={template.id} className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-sm">{template.name}</h4>
                          <span className="text-lg">{getTypeIcon(template.type)}</span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">{template.template}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                    <CardDescription>How your alert will appear</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border rounded-lg bg-muted/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-secondary" />
                        <span className="font-medium text-sm">Health Alert</span>
                        <Badge className={getSeverityColor("medium")}>Medium</Badge>
                        <Badge variant="outline" className={getStatusColor("sent")}>
                          Sent
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Your alert message will appear here...</p>
                      <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                        <span>Recipients: 0</span>
                        <span>Responses: 0</span>
                        <span>Acknowledged: 0</span>
                        <span>Sent: N/A</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Alert History</h3>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <Card key={alert.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold">{alert.title}</h4>
                          <Badge className={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
                          <Badge variant="outline" className={getStatusColor(alert.status)}>
                            {alert.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{alert.message}</p>
                        <div className="flex items-center space-x-6 text-xs text-muted-foreground">
                          <span>Recipients: {alert.recipients}</span>
                          <span>Responses: {alert.responses}</span>
                          <span>Acknowledged: {alert.acknowledged}</span>
                          <span>
                            {alert.status === "sent"
                              ? `Sent: ${new Date(alert.sentAt!).toLocaleString()}`
                              : `Created: ${new Date(alert.createdAt).toLocaleString()}`}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Alert Templates</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Template
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alertTemplates.map((template) => (
                <Card key={template.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <span className="text-2xl">{getTypeIcon(template.type)}</span>
                    </div>
                    <CardDescription>Template for {template.type.replace("_", " ")} alerts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm">{template.template}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">Variables:</p>
                        <div className="flex flex-wrap gap-1">
                          {template.variables.map((variable) => (
                            <Badge key={variable} variant="outline" className="text-xs">
                              {variable}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recipients" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Recipient Groups</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Group
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipientGroups.map((group) => (
                <Card key={group.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">{group.name}</h4>
                      <Badge variant="outline">{group.type}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Members</span>
                        <span className="font-medium">{group.count}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Active</span>
                        <span className="font-medium text-chart-4">{Math.floor(group.count * 0.85)}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
