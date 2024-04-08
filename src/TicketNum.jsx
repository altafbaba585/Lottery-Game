import React from "react";

function TicketNum({ num }) {
  return (
    <>
      <span
        className="TicketNum"
        style={{
          fontWeight: "bolder",
          fontSize: "50px ",
          color: "blue",
        }}
      >
        {num}
      </span>
    </>
  );
}

export default TicketNum;
