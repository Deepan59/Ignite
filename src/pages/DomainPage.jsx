import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProblemTable from '../components/ProblemTable';
import ProblemModal from '../components/ProblemModal';
import problemData from '../data/problemStatements.json';

const DomainPage = () => {
    const { domainName } = useParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProblem, setSelectedProblem] = useState(null);

    // Find the domain
    const domain = problemData.domains.find((d) => d.slug === domainName);

    // Filter problems based on search query
    const filteredProblems = useMemo(() => {
        if (!domain) return [];

        if (!searchQuery.trim()) {
            return domain.problems;
        }

        const query = searchQuery.toLowerCase();
        return domain.problems.filter(
            (problem) =>
                problem.id.toLowerCase().includes(query) ||
                problem.title.toLowerCase().includes(query) ||
                problem.category.toLowerCase().includes(query)
        );
    }, [domain, searchQuery]);

    if (!domain) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-orbitron font-bold text-white mb-4">
                        Domain Not Found
                    </h1>
                    <Link to="/" className="btn-primary">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">

            {/* Header */}
            <div className="pt-12 pb-12 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900">
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center text-[var(--color-neon-blue)] hover:text-white transition-colors mb-6 font-poppins"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to Home
                    </Link>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-orbitron font-bold glow-text mb-4">
                            {domain.name}
                        </h1>
                        <p className="text-xl text-gray-300 font-poppins">
                            Total Problems: <span className="text-[var(--color-neon-purple)] font-semibold">{domain.problems.length}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                <div className="card p-6">
                    <ProblemTable
                        problems={filteredProblems}
                        onProblemClick={setSelectedProblem}
                    />
                </div>
            </div>

            {/* Modal */}
            {selectedProblem && (
                <ProblemModal
                    problem={selectedProblem}
                    onClose={() => setSelectedProblem(null)}
                />
            )}

        </div>
    );
};

export default DomainPage;
