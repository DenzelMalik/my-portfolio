export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="font-bold text-lg">
          Denzel Malik Ibrahim
        </div>

        <div className="flex gap-6 text-sm items-center">

            <a href="#projects" className="hover:text-gray-400 transition">
                Projects
            </a>

            <a href="#skills" className="hover:text-gray-400 transition">
                Skills
            </a>

            <a href="#contact" className="hover:text-gray-400 transition">
                Contact
            </a>

            <a
                href="/resume.pdf"
                target="_blank"
                className="border border-gray-700 px-3 py-1 rounded hover:bg-white hover:text-black transition"
            >
                Resume (CV)
            </a>

        </div>

      </div>
    </nav>
  );
}