export interface Venue {
  id: number
  name: string
  location: string
  city: string
  price: number
  rating: number
  reviews: number
  capacity: number
  image: string
  category: string
  description: string
  amenities: string[]
  available: boolean
}

export const venues: Venue[] = [
  {
    id: 1,
    name: "Grand Palace Hall",
    location: "Downtown, Riyadh",
    city: "Riyadh",
    price: 5000,
    rating: 4.9,
    reviews: 124,
    capacity: 500,
    image: "/elegant-wedding-hall-interior-chandelier.jpg",
    category: "wedding-halls",
    description:
      "An elegant and spacious wedding hall featuring crystal chandeliers, marble floors, and state-of-the-art lighting systems. Perfect for grand celebrations.",
    amenities: ["Parking", "Catering", "Sound System", "Lighting", "AC", "Stage", "Bridal Room"],
    available: true,
  },
  {
    id: 2,
    name: "Executive Conference Center",
    location: "Business District, Jeddah",
    city: "Jeddah",
    price: 2500,
    rating: 4.8,
    reviews: 89,
    capacity: 200,
    image: "/modern-conference-room-presentation.jpg",
    category: "conference-rooms",
    description:
      "Modern conference facility with advanced AV equipment, high-speed internet, and professional ambiance. Ideal for corporate events and meetings.",
    amenities: ["WiFi", "Projector", "Whiteboard", "Coffee Service", "AC", "Parking"],
    available: true,
  },
  {
    id: 3,
    name: "Crystal Ballroom",
    location: "Al Khobar",
    city: "Al Khobar",
    price: 4000,
    rating: 5.0,
    reviews: 156,
    capacity: 400,
    image: "/luxury-ballroom-crystal-chandelier.jpg",
    category: "banquet-halls",
    description:
      "Luxurious ballroom with stunning crystal chandeliers and elegant decor. Perfect for upscale events and celebrations.",
    amenities: ["Valet Parking", "Premium Catering", "Sound System", "Lighting", "AC", "Dance Floor"],
    available: true,
  },
  {
    id: 4,
    name: "Garden Event Space",
    location: "Dammam",
    city: "Dammam",
    price: 3500,
    rating: 4.7,
    reviews: 92,
    capacity: 300,
    image: "/outdoor-garden-event-space-lights.jpg",
    category: "event-spaces",
    description:
      "Beautiful outdoor garden venue with lush greenery and ambient lighting. Perfect for daytime and evening events.",
    amenities: ["Outdoor Seating", "Catering", "Sound System", "Lighting", "Parking", "Garden"],
    available: true,
  },
  {
    id: 5,
    name: "Royal Banquet Hall",
    location: "Makkah Road, Riyadh",
    city: "Riyadh",
    price: 6000,
    rating: 4.9,
    reviews: 203,
    capacity: 600,
    image: "/royal-banquet-hall-gold-decor.jpg",
    category: "banquet-halls",
    description:
      "Grand banquet hall with royal decor and exceptional service. Accommodates large gatherings with style.",
    amenities: ["Valet Parking", "Full Catering", "Sound System", "Lighting", "AC", "Stage", "VIP Lounge"],
    available: true,
  },
  {
    id: 6,
    name: "Tech Hub Meeting Room",
    location: "KAEC, Jeddah",
    city: "Jeddah",
    price: 1500,
    rating: 4.6,
    reviews: 67,
    capacity: 100,
    image: "/modern-tech-meeting-room.jpg",
    category: "conference-rooms",
    description: "Contemporary meeting space with cutting-edge technology and flexible seating arrangements.",
    amenities: ["High-Speed WiFi", "Video Conferencing", "Projector", "Whiteboard", "Coffee", "AC"],
    available: true,
  },
  {
    id: 7,
    name: "Seaside Wedding Venue",
    location: "Corniche, Jeddah",
    city: "Jeddah",
    price: 7000,
    rating: 5.0,
    reviews: 178,
    capacity: 400,
    image: "/seaside-wedding-venue-sunset.jpg",
    category: "wedding-halls",
    description: "Breathtaking seaside venue with panoramic ocean views. Create unforgettable memories by the water.",
    amenities: [
      "Ocean View",
      "Outdoor & Indoor",
      "Catering",
      "Sound System",
      "Lighting",
      "Parking",
      "Photography Area",
    ],
    available: true,
  },
  {
    id: 8,
    name: "Innovation Center",
    location: "King Abdullah Economic City",
    city: "KAEC",
    price: 3000,
    rating: 4.8,
    reviews: 94,
    capacity: 250,
    image: "/innovation-center-modern-space.jpg",
    category: "event-spaces",
    description:
      "Versatile event space designed for innovation and creativity. Perfect for product launches and exhibitions.",
    amenities: ["WiFi", "AV Equipment", "Flexible Layout", "Catering Area", "AC", "Parking"],
    available: true,
  },
]
