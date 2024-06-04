import { CDN_URL_FOR_RESTAURANT_IMG } from "../../utils/constants";

export const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = restaurant.info;
  return (
    <div className="restaurant-card">
      <div className="restaurant-card-food-wrapper">
        <img
          className="restaurant-card-food"
          src={CDN_URL_FOR_RESTAURANT_IMG + cloudinaryImageId}
          alt="burger"
        />
      </div>
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <div className="restaurant-card-footer">
        <p>{avgRating} stars</p>
        <p>{sla.slaString}</p>
      </div>
    </div>
  );
};
