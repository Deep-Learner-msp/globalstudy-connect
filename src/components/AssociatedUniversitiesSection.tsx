import { useState } from "react";
import { GraduationCap, Building, MapPin, BookOpen, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const universities = {
  uk: [
    {
      name: "Northumbria University",
      location: "Newcastle upon Tyne, UK",
      programs: ["Business", "Engineering", "Computer Science", "Arts & Design"],
      image: "/lovable-uploads/757b3d2c-c7d8-4418-acdd-218f670dc3f3.png"
    },
    {
      name: "Coventry University",
      location: "Coventry, UK",
      programs: ["Engineering", "Business", "Health Sciences", "Media"],
      image: "/lovable-uploads/2defd8e6-cb31-491b-8b76-a324d0ad0a6e.png"
    },
    {
      name: "Ravensbourne University London",
      location: "London, UK",
      programs: ["Digital Media", "Design", "Fashion", "Architecture"],
      image: "/lovable-uploads/9096699d-6d00-4af0-a48f-8417107ba755.png"
    },
    {
      name: "University of Roehampton",
      location: "London, UK",
      programs: ["Psychology", "Education", "Business", "Life Sciences"],
      image: "/lovable-uploads/d1de45b8-944d-4b75-b48b-744e9adc6474.png"
    },
    {
      name: "Kings College London",
      location: "London, UK",
      programs: ["Medicine", "Law", "Business", "Humanities"],
      image: "/lovable-uploads/b1524c5f-d01e-4f22-b92f-a91d00c20da6.png"
    },
    {
      name: "Edinburgh University",
      location: "Edinburgh, UK",
      programs: ["Arts", "Medicine", "Science", "Engineering"],
      image: "/lovable-uploads/db1ccd30-7c99-4f30-974e-fad08183c6b5.png"
    },
    {
      name: "University of Chester",
      location: "Chester, UK",
      programs: ["Business", "Education", "Health", "Arts"],
      image: "/lovable-uploads/2b587ba0-6004-43ae-b66c-a8f3371853b9.png"
    },
    {
      name: "Exeter University",
      location: "Exeter, UK",
      programs: ["Business", "Humanities", "Science", "Social Sciences"],
      image: "/lovable-uploads/acfe74b9-31f3-4712-b6c5-a7a4d2757a4c.png"
    },
  ],
  usa: [
    {
      name: "St. Francis College",
      location: "Brooklyn, New York",
      degrees: ["MS in Computer Science", "MS in Information Tech", "MBA", "MS in Professional Accountancy"],
      features: ["Hybrid Format", "CPT & OPT Opportunities", "STEM Scholarships", "91% Employment Rate"],
      image: "/lovable-uploads/8c78a54e-7879-4627-b1a8-be65693cbfcc.png"
    },
    {
      name: "Cumberland University",
      location: "Lebanon, Tennessee",
      degrees: ["MS in Information Technology Management", "MS in Engineering Management"],
      features: ["Best Regional Universities in the South", "Top Performers on Social Mobility", "OPT Eligible STEM Programs"],
      image: "/lovable-uploads/8500b8b9-255d-47a9-85a6-2d8a6aeb5bb0.png"
    },
    {
      name: "Golden Gate University",
      location: "San Francisco, California",
      degrees: ["Professional MS in Data Science", "Professional MS in IT Management", "Professional MS in Computer Science"],
      features: ["40% Exclusive Scholarship", "Founded in 1901", "68,000+ Alumni"],
      image: "/lovable-uploads/be50bdc1-3dfc-4166-8be7-1a13475fefd3.png"
    },
    {
      name: "Adelphi University",
      location: "New York",
      degrees: ["MS Computer Science", "MS Supply Chain Management", "MS Business Analytics", "MS Health Informatics"],
      features: ["Up to 50% Scholarship", "OPT Eligible STEM Programs", "Proximity to New York City"],
      image: "/lovable-uploads/7baf6795-943c-4502-82de-a12f7f1fa695.png"
    },
    {
      name: "Faulkner University",
      location: "Alabama & Atlanta",
      degrees: ["MS Management in Business Analytics", "MS Management in Information Technology", "MS Management in Data Science"],
      features: ["STEM Programs", "Average Class Size: 15", "Established in 1906"],
      image: "/lovable-uploads/3e36fbed-9fa7-4bd2-a4fa-5bed56c2876a.png"
    }
  ]
};

const AssociatedUniversitiesSection = () => {
  const [activeCountry, setActiveCountry] = useState<"uk" | "usa">("uk");
  const [activeUniversity, setActiveUniversity] = useState(universities[activeCountry][0]);

  const handleCountryChange = (country: "uk" | "usa") => {
    setActiveCountry(country);
    setActiveUniversity(universities[country][0]);
  };

  return (
    <section id="associated-universities" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 mb-4 text-sm font-medium text-brand-blue">
            <span>Partner Institutions</span>
          </div>
          <h2 className="section-title">Explore Associated Universities</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Discover prestigious universities that partner with Career-Guide to offer quality education and excellent career opportunities.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => handleCountryChange("uk")}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeCountry === "uk"
                  ? "bg-brand-blue text-white shadow-md"
                  : "bg-white hover:bg-brand-blue/10"
              }`}
            >
              <MapPin size={18} />
              <span>UK Universities</span>
            </button>
            <button
              onClick={() => handleCountryChange("usa")}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeCountry === "usa"
                  ? "bg-brand-blue text-white shadow-md"
                  : "bg-white hover:bg-brand-blue/10"
              }`}
            >
              <MapPin size={18} />
              <span>USA Universities</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* University List */}
            <div className="lg:col-span-4 bg-white p-4 rounded-xl shadow-sm overflow-hidden">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 text-brand-blue" />
                <span>{activeCountry === "uk" ? "UK" : "USA"} Universities</span>
              </h3>
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {universities[activeCountry].map((university, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveUniversity(university)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      activeUniversity.name === university.name
                        ? "bg-brand-blue/10 border-l-4 border-brand-blue"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="font-medium">{university.name}</div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <MapPin size={14} className="mr-1" />
                      {university.location}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* University Details */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={activeUniversity.image}
                    alt={activeUniversity.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{activeUniversity.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={18} className="mr-2 text-brand-blue" />
                    {activeUniversity.location}
                  </div>

                  {activeCountry === "uk" ? (
                    <>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <BookOpen size={18} className="mr-2 text-brand-blue" />
                        Popular Programs
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {(activeUniversity as typeof universities.uk[0]).programs.map((program, idx) => (
                          <div key={idx} className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-brand-blue mr-2"></div>
                            <span>{program}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <GraduationCap size={18} className="mr-2 text-brand-blue" />
                        Degree Programs
                      </h4>
                      <div className="mb-4">
                        {(activeUniversity as typeof universities.usa[0]).degrees.map((degree, idx) => (
                          <div key={idx} className="flex items-center mb-2">
                            <Check size={16} className="mr-2 text-green-500" />
                            <span>{degree}</span>
                          </div>
                        ))}
                      </div>

                      <h4 className="text-lg font-semibold mb-3 flex items-center">
                        <Building size={18} className="mr-2 text-brand-blue" />
                        Key Features
                      </h4>
                      <div className="mb-6">
                        {(activeUniversity as typeof universities.usa[0]).features.map((feature, idx) => (
                          <div key={idx} className="flex items-center mb-2">
                            <Check size={16} className="mr-2 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <Button variant="gradient" className="rounded-full mt-2">
                    Learn More About {activeUniversity.name}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssociatedUniversitiesSection;
