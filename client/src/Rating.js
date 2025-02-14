import React, { useState } from "react";

export default function Rating({ rating }) {
  let [rate, setRate] = useState(rating);
  function incrementRate() {
    setRate(rate + 1);
  }
  function decrementRate() {
    setRate(rate - 1);
  }

  return (
    <div>
      Rating: {rate}
      <br />
      <button type="button" className="btn btn-primary" onClick={incrementRate}>
        Up Vote
      </button>
      <button type="button" className="btn btn-primary" onClick={decrementRate}>
        Down Vote
      </button>
    </div>
  );
}
