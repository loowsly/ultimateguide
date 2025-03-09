"use client"

import { useEffect } from "react"

import type React from "react"

import { useState } from "react"
import { BookMarked, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface HandbookPage {
  title: string
  content: string
  additionalContent?: string
  imageUrl?: string
}

export function FieldHandbook() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasSigned, setHasSigned] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)
  const [signature, setSignature] = useState<string | null>(null)
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

  // Split content into more pages with less text per page
  const pages: HandbookPage[] = [
    {
      title: "Field Investigator's Handbook",
      content:
        "DEMONOLOGY SOLUTIONS RESEARCH CORPORATION\nTOP SECRET - LEVEL 5 CLEARANCE REQUIRED\n\nThis handbook contains classified information regarding paranormal investigation protocols, entity classifications, and operational guidelines. Disclosure to unauthorized personnel is strictly prohibited and punishable under National Security Directive 5991.",
      additionalContent:
        "If found, return to the nearest DSRC facility immediately. Do not attempt to read beyond this page if you lack proper clearance.",
      imageUrl: "/placeholder.svg?height=150&width=150&text=DSRC+Seal",
    },
    {
      title: "Introduction to Field Operations",
      content:
        "As a field investigator for Demonology Solutions Research Corporation, you are on the front lines of humanity's ongoing research into paranormal phenomena. Your work is critical not only for scientific understanding but for the safety of the general population, who remain largely unaware of the entities that exist alongside our reality.",
      additionalContent:
        "This handbook will guide you through standard protocols, safety procedures, and classification systems established through decades of paranormal research and encounter documentation. Your adherence to these guidelines is not optional—it is essential for your survival.",
    },
    {
      title: "Introduction to Field Operations (cont.)",
      content:
        "Remember that entities encountered during investigations often defy conventional physical laws and may possess capabilities we do not fully understand. Approach each investigation with both scientific rigor and appropriate caution.",
      additionalContent:
        "Always remember that your mental state directly impacts your vulnerability to certain types of entities. Maintain psychological discipline at all times and report any unusual thoughts, impulses, or emotional states to your team leader immediately. Those who ignore the early warning signs rarely get a second chance.",
    },
    {
      title: "Entity Classification System",
      content:
        "Demonology Solutions uses a standardized five-tier classification system for paranormal entities, developed through decades of empirical research:\n\n• CLASS I: Residual Haunting\nNon-sentient energy imprints of past events replaying without awareness. No direct interaction possible. Typically harmless but may cause psychological distress to witnesses.",
    },
    {
      title: "Entity Classification System (cont.)",
      content:
        "• CLASS II: Intelligent Entity\nConscious spiritual remnants capable of interaction, typically human in origin. Varying capabilities including manipulation of objects, temperature, and electromagnetic fields. Potential for both benign and hostile interaction.\n\n• CLASS III: Poltergeist Phenomena\nManifestations of psychokinetic energy, sometimes tied to living humans (especially adolescents) experiencing psychological distress. Characterized by movement of objects, loud noises, and occasional physical attacks.",
    },
    {
      title: "Entity Classification System (cont.)",
      content:
        "• CLASS IV: Non-Human Entity\nIntelligent paranormal presences of non-human origin. Includes elementals, nature spirits, and beings from folkloric traditions worldwide. Often territorial with specific rules of engagement. Capabilities may include mimicry, shape-shifting, and environmental manipulation.",
      additionalContent:
        "• CLASS V: Demonic Presence\nHighly dangerous entities with significant power and malevolent intent. Capable of possession, reality distortion, and severe physical/psychological harm. NEVER attempt to communicate with a suspected Class V entity without a specialized team present.",
    },
    {
      title: "Site Assessment Protocols",
      content:
        "Before full investigation deployment, each location undergoes preliminary assessment following the SPECTRA protocol:\n\nSafety Evaluation: Physical hazards, structural integrity, environmental concerns\nParanormal History: Documented incidents, witness statements, historical context\nEnvironmental Baseline: EM readings, temperature mapping, infrasound detection",
      additionalContent:
        "Cultural Context: Local beliefs, religious significance, cultural taboos\nTemporal Patterns: Time of day/year correlations with activity\nResidual Analysis: Residue testing, material analysis, chemical sampling\nAccess Evaluation: Entry points, escape routes, communication viability",
    },
    {
      title: "Site Assessment Protocols (cont.)",
      content:
        "Only upon completion of all SPECTRA elements should a full investigation team be deployed. Sites scoring above 75 on the Paranormal Activity Index (PAI) must be approached with reinforced protocols and increased personnel.",
      additionalContent:
        "Small variations in environmental readings often provide the first indications of genuine paranormal activity. Pay particular attention to electromagnetic field fluctuations that occur in patterns rather than constant elevations, as these suggest intelligent manipulation rather than faulty wiring or equipment. Temperature drops that cannot be explained by drafts or HVAC systems—particularly those that move against air currents—are strong indicators of entity presence.",
    },
    {
      title: "Small-Scale Investigation Sites",
      content:
        "Small residential locations like Juniper Road, Lincoln Street, and Fenway Drive present unique challenges and advantages. These contained environments allow for comprehensive monitoring but may limit escape options during entity manifestations.",
      additionalContent:
        "Standard deployment for small sites includes:\n• 3-5 field investigators\n• Comprehensive equipment package Alpha\n• Maximum investigation duration of 72 hours\n• Minimum two escape routes identified and secured",
    },
    {
      title: "Small-Scale Investigation Sites (cont.)",
      content:
        "Small sites often exhibit more focused paranormal activity, typically centered around specific rooms, objects, or individuals. Entity attachment to former residents is common, even when these residents are no longer present at the location.",
      additionalContent:
        "Small sites frequently demonstrate predictable activity patterns based on time of day, which should be documented to optimize investigation scheduling.",
    },
    {
      title: "Small-Scale Investigation Sites (cont.)",
      content:
        "In residential hauntings, kitchens and bedrooms show the highest activity levels, corresponding to areas of emotional significance and human vulnerability.",
      additionalContent:
        "Basements, particularly those with dirt floors or stone foundations, frequently serve as conduits for entity manifestation due to their connection with earth elements and foundational energies. Always establish baseline readings in these areas first, even if reported activity occurs elsewhere in the structure.",
    },
    {
      title: "Juniper Road Case Study",
      content:
        "The Juniper Road residence represents a textbook example of entity manifestation following structural modification. When the Henderson family removed a wall during renovations in 2008, they unknowingly disrupted a containment barrier created by the original builder, Thomas Mitchell.",
      additionalContent:
        "Historical research revealed Mitchell was a member of the Hermetic Order of the Silver Dawn, a mystic society active in the early 20th century. Analysis of the home's architectural plans shows subtle protective geometry incorporated into the original design, systematically compromised by subsequent renovations.",
    },
    {
      title: "Juniper Road Case Study (cont.)",
      content:
        "Entity classification: Class II with potential Class IV elements\nThreat assessment: Moderate to High\nPossible origin: 1934 murder-suicide of previous landowners (Harmon family) or potential pre-colonial presence",
      additionalContent:
        "The Juniper Road entity demonstrates unusual awareness of investigative equipment, often ceasing activity when directly monitored but escalating when observers appear to lose interest. This suggests higher intelligence than typical Class II manifestations.",
    },
    {
      title: "Juniper Road Case Study (cont.)",
      content:
        "Infrared recording has captured cold spots that move purposefully against air currents and electrical systems frequently malfunction in patterns that, when mapped, create symbols consistent with forgotten Appalachian folk magic practices.",
      additionalContent:
        "Consider consulting specialist Eliza Harmon (no relation to original family) for additional cultural context.",
    },
    {
      title: "Lincoln Street Assessment",
      content:
        "The Lincoln Street property presents one of our most active small-scale investigation sites, with consistent paranormal phenomena focused primarily in the basement area. Ground-penetrating radar has identified an anomalous void behind the north basement wall approximately 8' x 6' x 7' in dimension that does not appear in any building plans.",
      additionalContent:
        "Attempts to access this space have resulted in extreme equipment malfunction and investigator distress. Team leader Matthews reported experiencing 'time slip' phenomena during the February 2024 investigation, describing a momentary perception of the basement as it might have appeared in the 1940s, including briefly witnessing a teenage male performing what appeared to be ritual activities.",
    },
    {
      title: "Lincoln Street Assessment (cont.)",
      content:
        "Water samples from the home have shown trace elements consistent with specific ritual compounds used in European folk magic traditions, suggesting deliberate ritual activity rather than random haunting.",
      additionalContent:
        "OF SPECIAL NOTE: Three separate psychic sensitives have independently reported communication with an entity identifying itself as 'Robert,' claiming to be trapped between worlds due to a ritual gone wrong. All three sensitives, without prior knowledge, drew nearly identical symbols when asked to record what they 'saw' in the basement.",
    },
    {
      title: "Lincoln Street Assessment (cont.)",
      content:
        "These symbols have been tentatively identified as corrupted forms of 17th century alchemical notations related to soul transmutation. Access to the basement should be restricted to Level 3 clearance investigators only, with mandatory psychological screening before and after exposure.",
    },
    {
      title: "Fenway Drive Technology Analysis",
      content:
        "The Fenway Drive residence represents a new frontier in paranormal research: entity interaction with modern technology. Our technical analysts have conclusively ruled out conventional explanations such as power surges, programming errors, or hardware malfunctions. The phenomena demonstrate clear intentionality and, most concerningly, learning behavior.",
      additionalContent:
        "Key observations include:\n• Smart home system activations that follow specific patterns corresponding to deceased individuals' birth dates\n• Security cameras capturing anomalies only visible in specific frequency ranges",
    },
    {
      title: "Fenway Drive Technology Analysis (cont.)",
      content:
        "• Voice assistants responding to commands in multiple languages, including several dead languages not in their programming\n• Wi-Fi disruption patterns that, when mapped, create coherent geometric forms",
      additionalContent:
        "Of particular interest is the antique mirror from the Salem collection, which appears to function as a focal point for activity.",
    },
    {
      title: "Fenway Drive Technology Analysis (cont.)",
      content:
        "Technological haunting presents unique research opportunities. Unlike traditional manifestations that often deteriorate when monitored, the Fenway Drive entity appears to be attracted to active electronic devices. This has allowed for unprecedented documentation of paranormal intelligence interacting with digital systems.",
      additionalContent:
        "Data compression anomalies detected during transmission suggest the entity may be capable of encoding itself into digital information—a concerning development with implications for networked systems beyond the immediate location. Consider implementing quantum encryption protocols for all data transmitted from this site.",
    },
    {
      title: "Medium-Scale Investigation Sites",
      content:
        "Medium-sized investigation locations like Lilim Lane present more complex challenges than residential hauntings. These properties typically feature multiple active zones, higher entity counts, and more diverse manifestation types.",
      additionalContent:
        "Standard deployment for medium sites includes:\n• 5-8 field investigators\n• Comprehensive equipment packages Alpha and Beta\n• Religion specialist appropriate to cultural context\n• Maximum investigation duration of 96 hours with mandatory rotation\n• Minimum three separate escape routes with emergency response team on standby",
    },
    {
      title: "Medium-Scale Investigation Sites (cont.)",
      content:
        "Medium sites often demonstrate layered hauntings—multiple entities or phenomena from different time periods occupying the same space. This can result in conflicting evidence and requires careful chronological mapping of phenomena to distinguish between entities.",
      additionalContent:
        "Cultural sensitivity is paramount when investigating sites with strong cultural and religious contexts. Local beliefs and practices may provide essential frameworks for understanding the manifestations present.",
    },
    {
      title: "Medium-Scale Investigation Sites (cont.)",
      content:
        "Additionally, cultural taboos may inadvertently trigger or escalate activity if violated by investigators unfamiliar with local traditions. Always consult with cultural specialists before conducting investigations in historically significant or culturally diverse locations.",
      additionalContent:
        "Remember that Western scientific approaches may be insufficient when dealing with entities whose manifestation principles are rooted in non-Western cosmologies.",
    },
    {
      title: "Lilim Lane: Cultural Context",
      content:
        "The Lilim Lane property represents one of our most complex investigations due to its rich multicultural context blending Filipino, Spanish colonial, and indigenous spiritual traditions. Paranormal activity at this site appears strongly tied to cultural practices and beliefs, with manifestations corresponding to significant dates in multiple religious calendars.",
      additionalContent:
        "Entity interactions respond differently to approaches based in different cultural frameworks. For example, communications attempted using Catholic ritual elements elicit responses from Spanish colonial era entities, while traditional Cebuano practices activate responses from indigenous presences.",
    },
    {
      title: "Lilim Lane: Cultural Context (cont.)",
      content:
        "This suggests either multiple distinct hauntings or entities capable of presenting different aspects based on the cultural framework being employed.",
      additionalContent:
        "Local shamans consulted by our research team have identified the property as being built upon a pre-colonial sacred site dedicated to nature spirits (referred to as 'engkanto' in local tradition).",
    },
    {
      title: "Lilim Lane: Cultural Context (cont.)",
      content:
        "Field investigators should note that the traditional Filipino concept of 'usog'—a form of spiritual contamination or curse that can be transmitted from entities to humans—appears active at this site. Several team members reported unexplained rashes, headaches, and digestive issues following investigation sessions.",
      additionalContent:
        "Local protective practices include wearing specific amulets (anting-anting) and avoiding investigation during certain moon phases. Research Director Hamilton has authorized implementation of these protective measures despite their non-standard nature, as empirical results suggest their efficacy in this specific cultural context.",
    },
    {
      title: "Large-Scale Investigation Sites",
      content:
        "Large investigation sites such as the Old State Prison and St. Mary's School represent our most challenging and potentially dangerous research environments. These locations typically feature extensive paranormal activity spread across multiple buildings or wings, with numerous distinct entities and phenomena types present simultaneously.",
      additionalContent:
        "Standard deployment for large sites includes:\n• 10-15 field investigators divided into specialized teams\n• Full equipment suite including packages Alpha through Delta\n• Religious specialists from multiple traditions\n• Medical personnel on standby\n• Maximum investigation duration of 120 hours with mandatory rotation\n• Comprehensive security perimeter with multiple emergency extraction protocols",
    },
    {
      title: "Large-Scale Investigation Sites (cont.)",
      content:
        "Large sites often develop their own 'ecosystem' of paranormal activity, with entities demonstrating awareness of each other and sometimes hierarchical relationships.",
      additionalContent:
        "The sheer scale of large investigation sites creates unique challenges for comprehensive monitoring. We recommend establishing central command posts with real-time monitoring of all investigative teams.",
    },
    {
      title: "Large-Scale Investigation Sites (cont.)",
      content:
        "Equipment interference is common in these locations, necessitating redundant systems and communication protocols. Maps should be updated hourly to track cold spots, EMF anomalies, and other transient phenomena.",
      additionalContent:
        "Even experienced investigators should never work alone in these environments, as psychological effects can manifest rapidly without warning. If communication is lost with any team member for more than 15 minutes, immediate extraction protocols should be initiated.",
    },
    {
      title: "Old State Prison: Containment Protocols",
      content:
        "The Old State Prison represents our most active large-scale investigation site and is classified as a Category Red location due to the presence of multiple high-risk entities. The facility's history of violence, death, and psychological trauma has created an environment saturated with negative psychic energy.",
      additionalContent:
        'Of particular concern are:\n• The execution chamber (A-Block) - Class III manifestations with documented physical effects on investigators\n• Solitary confinement cells ("The Pit") - Potential Class V entity with psychological manipulation capabilities\n• The hospital wing (D-Block) - Multiple Class II entities showing evidence of collective intelligence',
    },
    {
      title: "Old State Prison: Containment Protocols (cont.)",
      content:
        "Investigators have experienced rapid onset psychological effects including depression, rage, paranoia, and in three documented cases, temporary personality shifts consistent with possession phenomena.",
      additionalContent:
        "CRITICAL PROTOCOL: All investigators must wear the standard monitoring package including vital signs tracking, body temperature monitors, and real-time psychological assessment devices. The 'buddy system' is mandatory throughout the facility, with no exceptions.",
    },
    {
      title: "Old State Prison: Containment Protocols (cont.)",
      content:
        "If psychological state indicators show deviation of more than 15% from baseline, immediate removal from the site is required. The prison's history of forced psychotropic experimentation in the 1950s appears to have created unique conditions for entity manifestation—several entities seem capable of inducing hallucinations through methods consistent with chemical rather than traditional paranormal means.",
      additionalContent: "Anti-psychotic countermeasures should be included in all medical kits for this location.",
    },
    {
      title: "St. Mary's School Investigation",
      content:
        "St. Mary's School presents unique challenges related to religious contexts and potential interdimensional phenomena. Activity intensity follows an inverse relationship to religious observance dates—paranormal manifestations are strongest during Catholic holy days rather than diminishing as typically observed at religious sites.",
      additionalContent:
        "The third floor dormitory and basement chapel show the strongest paranormal readings, with multiple research teams documenting the same specific entities across different investigation periods.",
    },
    {
      title: "St. Mary's School Investigation (cont.)",
      content:
        "Of particular note is the entity designated SM-7, appearing as a nun with distinctly non-human features visible only in certain lighting conditions or through specific equipment filters.",
      additionalContent:
        "Ground-penetrating radar has identified anomalies beneath the chapel consistent with unmarked graves, though no official records indicate burials on the premises. Historical research suggests the school may have housed a secretive religious order focused on mystical practices beyond standard Catholic traditions.",
    },
    {
      title: "St. Mary's School Investigation (cont.)",
      content:
        "Religious symbols and prayers appear to temporarily increase activity rather than suppress it, suggesting entities with complex relationships to religious iconography. The phenomenon bears resemblance to poltergeist cases triggered by religious ecstatics throughout history.",
      additionalContent:
        "Investigators with strong religious beliefs (of any tradition) show higher susceptibility to psychological effects and should be monitored closely. The entity designated SM-7 has demonstrated the ability to accurately relay personal information about investigators that was not publicly available, suggesting either advanced telepathic capabilities or access to information through means we do not understand.",
    },
    {
      title: "St. Mary's School Investigation (cont.)",
      content:
        "Exercise extreme caution when investigating the third floor dormitory after midnight, as physical manifestations reach peak intensity during the 3AM hour.",
    },
    {
      title: "Emergency Protocols and Entity Defense",
      content:
        "Despite all precautions, investigators may encounter hostile entity actions requiring immediate defensive response. Remember that physical defense against non-physical beings requires specialized approaches.",
      additionalContent:
        "IF ATTACKED BY CLASS I-III ENTITIES:\n• Maintain calm mental state and controlled breathing\n• Establish protective circle using standard materials (salt, iron filings, silver dust as appropriate)\n• Employ relevant religious/spiritual protection appropriate to the entity's cultural origin\n• Activate emergency transponder to alert extraction team\n• If physical symptoms occur, apply counter-frequency generator to affected area",
    },
    {
      title: "Emergency Protocols and Entity Defense (cont.)",
      content:
        "IF CONFRONTED BY POTENTIAL CLASS IV-V ENTITY:\n• DO NOT attempt communication or negotiation\n• Activate red-spectrum emergency beacon immediately\n• Deploy full-spectrum electromagnetic disruptor",
      additionalContent:
        "SIGNS OF IMMINENT ENTITY AGGRESSION:\n• Sudden temperature drops exceeding 15°F in less than 5 seconds\n• Electronic equipment simultaneous failure accompanied by battery drain\n• Unexplained tastes/smells (particularly metallic, sulfurous, or excessively sweet)\n• Sound dampening or unusual acoustic effects",
    },
    {
      title: "Emergency Protocols and Entity Defense (cont.)",
      content:
        "• Pressure sensations on chest or throat\n• Visual distortions in peripheral vision\n• Sudden intrusive thoughts of violence, self-harm, or surrender",
      additionalContent:
        "If any three of these signs occur simultaneously, initiate immediate evacuation regardless of investigation status. No data is worth your life or psychological well-being.",
    },
    {
      title: "Emergency Protocols and Entity Defense (cont.)",
      content:
        "Remember: many entities can influence human perception and emotion—if you feel a sudden unexplained desire to separate from your team or enter a specific area alone, recognize this as potential manipulation and resist.",
    },
    {
      title: "Final Notes and Documentation Requirements",
      content:
        "Proper documentation is crucial not only for research purposes but for the safety of future investigation teams. All field notes must be submitted within 24 hours of investigation completion, with particular attention to:",
      additionalContent:
        "• Precise timestamps of all phenomena\n• Environmental readings before, during, and after manifestations\n• Exact language used in any communication attempts\n• Psychological effects on all team members (including seemingly minor changes)\n• Equipment malfunctions or unexpected behavior\n• Sensory experiences (audio, visual, tactile, olfactory)",
    },
    {
      title: "Final Notes and Documentation Requirements (cont.)",
      content:
        "Remember that subtle details often provide the most valuable insights. What may seem insignificant could represent a critical pattern when compared with other investigations.",
      additionalContent:
        "Your work as field investigators represents the cutting edge of human understanding regarding non-conventional entities and energies. While scientific rigor remains our foundation, we must acknowledge that our current scientific paradigm cannot yet fully explain all observed phenomena.",
    },
    {
      title: "Final Notes and Documentation Requirements (cont.)",
      content:
        "Finally, remember that you are not alone in this work. The psychological burden of paranormal investigation can be substantial. Mandatory psychological counseling is not a punishment or sign of weakness—it is an essential maintenance procedure for your most important investigative tool: your mind.",
      additionalContent:
        "For questions or emergency consultation, contact Central Research Command at the secure frequency provided separately to your team leader.\n\n—Director Elizabeth Morgan\nDemonology Solutions Research Corporation",
    },
  ]

  const initializeCanvas = (canvas: HTMLCanvasElement) => {
    setCanvasRef(canvas)
    if (canvas) {
      const context = canvas.getContext("2d")
      if (context) {
        context.strokeStyle = "#ff0000"
        context.lineWidth = 2
        context.lineCap = "round"
        setCtx(context)
      }
    }
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    if (!ctx || !canvasRef) return

    let x, y
    if ("touches" in e) {
      const rect = canvasRef.getBoundingClientRect()
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.nativeEvent.offsetX
      y = e.nativeEvent.offsetY
    }

    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx || !canvasRef) return

    let x, y
    if ("touches" in e) {
      const rect = canvasRef.getBoundingClientRect()
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.nativeEvent.offsetX
      y = e.nativeEvent.offsetY
    }

    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    if (!isDrawing) return
    setIsDrawing(false)
    if (!ctx || !canvasRef) return

    ctx.closePath()
    setSignature(canvasRef.toDataURL())
  }

  const handleConfirmSignature = () => {
    if (signature) {
      setHasSigned(true)
    }
  }

  const clearSignature = () => {
    if (!ctx || !canvasRef) return
    ctx.clearRect(0, 0, canvasRef.width, canvasRef.height)
    setSignature(null)
  }

  const [currentPage, setCurrentPage] = useState(0)
  const [flipping, setFlipping] = useState(false)
  const [direction, setDirection] = useState(0)

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !flipping) {
      setDirection(1)
      setFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setFlipping(false)
      }, 300)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !flipping) {
      setDirection(-1)
      setFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setFlipping(false)
      }, 300)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextPage()
      } else if (e.key === "ArrowLeft") {
        prevPage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, flipping])

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">Field Investigator's Handbook</h2>
        <p className="text-muted-foreground flex items-center">
          <BookMarked className="h-4 w-4 mr-2" />
          Classified operational guide for paranormal investigation procedures.
        </p>
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6 text-center">
        <div className="max-w-2xl mx-auto">
          <img
            src="/placeholder.svg?height=200&width=300&text=CLASSIFIED+DOCUMENT"
            alt="Classified Document"
            className="mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-red-500 mb-2">FIELD INVESTIGATOR'S HANDBOOK</h3>
          <p className="text-sm text-muted-foreground mb-6">
            This document contains classified information regarding paranormal investigation protocols. Your signature
            is required to acknowledge receipt and acceptance of responsibility.
          </p>
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-red-900 hover:bg-red-800 text-white group transition-all duration-200 hover:-translate-y-1"
          >
            Open and Read Document (Signature Required)
          </Button>
        </div>
      </div>

      {/* Modal/Popup for the handbook */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-amber-100 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u1qQqoZkh9oqKAla4deOFgNi2O3PST.png')`,
                backgroundSize: "cover",
              }}
            >
              <div className="p-4 flex justify-between items-center border-b border-amber-900/30 bg-amber-900/20">
                <h2 className="text-xl font-bold text-amber-950">Field Investigator's Handbook</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-amber-950">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {hasSigned ? (
                <div className="overflow-y-auto p-6 flex-grow">
                  <div className="prose prose-amber max-w-none">
                    {pages.map((page, index) => (
                      <div key={index} className="mb-8 pb-6 border-b border-amber-900/20 last:border-0">
                        <h3 className="text-xl font-bold text-amber-950 mb-4">{page.title}</h3>
                        <div className="whitespace-pre-line text-amber-950">{page.content}</div>
                        {page.additionalContent && (
                          <div className="whitespace-pre-line text-amber-950 mt-4">{page.additionalContent}</div>
                        )}
                        {page.imageUrl && (
                          <div className="mt-4 flex justify-center">
                            <img
                              src={page.imageUrl || "/placeholder.svg"}
                              alt="Illustration"
                              className="max-w-[200px] max-h-[200px] border-2 border-amber-800/30 shadow-md"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-6 flex flex-col items-center justify-center">
                  <div className="bg-amber-50 border border-amber-900/30 p-4 rounded-md mb-6 max-w-2xl">
                    <h3 className="text-lg font-bold text-amber-950 mb-2">Acknowledgment of Receipt</h3>
                    <p className="text-amber-950 mb-4">
                      By signing below, I acknowledge that I have received the Field Investigator's Handbook and
                      understand that its contents are classified. I agree to follow all protocols and procedures
                      outlined within and to maintain the confidentiality of this document.
                    </p>
                    <p className="text-amber-950 font-bold">
                      Failure to comply with these terms may result in immediate termination and potential legal action.
                    </p>
                  </div>

                  <div className="w-full max-w-md">
                    <div className="border-2 border-amber-900/50 rounded-md bg-white p-2 mb-4">
                      <canvas
                        ref={initializeCanvas}
                        width={400}
                        height={150}
                        className="w-full cursor-crosshair"
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                      />
                      {!signature && (
                        <div className="text-center text-amber-950/70 mt-2">Sign here to acknowledge receipt</div>
                      )}
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={clearSignature} className="border-amber-900/50 text-amber-950">
                        Clear Signature
                      </Button>
                      <Button
                        onClick={handleConfirmSignature}
                        disabled={!signature}
                        className="bg-amber-900 hover:bg-amber-800 text-white"
                      >
                        Confirm Signature
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

