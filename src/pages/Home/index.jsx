import React from "react";
import CardLayout from "../../containers/CardLayout";
import Banner from "../../containers/Banner";
import Icon from "../../components/Icon";
import PromoSection from "../../containers/PromoSection";
import Image1 from '../../assets/images/image1.svg'
import Image2 from '../../assets/images/image2.svg'
import Image3 from '../../assets/images/image3.svg'
import Image4 from '../../assets/images/image4.svg'
import Image5 from '../../assets/images/image5.svg'
import Image6 from '../../assets/images/image6.svg'
import Image7 from '../../assets/images/image7.svg'

import SocialSection from "../../containers/SocialSection";
import { AppCarousel } from "../../components/Carousel/AppCarousel";
import { cardItems } from "../../constants";

const Home = () => {
  const bannerItems = [
    { icon: <Icon iconName="lightbulb" className={'text-white'} />, text: 'Support Independent Brands' },
    { icon: <Icon iconName="heart" className={'text-white'} />, text: 'Handcrafted with Love' },
    { icon: <Icon iconName="star" className={'text-white'} />, text: 'Premium Quality' }
  ];

  const carouselImages = [Image4, Image5, Image6, Image7]

  return <div className="bg-softPeach">
    <AppCarousel images={carouselImages} />
    <CardLayout cardItems={cardItems} />
    <Banner bannerItems={bannerItems} bannerColor={'bg-primaryNavy text-white'} />
    <PromoSection />
    <SocialSection />
  </div>;
};

export default Home;
