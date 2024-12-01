'use client'

import Link from "next/link"
import { Facebook, Instagram, Twitter,  MessageCircleHeart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/contactbg.jpeg"
        alt="Interior background"
        className="object-cover fixed inset-0 -z-10"
        fill
        priority
        quality={100}
      />
      
      <header className="fixed top-0 left-0 right-0 py-6 px-4 md:px-6 lg:px-8 backdrop-blur-md bg-white/20 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Ooh Interiors</h1>
          <div className="space-x-4">
            <Link href="/" className="text-white hover:underline">Home</Link>
          </div>
        </nav>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24 min-h-screen flex items-center">
        <div className="flex flex-col items-center justify-center space-y-8 backdrop-blur-sm bg-white/30 p-8 rounded-2xl w-full">
          <h2 className="text-3xl font-bold text-center text-white">Connect With Us</h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="min-w-[200px] relative overflow-hidden group" 
              asChild
            >
              <Link href="https://www.facebook.com/profile.php?id=100090615556188&mibextid=ZbWKwL" target="_blank">
                <span className="absolute inset-0 bg-[#1877F2] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center gap-2 group-hover:text-white">
                  <Facebook />
                  Facebook
                </span>
              </Link>
            </Button>

            <Button 
              variant="outline" 
              className="min-w-[200px] relative overflow-hidden group" 
              asChild
            >
              <Link href="https://instagram.com" target="_blank">
                <span className="absolute inset-0 bg-[#E4405F] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center gap-2 group-hover:text-white">
                  <Instagram />
                  Instagram
                </span>
              </Link>
            </Button>

            <Button 
              variant="outline" 
              className="min-w-[200px] relative overflow-hidden group" 
              asChild
            >
              <Link href="https://twitter.com" target="_blank">
                <span className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center gap-2 group-hover:text-white">
                  <Twitter />
                  Twitter
                </span>
              </Link>
            </Button>

            <Button 
              variant="outline" 
              className="min-w-[200px] relative overflow-hidden group" 
              asChild
            >
              <Link href="https://wa.me/+2348151312848" target="_blank">
                <span className="absolute inset-0 bg-[#25D366] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center justify-center gap-2 group-hover:text-white">
                  <MessageCircleHeart/>
                  WhatsApp
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-white/20 py-6 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p>&copy; 2024 Ooh Interiors. All rights reserved.</p>
          <p>ogba Ikeja, Ikeja Lagos</p>
        </div>
      </footer>
    </div>
  )
}
