"use client";

import { useState } from "react";

export function Button() {
  const [name, setName] = useState("Bruno");

  function handleChangeName() {
    setName("Manoel");
  }

  return (
    <div>
      <button onClick={handleChangeName}>Alterar nome</button>
      <br />
      <h3>Nome:{name}</h3>
    </div>
  );
}
