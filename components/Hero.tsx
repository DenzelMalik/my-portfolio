export default function Hero() {
  return (
    <section className="flex min-h-screen pt-24 flex-col items-center justify-center bg-black text-white text-center px-6">
      
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