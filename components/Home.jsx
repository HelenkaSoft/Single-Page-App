import { useState } from "react";

const Home = () => {
  const [itemName, setItemName] = useState("React powered (click)");
  return (
    <div className="home">
      <h1
        onClick={() => {
          setItemName("clicked");
        }}
      >
        {itemName}
      </h1>
      <p>sweet arrow func component</p>
    </div>
  );
};

export default Home;
