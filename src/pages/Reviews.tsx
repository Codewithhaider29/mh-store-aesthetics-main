import React, { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { Star } from 'lucide-react';
import allReviews from '@/data/reviews.json';
import { motion } from 'framer-motion';

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const reviewsPerPage = 6;

  // Function to load the next set of reviews
  const loadMoreReviews = useCallback(() => {
    if (loading) return;
    setLoading(true);

    // Simulate an API call or loading more reviews
    setTimeout(() => {
      const nextReviews = allReviews.slice(visibleReviews.length, visibleReviews.length + reviewsPerPage);
      setVisibleReviews((prevReviews) => [...prevReviews, ...nextReviews]);
      setLoading(false);
    }, 500);
  }, [visibleReviews, loading]);

  useEffect(() => {
    // Load the initial reviews
    loadMoreReviews();
  }, [loadMoreReviews]);

  // Intersection Observer logic for lazy loading
  const observer = React.useRef<IntersectionObserver | null>(null);

  const lastReviewRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreReviews();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, loadMoreReviews]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
  };

  const reviewCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-red-50">
      <Header />
      <motion.main
        className="flex-grow pt-28 pb-16 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <SectionHeading title="Customer Reviews" subtitle="What our customers are saying about our products" />

          <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <motion.div
                key={review.id}
                ref={index === visibleReviews.length - 1 ? lastReviewRef : null}
                className="bg-white rounded-lg shadow-lg p-6"
                variants={reviewCardVariants}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-mh-pink"
                  />
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.language}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-mh-pink">{review.product}</p>
                </div>

                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>

                <p className="text-gray-700">{review.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {loading && (
            <div className="mt-6 text-center">
              <p>Loading more reviews...</p>
            </div>
          )}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Reviews;