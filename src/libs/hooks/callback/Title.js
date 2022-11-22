import React from "react";

function Title() {
  console.log("title rendered");
  return <h2>UseRef Hook</h2>;
}

export default React.memo(Title);
