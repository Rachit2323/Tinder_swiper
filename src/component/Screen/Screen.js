import React, { useState } from "react";
import Main from "../Main/Main.js";
import "./Screen.css";

const Screen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      name: "akshara",
      image: "https://funmauj.b-cdn.net/test/523595.jpg",
      age: "23",
      bio: "developer",
      location: "delhi",
      about: "Fighter",
      interest: ["coffee", "chai", "chole bathure"],
      type:"casual"
    },
    {
      id: 2,
      name: "vishaka",
      image: "https://funmauj.b-cdn.net/test/523597.jpg",
      age: "22",
      bio: "Sap developer",
      location: "ramnagar",
      about: "Optimistic person",
      interest: ["coffee", "tea", "rajma"],
      type:"permanent",
    },
    {
      id: 3,
      name: "Anu",
      image: "https://funmauj.b-cdn.net/test/353433.jpg",
      age: "22",
      bio: "java developer",
      location: "kotdwara",
      about: "Looking for opportunity",
      interest: ["coffee", "chai", "daal","chawal","kadi"],
      type:"casual"
    },
    {
      id: 4,
      name: "Aditi",
      image: "https://i.pinimg.com/564x/31/38/6f/31386f05f3cca9582637320ad2c4c870.jpg",
      age: "22",
      bio: "MERN developer",
      location: "Noida",
      about: "Traveller",
      interest: ["bear", "coffee", "daal"],
      type:"casual"
    },
  ];

  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0 && currentIndex < cards.length - 1) {

        setCurrentIndex(currentIndex + 1);
      } else if (deltaX < 0 && currentIndex > 0) {

        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  return (
    <div
      className="tinder_card"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Main
        key={currentIndex}
        id={cards[currentIndex].id}
        name={cards[currentIndex].name}
        age={cards[currentIndex].age}
        bio={cards[currentIndex].bio}
        location={cards[currentIndex].location}
        about={cards[currentIndex].about}
        interest={cards[currentIndex].interest}
        image={cards[currentIndex].image}
        type={cards[currentIndex].type}
      />
    </div>
  );
};

export default Screen;
