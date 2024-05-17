import React, { useState } from "react";
import { initialState } from '../Components/data';
import ProductCard2 from '../Components/ProductCard2';

function CarouselProducts() {
  const [cards, setCards] = useState(initialState);

  const handleLeftClick = () => {
    const prevState = [...cards];
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
    prevState.find((f) => f.active === false).active = true;
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map((o) => o.pos)
      ) + 1;
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop().idx;
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map((o) => o.pos)
      ) - 1;
    prevState.find((f) => f.active === false).active = true;
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    setCards(prevState);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={handleLeftClick}
      >
        {"<"}
      </div>
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
        .map((card, index) => (
          <ProductCard2 
            key={index}
            nombre={card.nombre} 
            precio={card.precio} 
            imagen={card.imagen} 
            onAddToCart={() => console.log("Added to cart", card.nombre)} 
          />
        ))}
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={handleRightClick}
      >
        {">"}
      </div>
    </div>
  );
}

export default CarouselProducts;
