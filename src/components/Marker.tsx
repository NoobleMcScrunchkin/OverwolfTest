import { markerInfo, MarkerType } from "@/markerInfo";
import React, { JSX } from "react";

const MARKER_HEIGHT = 44;
const MARKER_WIDTH = 32;

export default function Marker({
  position,
  type,
  tooltip,
}: {
  position?: { x: number; y: number };
  type: MarkerType;
  tooltip?: { title: string; description: string };
  className?: string;
}): JSX.Element {
  return (
    <div
      className="relative"
      style={
        position
          ? {
              left: position.x - MARKER_WIDTH / 2,
              top: position.y - MARKER_HEIGHT,
              position: "fixed",
            }
          : undefined
      }
    >
      <img
        src={`/markers/${type}.png`}
        alt={tooltip?.title}
        className="transition-all duration-15 ease-in-out peer"
      />

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 hidden peer-hover:block bg-zinc-800 text-white rounded px-2 py-1 w-64">
        <div className="font-bold">
          {tooltip?.title ?? markerInfo[type].friendlyName}
        </div>
        <div className="text-sm">
          {tooltip?.description ?? markerInfo[type].description}
        </div>
      </div>
    </div>
  );
}
