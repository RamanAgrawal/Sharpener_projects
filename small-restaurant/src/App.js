import React from "react";
import AddItems from "./components/AddItems"
import DishList from "./components/Display/DishList"
import NavBar from "./components/NavBar";
function App() {

  return (
    <React.Fragment>
      <NavBar />
      <AddItems />
      <DishList />
    </React.Fragment>
  );
}

export default App;
