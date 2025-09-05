import { handleScroll } from "../../utils/Scroll";

export default function Home() {

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900 text-white flex gap-6 p-4">
        <button onClick={() => handleScroll("about")}>About</button>
        <button onClick={() => handleScroll("projects")}>Projects</button>
        <button onClick={() => handleScroll("contact")}>Contact</button>
      </nav>

      {/* Sections */}
      <section id="about" className="h-screen flex items-center justify-center bg-blue-500">
        <h1 className="text-4xl text-white">About Me</h1>
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-green-500">
        <h1 className="text-4xl text-white">Projects</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-purple-500">
        <h1 className="text-4xl text-white">Contact</h1>
      </section>
    </div>
  );
}
