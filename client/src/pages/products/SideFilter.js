import React from "react";

import Sorting from "./Sorting"
import FilterBox from "./FilterBox"
import Filter from "./Filter"

const SideFilter = () => {



return (
  <div className="side-bar-container">
  <FilterBox title="Sorting" ><Sorting></Sorting></FilterBox>
  <FilterBox title="Brands"><Filter typeFilter="string" filter="manufacturer"></Filter></FilterBox>
  <FilterBox title="Tags"><Filter typeFilter="array"  filter="tags"></Filter></FilterBox>
  </div>
  );
};



export default SideFilter
