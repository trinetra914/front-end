import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [savedProperties, setSavedProperties] = useState([]);
  const [contactHistory, setContactHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const savedPropertiesResponse = await axios.get("/api/saved-properties");
      setSavedProperties(savedPropertiesResponse.data);

      const contactHistoryResponse = await axios.get("/api/contact-history");
      setContactHistory(contactHistoryResponse.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Saved Properties</h2>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Price</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {savedProperties.map((property) => (
            <tr key={property.id}>
              <td>{property.address}</td>
              <td>{property.price}</td>
              <td>{property.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Contact History</h2>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Agent</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {contactHistory.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.propertyAddress}</td>
              <td>{contact.agentEmail}</td>
              <td>{contact.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}