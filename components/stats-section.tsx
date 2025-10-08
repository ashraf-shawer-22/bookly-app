import { Users, Building2, Star, Calendar } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Venues available",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Happy customers",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average rating",
  },
  {
    icon: Calendar,
    value: "50K+",
    label: "Events hosted",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 border-y bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
