import React from 'react'
import Text from '../Text'
import Image from '../Image'

const testimonials = [
    {
        name: "Virnda",
        text: "A big shout out to you guys for improving my hubby's gifting tastes. Completely in love with my ring!",
        image: "https://images.unsplash.com/photo-1579726670131-487ecc8e1e8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Himanshi",
        text: "Never thought buying jewellery would be this easy, thanks for helping make my mom's birthday special.",
        image: "https://images.unsplash.com/photo-1587947330318-88fcd9055420?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Priya",
        text: "Gifted these earrings to my sister on her wedding and she loved them! I am obsessed with buying gifts from Sunhaarr.",
        image: "https://images.unsplash.com/photo-1664583266472-da537cae9c0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const Testimonials = () => {
    return (
        <div className="py-16 px-8 text-center">
            <Text variant='3xl' className="font-bold mb-3 text-gray-800">Customer Stories</Text>
            <Text variant='md' className="mb-12 text-gray-800">Hear from our happy customers</Text>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-[#FFF3D9] p-8 rounded-md text-left border-accentGold border-2 relative">
                        <Text variant='2xl' className="mb-4 text-gray-800">{testimonial.name}</Text>
                        <Text variant='base' className="leading-relaxed text-gray-600">{testimonial.text}</Text>
                        <Image src={testimonial.image} alt={testimonial.name} className={'border-2 border-accentGold rounded-full w-[4rem] h-[4rem] absolute left-[40%] top-[-10%]'} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials