import React from 'react';
import Skeleton from '../Skeleton';

const SkeletonCard = () => {
    return (
        <div className="p-4 w-full mx-auto">
            <div className="flex items-center space-x-4 mb-4">
                <Skeleton type="avatar" />
                <div className="flex-1">
                    <Skeleton type="title" />
                    <Skeleton type="text" />
                </div>
            </div>
            <Skeleton type="image" className="mb-4" />
            <Skeleton type="text" />
            <Skeleton type="text" className="w-5/6" />
        </div>
    );
};

export default SkeletonCard;
