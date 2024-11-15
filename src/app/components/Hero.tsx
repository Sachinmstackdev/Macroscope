"use client";

import React, { useState } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import Image from 'next/image';
import MapHeader from './MapHeader';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="w-full px-4 md:px-8 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black dark:bg-white transform rotate-45" />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Macroscope</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
            <a href="#login" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Log in</a>
            <button className="bg-black dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              <span>Create A Map For Free</span>
              <span className="transform rotate-[-45deg]">→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b dark:border-gray-700 z-50">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
              <a href="#login" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Log in</a>
              <button className="bg-black dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                <span>Create A Map For Free</span>
                <span className="transform rotate-[-45deg]">→</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 max-w-4xl mx-auto text-gray-900 dark:text-white">
          Build authority in your niche with{' '}
          <span className="italic">Interactive Market Map</span>.
        </h1>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Macroscope helps you easily create interactive and insightful market maps
          that get attention, drive traffic, engage audience and boost shares.
        </p>

        <button className="bg-black text-white px-8 py-3 rounded-full flex items-center space-x-2 mx-auto hover:bg-gray-800 transition-colors">
          <span>Create A Map For Free</span>
          <span className="transform rotate-[-45deg]">→</span>
        </button>

        {/* Market Map Container */}
        <div className="mt-16">
          {/* Map Header */}
          <MapHeader />
          
          {/* Market Map Image */}
          <div className="relative h-[600px] bg-gray-200 animate-pulse rounded-b-lg">
            <Image 
              src="/market-map-example.jpg"
              alt="Interactive Market Map Example"
              fill
              className="object-cover rounded-b-lg shadow-lg"
              priority
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA"
              placeholder="blur"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;