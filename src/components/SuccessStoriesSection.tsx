
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const successStories = [
  {
    name: "Chaitanya",
    university: "Wisconsin Milwaukee",
    country: "USA",
    testimonial: "Career-Guide helped me navigate the complex admission process at Wisconsin Milwaukee, turning my dream of studying in the USA into reality.",
  },
  {
    name: "Poojita",
    university: "Wisconsin Milwaukee",
    country: "USA",
    testimonial: "I'm grateful for the personalized guidance that helped me secure admission and a scholarship at Wisconsin Milwaukee.",
  },
  {
    name: "Praneeth",
    university: "New Jersey Institute of Technology",
    country: "USA",
    testimonial: "The team at Career-Guide provided exceptional support throughout my application process for NJIT. Their expertise was invaluable.",
  },
  {
    name: "Geeta",
    university: "University of Bridge Port",
    country: "USA",
    testimonial: "Career-Guide's counselors were extremely knowledgeable and helped me find the perfect program at Bridge Port University.",
  },
  {
    name: "Harsha",
    university: "Clark University",
    country: "USA",
    testimonial: "From test preparation to visa guidance, Career-Guide provided comprehensive support for my journey to Clark University.",
  },
  {
    name: "Kumar",
    university: "Clark University",
    country: "USA",
    testimonial: "I couldn't have navigated the complex admission and visa process without Career-Guide's expert assistance.",
  },
  {
    name: "Vijay",
    university: "Gannon University",
    country: "USA",
    testimonial: "Career-Guide's personalized approach helped me find the right program at Gannon University that aligned with my career goals.",
  },
  {
    name: "Shaik Javeed",
    university: "BPP University",
    country: "UK",
    testimonial: "Thanks to Career-Guide, my transition to studying at BPP University in the UK was smooth and stress-free.",
  },
];

const SuccessStoriesSection = () => {
  return (
    <section id="success-stories" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 mb-4 text-sm font-medium text-brand-blue">
            <span>Success Stories</span>
          </div>
          <h2 className="section-title">Our Student Achievements</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Meet our successful students who are now pursuing their dreams at prestigious universities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {successStories.map((story, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-brand-blue to-brand-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  {story.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-lg">{story.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{story.university}, {story.country}</span>
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic">{story.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
