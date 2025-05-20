import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, BookOpenIcon, MessageSquareIcon } from "lucide-react"
import LivestreamPlayer from "@/components/livestream-player"
import UpcomingEvents from "@/components/upcoming-events"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Grace Community Church</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to our online home. Join us in worship, study, and community.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button asChild>
              <Link href="/livestream">Watch Live</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/community">Join Community</Link>
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sunday Service Livestream</CardTitle>
            <CardDescription>Join us for our weekly worship service</CardDescription>
          </CardHeader>
          <CardContent>
            <LivestreamPlayer />
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/livestream">View All Services</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpenIcon className="h-5 w-5" />
              Bible Study
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Access the Bible, study materials, and devotionals to deepen your faith journey.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/bible">Read the Bible</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquareIcon className="h-5 w-5" />
              Community Chat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Connect with other members, ask questions, and share your thoughts in our community chat.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/community">Join Chat</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Stay updated with upcoming services, prayer meetings, and community gatherings.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/events">View Calendar</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <UpcomingEvents />
      </section>
    </div>
  )
}
