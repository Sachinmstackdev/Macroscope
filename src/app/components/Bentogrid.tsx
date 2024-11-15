import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageIcon, PaintbrushIcon, DatabaseIcon, ShareIcon, BarChart3Icon, ArrowRight } from 'lucide-react';

interface StandardFeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StandardFeatureCard: React.FC<StandardFeatureCardProps> = ({ title, description, icon }) => (
  <Card className="w-[320px] h-[340px] bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-[7px] border-white">
    <div className="bg-[#F3F4F6] w-full h-[200px] flex items-center justify-center rounded-2xl">
      {icon}
    </div>
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const PublishExportCard: React.FC = () => (
  <Card className="w-[668px] h-[340px] bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-[7px] border-white">
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold mb-2">Publish Map </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Publish the map as a website or embed inside your website. The map is optimized for performance and SEO. export as image and website with your domain.
      </p>
    </CardContent>
    <div className="bg-[#F3F4F6] w-full h-[200px] flex items-center justify-center rounded-2xl">
      <ShareIcon className="w-12 h-12 text-gray-400" />
    </div>
  </Card>
);

const BentoGrid: React.FC = () => {
  const standardFeatures = [
    {
      title: "Layout Customization",
      description: "Organize the groups on the map with easily drag-and-drop. Resize the group with with auto adjusting items.",
      icon: <ImageIcon className="w-12 h-12 text-gray-400" />
    },
    {
      title: "Style Customization",
      description: "Tailor the style, shape and colors both at a group level and a map level to make the map look unique and reflect your style.",
      icon: <PaintbrushIcon className="w-12 h-12 text-gray-400" />
    },
    {
      title: "Data Management",
      description: "Easily add and update data in a familiar, Google Sheets like interface, for a smooth and streamlined data management.",
      icon: <DatabaseIcon className="w-12 h-12 text-gray-400" />
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#F3F4F6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block px-4 py-1 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium">
            FEATURES
          </div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight max-w-4xl mx-auto">
            All you need to create interactive market maps, in one place
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {standardFeatures.map((feature, index) => (
            <StandardFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <PublishExportCard />
          <StandardFeatureCard
            title="Traffic Analytics"
            description="Get real-time analytics of traffic and events across the map and pages. Analytics Powered by Umami.is"
            icon={<BarChart3Icon className="w-12 h-12 text-gray-400" />}
          />
        </div>

        <div className="text-center mt-12">
        <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-lg px-8 py-4 font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center mx-auto">
          Create A Map For Free
          <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;