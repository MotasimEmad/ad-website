import Categories from "../components/Categories";
import FeaturedAds from "../components/FeaturedAds";
import FeaturedAdverisers from "../components/FeaturedAdverisers";
import Header from "../components/Header";

import React, { useState, useEffect } from 'react';

async function fetchPremiumBanners() {
  try {
    // Make a GET request to the API endpoint for premium banners
    const response = await fetch('https://dev.hashtag-mybusiness.com/api/v1/get_premium_banners');

    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error('Failed to fetch premium banners');
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the data (assuming data is an array of premium banners)
    return data;
  } catch (error) {
    // Handle any errors that occur during the fetch process
    console.error('Error fetching premium banners:', error);
    // Optionally, you can throw the error to propagate it to the caller
    throw error;
  }
}

const HomePage = () => {
  const [premiumBanners, setPremiumBanners] = useState([]);

  useEffect(() => {
    // Fetch premium banners from the API when the component mounts
    fetchPremiumBanners()
      .then(data => {
        // Set the premium banners to state
        setPremiumBanners(data);

      })
      .catch(error => {
        // Handle errors if any
        console.error('Error fetching premium banners:', error);
      });
  }, []);

  return (
    <section>
      <Header />
      {premiumBanners.data && premiumBanners.data.length > 0 && (
        <div className="container my-12 py-2 mx-auto text-center">
          <div className="flex justify-center mt-10">
            <img className="object-cover w-full h-96 rounded-xl" src={premiumBanners.data[0].media[0].link} />
          </div>
        </div>
      )}

      <Categories />
      <FeaturedAds />

      {premiumBanners.data && (
        <div className="container my-12 py-2 mx-auto text-center">
          <div className="flex justify-center mt-10">
            <img className="object-cover w-full h-96 rounded-xl" src={premiumBanners.data[1].media[0].link} alt="Premium Banner 2" />
          </div>
        </div>
      )}

      <FeaturedAdverisers />
    </section>
  );
};

export default HomePage;
