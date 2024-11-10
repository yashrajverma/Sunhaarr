import React from "react";
import Carousel from "../../components/Carousel";
import CardLayout from "../../containers/CardLayout";
import Banner from "../../containers/Banner";
import Icon from "../../components/Icon";
import PromoSection from "../../containers/PromoSection";
import Image1 from '../../assets/images/image1.svg'
import Image2 from '../../assets/images/image2.svg'
import Image3 from '../../assets/images/image3.svg'

const Home = () => {
  const bannerItems = [
    { icon: <Icon iconName="heart" className={'text-white'} />, text: 'Support Independent Brands' },
    { icon: <Icon iconName="heart" className={'text-white'} />, text: 'Handcrafted with Love' },
    { icon: <Icon iconName="star" className={'text-white'} />, text: 'Premium Quality' }
  ];

  const cardItems = [
    { category: 'Earrings', price: '4000', image: Image1, link: '/products?search=bangles', text: 'Bangles' },
    { category: 'Earrings', price: '2400', image: Image2, link: '/products?search=rings', text: 'Rings' },
    { category: 'Earrings', price: '5600', image: Image3, link: '/products?search=chains', text: 'Chains' },
    { category: 'Earrings', price: '14400', image: Image1, link: '/products?search=payal', text: 'Payal' },
    { category: 'Earrings', price: '4000', image: Image2, link: '/products?search=pendant', text: 'Pendant' },
    { category: 'Earrings', price: '4000', image: Image3, link: '/products?search=earrings', text: 'Earrings' }]

  return <div className="bg-softPeach">
    <Carousel />
    <CardLayout cardItems={cardItems} />
    <Banner bannerItems={bannerItems} bannerColor={'bg-primaryNavy text-white'} />
    <PromoSection />
  </div>;
};

export default Home;
