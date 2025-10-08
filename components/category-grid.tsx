import Link from "next/link"
import { Building2, Briefcase, PartyPopper, Users } from "lucide-react"

const categories = [
  {
    id: "wedding-halls",
    name: "Wedding Halls",
    description: "Elegant spaces for your special day",
    icon: PartyPopper,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "conference-rooms",
    name: "Conference Rooms",
    description: "Professional meeting spaces",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "event-spaces",
    name: "Event Spaces",
    description: "Versatile venues for any occasion",
    icon: Building2,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "banquet-halls",
    name: "Banquet Halls",
    description: "Grand halls for large gatherings",
    icon: Users,
    color: "bg-emerald-100 text-emerald-600",
  },
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/venues?category=${category.id}`} className="group">
          <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${category.color} mb-4`}>
              <category.icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{category.name}</h3>
            <p className="text-muted-foreground text-sm">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
