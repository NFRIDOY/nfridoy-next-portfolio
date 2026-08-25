import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import WorkExperience from "@/components/WorkExperience";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <WorkExperience /> */}
      </main>
      <AIChat />
      <Footer />
    </>
  );
}
