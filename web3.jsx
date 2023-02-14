import { useState } from 'react';

function PropertySearchForm(props) {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(location, price);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location:
        <input type="text" value={location} onChange={handleLocationChange} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={handlePriceChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
function PropertyList(props) {
    const filteredProperties = props.properties.filter((property) => {
      return (
        property.location.includes(props.searchLocation) &&
        property.price <= props.searchPrice
      );
    });
  
    return (
      <ul>
        {filteredProperties.map((property) => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul>
    );
  }
  