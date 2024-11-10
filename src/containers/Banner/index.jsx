import React from 'react'

const Banner = ({ bannerItems, bannerColor }) => {
    return (
        <div className={`${bannerColor} min-h-[50px] max-h-max px-[20%] py-4`}>
            <div className='flex items-center justify-around flex-wrap text-center'>
                {bannerItems.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center my-3 text-sm md:text-base'>
                            {item.image ? <img src={item.image} alt={item.text} /> : item.icon}
                            <p key={index}>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Banner