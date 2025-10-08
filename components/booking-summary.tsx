"use client"

import { Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Venue } from "@/lib/venues-data"

interface BookingSummaryProps {
  venue: Venue
  selectedDate: Date | undefined
  guests: number
  onGuestsChange: (guests: number) => void
  onBook: () => void
}

export function BookingSummary({ venue, selectedDate, guests, onGuestsChange, onBook }: BookingSummaryProps) {
  return (
    <div className="bg-card border rounded-xl p-6 space-y-6">
      <div>
        <div className="text-3xl font-bold mb-1">${venue.price}</div>
        <div className="text-sm text-muted-foreground">per day</div>
      </div>

      <div className="space-y-4">
        {/* Date Display */}
        <div>
          <Label className="mb-2 block">Date</Label>
          <div className="flex items-center space-x-2 p-3 border rounded-lg bg-muted/50">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {selectedDate
                ? selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                : "Select a date"}
            </span>
          </div>
        </div>

        {/* Guests Input */}
        <div>
          <Label htmlFor="guests" className="mb-2 block">
            Number of guests
          </Label>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <Input
              id="guests"
              type="number"
              min={1}
              max={venue.capacity}
              value={guests}
              onChange={(e) => onGuestsChange(Number.parseInt(e.target.value) || 1)}
              className="flex-1"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1">Maximum capacity: {venue.capacity} guests</p>
        </div>
      </div>

      <div className="border-t pt-4 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Price per day</span>
          <span className="font-medium">${venue.price}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Service fee</span>
          <span className="font-medium">$0</span>
        </div>
        <div className="border-t pt-3 flex items-center justify-between">
          <span className="font-semibold">Total</span>
          <span className="text-2xl font-bold">${venue.price}</span>
        </div>
      </div>

      <Button onClick={onBook} className="w-full h-12 text-base" disabled={!selectedDate}>
        {selectedDate ? "Book Now" : "Select a date to book"}
      </Button>

      <p className="text-xs text-center text-muted-foreground">You won't be charged yet</p>
    </div>
  )
}
