import { useState } from "react"
import { cn } from "../lib/utils";

const skills = [
    { title: "HTML & CSS", level: 90, category: "Frontend" },
    { title: "JavaScript", level: 85, category: "Frontend" },
    { title: "React", level: 85, category: "Frontend" },
    { title: "TypeScript", level: 80, category: "Frontend" },
    { title: "Next.js", level: 75, category: "Frontend" },
    { title: "Node.js", level: 95, category: "Backend" },
    { title: "Express.js", level: 90, category: "Backend" },
    { title: "MongoDB", level: 90, category: "Backend" },
    { title: "Redis", level: 80, category: "Backend" },
    { title: "Python", level: 85, category: "Backend" },
    { title: "Django", level: 80, category: "Backend" },
    { title: "Docker", level: 80, category: "DevOps" },
    { title: "Kubernetes", level: 80, category: "DevOps" },
    { title: "RabbitMQ", level: 80, category: "DevOps" },
]

const categories = ["All", "Frontend", "Backend", "DevOps"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter(skill => activeCategory === "All" || skill.category === activeCategory)
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto maxx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categories.map((categorie, key) => (
                            <button key={key}
                                onClick={() => setActiveCategory(categorie)}
                                className={cn(`px-5 py-2 rounded-full transition-colors duration-300 capitalize`, {
                                    "bg-primary text-primary-foreground": activeCategory === categorie,
                                    "bg-secondary/70 text-foreground hover:bg-secondary": activeCategory !== categorie
                                })}>
                                {categorie}
                            </button>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-9 rounded-lg shadow-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.title}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: `${skill.level}%` }}></div>
                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}