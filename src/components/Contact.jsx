import { useState } from 'react'
import { motion } from 'motion/react'
import { Copy, Check } from 'lucide-react'

import { fadeUp } from '@/lib/animations'

function Contact() {
    const [copied, setCopied] = useState(false)
    const email = 'thanat.thp@gmail.com'

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const contactLinks = [
        {
            icon: '/mail.svg',
            label: 'Email',
            value: email,
            href: `mailto:${email}`,
            canCopy: true
        },
        {
            icon: '/github.svg',
            label: 'Github',
            value: 'https://github.com/bananasplit07',
            href: 'https://github.com/bananasplit07'
        },
        {
            icon: '/social-linkedin.svg',
            label: 'Linkedin',
            value: 'https://www.linkedin.com/in/thanatph/',
            href: 'https://www.linkedin.com/in/thanatph/'
        },
        {
            icon: '/instagram.svg',
            label: 'Instagram',
            value: 'thanutz',
            href: 'https://instagram.com/thanutz'
        }
    ]

    return (
        <motion.section
            id="contact"
            {...fadeUp}
            className="mb-6 md:mb-12"
        >
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground tracking-tighter mb-4">
                    Contact
                </h2>
                <div className="w-24 h-1 bg-primary"></div>
            </div>

            <div className="space-y-6 max-w-2xl">
                {contactLinks.map((link, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                        <div
                            className="w-5 h-5 bg-muted-foreground group-hover:bg-primary transition-all group-hover:scale-110"
                            style={{
                                maskImage: `url(${link.icon})`,
                                WebkitMaskImage: `url(${link.icon})`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center'
                            }}
                        />
                        <div className="flex flex-wrap items-center gap-x-2 font-mono text-xs md:text-base">
                            <span className="text-foreground font-medium">{link.label} :</span>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-primary hover:underline transition-all break-all"
                            >
                                {link.value}
                            </a>
                            {link.canCopy && (
                                <button
                                    onClick={copyToClipboard}
                                    className="p-1.5 hover:bg-muted rounded-md transition-colors text-muted-foreground hover:text-foreground active:scale-95"
                                    title="Copy email"
                                >
                                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-16 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl"
            >

            </motion.p>
        </motion.section>
    )
}

export default Contact
