'use client'

import { motion } from "framer-motion"
import Image from 'next/image'

interface Feature {
  title: string
  description: string
  image: string
}

export default function Component() {
  const features: Feature[] = [
    {
      title: "Configure Layout",
      description: "Organize the groups on the map with easily drag-and-drop. Resize the group with with auto adjusting items.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Customize Style",
      description: "Tailor the style, shape and colors both at a group level and a map level to make the map look unique and reflect your style.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Manage Data",
      description: "Easily add and update data in a familiar, Google Sheets like interface, for a smooth and streamlined data management.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Export as Image",
      description: "Export the map as high-quality images for sharing on your social media, newsletter and presentation.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Publish as Website",
      description: "Publish the map on your domain or embed it inside your web page. The published map is optimized for SEO out of the box.",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Analyze Traffic",
      description: "Get real-time analytics of traffic and events across the map and pages. Analytics Powered by Umami.is",
      image: "https://placehold.co/600x400",
    },
  ]

  return (
    <section className="py-16 px-4 bg-[#F3F2F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-[#464646] bg-[#F3F2F0] rounded-full text-sm mb-4 border border-black font-medium">
            FEATURES
          </span>
          <h2 className="font-['DM_Sans'] font-normal text-[48px] leading-[105%] text-[#464646] max-w-3xl mx-auto">
            All you need to create interactive market maps,
            in one place
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-8 border-white flex flex-col h-[420px]">
                <div className="h-48 sm:h-56 lg:h-64 w-full bg-gray-100 rounded-2xl overflow-hidden relative">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} illustration`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e: any) => {
                      e.currentTarget.src = '/images/placeholder.png'
                    }}
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1">
                  <h3 className="font-['DM_Sans'] font-extrabold text-xl sm:text-2xl text-[#464646] mb-3 text-left">
                    {feature.title}
                  </h3>
                  <p className="font-['DM_Sans'] font-medium text-xs sm:text-sm text-[#464646] text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="font-['DM_Sans'] font-medium text-[20px] text-[#515151] leading-[126%] mb-4">
            We are constantly adding new features<br />
            <span className="space-x-2">
              <a href="#roadmap" className="underline decoration-1 underline-offset-4 hover:text-[#464646]">Roadmap</a>
              <span>and</span>
              <a href="#changelog" className="underline decoration-1 underline-offset-4 hover:text-[#464646]">Changelog</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}