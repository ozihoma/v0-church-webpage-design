"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, MessageSquare, Users, PlusCircle, Heart, Reply, Flag } from "lucide-react"

// Sample data for demonstration
const sampleUsers = [
  { id: 1, name: "John Smith", role: "Pastor", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Sarah Johnson", role: "Youth Leader", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Michael Brown", role: "Elder", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Emily Davis", role: "Worship Leader", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "David Wilson", role: "Member", avatar: "/placeholder.svg?height=40&width=40" },
]

const sampleMessages = [
  {
    id: 1,
    user: sampleUsers[0],
    content:
      "Welcome to our church community chat! This is a place for fellowship, prayer requests, and discussions about our faith journey.",
    timestamp: "10:30 AM",
    likes: 5,
    replies: [
      {
        id: 101,
        user: sampleUsers[1],
        content: "Thank you, Pastor! I'm excited to connect with everyone here.",
        timestamp: "10:35 AM",
      },
      {
        id: 102,
        user: sampleUsers[4],
        content: "This is such a blessing to have this online community.",
        timestamp: "10:40 AM",
      },
    ],
  },
  {
    id: 2,
    user: sampleUsers[2],
    content:
      "Prayer request: Please pray for my mother who is recovering from surgery. She's doing well but could use our prayers for a speedy recovery.",
    timestamp: "11:15 AM",
    likes: 8,
    replies: [
      {
        id: 201,
        user: sampleUsers[0],
        content: "We'll definitely keep her in our prayers, Michael.",
        timestamp: "11:20 AM",
      },
    ],
  },
  {
    id: 3,
    user: sampleUsers[3],
    content:
      "Reminder: Choir practice is this Thursday at 7 PM. We'll be learning new songs for next Sunday's service!",
    timestamp: "12:05 PM",
    likes: 3,
    replies: [],
  },
]

const sampleGroups = [
  {
    id: 1,
    name: "Prayer Warriors",
    members: 24,
    description: "A group dedicated to praying for our church and community needs.",
  },
  { id: 2, name: "Bible Study", members: 18, description: "Weekly discussions on our current Bible study topics." },
  { id: 3, name: "Youth Group", members: 32, description: "For teenagers and young adults in our church community." },
  { id: 4, name: "Worship Team", members: 12, description: "For members of our worship and music ministry." },
  {
    id: 5,
    name: "Outreach Committee",
    members: 15,
    description: "Planning and coordinating our community outreach efforts.",
  },
]

export default function CommunityPage() {
  const [messages, setMessages] = useState(sampleMessages)
  const [newMessage, setNewMessage] = useState("")
  const [activeTab, setActiveTab] = useState("chat")
  const [expandedMessage, setExpandedMessage] = useState<number | null>(null)
  const [replyText, setReplyText] = useState("")

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (activeTab === "chat") {
      scrollToBottom()
    }
  }, [messages, activeTab])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim() === "") return

    const newMsg = {
      id: messages.length + 1,
      user: sampleUsers[4], // Using a sample user for demonstration
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      likes: 0,
      replies: [],
    }

    setMessages([...messages, newMsg])
    setNewMessage("")
  }

  const handleReply = (messageId: number) => {
    if (replyText.trim() === "") return

    const updatedMessages = messages.map((msg) => {
      if (msg.id === messageId) {
        return {
          ...msg,
          replies: [
            ...msg.replies,
            {
              id: Math.random() * 1000,
              user: sampleUsers[4], // Using a sample user for demonstration
              content: replyText,
              timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
          ],
        }
      }
      return msg
    })

    setMessages(updatedMessages)
    setReplyText("")
    setExpandedMessage(null)
  }

  const toggleLike = (messageId: number) => {
    const updatedMessages = messages.map((msg) => {
      if (msg.id === messageId) {
        return {
          ...msg,
          likes: msg.likes + 1,
        }
      }
      return msg
    })

    setMessages(updatedMessages)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Church Community</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="chat" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="groups" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Groups
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="pt-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-primary-foreground p-4 border-b">
              <h2 className="font-bold text-lg">Community Chat</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Connect with church members, share prayer requests, and discuss faith topics
              </p>
            </div>

            <div className="h-[500px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="space-y-2">
                  <div className="flex gap-3">
                    <Avatar>
                      <AvatarImage src={message.user.avatar || "/placeholder.svg"} alt={message.user.name} />
                      <AvatarFallback>{message.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold">{message.user.name}</span>
                        <span className="text-xs text-gray-500">{message.user.role}</span>
                        <span className="text-xs text-gray-500 ml-auto">{message.timestamp}</span>
                      </div>
                      <p className="mt-1">{message.content}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <button
                          className="text-xs flex items-center gap-1 text-gray-500 hover:text-primary"
                          onClick={() => toggleLike(message.id)}
                        >
                          <Heart className="h-3 w-3" /> {message.likes}
                        </button>
                        <button
                          className="text-xs flex items-center gap-1 text-gray-500 hover:text-primary"
                          onClick={() => setExpandedMessage(expandedMessage === message.id ? null : message.id)}
                        >
                          <Reply className="h-3 w-3" /> Reply
                        </button>
                        <button className="text-xs flex items-center gap-1 text-gray-500 hover:text-primary">
                          <Flag className="h-3 w-3" /> Report
                        </button>
                      </div>

                      {message.replies.length > 0 && (
                        <div className="ml-6 mt-3 space-y-3 border-l-2 pl-3">
                          {message.replies.map((reply) => (
                            <div key={reply.id} className="flex gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={reply.user.avatar || "/placeholder.svg"} alt={reply.user.name} />
                                <AvatarFallback>{reply.user.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-baseline gap-2">
                                  <span className="font-semibold text-sm">{reply.user.name}</span>
                                  <span className="text-xs text-gray-500">{reply.timestamp}</span>
                                </div>
                                <p className="text-sm mt-1">{reply.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {expandedMessage === message.id && (
                        <div className="mt-3">
                          <div className="flex gap-2">
                            <Textarea
                              placeholder="Write a reply..."
                              className="min-h-[80px]"
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                            />
                          </div>
                          <div className="flex justify-end gap-2 mt-2">
                            <Button variant="outline" size="sm" onClick={() => setExpandedMessage(null)}>
                              Cancel
                            </Button>
                            <Button size="sm" onClick={() => handleReply(message.id)}>
                              Reply
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Textarea
                  placeholder="Type your message..."
                  className="min-h-[80px]"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button type="submit" className="self-end">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </form>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="groups" className="pt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Community Groups</h2>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              Create Group
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sampleGroups.map((group) => (
              <Card key={group.id}>
                <CardHeader>
                  <CardTitle>{group.name}</CardTitle>
                  <CardDescription>{group.members} members</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{group.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Join Group
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
