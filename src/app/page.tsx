import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { TechnicalExpertise } from "@/components/TechnicalExpertise";
import { ProfessionalExperience } from "@/components/ProfessionalExperience";
import { AboutMe } from "@/components/AboutMe";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SelectedWork />
      <TechnicalExpertise />
      <ProfessionalExperience />
      <AboutMe />
      <Education />
      <Contact />
    </div>
  );
}
