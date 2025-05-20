import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LivestreamPlayer from "@/components/livestream-player"
import { CalendarIcon, Clock } from "lucide-react"

export default function LivestreamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Church Livestream</h1>

        <Tabs defaultValue="live" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="live">Live Now</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Services</TabsTrigger>
          </TabsList>
          <TabsContent value="live" className="pt-6">
            <LivestreamPlayer />

            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Sunday Worship Service</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Join us for our weekly worship service led by Pastor John Smith. Today's sermon focuses on finding peace
                in troubled times.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-gray-500" />
                  <span>May 26, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span>9:00 AM - 10:30 AM</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button>Download Sermon Notes</Button>
                <Button variant="outline">Share</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="upcoming" className="pt-6">
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Sunday Worship Service</h3>
                    <p className="text-gray-600 dark:text-gray-400">Pastor John Smith</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <span>June 2, 2025</span>
                    <Clock className="h-5 w-5 text-gray-500 ml-2" />
                    <span>9:00 AM</span>
                  </div>
                </div>
                <p className="mb-4">
                  Join us for our weekly worship service. This week's sermon will focus on "Faith in Action" from the
                  Book of James.
                </p>
                <Button variant="outline">Set Reminder</Button>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Midweek Prayer Service</h3>
                    <p className="text-gray-600 dark:text-gray-400">Pastor Sarah Johnson</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <span>May 29, 2025</span>
                    <Clock className="h-5 w-5 text-gray-500 ml-2" />
                    <span>7:00 PM</span>
                  </div>
                </div>
                <p className="mb-4">
                  A time of prayer, worship, and fellowship in the middle of the week to refresh your spirit.
                </p>
                <Button variant="outline">Set Reminder</Button>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Special Guest Speaker</h3>
                    <p className="text-gray-600 dark:text-gray-400">Dr. Michael Roberts</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-gray-500" />
                    <span>June 9, 2025</span>
                    <Clock className="h-5 w-5 text-gray-500 ml-2" />
                    <span>9:00 AM</span>
                  </div>
                </div>
                <p className="mb-4">
                  We're excited to welcome Dr. Michael Roberts, author of "Living Faith Daily," for a special message on
                  spiritual growth.
                </p>
                <Button variant="outline">Set Reminder</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
