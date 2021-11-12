import { React, useState } from "react";

const Counter = () => {
  const [counter, updateCounter] = useState(0);

  const updateCounterHandaler = (type) => {
    if (type === "add") {
      updateCounter(counter + 1);
    } else {
      if (counter > 0) {
        updateCounter(counter - 1);
      }
    }
  };

  const findDuplicates = (data) => {
    let duplictes = [];
    for (let i = 0; i < data.length; i++) {
      if (data.indexOf(data[i]) !== i) {
        duplictes.push(data[i]);
      }
    }
    console.log(duplictes);
  };
  findDuplicates("vikrant kumar");
  return (
    <div>
      <button onClick={() => updateCounterHandaler("sub")}>-</button>
      {counter % 2 === 0 ? (
        <span className="countereven">{counter}</span>
      ) : (
        <span className="counterodd">{counter}</span>
      )}

      <button onClick={() => updateCounterHandaler("add")}>+</button>
    </div>
  );
};

export default Counter;
