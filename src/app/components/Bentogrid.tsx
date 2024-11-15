import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageIcon, PaintbrushIcon, DatabaseIcon, ShareIcon, BarChart3Icon } from 'lucide-react';

interface StandardFeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StandardFeatureCard: React.FC<StandardFeatureCardProps> = ({ title, description, icon }) => (
  <Card className="w-[313px] h-[344px] bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-[7px] border-white">
    <div className="bg-[#F3F4F6] w-full h-[200px] flex items-center justify-center">
      {icon}
    </div>
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const PublishExportCard: React.FC = () => (
  <Card className="w-[654px] h-[344px] bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-[7px] border-white">
    <div className="bg-[#F3F4F6] w-full h-[200px] flex items-center justify-center">
      <ShareIcon className="w-12 h-12 text-gray-400" />
    </div>
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold mb-2">Publish & Export</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Publish the map on your domain or embed it within your web page. The published map is optimized 
        for SEO out of the box. Export the map as a image for sharing on your newsletter and social media.
      </p>
    </CardContent>
  </Card>
);

const BentoGrid: React.FC = () => {
  const standardFeatures = [
    {
      title: "Configure Layout",
      description: "Organize the groups on the map with easily drag-and-drop. Resize the group with with auto adjusting items.",
      icon: <ImageIcon className="w-12 h-12 text-gray-400" />
    },
    {
      title: "Customize Style",
      description: "Tailor the style, shape and colors both at a group level and a map level to make the map look unique and reflect your style.",
      icon: <PaintbrushIcon className="w-12 h-12 text-gray-400" />
    },
    {
      title: "Manage Data",
      description: "Easily add and update data in a familiar, Google Sheets like interface, for a smooth and streamlined data management.",
      icon: <DatabaseIcon className="w-12 h-12 text-gray-400" />
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#F3F4F6]">
      <div className="max-w-[1024px] mx-auto">
        <h1 className="text-center text-2xl mb-2">Features</h1>
        <h2 className="text-2xl md:text-3xl font-normal text-center mb-12">
          All you need to create interactive market maps, in one place
        </h2>

        <div className="flex flex-wrap justify-center gap-7 mb-7">
          {standardFeatures.map((feature, index) => (
            <StandardFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-7">
          <PublishExportCard />
          <StandardFeatureCard
            title="Analyze Traffic"
            description="Get real-time analytics of traffic and events across the map and pages. Analytics Powered by Umami.is"
            icon={<BarChart3Icon className="w-12 h-12 text-gray-400" />}
          />
        </div>

        <div className="text-center mt-12 text-gray-600">
          <p className="mb-2">We are constantly adding new features every week.</p>
          <div className="space-x-1">
            <a href="#" className="text-gray-600 underline hover:text-gray-800">
              Roadmap
            </a>
            <span>and</span>
            <a href="#" className="text-gray-600 underline hover:text-gray-800">
              Changelog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;