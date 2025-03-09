"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, FileText, Skull } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IntroScreenProps {
  onContinue: () => void
}

export function IntroScreen({ onContinue }: IntroScreenProps) {
  const [showContract, setShowContract] = useState(false)

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-auto">
      <div className="w-full max-w-3xl px-6 py-12">
        {!showContract ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/channels4_profile-removebg-preview-dfsEndePFQrTqQFwG6qqO2p1gaE3DG.png"
                alt="Demonology Logo"
                className="w-24 h-24"
              />
              <div className="ml-4 text-left">
                <h1 className="text-3xl font-bold text-red-600 font-gonzaga">Demonology Solutions</h1>
                <p className="text-white/80">Research Corporation</p>
              </div>
            </div>

            <div className="bg-black/50 border border-red-900/30 rounded-lg p-6 text-white/90">
              <h2 className="text-xl font-semibold text-red-500 mb-4 font-gonzaga">Welcome, Investigator</h2>

              <div className="space-y-4 text-sm md:text-base">
                <p>
                  You have been selected to join the ranks of Demonology Solutions, a clandestine organization dedicated
                  to the investigation and documentation of paranormal entities.
                </p>

                <p>
                  Our mission is to gather evidence, identify supernatural threats, and protect the public from forces
                  beyond their comprehension. We operate in the shadows, maintaining strict confidentiality about our
                  findings.
                </p>

                <p>
                  As a field investigator, you will be deployed to locations with reported paranormal activity. Your
                  task is to gather evidence, identify the type of entity present, and safely document your findings.
                  The entities you will encounter are dangerous and unpredictable.
                </p>

                <p className="text-red-400 font-medium">
                  Before proceeding, you must review and sign our confidentiality agreement. This contract is binding
                  and violation of its terms will result in immediate termination.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setShowContract(true)}
                  className="bg-red-900 hover:bg-red-800 text-white group transition-all duration-200 hover:-translate-y-1"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View Contract
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Skull className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-xl font-bold text-red-600 font-gonzaga">Confidentiality Agreement</h2>
              </div>
              <p className="text-white/60 text-sm">FORM DS-117</p>
            </div>

            <div className="bg-black/50 border border-red-900/30 rounded-lg p-6 text-white/90">
              <div className="space-y-4 text-sm md:text-base">
                <p className="uppercase text-center font-bold text-red-500 border-b border-red-900/30 pb-2">
                  STRICTLY CONFIDENTIAL
                </p>

                <p>
                  I, the undersigned, hereby acknowledge that I will be exposed to classified information regarding
                  paranormal entities, supernatural phenomena, and confidential investigation techniques during my
                  employment with Demonology Solutions Research Corporation.
                </p>

                <p>I understand and agree to the following terms:</p>

                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    I will not disclose any information about the existence, nature, or findings of paranormal
                    investigations to unauthorized individuals.
                  </li>
                  <li>
                    I will not share evidence, documentation, or research materials with any third parties without
                    explicit written permission.
                  </li>
                  <li>
                    I acknowledge that the entities I will encounter pose significant risks to my physical and mental
                    wellbeing.
                  </li>
                  <li>
                    I understand that Demonology Solutions Research Corporation cannot guarantee my safety during
                    investigations.
                  </li>
                  <li>
                    I will follow all protocols and safety procedures as outlined in the Field Investigator's Handbook.
                  </li>
                  <li>
                    I will report any unusual experiences, symptoms, or psychological effects following an
                    investigation.
                  </li>
                  <li>
                    I acknowledge that violation of this agreement may result in immediate termination and potential
                    legal action.
                  </li>
                </ol>

                <p className="text-red-400 italic mt-6">
                  By signing below, I confirm that I have read, understood, and agree to abide by all terms of this
                  confidentiality agreement. I sign this document of my own free will, with full understanding of the
                  risks involved in paranormal investigation.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={onContinue}
                  className="bg-red-900 hover:bg-red-800 text-white group transition-all duration-200 hover:-translate-y-1"
                >
                  Proceed to Signature
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

