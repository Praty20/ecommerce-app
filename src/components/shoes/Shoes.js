import React from "react";
import items5 from "../../mockData/items5.json";
import ItemList5 from "../itemList/ItemList5";
 
function Shoes() {
    return (
      <section>
        <ItemList5 items={items5} /> 
      </section>
    );
  }
  
  export default Shoes;