import React from "react";
import { SocketListener } from "@/components/SocketListener";
import { Filters } from "./Filters";
import Markers from "./Markers";

function App() {
  return (
    <SocketListener>
      <Filters>
        <Markers />
      </Filters>
    </SocketListener>
  );
}

export default App;
