import React from "react";
import items2 from "../../mockData/items2.json";
import ItemList2 from "../itemList/ItemList2";
 
function Clothing() {
    return (
      <section>
        <ItemList2 items={items2} /> 
      </section>
    );
  } 
  
  export default Clothing;