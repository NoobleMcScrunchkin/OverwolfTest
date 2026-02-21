import React, { createContext, useContext } from "react";
import { JSX, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { MarkerType } from "@/markerInfo";

const socket = io("http://localhost:5000");

interface MarkerData {
  id: string;
  type: MarkerType;
  position: { x: number; y: number };
}

const MarkerContext = createContext<Array<MarkerData>>([]);

export default function SocketListener({
  children,
}: {
  children?: JSX.Element | Array<JSX.Element>;
}): JSX.Element {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [markers, setMarkers] = useState<Array<MarkerData>>([]);

  useEffect(() => {
    setIsConnected(socket.connected);
  }, [socket.connected]);

  useEffect(() => {
    socket.on("markers", (data) => {
      setMarkers(data);
      console.log(data);
    });

    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
      setMarkers([]);
    });

    return () => {
      socket.off("markers");
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <MarkerContext.Provider value={markers}>
      <div className="fixed bg-[rgba(0,0,0,0.5)] text-zinc-100 px-4 py-2 top-4 left-4 rounded z-10">
        {isConnected ? "Socket Connected" : "Socket Disconnected"}
      </div>
      {children}
    </MarkerContext.Provider>
  );
}

function useMarkers() {
  return useContext(MarkerContext);
}

export { useMarkers, SocketListener };
export type { MarkerData };
