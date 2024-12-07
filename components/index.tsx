import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { Volunteer } from "@/components/volunteer";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Research />
      <Volunteer />
      <Certifications />
      <Contact />
    </Layout>
  );
}
