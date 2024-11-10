import React from 'react'
import image4 from '../../assets/images/image4.svg';
import image5 from '../../assets/images/image5.svg';
import image6 from '../../assets/images/image6.svg';
import image7 from '../../assets/images/image7.svg';
import image8 from '../../assets/images/image8.svg';
import image9 from '../../assets/images/image9.svg';
import image10 from '../../assets/images/image10.svg';
import image11 from '../../assets/images/image11.svg';
const SocialSection = () => {

    const socialImage = [{ image: image4 },
    { image: image5 }, { image: image6 }, { image: image7 }, { image: image8 }, { image: image9 }, { image: image10 }, { image: image11 }
    ]
    return (
        <div className='text-center py-5'>
            <h1 className='text-center text-3xl mb-5 font-bold'>Follow Us On</h1>
            <div className='flex justify-center items-center gap-8 py-5 w-full overflow-x-scroll'>
                {socialImage.map(({ image }, index) => {
                    return <img key={index} src={image} className='w-28 h-28 hover:shadow-sm' />
                })}
            </div>
        </div>

    )
}

export default SocialSection