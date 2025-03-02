
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Chaitanya",
    university: "University of Wisconsin-Milwaukee, USA",
    quote: "Career-Guide was instrumental in helping me secure admission to UW-Milwaukee. Their counselors provided detailed insights about the application process and helped me prepare a strong SOP that highlighted my academic strengths.",
    rating: 5,
    course: "Masters in Computer Science"
  },
  {
    id: 2,
    name: "Poojita",
    university: "University of Wisconsin-Milwaukee, USA",
    quote: "Thanks to Career-Guide, my dream of studying in the US became a reality. They guided me through every step of the application process, from university selection to visa interview preparation. I couldn't have done it without them!",
    rating: 5,
    course: "Masters in Data Analytics"
  },
  {
    id: 3,
    name: "Praneeth",
    university: "New Jersey Institute of Technology, USA",
    quote: "Career-Guide's counselors have in-depth knowledge about US universities and their requirements. They helped me identify NJIT as the perfect match for my academic goals and guided me through the entire application process.",
    rating: 5,
    course: "Masters in Information Systems"
  },
  {
    id: 4,
    name: "Geeta",
    university: "University of Bridgeport, USA",
    quote: "When I approached Career-Guide, I was confused about which university to apply to. Their counselors assessed my profile and suggested UB, which turned out to be perfect for my career aspirations. Their visa guidance was exceptionally helpful.",
    rating: 5,
    course: "Masters in Business Administration"
  },
  {
    id: 5,
    name: "Harsha",
    university: "Clark University, USA",
    quote: "Career-Guide made my US education dream possible. From selecting the right program at Clark University to helping with scholarship applications, their team was supportive throughout my journey.",
    rating: 5,
    course: "Masters in Finance"
  },
  {
    id: 6,
    name: "Kumar",
    university: "Clark University, USA",
    quote: "I'm deeply grateful to Career-Guide for their expert guidance. They helped me secure a partial scholarship at Clark University and made the visa process incredibly smooth. Their follow-up even after I reached the US was truly appreciated.",
    rating: 5,
    course: "Masters in Information Technology"
  },
  {
    id: 7,
    name: "Vijay",
    university: "Gannon University, USA",
    quote: "As a first-generation international student, I had countless questions about studying in the US. Career-Guide patiently addressed all my concerns and guided me through each step. Their expertise made a complicated process feel manageable.",
    rating: 5,
    course: "Masters in Engineering Management"
  },
  {
    id: 8,
    name: "Shaik Javeed",
    university: "BPP University, UK",
    quote: "Career-Guide's expertise in UK admissions was evident from our first consultation. They helped me navigate the complex UK visa process and provided valuable insights about life in London. I'm now happily studying at BPP University thanks to their guidance.",
    rating: 5,
    course: "Masters in International Business"
  }
];

const SuccessStoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handleTouchStart = (e) => {
    setIsScrolling(true);
    setStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    if (!isScrolling) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (diff > 50) {
      handleNext();
      setIsScrolling(false);
    } else if (diff < -50) {
      handlePrev();
      setIsScrolling(false);
    }
  };
  
  const handleTouchEnd = () => {
    setIsScrolling(false);
  };

  return (
    <section id="success-stories" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <div className="text-center">
          <div className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 mb-4 text-sm font-medium text-brand-blue">
            <span>Success Stories</span>
          </div>
          <h2 className="section-title">Hear from Our Students</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Discover how Career-Guide has helped students achieve their international education dreams.
          </p>
        </div>

        <div className="mt-12 relative">
          {/* Mobile-friendly testimonial slider */}
          <div 
            className="flex overflow-x-auto pb-6 px-4 md:px-0 no-scrollbar gap-4 md:gap-6"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300"
              >
                <div className="flex flex-col mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                    <p className="text-xs text-gray-500">{testimonial.university}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 italic">"{testimonial.quote}"</blockquote>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons for larger screens */}
          <div className="hidden md:flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {testimonials.map((_, index) => (
              <Button 
                key={index}
                variant={activeIndex === index ? "default" : "outline"}
                size="sm"
                className="rounded-full w-10 h-10 p-0"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span className="text-base font-medium">{index + 1}</span>
              </Button>
            ))}
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
