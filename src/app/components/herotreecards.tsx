import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const cases = [
    {
      title: "Creators and Influencers",
      description:
        "Create a market map of your niche that becomes a go-to resource for your audience and drive qualified leads to your courses, newsletter, YouTube channel and more.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Directory Makers",
      description:
        "Turn your directory data into a visually engaging market map that easily captures attention, gets shared on social media, and drives traffic back to your directory site.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Communities",
      description:
        "Engage your community members with a crowed-sourced map that promotes active participation and discussions, while creating a valuable asset for the community.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Use Cases</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Capture the complexity of your niche in a visually engaging map that gets attention and captivates your audience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cases.map((item, index) => (
            <div key={index} className="relative group">
              <Card className="relative h-full pt-24 mt-8">
                <div className="absolute -top-8 left-4 right-4 h-32 rounded-lg overflow-hidden group-hover:-top-10 transition-all duration-300">
                  <Image
                    src={item.image}
                    alt={`${item.title} illustration`}
                    className="object-cover w-full h-full"
                    width={600}
                    height={400}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}