import { useState } from 'react';
import { Link } from 'react-router-dom';
import DomainCard from '../components/DomainCard';
import TeamModal from '../components/TeamModal';
import CollegeHeader from '../components/CollegeHeader';
import problemData from '../data/problemStatements.json';

const Home = () => {
    const domains = problemData.domains;
    const [selectedTeam, setSelectedTeam] = useState(null);

    const teamRoles = [
        {
            role: 'Event Lead',
            count: 2,
            members: [
                { name: 'Munish Kumar R', year: 'III-yr', department: 'CSE' },
                { name: 'Sanofer Nisha S', year: 'III-yr', department: 'CSE (AI & ML)' }
            ]
        },
        {
            role: 'Web Developers',
            count: 3,
            members: [
                { name: 'Deepan S', year: 'III-yr', department: 'CSE (AI & ML)' },
                { name: 'Rajesh R', year: 'III-yr', department: 'CSE (AI & ML)' },
                { name: 'Vignesh K', year: 'III-yr', department: 'CSE (AI & ML)' }
            ]
        },
        {
            role: 'Designers',
            count: 2,
            members: [
                { name: 'Meena R', year: 'III-yr', department: 'CSE' },
                { name: 'Vijayalakshmi R', year: 'III-yr', department: 'CSE' },

            ]
        },
        {
            role: 'Promotion Team',
            count: 3,
            members: [
                { name: 'Sagaya Hervin A', year: 'III-yr', department: 'CSE' },
                { name: 'KrishnaKumar S', year: 'III-yr', department: 'CSE' },
                { name: 'Prasin I', year: 'III-yr', department: 'CSE' }
            ]
        },
        {
            role: 'Information & Documentation',
            count: 3,
            members: [
                { name: 'Vinotha G', year: 'III-yr', department: 'CSE' },
                { name: 'Shakthi M', year: 'III-yr', department: 'CSE (AI & ML)' },
                { name: 'Keerthika C', year: 'III-yr', department: 'CSE' }
            ]
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
                {/* Background with gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
                </div>

                {/* College Header - merged inside hero gradient */}
                <div className="relative z-10 w-full">
                    <CollegeHeader />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 fade-in pb-20 pt-8 md:pt-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6 md:mb-8">
                        <img src="/logo.png" alt="Ignite Logo" className="w-20 h-20 md:w-40 md:h-40 animate-bounce-slow glow-logo" />
                        <h1 className="text-xl md:text-7xl font-orbitron font-black glow-text leading-tight">
                            IGNITE 2K26
                        </h1>
                    </div>

                    <p className="text-lg md:text-4xl font-orbitron font-semibold text-[var(--color-neon-purple)] mb-3 md:mb-6">
                        Innovate. Integrate. Elevate.
                    </p>
                    <p className="text-sm md:text-2xl text-gray-300 font-poppins max-w-3xl mx-auto mb-4 md:mb-8">
                        Join the ultimate inter-college Hackathon featuring 70 problem statements across 7 cutting-edge domains
                    </p>
                    <p className="text-xs md:text-xl text-gray-400 font-orbitron mt-2 mb-4 tracking-wider uppercase max-w-5xl mx-auto leading-relaxed">
                        Organized by the <span className="text-[var(--color-neon-blue)] font-bold">Department of CSE</span> and <span className="text-[var(--color-neon-blue)] font-bold whitespace-nowrap">CSE (AI&ML)</span>
                    </p>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator mt-4">
                        <svg
                            className="w-8 h-8 mx-auto text-[var(--color-neon-blue)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Organizing Team Section */}
            <section id="team" className="py-20 px-4 bg-[var(--color-bg-secondary)]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white text-center mb-12">
                        Organizing <span className="glow-text">Team</span>
                    </h2>

                    {/* Chief Patrons */}
                    <div className="mb-12">
                        <p className="text-center text-xs md:text-sm font-orbitron font-bold uppercase tracking-[0.3em] text-[var(--color-neon-purple)] mb-6 opacity-80">Chief Patrons</p>
                        <div className="flex flex-wrap justify-center gap-12 px-4">
                            <div className="text-center group">
                                <p className="text-xl md:text-2xl font-poppins font-bold text-white glow-text-subtle">Ln.Dr.M.Stalin Arockiaraj</p>
                                <p className="text-[var(--color-neon-blue)] font-orbitron text-xs md:text-sm uppercase tracking-[0.2em] mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Chairman</p>
                            </div>
                            <div className="text-center group">
                                <p className="text-xl md:text-2xl font-poppins font-bold text-white glow-text-subtle">Ln.Dr.J.Bridget Nirmala</p>
                                <p className="text-[var(--color-neon-blue)] font-orbitron text-xs md:text-sm uppercase tracking-[0.2em] mb-2 opacity-80 group-hover:opacity-100 transition-opacity">CEO</p>
                            </div>
                            <div className="text-center group">
                                <p className="text-xl md:text-2xl font-poppins font-bold text-white glow-text-subtle">Er.S.Cergius Anto Michael</p>
                                <p className="text-[var(--color-neon-blue)] font-orbitron text-xs md:text-sm uppercase tracking-[0.2em] mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Vice Chairman</p>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Names */}
                    <div className="flex flex-wrap justify-center gap-12 mb-16 px-4">
                        <div className="text-center group">
                            <p className="text-xl md:text-2xl font-poppins font-bold text-white glow-text-subtle">Dr.S.Karpagam</p>
                            <p className="text-[var(--color-neon-blue)] font-orbitron text-xs md:text-sm uppercase tracking-[0.2em] mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Principal , SMCET</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-xl md:text-2xl font-poppins font-bold text-white glow-text-subtle">Mrs.A.Thamarai Muthumani</p>
                            <p className="text-[var(--color-neon-blue)] font-orbitron text-xs md:text-sm uppercase tracking-[0.2em] mb-2 opacity-80 group-hover:opacity-100 transition-opacity">HOD of CSE and CSE (Ai&ML)</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-xl md:text-2xl font-poppins font-bold text-white glow-text-subtle">Mrs.L.Devi</p>
                            <p className="text-[var(--color-neon-blue)] font-orbitron text-xs md:text-sm uppercase tracking-[0.2em] mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Program Coordinator</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamRoles.map((item, index) => (
                            <div
                                key={index}
                                className="card p-6 text-center cursor-pointer group"
                                onClick={() => setSelectedTeam(item)}
                            >
                                <div className="text-[var(--color-neon-blue)] text-3xl font-poppins font-bold mb-2 group-hover:scale-110 transition-transform">
                                    {item.count}
                                </div>
                                <h3 className="text-lg font-orbitron font-semibold text-white group-hover:text-[var(--color-neon-blue)] transition-colors">
                                    {item.role}
                                </h3>
                                <p className="text-sm text-gray-400 font-poppins mt-2">
                                    Click to view members
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Modal */}
            {selectedTeam && (
                <TeamModal
                    team={selectedTeam}
                    onClose={() => setSelectedTeam(null)}
                />
            )}

            {/* Domains Section */}
            <section id="domains" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white text-center mb-12">
                        Explore <span className="glow-text">Domains</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {domains.map((domain, index) => (
                            <DomainCard key={domain.id} domain={domain} index={index} />
                        ))}

                        {/* Staff Innovation Track - As 8th Item */}
                        <Link
                            to="/staff"
                            className="card p-6 group cursor-pointer border-2 border-[var(--color-gold)] hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                {/* Serial Number */}
                                <div className="text-5xl font-orbitron font-bold text-[var(--color-gold)] opacity-30 group-hover:opacity-100 transition-opacity">
                                    08
                                </div>

                                {/* Track Name */}
                                <h3 className="text-xl font-orbitron font-semibold text-white group-hover:text-[var(--color-gold)] transition-colors">
                                    Staff Innovation Track
                                </h3>

                                {/* Problem Count */}
                                <div className="text-sm text-gray-400 font-poppins">
                                    10 Problem Statements
                                </div>

                                <div className="text-xs text-[var(--color-gold)] font-orbitron font-semibold uppercase tracking-wider">
                                    Special Track
                                </div>

                                {/* Hover Arrow */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg
                                        className="w-6 h-6 text-[var(--color-gold)] animate-bounce"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 bg-[var(--color-bg-secondary)]">
                <div className="max-w-4xl mx-auto text-center fade-in">
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                        About <span className="glow-text">IGNITE 2K26</span>
                    </h2>
                    <div className="card p-8">
                        <p className="text-lg text-gray-300 font-poppins leading-relaxed mb-6">
                            IGNITE 2K26 is a premier inter-college hackathon bringing together the brightest minds to solve real-world challenges through innovation and technology.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-4xl font-poppins font-bold text-[var(--color-neon-blue)] mb-2">7</div>
                                <div className="text-sm text-gray-400 font-poppins">Domains</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-poppins font-bold text-[var(--color-neon-purple)] mb-2">70</div>
                                <div className="text-sm text-gray-400 font-poppins">Problem Statements</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-poppins font-bold text-[var(--color-neon-pink)] mb-2">10</div>
                                <div className="text-sm text-gray-400 font-poppins">Staff Innovation Track</div>
                            </div>
                        </div>
                    </div>

                    {/* Rules & Regulations Card */}
                    <div className="card p-8 mt-8 text-left">
                        <h3 className="text-lg md:text-2xl font-orbitron font-bold text-[var(--color-neon-blue)] mb-6 flex items-center gap-3">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Rules & <span className="glow-text-subtle">Regulations</span>
                        </h3>
                        <ul className="space-y-4 font-poppins text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-neon-purple)] mt-1.5">•</span>
                                <span>Team must have <strong className="text-white"> 2-4 members</strong>.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-neon-purple)] mt-1.5">•</span>
                                <span><strong className="text-white">Prototype</strong> submission carry extra marks.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-neon-purple)] mt-1.5">•</span>
                                <span>At least <strong className="text-white">one staff member</strong> from each department must participate in the staff category.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-neon-purple)] mt-1.5">•</span>
                                <span>Judges decision is <strong className="text-white">final</strong>.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-neon-purple)] mt-1.5">•</span>
                                <span>Malpractice leads to <strong className="text-white">disqualification</strong>.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-neon-purple)] mt-1.5">•</span>
                                <span>PPT time limit : <strong className="text-white">10 minutes</strong>.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[var(--color-neon-purple)] mt-1.5">•</span>
                                <span>Official template for the presentation must be <strong className="text-white">Downloaded from the website</strong>.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default Home;
