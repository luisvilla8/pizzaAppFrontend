import React, { useState } from 'react'

export const PizzaBgItem = () => {
  const [attrPiza, setAttrPiza] = useState(
    {
      angle: Math.floor(Math.random() * 360),
      x: Math.floor(Math.random() * 290),
      y: Math.floor(Math.random() * 200),
    }
  );

  const { angle, x, y } = attrPiza;

  return (
    <svg
      width="47"
      height="55"
      viewBox="0 0 47 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`rotate(${angle}) translate(${x} ${y})`}
    >
      <path
        d="M40.9011 54.8898L0.457095 19.2457C0.457095 19.2457 10.4213 5.64856 19.9374 1.8849C29.4535 -1.87877 46.0227 1.22426 46.0227 1.22426L40.9011 54.8898Z"
        fill="#EDC63D"
      />
    </svg>
  );
}
