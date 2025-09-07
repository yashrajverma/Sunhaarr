import React from 'react';
import Text from '../../components/Text';
import { BrandName } from '../../constants';

const RefundPolicy = () => {
    return (
        <>
            <section className="Refund-policy" style={{ maxWidth: "75%", margin: "0 auto", padding: "20px", lineHeight: "1.6" }}>
                <Text variant='3xl' className={'my-16 text-center'}>Refund Policy - {BrandName}</Text>

                <Text variant='lg' className={'my-4'}>Thank You for Shopping at {BrandName}</Text>

                <Text variant='lg' className={'my-4'}>We appreciate your business and strive to provide you with the highest quality of silver fine jewelry. Please read our Return, Refund, and Shipping Policies carefully before making any purchase.</Text>

                <Text variant='lg' className={'my-4 font-bold'}>Return Policy</Text>

                <Text variant='lg' className={'my-4 font-bold'}>At { }, all sales are final. We do not offer returns or refunds for any purchases. This policy is in place to ensure the highest level of quality and customer satisfaction with our handcrafted jewelry.</Text>

                <Text variant='lg' className={'my-4'}>Exceptions</Text>

                <Text variant='lg' className={'my-4'}>While we do not accept returns or provide refunds, we are committed to ensuring your satisfaction. If your item arrives damaged or you receive the wrong product, please contact us within 7 days of receiving your order. We will review your case and work with you to find a satisfactory solution, which may include a replacement or repair.</Text>

                <Text variant='lg' className={'my-4'}>Refunds and Cancellations</Text>

                <Text variant='lg' className={'my-4'}>Refunds: Refunds are only processed in the event of an exception, such as receiving a damaged or incorrect product. Approved refunds will be credited to your bank account within 5-7 working days from the date of approval.</Text>

                <Text variant='lg' className={'my-4'}>Cancellations: Orders can be canceled within 24 hours of purchase. After this period, cancellations may not be possible as the order might have already been processed or shipped.</Text>

                <Text variant='lg' className={'my-4'}>Shipping Policy</Text>

                <Text variant='lg' className={'my-4'}>Shipping Timeline:</Text>
                <Text variant='lg' className={'my-4'}>- Domestic Orders (Within India): Estimated delivery time is 5-10 working days.</Text>

                <Text variant='lg' className={'my-4'}>We work with reliable shipping partners to ensure timely and safe delivery of your order.</Text>

                <Text variant='lg' className={'my-4'}>Contact Us</Text>

                <Text variant='lg' className={'my-4'}>If you have any questions or concerns about your purchase, please contact our customer service team. We are here to help and ensure you have a positive shopping experience with { }.</Text>

                <Text>Email: {BrandName}foryou@gmail.com</Text>
                <Text>Indian Contact Number: +91 7073511656</Text>
                <Text>Business Name: {BrandName}</Text>

                <Text>By making a purchase on our website, you agree to this Return, Refund, and Shipping Policy.</Text>

                <Text>Thank you for choosing {BrandName}.</Text>
            </section>

        </>
    )
}

export default RefundPolicy