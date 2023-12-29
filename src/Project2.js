import React, { useState } from 'react';
export default function Project2() {
  const [image, setImage] = useState("https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1060&h=750&dpr=1")
  const handleclick = () => {
    setImage((prevImage) => (
      prevImage === "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1060&h=750&dpr=1"
        ? "https://images.pexels.com/photos/3879060/pexels-photo-3879060.jpeg?auto=compress&cs=tinysrgb&w=1000&h=750&dpr=1"
        : "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1060&h=750&dpr=1"
    ));
  };

  return (
    <div>
      <img src={image} alt="imagedisp" />
      <br />
      <button onClick={handleclick}>CHANGE IMAGE</button>
    </div>
  );
}
