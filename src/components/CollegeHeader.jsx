import React from 'react';

const CollegeHeader = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <img
                src="/college-header.png"
                alt="St. Michael College of Engineering & Technology"
                className="h-auto object-contain mx-auto"
                style={{ display: 'block', maxHeight: '180px', width: 'auto', maxWidth: '100%' }}
            />
        </div>
    );
};

export default CollegeHeader;
