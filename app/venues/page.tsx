"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { VenueCard } from "@/components/venue-card"
import { VenueFilters } from "@/components/venue-filters"
import { venues } from "@/lib/venues-data"
import { SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VenuesPage() {
  const searchParams = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "")
  const [selectedCity, setSelectedCity] = useState(searchParams.get("location") || "")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000])
  const [minCapacity, setMinCapacity] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")

  // Filter and sort venues
  const filteredVenues = useMemo(() => {
    const filtered = venues.filter((venue) => {
      // Category filter
      if (selectedCategory && venue.category !== selectedCategory) return false

      // City filter
      if (selectedCity && !venue.city.toLowerCase().includes(selectedCity.toLowerCase())) return false

      // Price range filter
      if (venue.price < priceRange[0] || venue.price > priceRange[1]) return false

      // Capacity filter
      if (venue.capacity < minCapacity) return false

      // Search query
      if (searchQuery && !venue.name.toLowerCase().includes(searchQuery.toLowerCase())) return false

      return true
    })

    // Sort venues
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "capacity":
        filtered.sort((a, b) => b.capacity - a.capacity)
        break
      default:
        // Featured (default order)
        break
    }

    return filtered
  }, [selectedCategory, selectedCity, priceRange, minCapacity, searchQuery, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Browse Venues</h1>
          <p className="text-muted-foreground">
            {filteredVenues.length} {filteredVenues.length === 1 ? "venue" : "venues"} available
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <VenueFilters
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minCapacity={minCapacity}
                setMinCapacity={setMinCapacity}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full mb-4">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>

            {showFilters && (
              <div className="mb-6 p-4 border rounded-lg bg-card">
                <VenueFilters
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedCity={selectedCity}
                  setSelectedCity={setSelectedCity}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  minCapacity={minCapacity}
                  setMinCapacity={setMinCapacity}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-muted-foreground">Showing {filteredVenues.length} results</div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="capacity">Largest Capacity</option>
                </select>
              </div>
            </div>

            {/* Venues Grid */}
            {filteredVenues.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredVenues.map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">No venues found</p>
                <p className="text-sm text-muted-foreground">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
