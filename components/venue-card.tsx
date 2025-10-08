import Link from "next/link"
import { MapPin, Star, Users } from "lucide-react"
import type { Venue } from "@/lib/venues-data"
import { Button } from "@/components/ui/button"

interface VenueCardProps {
  venue: Venue
}

export function VenueCard({ venue }: VenueCardProps) {
  return (
    <Link href={`/venues/${venue.id}`} className="group">
      <div className="bg-card rounded-xl overflow-hidden border hover:shadow-xl transition-all">
        <div className="relative h-56 overflow-hidden">
          <img
            src={venue.image || "/placeholder.svg"}
            alt={venue.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 bg-card px-3 py-1 rounded-full text-xs font-semibold">
            {venue.category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </div>
          {venue.available && (
            <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Available
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{venue.name}</h3>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            {venue.location}
          </div>

          <div className="flex items-center justify-between mb-4 pb-4 border-b">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="font-semibold">{venue.rating}</span>
              <span className="text-muted-foreground text-sm ml-1">({venue.reviews})</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              Up to {venue.capacity}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">${venue.price}</span>
              <span className="text-muted-foreground text-sm">/day</span>
            </div>
            <Button size="sm" className="group-hover:bg-primary/90">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
