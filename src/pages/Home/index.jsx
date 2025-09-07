import React from "react";
import CardLayout from "../../containers/CardLayout";
import Banner from "../../containers/Banner";
import Icon from "../../components/Icon";
import PromoSection from "../../containers/PromoSection";
import goldSmith from '../../assets/images/gold-smith.jpg'

import SocialSection from "../../containers/SocialSection";
import { AppCarousel } from "../../components/Carousel/AppCarousel";
import { BrandName, cardItems, landingPageText } from "../../constants";
import Image from "../../components/Image";
import Text from "../../components/Text";
import ProductCard from "../../components/ProductCard";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  const bannerItems = [
    { icon: <Icon iconName="lightbulb" className={'text-white'} />, text: 'Support Independent Brands' },
    { icon: <Icon iconName="heart" className={'text-white'} />, text: 'Handcrafted with Love' },
    { icon: <Icon iconName="star" className={'text-white'} />, text: 'Premium Quality' }
  ];

  const deliveryBannerItems = [
    { icon: <Icon iconName="wrenchscrewdriver" className={'text-gray-600'} />, text: 'Custom Jewellery' },
    { icon: <Icon iconName="shieldcheck" className={'text-gray-600'} />, text: 'HallMark Jewellery' },
    { icon: <Icon iconName="truck" className={'text-gray-600'} />, text: 'Free Domestic Shipping' }
  ];

  const carouselImages = [
    'https://plus.unsplash.com/premium_photo-1708711288213-1726e476ce74?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1606293926249-ed22e446d476?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1628926379972-9843ad139a8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

  return <div className="bg-softPeach">
    <div className=" w-[100%] text-left relative">
      <div className="hidden md:flex flex-col justify-center px-12 absolute top-1/4 md:top-0 z-10 inset-0 bg-gradient-to-t from-softPeach to-transparent">
        <div className="flex">
          <Text variant="3xl" className="text-left mr-3 font-bold" >
            ⚜️
          </Text>
          <div><Text variant="4xl" className="text-left font-bold" >
            Crafted in Gold,<br /> Inspired by You</Text>
            <Text variant="lg" className="text-left mt-12 font-bold w-[60%]" >Explore rings, chains, necklaces & more that never go out of style.</Text>
          </div>
        </div>
      </div>

      <AppCarousel images={carouselImages} />
    </div>

    <CardLayout cardItems={cardItems} />

    <Banner bannerItems={bannerItems} bannerColor={'bg-primaryNavy text-white'} />

    <PromoSection />

    <div className="w-[90%] md:w-[75%] min-h-[32rem] m-auto shadow-md">
      <div className="flex flex-col md:flex-row justify-around items-center bg-primaryNavy my-12 rounded-md overflow-auto">
        <div className="w-full md:w-1/2 p-6 md:p-14">
          <Text variant="3xl" className="font-medium mb-5 text-gray-200 text-center md:text-left">Welcome to {BrandName} – Your Trusted Family Jewellers</Text>
          <Text variant="sm" className={'text-gray-300'}>{landingPageText}</Text>
        </div>
        <div className="w-full h-full md:w-1/2">
          <Image src={goldSmith} alt="Gold Smith" className="w-full h-[32rem] object-cover" />
        </div>
      </div>
    </div>

    <Banner bannerItems={deliveryBannerItems} bannerColor={'bg-gray-200 text-gray-800'} />

    <Testimonials />
    <SocialSection />
  </div>;
};

export default Home;
