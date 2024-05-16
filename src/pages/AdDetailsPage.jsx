import { FaWhatsapp } from "react-icons/fa";
import {
  IoChatbubbleEllipsesOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

import { LiaEyeSolid } from "react-icons/lia";
import { MdStarRate } from "react-icons/md";

import React, { useEffect, useState } from 'react';
import { getAdById } from '../redux/adDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import placeholder from '../images/placeholder.jpg';
import StarRating from "../components/StarRating";
import { formatDate } from "../components/DateUtils";

const AdDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, ad, error } = useSelector((state) => state.adDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdById(id));
  }, [dispatch, id]);
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const initialImages = ad.media || []; // Ensure ad.media is initialized as an array
  const [images, setImages] = useState(initialImages);

  const handleClick = (index) => {
    const newImages = [...images];
    const clickedImage = newImages.splice(index, 1);
    setImages([clickedImage[0], ...newImages]);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section>
      {isLoading ? (
        <div>Loading...</div>
      ) :
        <div className="font-sans pt-20">
          <div className="p-6 mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                <div className="bg-gray-100 rounded-xl">
                  {images.length > 0 && images[0].link && (
                    <img
                      src={images[0].link}
                      alt="Product"
                      className="w-full h-96 rounded object-cover"
                      onClick={() => handleClick(0)} // Handle click on the first image
                      style={{ cursor: 'pointer' }} // Add pointer cursor
                    />
                  )}
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-6 mx-auto">
                  {images.slice(1).map((image, index) => (
                    <div key={index} className="bg-gray-100 rounded-xl p-2">
                      <img
                        src={image.link}
                        alt={`Product${index + 2}`}
                        className="w-20 h-20 cursor-pointer rounded-xl"
                        onClick={() => handleClick(index + 1)} // Handle click on subsequent images
                        style={{ cursor: 'pointer' }} // Add pointer cursor
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 text-start">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-semibold text-gray-800 text-start">
                    {ad.title}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    {formatDate(ad.created_at)}
                  </p>
                </div>

                <p className="text-gray-500 my-8">
                  {ad.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                  <p className="text-gray-600 text-md font-semibold">{ad.price} AED</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2 mt-4">
                    <StarRating rates={ad.rates} />

                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 bg-transparent hover:bg-secondary border-2 border-secondary text-secondary hover:text-white text-sm font-semibold rounded"
                  >
                    <MdStarRate />

                    <span class="mx-1">Rate Ad</span>
                  </button>

                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  <a href={`https://wa.me/${ad.whatsapp_number}`} target="_blank"
                    className="flex items-center justify-center px-4 py-3 bg-secondary text-white text-sm font-semibold rounded"
                  >
                    <FaWhatsapp />

                    <span class="mx-1">Whatsapp</span>
                  </a>
                  <a
                    href={ad.share_link} target="_blank"
                    className="flex items-center justify-center px-4 py-3 bg-secondary text-white text-sm font-semibold rounded"
                  >
                    <IoShareSocialOutline />

                    <span class="mx-1">Share</span>
                  </a>

                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 bg-secondary text-white text-sm font-semibold rounded"
                  >
                    <IoChatbubbleEllipsesOutline />

                    <span class="mx-1">Chat</span>
                  </button>
                </div>

                <div className="flex items-center justify-between px-4 py-3 bg-transparent border-2 border-secondary text-secondary text-sm font-semibold rounded mt-8">
                  <span class="mx-1">Views</span>

                  <div className="flex items-center gap-1">
                    <LiaEyeSolid />
                    {ad.view_counts}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-start mt-8">
                    {ad.user && (
                      <img
                        src={ad.user.image ?? placeholder}
                        className="w-8 h-8 rounded-full border-2 border-secondary"
                      />
                    )}
                    {ad.user && (
                      <div className="ml-3">
                        <h4 className="text-sm font-semibold text-gray-500">
                          {ad.user.company_details.company_name}
                        </h4>
                        <div className="flex space-x-1 mt-1">
                          <StarRating rates={ad.user.rates} />
                          <p className="text-xs !ml-2 font-semibold text-gray-500">
                            {ad.user.company_details.ad_count} items
                          </p>
                        </div>
                        <p className="text-xs mt-4 text-gray-500">
                          The service was amazing. I never had to wait that long for
                          my food. The staff was friendly and attentive, and the
                          delivery was impressively prompt.
                        </p>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  );
};

export default AdDetailsPage;
