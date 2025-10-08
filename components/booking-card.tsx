"use client"

import { useState } from "react"
import { MapPin, Calendar, Users, Trash2, Edit2, X, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import Link from "next/link"

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

interface BookingCardProps {
  booking: Booking
  onDelete: (bookingId: number) => void
  onUpdateDate: (bookingId: number, newDate: Date) => void
}

export function BookingCard({ booking, onDelete, onUpdateDate }: BookingCardProps) {
  const [isEditingDate, setIsEditingDate] = useState(false)
  const [newDate, setNewDate] = useState<Date | undefined>(new Date(booking.date))

  const bookingDate = new Date(booking.date)
  const isPast = bookingDate < new Date()

  const handleSaveDate = () => {
    if (newDate) {
      onUpdateDate(booking.id, newDate)
      setIsEditingDate(false)
    }
  }

  const handleDelete = () => {
    if (confirm("Are you sure you want to cancel this booking?")) {
      onDelete(booking.id)
    }
  }

  return (
    <div className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-64 h-48 md:h-auto flex-shrink-0">
          <Link href={`/venues/${booking.venueId}`}>
            <img
              src={booking.venueImage || "/placeholder.svg"}
              alt={booking.venueName}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Link href={`/venues/${booking.venueId}`}>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{booking.venueName}</h3>
              </Link>
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {booking.venueLocation}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {!isPast && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditingDate(!isEditingDate)}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Edit2 className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDelete}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {isEditingDate ? (
            <div className="mb-4 p-4 border rounded-lg bg-muted/50">
              <p className="text-sm font-medium mb-3">Select new date:</p>
              <CalendarComponent
                mode="single"
                selected={newDate}
                onSelect={setNewDate}
                disabled={(date) => date < new Date()}
                className="rounded-md"
              />
              <div className="flex items-center space-x-2 mt-4">
                <Button size="sm" onClick={handleSaveDate} disabled={!newDate}>
                  <Check className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button size="sm" variant="outline" onClick={() => setIsEditingDate(false)}>
                  <X className="h-4 w-4 mr-1" />
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Date</p>
                  <p className="text-sm font-medium">
                    {bookingDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Guests</p>
                  <p className="text-sm font-medium">{booking.guests} people</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total price</p>
                <p className="text-xl font-bold">${booking.price}</p>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-2">
              <div
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  isPast
                    ? "bg-muted text-muted-foreground"
                    : booking.status === "confirmed"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {isPast ? "Past Event" : booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Booked on {new Date(booking.bookedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
