
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    university: "University of Toronto, Canada",
    quote: "Career-Guide helped me secure admission to my dream university in Canada with a 50% scholarship. Their guidance throughout the visa process was invaluable.",
    rating: 5,
    course: "Masters in Computer Science"
  },
  {
    id: 2,
    name: "Rahul Patel",
    university: "King's College London, UK",
    quote: "The team at Career-Guide provided exceptional support from university selection to visa approval. Their personalized approach made my study abroad journey smooth.",
    rating: 5,
    course: "MBA"
  },
  {
    id: 3,
    name: "Ananya Reddy",
    university: "University of Melbourne, Australia",
    quote: "I'm grateful to Career-Guide for their expert guidance. They helped me navigate through the complex admission and visa processes effortlessly.",
    rating: 5,
    course: "Masters in Data Science"
  },
  {
    id: 4,
    name: "Vikram Singh",
    university: "University of British Columbia, Canada",
    quote: "Career-Guide exceeded my expectations. Their attention to detail and commitment to my success helped me achieve my goal of studying in Canada.",
    rating: 5,
    course: "Masters in Engineering"
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
