// pages/careers.tsx

import Link from "next/link";

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Nursery Manager",
      type: "Full-time",
      location: "Hamburg, Germany",
      department: "Production",
    },
    {
      title: "Landscape Designer",
      type: "Full-time",
      location: "Berlin, Germany",
      department: "Design",
    },
    {
      title: "Horticulture Specialist",
      type: "Part-time",
      location: "Munich, Germany",
      department: "Research",
    },
  ];

  const benefits = [
    {
      icon: "🌱",
      title: "Work with Nature",
      description: "Daily interaction with plants and sustainable practices",
    },
    {
      icon: "🌍",
      title: "Eco Mission",
      description: "Contribute to environmental conservation efforts",
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Regular training in horticultural innovations",
    },
    {
      icon: "🏡",
      title: "Green Spaces",
      description: "Beautiful nursery work environment",
    },
  ];

  return (
    <div className="container mt-10 lg:mt-14 py-12 md:py-16 lg:py-20">
      {/* Hero Section */}

      <div className="text-center max-w-3xl mx-auto">
        <p className="mb-2 font-semibold text-blue-900 ">
          Cultivating both plants and professional development
        </p>
        <h2 className="text-3xl font-semibold lg:font-bold lg:text-4xl mb-2 text-priColor">
          Grow Your Career With Us
        </h2>
      </div>

      {/* Why Join Us */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              Why Stauden Peters?
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Join a 55-year legacy of sustainable horticulture and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg text-blue-900 font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">
            Current Openings
          </h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow max-w-3xl mx-auto"
              >
                <div className="flex flex-col">
                  <div>
                    <h3 className="text-lg text-blue-900 font-semibold">
                      {job.title}
                    </h3>
                    <div className="flex gap-2 mt-2 flex-col w-fit sm:flex-row">
                      <span className="bg-blue-50 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                      <span className="bg-blue-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-blue-900 mt-2 text-sm">
                  Department: {job.department}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="py-16 px-4 bg-emerald-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-semibold mb-2">
                Sustainability First
              </h3>
              <p>Eco-friendly practices in every aspect of our work</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Team Growth</h3>
              <p>Continuous learning and skill development</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>Pioneering new horticultural techniques</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Application Form */}
      {/* <section id="apply" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-blue-900 mb-4 text-center">
            General Application
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Position of Interest
              </label>
              <select className="w-full p-3 border rounded-lg">
                <option>Select Position</option>
                {jobOpenings.map((job, index) => (
                  <option key={index}>{job.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Cover Letter</label>
              <textarea className="w-full p-3 border rounded-lg h-32" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Resume/CV</label>
              <input type="file" className="w-full p-3 border rounded-lg" />
            </div>
            <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Submit Application
            </button>
          </form>
        </div>

        <JobSheet />
      </section> */}

      <div className="px-4 sm:px-6 lg:px-8 bg-blu-50/50 max-w-2xl mx-auto rounded-2xl mt-12 md:mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Found a suitable position?
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Send us an email mentioning your qualification, experience and the
            position you are interested in. Our team will contact you once the
            application is reviewed.
          </p>
          <Link
            href="mailto:careers@staudenpeters.com?subject=Job%20Application"
            className="inline-block bg-blue-500 text-sm text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
