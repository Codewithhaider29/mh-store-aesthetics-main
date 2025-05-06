import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Mail } from 'lucide-react'; // Only keeping the mail icon

const StayConnectedMHShopify = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          title="Stay Connected with MH"
          subtitle="Be the first to know about new arrivals, exclusive offers, and more."
          titleClassName="text-gray-900 font-semibold text-2xl sm:text-3xl"
          subtitleClassName="text-gray-600 mt-2"
          className="mb-10"
        />

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center max-w-md mx-auto mt-8">
          <Mail className="w-10 h-10 text-pink-500 mb-3" />
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Join Our Mailing List</h4>
          <p className="text-gray-600 text-sm mb-3">Sign up for exclusive updates and promotions.</p>
          <div className="w-full md:w-[600px] lg:w-[700px] flex">
  <input
    type="email"
    placeholder="Your Email Address"
    className="w-full py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200"
  />
  <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-r-md transition-colors">
    Subscribe
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default StayConnectedMHShopify;
