// pages/locations.js

import Image from 'next/image';
// import TeamMember from '../components/TeamMember'; // You'll need to create this component

export default function Location() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/location-hero.jpg"
            alt="Location"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70" />
        </div>
        
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Locations
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Discover our beautiful spaces across the world
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                About This Location
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
                  <p className="text-gray-600">Consectetur adipiscing</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/location-about.jpg"
                alt="About Location"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-indigo-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Virtual Tour
          </h2>
          <div className="aspect-video mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Local Team
          </h2>
          {/* <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="John Doe"
              position="Location Manager"
              image="/team1.jpg"
            />
            <TeamMember
              name="Jane Smith"
              position="Operations Lead"
              image="/team2.jpg"
            />
            <TeamMember
              name="Mike Johnson"
              position="Customer Experience"
              image="/team3.jpg"
            />
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-gray-400">
          © 2023 Company Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}