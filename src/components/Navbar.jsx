import { useState, useEffect } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '1.1rem 2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: scrolled ? 'rgba(250,250,247,0.92)' : 'transparent',
            borderBottom: scrolled ? '1px solid #E2E2DC' : '1px solid transparent',
            transition: 'all 0.3s',
        }}>
            <div>YourName.</div>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
                <a href="#skills" style={{ textDecoration: 'none', color: 'inherit' }}>Skills</a>
                <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a>
                <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar