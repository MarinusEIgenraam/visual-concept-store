import React, { useState } from "react"; // <- note the added import of useState
import { useHistory } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <p className="centered m-5 normal">
          Durability. Real estate is durable. A building can last for decades or
          even centuries,<br></br>
          and the land underneath it is practically indestructible. As a result,
          real estate<br></br>
          markets are modelled as a stock/flow market.
        </p>
      </div>
    </>
  );
}
