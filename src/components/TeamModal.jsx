import { useEffect } from 'react';

const TeamModal = ({ team, onClose }) => {
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

    if (!team) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={onClose}
        >
            <div
                className="card max-w-2xl w-full scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-[var(--color-bg-secondary)] bg-opacity-95 backdrop-blur-md p-6 border-b border-white border-opacity-10 flex justify-between items-start">
                    <div className="flex-1">
                        <h2 className="text-2xl font-orbitron font-bold text-white mb-2">
                            {team.role}
                        </h2>
                        <div className="text-sm text-[var(--color-neon-blue)] font-poppins">
                            {team.members.length} {team.members.length === 1 ? 'Member' : 'Members'}
                        </div>
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
                <div className="p-6 space-y-4">
                    {team.members.map((member, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4 p-4 bg-[var(--color-bg-tertiary)] rounded-lg hover:bg-opacity-80 transition-all"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] flex items-center justify-center">
                                <span className="text-white font-orbitron font-bold text-lg">
                                    {member.name.charAt(0)}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-poppins font-semibold text-white">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-400 font-poppins">
                                    {member.year} {member.department}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamModal;
