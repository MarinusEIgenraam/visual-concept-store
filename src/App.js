// API
import React from "react";
import { Switch, Route } from "react-router-dom";

// CSS
import "./style/App.scss";

// Pages
import BrowseProducts from "./pages/BrowseProducts";
import HomePage from "./pages/Homepage";
import UserPage from "./pages/UserPage";
import ProductPage from "./pages/ProductPage";

// Elements
import Navigation from "./components/elements/Navigation";
import Footer from "./components/elements/Footer";

export default function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        {/* more pages to be added here later */}
        <Route path="/users" component={UserPage} />
        <Route path="/products" component={BrowseProducts} />
        <Route path="/products/:id" component={ProductPage} />

        <Route component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}
