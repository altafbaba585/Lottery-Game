// Lottery.js
import React, { useState } from "react";
import { generatenum, sum } from "./helper";
import Ticket from "./Ticket";

function Lottery({ n = 3, winningsum = 15 }) {
  const [ticketNumbers, setTicketNumbers] = useState(generatenum(n)); // Renamed Ticket to ticketNumbers
  const isWinning = sum(ticketNumbers) === winningsum;

  function NewTicket() {
    setTicketNumbers(generatenum(n)); // Updated to setTicketNumbers
  }

  return (
    <div>
      <h1>Lottery game</h1>
      <Ticket Ticket={ticketNumbers} />{" "}
      {/* Updated to pass ticketNumbers prop */}
      <button onClick={NewTicket}>Buy New Ticket</button>
      {isWinning ? (
        <h2 style={{ color: "greenyellow" }}>Congratulations!!! You Won</h2>
      ) : (
        <h5>You will win if you get 15 after adding the numbers</h5>
      )}
    </div>
  );
}

export default Lottery;
