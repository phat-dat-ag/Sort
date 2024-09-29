import React, { useState } from "react";
import style from "./App.module.css";
import MenuRandom from "./MenuRandom";
import DataArea from "./DataArea";

function App() {
  const hei = 700;
  const wid = 1500;
  const [datas, setDatas] = useState([]);

  function handleOnChangeDatas(newDatas) {
    setDatas(newDatas);
  }

  return (
    <div className={style.App}>
      <MenuRandom
        width={wid}
        height={hei}
        onChangeDatas={handleOnChangeDatas}
      ></MenuRandom>

      <DataArea width={wid} height={hei} datas={datas}></DataArea>
    </div>
  );
}

export default App;
