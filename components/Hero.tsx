export default function Hero() {
  return (
    <section className="flex min-h-screen pt-24 flex-col items-center justify-center bg-black text-white text-center px-6">
      
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-100 w-190 rounded-full bg-blue-500/8 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* your existing hero content */}
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Denzel Malik Ibrahim
      </h1>

      <p className="text-xl text-gray-400 max-w-2xl mb-8">
        AI Engineer focused on building intelligent systems using 
        Machine Learning, NLP, and modern AI infrastructure.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition">
          View Projects
        </button>

        <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
          Contact
        </button>
      </div>

    </section>
  );
}