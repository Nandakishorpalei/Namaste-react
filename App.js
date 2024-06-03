import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigDriveUI } from "./ConfigDriven/ConfigDrivenUI";
import restaurantData from "./restaurant.json";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul className="nav-item-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = restaurant.info;
  return (
    <div className="restaurant-card">
      <div className="restaurant-card-food-wrapper">
        <img
          className="restaurant-card-food"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
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

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input name="search" placeholder="search" />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {restaurantData.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          );
        })}
      </div>
      <div style={{ marginTop: "108px" }}>
        <ConfigDriveUI />
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="Footer"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
