import React, { useState, useEffect } from "react";
import axios from "axios";

function Property({ address, price, type, images }) {
  return (
    <div>
      <h3>{address}</h3>
      <p>Price: ${price}</p>
      <p>Type: {type}</p>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Property ${index + 1}`} />
      ))}
    </div>
  );
}

function PropertyListings() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/properties");
      setProperties(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {properties.map((property) => (
        <Property
          key={property.id}
          address={property.address}
          price={property.price}
          type={property.type}
          images={property.images}
        />
      ))}
    </div>
  );
}