"use client"

import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface VenueFiltersProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedCity: string
  setSelectedCity: (city: string) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  minCapacity: number
  setMinCapacity: (capacity: number) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const categories = [
  { id: "", label: "All Categories" },
  { id: "wedding-halls", label: "Wedding Halls" },
  { id: "conference-rooms", label: "Conference Rooms" },
  { id: "event-spaces", label: "Event Spaces" },
  { id: "banquet-halls", label: "Banquet Halls" },
]

const cities = [
  { id: "", label: "All Cities" },
  { id: "Riyadh", label: "Riyadh" },
  { id: "Jeddah", label: "Jeddah" },
  { id: "Dammam", label: "Dammam" },
  { id: "Al Khobar", label: "Al Khobar" },
  { id: "KAEC", label: "KAEC" },
]

export function VenueFilters({
  selectedCategory,
  setSelectedCategory,
  selectedCity,
  setSelectedCity,
  priceRange,
  setPriceRange,
  minCapacity,
  setMinCapacity,
  searchQuery,
  setSearchQuery,
}: VenueFiltersProps) {
  const handleReset = () => {
    setSelectedCategory("")
    setSelectedCity("")
    setPriceRange([0, 10000])
    setMinCapacity(0)
    setSearchQuery("")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={handleReset}>
          <X className="h-4 w-4 mr-1" />
          Clear
        </Button>
      </div>

      {/* Search */}
      <div className="space-y-2">
        <Label>Search by name</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search venues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label>Category</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm">{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* City */}
      <div className="space-y-2">
        <Label>City</Label>
        <div className="space-y-2">
          {cities.map((city) => (
            <label key={city.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="city"
                value={city.id}
                checked={selectedCity === city.id}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm">{city.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Price Range</Label>
          <span className="text-sm text-muted-foreground">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          min={0}
          max={10000}
          step={500}
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          className="w-full"
        />
      </div>

      {/* Capacity */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Minimum Capacity</Label>
          <span className="text-sm text-muted-foreground">{minCapacity} guests</span>
        </div>
        <Slider
          min={0}
          max={600}
          step={50}
          value={[minCapacity]}
          onValueChange={(value) => setMinCapacity(value[0])}
          className="w-full"
        />
      </div>
    </div>
  )
}
