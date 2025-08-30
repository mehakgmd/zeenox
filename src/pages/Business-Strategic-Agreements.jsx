import { motion } from "framer-motion";
import { FaHandshake, FaChartLine, FaLightbulb } from "react-icons/fa";
import Hero from "../components/Hero-Section";
import CTA from "../components/CTA-Section";
export default function BusinessStrategicAgreements() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <Hero
        bgImage="/Home-imgs/idea-funding.jpeg"
        heading="Strategic Business Agreements"
        subheading="Building long-term partnerships that foster growth, innovation, and success across industries."
        primaryBtnText="Become a Partner"
        primaryBtnLink="/subscriptions"
        secondaryBtnText="Learn More"
        secondaryBtnLink="/"
      />

      {/* Why It Matters */}
      <section className="py-16 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-700">Why Strategic Agreements Matter</h2>
        <p className="mt-4 text-gray-600">
          Strategic agreements are more than just contracts. They form the foundation of strong business
          relationships, ensuring mutual trust, shared goals, and sustainable growth.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            {
              icon: <FaHandshake size={40} className="text-blue-600" />,
              title: "Stronger Partnerships",
              desc: "Develop collaborations rooted in transparency and trust for long-term growth."
            },
            {
              icon: <FaChartLine size={40} className="text-blue-600" />,
              title: "Sustainable Growth",
              desc: "Achieve consistent performance by aligning shared visions and leveraging opportunities."
            },
            {
              icon: <FaLightbulb size={40} className="text-blue-600" />,
              title: "Innovation Together",
              desc: "Create space for innovation through combined expertise and competitive advantage."
            }
          ].map((item, i) => (
            <div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agreement Process */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-10">Our Agreement Process</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            "Identifying opportunities for collaboration that align with both parties’ strategic goals.",
            "Drafting agreements with clear responsibilities, benefits, and performance metrics.",
            "Continuous monitoring and adaptation to ensure lasting success and innovation."
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">
                {index + 1}
              </div>
              <p className="text-lg">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTA/>
    </div>
  );
}
