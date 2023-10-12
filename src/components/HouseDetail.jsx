import React, { useEffect, useState } from 'react';

function HouseDetail({ house }) {
  if (!house) {
    return <div>Дом не найден</div>;
  }
// function HouseDetail() {
//   const [houseInfo, setHouseInfo] = useState({title: "TETS1", description: "TETS1", price: "TETS1"})
//   useEffect(() => {
//     console.log("Сделай запрос им все будет )))")
//     setHouseInfo({title: "TETS", description: "TETS", price: "TETS"})
//   }, [])
 

return (
    <div className="house-container">
      <h2 className="house-title">{house.title}</h2>
      <div className="image-list">
  {house.Pictures.slice(0, 1).map((picture, index) => (
    <img
      key={index}
      className="house-image house-image-main"
      src={picture.img}
      alt={`House ${index + 1}`}
    />
  ))}
  {house.Pictures.slice(1).map((picture, index) => (
    <img
      key={index}
      className="house-image"
      src={picture.img}
      alt={`House ${index + 1}`}
    />
  ))}
</div>
      <p className="house-description">{house.description}</p>
      <p className="house-price">{house.price}</p>
    </div>
  );
}

export default HouseDetail;
