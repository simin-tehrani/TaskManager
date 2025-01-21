import React from "react";

interface Ichildren {
  children: React.ReactNode;
}

function Countainer({ children }: Ichildren) {
  return <div className="container mx-auto">{children}</div>;
}

export default Countainer;
