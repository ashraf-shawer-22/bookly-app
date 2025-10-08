import { SearchSection } from "@/components/search-section"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedVenues } from "@/components/featured-venues"
import { StatsSection } from "@/components/stats-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-muted to-background pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Find and book your perfect venue</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Discover amazing event spaces, halls, and venues for your special occasions. Book instantly with
              transparent pricing.
            </p>
          </div>

          <SearchSection />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by category</h2>
            <p className="text-muted-foreground text-lg">Find the perfect space for any occasion</p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured venues</h2>
              <p className="text-muted-foreground text-lg">Popular choices for your events</p>
            </div>
          </div>
          <FeaturedVenues />
        </div>
      </section>
    </main>
  )
}
