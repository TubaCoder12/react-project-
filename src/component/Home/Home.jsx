import React from "react";
import Hero from "../HeroSection/HeroSection";
import NewArrivals from "../NewArrival/NewArrival";
import NewsletterSection from "../NewLetterSection/NewLetterSection";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Home = () => {
  return (
    <>
      <Hero />
      <ErrorBoundary>
        <NewArrivals />
      </ErrorBoundary>

      <NewsletterSection />
    </>
  );
};

export default Home;
