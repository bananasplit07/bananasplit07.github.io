import { motion } from 'motion/react'
import { fadeUp } from '@/lib/animations'
import ThanatPicture from '@/data/Thanat_Picture.jpeg'
import { educationData } from '@/data/about/educationData'
import { experienceData } from '@/data/about/experienceData'

function About() {
    return (
        <motion.section
            id="about"
            {...fadeUp}
        >
            <div className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground tracking-tighter mb-4">About</h2>
                <div className="w-24 h-1 bg-primary"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="col-span-12 md:col-span-5 flex flex-col gap-6 md:gap-8">
                    <div className="relative border border-border bg-card aspect-square overflow-hidden shadow-[4px_4px_0px_0px_hsl(var(--border))] mr-1 mb-1">
                        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10 pointer-events-none border-[0.5px] border-primary/20 m-2"></div>
                        <img
                            src={ThanatPicture}
                            alt="Thanat"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>

                    <div className="border border-border bg-card p-5 md:p-6 shadow-[4px_4px_0px_0px_hsl(var(--border))] mr-1 mb-1">
                        <h3 className="font-mono text-xs text-primary mb-4 uppercase tracking-widest border-b border-border pb-2">Status</h3>
                        <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                            <li className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                                <span className="opacity-70">Location:</span>
                                <span className="text-foreground">Lampang, TH</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                                <span className="opacity-70">Focus:</span>
                                <span className="text-foreground break-words">Systems Architecture</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                                <span className="opacity-70">Degree:</span>
                                <span className="text-foreground break-words">B.Sc in Computer Science</span>
                            </li>
                            <li className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 pt-3 border-t border-border">
                                <span className="opacity-70">Availability:</span>
                                <span className="text-primary font-medium">Open for Inquiry</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
                    <div className="border border-border bg-card p-6 md:p-8 shadow-[4px_4px_0px_0px_hsl(var(--border))] h-full mr-1 mb-1">
                        <div className="space-y-10">
                            {/* Education */}
                            <section>
                                <h3 className="font-mono text-xs text-primary mb-4 uppercase tracking-widest border-b border-border pb-2">Education</h3>
                                <div className="space-y-6">
                                    {educationData.map((edu) => (
                                        <div key={edu.id} className="flex flex-col gap-1">
                                            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1">
                                                <span className="text-foreground font-medium break-words">{edu.institution}</span>
                                                <span className="font-mono text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">{edu.duration}</span>
                                            </div>
                                            <span className="text-sm text-muted-foreground">{edu.degree}</span>
                                            {edu.gpa && <span className="text-sm text-muted-foreground">GPAX: {edu.gpa}</span>}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Experience */}
                            <section>
                                <h3 className="font-mono text-xs text-primary mb-4 uppercase tracking-widest border-b border-border pb-2">Experience</h3>
                                <div className="space-y-8">
                                    {experienceData.map((exp) => (
                                        <div key={exp.id} className="flex flex-col gap-1">
                                            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-1">
                                                <span className="text-foreground font-medium">{exp.role}</span>
                                                <span className="font-mono text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">{exp.duration}</span>
                                            </div>
                                            <span className="text-sm text-primary/80 font-medium">{exp.company}</span>
                                            <div className="space-y-3 mt-3">
                                                {exp.highlights.map((highlight, i) => (
                                                    <p key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                                                        <span className="text-primary">•</span>
                                                        <span>{highlight}</span>
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Skills */}
                            <section>
                                <h3 className="font-mono text-xs text-primary mb-4 uppercase tracking-widest border-b border-border pb-2">Skills</h3>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {['React', 'Vue', 'TailwindCSS', 'Flutter', 'Go', 'Python', 'PostgreSQL', 'Docker'].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-1 bg-muted/50 text-[10px] font-mono border border-border uppercase tracking-tight text-foreground hover:bg-muted transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default About