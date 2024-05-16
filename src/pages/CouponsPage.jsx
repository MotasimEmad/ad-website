import { useEffect } from "react";
import couponImage from "../images/coupons/coupon.png";
import couponInfoIcon from "../images/coupons/coupon_info.png";

const CouponsPage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const items = Array.from({ length: 40 }, (_, index) => index + 1);

  return (
    <section className="pt-20 px-16 md:px-40">
      <div class="text-gray-600 flex mt-8">
        <input
          type="search"
          placeholder="Search"
          x-model="q"
          class="w-full px-6 py-4 rounded-md text-sm outline-none focus:outline-none bg-gray-100"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 mt-8 md:mt-16 md:grid-cols-3 xl:grid-cols-8 text-start">
        {items.map((item) => (
          <div className="relative">
            <img src={couponImage} className="w-full" alt="Coupon" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-center text-gray-800 text-sm font-bold md:p-4">
                <p>HGHTDFCBHY</p>
              </div>
              <img src={couponInfoIcon} alt="Coupon Info Icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CouponsPage;
