import React from "react";
import { Nested } from "@alptugidin/react-circular-progress-bar";

const CircleData = () => {
  return (
    <>
      <Nested
        circles={[
          { text: "Javascript", value: 48, color: "#4d4f52" },
          { text: "Java", value: 60, color: "#4d4f52" },
          { text: "Python", value: 90, color: "#4d4f52" },
          { text: "R", value: 38, color: "#4d4f52" },
          { text: "SQL", value: 70, color: "#4d4f52" },
        ]}
        sx={{
          bgColor: "#cbd5e1",
          fontWeight: "bold",
          fontFamily: "Trebuchet MS",
          strokeLinecap: "round",
          loadingTime: 1000,
          valueAnimation: false,
          intersectionEnabled: false,
        }}
      />
      <Nested
        circles={[
          { text: "Tensorflow", value: 32, color: "#4d4f52" },
          { text: "Scikit-learn", value: 60, color: "#4d4f52" },
          { text: "Power BI", value: 90, color: "#4d4f52" },
          { text: "Np,Pandas", value: 55, color: "#4d4f52" },
          { text: "Excel", value: 70, color: "#4d4f52" },
        ]}
        sx={{
          bgColor: "#cbd5e1",
          fontWeight: "bold",
          fontFamily: "Trebuchet MS",
          strokeLinecap: "round",
          loadingTime: 1000,
          valueAnimation: false,
          intersectionEnabled: false,
        }}
      />
    </>
  );
};

export default CircleData;
