import React from 'react';

const CollegeHeader = () => {
    return (
        <div className="w-full bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900 flex justify-center items-center">
            <img
                src="/college-header.png"
                alt="St. Michael College of Engineering & Technology"
                className="w-full h-auto max-h-[140px] object-contain"
            />
        </div>
    );
};

export default CollegeHeader;
