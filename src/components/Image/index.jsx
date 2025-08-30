import React from 'react'

const Image = ({ src, alt, className, overlayText }) => {
    return (
        <div className="relative">
            <img src={src} alt={alt} className={className} />
            {overlayText && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <p className="text-white text-xl font-semibold">{overlayText}</p>
                </div>
            )}
        </div>
    )
}

export default Image