import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import { Slider } from '@/components/ui/slider';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productsData from '@/data/products.json';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductCategoryProps {
  categoryId?: string;
}

const ProductCategory = ({ categoryId: propCategoryId }: ProductCategoryProps) => {
  const params = useParams();
  const categoryId = propCategoryId || params.categoryId;

  // Filter states
  const [priceRange, setPriceRange] = useState<number[]>([0, 400]);
  const [showNew, setShowNew] = useState(false);
  const [showSale, setShowSale] = useState(false);
  const [sortOrder, setSortOrder] = useState<'price-low' | 'price-high' | 'name'>('name');
  interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    isNew: boolean;
    isSale?: boolean;
    discount?: number;
  }

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get the min and max prices for this category
  const getMinMaxPrices = () => {
    if (!categoryId || !productsData.productsByCategory[categoryId as keyof typeof productsData.productsByCategory]) {
      return [0, 400];
    }

    const products = productsData.productsByCategory[categoryId as keyof typeof productsData.productsByCategory];
    const prices = products.map(p => p.price);
    return [Math.floor(Math.min(...prices)), Math.ceil(Math.max(...prices))];
  };

  // Apply filters and sorting
  useEffect(() => {
    if (!categoryId || !productsData.productsByCategory[categoryId as keyof typeof productsData.productsByCategory]) {
      return;
    }

    let filtered = [...productsData.productsByCategory[categoryId as keyof typeof productsData.productsByCategory]];

    // Apply price filter
    filtered = filtered.filter(p => {
      const effectivePrice = p.isSale && p.discount
        ? p.price - (p.price * p.discount / 100)
        : p.price;
      return effectivePrice >= priceRange[0] && effectivePrice <= priceRange[1];
    });

    // Apply new items filter
    if (showNew) {
      filtered = filtered.filter(p => p.isNew);
    }

    // Apply sale items filter
    if (showSale) {
      filtered = filtered.filter(p => p.isSale);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const priceA = a.isSale && a.discount ? a.price - (a.price * a.discount / 100) : a.price;
      const priceB = b.isSale && b.discount ? b.price - (b.price * b.discount / 100) : b.price;

      if (sortOrder === 'price-low') {
        return priceA - priceB;
      } else if (sortOrder === 'price-high') {
        return priceB - priceA;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered as Product[]);
  }, [categoryId, priceRange, showNew, showSale, sortOrder]);

  // Fallback for invalid category
  if (!categoryId || !productsData.productsByCategory[categoryId as keyof typeof productsData.productsByCategory]) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-28 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p>The category you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const info = productsData.categoryInfo[categoryId as keyof typeof productsData.categoryInfo];
  const [minPrice, maxPrice] = getMinMaxPrices();

  const mobileFilterVariants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0, transition: { duration: 0.2 } },
  };

  const productGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const productCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 pb-16 px-4">
        <div className="container mx-auto mt-10">
          <SectionHeading
            title={info.title}
            subtitle={info.description}
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* Filters for mobile */}
            <div className="lg:hidden w-full">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="outline"
                className="w-full flex items-center justify-between"
              >
                <span className="flex items-center">
                  <Filter className="mr-2" size={18} />
                  Filter & Sort
                </span>
                {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>

              <motion.div
                variants={mobileFilterVariants}
                animate={showFilters ? 'open' : 'closed'}
                className="bg-white shadow-md rounded-lg p-4 mt-4 overflow-hidden"
              >
                {/* Mobile filters content */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[minPrice, maxPrice]}
                      min={minPrice}
                      max={maxPrice}
                      step={1}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value)}
                      className="mb-4"
                    />
                    <div className="flex justify-between">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Product Status</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={showNew}
                        onChange={() => setShowNew(!showNew)}
                        className="mr-2"
                      />
                      New Arrivals
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={showSale}
                        onChange={() => setShowSale(!showSale)}
                        className="mr-2"
                      />
                      On Sale
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-3">Sort By</h3>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as 'price-low' | 'price-high' | 'name')}
                    className="w-full p-2 border rounded"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-low">Price (Low to High)</option>
                    <option value="price-high">Price (High to Low)</option>
                  </select>
                </div>
              </motion.div>
            </div>

            {/* Sidebar filters for desktop */}
            <motion.div className="hidden lg:block w-64 shrink-0">
              <motion.div className="bg-white shadow-md rounded-lg p-6 sticky top-32">
                <h3 className="text-lg font-semibold mb-6 pb-2 border-b">Filters</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Price Range</h4>
                  <div className="px-2">
                    <Slider
                      defaultValue={[minPrice, maxPrice]}
                      min={minPrice}
                      max={maxPrice}
                      step={1}
                      value={priceRange}
                      onValueChange={(value) => setPriceRange(value)}
                      className="mb-4"
                    />
                    <div className="flex justify-between">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-white shadow-md rounded-lg p-6 mt-8 sticky top-64">
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Product Status</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={showNew}
                        onChange={() => setShowNew(!showNew)}
                        className="mr-2"
                      />
                      New Arrivals
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={showSale}
                        onChange={() => setShowSale(!showSale)}
                        className="mr-2"
                      />
                      On Sale
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-3">Sort By</h4>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as 'price-low' | 'price-high' | 'name')}
                    className="w-full p-2 border rounded"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-low">Price (Low to High)</option>
                    <option value="price-high">Price (High to Low)</option>
                  </select>
                </div>
              </motion.div>
            </motion.div>

            {/* Products grid */}
            <motion.div className="flex-grow">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={productGridVariants}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence>
                  {filteredProducts.map(product => (
                    <motion.div key={product.id} variants={productCardVariants}>
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        category={product.category}
                        isNew={product.isNew}
                        isSale={product.isSale}
                        discount={product.discount}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No products match your filter criteria</p>
                  <Button
                    className="mt-4 bg-mh-pink hover:bg-mh-pink/80"
                    onClick={() => {
                      setPriceRange([minPrice, maxPrice]);
                      setShowNew(false);
                      setShowSale(false);
                      setSortOrder('name');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategory;