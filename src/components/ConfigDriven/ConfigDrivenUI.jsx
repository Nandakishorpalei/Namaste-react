import { useState } from "react";
import LandingPage from "./LandingPage";

export const ConfigDriveUI = () => {
  const [city, setCity] = useState("Delhi");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <div className="city-selector">
        <label htmlFor="city-select">Select City: </label>
        <select id="city-select" value={city} onChange={handleCityChange}>
          <option value="Bangalore">Bangalore</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>
      <LandingPage city={city} />
    </div>
  );
};
