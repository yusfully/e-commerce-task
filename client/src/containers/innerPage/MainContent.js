import React, { useState } from 'react';


import style from  './main.module.scss';

const MainPage=({children})=>{




  return (
<div className={style.main}>
<div className="cover">
<div className="container">
{children}


    </div></div></div>
    )

}

 export default MainPage
