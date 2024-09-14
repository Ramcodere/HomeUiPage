
import React, { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="bg-black text-white py-10 text-xs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0">
          {/* Logo and Description */}
          <div className="md:w-1/4 space-y-2">
            <h1 className="text-xl font-bold">Gelato</h1>
            <p className="text-gray-400">
              Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
            </p>

            {/* Get Started Button */}
            <button className="mt-2 px-4 py-1 bg-white text-black rounded-md text-xs">
              Get started
            </button>

            <div className="mt-4 flex justify-start space-x-2">
              
              <img
                src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg"
                alt="Google Play"
                className="h-10"
                

              />
              <img
                src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>

          {/* Columns Section */}
          <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h2 className="font-semibold text-white mb-2">Print on demand</h2>
              <ul className="space-y-1 text-gray-400">
                <li>What is print on demand?</li>
                <li>Product catalog</li>
                <li>Shipping and delivery</li>
                <li>Dropshipping products</li>
                <li>Pro sellers</li>
                <li>White label products</li>
                <li>Returns policy</li>
                <li>Global, yet local</li>
                <li>Sustainability</li>
                <li>Support</li>
              </ul>
            </div>

            {/* Integrations */}
            <div>
              <h2 className="font-semibold text-white mb-2">Integrations</h2>
              <ul className="space-y-1 text-gray-400">
                <li>Shopify</li>
                <li>Etsy</li>
                <li>WooCommerce</li>
                <li>Wix</li>
                <li>Squarespace</li>
                <li>BigCommerce</li>
                <li>API</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex justify-start space-x-4 mb-4">
                <h2 className="text-sm">Find Gelato on:</h2>
                <div className="flex space-x-4 text-gray-400 text-sm">
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-tiktok"></i>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
              <h2 className="font-semibold text-white mb-2">Start selling</h2>
              <ul className="space-y-1 text-gray-400">
                <li>Shopify</li>
                <li>Etsy</li>
                <li>WooCommerce</li>
                <li>Wix</li>
                <li>Squarespace</li>
                <li>BigCommerce</li>
                <li>API</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="font-semibold text-white mb-2">Company</h2>
              <ul className="space-y-1 text-gray-400">
                <li>Shipping and delivery</li>
                <li>Dropshipping products</li>
                <li>Pro sellers</li>
                <li>White label products</li>
                <li>Returns policy</li>
                <li>Global, yet local</li>
                <li>Sustainability</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Toggle */}
        <div className="flex justify-center mt-4 md:hidden">
          <button onClick={toggleDropdown} className="text-white bg-gray-800 px-4 py-2 rounded-md">
            {isOpen ? 'Hide Menu' : 'Show Menu'}
          </button>
        </div>

        {/* Bottom Section */}
        <div className="mt-10">
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col space-y-4 text-center">
              {/* Mobile Dropdown Content */}
              <div className="space-y-2">
                <h2 className="font-semibold text-white">Print on demand</h2>
                <ul className="space-y-1 text-gray-400">
                  <li>What is print on demand?</li>
                  <li>Product catalog</li>
                  <li>Shipping and delivery</li>
                  <li>Dropshipping products</li>
                  <li>Pro sellers</li>
                  <li>White label products</li>
                  <li>Returns policy</li>
                  <li>Global, yet local</li>
                  <li>Sustainability</li>
                  <li>Support</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="font-semibold text-white">Integrations</h2>
                <ul className="space-y-1 text-gray-400">
                  <li>Shopify</li>
                  <li>Etsy</li>
                  <li>WooCommerce</li>
                  <li>Wix</li>
                  <li>Squarespace</li>
                  <li>BigCommerce</li>
                  <li>API</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="font-semibold text-white">Start selling</h2>
                <ul className="space-y-1 text-gray-400">
                  <li>Shopify</li>
                  <li>Etsy</li>
                  <li>WooCommerce</li>
                  <li>Wix</li>
                  <li>Squarespace</li>
                  <li>BigCommerce</li>
                  <li>API</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="font-semibold text-white">Company</h2>
                <ul className="space-y-1 text-gray-400">
                  <li>Shipping and delivery</li>
                  <li>Dropshipping products</li>
                  <li>Pro sellers</li>
                  <li>White label products</li>
                  <li>Returns policy</li>
                  <li>Global, yet local</li>
                  <li>Sustainability</li>
                  <li>Support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4 text-center md:text-left">
            <button className="text-gray-400 text-xs border border-white px-6 py-2 rounded-md bg-transparent">
              English (India)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




