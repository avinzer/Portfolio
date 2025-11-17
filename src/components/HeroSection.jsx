import { ArrowDown } from "lucide-react"



export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl max-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-1"> Hello </span>
                        <span className="opacity-0 animate-fade-in-delay-2"> I'm </span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-3"> Khalid Amir </span><br />
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-4"> A Full Stack Developer </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-5">
                        Passionate and results-driven Full Stack Developer with 3 years of
                        experience designing, developing and deploying scalable web
                        application. Proficient in both front-end and back-end technologies
                        with a solid understanding of RESTful APIs and clouds services like
                        Firebase. Strong collaborator with experience working in agile teams
                        and a continuous learner committed to keeping up with the latest
                        industry trends and best practices.
                    </p>
                </div>
                <div className="pt-6 opacity-0 animate-fade-in-delay-6">
                    <a href="#projects" className="cosmic-button">View Projects</a>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}