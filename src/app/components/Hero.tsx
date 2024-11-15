'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Button({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  ...props 
}: {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  className?: string;
  [key: string]: any;
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    default: 'bg-black text-white hover:bg-gray-800',
    outline: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100',
  }
  const sizes = {
    default: 'h-10 py-2 px-4',
    lg: 'h-11 px-8',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div className="bg-white">
      <header className="container mx-auto px-4 py-4 relative z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg"
              alt="Macroscope Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-xl font-semibold">Macroscope</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Log in</Link>
            <Button>Create a map for free →</Button>
          </nav>
          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col h-full justify-center items-center space-y-6 p-4">
          <Link href="#" className="text-xl text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link href="#" className="text-xl text-gray-600 hover:text-gray-900">Log in</Link>
          <Button className="w-full">Create a map for free →</Button>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <main className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
          Build authority in your niche<br className="hidden sm:inline" />
          with <span className="italic">Interactive Market Map</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Macroscope helps you easily create interactive and insightful market maps
          that get attention, drive traffic, engage audience and boost shares.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="w-full sm:w-auto">Create a map for free →</Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            See an example
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Button>
        </div>
      </main>

      <div className="container mx-auto px-4 py-8">
        <div className="px-5">
          <Image
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23666666'%3EPlaceholder Image%3C/text%3E%3C/svg%3E"
            alt="Directory Stack Market Map Example"
            width={1000}
            height={500}
            className="w-full max-w-6xl mx-auto h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 -mt-32 w-full max-w-6xl mx-auto px-6">
        {/* Your Hero content */}
      </div>
    </div>
  )
}