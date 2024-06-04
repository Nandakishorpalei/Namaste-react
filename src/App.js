import React from "react";
import ReactDOM from "react-dom/client";
import { Restaurant } from "./components/restaurant/Restaurant";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Restaurant />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
