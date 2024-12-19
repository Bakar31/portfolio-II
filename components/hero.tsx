import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 text-center bg-gradient-to-r from-blue-100 to-purple-100">
      <h1 className="mb-4 text-4xl sm:text-5xl font-bold text-blue-900">
        Abu Bakar Siddik
      </h1>
      <h2 className="mb-8 text-xl sm:text-2xl text-purple-800">
        ML Engineer | Software Developer | Researcher
      </h2>
      <p className="mb-8 max-w-2xl mx-auto text-base sm:text-lg text-gray-700 px-4">
        Building GenAI Applications That Amaze | Passionate about pushing the
        boundaries of AI and its applications
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
        <a href="#projects">
          <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            View Projects
          </Button>
        </a>
        <a href="#contact">
          <Button
            variant="outline"
            className="text-purple-600 border-purple-600 hover:bg-purple-100 w-full sm:w-auto"
          >
            Contact Me
          </Button>
        </a>
      </div>
    </section>
  );
}
