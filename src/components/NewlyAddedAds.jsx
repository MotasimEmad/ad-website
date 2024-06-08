import React, { useEffect } from 'react';
import { getNewlyAddedAds } from '../redux/newlyAddedAdSlice';
import { useDispatch, useSelector } from 'react-redux';
import AdCard from './atoms/AdCard';

const NewlyAddedAds = () => {
  const { isLoading, ads } = useSelector((state) => state.newlyAddedAd);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewlyAddedAds());
  }, [dispatch]);

  const adsList = ads.map((ad) => (
    <AdCard key={ad.id} id={ad.id} ad={ad} />
  ));
  
  return (
    <section className="bg-white mt-24">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
            <h3 class="mb-6 text-3xl font-bold text-slate-900">Newly Added Ads</h3>
          </div>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Salami mustard spice tea fridge authentic Chinese food dish salt
            tasty liquor. Sweet savory foodtruck pie.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3 text-start">
        {isLoading ? "Loading ..." : adsList}
        </div>
      </div>
    </section>
  );
};

export default NewlyAddedAds;
