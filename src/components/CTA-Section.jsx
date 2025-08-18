
export default function CTA() {
    return(
<section
  className="relative py-24 bg-fixed bg-cover bg-center"
  style={{
    backgroundImage:
      "url('/Home-imgs/what-we-offer.jpeg')",
  }}
  aria-label="Call to action: Join the movement"
>
    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 via-blue-800/70 to-gray-800/80" />

  {/* Content */}
  <div className="relative text-center text-white max-w-3xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Join the Movement
    </h2>
    <p className="text-lg text-gray-200 mb-8">
      Be part of the change that benefits everyone. Partner with us to
      create opportunities, grow businesses, and strengthen communities.
    </p>
    <button
      type="button"
      className="px-6 py-3 bg-white text-blue-700 focus:outline-none focus-visible:ring-4 border border-white hover:bg-transparent hover:text-white rounded-full font-semibold transition"
      aria-label="Become a Partner with ZEENOX EQUITY"
    >
      Become a Partner
    </button>
  </div>
</section>
)
}