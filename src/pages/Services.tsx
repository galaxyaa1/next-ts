import React from 'react';
import { Card } from '@nextui-org/react';

const servicesData = [
  {
    title: 'Web Development',
    description: 'Build responsive and high-performing websites.',
  },
  {
    title: 'Mobile App Development',
    description: 'Create cross-platform mobile applications.',
  },
  {
    title: 'UI/UX Design',
    description: 'Design user-friendly interfaces and experiences.',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your website visibility on search engines.',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your website visibility on search engines.',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your website visibility on search engines.',
  },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicesData.map((service, index) => (
          <Card key={index} className="max-w-xs p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p> {/* Replaced Text with p tag */}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
