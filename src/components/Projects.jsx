import { motion } from 'motion/react'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { projects } from '@/data/projects/projectData.js'

function ProjectCard({ project }) {
    return (
        <div className="border border-border bg-card shadow-[4px_4px_0px_0px_hsl(var(--border))] p-6 flex flex-col hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_hsl(var(--border))] transition-all duration-200">

            {/* Card top */}
            <div className="flex justify-between items-start mb-4">
                <p className="font-mono text-xs text-muted-foreground tracking-widest">

                </p>
                <div className="flex gap-3">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
                        >
                            <ArrowUpRight size={13} /> Demo
                        </a>
                    )}
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
                        >
                            <Code2 size={13} /> Repo
                        </a>
                    )}
                </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold tracking-tight text-foreground mb-3">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-auto pb-6">
                {project.description}
            </p>

            {/* Stack */}
            <div className="border-t border-border pt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="font-mono text-xs border border-border px-2.5 py-1 text-muted-foreground bg-background"
                    >
                        {tech}
                    </span>
                ))}
            </div>

        </div>
    )
}

export default function Projects() {
    return (
        <motion.section id="projects" {...fadeUp}>

            {/* Header */}
            <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground tracking-tighter mb-4">
                    Projects
                </h2>
                <div className="w-24 h-1 bg-primary" />
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-8 pt-6 border-t border-border gap-4">
                    <span className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase">
                        Projects_Log :: {String(projects.length).padStart(2, '0')} entries
                    </span>
                    <a
                        href="https://github.com/bananasplit07"
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[10px] md:text-xs text-foreground tracking-widest uppercase border-b border-border hover:border-primary transition-colors pb-px w-fit"
                    >
                        View All on GitHub →
                    </a>
                </div>
            </div>

            {/* 2-per-row grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

        </motion.section>
    )
}