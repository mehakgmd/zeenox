import Hero from "../components/Hero-Section";
import CTA from "../components/CTA-Section";
export default function IdeaFundingPartnership() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
         <Hero
        bgImage="/Home-imgs/operations-manager.jpg"
        heading="Idea-Funding Partnership"
        subheading="Empowering innovators by connecting bold ideas with the right funding opportunities."
        primaryBtnText="Become a Partner"
        primaryBtnLink="/subscriptions"
        secondaryBtnText="Learn More"
        secondaryBtnLink="/"
      />

    {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          About Our Partnership
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          We believe that great ideas deserve strong backing. Through our Idea-Funding 
          Partnership, we invest in innovative concepts and provide not just capital, 
          but also mentorship, strategy, and resources to bring your vision to life. 
          Our goal is to empower entrepreneurs and innovators to scale sustainably.
        </p>
      </section>

      {/* Process Section */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { step: "1", title: "Submit Your Idea", desc: "Present your concept and share your vision with us." },
            { step: "2", title: "Review & Selection", desc: "Our experts evaluate your idea’s potential and feasibility." },
            { step: "3", title: "We Invest & Support", desc: "Receive funding, mentorship, and resources to grow successfully." }
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-700 text-center mb-10">
          Why Choose Our Investment Partnership?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Direct Funding</h3>
            <p>We provide the capital you need to launch and scale your idea effectively.</p>
          </div>
          <div className="bg-blue-100 text-blue-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Mentorship & Guidance</h3>
            <p>Access strategic advice and industry expertise to ensure sustainable growth.</p>
          </div>
          <div className="bg-blue-100 text-blue-800 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Trusted Partnership</h3>
            <p>We build long-term relationships, supporting innovators at every step.</p>
          </div>
          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Global Opportunities</h3>
            <p>Leverage our network to expand your idea’s reach and impact worldwide.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA/>
    </div>
  );
}
