import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./styles.css";
import mapArray from "./mapArray";

export default function App() {
  const [selectedPixels, setSelected] = React.useState([]);
  console.log("selectedPixels", selectedPixels);
  return (
    <TransformWrapper
      maxScale={40}
      doubleClick={{
        step: 1
      }}
    >
      <div className="App">
        <TransformComponent
          wrapperStyle={{
            maxWidth: "100%",
            maxHeight: "100vh"
          }}
        >
          <div className="container">
            {mapArray?.map((arr, i) => {
              return arr.map((el, idx) => {
                const isSelected = selectedPixels.find(
                  (x) => x === `${i}_${idx}`
                );
                return (
                  <div
                    key={`${i}_${idx}`}
                    className={el ? (isSelected ? "selected" : "pix") : "ele"}
                    onClick={() => {
                      if (el) {
                        if (isSelected) {
                          const newArr = [...selectedPixels];
                          const index = newArr.indexOf(`${i}_${idx}`);
                          if (index > -1) {
                            newArr.splice(index, 1);
                          }
                          setSelected(newArr);
                        } else {
                          setSelected((state) => [...state, `${i}_${idx}`]);
                        }
                      }
                    }}
                  ></div>
                );
              });
            })}
          </div>
        </TransformComponent>
      </div>
    </TransformWrapper>
  );
}
