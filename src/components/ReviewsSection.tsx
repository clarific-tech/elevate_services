export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Ethan Valdez',
      location: 'Melbourne, VIC',
      quote: 'Prompt, friendly and professional. They fixed our leaking tap and a broken door hinge in one visit. Fair pricing and a tidy finish.',
      rating: 5,
    },
    {
      name: 'Adam Brooks',
      location: 'Melbourne, VIC',
      quote: 'Great workmanship and clear communication from start to finish. The team arrived on time and the result exceeded expectations.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      location: 'Melbourne, VIC',
      quote: 'Highly recommend Elevate Services. Our bathroom repairs were completed quickly and the place was spotless afterwards.',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Happy Customers</h2>
          <p className="text-lg text-gray-600">Read what our satisfied clients have to say</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700 italic mb-6">&quot;{review.quote}&quot;</p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Elevate+Services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            View more on Google
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
