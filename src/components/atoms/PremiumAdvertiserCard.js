import { Link } from 'react-router-dom';
import placeholder from '../../images/placeholder.jpg';

function PremiumAdvertiserCard({ id, premiumAdvertiser }) {
    return (
      <Link to="/company-profile" className="border-2 border-gray-200 rounded-md px-6 py-2 bg-white hover:bg-gray-200 cursor-pointer">
      <div class="flex items-center gap-x-6">
        <img
          class="h-16 w-16 rounded-full"
          src={premiumAdvertiser.image ?? placeholder}
          alt="user image"
        />
        <div>
          <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {premiumAdvertiser.company_details.company_name}
          </h3>
        </div>
      </div>
    </Link>
    );
 }
 
 export default PremiumAdvertiserCard;