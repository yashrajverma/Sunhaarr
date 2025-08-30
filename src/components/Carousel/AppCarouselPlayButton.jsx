export const AppCarouselPlayButton = ({ isPlaying, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute bottom-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        >
            {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                </svg>
            )}
        </button>
    );
};