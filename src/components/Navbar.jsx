import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsOpen(false)
    }

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent border-b border-transparent'
            }`}>
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <button
                    onClick={() => handleNavClick('hero')}
                    className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity cursor-pointer"
                >
                    Thanat.
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.id)}
                            className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-1"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col p-6 gap-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.id)}
                            className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors cursor-pointer text-left"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar