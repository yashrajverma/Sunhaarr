import React from 'react';
import PropTypes from 'prop-types';

const Skeleton = ({ type, className }) => {
    // Define base styles for skeleton animations
    const baseClass = "animate-pulse bg-gray-300 dark:bg-gray-700 rounded";

    // Define different skeleton types
    const skeletonTypes = {
        text: `${baseClass} h-4 w-full mb-2`,
        title: `${baseClass} h-6 w-3/4 mb-4`,
        avatar: `${baseClass} w-16 h-16 rounded-full`,
        image: `${baseClass} w-full h-48`,
        card: `${baseClass} w-full h-64`,
    };

    // Get the specific skeleton type styles
    const skeletonClass = skeletonTypes[type] || baseClass;

    return (
        <div className={`${skeletonClass} ${className}`}>
            {/* Skeleton element */}
        </div>
    );
};

// Define PropTypes for validation
Skeleton.propTypes = {
    type: PropTypes.oneOf(['text', 'title', 'avatar', 'image', 'card']).isRequired,
    className: PropTypes.string, // For additional custom styles
};

Skeleton.defaultProps = {
    className: '',
};

export default Skeleton;
