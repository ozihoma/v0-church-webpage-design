import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Grace Community Church</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              A welcoming community of faith, hope, and love.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/livestream" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Livestream
                </Link>
              </li>
              <li>
                <Link href="/bible" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Bible
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Service Times</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Sunday Worship:</span> 9:00 AM & 11:00 AM
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Wednesday Bible Study:</span> 7:00 PM
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Youth Group:</span> Fridays at 6:30 PM
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">123 Faith Street, Anytown, USA 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">info@gracechurch.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Grace Community Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
