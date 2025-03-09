"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

interface JobSite {
  id: string
  name: string
  location: string
  coordinates: { x: number; y: number }
  image: string
  type: "Small" | "Medium" | "Large"
  description: string
  history: string
  reportedActivity: string
  investigationNotes: string
  connections: string[]
}

// Update the coordinates to properly form a pentagram shape
const jobSites: JobSite[] = [
  {
    id: "juniper",
    name: "Juniper Road",
    location: "Millfield, Ohio",
    coordinates: { x: 50, y: 15 }, // Top point of pentagram
    image: "/placeholder.svg?height=200&width=200&text=Juniper+Road",
    type: "Small",
    description: "A one-story suburban house with a disturbing history of unexplained phenomena.",
    history:
      "Built in 1967, the Juniper Road residence was home to the Mitchell family for over three decades without incident. In 2008, following extensive renovations by new owners, the Henderson family, strange occurrences began. The Hendersons reported objects moving without explanation, lights functioning erratically, and cold spots throughout the home. After their daughter Emily was hospitalized following what she described as an 'attack by an invisible force,' the family abandoned the property. Since then, three subsequent families have moved in and out within months, all reporting similar experiences.",
    reportedActivity:
      "Objects moving independently; unexplained footsteps; doors opening and closing on their own; electronic device malfunctions; cold spots in the master bedroom and kitchen; children reporting conversations with an 'invisible friend' named Edward; scratching sounds within the walls; faucets turning on by themselves.",
    investigationNotes:
      "EMF readings consistently spike in the kitchen near the location of a removed wall (part of 2008 renovations). Historical records reveal the property was built over land once belonging to a farm where a murder-suicide occurred in 1934. Psychic investigation suggests a connection to a male entity approximately 40-50 years old who appears hostile to adult women but attempts to communicate with children.",
    connections: ["lincoln", "prison"],
  },
  {
    id: "lincoln",
    name: "Lincoln Street",
    location: "Coldwater, Michigan",
    coordinates: { x: 80, y: 40 }, // Upper right point of pentagram
    image: "/placeholder.svg?height=200&width=200&text=Lincoln+Street",
    type: "Small",
    description: "Small house with a basement that has been the site of numerous ghostly encounters.",
    history:
      "The Lincoln Street residence dates back to 1923, constructed by local businessman Thomas Whitaker as a gift for his wife. The Whitakers lived there happily until 1947 when their son, Robert, disappeared without a trace at age 17. Local rumors suggested he had been engaging in occult practices in the basement. In the 1950s, the home was converted into a boarding house, during which time two residents died under mysterious circumstances - one by apparent suicide, another from unexplained causes. The house returned to single-family use in the 1980s, but reports of paranormal activity have persisted with every occupant since.",
    reportedActivity:
      "Disembodied voices, particularly in the basement; extreme temperature drops; shadow figures reported by multiple witnesses; feelings of being watched or followed; personal items disappearing and reappearing in different locations; unexplained scratching sounds; dreams of drowning reported by occupants sleeping in the southeast bedroom; children's toys activating without batteries.",
    investigationNotes:
      "The basement consistently registers temperatures 15-20 degrees colder than physically possible given the heating system and insulation. Audio recordings have captured what appear to be whispers in an unidentified language. Ground-penetrating radar has identified an anomalous space behind the north basement wall that doesn't appear in any building plans. Water samples from the home have shown unusual chemical compositions that cannot be explained by local water supply.",
    connections: ["juniper", "lilim"],
  },
  {
    id: "fenway",
    name: "Fenway Drive",
    location: "Portland, Oregon",
    coordinates: { x: 65, y: 85 }, // Lower right point of pentagram
    image: "/placeholder.svg?height=200&width=200&text=Fenway+Drive",
    type: "Small",
    description:
      "A modern smart home where technology behaves erratically, possibly indicating paranormal interference.",
    history:
      "Constructed in 2017 as part of an upscale development, the Fenway Drive residence was built with cutting-edge smart home technology. The original owners, the Zhang family, reported no issues during their brief stay. In 2019, tech entrepreneur Marcus Delaney purchased the property and immediately began experiencing technological anomalies. Security cameras captured unexplained figures, home automation systems activated without prompts, and electronic devices regularly malfunctioned. Curiously, the disturbances intensified after Delaney installed a collection of antique items purchased from an estate sale in Salem, Massachusetts. Delaney still owns the property but resides elsewhere, allowing our research team regular access.",
    reportedActivity:
      "Smart home systems activating independently; security cameras capturing misty apparitions; electronic devices turning on/off or displaying unusual messages; Wi-Fi and cellular disruptions; unusual power consumption patterns; smart speakers responding to unheard commands; television sets displaying static or briefly showing unrecognizable faces; computers crashing when accessing certain files or websites related to occult topics.",
    investigationNotes:
      "Technical analysis rules out conventional electromagnetic interference or system glitches. The anomalies appear intentional and responsive to human behavior. Activity increases dramatically when researchers discuss certain historical events or when specific music is played. One antique mirror from the Salem collection shows different reflections when photographed compared to what witnesses observe directly. Data analysis of system logs reveals patterns corresponding to lunar cycles.",
    connections: ["school"],
  },
  {
    id: "lilim",
    name: "Lilim Lane",
    location: "Cebu, Philippines",
    coordinates: { x: 35, y: 85 }, // Lower left point of pentagram
    image: "/placeholder.svg?height=200&width=200&text=Lilim+Lane",
    type: "Medium",
    description: "A traditional Filipino two-floor house with strong spiritual connections to local folklore.",
    history:
      "The ancestral home on Lilim Lane was built in 1897 by Spanish-Filipino merchant Diego Reyes for his growing family. The property remained in the Reyes family for generations, becoming known locally as a place where the veil between worlds is thin. During World War II, the house served as a temporary hospital for wounded Filipino resistance fighters, many of whom died within its walls. In the 1960s, the family matriarch, Elena Reyes, gained notoriety as a spiritual medium who claimed to communicate with ancestral spirits and indigenous entities from Filipino mythology. Following her death in 1998, the paranormal activity in the house intensified dramatically. The current owners, distant relatives of the original family, have invited our research team to document the phenomena while respecting cultural traditions.",
    reportedActivity:
      "Apparitions of Spanish-era figures and WWII soldiers; sounds of chanting and traditional music with no source; objects associated with family ancestors moving or disappearing; lights in the shape of folkloric entities such as kapre or tiyanak; unexplained scents of flowers traditionally used in Filipino funerary rites; sudden temperature variations; feelings of being touched or embraced by unseen presences; children reporting playful interactions with entities described similarly to traditional duwende (goblin-like beings).",
    investigationNotes:
      "Activity intensifies during traditional Filipino festivals and Catholic holy days. Electromagnetic anomalies correspond with lunar cycles and monsoon weather patterns. Psychic investigators report multiple layers of haunting - Spanish colonial era spirits, WWII victims, and older indigenous entities not connected to human origins. Local shamans consulted by our team suggest the house was built on an ancient site sacred to pre-colonial spiritual practices. Paranormal activity appears responsive to rituals conducted in Cebuano dialect but grows agitated when certain modern technologies are used extensively.",
    connections: ["lincoln", "prison"],
  },
  {
    id: "school",
    name: "St. Mary's School",
    location: "Massachusetts",
    coordinates: { x: 20, y: 40 }, // Upper left point of pentagram
    image: "/placeholder.svg?height=200&width=200&text=School",
    type: "Large",
    description: "Former Catholic school with reports of supernatural activity throughout its three floors.",
    history:
      "St. Mary's School for Girls operated from 1891 to 1972 under the direction of the Sisters of Mercy. The imposing Gothic revival building served as both school and dormitory for up to 400 students. While officially closed due to declining enrollment and financial issues, local rumors suggest more troubling reasons. In 1968, a mysterious illness affected dozens of students and several nuns, with symptoms including hallucinations, seizures, and unexplained physical marks. The incident was officially attributed to mass hysteria, but internal church documents discovered in 2001 referenced possible 'diabolical influence.' After closure, the building housed various institutions including a psychiatric outpatient center and office space, but no tenants remained longer than four years. Since 2008, the property has been maintained as a historical landmark, though overnight security guards typically quit within months, citing impossible working conditions due to paranormal activity.",
    reportedActivity:
      "Apparitions of nuns and young girls in outdated uniforms; sounds of chanting, children singing, and bells when the building is empty; objects moving in the former chapel and dormitories; electronic malfunctions throughout the building; unexplained writing appearing on chalkboards; feelings of being watched or followed; voices calling visitors by name; cold spots that move purposefully; doors opening and closing; the sounds of running footsteps in empty corridors; pianos playing with no one present; children's laughter in the former dormitories after midnight.",
    investigationNotes:
      "Activity intensifies around 3AM (the inverted witching hour) and during Catholic holy days. The third floor dormitory and basement chapel show the strongest paranormal readings. Ground-penetrating radar has identified anomalies beneath the chapel consistent with unmarked graves, though no official records indicate burials on the premises. Multiple research teams have captured what appear to be the same entities on different equipment and occasions, suggesting intelligent hauntings rather than residual energy. Religious symbols and prayers appear to temporarily increase activity rather than suppress it. Historical research uncovered multiple student deaths during the school's operation that were not properly reported to authorities.",
    connections: ["fenway", "prison"],
  },
  {
    id: "prison",
    name: "Old State Prison",
    location: "West Virginia",
    coordinates: { x: 50, y: 50 }, // Center of the pentagram
    image: "/placeholder.svg?height=200&width=200&text=Prison",
    type: "Large",
    description: "Abandoned correctional facility with decades of violence, death, and reported paranormal phenomena.",
    history:
      "Constructed in 1886, Westridge State Penitentiary operated for over a century before closing in 1995 due to human rights concerns and structural deterioration. During its operation, the prison witnessed over 100 documented deaths: executions, murders, suicides, and deaths from disease and neglect. A particularly violent riot in 1952 resulted in 27 casualties, including both inmates and guards. The prison became notorious for its harsh conditions, with many inmates held in solitary confinement for extended periods in the underground isolation cells known as 'The Pit.' After closure, redevelopment plans were repeatedly abandoned after construction crews reported inexplicable accidents, equipment failures, and disturbing psychological experiences. The state finally designated the property for historical preservation in 2010, allowing limited access for researchers and tour groups.",
    reportedActivity:
      "Disembodied screams, weeping, and the sound of riot conditions; full-bodied apparitions of guards and prisoners, particularly in cell blocks A and D; shadow figures running along corridors; cold spots that move against air currents; unexplained scratches appearing on visitors; equipment failure throughout the facility; EVP recordings capturing threats, pleas for help, and conversations between entities; visitors experiencing sudden rage, depression, or physical symptoms like choking or pain corresponding to prisoner deaths; cell doors closing and locking by themselves; figures watching from windows when the building is empty.",
    investigationNotes:
      "Activity is strongest in the execution chamber, solitary confinement cells, and the hospital wing. Research suggests multiple haunting types: residual (repeating events with no intelligence), intelligent (responsive entities), and potential poltergeist activity. Historical records validate many of the names and details provided through EVP sessions and psychic investigation. Former guards and prisoners interviewed confirm experiencing paranormal phenomena even during the prison's operation. Environmental testing has revealed unusual patterns of naturally occurring electromagnetic fields throughout the structure, particularly in areas of highest reported activity.",
    connections: ["juniper", "lilim", "school"],
  },
]

export function JobSitesBoard() {
  const [selectedSite, setSelectedSite] = useState<JobSite | null>(null)
  const [hoveredSite, setHoveredSite] = useState<string | null>(null)
  const boardRef = useRef<HTMLDivElement>(null)

  const normalizeCoordinates = (x: number, y: number) => {
    const boardWidth = boardRef.current?.offsetWidth || 1200 // Default width
    const boardHeight = boardRef.current?.offsetHeight || 800 // Default height

    return {
      x: (x / 100) * boardWidth,
      y: (y / 100) * boardHeight,
    }
  }

  // Update the renderConnections function to make the lines more visible
  const renderConnections = () => {
    return jobSites.flatMap((site) => {
      const fromCoords = normalizeCoordinates(site.coordinates.x, site.coordinates.y)

      return site.connections
        .map((targetId) => {
          const targetSite = jobSites.find((s) => s.id === targetId)
          if (!targetSite) return null

          const toCoords = normalizeCoordinates(targetSite.coordinates.x, targetSite.coordinates.y)

          const isHighlighted = hoveredSite === site.id || hoveredSite === targetId

          return (
            <svg
              key={`${site.id}-${targetId}`}
              className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
            >
              <line
                x1={fromCoords.x}
                y1={fromCoords.y}
                x2={toCoords.x}
                y2={toCoords.y}
                stroke={isHighlighted ? "#ff2825" : "#aa0a04"}
                strokeWidth={isHighlighted ? 3 : 2}
                strokeOpacity={isHighlighted ? 0.9 : 0.7}
              />
            </svg>
          )
        })
        .filter(Boolean)
    })
  }

  const statusClass = (type: string) => {
    switch (type) {
      case "Small":
        return "bg-green-700/80"
      case "Medium":
        return "bg-yellow-600/80"
      case "Large":
        return "bg-red-700/80"
      default:
        return "bg-gray-600/80"
    }
  }

  // Update the renderAdditionalNotes function to position notes better
  const renderAdditionalNotes = () => {
    return (
      <>
        <div className="absolute right-8 top-10 rotate-[5deg] w-[150px] bg-white p-3 shadow-md z-20">
          <div className="text-black text-xs space-y-1">
            <div className="text-sm font-bold border-b border-black/20 pb-1">CASE NOTES</div>
            <p>
              Cross-reference sites with matching entity signatures. Multiple locations showing increased activity this
              month.
            </p>
          </div>
          <div className="absolute top-[-8px] left-[10px] w-8 h-5 bg-red-100/60 opacity-70"></div>
        </div>

        <div className="absolute right-8 bottom-10 rotate-[-3deg] w-[170px] bg-white p-3 shadow-md z-20">
          <div className="text-black text-xs space-y-1">
            <div className="text-sm font-bold border-b border-black/20 pb-1">ENTITY CLASSIFICATIONS</div>
            <p>
              Class I: Residual haunting
              <br />
              Class II: Intelligent entity
              <br />
              Class III: Poltergeist activity
              <br />
              Class IV: Non-human entity
              <br />
              Class V: Demonic presence
            </p>
          </div>
          <div className="absolute top-[-8px] right-[30px] w-8 h-5 bg-yellow-100/60 opacity-70"></div>
        </div>
      </>
    )
  }

  // Update the render method to include the new notes rendering
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">Investigation Sites</h2>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-green-700"></div>
              <span>Small</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
              <span>Medium</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-red-700"></div>
              <span>Large</span>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground">
          Current active paranormal investigation locations with documented entity activity. Red connection lines
          indicate related phenomena or shared entity signatures.
        </p>
      </div>

      {/* Evidence Board */}
      <div
        className="relative min-h-[600px] bg-amber-800/80 border-4 border-amber-900/80 rounded-lg p-6 shadow-xl overflow-hidden"
        ref={boardRef}
      >
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evidence.png-9qyRbU2MyfS7vsBWYxLQByMPXwdbSC.jpeg')] bg-cover opacity-50 z-0"></div>

        {/* Map backdrop */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=World+Map')] bg-no-repeat bg-center bg-contain opacity-30 z-10"></div>

        {/* Connections between sites - render before site markers */}
        {renderConnections()}

        {/* Site markers */}
        {jobSites.map((site) => {
          const coords = normalizeCoordinates(site.coordinates.x, site.coordinates.y)
          return (
            <div
              key={site.id}
              className="absolute group z-30"
              style={{
                left: `${coords.x}px`,
                top: `${coords.y}px`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredSite(site.id)}
              onMouseLeave={() => setHoveredSite(null)}
            >
              {/* Polaroid image */}
              <div
                className={`
            w-[120px] h-[145px] bg-white p-2 pb-8 shadow-md rotate-[-2deg] hover:rotate-0
            cursor-pointer transition-all duration-300 hover:scale-110 z-30 relative
            ${hoveredSite === site.id ? "ring-2 ring-red-600" : ""}
          `}
                onClick={() => setSelectedSite(site)}
              >
                <img
                  src={site.image || "/placeholder.svg"}
                  alt={site.name}
                  className="w-full h-[100px] object-cover bg-gray-300"
                />
                <div className="absolute bottom-2 left-0 right-0 text-center text-black text-xs font-medium">
                  {site.name} - {site.location}
                </div>
                <div className={`absolute top-1 right-1 w-3 h-3 rounded-full ${statusClass(site.type)}`}></div>

                {/* Tape details */}
                <div className="absolute top-[-10px] left-[50%] w-10 h-6 bg-gray-100/80 opacity-80 rotate-12 translate-x-[-50%]"></div>
              </div>

              {/* Pin */}
              <div className="absolute top-[-10px] left-[50%] w-4 h-4 bg-red-600 rounded-full translate-x-[-50%] shadow-md z-40">
                <div className="absolute top-[50%] left-[50%] w-1.5 h-1.5 bg-red-300 rounded-full translate-x-[-50%] translate-y-[-50%]"></div>
              </div>
            </div>
          )
        })}

        {/* Additional evidence notes */}
        {renderAdditionalNotes()}
      </div>

      {/* Site Details Modal */}
      {selectedSite && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 border border-red-900/30 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold font-gonzaga text-red-500">
                    {selectedSite.name}
                    <span
                      className={`ml-3 inline-block px-2 py-0.5 text-xs rounded-full ${statusClass(selectedSite.type)} text-white`}
                    >
                      {selectedSite.type}
                    </span>
                  </h2>
                  <p className="text-white/70 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" /> {selectedSite.location}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedSite(null)}
                  className="h-8 w-8 transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <img
                    src={selectedSite.image || "/placeholder.svg"}
                    alt={selectedSite.name}
                    className="w-full rounded-lg object-cover"
                  />

                  <div className="mt-4 p-3 border border-red-900/30 bg-black/50 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Connected Cases</h3>
                    <div className="space-y-2">
                      {selectedSite.connections.map((connId) => {
                        const site = jobSites.find((s) => s.id === connId)
                        if (!site) return null
                        return (
                          <div
                            key={connId}
                            className="flex items-center gap-2 text-sm cursor-pointer hover:text-red-400 transition-colors"
                            onClick={() => setSelectedSite(site)}
                          >
                            <div className={`w-2 h-2 rounded-full ${statusClass(site.type)}`}></div>
                            <span>
                              {site.name}, {site.location}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2 border-b border-red-500/20 pb-1">
                      Site Overview
                    </h3>
                    <p className="text-white/90">{selectedSite.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2 border-b border-red-500/20 pb-1">
                      Historical Background
                    </h3>
                    <p className="text-white/90">{selectedSite.history}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2 border-b border-red-500/20 pb-1">
                      Reported Paranormal Activity
                    </h3>
                    <p className="text-white/90">{selectedSite.reportedActivity}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2 border-b border-red-500/20 pb-1">
                      Investigation Notes
                    </h3>
                    <p className="text-white/90">{selectedSite.investigationNotes}</p>
                  </div>

                  <div className="bg-red-950/30 p-4 rounded-lg border border-red-900/40">
                    <h3 className="text-sm font-bold text-red-400 mb-2">CONFIDENTIAL - AUTHORIZED PERSONNEL ONLY</h3>
                    <p className="text-white/80 text-sm">
                      This location is classified as a high-risk investigation site. All field agents must maintain
                      standard safety protocols and work in teams of 3+ at all times. Report any unusual physical or
                      psychological symptoms immediately to your supervisor. Communication devices must be checked
                      hourly. Remember that some entities can mimic human voices - establish authentication codes before
                      starting the investigation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

