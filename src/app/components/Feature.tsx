'use client'

import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/FeatureGrid"

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
      image: "/images/features/configure-layout.png",
    },
    {
      title: "Customize Style",
      description: "Tailor the style, shape and colors both at a group level and a map level to make the map look unique and reflect your style.",
      image: "/images/features/customize-style.png",
    },
    {
      title: "Manage Data",
      description: "Easily add and update data in a familiar, Google Sheets like interface, for a smooth and streamlined data management.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Export as Image",
      description: "Export the map as high-quality images for sharing on your social media, newsletter and presentation.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Publish as Website",
      description: "Publish the map on your domain or embed it inside your web page. The published map is optimized for SEO out of the box.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Analyze Traffic",
      description: "Get real-time analytics of traffic and events across the map and pages. Analytics Powered by Umami.is",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-16 px-4 bg-[#F9F9F8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-[#464646] bg-[#F3F2F0] rounded-full text-sm mb-4">
            FEATURES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#464646] max-w-3xl mx-auto">
            All you need to create interactive market maps, in one place
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
              <Card className="border-2 border-white bg-white h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-[3/2] relative bg-[#F3F2F0] rounded-t-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={`${feature.title} illustration`}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.currentTarget.src = '/images/placeholder.png'
                      }}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold text-[#464646] mb-3">
                    {feature.title}
                  </CardTitle>
                  <p className="text-[#515151] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#515151] mb-2">
            We are constantly adding new features
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#roadmap"
              className="font-['DM_Sans'] font-medium text-[#515151] tracking-[-0.05em] leading-[126%] underline decoration-1 underline-offset-4"
            >
              Roadmap
            </a>
            <span className="text-[#C1C1C1]">and</span>
            <a
              href="#changelog"
              className="font-['DM_Sans'] font-medium text-[#515151] tracking-[-0.05em] leading-[126%] underline decoration-1 underline-offset-4"
            >
              Changelog
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}