import React from "react";
import { useMarkers } from "./SocketListener";
import Marker from "./Marker";
import { useFilters } from "./Filters";

export default function Markers() {
  const markers = useMarkers();
  const filters = useFilters();

  const filteredMarkers = markers.filter(
    (marker) => filters.find((filter) => filter.type === marker.type)?.enabled
  );

  return (
    <>
      {filteredMarkers.map((marker) => (
        <Marker key={marker.id} position={marker.position} type={marker.type} />
      ))}
    </>
  );
}
