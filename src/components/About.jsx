import { motion } from 'motion/react'
import { fadeUp } from '@/lib/animations'

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

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
                    <div className="relative border border-border bg-card aspect-square overflow-hidden shadow-[4px_4px_0px_0px_hsl(var(--border))]">
                        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10 pointer-events-none border-[0.5px] border-primary/20 m-2"></div>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVoA9psLdV4UfD3VEobcLrmlqGY4CgZdLsBEEl19cgaO8NjpBI1p06C6P3cHHwac6wqAMnNFXNbyXMmGkQjpEzpXtYSTxxWg2nED3iPhN1_QZeS9Yx_c_iaLwilHEpI3H3aoqLR8phYbPjCAprTBGPP-MV5KLGPv-cDUA3vwByrq91e-rl5X3lwM2EM138pTdlQAYRkccClFjiHN2VRo_PORxQ2WRlVjcvwz17dsBOwxiACEaN4kZy6z1aKOwM4W21HDhFNp1dkFY"
                            alt="Headshot"
                            className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        />
                    </div>

                    <div className="border border-border bg-card p-6 shadow-[4px_4px_0px_0px_hsl(var(--border))]">
                        <h3 className="font-mono text-xs text-primary mb-4 uppercase tracking-widest border-b border-border pb-2">Status</h3>
                        <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                            <li className="flex justify-between"><span>Location:</span> <span className="text-foreground">Lampang, TH</span></li>
                            <li className="flex justify-between"><span>Focus:</span> <span className="text-foreground">Systems Architecture</span></li>
                            <li className="flex justify-between"><span>Degree:</span> <span className="text-foreground">B.Sc in Computer Science</span></li>
                            <li className="flex justify-between pt-2 border-t border-border"><span>Availability:</span> <span className="text-primary">Open for Inquiry</span></li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
                    <div className="border border-border bg-card p-6 md:p-8 shadow-[4px_4px_0px_0px_hsl(var(--border))] h-full">
                        <div className="space-y-10">
                            {/* Education */}
                            <section>
                                <h3 className="font-mono text-xs text-primary mb-4 uppercase tracking-widest border-b border-border pb-2">Education</h3>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between items-start">
                                            <span className="text-foreground font-medium">B.Sc. in Computer Science</span>
                                            <span className="font-mono text-xs text-muted-foreground">2022 — 2025</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">Chiang Mai University</span>
                                        <span className="text-sm text-muted-foreground">GPAX: 2.94</span>
                                    </div>
                                </div>
                            </section>

                            {/* Experience */}
                            <section>
                                <h3 className="font-mono text-xs text-primary mb-4 uppercase tracking-widest border-b border-border pb-2">Experience</h3>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between items-start">
                                            <span className="text-foreground font-medium">Application Developer (Internship)</span>
                                            <span className="font-mono text-xs text-muted-foreground">April 2025 - June 2025</span>
                                        </div>
                                        <span className="text-sm">T.C.C. Technology Co., Ltd.</span>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            - Developing front-end contact list and messaging system using ReactJS.
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            - Developing notification system for mobile application using Firebase Cloud Messaging.
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            - Business analysis for customer requirements and system improvements.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Skills */}
                            <section>
                                <h3 className="font-mono text-xs text-primary mb-4 uppercase tracking-widest border-b border-border pb-2">Skills</h3>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {['React', 'Vue', 'TailwindCSS', 'Flutter', 'Go', 'Python', 'PostgreSQL', 'Docker'].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-1 bg-muted/50 text-[10px] font-mono border border-border uppercase tracking-tight text-foreground"
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