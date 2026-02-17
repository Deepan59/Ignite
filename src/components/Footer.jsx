const Footer = () => {
    return (
        <footer className="bg-[var(--color-bg-secondary)] border-t border-white border-opacity-10 py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4">
                    <h3 className="text-2xl font-orbitron font-bold glow-text">
                        IGNITE 2K26
                    </h3>
                    <p className="text-gray-400 font-poppins">
                        Inter College Hackathon
                    </p>
                    <p className="text-gray-500 font-poppins text-sm">
                        Organized by CSE & <span className="whitespace-nowrap">CSE (AI&ML)</span>
                    </p>
                    <p className="text-gray-500 font-poppins text-sm">
                        Contact: <a href="tel:+91 9361224959" className="text-[var(--color-neon-blue)] hover:underline">
                            R.Munish Kumar : +91 9361224959   |  S.Sanofer Nisha : +91 8667352613
                        </a>
                    </p>
                    <div className="pt-2">
                        <a
                            href="/sample-template.pptx"
                            download
                            className="text-sm font-poppins text-[var(--color-neon-blue)] hover:glow-text transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download presentation Template
                        </a>
                    </div>
                    <div className="pt-4 text-gray-600 text-sm font-poppins">
                        © 2026 IGNITE. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
