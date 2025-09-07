import React from 'react';
import Text from '../../components/Text';
import { BrandName } from '../../constants';

const PrivacyPolicy = () => {
    return (
        <>
            <section className="privacy-policy" style={{ maxWidth: "75%", margin: "0 auto", padding: "20px", lineHeight: "1.6" }}>
                <Text variant='3xl' className={'font-bold my-16 text-center'}>Privacy Policy – {BrandName}</Text>
                <p>At <strong>{BrandName}</strong> (“we,” “our,” “us”), your privacy matters deeply to us. We are dedicated to safeguarding the personal details you share with us. This Privacy Policy describes how we gather, use, disclose, and protect your information when you browse our website,
                    <a href={`https://www.${BrandName}.com`} target="_blank">https://www.{BrandName}.com</a> (the “Site”), and purchase our fine silver jewelry.</p>

                <Text variant='xl' className={'font-bold my-5 border border-b-2 border-t-0 border-l-0 border-r-0'}>1. Information We Collect</Text>
                <h3>Personal Information You Provide</h3>
                <ul>
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Billing details</li>
                    <li>Shipping details</li>
                    <li>Payment information</li>
                </ul>

                <Text variant='xl' className={'font-bold my-5 border border-b-2 border-t-0 border-l-0 border-r-0'}>Information Collected Automatically</Text>
                <ul>
                    <li>IP address</li>
                    <li>Browser version and type</li>
                    <li>Pages viewed on our Site</li>
                    <li>Date and time of your visit</li>
                    <li>Duration spent on each page</li>
                </ul>

                <Text variant='xl' className={'font-bold my-5 border border-b-2 border-t-0 border-l-0 border-r-0'}>2. How We Use Your Information</Text>
                <ul>
                    <li>To process, manage, and deliver your orders</li>
                    <li>To enhance our Site and optimize your shopping experience</li>
                    <li>To send you newsletters, promotions, or product updates (with the option to unsubscribe anytime)</li>
                    <li>To respond to inquiries, feedback, or support requests</li>
                    <li>To detect and prevent fraudulent activities or misuse of our services</li>
                </ul>

                <Text variant='xl' className={'font-bold my-5 border border-b-2 border-t-0 border-l-0 border-r-0'}>3. Sharing of Information</Text>
                <p>We never sell or rent your personal details. However, we may share information under these circumstances:</p>
                <ul>
                    <li>With reliable third-party partners who help us operate our Site, manage transactions, or provide customer service—only under confidentiality agreements</li>
                    <li>When required by law or government authorities</li>
                    <li>To protect our business, property, or legal rights</li>
                </ul>

                <Text variant='xl' className={'font-bold my-5 border border-b-2 border-t-0 border-l-0 border-r-0'}>4. Data Security</Text>
                <p>We implement strong safeguards to protect your personal data. All sensitive details, such as payment information, are transmitted securely using
                    <strong>SSL (Secure Socket Layer) technology</strong> and encrypted within the systems of our authorized payment processors.</p>

                <Text variant='xl' className={'font-bold my-5 border border-b-2 border-t-0 border-l-0 border-r-0'}>5. Your Rights and Choices</Text>
                <ul>
                    <li><strong>Access</strong> – Request a copy of the information we hold about you</li>
                    <li><strong>Correction</strong> – Ask us to update or fix any incorrect information</li>
                    <li><strong>Deletion</strong> – Request removal of your personal information from our records</li>
                    <li><strong>Opt-Out</strong> – Unsubscribe from promotional emails using the link provided in our messages</li>
                </ul>

                <Text variant='xl' className={'font-bold my-5 border border-b-2 border-t-0 border-l-0 border-r-0'}>6. Cookies</Text>
                <p>We use cookies to personalize and improve your browsing experience. A cookie is a small text file placed on your device that allows our systems to recognize your browser and retain certain preferences or activity information.</p>

                <Text variant='xl' className={'font-bold my-5 border border-b-2 border-t-0 border-l-0 border-r-0'}>7. External Links</Text>
                <p>Our Site may contain links to websites operated by third parties. We are not responsible for the privacy practices or content of those external websites. We recommend reviewing their privacy policies before sharing any personal data.</p>

                <Text variant='xl' className={'font-bold my-5 border border-b-2 border-t-0 border-l-0 border-r-0'}>8. Updates to This Policy</Text>
                <p>We may revise this Privacy Policy occasionally to reflect updates in our practices or for legal compliance. Any modifications will be posted on this page with the updated effective date.</p>

                <Text variant='xl' className={'font-bold my-5 border border-b-2 border-t-0 border-l-0 border-r-0'}>9. Contact Information</Text>
                <p>If you have any questions or concerns about this Privacy Policy, you can reach us at:</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:jewelmuseforyou@gmail.com">jewelmuseforyou@gmail.com</a></li>
                    <li><strong>Phone:</strong> <a href="tel:+918839080272">+91 8839080272</a></li>
                </ul>

                <p>By accessing and using our Site, you agree to the terms outlined in this Privacy Policy.</p>
            </section>

        </>
    )
}

export default PrivacyPolicy