"use client"

import { useState, useEffect } from "react"
import { BookingCard } from "@/components/booking-card"
import { Calendar, Package } from "lucide-react"

interface Booking {
  id: number
  venueId: number
  venueName: string
  venueImage: string
  venueLocation: string
  date: string
  guests: number
  price: number
  status: string
  bookedAt: string
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load bookings from localStorage
    const storedBookings = localStorage.getItem("bookings")
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings))
    }
    setLoading(false)
  }, [])

  const handleDeleteBooking = (bookingId: number) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== bookingId)
    setBookings(updatedBookings)
    localStorage.setItem("bookings", JSON.stringify(updatedBookings))
  }

  const handleUpdateDate = (bookingId: number, newDate: Date) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === bookingId ? { ...booking, date: newDate.toISOString() } : booking,
    )
    setBookings(updatedBookings)
    localStorage.setItem("bookings", JSON.stringify(updatedBookings))
  }

  const totalCost = bookings.reduce((sum, booking) => sum + booking.price, 0)

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your bookings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Bookings</h1>
          <p className="text-muted-foreground">Manage your venue reservations</p>
        </div>

        {bookings.length === 0 ? (
          // Empty State
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <Package className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">No bookings yet</h2>
            <p className="text-muted-foreground mb-6">Start exploring venues and make your first booking!</p>
            <a
              href="/venues"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Browse Venues
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bookings List */}
            <div className="lg:col-span-2 space-y-6">
              {bookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  onDelete={handleDeleteBooking}
                  onUpdateDate={handleUpdateDate}
                />
              ))}
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border rounded-xl p-6 space-y-6">
                <h2 className="text-xl font-semibold">Booking Summary</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total bookings</span>
                    <span className="font-semibold">{bookings.length}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Upcoming events</span>
                    <span className="font-semibold">
                      {bookings.filter((b) => new Date(b.date) >= new Date()).length}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Past events</span>
                    <span className="font-semibold">
                      {bookings.filter((b) => new Date(b.date) < new Date()).length}
                    </span>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <span className="font-semibold">Total cost</span>
                    <span className="text-2xl font-bold">${totalCost.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-start space-x-3 text-sm">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Need to make changes?</p>
                      <p className="text-muted-foreground text-xs">
                        You can update the date or cancel any booking directly from the booking card.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
