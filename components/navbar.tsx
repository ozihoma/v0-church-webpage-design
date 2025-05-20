"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Grace Church
          </Link>

          {isMobile ? (
            <>
              <div className="flex items-center gap-2">
                <ModeToggle />
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
              {isMenuOpen && (
                <div className="fixed inset-0 top-[65px] z-50 bg-background">
                  <div className="flex flex-col p-4 space-y-4">
                    <Link href="/" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                      Home
                    </Link>
                    <Link href="/livestream" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                      Livestream
                    </Link>
                    <Link href="/bible" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                      Bible
                    </Link>
                    <Link href="/community" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                      Community
                    </Link>
                    <Link href="/events" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                      Events
                    </Link>
                    <Link href="/about" onClick={toggleMenu} className="px-4 py-2 hover:bg-accent rounded-md">
                      About
                    </Link>
                    <Button className="w-full">Donate</Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center gap-6">
              <div className="flex items-center space-x-6">
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center hover:text-primary">
                    Worship <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/livestream">Livestream</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/sermons">Past Sermons</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/bible" className="hover:text-primary">
                  Bible
                </Link>
                <Link href="/community" className="hover:text-primary">
                  Community
                </Link>
                <Link href="/events" className="hover:text-primary">
                  Events
                </Link>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <ModeToggle />
                <Button>Donate</Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
