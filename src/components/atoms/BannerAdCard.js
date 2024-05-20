import { Link } from 'react-router-dom';

function BannerAdCard({ id, ad }) {
    return (
      <Link to={`/ad/${id}`}>
      <div className="container my-12 py-2 mx-auto text-center">
          <div className="flex justify-center mt-10">
            <img className="object-cover w-full h-96 rounded-xl" src={ad.media[0].link} alt="Premium Banner 2" />
          </div>
        </div>
    </Link>
    );
 }
 
 export default BannerAdCard;