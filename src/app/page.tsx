'use client'

import Link from "next/link"
import { Menu, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#B8B5B1]">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="text-xl font-light text-white">
              Ooh Interiors
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/collections" className="text-sm text-white hover:opacity-70">
                Collections
              </Link>
              <Link href="#" className="text-sm text-white hover:opacity-70">
                Company
              </Link>
              
              <Link href="/contactus" className="text-sm text-white hover:opacity-70">
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden text-white hover:opacity-70"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
              
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden backdrop-blur-md bg-white/20 py-4">
              <nav className="flex flex-col space-y-4 px-4">
                <Link href="/collections" className="text-sm text-white hover:opacity-70">
                  Collections
                </Link>
                <Link href="#" className="text-sm text-white hover:opacity-70">
                  Company
                </Link>
                <Link href="#" className="text-sm text-white hover:opacity-70">
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="relative min-h-screen flex items-center">
          <Image
            src="/contactbg.jpeg"
            alt="Wooden furniture showcase"
            className="object-cover"
            fill
            priority
            quality={100}
          />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col justify-center backdrop-blur-md bg-white/30 p-8 rounded-2xl w-full lg:w-2/5">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight text-white">
                Discover the Perfect Pieces to Elevate Your Home
              </h1>
              <p className="mt-4 text-lg text-white/90">
                Furniture, Art, Lighting, and More
              </p>
              <Link href="/collections" className="hover:scale-105 transition-all duration-300">
                <Button variant="rounded" className="mt-8 text-lg py-6 px-8 bg-white text-black hover:bg-white/90 transition-all duration-300">
                  Browse Collection
                  <ArrowRight className="ml-2 h-8 w-8 bg-black rounded-full text-white" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
