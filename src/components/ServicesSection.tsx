export default function ServicesSection() {
  const services = [
    {
      category: 'Home Maintenance',
      image: '/assets/images/Home-Maintenance.png',
      serviceList: ['Home Maintenance', 'Cleaning & Upkeep', 'Pest Control'],
      description: 'Comprehensive home maintenance services to keep your property in top condition.',
    },
    {
      category: 'Plumbing',
      image: '/assets/images/plumbing.png',
      serviceList: ['Plumbing Repairs', 'Fixture Installation', 'Drain & Pipe Services', 'Hot Water Systems'],
      description: 'Professional plumbing services for all your water and drainage needs.',
    },
    {
      category: 'Construction & Finishing',
      image: '/assets/images/Construction & Finishing.png',
      serviceList: ['Welding', 'Painting & Repairs', 'Plastering'],
      description: 'Expert construction and finishing work to complete your projects.',
    },
    {
      category: 'Carpentry',
      image: '/assets/images/Carpentry.png',
      serviceList: ['Carpentry Services', 'Furniture Assembly', 'Custom Woodworking'],
      description: 'Built with care. Custom carpentry and woodworking solutions.',
    },
    {
      category: 'Electrical',
      image: '/assets/images/Electrical.png',
      serviceList: ['Basic Electricity', 'Fixture Installation', 'Electrical Repairs'],
      description: 'Safe and reliable electrical services for your home or business.',
    },
    {
      category: 'Outdoor & Garden',
      image: '/assets/images/Outdoor & Garden.png',
      serviceList: ['Mowing Service', 'Garden Works & Lawncare', 'Pool Maintenance'],
      description: 'Complete outdoor maintenance to keep your property looking its best.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From home maintenance to landscaping and everything in between — we handle it all with care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col xl:flex-row"
            >
              <div className="w-full aspect-square xl:aspect-auto xl:w-48 xl:self-stretch xl:flex-shrink-0 bg-gray-100 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.category}
                  className="w-full h-full object-contain p-3"
                />
              </div>
              <div className="p-4 xl:p-5 flex-1 flex flex-col min-w-[320px] xl:min-w-0">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 break-words">
                  {category.category}
                </h3>
                <p className="text-gray-700 mb-3 text-sm md:text-base leading-relaxed break-words">
                  {category.description}
                </p>
                <ul className="space-y-1.5 flex-1">
                  {category.serviceList.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-800 text-sm md:text-base leading-snug break-words">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
