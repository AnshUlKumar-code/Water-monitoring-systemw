import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

// Mock data for demonstration
const waterQualityData = [
  { location: "Village A", ph: 7.2, turbidity: 2.1, contamination: "Low", status: "Safe" },
  { location: "Village B", ph: 6.8, turbidity: 4.5, contamination: "Medium", status: "Monitor" },
  { location: "Village C", ph: 8.1, turbidity: 1.8, contamination: "Low", status: "Safe" },
  { location: "Village D", ph: 6.2, turbidity: 8.2, contamination: "High", status: "Alert" },
]

const healthTrendData = [
  { month: "Jan", cholera: 2, diarrhea: 15, typhoid: 1 },
  { month: "Feb", cholera: 1, diarrhea: 12, typhoid: 2 },
  { month: "Mar", cholera: 0, diarrhea: 8, typhoid: 1 },
  { month: "Apr", cholera: 3, diarrhea: 18, typhoid: 3 },
  { month: "May", cholera: 1, diarrhea: 10, typhoid: 0 },
  { month: "Jun", cholera: 0, diarrhea: 6, typhoid: 1 },
]

const villageComparisonData = [
  {
    village: "Village A",
    population: 450,
    healthReports: 12,
    waterQuality: 85,
    diseaseRate: 2.1,
    volunteerCoverage: 95,
    preventionScore: 88,
  },
  {
    village: "Village B",
    population: 380,
    healthReports: 18,
    waterQuality: 72,
    diseaseRate: 4.2,
    volunteerCoverage: 87,
    preventionScore: 75,
  },
  {
    village: "Village C",
    population: 520,
    healthReports: 8,
    waterQuality: 91,
    diseaseRate: 1.8,
    volunteerCoverage: 92,
    preventionScore: 93,
  },
  {
    village: "Village D",
    population: 320,
    healthReports: 25,
    waterQuality: 58,
    diseaseRate: 6.8,
    volunteerCoverage: 78,
    preventionScore: 62,
  },
]

const yearOverYearData = [
  { month: "Jan", current: 18, previous: 32, improvement: 44 },
  { month: "Feb", current: 15, previous: 28, improvement: 46 },
  { month: "Mar", current: 9, previous: 25, improvement: 64 },
  { month: "Apr", current: 24, previous: 35, improvement: 31 },
  { month: "May", current: 11, previous: 30, improvement: 63 },
  { month: "Jun", current: 7, previous: 22, improvement: 68 },
]

const interventionEffectivenessData = [
  { intervention: "Water Purification", beforeCases: 45, afterCases: 12, effectiveness: 73 },
  { intervention: "Health Education", beforeCases: 38, afterCases: 15, effectiveness: 61 },
  { intervention: "Volunteer Training", beforeCases: 52, afterCases: 18, effectiveness: 65 },
  { intervention: "IoT Monitoring", beforeCases: 41, afterCases: 8, effectiveness: 80 },
]

const communityEngagementData = [
  { name: "Active Reporters", value: 245, color: "hsl(var(--chart-1))" },
  { name: "Health Volunteers", value: 32, color: "hsl(var(--chart-2))" },
  { name: "Trained Officials", value: 18, color: "hsl(var(--chart-4))" },
]

const recentAlerts = [
  {
    id: 1,
    type: "Water Quality",
    location: "Village D",
    severity: "High",
    time: "2 hours ago",
    description: "High turbidity detected in main water source",
  },
  {
    id: 2,
    type: "Disease Outbreak",
    location: "Village B",
    severity: "Medium",
    time: "6 hours ago",
    description: "Increased diarrhea cases reported",
  },
  {
    id: 3,
    type: "System Maintenance",
    location: "Village A",
    severity: "Low",
    time: "1 day ago",
    description: "Sensor calibration completed",
  },
]

const realTimeMetrics = [
  { name: "Water Quality", value: 85, max: 100, color: "hsl(var(--chart-2))" },
  { name: "Disease Prevention", value: 92, max: 100, color: "hsl(var(--chart-4))" },
  { name: "Community Engagement", value: 78, max: 100, color: "hsl(var(--chart-1))" },
  { name: "Alert Response", value: 95, max: 100, color: "hsl(var(--accent))" },
]

const diseaseHeatmapData = [
  { village: "Village A", month: "Jan", cases: 2 },
  { village: "Village A", month: "Feb", cases: 1 },
  { village: "Village A", month: "Mar", cases: 0 },
  { village: "Village A", month: "Apr", cases: 3 },
  { village: "Village B", month: "Jan", cases: 5 },
  { village: "Village B", month: "Feb", cases: 4 },
  { village: "Village B", month: "Mar", cases: 2 },
  { village: "Village B", month: "Apr", cases: 6 },
  { village: "Village C", month: "Jan", cases: 1 },
  { village: "Village C", month: "Feb", cases: 0 },
  { village: "Village C", month: "Mar", cases: 1 },
  { village: "Village C", month: "Apr", cases: 2 },
  { village: "Village D", month: "Jan", cases: 8 },
  { village: "Village D", month: "Feb", cases: 7 },
  { village: "Village D", month: "Mar", cases: 5 },
  { village: "Village D", month: "Apr", cases: 9 },
]

const healthFunnelData = [
  { name: "Population at Risk", value: 1670, fill: "hsl(var(--chart-5))" },
  { name: "Screened", value: 1420, fill: "hsl(var(--chart-1))" },
  { name: "Identified Issues", value: 285, fill: "hsl(var(--secondary))" },
  { name: "Treated", value: 245, fill: "hsl(var(--chart-4))" },
  { name: "Recovered", value: 228, fill: "hsl(var(--accent))" },
]

const predictiveAnalyticsData = [
  { month: "Jul", actual: 7, predicted: 8, confidence: 85 },
  { month: "Aug", actual: null, predicted: 6, confidence: 78 },
  { month: "Sep", actual: null, predicted: 4, confidence: 72 },
  { month: "Oct", actual: null, predicted: 3, confidence: 68 },
  { month: "Nov", actual: null, predicted: 5, confidence: 65 },
  { month: "Dec", actual: null, predicted: 8, confidence: 62 },
]

export default function AdminDashboard() {
  // Mock data
  const diseaseData = [
    { month: "Jan", cholera: 12, typhoid: 5, diarrhea: 22 },
    { month: "Feb", cholera: 8, typhoid: 3, diarrhea: 18 },
    { month: "Mar", cholera: 5, typhoid: 2, diarrhea: 15 },
    { month: "Apr", cholera: 7, typhoid: 4, diarrhea: 20 },
    { month: "May", cholera: 9, typhoid: 3, diarrhea: 16 },
  ]

  const waterQualityData = [
    { date: "Jan", quality: 78 },
    { date: "Feb", quality: 82 },
    { date: "Mar", quality: 85 },
    { date: "Apr", quality: 80 },
    { date: "May", quality: 88 },
  ]

  const riskDistribution = [
    { name: "High Risk", value: 15, color: "hsl(var(--destructive))" },
    { name: "Medium Risk", value: 35, color: "hsl(var(--chart-2))" },
    { name: "Low Risk", value: 50, color: "hsl(var(--chart-3))" },
  ]

  const interventionData = [
    { intervention: "Hygiene Campaign", before: 60, after: 35 },
    { intervention: "Water Filters", before: 50, after: 25 },
    { intervention: "Vaccination Drive", before: 40, after: 15 },
  ]

  const predictiveData = [
    { month: "Jan", actual: 15, predicted: 12 },
    { month: "Feb", actual: 10, predicted: 8 },
    { month: "Mar", actual: 8, predicted: 6 },
    { month: "Apr", actual: 12, predicted: 10 },
  ]

  const seasonalData = [
    { disease: "Cholera", monsoon: 75, winter: 30, summer: 15 },
    { disease: "Typhoid", monsoon: 60, winter: 20, summer: 10 },
    { disease: "Diarrhea", monsoon: 80, winter: 40, summer: 20 },
  ]

  const villageComparison = [
    { village: "A", score: 75 },
    { village: "B", score: 60 },
    { village: "C", score: 85 },
    { village: "D", score: 70 },
  ]

  const resourceData = [
    { resource: "Medical Supplies", allocated: 100, utilized: 85 },
    { resource: "Personnel", allocated: 50, utilized: 45 },
    { resource: "Vehicles", allocated: 20, utilized: 18 },
  ]

  const ChartTooltipContent = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border rounded shadow p-2">
          <p className="font-bold">{label}</p>
          {payload.map((item, index) => (
            <p key={index} className="text-gray-700">
              {item.name}: <span className="font-medium">{item.value}</span>
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  const ChartContainer = ({ children, config, className }) => {
    // Dynamically set CSS variables based on the config
    const style = {}
    for (const key in config) {
      style[`--color-${key}`] = config[key].color
    }

    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Navigation spacer */}
      <div className="h-16 md:h-16" />

      {/* Header */}
      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10 border-b">
        <div className="absolute inset-0 bg-[url('/images/health-hero.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground bg-transparent">HealthGuard NE</h1>
              <p className="text-muted-foreground mt-1">Smart Health Monitoring Dashboard</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                ● System Active
              </div>
              <div className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleTimeString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="comparison">Village Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
                  <div className="h-4 w-4 text-primary">📊</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">23</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <span className="text-red-500">↑ 12%</span>
                    <span className="ml-1">from last week</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Water Quality</CardTitle>
                  <div className="h-4 w-4 text-accent">💧</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">87%</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 5%</span>
                    <span className="ml-1">improvement</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Volunteers</CardTitle>
                  <div className="h-4 w-4 text-secondary">👥</div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary">156</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 8%</span>
                    <span className="ml-1">new this month</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-destructive">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">🚨 Critical Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-destructive">3</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <span className="text-red-500">↑ 2</span>
                    <span className="ml-1">requires attention</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div className="bg-destructive h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">📈 Disease Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      cholera: { label: "Cholera", color: "hsl(var(--chart-1))" },
                      typhoid: { label: "Typhoid", color: "hsl(var(--chart-2))" },
                      diarrhea: { label: "Diarrhea", color: "hsl(var(--chart-3))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={diseaseData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="cholera" stroke="var(--color-cholera)" strokeWidth={2} />
                        <Line type="monotone" dataKey="typhoid" stroke="var(--color-typhoid)" strokeWidth={2} />
                        <Line type="monotone" dataKey="diarrhea" stroke="var(--color-diarrhea)" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">💧 Water Quality Index</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      quality: { label: "Quality Index", color: "hsl(var(--chart-4))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={waterQualityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="quality"
                          stroke="var(--color-quality)"
                          fill="var(--color-quality)"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Alerts */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">🚨 Recent Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-destructive text-destructive-foreground rounded-lg border-l-4 border-l-destructive">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>⚠️</span>
                      <span className="font-medium">High contamination detected in Majuli water source</span>
                    </div>
                    <span className="text-destructive-foreground/80 text-sm">2 hours ago</span>
                  </div>
                  <p className="text-destructive-foreground/80 text-sm mt-1">
                    Immediate action required - 450 people affected
                  </p>
                </div>

                <div className="p-4 bg-secondary text-secondary-foreground rounded-lg border-l-4 border-l-secondary">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>📊</span>
                      <span className="font-medium">Cholera cases increasing in Dibrugarh district</span>
                    </div>
                    <span className="text-secondary-foreground/80 text-sm">5 hours ago</span>
                  </div>
                  <p className="text-secondary-foreground/80 text-sm mt-1">Monitor closely - 12 new cases reported</p>
                </div>

                <div className="p-4 bg-muted rounded-lg border-l-4 border-l-muted-foreground">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>✅</span>
                      <span className="font-medium">Water treatment plant operational in Tezpur</span>
                    </div>
                    <span className="text-muted-foreground text-sm">1 day ago</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">System restored - serving 2,000 households</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>📊 Health Risk Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      high: { label: "High Risk", color: "hsl(var(--destructive))" },
                      medium: { label: "Medium Risk", color: "hsl(var(--chart-2))" },
                      low: { label: "Low Risk", color: "hsl(var(--chart-3))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={riskDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {riskDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>🎯 Intervention Effectiveness</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      before: { label: "Before", color: "hsl(var(--chart-1))" },
                      after: { label: "After", color: "hsl(var(--chart-2))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={interventionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="intervention" />
                        <YAxis />
                        <Tooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="before" fill="var(--color-before)" />
                        <Bar dataKey="after" fill="var(--color-after)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>📈 Predictive Health Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      actual: { label: "Actual Cases", color: "hsl(var(--chart-1))" },
                      predicted: { label: "Predicted Cases", color: "hsl(var(--chart-2))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={predictiveData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="actual" stroke="var(--color-actual)" strokeWidth={2} />
                        <Line
                          type="monotone"
                          dataKey="predicted"
                          stroke="var(--color-predicted)"
                          strokeWidth={2}
                          strokeDasharray="5 5"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>🌡️ Seasonal Disease Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      monsoon: { label: "Monsoon", color: "hsl(var(--chart-3))" },
                      winter: { label: "Winter", color: "hsl(var(--chart-4))" },
                      summer: { label: "Summer", color: "hsl(var(--chart-5))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={seasonalData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="disease" />
                        <PolarRadiusAxis />
                        <Radar
                          name="Monsoon"
                          dataKey="monsoon"
                          stroke="var(--color-monsoon)"
                          fill="var(--color-monsoon)"
                          fillOpacity={0.3}
                        />
                        <Radar
                          name="Winter"
                          dataKey="winter"
                          stroke="var(--color-winter)"
                          fill="var(--color-winter)"
                          fillOpacity={0.3}
                        />
                        <Radar
                          name="Summer"
                          dataKey="summer"
                          stroke="var(--color-summer)"
                          fill="var(--color-summer)"
                          fillOpacity={0.3}
                        />
                        <Tooltip content={<ChartTooltipContent />} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>🏘️ Village Health Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      score: { label: "Health Score", color: "hsl(var(--chart-1))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={villageComparison} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="village" type="category" />
                        <Tooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="score" fill="var(--color-score)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>📊 Resource Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      allocated: { label: "Allocated", color: "hsl(var(--chart-2))" },
                      utilized: { label: "Utilized", color: "hsl(var(--chart-3))" },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={resourceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="resource" />
                        <YAxis />
                        <Tooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="allocated" fill="var(--color-allocated)" />
                        <Bar dataKey="utilized" fill="var(--color-utilized)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
