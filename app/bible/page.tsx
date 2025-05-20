"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Search, ChevronLeft, ChevronRight, Bookmark } from "lucide-react"

// In a real application, this would come from an API or database
const bibleBooks = [
  { id: "genesis", name: "Genesis", chapters: 50 },
  { id: "exodus", name: "Exodus", chapters: 40 },
  { id: "leviticus", name: "Leviticus", chapters: 27 },
  { id: "numbers", name: "Numbers", chapters: 36 },
  { id: "deuteronomy", name: "Deuteronomy", chapters: 34 },
  { id: "matthew", name: "Matthew", chapters: 28 },
  { id: "mark", name: "Mark", chapters: 16 },
  { id: "luke", name: "Luke", chapters: 24 },
  { id: "john", name: "John", chapters: 21 },
  { id: "acts", name: "Acts", chapters: 28 },
]

// Sample verse content for demonstration
const sampleVerses = {
  "john-3-16":
    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
  "psalm-23-1": "The LORD is my shepherd, I lack nothing.",
  "romans-8-28":
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
  "philippians-4-13": "I can do all this through him who gives me strength.",
  "jeremiah-29-11":
    'For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future.',
}

export default function BiblePage() {
  const [selectedBook, setSelectedBook] = useState("john")
  const [selectedChapter, setSelectedChapter] = useState("3")
  const [searchQuery, setSearchQuery] = useState("")
  const [bookmarked, setBookmarked] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would search the Bible API
    console.log("Searching for:", searchQuery)
  }

  const toggleBookmark = () => {
    setBookmarked(!bookmarked)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <BookOpen className="h-8 w-8" />
        Bible Reader
      </h1>

      <Tabs defaultValue="read" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="read">Read</TabsTrigger>
          <TabsTrigger value="search">Search</TabsTrigger>
        </TabsList>

        <TabsContent value="read" className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4 space-y-4">
              <div>
                <label htmlFor="book" className="block text-sm font-medium mb-1">
                  Book
                </label>
                <Select value={selectedBook} onValueChange={setSelectedBook}>
                  <SelectTrigger id="book">
                    <SelectValue placeholder="Select a book" />
                  </SelectTrigger>
                  <SelectContent>
                    {bibleBooks.map((book) => (
                      <SelectItem key={book.id} value={book.id}>
                        {book.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="chapter" className="block text-sm font-medium mb-1">
                  Chapter
                </label>
                <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                  <SelectTrigger id="chapter">
                    <SelectValue placeholder="Select a chapter" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: bibleBooks.find((b) => b.id === selectedBook)?.chapters || 0 }, (_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">Recent Readings</h3>
                <ul className="space-y-2">
                  <li>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left"
                      onClick={() => {
                        setSelectedBook("john")
                        setSelectedChapter("3")
                      }}
                    >
                      John 3
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left"
                      onClick={() => {
                        setSelectedBook("psalm")
                        setSelectedChapter("23")
                      }}
                    >
                      Psalm 23
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-left"
                      onClick={() => {
                        setSelectedBook("romans")
                        setSelectedChapter("8")
                      }}
                    >
                      Romans 8
                    </Button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-3/4">
              <div className="bg-primary-foreground rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">
                    {bibleBooks.find((b) => b.id === selectedBook)?.name || "John"} {selectedChapter}
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleBookmark}
                      className={bookmarked ? "text-yellow-500" : ""}
                    >
                      <Bookmark className="h-5 w-5" />
                    </Button>
                    <div className="flex">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-r-none"
                        onClick={() => {
                          const currentChapter = Number.parseInt(selectedChapter)
                          if (currentChapter > 1) {
                            setSelectedChapter((currentChapter - 1).toString())
                          }
                        }}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-l-none"
                        onClick={() => {
                          const currentChapter = Number.parseInt(selectedChapter)
                          const maxChapters = bibleBooks.find((b) => b.id === selectedBook)?.chapters || 0
                          if (currentChapter < maxChapters) {
                            setSelectedChapter((currentChapter + 1).toString())
                          }
                        }}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  {/* In a real application, this would come from a Bible API */}
                  <p className="text-lg leading-relaxed">
                    <span className="font-bold">16</span> {sampleVerses["john-3-16"]}
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    <span className="font-bold">17</span> For God did not send his Son into the world to condemn the
                    world, but to save the world through him.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    <span className="font-bold">18</span> Whoever believes in him is not condemned, but whoever does not
                    believe stands condemned already because they have not believed in the name of God's one and only
                    Son.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    <span className="font-bold">19</span> This is the verdict: Light has come into the world, but people
                    loved darkness instead of light because their deeds were evil.
                  </p>
                  <p className="text-lg leading-relaxed mt-4">
                    <span className="font-bold">20</span> Everyone who does evil hates the light, and will not come into
                    the light for fear that their deeds will be exposed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="search" className="pt-6">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Search the Bible..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">John 3:16</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedBook("john")
                    setSelectedChapter("3")
                  }}
                >
                  Read Chapter
                </Button>
              </div>
              <p>{sampleVerses["john-3-16"]}</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">Psalm 23:1</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedBook("psalm")
                    setSelectedChapter("23")
                  }}
                >
                  Read Chapter
                </Button>
              </div>
              <p>{sampleVerses["psalm-23-1"]}</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">Romans 8:28</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedBook("romans")
                    setSelectedChapter("8")
                  }}
                >
                  Read Chapter
                </Button>
              </div>
              <p>{sampleVerses["romans-8-28"]}</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">Philippians 4:13</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedBook("philippians")
                    setSelectedChapter("4")
                  }}
                >
                  Read Chapter
                </Button>
              </div>
              <p>{sampleVerses["philippians-4-13"]}</p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">Jeremiah 29:11</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedBook("jeremiah")
                    setSelectedChapter("29")
                  }}
                >
                  Read Chapter
                </Button>
              </div>
              <p>{sampleVerses["jeremiah-29-11"]}</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
