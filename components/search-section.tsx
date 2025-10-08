"use client"

import { useState } from "react"
import { Search, MapPin, Calendar, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export function SearchSection() {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (location) params.set("location", location)
    if (date) params.set("date", date)
    if (category) params.set("category", category)

    router.push(`/venues?${params.toString()}`)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-card rounded-2xl shadow-xl border p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <div className="relative">
            <label className="text-sm font-medium mb-2 block">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="City or area"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Date */}
          <div className="relative">
            <label className="text-sm font-medium mb-2 block">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="pl-10" />
            </div>
          </div>

          {/* Category */}
          <div className="relative">
            <label className="text-sm font-medium mb-2 block">Category</label>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">All categories</option>
                <option value="wedding-halls">Wedding Halls</option>
                <option value="conference-rooms">Conference Rooms</option>
                <option value="event-spaces">Event Spaces</option>
                <option value="banquet-halls">Banquet Halls</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <Button onClick={handleSearch} className="w-full h-10 bg-primary hover:bg-primary/90">
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
