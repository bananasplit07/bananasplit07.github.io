import { motion } from 'motion/react'
import { ArrowRight, Code2 } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import GithubIcon from '@/assets/github';

function Hero() {
    return (
        <motion.section
            id="hero"
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-12 md:pt-0"
        >
            <div className="col-span-1 md:col-start-2 md:col-span-10 border-l border-border pl-6 md:pl-8 py-4 flex flex-col items-start">
                <span className="font-mono text-[10px] md:text-xs text-primary bg-muted border border-border px-3 py-1 uppercase tracking-[0.15em] mb-6 inline-flex items-center gap-2">
                    <span>Open for opportunities</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.1] tracking-tighter">
                    THANAT
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tighter">
                    PHADINKAEW
                </h1>


                <span className="font-mono text-[0.6rem] md:text-[0.7rem] tracking-widest uppercase text-muted-foreground mb-6">

                    CS Graduate · Full-Stack · Frontend · Backend · Data Analytics

                </span>



                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10">
                    Full-stack developer building scalable, cross-platform applications. Specialize in frontend frameworks, backend systems, and cloud-based solutions to deliver intuitive interfaces and robust backend systems.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="#projects" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 border border-primary hover:bg-primary/90 transition-colors font-mono text-xs md:text-sm tracking-widest uppercase">
                        View My Work <ArrowRight size={18} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-transparent text-foreground px-6 py-3 border border-border hover:border-primary hover:text-primary transition-colors font-mono text-xs md:text-sm tracking-widest uppercase">
                        <Code2 size={18} /> Source Code
                    </a>
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-16 flex flex-wrap gap-3">
                    {['React', 'Vue', 'TailwindCSS', 'Flutter', 'Go', 'Python', 'Docker', 'PostgreSQL'].map(tech => (
                        <span key={tech} className="font-mono text-xs md:text-sm text-muted-foreground border border-border px-3 py-1 bg-card">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Hero