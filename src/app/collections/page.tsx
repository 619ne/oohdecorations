'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

// Mock product data
const products = [
  { id: 1, name: "Cented candles", category: "Art & Aesthetics", price: 999.99, image: "/art3.jpg"},
  { id: 2, name: "Wall clock", category: "Art & Aesthetics", price: 129.99, image: "/art4.jpg" },
  { id: 3, name: "Abstract Wall Art", category: "Wall Decor", price: 199.99, image: "/wall1.jpg" },
  { id: 4, name: "Ceramic Vase", category: "Accessories", price: 49.99, image: "/vase2.jpg" },
  { id: 5, name: "Dining Table", category: "Furniture", price: 799.99, image: "/furniture2.jpg" },
  { id: 6, name: "Table Lamp", category: "Lighting", price: 79.99, image: "/lamp1.jpg" },
  { id: 7, name: "Wallpaper Roll", category: "Wall Decor", price: 89.99, image: "/wall2.jpg" },
  { id: 8, name: "Channel Decor book", category: "Accessories", price: 39.99, image: "/ass1.jpg" },
  { id: 9, name: "Hour glass", category: "Art & Aesthetics", price: 39.99, image: "/art2.jpg" },
  // Add more products as needed
]

export default function ProductPage() {
  const [category, setCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter(product => {
    const matchesCategory = category === "all" ? true : 
      category === "art" ? product.category === "Art & Aesthetics" :
      product.category.toLowerCase() === category;
    
    return matchesCategory && product.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div className="min-h-screen bg-[#B8B5B1]">
      <div className="relative h-[400px]">
        <Image
          src="/contactbg.jpeg"
          alt="Collection header background"
          className="object-cover"
          fill
          priority
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">Ooh Interiors</h1>
        </div>
        <header className="fixed top-0 left-0 right-0 py-6 px-4 md:px-6 lg:px-8 backdrop-blur-md bg-white/20 z-50">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="space-x-4">
              <Link href="/contactus" className="text-white hover:opacity-70 transition-opacity">Contact Us</Link>
            </div>
            <div className="space-x-4">
              <Link href="/" className="text-white hover:opacity-70 transition-opacity">Home</Link>
            </div>
          </nav>
        </header>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3">
            <Select onValueChange={(value) => setCategory(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="lighting">Lighting</SelectItem>
                <SelectItem value="wall decor">Wall Decor</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="art">Art & Aesthetics</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-2/3 relative">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <Image src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <p className="text-muted-foreground">{product.category}</p>
                <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/contactus">Purchase! contact us.</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No products found.</p>
        )}

        {/* Pagination placeholder */}
        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="mr-2">Previous</Button>
          <Button variant="outline">Next</Button>
        </div>
      </main>

      <footer className="bg-muted py-6 px-4 md:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 InteriorElegance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}