const ProblemTable = ({ problems, onProblemClick }) => {
    if (problems.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-400 font-poppins text-lg">
                    No problems found matching your search.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-white border-opacity-10">
                        <th className="text-left py-4 px-4 font-orbitron font-semibold text-[var(--color-neon-blue)]">
                            ID
                        </th>
                        <th className="text-left py-4 px-4 font-orbitron font-semibold text-[var(--color-neon-blue)]">
                            Title
                        </th>
                        <th className="text-left py-4 px-4 font-orbitron font-semibold text-[var(--color-neon-blue)]">
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map((problem) => (
                        <tr
                            key={problem.id}
                            onClick={() => onProblemClick(problem)}
                            className="border-b border-white border-opacity-5 hover:bg-[var(--color-bg-tertiary)] cursor-pointer transition-colors"
                        >
                            <td className="py-4 px-4 font-poppins text-gray-300">
                                {problem.id}
                            </td>
                            <td className="py-4 px-4 font-poppins text-white">
                                {problem.title}
                            </td>
                            <td className="py-4 px-4">
                                <span
                                    className={`badge ${problem.category === 'Software'
                                            ? 'badge-software'
                                            : 'badge-hardware'
                                        }`}
                                >
                                    {problem.category}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProblemTable;
