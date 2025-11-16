import { cn } from '@/lib/utils'
import { X, Menu } from 'lucide-react';
import { useEffect, useState } from 'react'

const NavLinks = [
    { name: 'Home', link: '#hero' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
]


export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={cn('fixed w-full z-40 transition-all duration-300',
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className='container flex items-center justify-between'>
                <a className='text-xl font-bold text-primary flex items-center' href='#'>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'>My </span>Portfolio
                    </span>
                </a>
                {/* Desktop Links */}
                <div className='hidden md:flex space-x-8'>
                    {NavLinks.map((navLink) => (
                        <a
                            key={navLink.name}
                            href={navLink.link}
                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                        >
                            {navLink.name}
                        </a>
                    ))}
                </div>
                {/* Mobile Menu Button */}

                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='md:hidden p-2 text-foreground z-50'
                        aria-label= {isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className='flex flex-col space-y-4 text-xl'>
                        {NavLinks.map((navLink) => (
                            <a
                                key={navLink.name}
                                href={navLink.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className='text-foreground/80 hover:text-primary transition-colors duration-300'
                            >
                                {navLink.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}