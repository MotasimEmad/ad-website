import PremiumAdvertiserCard from "./atoms/PremiumAdvertiserCard";
import React, { useEffect } from 'react';
import { getPremiumAdvertisers } from '../redux/premiumAdvertisersSlice';
import { useDispatch, useSelector } from 'react-redux';
import LoadingFeaturedAdverisers from "./atoms/LoadingFeaturedAdverisers";

const FeaturedAdverisers = () => {
  const { isLoading, premiumAdvertisers } = useSelector((state) => state.premiumAdvertisers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPremiumAdvertisers());
  }, [dispatch]);

  const premiumAdvertisersList = premiumAdvertisers.map((premiumAdvertiser) => (
    <PremiumAdvertiserCard key={premiumAdvertiser.id} premiumAdvertiser={premiumAdvertiser} />
  ));

  return (
    <section>
      {isLoading ? <LoadingFeaturedAdverisers /> :  <section className="bg-white mt-28">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
            <h3 class="mb-6 text-3xl font-bold text-slate-900">Featured Adverisers</h3>
          </div>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Salami mustard spice tea fridge authentic Chinese food dish salt
            tasty liquor. Sweet savory foodtruck pie.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3 text-start">
        {isLoading ? "Loading ..." : premiumAdvertisersList}
        </div>
      </div>
    </section>}
    </section>
   
  );
};

export default FeaturedAdverisers;
