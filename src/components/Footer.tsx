export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <img
              src="/assets/images/logo.png"
              alt="Elevate Services"
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm mb-4">
              Affordable handyman services for every job — big or small.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-light transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-light transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-primary-light transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Electrical</li>
              <li className="text-gray-400">Plumbing</li>
              <li className="text-gray-400">Carpentry</li>
              <li className="text-gray-400">Landscaping</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0450-822-320
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Melbourne, Australia
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400 space-y-2">
          <p>Copyright © 2025 Elevate Services. All rights reserved.</p>
          <p>
            Designed by{' '}
            <a 
              href="https://clarific.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary-light transition-colors"
            >
              CLARIFIC Software Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
