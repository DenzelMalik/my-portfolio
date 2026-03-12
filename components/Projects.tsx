const projects = [
  {
    title: "AI Transcriber and Summarizer",
    description:
      "Fine-tuned Whisper model that converts lectures into structured notes using speech recognition and text summarization.",
    tech: ["Python", "Whisper", "Transformers", "NLP"],
  },
  {
    title: "AI Career Chatbot",
    description:
      "NLP-powered chatbot that helps users explore career paths using sentence classification and decision trees.",
    tech: ["Python", "Transformers", "Scikit-learn", "NLP"],
  },
  {
    title: "Bitcoin Price Prediction",
    description:
      "A Deep Learning model that predicts the price of Bitcoin of in the next 5 days. This model can be applied to any assetes",
    tech: ["Python", "Deep Learning"],
  },
];

export default function Projects() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl p-6 hover:border-gray-400 transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm border border-gray-700 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}