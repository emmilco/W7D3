import React from 'react';

const ItemDetail = (props) => {
  return (
    <div>
      <li>Name {props.itemDetails.name}</li>
      <li>Name {props.itemDetails.happiness}</li>
      <li>Name {props.itemDetails.price}</li>
    </div>
  );
};

export default ItemDetail;
