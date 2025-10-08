import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Venue Not Found</h2>
        <p className="text-muted-foreground">The venue you're looking for doesn't exist.</p>
        <Link href="/venues">
          <Button>Browse All Venues</Button>
        </Link>
      </div>
    </div>
  )
}
