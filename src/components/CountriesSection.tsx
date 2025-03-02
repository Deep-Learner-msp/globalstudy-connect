
import { useState } from "react";
import { Button } from "@/components/ui/button";

const countries = [
  {
    id: "usa",
    name: "USA",
    image: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    description: "World-renowned universities with cutting-edge research facilities and diverse campus life.",
    universities: ["St. Francis College", "Cumberland University", "Golden Gate University", "Adelphi University", "Faulkner University"],
    jobMarket: "Strong job market in tech, healthcare, finance, and engineering sectors with high demand for skilled professionals.",
    avgSalary: "Average annual salary of $65,000 - $120,000 depending on field and location."
  },
  {
    id: "uk",
    name: "UK",
    image: "https://images.unsplash.com/photo-1543799382-9a1ecfe96336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Traditional education excellence with shorter programs and rich cultural experiences.",
    universities: ["Northumbria University", "Coventry University", "Ravensbourne University", "University of Roehampton", "Kings College London"],
    jobMarket: "Opportunities in finance, tech, creative industries, and healthcare with growing demand for international graduates.",
    avgSalary: "Average annual salary of £30,000 - £60,000 depending on industry and location."
  },
  {
    id: "canada",
    name: "Canada",
    image: "/lovable-uploads/598af845-576d-4405-8d52-f34719248668.png",
    description: "High-quality education with post-graduation work permits and pathways to permanent residency.",
    universities: ["University of Toronto", "McGill University", "University of British Columbia", "University of Alberta", "McMaster University"],
    jobMarket: "Growing opportunities in tech, natural resources, healthcare, and finance with excellent prospects for international graduates.",
    avgSalary: "Average annual salary of CAD $60,000 - $90,000 with strong benefits and work-life balance."
  },
  {
    id: "australia",
    name: "Australia",
    image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2233&q=80",
    description: "Innovative education approach with strong industry connections and superb quality of life.",
    universities: ["University of Melbourne", "University of Sydney", "Australian National University", "University of Queensland", "Monash University"],
    jobMarket: "Strong demand in healthcare, IT, engineering, and education with favorable post-study work options.",
    avgSalary: "Average annual salary of AUD $65,000 - $95,000 with excellent quality of life factors."
  },
  {
    id: "germany",
    name: "Germany",
    image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Tuition-free education at public universities with strong focus on research and engineering.",
    universities: ["Technical University of Munich", "Ludwig Maximilian University", "Heidelberg University", "Humboldt University of Berlin", "RWTH Aachen University"],
    jobMarket: "Excellent opportunities in engineering, automotive, manufacturing, and tech sectors with high demand for skilled professionals.",
    avgSalary: "Average annual salary of €45,000 - €70,000 with strong social benefits and job security."
  },
  {
    id: "france",
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    description: "Excellence in arts, sciences, and business with affordable tuition fees in a culturally rich setting.",
    universities: ["Sorbonne University", "École Polytechnique", "École Normale Supérieure", "Sciences Po", "HEC Paris"],
    jobMarket: "Opportunities in fashion, luxury goods, aerospace, and tourism with growing tech and startup scenes.",
    avgSalary: "Average annual salary of €35,000 - €60,000 with excellent social benefits and quality of life."
  },
  {
    id: "ireland",
    name: "Ireland",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    description: "English-speaking country with a strong education system and post-study work opportunities.",
    universities: ["Trinity College Dublin", "University College Dublin", "Dublin City University", "University of Galway", "University of Limerick"],
    jobMarket: "Strong demand in tech, pharmaceuticals, finance, and customer service with many multinational companies.",
    avgSalary: "Average annual salary of €40,000 - €70,000 with good quality of life and work opportunities."
  },
  {
    id: "italy",
    name: "Italy",
    image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Historic education tradition with strengths in arts, design, architecture, and gastronomy.",
    universities: ["University of Bologna", "Sapienza University of Rome", "University of Padua", "Politecnico di Milano", "University of Milan"],
    jobMarket: "Opportunities in fashion, design, tourism, and manufacturing with regional variations in job availability.",
    avgSalary: "Average annual salary of €30,000 - €50,000 with strong emphasis on work-life balance."
  },
];

const CountriesSection = () => {
  const [activeCountry, setActiveCountry] = useState(countries[0]);
  
  const handleConsultation = () => {
    window.open(`https://api.whatsapp.com/send/?phone=919392206641&text=I'm interested in learning more about studying in ${activeCountry.name}&type=phone_number&app_absent=0`, '_blank');
  };

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
              
              <div>
                <h4 className="text-lg font-semibold mb-3">Job Market:</h4>
                <p className="text-gray-600">{activeCountry.jobMarket}</p>
                <h4 className="text-lg font-semibold my-3">Average Salary:</h4>
                <p className="text-gray-600">{activeCountry.avgSalary}</p>
              </div>
              
              <Button 
                variant="gradient" 
                className="rounded-full"
                onClick={handleConsultation}
              >
                Learn About {activeCountry.name}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
