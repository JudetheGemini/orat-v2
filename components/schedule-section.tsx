"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, MessageCircle, Coffee } from "lucide-react"

const scheduleItems = [
  {
    time: "05:00 – 05:10",
    title: "Welcome Remarks",
    description: "Land Acknowledgment and appreciation for partners and attendees",
    speaker: "Somto Mbelu, Founder, Ottawa Responsible AI Hub",
    type: "opening",
  },
  {
    time: "05:10 – 05:30",
    title: "Democratizing AI: Building Open Tools for Public Impact",
    description: "Exploring how open-source tools can make AI accessible for public benefit",
    speaker: "Remsy Schmilinsky, Creator of the ORBIT Open-Source AI Platform",
    type: "talk",
  },
  {
    time: "05:30 - 05:50",
    title: "The Great Internet Mess – A Child Safety App for the Digital Age",
    description: "Showcase of innovative solutions for child safety in digital environments",
    speaker: "Neil Kothary, Founder, Online Safety and Literacy Projects",
    type: "showcase",
  },
  {
    time: "05:50 – 06:10",
    title: "Creative AI with Seniors: Building Confidence and Curiosity",
    description: "Insights from the Creative AI with Seniors program launched in 2023",
    speaker: "Luc Lalande (路客), Innovator-in-Residence, Rideau-Rockcliffe CRC & Carlington CHC",
    type: "talk",
  },
  {
    time: "06:10 – 06:50",
    title: "Panel Discussion: Responsible AI in Practice - From Vision to Action",
    description: "Collaborative discussion on implementing responsible AI in real-world scenarios",
    speaker: "Moderated by Brett Tackaberry, Principal Architect, Google Cloud",
    type: "panel",
    panelists: ["Remsy Schmilinsky", "Luc Lalande", "Neil Kothary"],
  },
  {
    time: "06:50 – 07:05",
    title: "Audience Q&A",
    description: "Live questions from attendees with option for advance/anonymous submissions",
    speaker: "Host: Oluwadara Adekunle, Board Advisor Ottawa Responsible AI Hub/CEO Farmties",
    type: "qa",
  },
  {
    time: "07:05 – 07:15",
    title: "Closing Remarks: Vote of Thanks",
    description: "Appreciation and final thoughts on responsible AI implementation",
    speaker: "Stephanie Kahindo, Advisor, AI Ethics and Research Ottawa Responsible AI Hub",
    type: "closing",
  },
  {
    time: "07:15 – 07:30",
    title: "Informal Networking & Wrap-Up",
    description: "Continued conversations with light snacks and refreshments",
    speaker: "Host: Oluwadara Adekunle",
    type: "networking",
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "panel":
      return <Users className="w-5 h-5" />
    case "qa":
      return <MessageCircle className="w-5 h-5" />
    case "networking":
      return <Coffee className="w-5 h-5" />
    default:
      return <Clock className="w-5 h-5" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "opening":
    case "closing":
      return "bg-[#001D3B] text-[#FDFDFD]"
    case "panel":
      return "bg-[#094D5A] text-[#FDFDFD]"
    case "qa":
      return "bg-[#094D5A]/20 text-[#094D5A]"
    case "networking":
      return "bg-[#001D3B]/10 text-[#001D3B]"
    case "showcase":
      return "bg-[#094D5A]/30 text-[#001D3B]"
    default:
      return "bg-[#001D3B]/5 text-[#001D3B]"
  }
}

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 bg-[#FDFDFD]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#001D3B] text-[#FDFDFD]">Event Schedule</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001D3B] mb-6">Responsible AI in Practice</h2>
          <p className="text-xl text-[#001D3B]/70 max-w-3xl mx-auto">
            A comprehensive agenda featuring talks, panel discussions, and networking opportunities focused on community
            voices and meaningful AI impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#094D5A]/20"></div>

            <div className="space-y-8">
              {scheduleItems.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-[#094D5A] rounded-full flex items-center justify-center text-[#FDFDFD] relative z-10">
                    {getTypeIcon(item.type)}
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border-l-4 border-l-[#094D5A] hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <Badge className={`mb-2 sm:mb-0 w-fit ${getTypeColor(item.type)}`}>{item.time}</Badge>
                        <Badge variant="outline" className="w-fit text-xs">
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-[#001D3B] mb-2">{item.title}</h3>

                      <p className="text-[#001D3B]/70 mb-3">{item.description}</p>

                      <p className="text-[#094D5A] font-medium text-sm">{item.speaker}</p>

                      {item.panelists && (
                        <div className="mt-3 pt-3 border-t border-[#001D3B]/10">
                          <p className="text-xs text-[#001D3B]/60 mb-1">Panelists:</p>
                          <div className="flex flex-wrap gap-2">
                            {item.panelists.map((panelist, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {panelist}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
