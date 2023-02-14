import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PropertyDetails({ property }) {
  return (
    <div>
      <h2>{property.address}</h2>
      <p>{property.description}</p>
      <img src={property.images[0]} alt={property.address} />
      <p>Location: {property.location}</p>
    </div>
  );
}

function PropertyListings() {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/properties/${id}`);
      setProperty(response.data);
    };
    fetchData();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return <PropertyDetails property={property} />;
}