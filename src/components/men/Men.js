import React from "react";
import items4 from "../../mockData/items4.json";
import ItemList3 from "../itemList/ItemList3";
 
function Men() {
    return (
      <section>
        <ItemList3 items={items4} /> 
      </section>
    );
  }
  
  export default Men;