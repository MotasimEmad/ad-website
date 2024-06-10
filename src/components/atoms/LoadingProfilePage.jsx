import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingProfilePage = () => {
  return (
    <section className="font-sans pt-20">
      <div className="p-6 mx-auto text-center">
        <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden">
          <Skeleton circle={true} height="100%" />
        </div>
        <Skeleton width="40%" height={30} style={{ margin: '16px auto' }} />
        <Skeleton width="50%" height={20} style={{ margin: '8px auto' }} />
        
        <div className="flex justify-center items-center mt-8 space-x-2">
          <Skeleton width="15%" height={40} />
          <Skeleton width="60%" height={40} />
        </div>

        <Skeleton width="40%" height={40} style={{ margin: '24px auto' }} />
      </div>
    </section>
  );
};

export default LoadingProfilePage;
