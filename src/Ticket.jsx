import React from "react";
import TicketNum from "./TicketNum";

function Ticket({ Ticket }) {
  return (
    <div>
      {Ticket.map((num, idx) => {
        return <TicketNum num={num} key={idx} />;
      })}
    </div>
  );
}

export default Ticket;
