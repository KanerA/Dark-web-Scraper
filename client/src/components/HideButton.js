import React from "react";

function HideButton({ hideOnClick }) {
 return (
  <button className="btn hideTicketButton" onClick={hideOnClick}>
   hide
  </button>
 );
}

export default HideButton;
