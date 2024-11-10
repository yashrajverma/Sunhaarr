import React from 'react';
import Image1 from '../../assets/images/image1.svg'
import Image2 from '../../assets/images/image2.svg'
import Image3 from '../../assets/images/image3.svg'
import Icon from '../Icon';

const Carousel = () => {
    const carouselImage = [{ image: Image1, text: 'Image 1' }, { image: Image2, text: 'Image 2' }, { image: Image3, text: 'Image 3' }]
    return (
        <>
            <div id="default-carousel" class="relative w-full" data-carousel="slide">
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {carouselImage.map(({ image, text }, index) => {
                        return <div key={index} class=" duration-700 ease-in-out" data-carousel-item>
                            <img src={image} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain object-center" alt={text} />
                        </div>
                    })}
                </div>

                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {carouselImage.map((ele, index) => {
                        return <button key={index} type="button" class="w-3 h-3 rounded-full bg-primaryNavy" aria-current="true" aria-label={`Slide ${index}`} data-carousel-slide-to={index}></button>
                    })}
                </div>
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primaryNavy dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <Icon iconName='chevronleft' />
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primaryNavy dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <Icon iconName='chevronright' />
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </>
    )
}

export default Carousel