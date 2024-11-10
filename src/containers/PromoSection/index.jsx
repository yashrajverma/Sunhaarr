import Button from '../../components/Button';
import image4 from '../../assets/images/image4.svg';
import image5 from '../../assets/images/image5.svg';
import image6 from '../../assets/images/image6.svg';
import image7 from '../../assets/images/image7.svg';
import image8 from '../../assets/images/image8.svg';
import image9 from '../../assets/images/image9.svg';
import image10 from '../../assets/images/image10.svg';

export default function PromoSection() {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Summer styles are finally here
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                            if you live or die.
                        </p>
                        <Button className={'mt-5'}>
                            Shop Collection
                        </Button>
                    </div>
                    <div>
                        <div className="mt-10">
                            {/* Decorative image grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-sm overflow-hidden sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src={image4}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-sm overflow-hidden">
                                                <img
                                                    src={image5}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-sm overflow-hidden">
                                                <img
                                                    src={image6}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-sm overflow-hidden">
                                                <img
                                                    src={image7}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-sm overflow-hidden">
                                                <img
                                                    src={image8}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-sm overflow-hidden">
                                                <img
                                                    src={image9}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-sm overflow-hidden">
                                                <img
                                                    src={image10}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
