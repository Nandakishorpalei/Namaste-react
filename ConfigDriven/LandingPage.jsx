import React, { useEffect, useState } from "react";
import config from "./ui-config.json"; // Assuming the JSON is in the same directory
import "./landingPage.css";

const LandingPage = ({ city }) => {
  const [cityConfig, setCityConfig] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Fetch city-specific configuration
    const selectedCityConfig = config.cities[city];
    if (selectedCityConfig) {
      setCityConfig(selectedCityConfig);
    } else {
      // Handle case where the city is not found in the config
      console.error("City configuration not found");
    }
  }, [city, query]);

  if (!cityConfig) {
    return <div>Loading...</div>;
  }

  const restaurantData = cityConfig.featuredRestaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="banner">
        <img src={cityConfig.bannerImage} alt={`${city} banner`} />
      </div>
      <div className="search-container">
        <input
          name="search"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="featured-restaurants">
        <h2>Featured Restaurants</h2>
        <div className="restaurants-list">
          {restaurantData.map((restaurant, index) => (
            <div key={index} className="restaurant">
              <img src={restaurant.image} alt={restaurant.name} />
              <h4>{restaurant.name}</h4>
              <h4>{restaurant.cuisine}</h4>
              <h4>{restaurant.time} minutes</h4>
              <p>{restaurant.offers}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="promotions">
        <h2>Promotions</h2>
        <ul>
          {cityConfig.promotions.map((promotion, index) => (
            <li key={index}>{promotion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
