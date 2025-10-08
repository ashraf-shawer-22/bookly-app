"use client"

import { use, useState } from "react"
import { notFound, useRouter } from "next/navigation"
import { venues } from "@/lib/venues-data"
import { MapPin, Star, Users, Check, ArrowLeft } from "lucide-react"
import { BookingCalendar } from "@/components/booking-calendar"
import { BookingSummary } from "@/components/booking-summary"
import Link from "next/link"

interface PageProps {
  params: Promise<{ id: string }>
}

export default function VenueDetailsPage({ params }: PageProps) {
  const { id } = use(params)
  const router = useRouter()
  const venue = venues.find((v) => v.id === Number.parseInt(id))

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [guests, setGuests] = useState(50)

  if (!venue) {
    notFound()
  }

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a date for your booking")
      return
    }

    // Create booking object
    const booking = {
      id: Date.now(),
      venueId: venue.id,
      venueName: venue.name,
      venueImage: venue.image,
      venueLocation: venue.location,
      date: selectedDate.toISOString(),
      guests,
      price: venue.price,
      status: "confirmed",
      bookedAt: new Date().toISOString(),
    }

    // Get existing bookings from localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]")

    // Add new booking
    existingBookings.push(booking)

    // Save to localStorage
    localStorage.setItem("bookings", JSON.stringify(existingBookings))

    // Redirect to bookings page
    router.push("/bookings")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/venues" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to venues
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img src={venue.image || "/placeholder.svg"} alt={venue.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-card px-4 py-2 rounded-full text-sm font-semibold">
                {venue.category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </div>
            </div>

            {/* Venue Info */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{venue.name}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-semibold">{venue.rating}</span>
                  <span className="text-muted-foreground ml-1">({venue.reviews} reviews)</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-1" />
                  {venue.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-5 w-5 mr-1" />
                  Up to {venue.capacity} guests
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{venue.description}</p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">What this venue offers</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {venue.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Select your date</h2>
              <BookingCalendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingSummary
                venue={venue}
                selectedDate={selectedDate}
                guests={guests}
                onGuestsChange={setGuests}
                onBook={handleBooking}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
