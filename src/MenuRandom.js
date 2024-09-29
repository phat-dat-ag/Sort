import React, { useEffect, useState } from "react";

function MenuRandom({ height, width, onChangeDatas }) {
  const numbers = [20, 30, 40];

  const [indexNumber, setIndexNumber] = useState(0);

  useEffect(() => {
    var values = [];
    for (var i = 0; i < numbers[indexNumber]; i++)
      values.push(parseInt(Math.random() * 100));

    var max_value = values[0];
    values.forEach((value) => {
      if (value > max_value) max_value = value;
    });

    var datas = values.map((value) => {
      return {
        value: value,
        height: (value / max_value) * 0.7 * height,
        width: (0.5 * width) / values.length,
      };
    });
    onChangeDatas(datas);
  }, [indexNumber]);

  var style = {
    padding: "8px",
    margin: "0 20px",
    fontSize: "16px",
  };

  return (
    <div className="Menu" style={{ textAlign: "center" }}>
      <h1 style={{ margin: "0 auto" }}>Thuật toán: Bubble Sort</h1>
      <h2 style={{ margin: "0 auto 4px" }}>
        Chọn dãy số ngẫu nhiên cần sắp xếp
      </h2>
      <div>
        {numbers.map((number, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIndexNumber(idx);
            }}
            style={
              idx === indexNumber ? { ...style, backgroundColor: "red" } : style
            }
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MenuRandom;
