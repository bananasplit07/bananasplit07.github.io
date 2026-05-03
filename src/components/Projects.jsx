import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, Code2, X, ChevronRight, ChevronLeft } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { projects } from '@/data/projects/projectData.js'

function ProjectCard({ project, onExpand }) {
    return (
        <motion.div
            layoutId={`card-${project.id}`}
            onClick={() => onExpand(project)}
            whileHover={{ y: -2, x: -2 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="group cursor-pointer border border-border bg-card shadow-[4px_4px_0px_0px_hsl(var(--border))] p-6 flex flex-col hover:shadow-[6px_6px_0px_0px_hsl(var(--border))] active:scale-[0.98]"
        >
            {/* Card top */}
            <div className="flex justify-between items-start mb-4">
                <motion.p
                    layoutId={`id-${project.id}`}
                    className="font-mono text-xs text-muted-foreground tracking-widest"
                >
                    PROJ_{project.id}
                </motion.p>
                <div className="flex gap-3">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
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
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
                        >
                            <Code2 size={13} /> Repo
                        </a>
                    )}
                </div>
            </div>

            {/* Title */}
            <motion.h3
                layoutId={`title-${project.id}`}
                className="text-lg font-semibold tracking-tight text-foreground mb-3"
            >
                {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
                layoutId={`desc-${project.id}`}
                className="text-sm text-muted-foreground leading-relaxed mb-auto pb-6 line-clamp-3"
            >
                {project.description}
            </motion.p>

            {/* Stack */}
            <motion.div
                layoutId={`stack-${project.id}`}
                className="border-t border-border pt-4 flex flex-wrap gap-2"
            >
                {project.stack.slice(0, 4).map((tech) => (
                    <span
                        key={tech}
                        className="font-mono text-[10px] border border-border px-2 py-0.5 text-muted-foreground bg-background"
                    >
                        {tech}
                    </span>
                ))}
                {project.stack.length > 4 && (
                    <span className="font-mono text-[10px] text-muted-foreground pt-1">
                        +{project.stack.length - 4} more
                    </span>
                )}
            </motion.div>

        </motion.div>
    )
}

function ProjectDetail({ project, onClose }) {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length)
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:p-12">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
                className="absolute inset-0 backdrop-blur-xs"
            />

            {/* Modal Content */}
            <motion.div
                layoutId={`card-${project.id}`}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto border-2 border-border bg-card shadow-[8px_8px_0px_0px_hsl(var(--border))] flex flex-col md:flex-row z-50"
            >
                {/* Close Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.2 }}
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-background border border-border hover:bg-accent transition-colors"
                >
                    <X size={20} />
                </motion.button>

                {/* Left Side: Image Carousel & Meta */}
                <div className="md:w-7/12 border-b md:border-b-0 md:border-r border-border bg-muted/30 flex flex-col transition-all duration-300">
                    <div className="relative flex-1 overflow-hidden group/carousel min-h-[400px]">
                        {/* Floating Action Buttons */}
                        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                            {project.demo && (
                                <motion.a
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 p-2 md:px-3 md:py-2 bg-background/95 border border-border hover:bg-primary hover:text-primary-foreground transition-all backdrop-blur-sm shadow-[2px_2px_0px_0px_hsl(var(--border))] group/btn"
                                    title="Live Demo"
                                >
                                    <ArrowUpRight size={18} />
                                    <span className="font-mono text-[10px] uppercase tracking-widest hidden md:block">Demo</span>
                                </motion.a>
                            )}
                            {project.repo && (
                                <motion.a
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    href={project.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 p-2 md:px-3 md:py-2 bg-background/95 border border-border hover:bg-primary hover:text-primary-foreground transition-all backdrop-blur-sm shadow-[2px_2px_0px_0px_hsl(var(--border))] group/btn"
                                    title="View Source"
                                >
                                    <Code2 size={18} />
                                    <span className="font-mono text-[10px] uppercase tracking-widest hidden md:block">Repo</span>
                                </motion.a>
                            )}
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImage}
                                src={project.images[currentImage]}
                                alt={`${project.title} screenshot ${currentImage + 1}`}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            />
                        </AnimatePresence>

                        {/* Carousel Controls */}
                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 border border-border hover:bg-background opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 border border-border hover:bg-background opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
                                >
                                    <ChevronRight size={18} />
                                </button>

                                {/* Overlay Indicator Dots */}
                                {project.images.length > 1 && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                                        {project.images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentImage(i)}
                                                className={`w-2 h-2 rounded-full transition-all backdrop-blur-sm ${i === currentImage
                                                    ? 'bg-primary w-6'
                                                    : 'bg-white/50 hover:bg-white/80'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="md:w-5/12 p-6 md:p-10 lg:p-12 flex flex-col bg-card transition-all duration-300">
                    <motion.h3
                        layoutId={`title-${project.id}`}
                        className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
                    >
                        {project.title}
                    </motion.h3>

                    <motion.p
                        layoutId={`desc-${project.id}`}
                        className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8"
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h4 className="font-mono text-xs font-semibold text-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="w-2 h-0.5 bg-primary" /> Key Features
                            </h4>
                            <ul className="grid grid-cols-1 gap-3 mb-8">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground group/item">
                                        <ChevronRight size={14} className="mt-1 flex-shrink-0 text-primary group-hover/item:translate-x-1 transition-transform" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-mono text-[10px] font-semibold text-foreground uppercase tracking-widest mb-4 border-b border-border pb-2">
                                Technologies
                            </h4>
                            <motion.div layoutId={`stack-${project.id}`} className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-[10px] border border-border px-2 py-0.5 text-muted-foreground bg-background"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <motion.section id="projects" {...fadeUp} className="relative">
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
                </div>
            </div>

            {/* 2-per-row grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onExpand={setSelectedProject}
                    />
                ))}
            </div>

            {/* Expanded View */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetail
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>

        </motion.section>
    )
}