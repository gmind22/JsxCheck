// Creating Image Component
import React from 'react';

const Image = ({ productImage }) => {
  return <img src={productImage} alt="A watch"  style={{objectFit: "cover"}}/>;
};

export default Image;