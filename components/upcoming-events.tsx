import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, MapPin } from "lucide-react"
import Link from "next/link"

// In a real application, this would come from a database or API
const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    description: "Join us for our weekly worship service with Pastor John Smith.",
    date: "May 26, 2025",
    time: "9:00 AM - 10:30 AM",
    location: "Main Sanctuary",
  },
  {
    id: 2,
    title: "Bible Study Group",
    description: "Weekly Bible study focusing on the Book of Romans.",
    date: "May 28, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "Fellowship Hall",
  },
  {
    id: 3,
    title: "Youth Group Meeting",
    description: "Fun, fellowship, and faith development for teens.",
    date: "May 30, 2025",
    time: "6:30 PM - 8:00 PM",
    location: "Youth Center",
  },
]

export default function UpcomingEvents() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {events.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
            <CardDescription>{event.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{event.location}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href={`/events/${event.id}`}>Learn More</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
