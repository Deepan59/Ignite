const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="relative max-w-2xl mx-auto mb-8">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search by Problem ID, Title, or Category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pl-14 bg-[var(--color-bg-tertiary)] border border-white border-opacity-10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-neon-blue)] transition-all font-poppins"
                />
                <svg
                    className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SearchBar;
