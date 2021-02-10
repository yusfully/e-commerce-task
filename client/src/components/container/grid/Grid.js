import React from "react"
import style from "./grid.module.scss"

const Grid=({
    children,
    rowHeight,
    space,
    col,
    colTablet,
    colMobile,
    justifyItems,
  alignItems})=>{

    return(
        <div className={

            `${style.grid}
            ${style["col-l-8"]}
            g-l-${colTablet || "1"}
            g-s-${colMobile || "1"}
            sp-${space ? space : 0}
            justify-${justifyItems ? justifyItems : "center"}
            align-${alignItems ? alignItems : "center"} grid`}
        >
            {children}
        </div>
    )
}
export default Grid
