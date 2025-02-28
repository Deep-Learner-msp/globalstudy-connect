
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {successStories.slice(0, 8).map((story, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{story.name}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span className="mr-2">{story.university}</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-gray-400"></span>
                  <span className="ml-2">{story.country}</span>
                </div>
                <p className="text-gray-600 text-sm">{story.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
