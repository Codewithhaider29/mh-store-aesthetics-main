import React from 'react';
import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import reviews from '../data/reviews.json';

const ReviewsCarousel = () => {
  return (
    <section className="py-16 px-4 bg-pink-50">
      <div className="container mx-auto">
        <SectionHeading title="Customer Reviews" subtitle="What our customers are saying" />

        <div className="mt-12 overflow-x-auto">
          <div className="flex gap-14 min-w-[1200px]">
            {reviews.slice(0, 5).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center w-[220px] flex-shrink-0"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-mh-pink"
                  />
                </div>
                <h4 className="font-bold text-lg mb-1">{review.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{review.language}</p>
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
