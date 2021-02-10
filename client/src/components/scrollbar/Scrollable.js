import React from "react";
import SmoothScrollbar from "smooth-scrollbar";
import Scrollbar from "./Scrollbar";

import "./scrollBar.scss";


const Scrollable=({children})=> {



    return (
      <Scrollbar>
        <div
          className={`scrol-container ${this.props.className}`}
          ref={this.container}
        >
          {children}
        </div>
      </Scrollbar>
    );

}
export default Scrollable;
