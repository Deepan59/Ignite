import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProblemTable from '../components/ProblemTable';
import ProblemModal from '../components/ProblemModal';
import problemData from '../data/problemStatements.json';

const StaffPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProblem, setSelectedProblem] = useState(null);

    const staffTrack = problemData.staffInnovation;

    // Filter problems based on search query
    const filteredProblems = useMemo(() => {
        if (!searchQuery.trim()) {
            return staffTrack.problems;
        }

        const query = searchQuery.toLowerCase();
        return staffTrack.problems.filter(
            (problem) =>
                problem.id.toLowerCase().includes(query) ||
                problem.title.toLowerCase().includes(query) ||
                problem.category.toLowerCase().includes(query)
        );
    }, [searchQuery, staffTrack.problems]);

    return (
        <div className="min-h-screen">

            {/* Header */}
            <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-yellow-900 via-orange-900 to-amber-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center px-4 py-2 bg-[var(--color-gold)] bg-opacity-20 border border-[var(--color-gold)] rounded-full text-white hover:bg-opacity-30 transition-all text-sm font-poppins font-semibold mb-4"
                        >
                            <svg
                                className="w-4 h-4 mr-2"
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
                        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-[var(--color-gold)] mb-4" style={{ textShadow: '0 0 30px rgba(255, 215, 0, 0.5)' }}>
                            Staff Innovation Track
                        </h1>
                        <p className="text-xl text-gray-300 font-poppins">
                            Total Problems: <span className="text-[var(--color-gold)] font-semibold">{staffTrack.problems.length}</span>
                        </p>
                        <p className="text-gray-400 font-poppins mt-2 max-w-2xl mx-auto">
                            Exclusive problem statements designed for faculty members to showcase innovation in education, research, and campus management
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                <div className="card p-6 border-2 border-[var(--color-gold)] border-opacity-30">
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

export default StaffPage;
