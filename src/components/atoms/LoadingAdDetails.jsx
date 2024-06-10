import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingAdDetails = () => {
  return (
    <section className="font-sans pt-20">
      <div className="p-6 mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="bg-gray-100 rounded-xl">
              <Skeleton height={384} width="100%" />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-6 mx-auto">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="bg-gray-100 rounded-xl p-2">
                  <Skeleton width={80} height={80} />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 text-start">
            <div className="flex justify-between">
              <Skeleton width="60%" height={40} />
              <Skeleton width="30%" height={20} />
            </div>
            <Skeleton width="80%" height={20} style={{ marginTop: 16 }} />
            <Skeleton count={5} style={{ marginTop: 16 }} />
            <div className="flex flex-wrap gap-4 mt-4">
              <Skeleton width={100} height={20} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2 mt-4">
                <Skeleton width={80} height={20} />
              </div>
              <Skeleton width={100} height={40} />
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {[1, 2, 3].map((_, index) => (
                <Skeleton key={index} width={100} height={40} />
              ))}
            </div>
            <div className="flex items-center justify-between px-4 py-3 bg-transparent border-2 border-secondary text-secondary text-sm font-semibold rounded mt-8">
              <Skeleton width={60} height={20} />
              <Skeleton width={40} height={20} />
            </div>
            <div className="mt-8">
              <div className="flex items-start mt-8">
                <Skeleton circle width={32} height={32} />
                <div className="ml-3">
                  <Skeleton width={150} height={20} />
                  <Skeleton width={100} height={20} style={{ marginTop: 8 }} />
                  <Skeleton width={250} height={20} style={{ marginTop: 8 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingAdDetails;
