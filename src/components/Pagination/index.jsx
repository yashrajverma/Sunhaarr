import React, { useState } from "react";
import Icon from "../Icon";

export default function Pagination({ items, itemsPerPage = 10, currentPage, setCurrentPage, allPages }) {
    const totalPages = allPages || Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const getVisiblePages = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    const visiblePages = getVisiblePages();

    return (
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 my-0">
            {/* Previous Button */}
            <div className="-mt-px w-0 flex-1 flex">
                <button
                    onClick={handlePreviousClick}
                    disabled={currentPage === 1}
                    className={`border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                >
                    <Icon iconName="arrowleft" className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                </button>
            </div>

            {/* Page Numbers */}
            <div className="hidden md:-mt-px md:flex">
                {visiblePages.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium ${page === currentPage
                            ? "border-accentGold text-accentGold"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                            }`}
                        aria-current={page === currentPage ? "page" : undefined}
                    >
                        {page}
                    </button>
                ))}
                {/* Show ellipsis for additional pages */}
                {visiblePages[visiblePages.length - 1] < totalPages && (
                    <>
                        <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                            ...
                        </span>
                        <button
                            onClick={() => handlePageClick(totalPages)}
                            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                        >
                            {totalPages}
                        </button>
                    </>
                )}
            </div>

            {/* Next Button */}
            <div className="-mt-px w-0 flex-1 flex justify-end">
                <button
                    onClick={handleNextClick}
                    disabled={currentPage === totalPages}
                    className={`border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        }`}
                >
                    Next
                    <Icon iconName="arrowright" className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
            </div>
        </nav>
    );
}
