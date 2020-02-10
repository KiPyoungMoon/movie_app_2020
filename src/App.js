import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "OilPasta",
    image: "https://t1.daumcdn.net/cfile/tistory/270E424051EC0DCC24",
    rating: 5.0
  },
  {
    id: 2,
    name: "FriedRiceWithKimchi",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fWf8OuWYakyqZHgt3eR9YwHaFQ%26pid%3DApi&f=1",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbob",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F44%2FDolsot-bibimbap.jpg%2F1200px-Dolsot-bibimbap.jpg&f=1&nofb=1",
    rating: 4.8
  },
  {
    id: 4,
    name: "Momil",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zvm75eHaQhJdrLE41vYP6QHaHa%26pid%3DApi&f=1",
    rating: 4.7
  }
];

function Food({name, image, rating}) { //component
  return(
    <div>
      <h3>I Love {name}!!</h3>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}></img>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {  //component
  return (
    <div>
      <h1>hello</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
// function FunctionName() {}은 각각 하나의 component이다.
// map() : array의 각각의 아이템에 대해 넘겨받은 함수를 각각 실행하고 해당 결과를 반환해준다.
