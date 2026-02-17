import { Link } from 'react-router-dom';

const DomainCard = ({ domain, index }) => {
    return (
        <Link
            to={`/domain/${domain.slug}`}
            className="card p-6 group cursor-pointer"
        >
            <div className="flex flex-col items-center text-center space-y-4">
                {/* Serial Number */}
                <div className="text-5xl font-orbitron font-bold text-[var(--color-neon-blue)] opacity-30 group-hover:opacity-100 transition-opacity">
                    {String(index + 1).padStart(2, '0')}
                </div>

                {/* Domain Name */}
                <h3 className="text-xl font-orbitron font-semibold text-white group-hover:text-[var(--color-neon-blue)] transition-colors">
                    {domain.name}
                </h3>

                {/* Problem Count */}
                <div className="text-sm text-gray-400 font-poppins">
                    {domain.problems?.length || 10} Problem Statements
                </div>

                {/* Hover Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                        className="w-6 h-6 text-[var(--color-neon-blue)] animate-bounce"
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
    );
};

export default DomainCard;
