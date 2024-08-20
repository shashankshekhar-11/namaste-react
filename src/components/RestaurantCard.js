import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div
      className="res-card m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200"
      
    >
      <img
        className="res-logo rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="logo"
      />

      <div className="res-card-content">
        <h3 className='font-bold py-3 text-lg'>{name}</h3>
        <hr />
        <em>{cuisines.join(', ')}</em>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
