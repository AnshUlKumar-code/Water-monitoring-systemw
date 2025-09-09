import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  ReferenceLine,
} from "recharts"
import { Droplets, MapPin, AlertTriangle, CheckCircle, Clock, Zap, Download, Settings, RefreshCw } from "lucide-react"

// Mock sensor data
const sensorLocations = [
  {
    id: "WQ001",
    name: "Village A - Main Well",
    location: "Village A",
    coordinates: { lat: 26.1445, lng: 91.7362 },
    status: "active",
    lastUpdate: "2 minutes ago",
    ph: 7.2,
    turbidity: 2.1,
    tds: 145,
    temperature: 24.5,
    chlorine: 0.3,
    bacteria: "Low",
    overallStatus: "Safe",
  },
  {
    id: "WQ002",
    name: "Village B - Community Borehole",
    location: "Village B",
    coordinates: { lat: 26.1523, lng: 91.7445 },
    status: "active",
    lastUpdate: "5 minutes ago",
    ph: 6.8,
    turbidity: 4.5,
    tds: 220,
    temperature: 25.1,
    chlorine: 0.2,
    bacteria: "Medium",
    overallStatus: "Monitor",
  },
  {
    id: "WQ003",
    name: "Village C - River Source",
    location: "Village C",
    coordinates: { lat: 26.1389, lng: 91.7298 },
    status: "active",
    lastUpdate: "1 minute ago",
    ph: 8.1,
    turbidity: 1.8,
    tds: 98,
    temperature: 23.8,
    chlorine: 0.4,
    bacteria: "Low",
    overallStatus: "Safe",
  },
  {
    id: "WQ004",
    name: "Village D - Pond Water",
    location: "Village D",
    coordinates: { lat: 26.1467, lng: 91.7521 },
    status: "alert",
    lastUpdate: "3 minutes ago",
    ph: 6.2,
    turbidity: 8.2,
    tds: 340,
    temperature: 26.3,
    chlorine: 0.1,
    bacteria: "High",
    overallStatus: "Alert",
  },
]

// Historical trend data
const phTrendData = [
  { time: "00:00", "Village A": 7.1, "Village B": 6.9, "Village C": 8.0, "Village D": 6.3 },
  { time: "04:00", "Village A": 7.2, "Village B": 6.8, "Village C": 8.1, "Village D": 6.1 },
  { time: "08:00", "Village A": 7.3, "Village B": 6.7, "Village C": 8.2, "Village D": 6.0 },
  { time: "12:00", "Village A": 7.2, "Village B": 6.8, "Village C": 8.1, "Village D": 6.2 },
  { time: "16:00", "Village A": 7.1, "Village B": 6.9, "Village C": 8.0, "Village D": 6.4 },
  { time: "20:00", "Village A": 7.2, "Village B": 6.8, "Village C": 8.1, "Village D": 6.2 },
]

const turbidityTrendData = [
  { time: "00:00", "Village A": 2.0, "Village B": 4.2, "Village C": 1.9, "Village D": 7.8 },
  { time: "04:00", "Village A": 2.1, "Village B": 4.5, "Village C": 1.8, "Village D": 8.1 },
  { time: "08:00", "Village A": 2.2, "Village B": 4.3, "Village C": 1.7, "Village D": 8.5 },
  { time: "12:00", "Village A": 2.1, "Village B": 4.5, "Village C": 1.8, "Village D": 8.2 },
  { time: "16:00", "Village A": 2.0, "Village B": 4.4, "Village C": 1.9, "Village D": 7.9 },
  { time: "20:00", "Village A": 2.1, "Village B": 4.5, "Village C": 1.8, "Village D": 8.2 },
]

const correlationData = [
  { ph: 7.2, turbidity: 2.1, village: "Village A" },
  { ph: 6.8, turbidity: 4.5, village: "Village B" },
  { ph: 8.1, turbidity: 1.8, village: "Village C" },
  { ph: 6.2, turbidity: 8.2, village: "Village D" },
]

function getStatusColor(status: string) {
  switch (status) {
    case "Safe":
      return "text-chart-4 bg-chart-4/10"
    case "Monitor":
      return "text-secondary bg-secondary/10"
    case "Alert":
      return "text-destructive bg-destructive/10"
    default:
      return "text-muted-foreground bg-muted/10"
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "Safe":
      return <CheckCircle className="h-4 w-4" />
    case "Monitor":
      return <Clock className="h-4 w-4" />
    case "Alert":
      return <AlertTriangle className="h-4 w-4" />
    default:
      return <Clock className="h-4 w-4" />
  }
}

export default function WaterQualityMonitoring() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Droplets className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Water Quality Monitoring</h1>
                  <p className="text-sm text-muted-foreground">Real-time IoT sensor network</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-chart-4/10 text-chart-4">
                <Zap className="h-3 w-3 mr-1" />4 Sensors Active
              </Badge>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Data
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Critical Alerts */}
        <Alert className="border-destructive bg-destructive/5">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertTitle className="text-destructive">Water Quality Alert - Village D</AlertTitle>
          <AlertDescription>
            High turbidity (8.2 NTU) and low pH (6.2) detected. Bacterial contamination risk elevated. Immediate action
            required.
            <div className="mt-2 flex space-x-2">
              <Button size="sm" variant="destructive">
                Send Alert to Community
              </Button>
              <Button size="sm" variant="outline">
                Dispatch Health Team
              </Button>
            </div>
          </AlertDescription>
        </Alert>

        {/* Sensor Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sensorLocations.map((sensor) => (
            <Card key={sensor.id} className="relative">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{sensor.name}</CardTitle>
                  <Badge variant="outline" className={getStatusColor(sensor.overallStatus)}>
                    {getStatusIcon(sensor.overallStatus)}
                    {sensor.overallStatus}
                  </Badge>
                </div>
                <CardDescription className="flex items-center text-xs">
                  <MapPin className="h-3 w-3 mr-1" />
                  {sensor.location} • {sensor.lastUpdate}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">pH Level</p>
                    <p className="font-semibold">{sensor.ph}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Turbidity</p>
                    <p className="font-semibold">{sensor.turbidity} NTU</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">TDS</p>
                    <p className="font-semibold">{sensor.tds} ppm</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Temp</p>
                    <p className="font-semibold">{sensor.temperature}°C</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Chlorine Level</span>
                    <span>{sensor.chlorine} mg/L</span>
                  </div>
                  <Progress value={(sensor.chlorine / 0.5) * 100} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Bacteria Risk</span>
                  <Badge
                    variant="outline"
                    className={
                      sensor.bacteria === "Low"
                        ? "text-chart-4 bg-chart-4/10"
                        : sensor.bacteria === "Medium"
                          ? "text-secondary bg-secondary/10"
                          : "text-destructive bg-destructive/10"
                    }
                  >
                    {sensor.bacteria}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Analytics */}
        <Tabs defaultValue="trends" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="thresholds">Thresholds</TabsTrigger>
            <TabsTrigger value="sensors">Sensor Management</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>pH Level Trends (24 Hours)</CardTitle>
                  <CardDescription>Optimal range: 6.5 - 8.5</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={phTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[5.5, 9]} />
                      <Tooltip />
                      <ReferenceLine y={6.5} stroke="hsl(var(--destructive))" strokeDasharray="2 2" />
                      <ReferenceLine y={8.5} stroke="hsl(var(--destructive))" strokeDasharray="2 2" />
                      <Line type="monotone" dataKey="Village A" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                      <Line type="monotone" dataKey="Village B" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                      <Line type="monotone" dataKey="Village C" stroke="hsl(var(--chart-4))" strokeWidth={2} />
                      <Line type="monotone" dataKey="Village D" stroke="hsl(var(--chart-5))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Turbidity Trends (24 Hours)</CardTitle>
                  <CardDescription>Safe threshold: &lt; 4 NTU</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={turbidityTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <ReferenceLine y={4} stroke="hsl(var(--secondary))" strokeDasharray="2 2" />
                      <Line type="monotone" dataKey="Village A" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                      <Line type="monotone" dataKey="Village B" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                      <Line type="monotone" dataKey="Village C" stroke="hsl(var(--chart-4))" strokeWidth={2} />
                      <Line type="monotone" dataKey="Village D" stroke="hsl(var(--chart-5))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>pH vs Turbidity Correlation</CardTitle>
                  <CardDescription>Relationship between water quality parameters</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ScatterChart data={correlationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="ph" name="pH" />
                      <YAxis dataKey="turbidity" name="Turbidity (NTU)" />
                      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                      <Scatter dataKey="turbidity" fill="hsl(var(--primary))" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Water Quality Distribution</CardTitle>
                  <CardDescription>Current status across all monitoring sites</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={[
                        { status: "Safe", count: 2, color: "hsl(var(--chart-4))" },
                        { status: "Monitor", count: 1, color: "hsl(var(--secondary))" },
                        { status: "Alert", count: 1, color: "hsl(var(--destructive))" },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="status" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="thresholds" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Water Quality Thresholds</CardTitle>
                <CardDescription>Configure alert thresholds for different parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">pH Levels</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Safe Range</span>
                        <Badge className="bg-chart-4 text-white">6.5 - 8.5</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Monitor Range</span>
                        <Badge variant="secondary">6.0 - 6.5, 8.5 - 9.0</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Alert Range</span>
                        <Badge variant="destructive">&lt; 6.0, &gt; 9.0</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Turbidity (NTU)</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Safe Range</span>
                        <Badge className="bg-chart-4 text-white">&lt; 4</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Monitor Range</span>
                        <Badge variant="secondary">4 - 6</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Alert Range</span>
                        <Badge variant="destructive">&gt; 6</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sensors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sensor Network Management</CardTitle>
                <CardDescription>Monitor and manage IoT sensor devices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sensorLocations.map((sensor) => (
                    <div key={sensor.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`p-2 rounded-full ${
                            sensor.status === "active"
                              ? "bg-chart-4/10 text-chart-4"
                              : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          <Droplets className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">{sensor.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            ID: {sensor.id} • Last update: {sensor.lastUpdate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={sensor.status === "active" ? "default" : "destructive"}>
                          {sensor.status === "active" ? "Online" : "Offline"}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
