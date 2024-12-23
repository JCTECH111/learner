import React, { useState, useEffect } from 'react';

function PerformanceSlideshow() {
  const slides = [
    { id: 1, title: 'Study Time', value: 'You studied for 12 hours this week', percentage: '75%' },
    { id: 2, title: 'Courses Completed', value: 'You completed 5 online courses so far', percentage: '50%' },
    { id: 3, title: 'Active Days', value: 'You were active for 23 days this month', percentage: '80%' },
    { id: 4, title: 'Assignments Submitted', value: 'You submitted 8 assignments on time', percentage: '65%' },
    { id: 5, title: 'Topics Mastered', value: 'You mastered 15 advanced topics recently', percentage: '76%' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  // Swiping functionality
  const handleSwipe = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section className="w-full p-3">
      {/* Grid format for larger screens */}
      <section className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {slides.map((slide) => (
          <div key={slide.id} className="bg-custom-blue rounded-xl p-4 text-white h-[7rem] flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{slide.title}</h3>
              <p className="text-sm">{slide.value}</p>
            </div>
            <h1 className="text-4xl font-bold text-white">{slide.percentage}</h1>
          </div>
        ))}
      </section>

      {/* Slideshow for smaller screens */}
      <section className="block md:hidden slide_show_of_performance w-full bg-custom-blue rounded-xl h-[7rem] flex flex-col items-center text-white relative overflow-hidden">
        {/* Slide Content */}
        <div
          className="w-full transition-all duration-500 ease-in-out"
          onTouchStart={(e) => (this.touchStartX = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const swipeDirection = touchEndX - this.touchStartX > 0 ? 'right' : 'left';
            handleSwipe(swipeDirection);
          }}
        >
          <div className="flex justify-between p-3">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{slides[currentIndex].title}</h3>
              <p className="text-sm">{slides[currentIndex].value}</p>
            </div>
            <h1 className="text-4xl font-bold text-white">{slides[currentIndex].percentage}</h1>
          </div>
        </div>

        {/* Slide Dots */}
        <div className="absolute bottom-2 flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
      </section>
    </section>
  );
}

export default PerformanceSlideshow;
