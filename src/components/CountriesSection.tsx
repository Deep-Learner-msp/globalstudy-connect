
import { useState } from "react";
import { ArrowRight, X, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const countries = [
  {
    id: "usa",
    name: "USA",
    image: "/lovable-uploads/8c78a54e-7879-4627-b1a8-be65693cbfcc.png",
    description: "World-renowned universities with cutting-edge research facilities and diverse campus life.",
    universities: ["St. Francis College", "Cumberland University", "Golden Gate University", "Adelphi University", "Faulkner University"],
    jobMarket: "Strong job market in tech, healthcare, finance, and engineering sectors with high demand for skilled professionals.",
    avgSalary: "Average annual salary of $65,000 - $120,000 depending on field and location.",
    salaryData: [
      { sector: "Tech", salary: 110000 },
      { sector: "Healthcare", salary: 95000 },
      { sector: "Finance", salary: 105000 },
      { sector: "Engineering", salary: 100000 },
      { sector: "Education", salary: 65000 }
    ]
  },
  {
    id: "canada",
    name: "Canada",
    image: "/lovable-uploads/109cdf3f-7fb5-4bff-8eed-40eea18e3013.png",
    description: "High-quality education with post-graduation work permits and pathways to permanent residency.",
    universities: ["University of Toronto", "McGill University", "University of British Columbia", "University of Alberta", "McMaster University"],
    jobMarket: "Growing opportunities in tech, natural resources, healthcare, and finance with excellent prospects for international graduates.",
    avgSalary: "Average annual salary of CAD $60,000 - $90,000 with strong benefits and work-life balance.",
    salaryData: [
      { sector: "Tech", salary: 85000 },
      { sector: "Healthcare", salary: 75000 },
      { sector: "Finance", salary: 80000 },
      { sector: "Engineering", salary: 82000 },
      { sector: "Education", salary: 60000 }
    ]
  },
  {
    id: "uk",
    name: "UK",
    image: "/lovable-uploads/b1524c5f-d01e-4f22-b92f-a91d00c20da6.png",
    description: "Traditional education excellence with shorter programs and rich cultural experiences.",
    universities: ["Northumbria University", "Coventry University", "Ravensbourne University", "University of Roehampton", "Kings College London"],
    jobMarket: "Opportunities in finance, tech, creative industries, and healthcare with growing demand for international graduates.",
    avgSalary: "Average annual salary of £30,000 - £60,000 depending on industry and location.",
    salaryData: [
      { sector: "Tech", salary: 55000 },
      { sector: "Healthcare", salary: 45000 },
      { sector: "Finance", salary: 58000 },
      { sector: "Engineering", salary: 50000 },
      { sector: "Education", salary: 35000 }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    image: "https://images.unsplash.com/photo-1501286353178-1ec871214838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Innovative education approach with strong industry connections and superb quality of life.",
    universities: ["University of Melbourne", "University of Sydney", "Australian National University", "University of Queensland", "Monash University"],
    jobMarket: "Strong demand in healthcare, IT, engineering, and education with favorable post-study work options.",
    avgSalary: "Average annual salary of AUD $65,000 - $95,000 with excellent quality of life factors.",
    salaryData: [
      { sector: "Tech", salary: 90000 },
      { sector: "Healthcare", salary: 80000 },
      { sector: "Finance", salary: 85000 },
      { sector: "Engineering", salary: 87000 },
      { sector: "Education", salary: 70000 }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Tuition-free education at public universities with strong focus on research and engineering.",
    universities: ["Technical University of Munich", "Ludwig Maximilian University", "Heidelberg University", "Humboldt University of Berlin", "RWTH Aachen University"],
    jobMarket: "Excellent opportunities in engineering, automotive, manufacturing, and tech sectors with high demand for skilled professionals.",
    avgSalary: "Average annual salary of €45,000 - €70,000 with strong social benefits and job security.",
    salaryData: [
      { sector: "Tech", salary: 65000 },
      { sector: "Healthcare", salary: 55000 },
      { sector: "Finance", salary: 60000 },
      { sector: "Engineering", salary: 68000 },
      { sector: "Education", salary: 48000 }
    ]
  },
  {
    id: "france",
    name: "France",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Excellence in arts, sciences, and business with affordable tuition fees in a culturally rich setting.",
    universities: ["Sorbonne University", "École Polytechnique", "École Normale Supérieure", "Sciences Po", "HEC Paris"],
    jobMarket: "Opportunities in fashion, luxury goods, aerospace, and tourism with growing tech and startup scenes.",
    avgSalary: "Average annual salary of €35,000 - €60,000 with excellent social benefits and quality of life.",
    salaryData: [
      { sector: "Tech", salary: 55000 },
      { sector: "Healthcare", salary: 45000 },
      { sector: "Finance", salary: 50000 },
      { sector: "Engineering", salary: 52000 },
      { sector: "Education", salary: 38000 }
    ]
  },
  {
    id: "ireland",
    name: "Ireland",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "English-speaking country with a strong education system and post-study work opportunities.",
    universities: ["Trinity College Dublin", "University College Dublin", "Dublin City University", "University of Galway", "University of Limerick"],
    jobMarket: "Strong demand in tech, pharmaceuticals, finance, and customer service with many multinational companies.",
    avgSalary: "Average annual salary of €40,000 - €70,000 with good quality of life and work opportunities.",
    salaryData: [
      { sector: "Tech", salary: 65000 },
      { sector: "Healthcare", salary: 50000 },
      { sector: "Finance", salary: 60000 },
      { sector: "Engineering", salary: 55000 },
      { sector: "Education", salary: 42000 }
    ]
  },
  {
    id: "italy",
    name: "Italy",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Historic education tradition with strengths in arts, design, architecture, and gastronomy.",
    universities: ["University of Bologna", "Sapienza University of Rome", "University of Padua", "Politecnico di Milano", "University of Milan"],
    jobMarket: "Opportunities in fashion, design, tourism, and manufacturing with regional variations in job availability.",
    avgSalary: "Average annual salary of €30,000 - €50,000 with strong emphasis on work-life balance.",
    salaryData: [
      { sector: "Tech", salary: 45000 },
      { sector: "Healthcare", salary: 40000 },
      { sector: "Finance", salary: 48000 },
      { sector: "Engineering", salary: 42000 },
      { sector: "Education", salary: 32000 }
    ]
  },
];

const CountriesSection = () => {
  const [activeCountry, setActiveCountry] = useState(countries[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Custom sort for mobile - USA first, then Canada, then others
  const getMobileOrderedCountries = () => {
    const usa = countries.find(c => c.id === "usa");
    const canada = countries.find(c => c.id === "canada");
    const others = countries.filter(c => c.id !== "usa" && c.id !== "canada");
    
    return [
      usa,
      canada,
      ...others
    ].filter(Boolean);
  };
  
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
            {/* Display countries based on screen size - mobile optimized for USA first */}
            {(typeof window !== 'undefined' && window.innerWidth < 768 
              ? getMobileOrderedCountries() 
              : countries
            ).map((country) => (
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
                onClick={() => setIsDialogOpen(true)}
              >
                Learn About {activeCountry.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Country Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <span>Details about {activeCountry.name}</span>
            </DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-brand-blue" />
                <h3 className="text-xl font-semibold">Job Market</h3>
              </div>
              <p className="text-gray-600">{activeCountry.jobMarket}</p>
              
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <h3 className="text-xl font-semibold">Salary by Sector</h3>
                </div>
                
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activeCountry.salaryData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="sector" />
                      <YAxis />
                      <Tooltip formatter={(value) => {
                        return [`${value.toLocaleString('en-US', {
                          style: 'currency', 
                          currency: activeCountry.id === 'usa' || activeCountry.id === 'australia' ? 'USD' : 
                                   activeCountry.id === 'uk' ? 'GBP' : 'EUR',
                          maximumFractionDigits: 0
                        })}`]
                      }} />
                      <Bar 
                        dataKey="salary" 
                        fill={activeCountry.id === 'usa' ? '#2563eb' : 
                              activeCountry.id === 'uk' ? '#ef4444' : 
                              activeCountry.id === 'canada' ? '#16a34a' : 
                              '#f59e0b'} 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button variant="gradient" onClick={handleConsultation}>
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CountriesSection;
