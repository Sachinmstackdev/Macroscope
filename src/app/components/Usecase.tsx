'use client'

import React from 'react';
import { DM_Sans } from 'next/font/google'
import Image from 'next/image';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500', '700', '800'] })

const Usecase = () => {
  const cards = [
    {
      title: "Creators and Influencers",
      description: "Create a market map of your niche that becomes a go-to resource for your audience and drive qualified leads to your courses, newsletter, YouTube channel and more.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Directory Makers",
      description: "Turn your directory data into a visually engaging market map that easily captures attention, gets shared on social media, and drives traffic back to your directory site.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Communities",
      description: "Engage your community members with a crowed-sourced map that promotes active participation and discussions, while creating a valuable asset for the community.",
      image: "https://placehold.co/600x400",
    }
  ];

  return (
    <div className="w-full bg-[#F3F2F0]">
      <section className={`w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center ${dmSans.className}`}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 sm:mb-8 border border-black rounded-full">
            <span className="text-sm tracking-wide text-gray-900">
              USE CASES
            </span>
          </div>
          
          <p className="font-['DM_Sans'] font-normal text-[48px] leading-[105%] text-[#464646] max-w-5xl mx-auto mb-16 sm:mb-20">
            Create interactive and insightful market maps that get attention, drive traffic, engage audience and boost shares.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-8 border-white flex flex-col"
              >
                <div className="h-48 sm:h-56 lg:h-64 w-full bg-gray-100 rounded-2xl overflow-hidden relative">
                  <Image 
                    src={card.image}
                    alt={`${card.title} illustration`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e: any) => {
                      e.currentTarget.src = '/images/placeholder.png'
                    }}
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1">
                  <h3 className="font-['DM_Sans'] font-extrabold text-xl sm:text-2xl text-[#464646] mb-3 text-left">
                    {card.title}
                  </h3>
                  <p className="font-['DM_Sans'] font-medium text-xs sm:text-sm text-[#464646] text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Usecase;