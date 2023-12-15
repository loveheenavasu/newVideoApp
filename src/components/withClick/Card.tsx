import React from "react";

// interface CardProps {
//   text: string;
//   variant: "Front" | "Back";
// }

const Card = ({ children, variant }:any) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: variant === "Front" ? "#F0F0F0" : "#CCCCCC",
        // borderRadius: "8px",
        // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#333333",
        textAlign: "center",
      }}
    >
      {children}
    </div>
//    <children/>
  );
};

export default Card;
