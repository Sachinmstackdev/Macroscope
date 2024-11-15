import React from 'react'

interface CustomCardProps {
  title: string
  description: string
  imageUrl: string
}

function CustomCard({ title, description, imageUrl }: CustomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-[400px] flex flex-col">
      <img
        src={imageUrl}
        alt="Placeholder"
        className="w-full h-60 object-cover"
      />
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

export default function Component() {
  const useCases = [
    {
      title: "Creators and Influencers",
      description:
        "Create a market map of your niche that becomes a go-to resource for your audience and drive qualified leads to your courses, newsletter, YouTube channel and more.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"
    },
    {
      title: "Directory Makers",
      description:
        "Turn your directory data into a visually engaging market map that easily captures attention, gets shared on social media, and drives traffic back to your directory site.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
    },
    {
      title: "Communities",
      description:
        "Engage your community members with a crowed-sourced map that promotes active participation and discussions, while creating a valuable asset for the community.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop"
    },
  ]

  return (
    <div className="w-full relative">
      {/* Cards section */}
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="bg-gray-200 p-6 rounded-lg">
          {/* Medium card section with text */}
          <div className="text-center mb-8">
            <h2 className="text-sm uppercase tracking-wide mb-4">Use Cases</h2>
            <p className="text-3xl font-medium max-w-3xl mx-auto">
              Capture the complexity of your niche in a visually engaging map that gets
              attention and captivates your audience.
            </p>
          </div>

          {/* Grid of cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <CustomCard
                key={index}
                title={useCase.title}
                description={useCase.description}
                imageUrl={useCase.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}