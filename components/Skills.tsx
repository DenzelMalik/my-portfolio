const skills = [
  "Python",
  "PyTorch",
  "Transformers",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Data Science",
  "Scikit-learn",
  "React",
  "Next.js",
  "Git",
  "Docker"
];

export default function Skills() {
  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}