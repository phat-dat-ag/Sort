import React, { useRef } from "react";
import style from "./DataArea.module.css";
function DataArea({ width, height, datas }) {
  const refs = useRef([]);
  refs.current = datas.map((_, i) => refs.current[i] || React.createRef(9));

  async function BubbleSort() {
    const time = 2;
    const timeToChange = 10;
    console.log("Bubble Sort");
    console.log(datas);
    for (let i = 0; i < datas.length - 1; i++) {
      await new Promise((resolve) => setTimeout(resolve, time));
      refs.current[i].current.style.backgroundColor = "black";
      for (let j = datas.length - 1; j > i; j--) {
        await new Promise((resolve) => setTimeout(resolve, time));
        refs.current[j].current.style.backgroundColor = "red";
        await new Promise((resolve) => setTimeout(resolve, time));
        refs.current[j - 1].current.style.backgroundColor = "blue";
        if (datas[j].value < datas[j - 1].value) {
          var tempData = datas[j - 1];
          datas[j - 1] = datas[j];
          datas[j] = tempData;

          await new Promise((resolve) => setTimeout(resolve, timeToChange));
          refs.current[j - 1].current.style.height = `${datas[j - 1].height}px`;
          refs.current[j].current.style.height = `${datas[j].height}px`;
          await new Promise((resolve) => setTimeout(resolve, timeToChange));


        }
        await new Promise((resolve) => setTimeout(resolve, time));
        refs.current[j].current.style.backgroundColor = "#e8f4ff";
        await new Promise((resolve) => setTimeout(resolve, time));
        refs.current[j - 1].current.style.backgroundColor = "#e8f4ff";
      }
      await new Promise((resolve) => setTimeout(resolve, time));
      refs.current[i].current.style.backgroundColor = "#e8f4ff";
    }
    console.log(datas);
  }

  return (
    <>
      <button
        style={{ padding: "8px", fontSize: "20px" }}
        onClick={() => {
          BubbleSort();
        }}
      >
        Sắp xếp!
      </button>

      <div
        className={style.Data_Area}
        style={{
          width: 0.7 * width,
          height: 0.8 * height,
        }}
      >
        {datas.map(function (data, idx) {
          return (
            <span
              key={idx}
              className={style.Column}
              ref={refs.current[idx]}
              style={{
                height: data.height,
                width: data.width,
              }}
            ></span>
          );
        })}
      </div>
    </>
  );
}
export default DataArea;
