import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        setIsMenuOpen(false);

        // If not on home page, navigate to home first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete, then scroll
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Already on home page, just scroll
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-[var(--color-bg-secondary)] bg-opacity-95 backdrop-blur-md border-b border-white border-opacity-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img src="/logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 glow-logo" />
                        <span className="text-[75px] md:text-xs font-orbitron font-bold glow-text whitespace-nowrap">
                            IGNITE 2K26
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors font-poppins"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('domains')}
                            className="text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors font-poppins"
                        >
                            Domains
                        </button>
                        <button
                            onClick={() => scrollToSection('team')}
                            className="text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors font-poppins"
                        >
                            Team
                        </button>
                        <a
                            href="/sample-template.pptx"
                            download
                            className="text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors font-poppins"
                        >
                            Template
                        </a>
                        <Link
                            to="/staff"
                            className="btn-primary text-sm"
                        >
                            Staff Track
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[var(--color-bg-tertiary)] border-t border-white border-opacity-10">
                    <div className="px-4 py-3 space-y-3">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="block w-full text-left text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors font-poppins py-2"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('domains')}
                            className="block w-full text-left text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors font-poppins py-2"
                        >
                            Domains
                        </button>
                        <button
                            onClick={() => scrollToSection('team')}
                            className="block w-full text-left text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors font-poppins py-2"
                        >
                            Team
                        </button>
                        <a
                            href="/sample-template.pptx"
                            download
                            className="block w-full text-left text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors font-poppins py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Template
                        </a>
                        <Link
                            to="/staff"
                            className="block btn-primary text-center text-sm"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Staff Track
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
