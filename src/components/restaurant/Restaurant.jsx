import restaurants from "../../mockData/restaurant.json";
import { RestaurantCard } from "./RestaurantCard";
import { ConfigDriveUI } from "../ConfigDriven/ConfigDrivenUI";
import { useState } from "react";

export const Restaurant = () => {
  const [restaurantList, setRestaurantList] = useState(restaurants);
  const [topRatedFilterApply, setTopRatedFilterApply] = useState(false);

  const updateList = () => {
    setTopRatedFilterApply((prev) => {
      const topRatedFilterApply = !prev;
      const restaurantData = restaurants.filter((restaurant) =>
        topRatedFilterApply ? restaurant.info.avgRating >= 4.5 : true
      );
      setRestaurantList(restaurantData);
      return topRatedFilterApply;
    });
  };
  console.log("hello", new Date().getMilliseconds());

  return (
    <div className="body">
      <div className="filter-container">
        <input name="search" placeholder="search" />
        <button>Search</button>
        <button className="top-rated-btn" onClick={updateList}>
          {topRatedFilterApply ? "All Restaunts" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
      <div style={{ marginTop: "108px" }}>
        <ConfigDriveUI />
      </div>
    </div>
  );
};
