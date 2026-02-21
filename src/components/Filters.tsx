import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createContext, useContext, useEffect } from "react";
import { JSX, useState } from "react";
import { useMarkers } from "./SocketListener";
import ToggleSwitch from "./ToggleSwitch";
import { markerInfo } from "@/markerInfo";

const FilterContext = createContext<Array<{ type: string; enabled: boolean }>>(
  []
);

export default function Filters({
  children,
}: {
  children?: JSX.Element | Array<JSX.Element>;
}): JSX.Element {
  const markers = useMarkers();
  const availableFilters = Array.from(
    new Set(markers.map((marker) => marker.type))
  );
  const [filters, setFilters] = useState(
    availableFilters.map((filter) => ({
      type: filter,
      friendlyName: markerInfo[filter].friendlyName,
      enabled: true,
    }))
  );
  const [isOpen, setIsOpen] = useState(false);

  const allToggled = filters.every((filter) => filter.enabled);

  useEffect(() => {
    setFilters((prev) =>
      availableFilters.map((filter) => ({
        type: filter,
        friendlyName: markerInfo[filter].friendlyName,
        enabled: prev.find((f) => f.type === filter)?.enabled ?? true,
      }))
    );
  }, [markers]);

  return (
    <FilterContext.Provider value={filters}>
      <div className="fixed top-16 left-4 bg-[rgba(0,0,0,0.5)] text-zinc-100 rounded px-4 py-2 max-h-100 flex flex-col transition-all duration-100 z-10">
        <button
          className="cursor-pointer w-full flex flex-row items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filters{" "}
          <FontAwesomeIcon
            className={`inline transition-all duration-100 ease-in-out ${
              isOpen ? "rotate-90" : ""
            }`}
            icon={faChevronRight}
          />
        </button>
        <div
          className="mt-2 flex flex-col gap-1 overflow-y-auto grow pr-1"
          style={{ display: isOpen ? "flex" : "none" }}
        >
          {filters.length > 0 ? (
            <>
              <button
                className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] px-2 py-1 rounded text-sm cursor-pointer"
                onClick={() =>
                  setFilters((prev) =>
                    prev.map((f) => ({
                      ...f,
                      enabled: !allToggled,
                    }))
                  )
                }
              >
                {allToggled ? "Deselect All" : "Select All"}
              </button>
              {filters.map((filter) => (
                <ToggleSwitch
                  key={filter.type}
                  label={filter.friendlyName}
                  enabled={filter.enabled}
                  onToggle={() => {
                    setFilters((prevFilters) =>
                      prevFilters.map((f) =>
                        f.type === filter.type
                          ? { ...f, enabled: !f.enabled }
                          : f
                      )
                    );
                  }}
                />
              ))}
            </>
          ) : (
            <div className="">No filters available</div>
          )}
        </div>
      </div>
      {children}
    </FilterContext.Provider>
  );
}

function useFilters() {
  return useContext(FilterContext);
}

export { useFilters, Filters };
