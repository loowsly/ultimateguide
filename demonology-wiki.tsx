"use client"

import { useState, useEffect } from "react"
import {
  Book,
  Ghost,
  Home,
  Package,
  Skull,
  MapPin,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Play,
  DollarSign,
  Info,
  HelpCircle,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Import the new components
import { JobSitesBoard } from "@/components/job-sites-board"
import { FieldHandbook } from "@/components/field-handbook"

// ... (keep existing imports and types)

export default function DemonologyWiki() {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <WikiSidebar setActiveSection={setActiveSection} activeSection={activeSection} />
        <main className="flex-1 overflow-auto">
          <div className="sticky top-0 z-10 flex items-center border-b border-primary/20 bg-background/70 backdrop-blur-sm px-4 py-2">
            <SidebarTrigger className="mr-2" />
            <h1 className="text-xl font-bold font-gonzaga text-primary">Demonology Wiki</h1>
          </div>
          <div className="container max-w-4xl mx-auto px-6 py-8 md:py-10">
            <WikiContent activeSection={activeSection} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

function WikiSidebar({ setActiveSection, activeSection }) {
  return (
    <Sidebar className="bg-background/70 backdrop-blur-sm border-r border-primary/20">
      <SidebarHeader className="border-b border-primary/20">
        <div className="flex items-center gap-2 px-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile-removebg-preview-824D3YsyvBTMNt5CcPTFsdYcIUU0MI.png"
            alt="Demonology Logo"
            className="h-6 w-6"
          />
          <span className="text-lg font-bold font-gonzaga text-primary">Demonology</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "overview"}
                  onClick={() => setActiveSection("overview")}
                  className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <Home className="h-4 w-4" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "ghost-behavior"}
                  onClick={() => setActiveSection("ghost-behavior")}
                  className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <Ghost className="h-4 w-4" />
                  <span>Ghost Behavior</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "hunting-mechanics"}
                  onClick={() => setActiveSection("hunting-mechanics")}
                  className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <Skull className="h-4 w-4" />
                  <span>Hunting Mechanics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "ghost-types"}
                  onClick={() => setActiveSection("ghost-types")}
                  className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <Ghost className="h-4 w-4" />
                  <span>Ghost Types</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "ghost-journal"}
                  onClick={() => setActiveSection("ghost-journal")}
                  className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <Book className="h-4 w-4" />
                  <span>Ghost Journal</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "items"}
                  onClick={() => setActiveSection("items")}
                  className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <Package className="h-4 w-4" />
                  <span>Items</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "cursed-objects"}
                  onClick={() => setActiveSection("cursed-objects")}
                  className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <Skull className="h-4 w-4" />
                  <span>Cursed Objects</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "perks"}
                  onClick={() => setActiveSection("perks")}
                  className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <DollarSign className="h-4 w-4" />
                  <span>Perks</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Investigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "job-sites"}
                  onClick={() => setActiveSection("job-sites")}
                  className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Job Sites</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "field-handbook"}
                  onClick={() => setActiveSection("field-handbook")}
                  className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Field Investigator's Handbook</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-primary/20 p-4">
        <div className="text-xs text-muted-foreground">Demonology Wiki © 2025</div>
      </SidebarFooter>
    </Sidebar>
  )
}

function WikiContent({ activeSection }) {
  const sections = {
    overview: <OverviewSection />,
    "ghost-behavior": <GhostBehaviorSection />,
    "hunting-mechanics": <HuntingMechanicsSection />,
    "ghost-types": <GhostTypesSection />,
    "ghost-journal": <GhostJournalSection />,
    items: <ItemsSection />,
    "cursed-objects": <CursedObjectsSection />,
    "job-sites": <JobSitesBoard />,
    "field-handbook": <FieldHandbook />,
    perks: <PerksSection />,
  }

  return sections[activeSection] || <OverviewSection />
}

function OverviewSection() {
  const title = "Welcome to Demonology"
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">{title}</h2>
        <p className="text-muted-foreground">
          Demonology is a paranormal investigation Roblox game where players must identify and survive various types of
          ghosts.
        </p>
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">Game Overview</h3>
        <p className="mb-4">
          In Demonology, players take on the role of paranormal investigators tasked with identifying the type of ghost
          haunting a location. Using various tools and equipment, players must gather evidence while avoiding being
          killed by the ghost.
        </p>
        <p>
          The game features multiple ghost types, each with unique behaviors, strengths, weaknesses, and abilities.
          Players must work together to determine which ghost is present before safely escaping.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
          <h3 className="text-xl font-semibold mb-4 font-gonzaga">Key Features</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>16 unique ghost types with different behaviors</li>
            <li>Paranormal investigation tools</li>
            <li>Dynamic ghost hunting mechanics</li>
            <li>Cursed objects that can trigger special events</li>
            <li>Multiplayer cooperative gameplay</li>
          </ul>
        </div>
        <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
          <h3 className="text-xl font-semibold mb-4 font-gonzaga">Getting Started</h3>
          <p className="mb-4">New to Demonology? Here are some quick tips to get started:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Learn about different ghost types in the Ghost Journal</li>
            <li>Familiarize yourself with the investigation equipment</li>
            <li>Practice finding good hiding spots for ghost hunts</li>
            <li>Work with other players to gather evidence efficiently</li>
            <li>Be cautious when interacting with cursed objects</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function GhostBehaviorSection() {
  const title = "Ghost Behavior"
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">{title}</h2>
        <p className="text-muted-foreground">
          Understanding how ghosts behave is crucial to surviving and completing your investigation.
        </p>
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6 space-y-4">
        <h3 className="text-xl font-semibold font-gonzaga">Common Ghost Behaviors</h3>

        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-medium font-gonzaga">Hunting</h4>
            <p>
              Ghosts will randomly enter a "hunt" mode, locking the front door and chasing players if detected. There is
              a grace period of 5 seconds from when the ghost wails until it actually manifests and can kill hunters.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-medium font-gonzaga">Roaming</h4>
            <p>
              Some ghosts frequently move between rooms, making it harder to locate them depending on the difficulty.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-medium font-gonzaga">Interaction</h4>
            <p>Ghosts knock on doors, move objects, throw objects, or create sounds to scare hunters.</p>
          </div>

          <div className="border-l-4 border-primary pl-4">
            <h4 className="font-medium font-gonzaga">Ghost Event</h4>
            <p>
              A ghost can trigger a ghost event where the ghost does something, such as appear near the player and
              screaming or floating objects nearby. Ghost events are normally harmless, but be cautious as a hunt may
              start soon after it.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">Ghost Interactions</h3>
        <p className="mb-4">Ghosts can interact with the environment in various ways to indicate their presence:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Moving objects around the room</li>
          <li>Turning lights on and off</li>
          <li>Opening and closing doors</li>
          <li>Creating footprints (visible with UV light)</li>
          <li>Leaving fingerprints on surfaces</li>
          <li>Creating cold spots (detectable with thermometer)</li>
          <li>Making strange sounds or whispers</li>
        </ul>
      </div>
    </div>
  )
}

function HuntingMechanicsSection() {
  const title = "Hunting Mechanics"
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">{title}</h2>
        <p className="text-muted-foreground">
          A ghost hunt is the most dangerous moment in Demonology, where the ghost actively tries to kill hunters.
        </p>
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6 space-y-4">
        <h3 className="text-xl font-semibold font-gonzaga">How Hunts Work</h3>

        <div>
          <h4 className="font-medium text-lg font-gonzaga">Pre-Hunt Conditions</h4>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Ghosts hunt when average energy drops too low (typically below 50%, but some hunt earlier).</li>
            <li>Some ghosts have special hunting conditions (Ex: Demon and Revenant hunt more often).</li>
            <li>
              Cursed Objects can be used to trigger a Cursed Hunt, whether from breaking the object or upon activation.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-lg font-gonzaga">Hunt Begins</h4>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              The ghost lets out a wail indicating the start of a hunt. The lights flicker and the front door locks (you
              cannot escape).
            </li>
            <li>
              After a few seconds, the ghost becomes fully visible and roaming around the house searching for players.
            </li>
            <li>Electronics malfunction (radios, flashlights flicker).</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-lg font-gonzaga">Ghost Behavior During a Hunt</h4>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              <strong>Line of Sight:</strong> If a ghost sees a player, it will begin to speed up.
            </li>
            <li>
              <strong>Sound Tracking:</strong> Ghosts can hear talking and movement.
            </li>
            <li>
              <strong>Speed Differences:</strong> Some ghosts move faster than others (Ex: Oni)
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">How to Survive a Ghost Hunt</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-lg font-gonzaga">1. Best Hiding Spots</h4>
            <p className="mb-2">During a hunt, the best way to survive is hiding. Here's where you should go:</p>

            <div className="pl-4 border-l-2 border-primary mb-2">
              <h5 className="font-medium font-gonzaga">Lockers & Closets (Recommended)</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>If nearby, open them, go, and stay inside.</li>
                <li>
                  Closing the door is purely optional as being in the locker/closet already guarantees your safety. Just
                  be careful to not step out.
                </li>
                <li>Be quiet—ghosts can hear talking and movement.</li>
              </ul>
            </div>

            <div className="pl-4 border-l-2 border-primary mb-2">
              <h5 className="font-medium font-gonzaga">Rooms with Doors</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pick a room far from the ghost.</li>
                <li>Shut the door and crouch (Left Control) in a corner behind furniture.</li>
                <li>Stay away from windows (ghosts can see through them).</li>
              </ul>
            </div>

            <div className="pl-4 border-l-2 border-primary">
              <h5 className="font-medium font-gonzaga">Behind Large Objects</h5>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hide behind beds, shelves, or furniture.</li>
                <li>Ghosts don't always check behind objects unless they see or hear you.</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg font-gonzaga">2. Juking/Outmaneuvering the Ghost</h4>
            <p>
              You can outrun/outmaneuver the ghost by leading it to a place that you can go around and out the other
              side, such as a kitchen island, a couch or a bed. You can sprint to run faster to avoid being caught when
              doing this. Once you lure the ghost into one side, quickly sprint around and out, then find a safe spot to
              hide in.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg font-gonzaga">3. Where to Avoid</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hallways & Open Areas – Ghosts can easily see and chase you.</li>
              <li>See-through Bathroom Stalls – Many ghosts can see through these doors.</li>
              <li>Near the Ghost Room – Ghosts often return to their room during a hunt.</li>
              <li>In Front of the Exit Door – It will be locked during a hunt.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function GhostTypesSection() {
  const [selectedGhost, setSelectedGhost] = useState(null)
  const title = "Ghost Types"

  const ghostTypes = [
    {
      name: "Banshee",
      description:
        "Banshees are characterized as harbingers of death and demise. They most commonly manifest as wailing and mournful spirits, occupying spaces where misfortune is bound to occur.",
      lore: "Be less cautious when they may be warning you off. Banshees are more likely to break glass. They might use distract well when hunting.",
      evidence: ["Ghost Orbs", "Handprints", "Freezing Temps"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NWxdql9aj8Xi1VqoI0Q5VANlXESrel.png",
      strengths: "Effective at breaking glass and using distraction tactics",
      weaknesses: "May warn investigators of danger",
    },
    {
      name: "Demon",
      description: "USE EXTREME CAUTION WHEN INTERACTING WITH A DEMON!",
      lore: "Demons hunt frequently. Crosses are more effective on them.",
      evidence: ["EMF Level 5", "Handprints", "Freezing Temps"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Fv1eiBZrKoLP3fVxZSOBxsz4UT2kvb.png",
      strengths: "Hunts frequently and aggressively",
      weaknesses: "More vulnerable to crosses",
    },
    {
      name: "Entity",
      description:
        "The Entity is a powerful force that transcends typical hauntings. While its control over the environment is limited, it has been observed to teleport, granting it heavy influence.",
      lore: "The Entity can teleport from one location to another; it is unlikely to throw objects.",
      evidence: ["Spirit Box", "Handprints", "Laser Projector"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TrAui2qRARaNlPxnSGrXYjWS8gD2Hs.png",
      strengths: "Can teleport between locations",
      weaknesses: "Limited ability to manipulate physical objects",
    },
    {
      name: "Ghoul",
      description:
        "Ghouls are regarded as troublemaking ghosts, more focused on playing with hunters than harming them.",
      lore: "They often engage in behavior to frighten people in their domain but are also quick to anger. Exercise caution when in the presence of a ghoul. Ghouls may become enraged if they hear talking. They can't disable electronics.",
      evidence: ["Spirit Box", "Freezing Temps", "Ghost Orbs"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IqCj9kipxSeHYo7eKhwaqSOLldkWbo.png",
      strengths: "Playful but quick to anger",
      weaknesses: "Cannot disable electronic equipment",
    },
    {
      name: "Leviathan",
      description:
        "Leviathans are physical manifestations of chaos and destruction, and are as dangerous and unpredictable as void itself.",
      lore: "They have a particular affinity for throwing objects. Leviathans can throw multiple objects, and can disable lights passively.",
      evidence: ["Ghost Orbs", "Ghost Writing", "Handprints"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DO1gHpvjvBjkLgwDbUxCOlH87YpKNP.png",
      strengths: "Can throw multiple objects and disable lights",
      weaknesses: "Physical manifestations make them more predictable",
    },
    {
      name: "Nightmare",
      description:
        "Nightmares, as the name suggests, commonly manifest themselves as bad dreams and are usually harmless.",
      lore: "However, particularly powerful nightmares can manifest themselves in the physical world, exhibiting behavior expected from an average ghost. Nightmares can cause hallucinations. They hunt more often in the dark.",
      evidence: ["EMF Level 5", "Spirit Box", "Ghost Orbs"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bPqIP0kq1mbFK7vrSYX56oARGFpI21.png",
      strengths: "More active in darkness, can cause hallucinations",
      weaknesses: "Less effective in well-lit areas",
    },
    {
      name: "Oni",
      description:
        "Onis are a class of ghost believed to originate in Japan, but sightings have been reported all across the globe.",
      lore: "They are known for manifesting often and having a terrifying physical appearance. Onis sprint during hunts. They manifest more commonly than other ghosts.",
      evidence: ["Laser Projector", "Spirit Box", "Freezing Temps"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-E18znS6v8w2UuwQRDICsb62wwxREtF.png",
      strengths: "Fast during hunts, frequent manifestations",
      weaknesses: "More visible than other ghost types",
    },
    {
      name: "Phantom",
      description: "Phantoms are ethereal apparitions that manifest less frequently than similar ghosts.",
      lore: "They are misattributed as 'timid', but can certainly be aggressive. They are commonly associated with and can be aggravated by intense emotions. Phantoms blink slower during hunts, and are unlikely to hunt groups of people.",
      evidence: ["EMF Level 5", "Handprints", "Ghost Orbs"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cylECV8JJCRx3mVM2nsqbOY2gSmGLB.png",
      strengths: "Can be triggered by emotional states",
      weaknesses: "Less likely to attack groups",
    },
    {
      name: "Revenant",
      description: "Revenants are highly vengeful, often drawing their strength not from fear, but from anger.",
      lore: "They are relentless, hunting anyone they have the opportunity to. They are unstoppable when enraged. Revenants have a low hunt cooldown. They will rest if they've killed someone.",
      evidence: ["Ghost Writing", "EMF Level 5", "Freezing Temps"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aXusfGbpk1jF90N81Ce2gRPIFwNwxf.png",
      strengths: "Quick hunt cooldown, relentless pursuit",
      weaknesses: "Rests after successful kills",
    },
    {
      name: "Shadow",
      description:
        "Shadows are barely perceptible apparitions that rarely interact with their environment, preferring to reside calmly in the dark.",
      lore: "They are shy and tend to avoid people, though are known to be defensive of their favorite room. Shadows do not alter temperature much. They are less active in well-lit rooms.",
      evidence: ["EMF Level 5", "Ghost Writing", "Laser Projector"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x3b8jhhEp2T9lzUqMmTEm1YWi1venY.png",
      strengths: "Hard to detect, prefers darkness",
      weaknesses: "Less active in well-lit areas",
    },
    {
      name: "Skinwalker",
      description:
        "Skinwalkers are elusive ghosts with the unique ability to mimic the abilities of other ghost types.",
      lore: "They are frequent roamers, spending more time outside of their favorite room. Identifying Skinwalkers requires extreme precision. Skinwalkers can take ghost orb evidence. They can mimic other ghost abilities.",
      evidence: ["Freezing Temps", "Ghost Writing", "Spirit Box"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vFXFpPf8boIdZgVWHbdf1YErjnKzwL.png",
      strengths: "Can mimic abilities of other ghosts",
      weaknesses: "Requires precise identification",
    },
    {
      name: "Specter",
      description: "Specters, unlike other ghosts, are strongly bound to their favorite room.",
      lore: "When in the same room as one, expect to feel an ominous sense of unease. Specters are known for their profound control over their environment. Specters are more likely to throw items. They do not roam except while hunting.",
      evidence: ["EMF Level 5", "Freezing Temps", "Laser Projector"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U7HLkys4oJtn1sHOUo1qsAaOaae5oq.png",
      strengths: "Strong control over environment",
      weaknesses: "Limited to favorite room",
    },
    {
      name: "Spirit",
      description: "Spirits are a manifestation of the souls of the deceased.",
      lore: "They are able to project in the physical world and have been observed to manipulate electronic frequencies. They are often eager to communicate with the living, and are generally considered harmless. Spirits have no documented strengths. They can alter the device color of evidence.",
      evidence: ["Handprints", "Ghost Writing", "Spirit Box"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o1ds25nSNINUoapf98v5ONUoVkr0i6.png",
      strengths: "None documented",
      weaknesses: "Generally harmless",
    },
    {
      name: "Umbra",
      description: "The namesake of the Umbra Board, Umbras are elusive, shadowy apparitions born from fear.",
      lore: "Instead of planting their feet, they glide off the ground slightly. Their presence alone tends to be unsettling. Umbras do not make footstep sounds. They move slower in lit rooms.",
      evidence: ["Ghost Orbs", "Laser Projector", "Handprints"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3ZgDrK19wnffKfyAy9421hI4FiODeN.png",
      strengths: "Silent movement",
      weaknesses: "Slower in lit areas",
    },
    {
      name: "Wendigo",
      description: "Wendigos are horribly malformed creatures, less ghost and more monster caricature.",
      lore: "Though folklore states that wendigos are capable of possession we have yet to observe this behavior. Despite this, they remain more aggressive than any other documented ghost. Wendigos are 2x more likely to hunt, though they prefer to hunt groups.",
      evidence: ["Ghost Orbs", "Ghost Writing", "Laser Projector"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9EclwctXe7xFgQHzpcDbrxwLAnUbIa.png",
      strengths: "Highly aggressive, hunts frequently",
      weaknesses: "Predictable hunting behavior",
    },
    {
      name: "Wraith",
      description: "Wraiths are malevolent, shadowy apparitions noted for their profound aggression.",
      lore: "They are known to inflict an impending sense of doom on people around them. Be weary when interacting with a wraith in any capacity. Wraiths quickly deplete energy from hunters. They refuse to step in lines of salt.",
      evidence: ["EMF Level 5", "Spirit Box", "Laser Projector"],
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fjYoN9txkDKOTfovuwAdUMrylI0Yzc.png",
      strengths: "Quickly drains hunter energy",
      weaknesses: "Cannot cross salt lines",
    },
  ]

  const upcomingGhosts = ["Aswang", "Dybbuk", "Siren", "The Wisp"]

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">{title}</h2>
        <p className="text-muted-foreground">
          There are currently 16 ghost types in Demonology, each with unique traits and behaviors. Click on a ghost to
          learn more about it.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ghostTypes.map((ghost) => (
          <div
            key={ghost.name}
            className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-4 transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer"
            onClick={() => setSelectedGhost(ghost)}
          >
            <h3 className="text-lg font-semibold font-gonzaga">{ghost.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{ghost.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">Upcoming Ghost Types</h3>
        <div className="flex flex-wrap gap-2">
          {upcomingGhosts.map((ghost) => (
            <div
              key={ghost}
              className="rounded-full bg-primary/10 px-3 py-1 text-sm transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20"
            >
              {ghost}
            </div>
          ))}
        </div>
      </div>

      {selectedGhost && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background/80 backdrop-blur-md border border-primary/20 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold font-gonzaga text-primary">{selectedGhost.name}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedGhost(null)}
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="aspect-[525/583] bg-muted/50 rounded-md overflow-hidden mb-4">
                    <img
                      src={selectedGhost.image || `/placeholder.svg?height=583&width=525&text=${selectedGhost.name}`}
                      alt={selectedGhost.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {selectedGhost.hasAudio && (
                    <div className="bg-muted/30 rounded-md p-3 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
                        onClick={() => {
                          // In a real implementation, this would play the actual audio file
                          alert(`Playing ${selectedGhost.name} sound effect`)
                        }}
                      >
                        <Play className="h-4 w-4" />
                        <span className="sr-only">Play {selectedGhost.name} sound</span>
                      </Button>
                      <span className="text-sm">Play {selectedGhost.name} sound</span>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-gonzaga">Lore</h3>
                    <p className="text-muted-foreground">{selectedGhost.lore}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-gonzaga">Evidence</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedGhost.evidence.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-gonzaga">Strengths</h3>
                    <p className="text-muted-foreground">{selectedGhost.strengths}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-gonzaga">Weaknesses</h3>
                    <p className="text-muted-foreground">{selectedGhost.weaknesses}</p>
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

// Update the GhostJournalSection to correct evidence types and ghost associations

function GhostJournalSection() {
  const title = "Ghost Journal"
  const [selectedEvidence, setSelectedEvidence] = useState(null)
  const [selectedSecondaryEvidence, setSelectedSecondaryEvidence] = useState(null)
  const [showJournal, setShowJournal] = useState(false)

  // Add this useEffect inside the GhostJournalSection function
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "j" || e.key === "J") {
        setShowJournal((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const ghostTypes = [
    {
      name: "Banshee",
      description: "A wailing spirit that targets specific victims.",
      evidence: ["Ghost Orbs", "Handprints", "Freezing Temps"],
      secondaryEvidence: {
        type: "Hunt Behavior",
        description: "More likely to break glass and may warn investigators before attacking.",
      },
    },
    {
      name: "Demon",
      description: "Extremely aggressive ghost that hunts frequently.",
      evidence: ["EMF Level 5", "Handprints", "Freezing Temps"],
      secondaryEvidence: {
        type: "Hunt Frequency",
        description: "Hunts very frequently with minimal cooldown. Crosses are more effective against them.",
      },
    },
    {
      name: "Entity",
      description: "A powerful force that can teleport throughout locations.",
      evidence: ["Spirit Box", "Handprints", "Laser Projector"],
      secondaryEvidence: {
        type: "Special Abilities",
        description: "Can teleport between locations. Unlikely to throw objects.",
      },
    },
    {
      name: "Ghoul",
      description: "Troublemaking spirit that becomes enraged by talking.",
      evidence: ["Spirit Box", "Freezing Temps", "Ghost Orbs"],
      secondaryEvidence: {
        type: "Interaction Types",
        description: "May become enraged when hearing voices. Cannot disable electronics.",
      },
    },
    {
      name: "Leviathan",
      description: "Chaotic manifestation that manipulates objects and lights.",
      evidence: ["Ghost Orbs", "Ghost Writing", "Handprints"],
      secondaryEvidence: {
        type: "Interaction Types",
        description: "Can throw multiple objects simultaneously and can passively disable lights.",
      },
    },
    {
      name: "Nightmare",
      description: "Dark entity that hunts more frequently in low light conditions.",
      evidence: ["EMF Level 5", "Spirit Box", "Ghost Orbs"],
      secondaryEvidence: {
        type: "Hunt Behavior",
        description: "More active in darkness and can cause hallucinations. Hunts more often in dark areas.",
      },
    },
    {
      name: "Oni",
      description: "Aggressive Japanese spirit known for fast movement during hunts.",
      evidence: ["Laser Projector", "Spirit Box", "Freezing Temps"],
      secondaryEvidence: {
        type: "Ghost Speed",
        description: "Sprints during hunts and manifests more commonly than other ghosts.",
      },
    },
    {
      name: "Phantom",
      description: "Ethereal apparition that rarely attacks groups.",
      evidence: ["EMF Level 5", "Handprints", "Ghost Orbs"],
      secondaryEvidence: {
        type: "Hunt Behavior",
        description: "Blinks slower during hunts and is less likely to hunt groups of people.",
      },
    },
    {
      name: "Revenant",
      description: "Vengeful ghost that hunts with little cooldown.",
      evidence: ["Ghost Writing", "EMF Level 5", "Freezing Temps"],
      secondaryEvidence: {
        type: "Hunt Frequency",
        description: "Low hunt cooldown but will rest after killing someone. Relentless when angered.",
      },
    },
    {
      name: "Shadow",
      description: "Shy entity that prefers darkness and avoids people.",
      evidence: ["EMF Level 5", "Ghost Writing", "Laser Projector"],
      secondaryEvidence: {
        type: "Response to Equipment",
        description: "Avoids well-lit areas and doesn't alter temperature significantly.",
      },
    },
    {
      name: "Skinwalker",
      description: "Elusive ghost that mimics abilities of other ghost types.",
      evidence: ["Freezing Temps", "Ghost Writing", "Spirit Box"],
      secondaryEvidence: {
        type: "Special Abilities",
        description: "Can mimic other ghost abilities and take ghost orb evidence. Frequent roamer.",
      },
    },
    {
      name: "Specter",
      description: "Room-bound entity with strong environmental control.",
      evidence: ["EMF Level 5", "Freezing Temps", "Laser Projector"],
      secondaryEvidence: {
        type: "Interaction Types",
        description: "More likely to throw items. Stays in favorite room except when hunting.",
      },
    },
    {
      name: "Spirit",
      description: "Common ghost with no special strengths.",
      evidence: ["Handprints", "Ghost Writing", "Spirit Box"],
      secondaryEvidence: {
        type: "Special Abilities",
        description: "Can alter the color of candle flames. Generally considered harmless.",
      },
    },
    {
      name: "Umbra",
      description: "Shadowy apparition that moves silently and glides above ground.",
      evidence: ["Ghost Orbs", "Laser Projector", "Handprints"],
      secondaryEvidence: {
        type: "Movement Pattern",
        description: "Makes no footstep sounds and moves slower in lit rooms.",
      },
    },
    {
      name: "Wendigo",
      description: "Malformed creature that hunts more frequently than most ghosts.",
      evidence: ["Ghost Orbs", "Ghost Writing", "Laser Projector"],
      secondaryEvidence: {
        type: "Hunt Frequency",
        description: "Twice as likely to hunt, but prefers hunting groups rather than individuals.",
      },
    },
    {
      name: "Wraith",
      description: "Malevolent spirit that drains hunter energy rapidly.",
      evidence: ["EMF Level 5", "Spirit Box", "Laser Projector"],
      secondaryEvidence: {
        type: "Special Abilities",
        description: "Quickly depletes energy from hunters and cannot cross salt lines.",
      },
    },
  ]

  const primaryEvidenceTypes = [
    "EMF Level 5",
    "Spirit Box",
    "Ghost Orbs",
    "Ghost Writing",
    "Handprints",
    "Freezing Temps",
    "Laser Projector",
  ]

  const secondaryEvidenceTypes = [
    "Ghost Speed",
    "Hunt Frequency",
    "Interaction Types",
    "Response to Equipment",
    "Special Abilities",
    "Hunt Behavior",
    "Movement Pattern",
  ]

  const getGhostsWithEvidence = (evidence) => {
    return ghostTypes.filter((ghost) => ghost.evidence.includes(evidence))
  }

  const getGhostsWithSecondaryEvidence = (type) => {
    return ghostTypes.filter((ghost) => ghost.secondaryEvidence.type === type)
  }

  const handleEvidenceClick = (evidence) => {
    if (selectedEvidence === evidence) {
      setSelectedEvidence(null)
    } else {
      setSelectedEvidence(evidence)
      setSelectedSecondaryEvidence(null)
    }
  }

  const handleSecondaryEvidenceClick = (evidence) => {
    if (selectedSecondaryEvidence === evidence) {
      setSelectedSecondaryEvidence(null)
    } else {
      setSelectedSecondaryEvidence(evidence)
      setSelectedEvidence(null)
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">{title}</h2>
        <p className="text-muted-foreground">
          The Ghost Journal is an essential tool for identifying ghosts based on collected evidence.
        </p>
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">About the Ghost Journal</h3>
        <p className="mb-4">
          The Ghost Journal contains information about all ghost types and the evidence needed to identify them. As you
          collect evidence during your investigation, you can cross-reference it with the journal to narrow down which
          ghost you're dealing with.
        </p>
        <p>
          Each ghost type requires a specific combination of evidence to identify. The journal also contains information
          about each ghost's strengths, weaknesses, and special abilities.
        </p>
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6 relative z-10">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">Evidence Types</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h4 className="font-medium font-gonzaga">Primary Evidence</h4>
            <ul className="list-disc pl-5 space-y-3">
              {primaryEvidenceTypes.map((evidence, index) => (
                <li key={index} className="relative">
                  <button
                    onClick={() => handleEvidenceClick(evidence)}
                    className={`text-left transition-all duration-200 hover:text-red-500 ${selectedEvidence === evidence ? "text-red-500 font-medium" : ""}`}
                  >
                    {evidence}
                  </button>

                  {selectedEvidence === evidence && (
                    <div className="mt-2 mb-4 ml-2 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg p-4">
                      <h5 className="font-semibold text-red-500 mb-2">Ghosts with {evidence}</h5>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {getGhostsWithEvidence(evidence).map((ghost, idx) => (
                          <div key={idx} className="border-l-2 border-red-500/50 pl-2">
                            <p className="font-medium">{ghost.name}</p>
                            <p className="text-xs text-muted-foreground">{ghost.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium font-gonzaga">Secondary Evidence</h4>
            <ul className="list-disc pl-5 space-y-3">
              {secondaryEvidenceTypes.map((evidence, index) => (
                <li key={index} className="relative">
                  <button
                    onClick={() => handleSecondaryEvidenceClick(evidence)}
                    className={`text-left transition-all duration-200 hover:text-red-500 ${selectedSecondaryEvidence === evidence ? "text-red-500 font-medium" : ""}`}
                  >
                    {evidence}
                  </button>

                  {selectedSecondaryEvidence === evidence && (
                    <div className="mt-2 mb-4 ml-2 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg p-4">
                      <h5 className="font-semibold text-red-500 mb-2">Ghosts with {evidence}</h5>
                      <div className="space-y-2 max-h-60 overflow-y-auto">
                        {getGhostsWithSecondaryEvidence(evidence).map((ghost, idx) => (
                          <div key={idx} className="border-l-2 border-red-500/50 pl-2">
                            <p className="font-medium">{ghost.name}</p>
                            <p className="text-xs text-muted-foreground">{ghost.secondaryEvidence.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">Using the Journal</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Collect evidence using your investigation equipment</li>
          <li>Open your journal (default key: J)</li>
          <li>Mark the evidence you've found</li>
          <li>The journal will show which ghost types match your evidence</li>
          <li>Continue collecting evidence until only one ghost type remains</li>
        </ol>
      </div>
    </div>
  )

  // Add this at the end of the GhostJournalSection function, right before the final closing bracket
  // This will render the popup journal when J is pressed
  return (
    <>
      {showJournal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-S95w9x9zxVb17IfcIzQtCKzIT882uW.png')] bg-cover border border-amber-900/50 rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 flex justify-between items-start">
              <h2 className="text-2xl font-bold font-gonzaga text-amber-950">Ghost Journal</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowJournal(false)}
                className="h-8 w-8 text-amber-950"
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

            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GQnbX0IDN49aCDulAJpoSYKTqknT9a.png')] bg-center bg-contain bg-no-repeat aspect-[1.5/1] p-6">
                  <div className="grid grid-cols-2 gap-4 pt-20 pl-16 pr-8">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-amber-950 mb-4">Evidence</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {primaryEvidenceTypes.map((evidence, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`evidence-${index}`}
                              className="h-4 w-4 rounded border-amber-900/50 text-red-600 focus:ring-red-600"
                              onChange={() => handleEvidenceClick(evidence)}
                              checked={selectedEvidence === evidence}
                            />
                            <label htmlFor={`evidence-${index}`} className="text-amber-950 text-sm">
                              {evidence}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-amber-950 mb-4">Secondary Signs</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {secondaryEvidenceTypes.map((evidence, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`secondary-${index}`}
                              className="h-4 w-4 rounded border-amber-900/50 text-red-600 focus:ring-red-600"
                              onChange={() => handleSecondaryEvidenceClick(evidence)}
                              checked={selectedSecondaryEvidence === evidence}
                            />
                            <label htmlFor={`secondary-${index}`} className="text-amber-950 text-sm">
                              {evidence}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pl-16 pr-8">
                    <h3 className="text-lg font-bold text-amber-950">Ghost Type:</h3>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {ghostTypes.map((ghost, index) => (
                        <div
                          key={index}
                          className={`text-amber-950 text-sm ${
                            (selectedEvidence && ghost.evidence.includes(selectedEvidence)) ||
                            (selectedSecondaryEvidence && ghost.secondaryEvidence.type === selectedSecondaryEvidence)
                              ? "font-bold"
                              : "opacity-50"
                          }`}
                        >
                          {ghost.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 text-center text-amber-950">
              <p>Press J to close the journal</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Update the ItemsSection function to remove smudge sticks and display items side by side per category
function ItemsSection() {
  const items = {
    evidence: [
      {
        name: "Blacklight",
        description: "Reveals fingerprints and footprints on surfaces.",
        usage: "Shine on surfaces to find prints. Works with salt footprints.",
        price: 30,
        maxAmount: 1,
        tier: "Basic",
      },
      {
        name: "EMF Reader",
        description: "Detects electromagnetic fluctuations from ghost activity.",
        usage: "Shows levels 2-5. Level 5 is evidence.",
        price: 35,
        maxAmount: 1,
        tier: "Basic",
      },
      {
        name: "Spirit Box",
        description: "Allows direct communication with ghosts through voice recognition.",
        usage: "Ask questions like 'Are you here?' or 'What do you want?' in a dark room with the lights off.",
        price: 40,
        maxAmount: 1,
        tier: "Basic",
      },
      {
        name: "Thermometer",
        description: "Measures temperature drops which can indicate ghost presence.",
        usage: "Look for temperatures below 0°C (32°F) which indicates freezing temperatures evidence.",
        price: 25,
        maxAmount: 1,
        tier: "Basic",
      },
      {
        name: "Video Camera",
        description: "Can capture ghost orbs when placed in the ghost room.",
        usage: "Place on a tripod or hold, then view through the van monitor to spot ghost orbs.",
        price: 55,
        maxAmount: 2,
        tier: "Intermediate",
      },
      {
        name: "Ghost Writing Book",
        description: "Some ghosts will write messages in this book.",
        usage: "Place in suspected ghost rooms and check periodically for writing.",
        price: 35,
        maxAmount: 2,
        tier: "Basic",
      },
      {
        name: "D.O.T.S Projector",
        description: "Projects a grid of dots that certain ghosts will disturb.",
        usage: "Place facing an open area and look for a humanoid figure moving through the dots.",
        price: 70,
        maxAmount: 1,
        tier: "Advanced",
      },
    ],
    utility: [
      {
        name: "Cross",
        description: "Prevents hunts within its radius.",
        usage: "3m radius (5m for Banshee/Demon). Burns after use.",
        price: 40,
        maxAmount: 2,
        levelReq: 5,
        tier: "Advanced",
      },
      {
        name: "Salt",
        description: "Ghosts will leave footprints when walking through salt piles.",
        usage: "Place piles on the floor in active areas, then use UV light to see footprints.",
        price: 10,
        maxAmount: 3,
        tier: "Basic",
      },
      {
        name: "Flashlight",
        description: "Basic light source for navigating dark areas.",
        usage: "Essential for all investigations. Use to navigate and search for clues.",
        price: 15,
        maxAmount: 4,
        tier: "Basic",
      },
    ],
  }
  const title = "Investigation Items"

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">{title}</h2>
        <p className="text-muted-foreground">
          Various tools and equipment used to gather evidence and survive ghost hunts.
        </p>
      </div>

      {Object.entries(items).map(([category, itemsInCategory]) => (
        <div key={category} className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
          <h3 className="text-xl font-semibold mb-4 font-gonzaga capitalize">{category} Items</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {itemsInCategory.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-4 transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold font-gonzaga">{item.name}</h3>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3 text-green-500" />
                    <span className="text-sm font-medium">{item.price}</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary-foreground">
                    {item.tier}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <div className="border-t border-primary/10 pt-2 mt-2">
                  <div className="flex items-start gap-1">
                    <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-xs">{item.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">Equipment Tips</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Bring a mix of evidence-gathering and protection items on each investigation</li>
          <li>Some equipment uses battery power and will need to be turned off when not in use</li>
          <li>Place video cameras strategically to monitor multiple rooms</li>
          <li>The crucifix has a limited range - place it in areas where the ghost is active</li>
          <li>The EMF reader will flash and beep more rapidly as readings increase</li>
        </ul>
      </div>
    </div>
  )
}

function CursedObjectsSection() {
  const cursedObjects = [
    {
      name: "Umbra Board",
      description: "A mystical board used to communicate directly with spirits.",
      use: "Ask questions to gain information about the ghost. Each question drains sanity, and breaking the connection may trigger a hunt.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CM3H8unz3UTuM0Pjq8qafHVhPj8vjj.png",
    },
    {
      name: "Music Box",
      description: "An ornate box that plays a haunting melody to attract spirits.",
      use: "Wind up to play music that attracts the ghost. Follow the ghost to find its room, but beware - stopping the music suddenly will trigger a hunt.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kGEQnzvf9XStYVskVLfAWNplybN5fK.png",
    },
    {
      name: "Haunted Mirror",
      description: "An antique mirror that reveals glimpses of the ghost's domain.",
      use: "Look into the mirror to see visions of the ghost's location. The mirror cracks over time, eventually triggering a hunt.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PVhlqhaOMh2IVxpFCfQMDI6bjPB4n3.png",
    },
    {
      name: "Summoning Circle",
      description: "A powerful ritual circle that forces the ghost to manifest.",
      use: "Light all candles around the circle to summon the ghost, triggering an immediate hunt but providing clear visual evidence.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J15W3Sm5Pt9SgnatiTDtQzix4BxgS5.png",
    },
  ]
  const title = "Cursed Objects"

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">{title}</h2>
        <p className="text-muted-foreground">
          Powerful but dangerous items that can help your investigation at great risk.
        </p>
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">About Cursed Objects</h3>
        <p className="mb-4">
          Cursed objects are special items that can be found randomly in investigation locations. These objects can
          provide valuable information or advantages, but using them comes with significant risks, including triggering
          hunts or draining sanity.
        </p>
        <p>
          Each cursed object has unique mechanics and consequences. Use them wisely and only when necessary, as they can
          quickly turn a controlled investigation into a dangerous situation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {cursedObjects.map((object) => (
          <div
            key={object.name}
            className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm overflow-hidden transition-all duration-200 hover:text-red-500 hover:border-red-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20"
          >
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={object.image || "/placeholder.svg"}
                alt={object.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold font-gonzaga mb-2">{object.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{object.description}</p>
              <div className="border-t border-primary/10 pt-3">
                <div className="flex items-start gap-2">
                  <HelpCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-xs">{object.use}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">Cursed Hunt</h3>
        <p className="mb-4">
          A Cursed Hunt is a special type of ghost hunt triggered by using or breaking a cursed object. These hunts have
          special properties:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>They can occur regardless of the ghost's normal hunting conditions</li>
          <li>They typically last longer than regular hunts</li>
          <li>The ghost may be more aggressive or move faster during a cursed hunt</li>
          <li>Some ghosts have special interactions with specific cursed objects</li>
          <li>Cursed hunts can provide rare evidence that's difficult to obtain otherwise</li>
        </ul>
      </div>
    </div>
  )
}

function JobSitesSection() {
  const [selectedSite, setSelectedSite] = useState(null)

  const jobSites = {
    small: [
      {
        name: "Juniper Road",
        description:
          "A one-story house with a history of unexplained phenomena. Recent reports suggest increased paranormal activity after renovations.",
        image: "/placeholder.svg?height=200&width=300&text=Juniper+Road",
        type: "Small",
        details:
          "Single floor layout with an open concept design. Multiple witnesses have reported strange noises and objects moving on their own.",
      },
      {
        name: "Lincoln Street",
        description: "Small house with a basement that has been the site of numerous ghostly encounters.",
        image: "/placeholder.svg?height=200&width=300&text=Lincoln+Street",
        type: "Small",
        details:
          "Two levels including a basement. The basement has been a hotspot for paranormal activity, with reports of cold spots and disembodied voices.",
      },
      {
        name: "Fenway Drive",
        description: "A modern small house where technology seems to malfunction frequently.",
        image: "/placeholder.svg?height=200&width=300&text=Fenway+Drive",
        type: "Small",
        details:
          "Contemporary design with smart home features that have been acting erratically. Multiple electronic devices have failed inexplicably.",
      },
    ],
    medium: [
      {
        name: "Lilim Lane",
        description: "A traditional Filipino two-floor house with strong spiritual connections.",
        image: "/placeholder.svg?height=200&width=300&text=Lilim+Lane",
        type: "Medium",
        details:
          "Traditional Filipino architecture with reports of ancestral spirits and supernatural occurrences tied to local folklore.",
      },
    ],
    large: [
      {
        name: "Old State Prison",
        description: "Abandoned prison complex with a dark history of violence and unexplained deaths.",
        image: "/placeholder.svg?height=200&width=300&text=Prison",
        type: "Large",
        details:
          "Multiple cell blocks, guard towers, and administrative buildings. High concentration of paranormal activity reported throughout the facility.",
      },
      {
        name: "St. Mary's School",
        description: "Former Catholic school with reports of supernatural activity in the classrooms and halls.",
        image: "/placeholder.svg?height=200&width=300&text=School",
        type: "Large",
        details:
          "Three-story building with numerous classrooms, a gymnasium, and a chapel. Strange occurrences increase during night hours.",
      },
    ],
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">Investigation Sites</h2>
        <p className="text-muted-foreground">
          Current active paranormal investigation locations categorized by size and complexity.
        </p>
      </div>

      <div className="relative">
        {/* Investigation Board Background */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10 rounded-lg"></div>

        {/* Small Sites */}
        <div className="space-y-6 p-6">
          <h3 className="text-xl font-semibold text-red-500 font-gonzaga border-b border-red-500/20 pb-2">
            Small Investigation Sites
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {jobSites.small.map((site) => (
              <Card
                key={site.name}
                className="bg-black/50 border-red-900/30 hover:border-red-500/50 transition-all duration-200 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedSite(site)}
              >
                <div className="p-4 space-y-4">
                  <img
                    src={site.image || "/placeholder.svg"}
                    alt={site.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h4 className="font-semibold text-red-400">{site.name}</h4>
                  <p className="text-sm text-white/70">{site.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Medium Sites */}
        <div className="space-y-6 p-6">
          <h3 className="text-xl font-semibold text-red-500 font-gonzaga border-b border-red-500/20 pb-2">
            Medium Investigation Sites
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobSites.medium.map((site) => (
              <Card
                key={site.name}
                className="bg-black/50 border-red-900/30 hover:border-red-500/50 transition-all duration-200 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedSite(site)}
              >
                <div className="p-4 space-y-4">
                  <img
                    src={site.image || "/placeholder.svg"}
                    alt={site.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h4 className="font-semibold text-red-400">{site.name}</h4>
                  <p className="text-sm text-white/70">{site.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Large Sites */}
        <div className="space-y-6 p-6">
          <h3 className="text-xl font-semibold text-red-500 font-gonzaga border-b border-red-500/20 pb-2">
            Large Investigation Sites
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobSites.large.map((site) => (
              <Card
                key={site.name}
                className="bg-black/50 border-red-900/30 hover:border-red-500/50 transition-all duration-200 hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedSite(site)}
              >
                <div className="p-4 space-y-4">
                  <img
                    src={site.image || "/placeholder.svg"}
                    alt={site.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h4 className="font-semibold text-red-400">{site.name}</h4>
                  <p className="text-sm text-white/70">{site.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Site Details Modal */}
      {selectedSite && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background/90 border border-red-900/30 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold font-gonzaga text-red-500">{selectedSite.name}</h2>
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

              <div className="space-y-4">
                <img
                  src={selectedSite.image || "/placeholder.svg"}
                  alt={selectedSite.name}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Location Type</h3>
                    <p className="text-white/70">{selectedSite.type} Investigation Site</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Overview</h3>
                    <p className="text-white/70">{selectedSite.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">Site Details</h3>
                    <p className="text-white/70">{selectedSite.details}</p>
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

function FieldHandbookSection() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    {
      title: "Introduction to Field Operations",
      content:
        "Welcome to the Field Investigator's Handbook. This guide contains essential information for conducting paranormal investigations safely and effectively. The following pages detail our active investigation sites and the protocols for each location.",
    },
    {
      title: "Small-Scale Operations",
      content:
        "Small investigation sites like Juniper Road, Lincoln Street, and Fenway Drive are ideal for new investigators. These locations provide valuable experience while maintaining relatively controlled environments.",
    },
    {
      title: "Juniper Road Analysis",
      content:
        "The one-story house on Juniper Road has been a focal point of paranormal activity since recent renovations. Multiple witnesses report objects moving independently and unexplained noises throughout the property.",
    },
    {
      title: "Lincoln Street Assessment",
      content:
        "The basement of the Lincoln Street property has been identified as a significant paranormal hotspot. Investigators should pay particular attention to temperature fluctuations and audio phenomena in this area.",
    },
    {
      title: "Fenway Drive Investigation",
      content:
        "Modern construction meets paranormal activity at Fenway Drive. The site's smart home systems provide unique opportunities for evidence gathering through electronic means.",
    },
    {
      title: "Medium-Scale Operations",
      content:
        "Lilim Lane represents our medium-scale investigation site. This traditional Filipino two-story house requires cultural sensitivity and awareness of local spiritual beliefs.",
    },
    {
      title: "Lilim Lane Cultural Context",
      content:
        "Understanding Filipino folklore and spiritual traditions is crucial for investigating Lilim Lane. The property's history intertwines with local beliefs about ancestral spirits and supernatural entities.",
    },
    {
      title: "Large-Scale Operations",
      content:
        "Our large-scale investigation sites, the Old State Prison and St. Mary's School, present complex challenges requiring extensive preparation and team coordination.",
    },
    {
      title: "Prison Complex Protocols",
      content:
        "The abandoned prison complex demands strict adherence to safety protocols. Its history of violence and unexplained deaths creates a highly active paranormal environment.",
    },
    {
      title: "St. Mary's School Guidelines",
      content:
        "Investigating St. Mary's School requires respect for its religious history. The chapel and certain classrooms have shown particularly high levels of paranormal activity.",
    },
    {
      title: "Final Notes and Warnings",
      content:
        "Remember that each investigation site carries unique risks. Always follow proper protocols, maintain communication with your team, and never investigate alone. Your safety is paramount.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">Field Investigator's Handbook</h2>
        <p className="text-muted-foreground">Essential guidelines and protocols for paranormal investigations.</p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Book Background */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10 rounded-lg"></div>

        {/* Book Content */}
        <div className="p-8 min-h-[600px] relative">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-red-500 font-gonzaga border-b border-red-500/20 pb-2">
              {pages[currentPage].title}
            </h3>

            <div className="prose prose-invert max-w-none">
              <p className="text-white/80 leading-relaxed">{pages[currentPage].content}</p>
            </div>

            {/* Page Number */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60">
              Page {currentPage + 1} of {pages.length}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <Button
            variant="ghost"
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous Page
          </Button>

          <Button
            variant="ghost"
            onClick={() => setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1))}
            disabled={currentPage === pages.length - 1}
            className="transition-all duration-200 hover:text-red-500 hover:bg-red-500/10 hover:-translate-y-1"
          >
            Next Page
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

// Update the PerksSection description to clarify they apply to a single run

function PerksSection() {
  const title = "Perks"
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-gonzaga text-primary">{title}</h2>
        <p className="text-muted-foreground">Special abilities and upgrades that apply for a single investigation.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {perks.map((perk) => (
          <div key={perk.name} className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold font-gonzaga">{perk.name}</h3>
              <div className="flex items-center gap-1">
                <DollarSign className="h-3 w-3 text-green-500" />
                <span className="text-sm font-medium">{perk.price}</span>
              </div>
            </div>
            <div className="mb-2">
              <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary-foreground">
                Level {perk.levelReq} Required
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{perk.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-primary/20 bg-background/70 backdrop-blur-sm p-6">
        <h3 className="text-xl font-semibold mb-4 font-gonzaga">About Perks</h3>
        <p className="mb-4">
          Perks are powerful buffs that enhance your abilities and equipment during a single investigation. While more
          expensive than standard equipment, they provide significant advantages that can make the difference between
          success and failure.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Perks apply only to the current investigation job</li>
          <li>You must purchase perks again for each new investigation</li>
          <li>Higher level perks provide more significant advantages</li>
          <li>Some perks can be combined for greater effect</li>
          <li>Invest in perks that match your investigation style</li>
        </ul>
      </div>
    </div>
  )
}

// Add new perks array
const perks = [
  {
    name: "Strength",
    description: "Increases stamina for longer running duration.",
    price: 175,
    levelReq: 15,
  },
  {
    name: "The Emperor",
    description: "Adds one additional inventory slot.",
    price: 225,
    levelReq: 25,
  },
  {
    name: "The Hanged Man",
    description: "Allows crosses to be used twice before burning out.",
    price: 125,
    levelReq: 8,
  },
]

