export default function Contact() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-8">
          I'm always open to discussing AI projects, collaborations, or opportunities.
        </p>

        <div className="flex justify-center gap-6">

          <a
            href="mailto:denzelmalik06@gmail.com"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Email
          </a>

          <a
            href="https://github.com/DenzelMalik"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/denzelmalik/"
            target="_blank"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}