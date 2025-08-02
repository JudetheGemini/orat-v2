"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Zap, Code, Cpu, Globe } from "lucide-react"
import Image from "next/image"
import InnovativeSchedule from "@/components/innovative-schedule"
import { motion } from "framer-motion"


const speakers = [
  {
    id: 1,
    name: "Somto Mbelu",
    title: "Founder",
    company: "Ottawa Responsible AI Hub",
    talk: "Welcome Remarks - Land Acknowledgment and appreciation for partners and attendees",
    time: "05:00 – 05:10",
    bio: "Founder of Ottawa Responsible AI Hub, dedicated to fostering responsible AI development and implementation in the Ottawa community.",
    image: "/placeholder.svg?height=400&width=400",
    expertise: ["AI Ethics", "Community Building", "Leadership"],
  },
  {
    id: 2,
    name: "Remsy Schmilinsky",
    title: "Creator",
    company: "ORBIT Open-Source AI Platform",
    talk: "Democratizing AI: Building Open Tools for Public Impact",
    time: "05:10 – 05:30",
    bio: "Creator of the ORBIT Open-Source AI Platform, passionate about making AI accessible and beneficial for public good through open-source tools and community-driven development.",
    image: "/speaker3.jpg",
    expertise: ["Open Source", "AI Democratization", "Public Impact"],
  },
  {
    id: 3,
    name: "Neil Kothary",
    title: "Founder",
    company: "Online Safety and Literacy Projects",
    talk: "The Great Internet Mess – A Child Safety App for the Digital Age",
    time: "05:30 - 05:50",
    bio: "Founder of Online Safety and Literacy Projects, dedicated to creating innovative solutions for child safety in digital environments and promoting digital literacy.",
    image: "/speaker4.jpg",
    expertise: ["Child Safety", "Digital Literacy", "App Development"],
  },
  {
    id: 4,
    name: "Luc Lalande (路客)",
    title: "Innovator-in-Residence",
    company: "Rideau-Rockcliffe CRC & Carlington CHC",
    talk: "Creative AI with Seniors: Building Confidence and Curiosity through Community AI Literacy",
    time: "05:50 – 06:10",
    bio: "Innovator-in-Residence focused on empowering older adults through creative AI engagement. Launched the Creative AI with Seniors program in 2023 to build confidence and curiosity in AI technologies.",
    image: "/speaker1.jpg",
    expertise: ["Senior Engagement", "AI Literacy", "Community Programs"],
  },
  {
    id: 5,
    name: "Brett Tackaberry",
    title: "Principal Architect",
    company: "Google Cloud",
    talk: "Panel Moderator: Responsible AI in Practice - From Vision to Action",
    time: "06:10 – 06:50",
    bio: "Principal Architect at Google Cloud with extensive experience in AI implementation and responsible AI practices. Expert moderator bringing together diverse perspectives on practical AI applications.",
    image: "/speaker2.jpg",
    expertise: ["Cloud Architecture", "AI Implementation", "Panel Moderation"],
  },
  {
    id: 6,
    name: "Oluwadara Adekunle",
    title: "Board Advisor & CEO",
    company: "Ottawa Responsible AI Hub / Farmties",
    talk: "Event Host & Audience Q&A Facilitator",
    time: "06:50 – 07:05",
    bio: "Board Advisor at Ottawa Responsible AI Hub and CEO of Farmties. Experienced host and facilitator, passionate about fostering meaningful dialogue around responsible AI implementation.",
    image: "/oluwadara2.jpg",
    expertise: ["AI Governance", "Event Hosting", "Community Engagement"],
  },
  {
    id: 7,
    name: "Stephanie Kahindo",
    title: "Advisor",
    company: "AI Ethics and Research, Ottawa Responsible AI Hub",
    talk: "Closing Remarks: Vote of Thanks",
    time: "07:05 – 07:15",
    bio: "Advisor specializing in AI Ethics and Research at Ottawa Responsible AI Hub. Dedicated to ensuring ethical considerations are at the forefront of AI development and deployment.",
    image: "/placeholder.svg?height=400&width=400",
    expertise: ["AI Ethics", "Research", "Policy Development"],
  },
]

export default function TechEventWebsite() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null)
  const [hoveredSpeaker, setHoveredSpeaker] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-100 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-24 h-auto md:w-[172px]">
                <Image
									src="/logo.svg"
									alt="TechSummit Logo"
									width={172}
									height={172}
									className="w-full h-full object-contain"
									priority
								/>
              </div>
              
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#speakers" className="text-[#FDFDFD]/80 hover:text-[#FDFDFD] transition-colors">
                Speakers
              </a>
              <a href="#schedule" className="text-[#FDFDFD]/80 hover:text-[#FDFDFD] transition-colors">
                Schedule
              </a>
              <a href="#venue" className="text-[#FDFDFD]/80 hover:text-[#FDFDFD] transition-colors">
                Venue
              </a>
              <a href="https://www.eventbrite.com/e/ottawa-responsible-ai-talks-tickets-1519890125279?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#094D5A] hover:bg-[#094D5A]/80 text-[#FDFDFD]">Register</Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20 min-h-[90vh] pb-16 bg-gradient-to-br flex items-center from-[#001D3B] via-[#094D5A] to-[#001D3B] text-[#FDFDFD] relative overflow-hidden"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#FDFDFD]/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-[#FDFDFD]/30 rounded-lg rotate-45 animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border-2 border-[#FDFDFD]/30 rounded-full animate-pulse delay-700"></div>
          <Code className="absolute top-32 right-1/3 w-12 h-12 text-[#FDFDFD]/15 animate-pulse delay-500" />
          <Cpu className="absolute bottom-32 right-10 w-16 h-16 text-[#FDFDFD]/15 animate-pulse delay-1000" />
          <Globe className="absolute top-1/2 left-10 w-20 h-20 text-[#FDFDFD]/15 animate-pulse delay-200" />

          {/* Additional floating elements */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-[#FDFDFD]/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-[#FDFDFD]/20 rounded-lg rotate-12 animate-bounce delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl py-8 mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="block bg-gradient-to-r from-[#FDFDFD] via-[#FDFDFD] to-[#094D5A] bg-clip-text text-transparent drop-shadow-2xl">
                Responsible AI
              </span>
              <span className="block bg-gradient-to-r from-[#094D5A] to-[#FDFDFD] bg-clip-text text-transparent mt-2">
                in Practice
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <div className="mb-12">
              <p className="text-2xl md:text-4xl font-bold mb-4 text-[#FDFDFD] tracking-wide">
                Community Voices, Meaningful Impact
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#094D5A] to-[#FDFDFD] mx-auto rounded-full"></div>
            </div>

            {/* Event Details Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-3 bg-[#FDFDFD]/15 backdrop-blur-sm rounded-sm px-6 py-3 border border-[#FDFDFD]/20">
                <Calendar className="w-5 h-5 text-[#094D5A]" />
                <span className="font-semibold">September 4, 2025</span>
              </div>
              <div className="flex items-center space-x-3 bg-[#FDFDFD]/15 backdrop-blur-sm rounded-sm px-6 py-3 border border-[#FDFDFD]/20">
                <MapPin className="w-5 h-5 text-[#094D5A]" />
                <span className="font-semibold">Incubator 13, Rideau-Rockcliffe CRC</span>
              </div>
              <div className="flex items-center space-x-3 bg-[#FDFDFD]/15 backdrop-blur-sm rounded-sm px-6 py-3 border border-[#FDFDFD]/20">
                <Clock className="w-5 h-5 text-[#094D5A]" />
                <span className="font-semibold">5:00 - 7:30 PM</span>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a target="_blank" href="https://www.eventbrite.com/e/ottawa-responsible-ai-talks-tickets-1519890125279?aff=oddtdtcreator">
              <Button
                size="lg"
                className="bg-[#FDFDFD] text-[#001D3B] hover:bg-[#FDFDFD]/90 font-bold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-[#FDFDFD]/25 transition-all duration-300 hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Secure Your Spot
              </Button>
              </a>
              <a  href="#schedule">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#FDFDFD] text-[#FDFDFD] bg-transparent font-bold px-10 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5 mr-2" />
                View Schedule
              </Button>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-[#FDFDFD]/70">
              <p className="text-sm font-medium">
                Hosted by <span className="text-[#FDFDFD] font-bold">Ottawa Responsible AI Hub</span>
              </p>
            </div>
          </div>
        </div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001D3B]/20 via-transparent to-transparent pointer-events-none"></div>
      </motion.section>

      {/* Speakers Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        id="speakers"
        className="py-20 bg-[#FDFDFD]"
      >
        <div id="speakers" className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#001D3B] text-[#FDFDFD]">Featured Speakers</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001D3B] mb-6">Community Leaders</h2>
            <p className="text-xl text-[#001D3B]/70 max-w-3xl mx-auto">
              Meet the brilliant minds who are pushing the boundaries of technology and shaping our digital future.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`group cursor-pointer transition-all duration-500 border-2 hover:border-[#094D5A] ${
                    selectedSpeaker === speaker.id ? "border-[#094D5A] shadow-2xl" : "border-transparent"
                  } ${hoveredSpeaker === speaker.id ? "scale-105" : ""}`}
                  onMouseEnter={() => setHoveredSpeaker(speaker.id)}
                  onMouseLeave={() => setHoveredSpeaker(null)}
                  onClick={() => setSelectedSpeaker(selectedSpeaker === speaker.id ? null : speaker.id)}
                >
                  <CardContent className="p-0 overflow-hidden">
                    <div className="relative">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#001D3B]/80 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="w-4 h-4 text-[#FDFDFD]" />
                            <span className="text-[#FDFDFD] font-medium">{speaker.time}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-[#FDFDFD] mb-1">{speaker.name}</h3>
                          <p className="text-[#FDFDFD]/80 text-sm">
                            {speaker.title} • {speaker.company}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 bg-[#FDFDFD]">
                        <h4 className="text-lg font-semibold text-[#001D3B] mb-3 line-clamp-2">{speaker.talk}</h4>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {speaker.expertise.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-[#094D5A]/10 text-[#094D5A] text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div
                          className={`transition-all duration-500 overflow-hidden ${
                            selectedSpeaker === speaker.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="border-t border-[#001D3B]/10 pt-4">
                            <h5 className="font-semibold text-[#001D3B] mb-2">About the Speaker</h5>
                            <p className="text-[#001D3B]/70 text-sm leading-relaxed">{speaker.bio}</p>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          className="w-full mt-4 text-[#094D5A] hover:bg-[#094D5A]/10"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedSpeaker(selectedSpeaker === speaker.id ? null : speaker.id)
                          }}
                        >
                          {selectedSpeaker === speaker.id ? "Show Less" : "Learn More"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Schedule Section */}
      <section id="schedule">
      <InnovativeSchedule  />
      </section>

    

      {/* Footer */}
      <footer className="py-12 bg-[#001D3B] text-[#FDFDFD]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              
              <span className="font-bold text-xl">Ottawa Responsible AI Talks</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-[#FDFDFD]/60 hover:text-[#FDFDFD] transition-colors">
                Privacy
              </a>
              <a href="#" className="text-[#FDFDFD]/60 hover:text-[#FDFDFD] transition-colors">
                Terms
              </a>
              <a href="#" className="text-[#FDFDFD]/60 hover:text-[#FDFDFD] transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-[#FDFDFD]/20 mt-8 pt-8 text-center text-[#FDFDFD]/60">
            <p>&copy; 2025 Ottawa Responsible AI Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
