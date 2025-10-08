"use client"

import { Calendar } from "@/components/ui/calendar"

interface BookingCalendarProps {
  selectedDate: Date | undefined
  onSelectDate: (date: Date | undefined) => void
}

export function BookingCalendar({ selectedDate, onSelectDate }: BookingCalendarProps) {
  return (
    <div className="bg-card border rounded-xl p-6">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onSelectDate}
        disabled={(date) => date < new Date()}
        className="rounded-md"
      />
      {selectedDate && (
        <div className="mt-4 p-3 bg-primary/10 rounded-lg">
          <p className="text-sm font-medium">
            Selected date:{" "}
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      )}
    </div>
  )
}
