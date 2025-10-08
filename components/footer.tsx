import Link from "next/link"
import { Calendar, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
                <Calendar className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold">Bookly</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted platform for booking the perfect venue for any occasion.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/venues" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Venues
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="text-muted-foreground hover:text-primary transition-colors">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/venues?category=wedding-halls"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Wedding Halls
                </Link>
              </li>
              <li>
                <Link
                  href="/venues?category=conference-rooms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Conference Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/venues?category=event-spaces"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Event Spaces
                </Link>
              </li>
              <li>
                <Link
                  href="/venues?category=banquet-halls"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Banquet Halls
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bookly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
