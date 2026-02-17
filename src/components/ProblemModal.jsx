import { useEffect } from 'react';

const ProblemModal = ({ problem, onClose }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    if (!problem) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={onClose}
        >
            <div
                className="card max-w-3xl w-full max-h-[90vh] overflow-y-auto scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-[var(--color-bg-secondary)] bg-opacity-95 backdrop-blur-md p-6 border-b border-white border-opacity-10 flex justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                            <span className="text-sm font-orbitron font-semibold text-[var(--color-neon-blue)]">
                                {problem.id}
                            </span>
                            <span
                                className={`badge ${problem.category === 'Software'
                                        ? 'badge-software'
                                        : 'badge-hardware'
                                    }`}
                            >
                                {problem.category}
                            </span>
                        </div>
                        <h2 className="text-2xl font-orbitron font-bold text-white">
                            {problem.title}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-4 text-gray-400 hover:text-white transition-colors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    <div>
                        <h3 className="text-lg font-orbitron font-semibold text-[var(--color-neon-purple)] mb-2">
                            Description
                        </h3>
                        <p className="text-gray-300 font-poppins leading-relaxed">
                            {problem.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-orbitron font-semibold text-[var(--color-neon-purple)] mb-2">
                            Background
                        </h3>
                        <p className="text-gray-300 font-poppins leading-relaxed">
                            {problem.background}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-orbitron font-semibold text-[var(--color-neon-purple)] mb-2">
                            Expected Outcome
                        </h3>
                        <p className="text-gray-300 font-poppins leading-relaxed">
                            {problem.expectedOutcome}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemModal;
