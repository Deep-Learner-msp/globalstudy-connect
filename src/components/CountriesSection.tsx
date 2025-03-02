
import { useState } from "react";
import { Button } from "@/components/ui/button";

const countries = [
  {
    id: "usa",
    name: "USA",
    image: "/lovable-uploads/8c78a54e-7879-4627-b1a8-be65693cbfcc.png",
    description: "World-renowned universities with cutting-edge research facilities and diverse campus life.",
    universities: ["St. Francis College", "Cumberland University", "Golden Gate University", "Adelphi University", "Faulkner University"],
  },
  {
    id: "uk",
    name: "UK",
    image: "/lovable-uploads/b1524c5f-d01e-4f22-b92f-a91d00c20da6.png",
    description: "Traditional education excellence with shorter programs and rich cultural experiences.",
    universities: ["Northumbria University", "Coventry University", "Ravensbourne University", "University of Roehampton", "Kings College London"],
  },
  {
    id: "canada",
    name: "Canada",
    image: "https://images.unsplash.com/photo-1569681157442-5f4a46621ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    description: "High-quality education with post-graduation work permits and pathways to permanent residency.",
    universities: ["University of Toronto", "McGill University", "University of British Columbia", "University of Alberta", "McMaster University"],
  },
  {
    id: "australia",
    name: "Australia",
    image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2233&q=80",
    description: "Innovative education approach with strong industry connections and superb quality of life.",
    universities: ["University of Melbourne", "University of Sydney", "Australian National University", "University of Queensland", "Monash University"],
  },
  {
    id: "germany",
    name: "Germany",
    image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Tuition-free education at public universities with strong focus on research and engineering.",
    universities: ["Technical University of Munich", "Ludwig Maximilian University", "Heidelberg University", "Humboldt University of Berlin", "RWTH Aachen University"],
  },
  {
    id: "france",
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    description: "Excellence in arts, sciences, and business with affordable tuition fees in a culturally rich setting.",
    universities: ["Sorbonne University", "École Polytechnique", "École Normale Supérieure", "Sciences Po", "HEC Paris"],
  },
  {
    id: "ireland",
    name: "Ireland",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    description: "English-speaking country with a strong education system and post-study work opportunities.",
    universities: ["Trinity College Dublin", "University College Dublin", "Dublin City University", "University of Galway", "University of Limerick"],
  },
  {
    id: "italy",
    name: "Italy",
    image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Historic education tradition with strengths in arts, design, architecture, and gastronomy.",
    universities: ["University of Bologna", "Sapienza University of Rome", "University of Padua", "Politecnico di Milano", "University of Milan"],
  },
];

const CountriesSection = () => {
  const [activeCountry, setActiveCountry] = useState(countries[0]);

  return (
    <section id="countries" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 mb-4 text-sm font-medium text-brand-blue">
            <span>Destination Countries</span>
          </div>
          <h2 className="section-title">Study in Your Dream Destination</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Explore the top study destinations for international students with our comprehensive guidance and support.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex overflow-x-auto pb-4 hide-scrollbar space-x-2 justify-center">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setActiveCountry(country)}
                className={`px-5 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                  activeCountry.id === country.id
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-white hover:bg-brand-blue/10"
                }`}
              >
                {country.name}
              </button>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 animate-fade-in-left">
              <div className="rounded-xl overflow-hidden shadow-lg h-full">
                <img
                  src={activeCountry.image}
                  alt={activeCountry.name}
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6 animate-fade-in-right">
              <h3 className="text-2xl md:text-3xl font-bold">{activeCountry.name}</h3>
              <p className="text-gray-600">{activeCountry.description}</p>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Top Universities:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCountry.universities.map((university, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-brand-blue mr-2"></div>
                      <span>{university}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button variant="gradient" className="rounded-full">
                Learn More About {activeCountry.name}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
