import Link from "next/link"
import { MapPin, Star } from "lucide-react"

const featuredVenues = [
  {
    id: 1,
    name: "Grand Palace Hall",
    location: "Downtown, Riyadh",
    price: 5000,
    rating: 4.9,
    reviews: 124,
    capacity: 500,
    image: "/elegant-wedding-hall-interior.jpg",
    category: "Wedding Halls",
  },
  {
    id: 2,
    name: "Executive Conference Center",
    location: "Business District, Jeddah",
    price: 2500,
    rating: 4.8,
    reviews: 89,
    capacity: 200,
    image: "/modern-conference-room.png",
    category: "Conference Rooms",
  },
  {
    id: 3,
    name: "Crystal Ballroom",
    location: "Al Khobar",
    price: 4000,
    rating: 5.0,
    reviews: 156,
    capacity: 400,
    image: "/luxury-ballroom-chandelier.jpg",
    category: "Banquet Halls",
  },
  {
    id: 4,
    name: "Garden Event Space",
    location: "Dammam",
    price: 3500,
    rating: 4.7,
    reviews: 92,
    capacity: 300,
    image: "/outdoor-garden-event-space.jpg",
    category: "Event Spaces",
  },
]

export function FeaturedVenues() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredVenues.map((venue) => (
        <Link key={venue.id} href={`/venues/${venue.id}`} className="group">
          <div className="bg-card rounded-xl overflow-hidden border hover:shadow-xl transition-all">
            <div className="relative h-48 overflow-hidden">
              <img
                src={venue.image || "/placeholder.svg"}
                alt={venue.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-card px-3 py-1 rounded-full text-sm font-semibold">
                {venue.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{venue.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                {venue.location}
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-semibold">{venue.rating}</span>
                  <span className="text-muted-foreground text-sm ml-1">({venue.reviews})</span>
                </div>
                <div className="text-sm text-muted-foreground">Up to {venue.capacity} guests</div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t">
                <div>
                  <span className="text-2xl font-bold">${venue.price}</span>
                  <span className="text-muted-foreground text-sm">/day</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
