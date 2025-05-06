import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { CartProvider } from "@/contexts/CartContext";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Categories from "./pages/Categories";
import ProductCategory from "./pages/ProductCategory";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import Cart from "./pages/Cart";
import Reviews from "./pages/Reviews";
import ProductDetails from "./pages/ProductDetails";
import Account from "./pages/Account";
import NewArrivals from "./pages/NewArrivals";
import Sales from "./pages/Sales";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import ReturnPolicy from "./pages/ReturnPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Shippingpolicy from "./pages/ShippingPolicy";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

const RouteLoaderWrapper = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800); // Adjust duration
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading && <PageLoader />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<ProductCategory />} />
        <Route path="/watches" element={<ProductCategory categoryId="watches" />} />
        <Route path="/earbuds" element={<ProductCategory categoryId="earbuds" />} />
        <Route path="/bags" element={<ProductCategory categoryId="bags" />} />
        <Route path="/neckbands" element={<ProductCategory categoryId="neckbands" />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/account" element={<Account />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-policy" element={<Shippingpolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RouteLoaderWrapper />
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
