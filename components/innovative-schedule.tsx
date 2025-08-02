"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  MessageCircle,
  Coffee,
  Play,
  ChevronRight,
  Mic,
  PresentationIcon as PresentationChart,
  UserCheck,
  Handshake,
} from "lucide-react"

const scheduleItems = [
  {
    id: 1,
    time: "05:00 – 05:10",
    duration: "10 min",
    title: "Welcome Remarks",
    description: "Land Acknowledgment and appreciation for partners and attendees",
    speaker: "Somto Mbelu",
    role: "Founder, Ottawa Responsible AI Hub",
    type: "opening",
    color: "from-[#001D3B] to-[#094D5A]",
    icon: UserCheck,
  },
  {
    id: 2,
    time: "05:10 – 05:30",
    duration: "20 min",
    title: "Democratizing AI: Building Open Tools for Public Impact",
    description: "Exploring how open-source tools can make AI accessible for public benefit",
    speaker: "Remsy Schmilinsky",
    role: "Creator of the ORBIT Open-Source AI Platform",
    type: "talk",
    color: "from-[#094D5A] to-[#001D3B]",
    icon: PresentationChart,
  },
  {
    id: 3,
    time: "05:30 - 05:50",
    duration: "20 min",
    title: "The Great Internet Mess – A Child Safety App",
    description: "Showcase of innovative solutions for child safety in digital environments",
    speaker: "Neil Kothary",
    role: "Founder, Online Safety and Literacy Projects",
    type: "showcase",
    color: "from-[#001D3B] to-[#094D5A]",
    icon: PresentationChart,
  },
  {
    id: 4,
    time: "05:50 – 06:10",
    duration: "20 min",
    title: "Creative AI with Seniors: Building Confidence",
    description: "Insights from the Creative AI with Seniors program launched in 2023",
    speaker: "Luc Lalande (路客)",
    role: "Innovator-in-Residence, Rideau-Rockcliffe CRC",
    type: "talk",
    color: "from-[#094D5A] to-[#001D3B]",
    icon: PresentationChart,
  },
  {
    id: 5,
    time: "06:10 – 06:50",
    duration: "40 min",
    title: "Panel: Responsible AI in Practice",
    description: "From Vision to Action - Collaborative discussion on implementing responsible AI",
    speaker: "Brett Tackaberry (Moderator)",
    role: "Principal Architect, Google Cloud",
    type: "panel",
    color: "from-[#001D3B] via-[#094D5A] to-[#001D3B]",
    icon: Users,
    panelists: ["Remsy Schmilinsky", "Luc Lalande", "Neil Kothary"],
  },
  {
    id: 6,
    time: "06:50 – 07:05",
    duration: "15 min",
    title: "Audience Q&A",
    description: "Live questions with advance/anonymous submission options",
    speaker: "Oluwadara Adekunle",
    role: "Board Advisor, Ottawa Responsible AI Hub",
    type: "qa",
    color: "from-[#094D5A] to-[#001D3B]",
    icon: MessageCircle,
  },
  {
    id: 7,
    time: "07:05 – 07:15",
    duration: "10 min",
    title: "Closing Remarks: Vote of Thanks",
    description: "Appreciation and final thoughts on responsible AI implementation",
    speaker: "Stephanie Kahindo",
    role: "Advisor, AI Ethics and Research",
    type: "closing",
    color: "from-[#001D3B] to-[#094D5A]",
    icon: UserCheck,
  },
  {
    id: 8,
    time: "07:15 – 07:30",
    duration: "15 min",
    title: "Informal Networking & Wrap-Up",
    description: "Continued conversations with light snacks and refreshments",
    speaker: "Oluwadara Adekunle",
    role: "Host",
    type: "networking",
    color: "from-[#094D5A] to-[#001D3B]",
    icon: Coffee,
  },
]

export default function InnovativeSchedule() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      id="schedule"
      className="py-20 bg-gradient-to-br from-[#FDFDFD] via-[#FDFDFD] to-[#094D5A]/5"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#001D3B] text-[#FDFDFD] text-sm px-4 py-2">Event Timeline</Badge>
          <h2 className="text-5xl md:text-6xl font-black text-[#001D3B] mb-6 tracking-tight">Schedule</h2>
          <p className="text-xl text-[#001D3B]/70 max-w-3xl mx-auto font-medium">
            A carefully curated journey through responsible AI practices and community impact
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Time Progress Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="h-2 bg-[#001D3B]/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#001D3B] to-[#094D5A] rounded-full"></div>
            </div>
            <div className="absolute -top-1 left-0 w-4 h-4 bg-[#001D3B] rounded-full"></div>
            <div className="absolute -top-1 right-0 w-4 h-4 bg-[#094D5A] rounded-full"></div>
            <div className="absolute -bottom-6 left-0 text-sm font-bold text-[#001D3B]">5:00 PM</div>
            <div className="absolute -bottom-6 right-0 text-sm font-bold text-[#001D3B]">7:30 PM</div>
          </motion.div>

          {/* Schedule Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {scheduleItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card
                    className={`group cursor-pointer transition-all duration-500 border-0 shadow-lg hover:shadow-2xl overflow-hidden ${
                      selectedItem === item.id ? "scale-105 shadow-2xl" : ""
                    } ${hoveredItem === item.id ? "scale-102" : ""}`}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <CardContent className="p-0 relative z-10">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                            >
                              <IconComponent className="w-6 h-6 text-[#FDFDFD]" />
                            </div>
                            <div>
                              <Badge className="mb-1 bg-[#001D3B]/10 text-[#001D3B] text-xs font-bold">
                                {item.time}
                              </Badge>
                              <p className="text-xs text-[#001D3B]/60 font-medium">{item.duration}</p>
                            </div>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 text-[#094D5A] transition-transform duration-300 ${
                              selectedItem === item.id ? "rotate-90" : ""
                            }`}
                          />
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-[#001D3B] leading-tight group-hover:text-[#094D5A] transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-[#001D3B]/70 text-sm leading-relaxed">{item.description}</p>

                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-[#094D5A]/10 rounded-full flex items-center justify-center">
                              <Mic className="w-4 h-4 text-[#094D5A]" />
                            </div>
                            <div>
                              <p className="font-semibold text-[#001D3B] text-sm">{item.speaker}</p>
                              <p className="text-xs text-[#001D3B]/60">{item.role}</p>
                            </div>
                          </div>
                        </div>

                        {/* Expandable Content */}
                        <AnimatePresence>
                          {selectedItem === item.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-[#001D3B]/10"
                            >
                              {item.panelists && (
                                <div className="space-y-2">
                                  <p className="text-xs font-semibold text-[#001D3B]/80 uppercase tracking-wide">
                                    Panelists
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {item.panelists.map((panelist, idx) => (
                                      <Badge
                                        key={idx}
                                        variant="secondary"
                                        className="text-xs bg-[#094D5A]/10 text-[#094D5A] border-[#094D5A]/20"
                                      >
                                        {panelist}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* <div className="mt-3 flex items-center space-x-2">
                                <Button size="sm" className="bg-[#094D5A] hover:bg-[#094D5A]/80 text-[#FDFDFD] text-xs">
                                  <Play className="w-3 h-3 mr-1" />
                                  Add to Calendar
                                </Button>
                              </div> */}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-[#001D3B] to-[#094D5A] rounded-2xl p-8 text-[#FDFDFD]">
              <h3 className="text-2xl font-bold mb-4">Don't Miss Out</h3>
              <p className="text-[#FDFDFD]/80 mb-6 max-w-2xl mx-auto">
                Join us for an evening of meaningful discussions and practical insights into responsible AI
                implementation.
              </p>
              <a href="https://www.eventbrite.com/e/ottawa-responsible-ai-talks-tickets-1519890125279?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FDFDFD] text-[#001D3B] hover:bg-[#FDFDFD]/90 font-bold px-8">
                <Handshake className="w-4 h-4 mr-2" />
                Reserve Your Seat
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
