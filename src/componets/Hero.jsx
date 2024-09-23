

import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Text and Shopify Rating */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Print on demand for your ecommerce business
          </h1>
          <p className="text-lg md:text-x text-gray-600 mt-4 font-bold">
            Sign up for free and only pay for what you sell
          </p>
          <p className="text-base md:text-lg text-gray-600 mt-1">
            Turn your passion into profit with the world’s largest print on demand network.
          </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
            {/* <button className="bg-black text-white font-bold py-2 px-6 rounded"> */}
            <button className="text-white bg-black text-xs border border-black px-4 py-2 rounded-md  mt-4">

              {/* bg-transparent */}
              Get started for free
            </button>

          </div>



          <div className="flex items-center mt-8">
            <div className="text-right">
              <img
                src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg"
                alt="Shopify Logo"
                className="w-20 mr-2"
              />

              <div className="flex items-center space-x-1">
                <span className="text-green-500 text-lg font-bold">4.8/ 5</span>
              </div>
              <p className="text-gray-500 text-sm">based on 887 reviews</p>
            </div>
          </div>




        </div>
        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/"
            alt="Hero Mockup"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-16 custom2">
        <div className=" p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="text-center flex-1">
              <p className="text-2xl font-bold text-gray-800">90%</p>
              <p className="text-gray-600">of all orders are produced locally</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-2xl font-bold text-gray-800">90%</p>
              <p className="text-gray-600">of orders arrive within 5 days of ordering</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-2xl font-bold text-gray-800">140+</p>
              <p className="text-gray-600">print providers across 32 countries</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section - Image and Details */}

      <div className="mt-16 custom0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why choose Gelato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div>
            <img
              src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/"
              alt="Gelato Image"
              className="w-full max-w-xs md:max-w-md"
            />
          </div>



          <div className="px-4 md:px-0">
            <ul className="list-disc list-inside text-gray-600 space-y-4">
              <li>
                <strong className="text-gray-800">World's Largest Network</strong>
                <p className="ml-6 text-gray-700">With over <span className="font-semibold">140+ print partners</span> across 32 countries, Gelato ensures your business is connected globally.</p>
              </li>
              <li>
                <strong className="text-gray-800">Sell Globally, Produce Locally</strong>
                <p className="ml-6 text-gray-700">Our local production model means your products are made closer to your customers, no matter where they are, reducing shipping times and costs.</p>
              </li>
              <li>
                <strong className="text-gray-800">100% Free Editing Tools</strong>
                <p className="ml-6 text-gray-700">Customize your products effortlessly with our suite of free editing tools designed for creativity and simplicity.</p>
              </li>

              <li>
                <strong className="text-gray-800">High-Quality Products</strong>
                <p className="ml-6 text-gray-700">We collaborate with industry-leading brands to provide top-tier products your customers will love.</p>
              </li>
              <li>
                <strong className="text-gray-800">Creativity with Shutterstock</strong>
                <p className="ml-6 text-gray-700">Explore millions of images and graphics from Shutterstock to create unique, sellable products.</p>
              </li>
              <li>
                <strong className="text-gray-800">Seamless 1-Click Integration</strong>
                <p className="ml-6 text-gray-700">Easily connect to platforms like Shopify and Etsy, and start selling with our 1-click integration.</p>
              </li>
            </ul>
          </div>




        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-16 custom-section">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Accelerate business growth with innovative design tools and apps
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              See how our cutting-edge solutions can help you reach new customers and maximize your profits.
            </p>
            <button className="bg-black text-white font-bold py-2 px-6 rounded mt-4">
              Get started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/"
              alt="Image 1"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/"
              alt="GelatoConnect Image"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>

          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              GelatoConnect
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry
            </p>
            <button className="bg-black text-white font-bold py-2 px-6 rounded mt-4">
              Learn more
            </button>
          </div>







        </div>
      </div>

      <div className="mt-16 custom-section">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Meet GelatoConnect at Printing United
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.
            </p>
            <button className="text-black text-xs border border-black px-4 py-2 rounded-md bg-transparent mt-4">
              Book meeting
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://a.storyblok.com/f/165154/1280x720/5d47159829/gelato-printing-united-2024.png/m/1000x0/"
              alt="Printing United Image"
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

























