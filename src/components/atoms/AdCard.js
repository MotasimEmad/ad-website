import { Link } from 'react-router-dom';
import placeholder from '../../images/placeholder.jpg';
import { formatDate } from "../DateUtils.js";

function AdCard({ id, ad }) {
    return (
      <Link to={`/ad/${id}`}>
      <div className="relative">
        <img
          className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
          src={ad.media[0].link}
          alt="ad image"
        />

        <Link to="/company-profile" className="absolute bottom-0 flex p-3 bg-white rounded-tr-md items-center">
          <img
            className="object-cover object-center w-8 h-8 rounded-full border border-secondary"
            src={ad.user.image ?? placeholder}
            alt="user image"
          />

          <div className="mx-4">
            <h1 className="text-sm text-gray-700">{ad.user.user_name}</h1>
          </div>
        </Link>
      </div>

      <h1 className="mt-6 text-xl font-semibold text-gray-800 ">
        {ad.title}
      </h1>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-1">
          <img
            className="object-cover object-center w-6 h-6 rounded-full"
            src={ad.category.image}
            alt="category image"
          />

          <div className="mx-4">
            <h1 className="text-sm text-gray-700">{ad.category.category}</h1>
          </div>
        </div>

        <p className="text-sm text-gray-500 font-bold">{ad.price} AED</p>
      </div>

      <hr className="w-32 my-6 text-blue-500" />

      <p className="text-sm text-gray-500 ">
        {ad.description}
      </p>

      <div className="flex items-center justify-between">
        <a
          href="#"
          className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
        >
          Read more
        </a>

        <p className="text-sm text-gray-500">{formatDate(ad.created_at)}</p>
      </div>
    </Link>
    );
 }
 
 export default AdCard;