import { AboutMe } from "../components/AboutMe"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import { ProjectsSection } from "../components/Projects"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />
            <NavBar />
            <main>
                <HeroSection />
                <AboutMe />
                <SkillsSection />
                <ProjectsSection />
            </main>
        </div>
    )
}
